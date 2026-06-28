# ADR-007: JWT Authentication with Refresh Token Rotation

## Status
Accepted – Implemented

## Context
The API needs authentication – specifically, `POST /ingest/trigger` must be protected from public abuse. The assessment requested full JWT auth with refresh tokens and rate limiting.

## Decision
I implemented JWT‑based auth with:
- **Access token** – TTL 15 minutes, stored in memory (React state).
- **Refresh token** – TTL 7 days, stored as `httpOnly` cookie.

**Flow**:
1. `POST /auth/login` – validates credentials, returns access token in body, sets refresh token cookie.
2. Client sends `Authorization: Bearer <accessToken>` on protected requests.
3. On access token expiry, client calls `/auth/refresh` – server reads the cookie, validates the refresh token, issues a new access token, and rotates the refresh token (old one invalidated).
4. `POST /auth/logout` – clears the cookie and invalidates the refresh token in the database.

**Refresh token rotation**: every refresh call issues a new refresh token and marks the old one as used. If a used token is presented again (replay attack), the entire token family is invalidated.

**Protected routes**: only `POST /ingest/trigger` and `GET /ingest/status/:jobId` require authentication. Read endpoints (`/clusters`, `/timeline`) are public – news data is not sensitive.

## Why
- `httpOnly` cookies protect refresh tokens from XSS attacks.
- Short‑lived access tokens limit damage if leaked.
- `@fastify/jwt` and `@fastify/cookie` handle signing/verification and cookie plumbing seamlessly.
- Token rotation is a security best practice and demonstrates a production‑grade pattern.

## Alternatives Considered
**API key only** – simpler but static, and less secure for long‑lived access.  
**Session‑based (cookies + server‑side sessions)** – stateful, requires session store; more complexity.

## Consequences
- Requires a `refresh_tokens` table in PostgreSQL to track used and revoked tokens.
- The frontend must handle 401 responses by calling `/auth/refresh` before retrying the original request (interceptor pattern).

## Date
2026-06-27