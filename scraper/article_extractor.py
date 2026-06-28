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