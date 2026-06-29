# News Pulse — Topic-Clustered News Timeline

**Live Demo**  
- Frontend: [https://news-pulse-frontend-wv0z.onrender.com](https://news-pulse-frontend-wv0z.onrender.com)  
- Backend API: [https://news-pulse-backend-08zn.onrender.com](https://news-pulse-backend-08zn.onrender.com)  
- API Docs: [https://news-pulse-backend-08zn.onrender.com/docs](https://news-pulse-backend-08zn.onrender.com/docs) (Swagger UI)


---

## 📁 Project Structure

```
news-pulse/
├── backend/                  # Node.js + Fastify REST API
│   ├── generated/            # Prisma Client (auto‑generated)
│   ├── prisma/               # Database schema & migrations
│   ├── src/                  # Application source
│   │   ├── lib/              # Prisma client, env config
│   │   ├── plugins/          # Fastify plugins (CORS, Swagger, etc.)
│   │   ├── routes/           # API route handlers
│   │   ├── services/         # Business logic
│   │   ├── utils/            # Error handling, etc.
│   │   └── workers/          # Job worker (runs pending ingest jobs)
│   ├── .dockerignore
│   ├── .env                  # Environment variables (not committed)
│   ├── .gitignore
│   ├── Dockerfile            # Multi‑stage container build
│   ├── package.json
│   ├── package-lock.json
│   ├── prisma.config.ts
│   └── tsconfig.json
│
├── scraper/                  # Python RSS ingestion & topic clustering
│   ├── __pycache__/
│   ├── venv/                 # Python virtual environment (local only)
│   ├── __init__.py
│   ├── article_extractor.py  # Full‑text extraction via trafilatura
│   ├── clustering.py         # TF‑IDF + cosine similarity clustering
│   ├── config.py             # Feeds, threshold, DB URL
│   ├── db_writer.py          # Database operations
│   ├── deduplicator.py       # Duplicate detection
│   ├── main.py               # Entry point
│   ├── requirements.txt      # Python dependencies
│   ├── rss_fetcher.py        # Feed parsing (feedparser)
│   └── utils.py              # Helpers (hashing, date parsing, etc.)
│
├── frontend/                 # Next.js 14 (App Router) UI
│   ├── .next/                # Build output
│   ├── node_modules/
│   ├── src/
│   │   ├── app/              # Pages, layout, globals
│   │   ├── components/       # React components (timeline, clusters, UI)
│   │   ├── hooks/            # Custom hooks (polling, infinite scroll)
│   │   ├── lib/              # API client, types, utilities
│   │   └── types/            # Shared TypeScript types
│   ├── .env.example          # Environment variables template
│   ├── .env.local            # Local env (gitignored)
│   ├── next-env.d.ts
│   ├── next.config.js        # Webpack alias + Next.js config
│   ├── package.json
│   ├── package-lock.json
│   ├── postcss.config.js
│   ├── README.md             # Frontend‑specific readme
│   ├── tailwind.config.js
│   └── tsconfig.json
│
├── docs/                     # Extended documentation (optional)
│   ├── api/
│   ├── architecture-decisions/
│   ├── database-design/
│   ├── domain/
│   ├── frontend/
│   └── scraper/
│
├── .gitignore
├── Combine_all_md.py         # Helper script (project documentation aggregation)
├── README.md                 # This file
└── Xpo_Tech_Candidate_Assessment.docx.pdf
```

---

## 🏗️ Architecture Overview

1. **Python Scraper**  
   - Fetches RSS feeds from BBC, NPR, and The Guardian.  
   - Extracts full article body using `trafilatura`.  
   - Deduplicates articles (URL hash) to avoid re‑insertion on repeated runs.  
   - Groups articles into topics using **TF‑IDF + cosine similarity** (threshold 0.25).  
   - Stores clusters and articles in a shared PostgreSQL database.

2. **Node.js Backend**  
   - REST API built with Fastify.  
   - Exposes endpoints for timeline, cluster details, and ingest control.  
   - Triggers the scraper as a child process when `POST /ingest/trigger` is called.  
   - Uses **Prisma ORM** with `@prisma/adapter-pg` and a connection pool.  
   - Manages job status (`pending` → `running` → `completed/failed`) with a background worker.

3. **Next.js Frontend**  
   - Interactive Gantt‑style timeline (each cluster spans its earliest‑to‑latest article).  
   - Source filter, search, time‑range selector.  
   - Cluster detail modal with article list and source breakdown.  
   - “Refresh data” button triggers an ingest job and polls for completion.

All components are deployed on **Render** (backend via Docker, frontend as Node service, PostgreSQL as managed database).

---

## 🔧 Topic Grouping Approach

We use **TF‑IDF vectorisation** + **cosine similarity** with a greedy clustering algorithm (`scraper/clustering.py`).

- **Why**: No external NLP models are required; the approach is deterministic, interpretable, and works well for short‑text (headline + summary) clustering.
- **Parameter**: Similarity threshold = `0.25` (configurable via `CLUSTER_SIMILARITY_THRESHOLD` env var). This was chosen empirically – it yields coherent clusters without excessive merging.
- **Labeling**: The top 3 TF‑IDF terms (by aggregate score) form the cluster label.
- **Limitation**: A single fixed threshold may not suit all topics; some broad stories (e.g., “Ukraine war”) could be split into sub‑clusters if the threshold is too high.

---

## 📡 News Sources

The scraper uses three public RSS feeds (defined in `scraper/config.py`):

- **BBC News** – `http://feeds.bbci.co.uk/news/rss.xml`
- **NPR** – `https://feeds.npr.org/1001/rss.xml`
- **The Guardian** – `https://www.theguardian.com/world/rss`

These outlets provide diverse content and varying RSS structures, allowing us to test the ingestion resilience.

---

## 🧪 Running Locally

### Prerequisites
- Python 3.9+
- Node.js 20+
- PostgreSQL (local or Docker)

### 1. Clone & Install Dependencies

```bash
git clone https://github.com/uv-goswami/news-pulse.git
cd news-pulse
```

### 2. Set Up the Scraper

```bash
cd scraper
python3 -m venv venv
source venv/bin/activate   # or `venv\Scripts\activate` on Windows
pip install -r requirements.txt
cp .env.example .env       # adjust DATABASE_URL if needed
```

### 3. Set Up the Backend

```bash
cd ../backend
npm install
cp .env.example .env       # set DATABASE_URL, FRONTEND_URL, etc.
npx prisma migrate dev     # apply schema and generate client
npm run dev                # starts on http://localhost:3001
```

### 4. Set Up the Frontend

```bash
cd ../frontend
npm install
cp .env.example .env.local # set NEXT_PUBLIC_API_URL
npm run dev                # starts on http://localhost:3000
```

---

## 📬 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET`  | `/health` | Liveness check |
| `GET`  | `/health/ready` | Readiness (DB connectivity) |
| `GET`  | `/timeline` | Clusters formatted for plotting (supports `?source=...`, `?from=...`, `?to=...`, `?minArticles=...`) |
| `GET`  | `/clusters` | Paginated cluster list (supports `?source=...`, `?from=...`, `?to=...`, `?page=...`, `?limit=...`) |
| `GET`  | `/clusters/:id` | Full cluster detail (articles ordered chronologically) |
| `POST` | `/ingest/trigger` | Start a new ingest job; returns `jobId`. Returns `409` if a job is already running. |
| `GET`  | `/ingest/status/:jobId` | Poll job status (`pending`, `running`, `completed`, `failed`) with metadata |

Detailed OpenAPI documentation is available at the `/docs` route.

---

## 🌐 Deployment

All services are deployed on **Render**:

- **Backend**: Docker‑based web service (Dockerfile in `/backend`).  
  - Runs `prisma migrate deploy` on startup.  
  - Environment variables: `DATABASE_URL`, `FRONTEND_URL`, `SCRAPER_PATH`, `PYTHON_CMD`, etc.

- **Frontend**: Node web service (root = `/frontend`).  
  - Build command: `npm install && npm run build`  
  - Start command: `npm start`  
  - Environment variable: `NEXT_PUBLIC_API_URL`

- **Database**: Render PostgreSQL (internal URL).  
  - The backend connects via the `DATABASE_URL` variable.

The scraper is **not** a separate service; it is triggered on‑demand by the backend as a subprocess. The Docker image includes both Node.js and Python, so the subprocess can run inside the same container.

---

## 🔮 Future Improvements

- **Dynamic threshold** – adapt the similarity threshold per cluster or per source.
- **Cross‑source story merging** – link clusters across different outlets using named entity recognition or embeddings.
- **WebSocket / SSE** – push live timeline updates without manual polling.
- **Full‑text search** – enable searching across articles and clusters.

---

## 📄 License & Acknowledgements

This project was built as part of an internship assessment for **XPONENTIUM INDIA**.  
All code is provided for evaluation purposes only.


