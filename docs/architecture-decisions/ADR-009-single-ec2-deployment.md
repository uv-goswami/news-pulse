# ADR-009: Deployment Platform — Render

**Status:** Accepted

**Date:** 2026-06-27

## Context

We need to deploy the application live for review. The assessment suggests Render, Railway, Vercel, or similar. We chose **Render** because it offers integrated hosting for frontend static sites, backend web services, and managed PostgreSQL, all with a generous free tier.

## Decision

We deploy the following components on Render:

| Component | Render Service Type |
|-----------|----------------------|
| Next.js frontend | Static Site (or Web Service if SSR is needed) |
| Node.js backend API | Web Service |
| PostgreSQL database | Render Postgres (managed) |
| Python scraper (scheduled) | Cron Job (runs the scraper script on a schedule) |

**Environment variables** are configured in the Render dashboard – no secrets are committed.

## Why

- **Simple setup** – Render handles SSL, automatic deploys from GitHub, and health checks.
- **Free tier** – sufficient for the assessment (backend web service sleeps after inactivity, but cold starts are acceptable).
- **Managed PostgreSQL** – no manual setup or maintenance.
- **Cron Jobs** – Render provides a built‑in scheduler to run the scraper script every hour, eliminating the need for external services like EventBridge.
- **Logs** – Render captures logs from all services, accessible via the dashboard.

## Alternatives Considered

- **AWS EC2 + RDS** – more flexible but requires manual configuration of Nginx, PM2, SSL, and monitoring. Overkill for the assessment.
- **Vercel (frontend) + Railway (backend)** – would work, but using a single platform simplifies management.
- **Docker + Render** – we could containerise the backend and scraper, but for simplicity we run them directly as Node and Python services.

## Consequences

- The backend is a single web service that runs the Fastify API and also hosts the in‑memory job worker.
- The scraper runs as a separate cron job that executes `python scraper/main.py` every hour. It does not interfere with the API.
- Postgres connection URL is provided by Render – no separate RDS setup.
- The frontend is built and deployed automatically on push to the `frontend` branch (or main).
- We must configure the frontend’s `NEXT_PUBLIC_API_URL` to point to the backend service URL.
- Cold starts on free tier may cause a few seconds delay – acceptable for review.