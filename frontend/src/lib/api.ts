import type {
  TimelineResponse,
  ClusterDetail,
  IngestTriggerResponse,
  IngestStatusResponse,
  TimeRange,
} from './types';

const BASE = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001';

async function req<T>(path: string, init?: RequestInit): Promise<T> {
  // Only set Content-Type if there's a body
  const headers: Record<string, string> = { ...(init?.headers as Record<string, string> ?? {}) };
  const hasBody = init?.body !== undefined && init?.body !== null && init?.body !== '';
  if (hasBody) {
    headers['Content-Type'] = 'application/json';
  }

  const res = await fetch(`${BASE}${path}`, {
    ...init,
    headers,
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body?.error?.message ?? `HTTP ${res.status}`);
  }
  return res.json() as Promise<T>;
}

// ─── Timeline ─────────────────────────────────────────────────────────────────

export async function fetchTimeline(opts?: {
  sources?: string[];
  range?: TimeRange;
  minArticles?: number;
}): Promise<TimelineResponse> {
  const url = new URL(`${BASE}/timeline`);

  if (opts?.sources?.length) {
    opts.sources.forEach(s => url.searchParams.append('source', s));
  }

  if (opts?.range) {
    const now = Date.now();
    const MS: Record<TimeRange, number> = {
      '24h': 24 * 3_600_000,
      '7d':  7  * 86_400_000,
      '30d': 30 * 86_400_000,
    };
    url.searchParams.set('from', new Date(now - MS[opts.range]).toISOString());
    url.searchParams.set('to',   new Date(now).toISOString());
  }

  if (opts?.minArticles) url.searchParams.set('minArticles', String(opts.minArticles));

  const res = await fetch(url.toString(), { cache: 'no-store' });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body?.error?.message ?? `HTTP ${res.status}`);
  }
  return res.json();
}

// ─── Clusters ─────────────────────────────────────────────────────────────────

export function fetchClusterDetail(id: string): Promise<ClusterDetail> {
  return req<ClusterDetail>(`/clusters/${id}`, { cache: 'no-store' } as RequestInit);
}

// ─── Ingest ───────────────────────────────────────────────────────────────────

export function triggerIngest(): Promise<IngestTriggerResponse> {
  // Send empty JSON body to satisfy the server's content-type requirement
  return req<IngestTriggerResponse>('/ingest/trigger', {
    method: 'POST',
    body: '{}',
  });
}

export function fetchIngestStatus(jobId: string): Promise<IngestStatusResponse> {
  return req<IngestStatusResponse>(`/ingest/status/${jobId}`);
}