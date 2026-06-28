# ADR-006: TF-IDF + Cosine Similarity for Topic Grouping

## Status
Accepted – Implemented

## Context
The core requirement is grouping related news articles into topic clusters. I chose Option B (TF‑IDF) over keyword overlap because it handles term rarity and multi‑word phrases better.

## Decision
I use TF‑IDF vectorization followed by cosine similarity thresholding with the following pipeline:
1. Combine headline + summary text.
2. Normalise: lowercase, remove stopwords, strip punctuation.
3. Vectorise using `TfidfVectorizer` (max_features=5000, ngram_range=(1,2), min_df=2).
4. Compute pairwise cosine similarity matrix.
5. Apply threshold: similarity ≥ 0.25 → same cluster.
6. Cluster label = top 3 TF‑IDF terms with highest mean weight in the cluster.
7. Store cluster_id, label, top_terms (JSONB), article count, time range.

**Why 0.25?**  
News articles on the same topic typically have cosine similarities between 0.20 and 0.40 on headline+summary text. Below 0.20 is noise; above 0.40 is near‑duplicate. 0.25 is a conservative middle ground – it may miss some loose connections but rarely produces false clusters. The threshold is configurable via `CLUSTER_SIMILARITY_THRESHOLD`.

## Alternatives Considered
**KMeans** – requires knowing the number of clusters (`k`) upfront, which we do not know.  
**DBSCAN** – density‑based, but its `eps` and `min_samples` parameters are less intuitive to tune.  
**Keyword overlap (Option A)** – simpler but less effective with multi‑word phrases and term rarity.  
**LLM‑based clustering** – accurate but introduces API cost and latency; out of scope.

## Consequences
- `scikit-learn` is mature and well‑documented.
- The pipeline runs in under 2 seconds for ~200 articles on a `t3.micro`.
- Cosine similarity on short text can miss topically related articles that use different vocabulary (e.g. "ceasefire" vs "peace deal") – acknowledged as the primary limitation.
- The similarity matrix is O(n²) in memory; for n=200 it is trivial, but for n=10,000 it would be a bottleneck – noted as a future improvement.

## Date
2026-06-27