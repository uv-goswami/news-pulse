# News Pulse — Frontend

Next.js 14 (App Router) frontend for the News Pulse topic-clustered news timeline.

## Stack

| Tool | Role |
|------|------|
| Next.js 14 (App Router) | Framework |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| `date-fns` | Date formatting |
| `lucide-react` | Icons |
| `clsx` | Class merging |

## Directory Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout — fonts, metadata
│   ├── page.tsx          # Main page — wires all hooks together
│   └── globals.css       # Base styles, custom scrollbars, glow utilities
│
├── components/
│   ├── layout/
│   │   ├── AppHeader.tsx # Top bar — logo, refresh button, status dot
│   │   └── Sidebar.tsx   # Source filter panel
│   ├── timeline/
│   │   ├── RadarTimeline.tsx  # Main timeline canvas — lane layout, time axis
│   │   ├── ClusterBar.tsx     # Individual cluster bar (hover tooltip, click)
│   │   └── TimeAxis.tsx       # Horizontal time ruler with tick marks
│   ├── clusters/
│   │   └── ClusterDrawer.tsx  # Slide-up article list panel
│   └── ui/
│       ├── IngestBanner.tsx   # Status banner during/after data refresh
│       ├── Spinner.tsx        # Loading indicator
│       └── EmptyState.tsx     # Empty / error state
│
├── hooks/
│   ├── useTimeline.ts    # Fetches /timeline, manages ingest polling
│   ├── useCluster.ts     # Fetches /clusters/:id on demand
│   └── useSources.ts     # Source filter state, derives filtered clusters
│
├── lib/
│   ├── api.ts            # Typed fetch wrappers for all backend endpoints
│   └── utils.ts          # Date helpers, source colours, intensity scaling
│
└── types/
    └── index.ts          # All shared TypeScript types
```

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Set up environment
cp .env.example .env.local
# Edit .env.local — set NEXT_PUBLIC_API_URL to your backend URL

# 3. Run development server
npm run dev
# → http://localhost:3000
```

## API Endpoints Consumed

| Endpoint | Method | Purpose |
|----------|--------|---------|
| `/timeline` | GET | Fetch all clusters for timeline |
| `/clusters/:id` | GET | Fetch articles for a cluster |
| `/ingest/trigger` | POST | Start a scrape + group job |
| `/ingest/status/:jobId` | GET | Poll job status |

## Design Notes

**Visual theme:** Dark "signal monitor" aesthetic — deep navy background (`#0A0F1E`), electric cyan accent (`#00D4FF`), `Space Grotesk` display type for a technical but distinctive feel.

**Timeline layout:** Clusters are assigned to horizontal lanes using a greedy interval-scheduling algorithm (no overlaps). Bar width = time span, bar opacity/brightness = article count intensity. A "now" line marks the current moment.

**Source colouring:** Each news source gets a consistent colour (BBC = coral, NPR = teal, Reuters = amber, etc.) used across both the sidebar filter dots and the timeline bars.

**Ingest flow:** Clicking "Refresh data" calls `POST /ingest/trigger`, stores the `job_id`, then polls `GET /ingest/status/:jobId` every 2.5 seconds until `done` or `error`, then re-fetches the timeline.

## Deployment (Vercel)

```bash
# Via Vercel CLI
vercel
# Set NEXT_PUBLIC_API_URL to your backend URL in Vercel project settings
```

Or connect your GitHub repo on vercel.com — it will detect Next.js automatically.
