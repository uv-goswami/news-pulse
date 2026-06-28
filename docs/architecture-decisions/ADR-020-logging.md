# ADR-020: Logging and Observability Strategy

## Status
Accepted – Implemented

## Context
On a live EC2 instance, I needed visibility into the API and scraper behaviour to debug issues.

## Decision
**Fastify API**: uses `pino` (built‑in logger). In development, logs are prettified; in production, JSON logs are captured by PM2.
- Log level: `LOG_LEVEL` env variable (`info` by default).

**Python scraper**: uses the standard `logging` module with `INFO` level by default.

**Log access:** On Render, logs are available in the dashboard for each service and cron job. No additional setup required.

**What is logged**:
- Every HTTP request (method, URL, status, latency) – Fastify does this automatically.
- Every scraper run (start, feeds fetched, articles parsed, clusters generated, duration).
- Errors with stack traces.
- JWT auth failures (without logging the token itself).

## Why
- `pino` is the fastest Node.js logger and integrates seamlessly with Fastify.
- PM2 automatically rotates log files (with `pm2-logrotate` module).
- JSON logs are machine‑parseable, allowing easy filtering with `jq` on the command line.

## Alternatives Considered
**Winston** – popular but not integrated with Fastify out‑of‑the‑box.  
**DataDog / New Relic** – full APM, but would require paid subscriptions and additional setup.  
**No logging** – unacceptable; errors would be invisible.

## Consequences
- No centralised log aggregation or alerting – we must manually check logs. Acceptable for an assessment; a production system would use CloudWatch Alarms.
- Log files are stored on the EC2 instance; disk usage is managed by PM2’s rotation.

## Date
2026-06-27