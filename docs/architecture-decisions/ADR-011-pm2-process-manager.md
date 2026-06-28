# ADR-011: Process Management — Render’s Built‑in Service Manager

**Status:** Accepted

**Date:** 2026-06-27

## Context

On a traditional VM, we would use PM2 to keep the Node.js API running. Since we are deploying on Render, we rely on the platform’s process management.

## Decision

We do **not** use PM2 or any other process manager. Render’s Web Service automatically restarts the Node.js process if it crashes, and runs it in a managed container.

For the Python scraper, we use Render’s Cron Job, which runs the script as a one‑off task – no process manager needed.

## Why

- Render handles restarts, logging, and scaling automatically.
- Fewer dependencies and less configuration.
- The platform’s health checks and restart policies are sufficient for this project.

## Alternatives Considered

- **PM2 on a self‑managed VM** – would be needed if we used EC2, but we don’t.
- **systemd** – not applicable on Render.
- **Docker + restart policies** – possible but overkill.

## Consequences

- The Node.js process runs in a single container; if it crashes, Render restarts it.
- We do not have to write an `ecosystem.config.js` file.
- The cron job runs separately and does not require a persistent process.