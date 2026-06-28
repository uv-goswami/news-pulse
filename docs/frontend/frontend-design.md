# Frontend Design — News Pulse

> **Framework:** Next.js 14 (App Router)  
> **UI Library:** React + Tailwind CSS  
> **Timeline:** Custom horizontal timeline using CSS/HTML (no external charting library)  
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
- Horizontal timeline with cluster bars (width = time span, height = article count).
- Click a bar to expand details (articles, sources, timestamps) in a panel below.
- Source filter (toggle BBC, NPR, The Guardian).
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
| Timeline | Custom horizontal timeline (CSS Flexbox/Grid) | No external library, fully controllable, no charting bloat |
| HTTP Client | Native `fetch` (with `cache: 'no-store'` for timeline) | Next.js built‑in |
| State | React Context + URL query params | Minimal global state |
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
|  Timeline                                                         |
|  +------------------------------------------------------------+  |
|  |  Legend: ██ BBC  ██ NPR  ██ Guardian                         |  |
|  |  [Bar1] [Bar2]     [Bar3]       [Bar4]       [Bar5]         |  |
|  |  (width = time span, height = article count)                 |  |
|  +------------------------------------------------------------+  |
|                                                                    |
|  Cluster Detail (expanded on click)                              |
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

- `app/page.tsx` – **Server Component** that fetches initial timeline data and renders the page.
- `components/timeline/Timeline.tsx` – **Client Component** that receives clusters and renders bars. Handles bar click to expand details.
- `components/timeline/TimelineBar.tsx` – Single bar representing a cluster. Shows label on hover.
- `components/timeline/TimelineLegend.tsx` – Displays color mapping for sources.
- `components/timeline/SourceFilter.tsx` – Toggle buttons; updates URL query param `?sources=bbc,npr`.
- `components/timeline/RefreshButton.tsx` – Calls `POST /ingest/trigger` and polls job status.
- `components/cluster/ClusterDetail.tsx` – Displays selected cluster's articles, time range, top terms.
- `components/ui/` – Reusable: `Button`, `Skeleton`, `Badge`, `Card`.

---

## 6. State Management & Data Flow

- **Server State:** `page.tsx` fetches `/timeline` with `cache: 'no-store'` and passes `clusters` to client components.
- **URL State:** Source filter is stored in URL `?sources=bbc,npr` (comma-separated). This allows deep linking.
- **Client State (local):**
  - `selectedClusterId` – which cluster bar is clicked (expands detail panel).
  - `isRefreshing` – loading state during refresh/polling.
  - `jobStatus` – polling status (pending/running/completed/failed).
- **Polling:** `usePolling` custom hook manages `setInterval` and updates job status.

**Data Flow Diagram:**

```
User loads page
       │
       ▼
┌──────────────────────┐
│ Server Component     │
│ fetches /timeline    │
│ (with source filter) │
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
User clicks bar
       │
       ▼
┌──────────────────────┐
│ Show ClusterDetail   │
│ (expanded panel)     │
└──────────────────────┘
```

---

## 7. API Integration

All endpoints are defined in `lib/api.ts` with typed functions.

**Endpoints used:**
- `GET /timeline?source=BBC+News&source=NPR` – fetch timeline data.
- `GET /clusters/:id` – fetch full cluster detail (if needed for detail panel).
- `POST /ingest/trigger` – start a new scrape job.
- `GET /ingest/status/:jobId` – poll job status.

**Source Filter:** The frontend sends `source` as a repeated query param (e.g., `?source=BBC+News&source=NPR`). The URL stores it as `?sources=bbc,npr` and converts to the required format.

---

## 8. Styling & Theming

- **Tailwind CSS** with a clean design system:
  - Primary color: slate‑blue (`#3b82f6`).
  - Neutral: slate (`#1e293b` background, `#f8fafc` card backgrounds).
  - Sources mapped to colors: BBC = `#c0392b`, NPR = `#2e86c1`, Guardian = `#27ae60`.
- **Timeline bars:** 
  - Width proportional to `(end - start)` (time span).
  - Height proportional to `articleCount` (capped at 6rem, min height 2rem).
  - Opacity/colour intensity = `intensity` (from backend) – higher = more opaque/bolder.
- **Typography:** Inter (Google Font), with clear hierarchy.

---

## 9. Loading & Error States

| State | UI |
|-------|----|
| Initial page load | Skeleton placeholders for timeline bars (shimmer effect). |
| Timeline empty | "No clusters found" with a hint to refresh. |
| Timeline error | Error banner with retry button. |
| Refresh triggered | Refresh button shows spinner; progress message "Scraping...". |
| Job failed | Toast notification with error details; retry button. |
| Job completed | Timeline automatically re‑fetches (client‑side). |

---

## 10. Accessibility

- Keyboard navigation: Tab through bars, press Enter to select.
- Focus indicators: Visible outlines on interactive elements.
- Semantic HTML: `<main>`, `<section>`, `<button>`, `<ul>` for articles.
- ARIA labels: For timeline bars (e.g., `aria-label="Cluster: election senate vote, 2 articles"`).
- Screen reader announcements: When loading/refreshing, use `aria-live` regions.

---

## 11. Performance Optimizations

- **Server Components:** Initial timeline data is fetched server‑side, reducing client workload.
- **Memoize client components:** Use `React.memo` for `TimelineBar` and `ClusterDetail`.
- **Lazy load polling logic:** Polling starts only after user clicks refresh.
- **Bundle optimization:** No heavy charting libraries; custom timeline keeps bundle small.
- **Avoid unnecessary re‑renders:** Source filter uses URL state, not React state, to keep components pure.

---

## 12. Deployment

We deploy the frontend as a **standard Next.js app** on **Render** (Web Service) or **Vercel** (recommended for simplicity).

**Render setup:**
- Build command: `npm run build`
- Start command: `npm start`
- Environment variables set in dashboard.

**Vercel (alternative):** Automatic preview deployments from GitHub; simpler.

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
   - `Timeline` + `TimelineBar` (with static mock data initially)
   - `SourceFilter`
   - `RefreshButton` + polling
   - `ClusterDetail` (expandable panel)
6. Connect to live backend and test.
7. Deploy to Render/Vercel.

