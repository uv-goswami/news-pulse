# ADR-014: Job Queue Strategy for Ingest Pipeline

## Status
Accepted – Implemented

## Context
When `POST /ingest/trigger` is called, it must run the Python scraper (takes 30–60 seconds). The API cannot block the HTTP response for that long, so an asynchronous job pattern is required.

## Decision
I used a simple database‑backed job queue:
1. `POST /ingest/trigger` inserts a row in `ingest_jobs` (`status: 'pending'`) and returns a `jobId` immediately (202 Accepted).
2. A Node.js worker (a `setInterval` loop) polls for pending jobs and spawns the Python process via `child_process.spawn`.
3. On completion or failure, the worker updates the job status.
4. The frontend polls `GET /ingest/status/:jobId` every 3 seconds until the job is done.

## Why
- No additional infrastructure – the `ingest_jobs` table in PostgreSQL is sufficient.
- Job history is persisted – we can see past runs and any errors.
- Simpler than using a dedicated message queue like BullMQ or SQS.

## Alternatives Considered
**BullMQ (Redis)** – production‑grade but adds a new dependency (Redis).  
**AWS SQS** – managed but requires more configuration (queues, IAM, consumers).  
**Long polling** – holding the HTTP connection open for >30 seconds can hit timeouts.  
**WebSockets** – elegant but adds socket infrastructure; polling is simpler.

## Consequences
- Only one job runs at a time – the worker checks for a `'running'` job before starting a new one.
- The frontend must implement polling logic, which is straightforward with `setInterval`.

## Date
2026-06-27