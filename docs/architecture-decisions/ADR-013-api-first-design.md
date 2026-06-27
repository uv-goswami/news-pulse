# ADR-013: API-First Design with OpenAPI Spec

## Status
Accepted – Implemented

## Context
To ensure a clear and stable contract before implementation, I defined the API contract first, then wrote code to match it.

## Decision
I wrote `api-contract.md` and `openapi-spec.yaml` before writing any backend code. The Fastify route schemas are written to match the OpenAPI spec – not the other way around. I use `@fastify/swagger` to serve a live Swagger UI at `/docs` in development.

## Why
- The API contract becomes the single source of truth – any deviation in implementation is a bug.
- The Swagger UI allows the assessment reviewer to explore and test the API interactively without Postman.
- Prevents “design by accident” – the API shape is intentional, not accidental.

## Consequences
- Writing the spec first adds time before coding, but it prevents rework later.
- The spec and code are kept in sync via the route schemas; any change to the spec requires a corresponding change in the route schemas.

## Date
2026-06-27