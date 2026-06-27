
# ADR-019: Frontend State Management

## Status
Accepted – Implemented

## Context
The Next.js frontend needs to manage: the list of clusters, selected cluster detail, source filters, ingest job polling state, and authentication tokens.

## Decision
I used React built‑ins only (`useState`, `useContext`, `useReducer`) – no external state management library.

**State distribution**:
- **Auth state** – React Context (`AuthContext`) holds the access token.
- **Timeline data** – fetched in a server component and passed as props to client components.
- **Source filter** – local `useState` in the timeline component.
- **Ingest polling** – `useState` + `useEffect` with `setInterval` in the Refresh button component.
- **Selected cluster** – URL‑driven (`/clusters/[id]`) rather than local state, enabling deep linking.

## Why
- No additional dependencies – standard React patterns are sufficient for this data complexity.
- Server components reduce client‑side JavaScript and improve initial load time.
- The polling logic is straightforward and self‑contained.

## Alternatives Considered
**Zustand** – lightweight and good DX, but not needed.  
**Redux Toolkit** – overkill for a three‑page application.  
**TanStack Query** – excellent for server state and caching. Noted as a recommended upgrade in the “one thing to improve” video.

## Consequences
- Cache invalidation after a successful ingest requires manually refetching the timeline (via `router.refresh()` in App Router).
- Polling is implemented imperatively, but the logic is short and easy to follow.

## Date
2026-06-27