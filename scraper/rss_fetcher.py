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