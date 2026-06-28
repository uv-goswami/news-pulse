# API Contract — News Pulse

> **Base URL (production):** `https://news-pulse-backend.onrender.com`  
> **Base URL (local dev):** `http://localhost:3001`  
> **API Version:** v1  
> **Content‑Type:** `application/json` (all requests and responses)  
> **Auth:** None – all endpoints are public.  
> **Last Updated:** 2026-06-28

---

## Table of Contents

1. [Overview](#1-overview)  
2. [Global Headers](#2-global-headers)  
3. [Clusters](#3-clusters)  
   - 3.1 `GET /clusters`  
   - 3.2 `GET /clusters/:id`  
4. [Timeline](#4-timeline)  
   - 4.1 `GET /timeline`  
5. [Ingest Pipeline](#5-ingest-pipeline)  
   - 5.1 `POST /ingest/trigger`  
   - 5.2 `GET /ingest/status/:jobId`  
6. [Health](#6-health)  
   - 6.1 `GET /health`  
   - 6.2 `GET /health/ready`  
7. [Error Response Format](#7-error-response-format)  
8. [Ingest Polling Flow](#8-ingest-polling-flow)  
9. [Summary of Error Codes](#9-summary-of-error-codes)

---

## 1. Overview

This API serves the News Pulse system – a topic‑clustered news timeline. The five required endpoints are:

- `GET /clusters` – list clusters  
- `GET /clusters/:id` – cluster detail with articles  
- `GET /timeline` – timeline data for charting  
- `POST /ingest/trigger` – start a scrape + cluster run  
- `GET /ingest/status/:jobId` – poll job progress  

**Authentication:** Not implemented – all endpoints are public. The ingest trigger is protected by a global rate limit.

**Rate limiting:** A global limit of **100 requests per minute** applies to all routes. Exceeding this returns `429 Too Many Requests` with a `Retry-After` header.

---

## 2. Global Headers

| Header | Required | Description |
|--------|----------|-------------|
| `Content-Type` | Yes (on POST) | Must be `application/json`. |
| `X-Request-ID` | Optional | Client‑supplied trace ID; we echo it in the response. |

---

## 3. Clusters

### 3.1 `GET /clusters`

Return a paginated list of all topic clusters, ordered by most recent activity (latest article first).

**Auth required:** No

**Query Parameters:**
| Param | Type | Default | Description |
|-------|------|---------|-------------|
| `page` | integer | 1 | Page number (1‑indexed). |
| `limit` | integer | 20 | Items per page (max 100). |
| `source` | string | — | Filter by source name. Multiple sources can be specified by repeating the parameter: `?source=BBC+News&source=NPR`. The backend treats this as an OR filter – articles from any of the listed sources are included. |
| `from` | ISO‑8601 | — | Return clusters with `latest_article_at` after this datetime. |
| `to` | ISO‑8601 | — | Return clusters with `earliest_article_at` before this datetime. |

**Response `200 OK`:**
```json
{
  "data": [
    {
      "id": "b4e2a1c3-9f8d-4b2a-a1c3-9f8d4b2aa1c3",
      "label": "election senate vote bill",
      "topTerms": ["election", "senate", "vote", "bill", "congress"],
      "articleCount": 7,
      "earliestArticleAt": "2026-06-26T08:14:00Z",
      "latestArticleAt": "2026-06-27T11:47:00Z",
      "sources": ["BBC News", "NPR", "The Guardian"],
      "createdAt": "2026-06-26T09:00:00Z"
    }
  ],
  "meta": {
    "page": 1,
    "limit": 20,
    "total": 43,
    "totalPages": 3
  }
}
```

**Response Fields – Cluster Object:**
| Field | Type | Description |
|-------|------|-------------|
| `id` | UUID string | Cluster identifier. |
| `label` | string | Auto‑generated topic label. |
| `topTerms` | string[] | Top TF‑IDF terms (max 5). |
| `articleCount` | integer | Number of articles in this cluster. |
| `earliestArticleAt` | ISO‑8601 | Publication time of the oldest article. |
| `latestArticleAt` | ISO‑8601 | Publication time of the newest article. |
| `sources` | string[] | Distinct news sources contributing to this cluster. |
| `createdAt` | ISO‑8601 | When this cluster was generated. |

**Error Responses:**
| Status | Code | Condition |
|--------|------|-----------|
| `400` | `VALIDATION_ERROR` | `page` < 1, `limit` > 100, invalid date format. |
| `429` | `RATE_LIMIT_EXCEEDED` | Global rate limit hit. |

---

### 3.2 `GET /clusters/:id`

Return full detail for a single cluster, including all its articles sorted chronologically (oldest first).

**Auth required:** No

**Path Parameters:**
| Param | Type | Description |
|-------|------|-------------|
| `id` | UUID | Cluster ID. |

**Query Parameters:**
| Param | Type | Default | Description |
|-------|------|---------|-------------|
| `source` | string | — | Filter articles within the cluster by source (repeat allowed). |

**Response `200 OK`:**
```json
{
  "id": "b4e2a1c3-9f8d-4b2a-a1c3-9f8d4b2aa1c3",
  "label": "election senate vote bill",
  "topTerms": ["election", "senate", "vote", "bill", "congress"],
  "articleCount": 7,
  "earliestArticleAt": "2026-06-26T08:14:00Z",
  "latestArticleAt": "2026-06-27T11:47:00Z",
  "createdAt": "2026-06-26T09:00:00Z",
  "articles": [
    {
      "id": "c5d3b2a1-...",
      "headline": "Senate passes sweeping election bill after marathon debate",
      "summary": "The Senate voted 52-48 early Friday to pass...",
      "sourceName": "BBC News",
      "sourceUrl": "https://feeds.bbci.co.uk/news/rss.xml",
      "publishedAt": "2026-06-26T08:14:00Z",
      "url": "https://www.bbc.co.uk/news/world-us-canada-..."
    }
  ]
}
```

**Error Responses:**
| Status | Code | Condition |
|--------|------|-----------|
| `400` | `VALIDATION_ERROR` | `id` is not a valid UUID. |
| `404` | `CLUSTER_NOT_FOUND` | No cluster with this ID. |

---

## 4. Timeline

### 4.1 `GET /timeline`

Return cluster data formatted specifically for timeline visualisation. Each cluster becomes a time‑span block with `start`, `end`, and `intensity` – ready for charting libraries like recharts or vis‑timeline.

**Auth required:** No

**Query Parameters:**
| Param | Type | Default | Description |
|-------|------|---------|-------------|
| `from` | ISO‑8601 | 7 days ago | Timeline start boundary. |
| `to` | ISO‑8601 | now | Timeline end boundary. |
| `source` | string | — | Filter by source name (repeat allowed). |
| `minArticles` | integer | 1 | Only include clusters with ≥ this many articles. |

**Response `200 OK`:**
```json
{
  "timeRange": {
    "from": "2026-06-20T00:00:00Z",
    "to": "2026-06-27T23:59:59Z"
  },
  "sources": ["BBC News", "NPR", "The Guardian"],
  "clusters": [
    {
      "id": "b4e2a1c3-...",
      "label": "election senate vote bill",
      "topTerms": ["election", "senate", "vote", "bill"],
      "start": "2026-06-26T08:14:00Z",
      "end": "2026-06-27T11:47:00Z",
      "articleCount": 7,
      "intensity": 0.78,
      "sources": ["BBC News", "NPR"]
    }
  ],
  "meta": {
    "totalClusters": 23,
    "totalArticles": 147,
    "lastIngestAt": "2026-06-27T11:00:00Z"
  }
}
```

**Response Fields – Cluster Object:**
| Field | Type | Description |
|-------|------|-------------|
| `id` | UUID string | Cluster ID. |
| `label` | string | Topic label. |
| `topTerms` | string[] | Top TF‑IDF terms. |
| `start` | ISO‑8601 | Earliest article `published_at` in this cluster. |
| `end` | ISO‑8601 | Latest article `published_at` in this cluster. |
| `articleCount` | integer | Number of articles. |
| `intensity` | float 0.0–1.0 | Normalised article count relative to the largest cluster in the result set. We pre‑compute this so the frontend can size markers directly. |
| `sources` | string[] | Distinct source names. |

**Error Responses:**
| Status | Code | Condition |
|--------|------|-----------|
| `400` | `VALIDATION_ERROR` | `from` > `to`, invalid date format, `minArticles` < 1. |

---

## 5. Ingest Pipeline

### 5.1 `POST /ingest/trigger`

Trigger a new scrape + cluster run. We create an ingest job and return its ID immediately. The job runs asynchronously.

**Auth required:** No (public)

**Request Body:** None

**Response `202 Accepted`:**
```json
{
  "jobId": "d6e4c3b2-...",
  "status": "pending",
  "message": "Ingest job created. Poll /ingest/status/:jobId for updates.",
  "triggeredAt": "2026-06-27T12:00:00Z"
}
```

**Error Responses:**
| Status | Code | Condition |
|--------|------|-----------|
| `409` | `JOB_ALREADY_RUNNING` | An ingest job is already in `running` state. |
| `429` | `RATE_LIMIT_EXCEEDED` | Global rate limit hit. |

---

### 5.2 `GET /ingest/status/:jobId`

Poll the status of an ingest job.

**Auth required:** No (public)

**Path Parameters:**
| Param | Type | Description |
|-------|------|-------------|
| `jobId` | UUID | Job ID from the trigger response. |

**Response `200 OK` (pending):**
```json
{
  "jobId": "d6e4c3b2-...",
  "status": "pending",
  "triggeredBy": "api",
  "triggeredAt": "2026-06-27T12:00:00Z",
  "startedAt": null,
  "finishedAt": null,
  "articlesFetched": null,
  "clustersGenerated": null,
  "errorMessage": null
}
```

**Response `200 OK` (running):**
```json
{
  "jobId": "d6e4c3b2-...",
  "status": "running",
  "triggeredBy": "api",
  "triggeredAt": "2026-06-27T12:00:00Z",
  "startedAt": "2026-06-27T12:00:02Z",
  "finishedAt": null,
  "articlesFetched": null,
  "clustersGenerated": null,
  "errorMessage": null
}
```

**Response `200 OK` (completed):**
```json
{
  "jobId": "d6e4c3b2-...",
  "status": "completed",
  "triggeredBy": "api",
  "triggeredAt": "2026-06-27T12:00:00Z",
  "startedAt": "2026-06-27T12:00:02Z",
  "finishedAt": "2026-06-27T12:00:47Z",
  "articlesFetched": 34,
  "clustersGenerated": 11,
  "errorMessage": null
}
```

**Response `200 OK` (failed):**
```json
{
  "jobId": "d6e4c3b2-...",
  "status": "failed",
  "triggeredBy": "api",
  "triggeredAt": "2026-06-27T12:00:00Z",
  "startedAt": "2026-06-27T12:00:02Z",
  "finishedAt": "2026-06-27T12:00:09Z",
  "articlesFetched": null,
  "clustersGenerated": null,
  "errorMessage": "Feed fetch failed: HTTPSConnectionPool(host='feeds.bbci.co.uk'): Read timed out."
}
```

**Error Responses:**
| Status | Code | Condition |
|--------|------|-----------|
| `400` | `VALIDATION_ERROR` | `jobId` is not a valid UUID. |
| `404` | `JOB_NOT_FOUND` | No job with this ID. |

---

## 6. Health

### 6.1 `GET /health`

Lightweight liveness check. Returns 200 if the API is running.

**Auth required:** No

**Response `200 OK`:**
```json
{
  "status": "ok",
  "timestamp": "2026-06-27T12:00:00Z",
  "version": "1.0.0"
}
```

---

### 6.2 `GET /health/ready`

Readiness check – confirms API + database connectivity.

**Auth required:** No

**Response `200 OK`:**
```json
{
  "status": "ready",
  "checks": {
    "database": "ok",
    "timestamp": "2026-06-27T12:00:00Z"
  }
}
```

**Response `503 Service Unavailable`:**
```json
{
  "status": "not_ready",
  "checks": {
    "database": "error: connection refused"
  }
}
```

---

## 7. Error Response Format

We use a single envelope for all error responses:

```json
{
  "error": {
    "code": "CLUSTER_NOT_FOUND",
    "message": "No cluster found with id b4e2a1c3-9f8d-4b2a-a1c3-9f8d4b2aa1c3",
    "statusCode": 404,
    "requestId": "req-abc123"
  }
}
```

| Field | Type | Description |
|-------|------|-------------|
| `code` | string | Machine‑readable error constant (SCREAMING_SNAKE_CASE). |
| `message` | string | Human‑readable description. Safe to show in UI. |
| `statusCode` | integer | Mirrors the HTTP status code. |
| `requestId` | string | Trace ID for log correlation (echoed from `X-Request-ID` or server‑generated). |

**Validation errors** include a `details` array:

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Request validation failed",
    "statusCode": 400,
    "requestId": "req-abc123",
    "details": [
      {
        "field": "email",
        "message": "must be a valid email address"
      }
    ]
  }
}
```

---

## 8. Ingest Polling Flow

1. Frontend calls `POST /ingest/trigger`.
2. API creates an `ingest_jobs` row with `status = 'pending'` and returns `jobId` (202 Accepted).
3. A background worker in the API (`setInterval`) polls for pending jobs.
4. When a pending job is found, the worker updates status to `'running'`, records `started_at`, and spawns the Python scraper via `child_process.spawn`.
5. Frontend polls `GET /ingest/status/:jobId` every 3 seconds.
6. On scraper exit, the worker updates the job with `finished_at`, counts, or `error_message`, and sets `status` to `'completed'` or `'failed'`.
7. Frontend stops polling on final status and refreshes the timeline.

---

## 9. Summary of Error Codes

| Error Code | HTTP Status | Description |
|------------|-------------|-------------|
| `VALIDATION_ERROR` | 400 | Request body or query parameters failed validation. |
| `CLUSTER_NOT_FOUND` | 404 | No cluster matches the requested ID. |
| `JOB_NOT_FOUND` | 404 | No ingest job matches the requested ID. |
| `JOB_ALREADY_RUNNING` | 409 | A job is already in `running` state; cannot start another. |
| `RATE_LIMIT_EXCEEDED` | 429 | Too many requests; retry after the `Retry-After` header. |
| `INTERNAL_SERVER_ERROR` | 500 | Unexpected server error (should not happen in normal operation). |






