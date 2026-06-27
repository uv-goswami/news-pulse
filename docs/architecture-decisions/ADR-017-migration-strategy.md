# ADR-017: Database Migration Strategy with Prisma Migrate

## Status
Accepted – Implemented

## Context
As the schema evolves during development, I needed a way to apply changes to the database without dropping tables manually.

## Decision
I use Prisma Migrate exclusively for all schema changes:
- `prisma migrate dev --name <description>` – generates and applies migration SQL, updates the Prisma client.
- `prisma migrate deploy` – applies pending migrations in production (safe for CI/CD).
- Migration SQL files are committed to the repo under `backend/prisma/migrations/`.
- No manual `ALTER TABLE` statements.

## Why
- Full migration history in git – every schema change is traceable.
- `prisma migrate deploy` on the EC2 instance ensures schema and code are always in sync.
- Prisma handles the complexity of generating correct SQL for PostgreSQL.

## Alternatives Considered
**Raw SQL migrations (e.g. `node-pg-migrate`)** – more control but requires writing SQL by hand.  
**No migrations** – would require manual schema updates, error‑prone.

## Consequences
- Prisma Migrate’s auto‑generated SQL may need manual review for complex changes (e.g. column renames). These cases are rare and documented.
- Migrations are applied during deployment; if a migration fails, the deployment is rolled back.

## Date
2026-06-27