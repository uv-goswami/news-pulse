# ADR-012: Next.js App Router for Frontend

## Status
Accepted – Implemented

## Context
The frontend is a Next.js / React application. I needed to choose between the newer App Router (Next.js 13+) and the stable Pages Router.

## Decision
I used the Next.js 14 App Router.

## Why
- Server components allow initial data fetching without client‑side waterfalls – the timeline loads faster on first paint.
- App Router conventions (`loading.tsx`, `error.tsx`) give clean loading/error states with minimal code.
- Demonstrates modern Next.js patterns, which is a positive signal in an assessment context.

## Alternatives Considered
**Pages Router** – stable and familiar, but lacks server components and the integrated data fetching hooks of App Router.  
**Vite + React SPA** – simpler but does not use Next.js as specified.

## Consequences
- App Router’s caching behaviour (fetch cache, `revalidate`) requires careful usage – for timeline data we use `cache: 'no-store'` to always get fresh data.
- The project must be on Next.js 13 or later.

## Date
2026-06-27