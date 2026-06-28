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