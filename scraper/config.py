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