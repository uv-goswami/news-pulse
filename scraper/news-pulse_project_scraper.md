# PROJECT SOURCE CODE

**Project Root:** `/media/user/New Volume/Internship/news-pulse/scraper`

---

====================================================================================================
# FILE 1

## Relative Path
`.env`

## Absolute Path
`/media/user/New Volume/Internship/news-pulse/scraper/.env`

## Source Code

```text
DATABASE_URL=postgresql://news_user:user@localhost:5432/news_pulse

LOG_LEVEL=INFO
CLUSTER_SIMILARITY_THRESHOLD=0.25
MAX_ARTICLES_PER_FEED=30
ARTICLE_FETCH_TIMEOUT=10
```

====================================================================================================
# FILE 2

## Relative Path
`__init__.py`

## Absolute Path
`/media/user/New Volume/Internship/news-pulse/scraper/__init__.py`

## Source Code

```py
# scraper package
```

====================================================================================================
# FILE 3

## Relative Path
`article_extractor.py`

## Absolute Path
`/media/user/New Volume/Internship/news-pulse/scraper/article_extractor.py`

## Source Code

```py
import trafilatura
import httpx
import logging
from typing import Optional

from .config import ARTICLE_FETCH_TIMEOUT
from .utils import strip_html

logger = logging.getLogger(__name__)

def extract_article_body(url: str) -> Optional[str]:
    """
    Fetch the article page and extract the main body text using trafilatura.
    Returns None if extraction fails.
    """
    try:
        with httpx.Client(timeout=ARTICLE_FETCH_TIMEOUT, follow_redirects=True) as client:
            response = client.get(url)
            response.raise_for_status()
            html = response.text

            # Extract text with trafilatura
            text = trafilatura.extract(html, include_comments=False, include_tables=False)
            if text:
                return text.strip()

            # Fallback: try to get any readable text
            return None

    except httpx.TimeoutException:
        logger.warning(f"Timeout fetching article: {url}")
        return None
    except httpx.HTTPStatusError as e:
        logger.warning(f"HTTP error fetching article {url}: {e}")
        return None
    except Exception as e:
        logger.warning(f"Unexpected error fetching article {url}: {e}")
        return None
```

====================================================================================================
# FILE 4

## Relative Path
`clustering.py`

## Absolute Path
`/media/user/New Volume/Internship/news-pulse/scraper/clustering.py`

## Source Code

```py
import logging
from typing import List, Dict, Any
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from datetime import datetime, timezone

from scraper.config import SIMILARITY_THRESHOLD
from scraper.utils import normalize_text

logger = logging.getLogger(__name__)


def cluster_articles(
    articles: List[Dict[str, Any]],
    similarity_threshold: float = SIMILARITY_THRESHOLD
) -> List[Dict[str, Any]]:
    """
    Cluster articles using TF-IDF + cosine similarity threshold.
    Returns a list of clusters, each with:
        - label: top terms string
        - top_terms: list of terms
        - article_ids: list of article IDs
        - article_count: int
        - earliest_article_at: datetime
        - latest_article_at: datetime
    """
    if len(articles) < 2:
        logger.info("Not enough articles to cluster (need at least 2)")
        return []

    logger.info(f"Clustering {len(articles)} articles with threshold {similarity_threshold}")

    # Build text corpus: headline + summary
    texts = []
    for article in articles:
        combined = f"{article['headline']} {article.get('summary', '')}"
        texts.append(normalize_text(combined))

    # TF-IDF vectorization
    vectorizer = TfidfVectorizer(
        max_features=5000,
        ngram_range=(1, 2),
        min_df=1,
        stop_words='english',
        max_df=0.8,
    )
    try:
        tfidf_matrix = vectorizer.fit_transform(texts)
    except Exception as e:
        logger.error(f"TF-IDF vectorization failed: {e}")
        return []

    # Compute cosine similarity
    similarity_matrix = cosine_similarity(tfidf_matrix)
    feature_names = vectorizer.get_feature_names_out()

    # Group articles by similarity threshold
    clusters = []
    visited = set()

    for i in range(len(articles)):
        if i in visited:
            continue

        # Find all articles similar to article i
        cluster_indices = []
        for j in range(len(articles)):
            if similarity_matrix[i][j] >= similarity_threshold:
                cluster_indices.append(j)
                visited.add(j)

        # Only keep clusters with at least 2 articles
        if len(cluster_indices) < 2:
            continue

        # Extract cluster details
        cluster_articles = [articles[idx] for idx in cluster_indices]
        cluster_ids = [article['id'] for article in cluster_articles]

        # Compute top terms from the cluster's TF-IDF scores
        cluster_term_scores = {}
        for idx in cluster_indices:
            row = tfidf_matrix[idx].toarray().flatten()
            for term_idx, score in enumerate(row):
                if score > 0:
                    term = feature_names[term_idx]
                    cluster_term_scores[term] = cluster_term_scores.get(term, 0) + score

        # Sort terms by total score (descending)
        sorted_terms = sorted(cluster_term_scores.items(), key=lambda x: x[1], reverse=True)
        top_terms = [term for term, _ in sorted_terms[:5]]

        label = ' '.join(top_terms[:3]) if top_terms else 'unknown'

        # Find time range – fallback to current UTC time if missing
        now = datetime.now(timezone.utc)
        earliest = min(cluster_articles, key=lambda a: a.get('published_at', now))
        latest = max(cluster_articles, key=lambda a: a.get('published_at', now))

        clusters.append({
            'label': label,
            'top_terms': top_terms,
            'article_ids': cluster_ids,
            'article_count': len(cluster_indices),
            'earliest_article_at': earliest.get('published_at'),
            'latest_article_at': latest.get('published_at'),
        })

    logger.info(f"Generated {len(clusters)} clusters")
    return clusters
```

====================================================================================================
# FILE 5

## Relative Path
`config.py`

## Absolute Path
`/media/user/New Volume/Internship/news-pulse/scraper/config.py`

## Source Code

```py
import os
from dotenv import load_dotenv

load_dotenv()

DATABASE_URL = os.getenv('DATABASE_URL')
LOG_LEVEL = os.getenv('LOG_LEVEL', 'INFO')
SIMILARITY_THRESHOLD = float(os.getenv('CLUSTER_SIMILARITY_THRESHOLD', '0.25'))
MAX_ARTICLES_PER_FEED = int(os.getenv('MAX_ARTICLES_PER_FEED', '50'))
ARTICLE_FETCH_TIMEOUT = int(os.getenv('ARTICLE_FETCH_TIMEOUT', '10'))

FEEDS = [
    {'name': 'BBC News', 'url': 'http://feeds.bbci.co.uk/news/rss.xml'},
    {'name': 'NPR', 'url': 'https://feeds.npr.org/1001/rss.xml'},
    {'name': 'The Guardian', 'url': 'https://www.theguardian.com/world/rss'},
]
```

====================================================================================================
# FILE 6

## Relative Path
`db_writer.py`

## Absolute Path
`/media/user/New Volume/Internship/news-pulse/scraper/db_writer.py`

## Source Code

```py
import psycopg2
import psycopg2.extras
from typing import List, Dict, Any, Optional
import logging
import json
from datetime import datetime

from scraper.config import DATABASE_URL

logger = logging.getLogger(__name__)


def clean_db_url(url: str) -> str:
    """
    Remove unsupported query parameters (like `?schema=public`) from the database URL.
    psycopg2 does not accept a 'schema' parameter in the DSN.
    """
    if '?' in url:
        url = url.split('?')[0]
    return url


def get_connection():
    clean_url = clean_db_url(DATABASE_URL)
    return psycopg2.connect(clean_url)


def article_exists(url_hash: str) -> bool:
    with get_connection() as conn:
        with conn.cursor() as cur:
            cur.execute("SELECT 1 FROM articles WHERE url_hash = %s", (url_hash,))
            return cur.fetchone() is not None


def insert_article(article_data: Dict[str, Any]) -> str:
    with get_connection() as conn:
        with conn.cursor() as cur:
            cur.execute("""
                INSERT INTO articles (
                    id, url, url_hash, headline, summary, body_text,
                    source_name, source_url, published_at, fetched_at
                )
                VALUES (
                    gen_random_uuid(), %s, %s, %s, %s, %s,
                    %s, %s, %s, NOW()
                )
                RETURNING id
            """, (
                article_data['url'],
                article_data['url_hash'],
                article_data['headline'],
                article_data.get('summary'),
                article_data.get('body_text'),
                article_data['source_name'],
                article_data['source_url'],
                article_data['published_at'],
            ))
            return cur.fetchone()[0]


def get_all_articles_for_clustering() -> List[Dict[str, Any]]:
    """Fetch all articles with id, headline, summary, and published_at for clustering."""
    with get_connection() as conn:
        with conn.cursor(cursor_factory=psycopg2.extras.DictCursor) as cur:
            cur.execute("""
                SELECT id, headline, COALESCE(summary, '') as summary, published_at
                FROM articles
            """)
            return [dict(row) for row in cur.fetchall()]


def delete_all_clusters():
    with get_connection() as conn:
        with conn.cursor() as cur:
            cur.execute("DELETE FROM clusters")
            logger.info("Deleted all clusters")


def insert_cluster(cluster_data: Dict[str, Any]) -> str:
    """
    Insert a new cluster. `top_terms` must be a list; we serialize it to JSON.
    Also set `updated_at` to NOW() to satisfy NOT NULL constraint.
    """
    with get_connection() as conn:
        with conn.cursor() as cur:
            top_terms_json = json.dumps(cluster_data['top_terms'])
            cur.execute("""
                INSERT INTO clusters (
                    id, label, top_terms, article_count,
                    earliest_article_at, latest_article_at, ingest_job_id,
                    created_at, updated_at
                )
                VALUES (
                    gen_random_uuid(), %s, %s::jsonb, %s,
                    %s, %s, %s, NOW(), NOW()
                )
                RETURNING id
            """, (
                cluster_data['label'],
                top_terms_json,
                cluster_data['article_count'],
                cluster_data['earliest_article_at'],
                cluster_data['latest_article_at'],
                cluster_data['ingest_job_id'],
            ))
            return cur.fetchone()[0]


def assign_article_cluster(article_id: str, cluster_id: str):
    with get_connection() as conn:
        with conn.cursor() as cur:
            cur.execute(
                "UPDATE articles SET cluster_id = %s WHERE id = %s",
                (cluster_id, article_id)
            )


def clear_article_clusters():
    with get_connection() as conn:
        with conn.cursor() as cur:
            cur.execute("UPDATE articles SET cluster_id = NULL")


def get_latest_ingest_job_id() -> Optional[str]:
    """Get the ID of the most recent ingest job (to associate clusters with it)."""
    try:
        with get_connection() as conn:
            with conn.cursor() as cur:
                cur.execute(
                    "SELECT id FROM ingest_jobs ORDER BY triggered_at DESC LIMIT 1"
                )
                row = cur.fetchone()
                return row[0] if row else None
    except Exception as e:
        logger.error(f"Failed to get latest ingest job ID: {e}")
        return None
```

====================================================================================================
# FILE 7

## Relative Path
`deduplicator.py`

## Absolute Path
`/media/user/New Volume/Internship/news-pulse/scraper/deduplicator.py`

## Source Code

```py
import logging
from typing import List, Dict, Any

from scraper.db_writer import article_exists
from scraper.utils import url_to_hash

logger = logging.getLogger(__name__)


def is_duplicate(url_hash: str) -> bool:
    """
    Check if an article with the given URL hash already exists in the database.
    """
    return article_exists(url_hash)


def filter_new_articles(articles: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
    """
    Filter out articles that are already in the database OR duplicate within the same batch.
    
    This function does two things:
    1. Ensures each article has a `url_hash` (computes it if missing).
    2. Removes articles that are duplicates within the same batch (same URL hash).
    3. Removes articles that already exist in the database.
    
    Returns a list of new articles ready for insertion.
    """
    seen_hashes = set()
    new_articles = []
    duplicates_in_batch = 0
    duplicates_in_db = 0

    for article in articles:
        # Ensure url_hash exists
        if 'url_hash' not in article or not article['url_hash']:
            article['url_hash'] = url_to_hash(article['url'])

        url_hash = article['url_hash']

        # Check duplicate within the same batch
        if url_hash in seen_hashes:
            duplicates_in_batch += 1
            logger.debug(f"Skipping duplicate within batch: {article['headline'][:50]}...")
            continue

        # Check duplicate in database
        if is_duplicate(url_hash):
            duplicates_in_db += 1
            logger.debug(f"Skipping duplicate in database: {article['headline'][:50]}...")
            continue

        # This article is new – add to seen set and result list
        seen_hashes.add(url_hash)
        new_articles.append(article)

    if duplicates_in_batch > 0:
        logger.info(f"Removed {duplicates_in_batch} duplicate(s) within the same batch")
    if duplicates_in_db > 0:
        logger.info(f"Skipped {duplicates_in_db} article(s) already in the database")

    return new_articles
```

====================================================================================================
# FILE 8

## Relative Path
`main.py`

## Absolute Path
`/media/user/New Volume/Internship/news-pulse/scraper/main.py`

## Source Code

```py
#!/usr/bin/env python3
"""
News Pulse Scraper

Fetches RSS feeds, extracts article bodies, runs TF-IDF clustering,
and writes results to the database.
"""

import sys
import os

# Add the repository root to Python path so imports work from anywhere
repo_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
if repo_root not in sys.path:
    sys.path.insert(0, repo_root)

import logging
from datetime import datetime, timezone
from typing import List, Dict, Any

from scraper.config import LOG_LEVEL, FEEDS
from scraper.utils import setup_logging, url_to_hash
from scraper.rss_fetcher import fetch_feed
from scraper.article_extractor import extract_article_body
from scraper.deduplicator import filter_new_articles
from scraper.db_writer import (
    get_all_articles_for_clustering,
    delete_all_clusters,
    insert_article,
    insert_cluster,
    assign_article_cluster,
    clear_article_clusters,
    get_latest_ingest_job_id,
)
from scraper.clustering import cluster_articles

logger = logging.getLogger(__name__)

def main() -> int:
    try:
        setup_logging(LOG_LEVEL)
        logger.info("Starting News Pulse scraper")
        start_time = datetime.now(timezone.utc)

        ingest_job_id = get_latest_ingest_job_id()
        if ingest_job_id:
            logger.info(f"Using ingest_job_id: {ingest_job_id}")
        else:
            logger.warning("No existing ingest job found – clusters will be created without a job reference")

        # Step 1: Fetch all RSS feeds
        all_articles: List[Dict[str, Any]] = []
        for feed in FEEDS:
            articles = fetch_feed(feed['url'], feed['name'])
            all_articles.extend(articles)

        logger.info(f"Fetched {len(all_articles)} raw articles from all feeds")

        # Step 2: Filter out duplicates
        new_articles = filter_new_articles(all_articles)
        logger.info(f"{len(new_articles)} new articles to insert")

        # Step 3: Extract body text for each new article
        for i, article in enumerate(new_articles):
            logger.info(f"Extracting article {i+1}/{len(new_articles)}: {article['headline'][:50]}...")
            body = extract_article_body(article['url'])
            article['body_text'] = body
            logger.debug(f"Extracted {len(body) if body else 0} characters")

        # Step 4: Insert new articles
        inserted_count = 0
        for article in new_articles:
            if 'url_hash' not in article:
                article['url_hash'] = url_to_hash(article['url'])

            try:
                insert_article(article)
                inserted_count += 1
            except Exception as e:
                logger.error(f"Failed to insert article: {e}")

        logger.info(f"Inserted {inserted_count} new articles")

        # Step 5: Run clustering on ALL articles
        all_articles_for_clustering = get_all_articles_for_clustering()
        logger.info(f"Clustering on {len(all_articles_for_clustering)} total articles")

        if len(all_articles_for_clustering) < 2:
            logger.info("Not enough articles to cluster (need at least 2). Skipping.")
            return 0

        clear_article_clusters()
        logger.info("Cleared existing cluster assignments")

        clusters = cluster_articles(
            all_articles_for_clustering,
            similarity_threshold=0.25
        )

        # Step 6: Delete old clusters and insert new ones
        if clusters:
            delete_all_clusters()

            for cluster_data in clusters:
                insert_data = {
                    'label': cluster_data['label'],
                    'top_terms': cluster_data['top_terms'],
                    'article_count': cluster_data['article_count'],
                    'earliest_article_at': cluster_data['earliest_article_at'],
                    'latest_article_at': cluster_data['latest_article_at'],
                    'ingest_job_id': ingest_job_id,
                }

                cluster_id = insert_cluster(insert_data)

                for article_id in cluster_data['article_ids']:
                    assign_article_cluster(article_id, cluster_id)

            logger.info(f"Inserted {len(clusters)} clusters")
        else:
            logger.info("No clusters generated")

        duration = datetime.now(timezone.utc) - start_time
        logger.info(f"Scraper completed successfully in {duration.total_seconds():.2f}s")
        logger.info(f"New articles: {inserted_count}, Clusters: {len(clusters)}")
        return 0

    except Exception as e:
        logger.exception("Scraper failed with exception")
        return 1

if __name__ == "__main__":
    sys.exit(main())
```

====================================================================================================
# FILE 9

## Relative Path
`news-pulse_scraper.md`

## Absolute Path
`/media/user/New Volume/Internship/news-pulse/scraper/news-pulse_scraper.md`

## Source Code

```md
# Merged Documentation

**Root Directory:** `/media/user/New Volume/Internship/news-pulse/scraper`

---
```

====================================================================================================
# FILE 10

## Relative Path
`requirements.txt`

## Absolute Path
`/media/user/New Volume/Internship/news-pulse/scraper/requirements.txt`

## Source Code

```txt
feedparser==6.0.10
trafilatura==1.6.0
scikit-learn==1.5.2
psycopg2-binary==2.9.10
python-dotenv==1.0.1
```

====================================================================================================
# FILE 11

## Relative Path
`rss_fetcher.py`

## Absolute Path
`/media/user/New Volume/Internship/news-pulse/scraper/rss_fetcher.py`

## Source Code

```py
import feedparser
import logging
import socket
from typing import List, Dict, Any
from datetime import datetime

from .config import FEEDS, MAX_ARTICLES_PER_FEED
from .utils import parse_date, strip_html, url_to_hash

logger = logging.getLogger(__name__)

# Timeout for fetching RSS feeds (seconds)
RSS_FETCH_TIMEOUT = 30

def fetch_feed(feed_url: str, feed_name: str) -> List[Dict[str, Any]]:
    """Fetch and normalize RSS feed items with a timeout."""
    logger.info(f"Fetching feed: {feed_name} ({feed_url})")
    
    # Set a global socket timeout to prevent indefinite hangs
    original_timeout = socket.getdefaulttimeout()
    socket.setdefaulttimeout(RSS_FETCH_TIMEOUT)
    try:
        feed = feedparser.parse(feed_url)
    except Exception as e:
        logger.error(f"Failed to parse feed {feed_name}: {e}")
        return []
    finally:
        # Restore original timeout
        socket.setdefaulttimeout(original_timeout)

    if feed.bozo:
        logger.warning(f"Feed {feed_name} parsing had errors: {feed.bozo_exception}")

    items = []
    for idx, entry in enumerate(feed.entries[:MAX_ARTICLES_PER_FEED]):
        try:
            item = normalize_entry(entry, feed_name, feed_url)
            if item:
                items.append(item)
        except Exception as e:
            logger.error(f"Error normalizing entry {idx} from {feed_name}: {e}")
            continue

    logger.info(f"Fetched {len(items)} items from {feed_name}")
    return items

def normalize_entry(entry, feed_name: str, feed_url: str) -> Dict[str, Any]:
    """Normalize a feed entry into a consistent article dict."""
    # Headline
    headline = entry.get('title', '').strip()
    if not headline:
        return {}

    # Summary – try multiple fields
    summary = ''
    if 'content' in entry and entry.content:
        summary = strip_html(entry.content[0].get('value', ''))
    if not summary and 'summary' in entry:
        summary = strip_html(entry.summary)
    if not summary and 'description' in entry:
        summary = strip_html(entry.description)

    # URL
    url = entry.get('link', '')
    if not url:
        return {}

    # Published date
    published_at = None
    if 'published_parsed' in entry and entry.published_parsed:
        published_at = datetime(*entry.published_parsed[:6])
    elif 'published' in entry:
        published_at = parse_date(entry.published)
    else:
        published_at = datetime.utcnow()

    return {
        'headline': headline,
        'summary': summary,
        'url': url,
        'url_hash': url_to_hash(url),
        'published_at': published_at,
        'source_name': feed_name,
        'source_url': feed_url,
    }
```

====================================================================================================
# FILE 12

## Relative Path
`utils.py`

## Absolute Path
`/media/user/New Volume/Internship/news-pulse/scraper/utils.py`

## Source Code

```py
import logging
from datetime import datetime
import re
from dateutil import parser
import hashlib

def setup_logging(level: str = 'INFO'):
    logging.basicConfig(
        level=getattr(logging, level.upper()),
        format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    )

def parse_date(date_str: str) -> datetime:
    """Parse various RSS date formats to datetime (UTC)."""
    if not date_str:
        return datetime.utcnow()
    try:
        dt = parser.parse(date_str)
        return dt.astimezone().replace(tzinfo=None)  # convert to naive UTC-equivalent
    except Exception:
        return datetime.utcnow()

def strip_html(text: str) -> str:
    """Remove HTML tags from text."""
    if not text:
        return ''
    return re.sub(r'<[^>]+>', '', text).strip()

def url_to_hash(url: str) -> str:
    """Generate SHA-256 hash of a URL."""
    return hashlib.sha256(url.encode()).hexdigest()

def normalize_text(text: str) -> str:
    """Lowercase, remove extra spaces, strip."""
    if not text:
        return ''
    return re.sub(r'\s+', ' ', text.strip().lower())
```

