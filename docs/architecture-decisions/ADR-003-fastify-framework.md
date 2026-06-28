# ADR-003: Fastify over Express for Node.js Backend

## Status
Accepted – Implemented

## Context
I needed a Node.js HTTP framework for the REST API. Express is the most familiar, but Fastify offers meaningful advantages for this project.

## Decision
I chose Fastify v4.

## Why
- Fastify is **schema‑first** – each route accepts a JSON Schema, enabling validation at the framework level. This aligns with our API‑first approach.
- It is faster than Express under load (benchmarks show 2–3x), though performance is not critical here.
- Built‑in serialisation using `fast-json-stringify` is safer and faster than `JSON.stringify`.
- First‑party plugins (`@fastify/jwt`, `@fastify/rate‑limit`, `@fastify/cors`, `@fastify/swagger`) are well‑maintained and consistent.

## Alternatives Considered
**Express** – familiar, but requires separate libraries for validation (e.g. `joi`) and has no built‑in schema support.  
**NestJS** – enterprise‑grade but too heavyweight for a three‑day assessment.  
**Hono** – modern but less mature in plugin ecosystem.

## Consequences
- Route schemas are defined in the same file as the route handler, making it clear what the request/response shapes are.
- `@fastify/swagger` auto‑generates OpenAPI documentation from the schemas, keeping the spec and code in sync.
- The plugin system has a learning curve, but the patterns are well documented.

## Date
2026-06-27