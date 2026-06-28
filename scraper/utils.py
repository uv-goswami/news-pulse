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