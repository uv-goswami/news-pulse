
# ADR-016: Environment Configuration Strategy

**Status:** Accepted

**Date:** 2026-06-27

## Context

Three services (scraper, backend, frontend) each need environment‑specific configuration (database credentials, JWT secrets, API URLs). I needed a secure, clear strategy that works across local development and Render production.

## Decision

- Each service has a `.env.example` file committed to the repo with all variable names and placeholder values (no real secrets).
- Real `.env` files are **never committed** (added to `.gitignore`).
- On **Render**, environment variables are set in the **Render Dashboard** for each service:
  - Backend Web Service: `DATABASE_URL`, `JWT_SECRET`, `PORT`, `FRONTEND_URL`, etc.
  - Frontend Static Site: `NEXT_PUBLIC_API_URL` (public, baked into the build).
  - Cron Job: `DATABASE_URL`, `LOG_LEVEL`, etc. (passed to the scraper script).
- Variable naming convention: `SERVICE_VARIABLE_NAME` (e.g. `DATABASE_URL`, `JWT_SECRET`, `NEXT_PUBLIC_API_URL`).
- All `NEXT_PUBLIC_` prefixed vars are baked into the Next.js build at build time – they are not sensitive.

**Required variables per service:**

```
# scraper (Render Cron Job)
DATABASE_URL=postgresql://...
LOG_LEVEL=info
CLUSTER_SIMILARITY_THRESHOLD=0.25
MAX_ARTICLES_PER_FEED=50

# backend (Render Web Service)
DATABASE_URL=postgresql://...
JWT_SECRET=...
JWT_REFRESH_SECRET=...
PORT=3001
FRONTEND_URL=https://news-pulse-frontend.onrender.com
NODE_ENV=production
LOG_LEVEL=info

# frontend (Render Static Site)
NEXT_PUBLIC_API_URL=https://news-pulse-backend.onrender.com
```

## Why

- Zero secrets in git history – all secrets are stored in Render’s secure environment variable store.
- `.env.example` files serve as living documentation – developers know exactly what variables are needed.
- Render’s dashboard makes it easy to update variables without redeploying (though some services require a restart).

## Alternatives Considered

**AWS Secrets Manager / SSM Parameter Store** – more secure but adds complexity and cost; not needed for an internship project.  
**Hard‑coded values** – insecure and not maintainable.  
**`.env` files on disk (like EC2)** – not applicable on Render; environment variables are injected at runtime.

## Consequences

- Manual step to set up variables in the Render dashboard for each service – documented in the deployment guide.
- Changing a variable requires updating it in the Render dashboard and restarting the affected service (or waiting for the next deploy).
- The frontend’s `NEXT_PUBLIC_*` variables are baked at build time – changing them requires a new build and deploy.

## Date

2026-06-27
