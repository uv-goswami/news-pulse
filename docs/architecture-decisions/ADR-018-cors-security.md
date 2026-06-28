# ADR-018: CORS and Security Headers Policy

## Status
Accepted – Implemented

## Context
The frontend (on Vercel/EC2) makes requests to the Fastify API (on EC2). The browser’s CORS policy would block these cross‑origin requests unless the API explicitly permits them.

## Decision
I used `@fastify/cors` with an explicit allow list:
```js
origin: [
  'http://localhost:3000',
  'https://news-pulse-frontend.onrender.com',
  process.env.FRONTEND_URL 
],,
credentials: true,
methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']

```
I also enabled security headers via @fastify/helmet:

`X-Content-Type-Options: nosniff`

`X-Frame-Options: DENY`

`Strict-Transport-Security: max-age=31536000`

Default Content‑Security‑Policy

## Why
* Explicit allow list avoids wildcard *, which would be insecure with credentials.

* credentials: true is required for the httpOnly refresh token cookie to be sent cross‑origin.

* Helmet provides sensible defaults for mitigating common web vulnerabilities.

## Consequences
* Updating the frontend URL requires updating the FRONTEND_URL env variable and restarting the API.

* The CORS configuration is centralised and easy to modify.

## Date
2026-06-27