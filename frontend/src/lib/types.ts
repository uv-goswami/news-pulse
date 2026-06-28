export interface Article {
  id: string;
  headline: string;
  summary: string | null;
  sourceName: string;
  sourceUrl: string;
  publishedAt: string;
  url: string;
}

export interface TimelineCluster {
  id: string;
  label: string;
  topTerms: string[];
  start: string;
  end: string;
  articleCount: number;
  intensity: number; // 0.0–1.0
  sources: string[];
}

export interface ClusterDetail {
  id: string;
  label: string;
  topTerms: string[];
  articleCount: number;
  earliestArticleAt: string;
  latestArticleAt: string;
  createdAt: string;
  articles: Article[];
}

export interface TimelineResponse {
  timeRange: {
    from: string;
    to: string;
  };
  sources: string[];
  clusters: TimelineCluster[];
  meta: {
    totalClusters: number;
    totalArticles: number;
    lastIngestAt: string | null;
  };
}

export interface IngestTriggerResponse {
  jobId: string;
  status: 'pending';
  message: string;
  triggeredAt: string;
}

export type IngestStatus = 'pending' | 'running' | 'completed' | 'failed';

export interface IngestStatusResponse {
  jobId: string;
  status: IngestStatus;
  triggeredBy: string;
  triggeredAt: string;
  startedAt: string | null;
  finishedAt: string | null;
  articlesFetched: number | null;
  clustersGenerated: number | null;
  errorMessage: string | null;
}

export type TimeRange = '24h' | '7d' | '30d';

/** A cluster that has been assigned to a horizontal swimlane and given pixel-precise positions */
export interface PositionedCluster extends TimelineCluster {
  lane: number;
  leftPct: number;
  widthPct: number;
}

export interface RefreshState {
  phase: 'idle' | 'triggering' | 'pending' | 'running' | 'completed' | 'failed';
  jobId?: string;
  result?: { articlesFetched: number; clustersGenerated: number };
  error?: string;
}
