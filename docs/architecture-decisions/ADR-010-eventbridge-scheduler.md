# ADR-010: Scraper Scheduling — cron-job.org

**Status:** Accepted

**Date:** 2026-06-27

## Context

The Python scraper must run automatically every hour to fetch fresh articles. We need a free, reliable scheduling service that can trigger the scraper on a regular basis.

## Decision

We use **cron-job.org** – a free online cron service – to schedule the scraper.

- **Schedule:** `0 * * * *` (every hour at minute 0).
- **Action:** HTTP GET request to `https://news-pulse-backend.onrender.com/ingest/trigger`
- **Headers:** None required (the endpoint is optionally protected by JWT; we can remove the auth guard or use a shared secret header – for the assessment, we’ll keep the endpoint public and rely on rate limiting to prevent abuse, or we can add a simple API key header if desired).
- **TriggeredBy:** The backend will receive the request and set `triggered_by = 'scheduler'` in the `ingest_jobs` table, distinguishing it from manual API triggers.

## Why

- cron-job.org is **completely free** – no credit card required, unlimited jobs.
- It sends HTTPS requests, which is sufficient for triggering our API.
- The platform is reliable and widely used for this purpose.
- No additional infrastructure or environment variables are needed.
- The existing `triggered_by` field in `ingest_jobs` already supports `'scheduler'`, so the system knows how the job was started.

## Alternatives Considered

- **Render Cron Jobs** – not free ($7/month) and not suitable for a free‑tier assessment.
- **AWS EventBridge + SSM** – more complex, requires AWS setup and IAM roles, and is not free beyond the free tier.
- **PM2 cron (on EC2)** – would need a persistent VM; we don't use EC2.
- **cron-job.org** – exactly meets the need with zero cost.

## Consequences

- The cron job makes an HTTP request to the backend – this is a simple, reliable trigger mechanism.
- The backend must be publicly accessible (it is, on Render).
- If the backend is down or slow, cron-job.org may retry (configurable) or miss a run – acceptable for a news timeline.
- The scheduler is external to our system, so we have no direct logs from cron-job.org – but we can monitor success via the `ingest_jobs` table in our database, which records every run and its outcome.
- The `triggeredBy` field distinguishes scheduled runs from manual ones, which is useful for analytics and debugging.

## Date

2026-06-27