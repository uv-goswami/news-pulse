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