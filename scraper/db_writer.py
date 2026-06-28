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