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