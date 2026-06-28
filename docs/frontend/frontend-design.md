
# Frontend Design — News Pulse

> **Framework:** Next.js 14 (App Router)  
> **UI Library:** React + Tailwind CSS  
> **Timeline:** Custom horizontal Gantt‑style timeline using CSS/HTML  
> **State Management:** Server Components for initial data, Client Components for interactivity  
> **Deployment:** Render as a standard Next.js app (Web Service)  
> **Last Updated:** 2026-06-28

---

## Table of Contents

1. [Overview](#1-overview)
2. [Design Principles](#2-design-principles)
3. [Tech Stack](#3-tech-stack)
4. [Page Layout](#4-page-layout)
5. [Component Architecture](#5-component-architecture)
6. [State Management & Data Flow](#6-state-management--data-flow)
7. [API Integration](#7-api-integration)
8. [Styling & Theming](#8-styling--theming)
9. [Loading & Error States](#9-loading--error-states)
10. [Accessibility](#10-accessibility)
11. [Performance Optimizations](#11-performance-optimizations)
12. [Deployment](#12-deployment)
13. [Environment Variables](#13-environment-variables)
14. [Development Workflow](#14-development-workflow)

---

## 1. Overview

The frontend displays a timeline of news clusters, allowing users to explore topics, filter by source, and refresh data. It consumes the News Pulse REST API.

**Key features:**
- Horizontal Gantt‑style timeline with cluster bars (width = time span, height = article count).
- Click a bar to expand details (articles, sources, timestamps) in a modal or panel.
- Source filter (toggle BBC, NPR, The Guardian) – initial state read from URL query param, but subsequent changes do **not** update the URL.
- Refresh button with job polling.

---

## 2. Design Principles

- **API-first:** All data comes from the backend contract.
- **Single-page experience:** No navigation – all interactions happen on one page.
- **Progressive enhancement:** Works without JavaScript? Basic read-only timeline is server‑rendered; interactivity requires client JS.
- **Performance:** Minimal client‑side JS; use server components for initial data.
- **Accessible:** Keyboard navigable, semantic HTML, clear focus states.

---

## 3. Tech Stack

| Category | Choice | Justification |
|----------|--------|---------------|
| Framework | Next.js 14 App Router | Server components for fast initial paint, built‑in routing |
| Language | TypeScript | Type safety, aligns with backend |
| Styling | Tailwind CSS | Rapid UI development, utility‑first |
| Timeline | Custom Gantt‑style timeline (CSS Flexbox/Grid) | No external library, fully controllable, no charting bloat |
| HTTP Client | Native `fetch` (with `cache: 'no-store'` for timeline) | Next.js built‑in |
| State | React Context + local state (no URL sync for filters) | Minimal global state; filter updates are client‑side only |
| Polling | `setInterval` + `useEffect` | Simple, sufficient |
| Icons | `lucide-react` | Lightweight, consistent |

---

## 4. Page Layout

```
+------------------------------------------------------------------+
|  Header                                                           |
|  +------------------------------------------------------------+  |
|  |  [Logo]   Refresh Button   Source Filter (BBC | NPR | Guardian) | |
|  +------------------------------------------------------------+  |
+------------------------------------------------------------------+
|                                                                    |
|  Timeline (Gantt view)                                            |
|  +------------------------------------------------------------+  |
|  |  Legend: ██ BBC  ██ NPR  ██ Guardian                         |  |
|  |  [Bar1] [Bar2]     [Bar3]       [Bar4]       [Bar5]         |  |
|  |  (width = time span, height = article count)                 |  |
|  +------------------------------------------------------------+  |
|                                                                    |
|  Cluster Grid (cards)                                             |
|  +------------------------------------------------------------+  |
|  |  [Card1]   [Card2]   [Card3]                                |  |
|  |  [Card4]   [Card5]   ...                                   |  |
|  +------------------------------------------------------------+  |
|                                                                    |
|  Cluster Detail Modal (on card/bar click)                        |
|  +------------------------------------------------------------+  |
|  |  Cluster Label                                               |  |
|  |  Top Terms: election, senate, vote                          |  |
|  |  Time Range: Jun 26 - Jun 27                                |  |
|  |  Articles:                                                   |  |
|  |    - Headline 1 (BBC)  08:14 AM                             |  |
|  |    - Headline 2 (NPR)   09:22 AM                            |  |
|  |    ...                                                       |  |
|  +------------------------------------------------------------+  |
+------------------------------------------------------------------+
|  Footer                                                           |
+------------------------------------------------------------------+
```

---

## 5. Component Architecture

- `app/page.tsx` – **Server Component** that fetches initial timeline data and passes it to client components.
- `components/timeline/GanttTimeline.tsx` – **Client Component** that receives clusters and renders Gantt‑style bars. Handles bar click to expand details.
- `components/timeline/TimelineStrip.tsx` – Alternative compact strip view (used in some contexts).
- `components/timeline/SourceFilter.tsx` – Toggle buttons; reads initial state from URL but does not update URL.
- `components/timeline/RefreshButton.tsx` – Calls `POST /ingest/trigger` and polls job status.
- `components/cluster/ClusterDetailModal.tsx` – Displays selected cluster's articles, time range, top terms.
- `components/ui/` – Reusable: `Button`, `Skeleton`, `Badge`, `Toast`.

---

## 6. State Management & Data Flow

- **Server State:** `page.tsx` fetches `/timeline` with `cache: 'no-store'` and passes `clusters` to client components.
- **URL State (initial only):** Source filter is read from `searchParams.sources` on page load, but subsequent filter changes are **not** reflected in the URL. This means deep linking works only for the initial view; refresh will reset filters to the URL value.
- **Client State (local):**
  - `activeSources` – current filter set (client‑side only).
  - `selectedClusterId` – which cluster is clicked (expands detail modal).
  - `refreshState` – polling status (idle/triggering/pending/running/completed/failed).
- **Polling:** `usePolling` custom hook manages `setInterval` and updates job status.

**Data Flow Diagram:**

```
User loads page
       │
       ▼
┌──────────────────────┐
│ Server Component     │
│ fetches /timeline    │
│ with initial filters │
│ from URL             │
└──────────────────────┘
       │
       ▼
┌──────────────────────┐
│ Client Components    │
│ - Timeline (bars)    │
│ - SourceFilter       │
│ - RefreshButton      │
└──────────────────────┘
       │
       ▼
User toggles source filter
       │
       ▼
┌──────────────────────┐
│ Update local state   │
│ (URL not updated)    │
│ → re‑fetch timeline  │
└──────────────────────┘
       │
       ▼
User clicks bar
       │
       ▼
┌──────────────────────┐
│ Show ClusterDetail   │
│ (modal)              │
└──────────────────────┘
```

---

## 7. API Integration

All endpoints are defined in `lib/api.ts` with typed functions.

**Endpoints used:**
- `GET /timeline?source=BBC+News&source=NPR` – fetch timeline data.
- `GET /clusters/:id` – fetch full cluster detail (for detail modal).
- `POST /ingest/trigger` – start a new scrape job.
- `GET /ingest/status/:jobId` – poll job status.

**Source Filter:** The frontend sends `source` as a repeated query param (e.g., `?source=BBC+News&source=NPR`) based on `activeSources` state.

---

## 8. Styling & Theming

- **Tailwind CSS** with a clean dark‑newsprint theme:
  - Background: dark charcoal (`#2A2A2A`), text: warm off‑white (`#F0E8D8`).
  - Sources mapped to colours: BBC = red, NPR = blue, Guardian = green.
- **Timeline bars:** 
  - Width proportional to `(end - start)` (time span).
  - Height proportional to `articleCount` (capped at 6rem, min height 2rem).
  - Gradient based on source mix.
- **Typography:** Merriweather (headings), Lora (body), Inter (UI).

---

## 9. Loading & Error States

| State | UI |
|-------|----|
| Initial page load | Skeleton placeholders for timeline bars and cards (shimmer effect). |
| Timeline empty | "No clusters found" with a hint to refresh. |
| Timeline error | Error banner with retry button. |
| Refresh triggered | Refresh button shows spinner; progress messages: "Starting…", "Queued…", "Fetching…". |
| Job failed | Toast notification with error details; retry button. |
| Job completed | Timeline automatically re‑fetches (client‑side). |

---

## 10. Accessibility

- Keyboard navigation: Tab through bars, press Enter to select.
- Focus indicators: Visible outlines on interactive elements.
- Semantic HTML: `<main>`, `<section>`, `<button>`, `<ul>` for articles.
- ARIA labels: For timeline bars (e.g., `aria-label="Cluster: election senate vote, 2 articles"`).
- Screen reader announcements: When loading/refreshing, use `aria-live` regions (toasts).

---

## 11. Performance Optimizations

- **Server Components:** Initial timeline data is fetched server‑side, reducing client workload.
- **Memoize client components:** Use `React.memo` for `GanttTimeline` and `ClusterDetailModal`.
- **Lazy load polling logic:** Polling starts only after user clicks refresh.
- **Bundle optimization:** No heavy charting libraries; custom timeline keeps bundle small.
- **Avoid unnecessary re‑renders:** Source filter state is local and does not trigger global re‑renders.

---

## 12. Deployment

We deploy the frontend as a **standard Next.js app** on **Render** (Web Service) or **Vercel**.

**Render setup:**
- Build command: `npm run build`
- Start command: `npm start`
- Environment variables set in dashboard.

**Vercel (alternative):** Automatic preview deployments from GitHub.

We **do not** use `next export` – we use the server‑rendered Next.js app so that server components can fetch data on each request.

---

## 13. Environment Variables

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_API_URL` | Base URL of the backend API (e.g., `https://news-pulse-backend.onrender.com`) |

---

## 14. Development Workflow

1. Create `frontend` branch from `main`.
2. Initialize Next.js: `npx create-next-app@latest frontend --typescript --tailwind --eslint`.
3. Set up folder structure as defined above.
4. Implement `lib/api.ts` and types.
5. Build components in order:
   - `GanttTimeline` + bars (with static mock data initially)
   - `SourceFilter`
   - `RefreshButton` + polling
   - `ClusterDetailModal`
6. Connect to live backend and test.
7. Deploy to Render/Vercel.