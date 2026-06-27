# ADR-008: Rate Limiting Strategy

**Status:** Accepted

**Date:** 2026-06-27

## Context

Public API endpoints (especially `/timeline` and `POST /ingest/trigger`) need protection against accidental hammering or intentional abuse.

## Decision

I used `@fastify/rate-limit` with the following limits:

| Route Group | Limit | Window |
|-------------|-------|--------|
| Global (all routes) | 100 requests | 1 minute |
| `POST /ingest/trigger` | 5 requests | 1 minute |
| `POST /auth/login` | 10 requests | 15 minutes |
| `POST /auth/refresh` | 20 requests | 1 minute |
| `GET /timeline` | 60 requests | 1 minute |

Rate limit state is stored **in‑memory** (default for the plugin). On limit exceeded, the API returns `429 Too Many Requests` with a `Retry-After` header.

## Why

- In‑memory store is sufficient for a **single Render web service instance** – we only run one instance on the free tier.
- `@fastify/rate-limit` integrates directly with Fastify and is easy to configure per route.
- No external Redis or database dependency for rate limiting – keeps the setup simple.

## Alternatives Considered

**Redis‑backed rate limiting** – needed for multi‑instance deployments, but overkill for a single instance on Render’s free tier.  
**Nginx rate limiting** – would be more robust but requires additional configuration; not applicable in Render’s containerised environment.  
**No rate limiting** – would allow spamming the expensive scraper endpoint.

## Consequences

- Rate limit counters are lost on service restart – acceptable at this scale.
- The scraper endpoint is protected from being triggered too frequently.
- If we later scale to multiple instances, we can switch to a Redis store without changing the application logic.

## Date

2026-06-27