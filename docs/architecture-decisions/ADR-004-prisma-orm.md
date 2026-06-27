# ADR-004: Prisma as the ORM Layer

## Status
Accepted – Implemented

## Context
The Node.js backend needs to read and write data to PostgreSQL. I needed a database access layer that is type‑safe, easy to use, and supports migrations.

## Decision
I chose Prisma ORM with the generated `@prisma/client`.

## Why
- Prisma is **type‑safe** – every query result is typed, catching shape mismatches at compile time.
- The schema (`prisma/schema.prisma`) is the single source of truth for the database structure. Migrations are generated from it.
- Query API is readable and self‑documenting (e.g. `prisma.cluster.findMany({ include: { articles: true } })`).
- Prisma Studio provides a GUI for inspecting the database during development.

## Alternatives Considered
**Drizzle ORM** – SQL‑first and fast, but Prisma’s `include`/`select` API maps better to our nested data shapes.  
**Knex** – a query builder, requiring more manual SQL and less type safety.  
**Raw `pg`** – full control but time‑consuming; not appropriate for a short assessment.

## Consequences
- Database schema changes are applied via `prisma migrate dev` – clean, trackable, and reversible.
- The Prisma client must be regenerated (`prisma generate`) after any schema change.
- Care must be taken with `include` to avoid N+1 query issues – documented in the implementation guide.

## Date
2026-06-27