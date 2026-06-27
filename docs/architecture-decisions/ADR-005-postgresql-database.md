# ADR-005: PostgreSQL as the Primary Database

## Status
Accepted – Implemented

## Context
The data model is clearly relational – articles belong to clusters, clusters have many articles. I needed a database that can store structured data with indexes and support concurrency from both Python and Node.js.

## Decision
I chose PostgreSQL 15 hosted on AWS RDS (free tier: `db.t3.micro`).

## Why
- Relational data model fits perfectly – one‑to‑many relationships are natural and indexed.
- PostgreSQL supports full‑text search (`tsvector`) and JSONB, which we use for storing `top_terms` as JSON.
- AWS RDS is managed – backups, patching, and failover are handled, which is ideal for a live assessment.
- Both Python and Node.js have mature drivers (`psycopg2`, `@prisma/client`).

## Alternatives Considered
**MongoDB Atlas** – document model would be awkward for one‑to‑many relationships; joins across collections are slow.  
**SQLite** – good for local development but cannot be used for a multi‑process concurrent deployment (Python + Node.js writing simultaneously). Rejected for production.

## Consequences
- RDS costs money after the free tier, but the `db.t3.micro` is included in the 12‑month free tier.
- The Python scraper and Node.js API share the same database instance – intentional and correct for this architecture.

## Date
2026-06-27