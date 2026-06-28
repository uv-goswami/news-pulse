# ADR-002: Python for RSS Ingestion and NLP

**Status:** Accepted

**Date:** 2026-06-27

## Context

The assessment requires pulling articles from RSS feeds, extracting full article body text from web pages, and running NLP (TF‑IDF) to group articles. I needed a language with mature libraries for all three tasks.

## Decision

I chose Python 3.11 with the following libraries:

| Task | Library |
|------|---------|
| RSS parsing | `feedparser` |
| Full article extraction | `trafilatura` |
| HTTP requests | `httpx` (async-capable) |
| TF‑IDF + clustering | `scikit-learn` |
| DB writes | `psycopg2` / `SQLAlchemy` |
| Deduplication hashing | `hashlib` (stdlib) |

## Why

- Python’s NLP ecosystem is far richer than Node.js; `scikit-learn` is the de facto standard for TF‑IDF.
- `trafilatura` is one of the best open‑source tools for extracting clean article text.
- The scraper is a self‑contained script that can run as a one‑off process – ideal for Render’s Cron Job service.

## Alternatives Considered

**Node.js** – has RSS parsers but lacks robust TF‑IDF implementations.  
**Go** – fast but no meaningful NLP ecosystem.

## Consequences

- The scraper runs as a **separate Render Cron Job** – it does not share a runtime with the Node.js API. This avoids resource contention and simplifies scaling.
- The cron job executes `python scraper/main.py` every hour. It writes directly to the PostgreSQL database.
- Logs from the scraper are captured by Render’s log aggregator – no PM2 or EC2 log files needed.
- Dependencies are managed in a `requirements.txt` file within the `scraper/` folder.

## Date

2026-06-27