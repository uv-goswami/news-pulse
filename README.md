
# News Pulse — Topic‑Clustered News Timeline

News Pulse is a full‑stack application that automatically fetches articles from multiple RSS feeds, groups them into topics using TF‑IDF and cosine similarity, and visualises the results on an interactive timeline. It helps you see what the news is *about* at a glance, without wading through a firehose of individual articles.

---

## Features

- **Automated Ingestion:** Pulls articles from RSS feeds on a schedule or on‑demand.
- **Topic Clustering:** Groups related articles into topic clusters using TF‑IDF vectorisation and cosine similarity.
- **Interactive Timeline:** Displays clusters as horizontal Gantt‑style bars – width = time span, height = article count.
- **Source Filtering:** Toggle between BBC, NPR, The Guardian (and others) to focus on specific outlets.
- **Cluster Detail:** Click any cluster to see a list of all articles, their summaries, and publication times.
- **Manual Refresh:** Trigger a fresh scrape + clustering run with a single button, with live job status polling.

---

## Architecture Overview

The project is organised as a monorepo with three independent services:

```
news-pulse/
├── backend/          # Node.js + Fastify API (REST + job worker)
├── scraper/          # Python 3 RSS fetcher, body extractor, and clustering pipeline
├── frontend/         # Next.js 14 (App Router) UI
└── docs/             # Architecture decisions, API contract, database design
```

- **Backend (`/backend`)** – Exposes REST endpoints (`/clusters`, `/timeline`, `/ingest/trigger`, …), manages the PostgreSQL database via Prisma, and runs a background worker that spawns the Python scraper when an ingest job is triggered.
- **Scraper (`/scraper`)** – A self‑contained Python script that:
  - Fetches RSS feeds (`feedparser`)
  - Extracts full article bodies (`trafilatura`)
  - Deduplicates by URL hash
  - Runs TF‑IDF + cosine similarity (`scikit‑learn`) to group articles into clusters
  - Writes new articles and clusters back to the database
- **Frontend (`/frontend`)** – A Next.js 14 application that displays the timeline, source filters, refresh button, and cluster detail modal. It communicates with the backend API and polls for job status during refreshes.

The backend and frontend are Node.js services; the scraper runs as a separate Python process (spawned by the backend when a job is triggered).

---

## Technology Stack

| Layer | Tools |
|-------|-------|
| **Backend** | Node.js (v20+), Fastify, Prisma ORM, PostgreSQL, `dotenv`, `bcrypt` (optional) |
| **Scraper** | Python 3.11+, `feedparser`, `trafilatura`, `scikit-learn`, `psycopg2-binary` |
| **Frontend** | Next.js 14 (App Router), React, TypeScript, Tailwind CSS |
| **Database** | PostgreSQL 15 (local or managed) |
| **Deployment** | Render (Web Services + Cron Job + PostgreSQL) or any Docker‑compatible host |

---

## Topic Grouping Approach

We use **TF‑IDF vectorisation + cosine similarity** to group articles into topics:

1. Combine each article’s `headline` and `summary` into a single text field.
2. Normalise: lowercase, remove stopwords, strip punctuation.
3. Vectorise using `TfidfVectorizer` (`max_features=5000`, `ngram_range=(1,2)`, `min_df=1`).
4. Compute the pairwise cosine similarity matrix.
5. Apply a similarity threshold: articles with similarity ≥ **0.25** are grouped into the same cluster.
6. The cluster label is derived from the top 3–5 TF‑IDF terms with the highest average weight in the cluster.

**Why 0.25?**  
News articles on the same topic typically show cosine similarities between 0.20 and 0.40 on headline+summary text. Below 0.20 is mostly noise; above 0.40 is near‑duplicate. A threshold of 0.25 gives a good balance between recall and precision.

**Limitations:**
- **Vocabulary mismatch:** Articles that use different terms for the same concept (e.g., “ceasefire” vs “peace deal”) may not cluster together.
- **Short text:** Headlines and summaries are relatively short, which can reduce the effectiveness of TF‑IDF.
- **O(n²) memory:** The similarity matrix is computed pairwise; for large numbers of articles (e.g., >10,000), memory usage becomes a bottleneck. With our current volume (~200–300 articles per run) this is not a problem.

The threshold and pipeline are configurable in the scraper’s environment variables.

---

## News Sources

The scraper currently pulls from the following RSS feeds:

| Source | RSS Feed URL |
|--------|--------------|
| BBC News | `http://feeds.bbci.co.uk/news/rss.xml` |
| NPR | `https://feeds.npr.org/1001/rss.xml` |
| The Guardian (World) | `https://www.theguardian.com/world/rss` |

You can add or modify feeds by editing `scraper/config.py` (the `FEEDS` list).

---

## Setup Instructions

### Prerequisites

- **Node.js** (v20 or later)
- **npm** or **yarn**
- **Python 3.11+** (with `pip`)
- **PostgreSQL 15** (running locally or remotely)

### 1. Clone the repository

```bash
git clone https://github.com/your-username/news-pulse.git
cd news-pulse
```

### 2. Backend

```bash
cd backend
cp .env.example .env   # (if provided) or create one with the required variables
npm install
npx prisma migrate dev   # run migrations
npx prisma generate      # generate Prisma client
```

**Required environment variables (backend):**

```
DATABASE_URL=postgresql://user:pass@localhost:5432/news_pulse
PORT=3001
FRONTEND_URL=http://localhost:3000
SCRAPER_PATH=../scraper/main.py
PYTHON_CMD=python3
SCRAPER_TIMEOUT_MS=120000
LOG_LEVEL=info
```

(If you use a virtual environment for Python, set `PYTHON_CMD` to the full path of the venv’s Python.)

### 3. Scraper (Python)

```bash
cd ../scraper
python3 -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate
pip install -r requirements.txt
```

**Required environment variables (scraper):**

```
DATABASE_URL=postgresql://user:pass@localhost:5432/news_pulse
LOG_LEVEL=INFO
CLUSTER_SIMILARITY_THRESHOLD=0.25
MAX_ARTICLES_PER_FEED=50
ARTICLE_FETCH_TIMEOUT=10
```

(These are read from `.env` in the `scraper/` directory; copy `.env.example` if provided.)

### 4. Frontend

```bash
cd ../frontend
cp .env.example .env   # or create it
npm install
```

**Required environment variable (frontend):**

```
NEXT_PUBLIC_API_URL=http://localhost:3001
```

### 5. Run the services (development)

**Backend:**

```bash
cd backend
npm run dev
```

**Frontend:**

```bash
cd frontend
npm run dev
```

The frontend will be available at `http://localhost:3000`, the backend at `http://localhost:3001`.

### 6. Trigger a manual scrape

Visit the frontend and click the **Refresh** button – the backend will spawn the Python scraper, and the UI will poll for updates.

Alternatively, use `curl`:

```bash
curl -X POST http://localhost:3001/ingest/trigger -H "Content-Type: application/json" -d '{}'
```

---

## Deployment

We recommend deploying on **Render**:

- **Backend:** Render Web Service (Node.js) – set environment variables in the dashboard.
- **Frontend:** Render Static Site or Web Service (Next.js) – set `NEXT_PUBLIC_API_URL`.
- **Scraper:** Render Cron Job – runs `python scraper/main.py` on a schedule (e.g., every hour) or use the backend’s `/ingest/trigger` endpoint with an external cron service like cron-job.org.
- **Database:** Render PostgreSQL (managed) – use the provided connection URL.

Environment variables for each service must be set in Render’s dashboard – never commit secrets.

---

## API Documentation

Once the backend is running, interactive Swagger UI is available at:

```
http://localhost:3001/docs
```

The full API contract is documented in `docs/api/api-contract.md`.

---

## License

This project is open‑source and available under the [MIT License].