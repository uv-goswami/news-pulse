'use client';

import React, { useState, useCallback, useEffect, useMemo, useRef } from 'react';
import type {
  TimelineResponse,
  TimelineCluster,
  ClusterDetail,
  RefreshState,
  TimeRange,
} from '@/lib/types';
import {
  fetchTimeline,
  fetchClusterDetail,
  triggerIngest,
  fetchIngestStatus,
} from '@/lib/api';
import { usePolling } from '@/hooks/usePolling';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { Header } from './header/Header';
import { SourceFilter, TimeRangeSelector, SearchBox } from './timeline/SourceFilter';
import { GanttTimeline } from './timeline/GanttTimeline';
import { ClusterCard } from './cluster/ClusterCard';
import { ClusterDetailModal } from './cluster/ClusterDetailModal';
import { ToastContainer, useToast } from './ui/Toast';

const PAGE_SIZE = 12;

interface Props {
  initialData: TimelineResponse | null;
  initialSources: string[];
  initialRange: TimeRange;
  initialError: string | null;
}

export function NewsPulseClient({
  initialData,
  initialSources,
  initialRange,
  initialError,
}: Props) {
  // ── Data state ──
  const [data, setData] = useState<TimelineResponse | null>(initialData);
  const [isLoadingTimeline, setLoadingTL] = useState(false);
  const [timelineError, setTimelineError] = useState<string | null>(initialError);

  // ── Filters ──
  const [activeSources, setActiveSources] = useState<Set<string>>(new Set(initialSources));
  const [timeRange, setTimeRange] = useState<TimeRange>(initialRange);
  const [searchQuery, setSearchQuery] = useState('');

  // ── Selection (modal) ──
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [clusterDetail, setClusterDetail] = useState<ClusterDetail | null>(null);
  const [detailLoading, setDetailLoading] = useState(false);

  // ── Pagination ──
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // ── Refresh ──
  const [refreshState, setRefreshState] = useState<RefreshState>({ phase: 'idle' });
  const [polling, setPolling] = useState(false);
  const refreshResetTimer = useRef<NodeJS.Timeout | null>(null);

  // ── Toast ──
  const { toasts, add: addToast, dismiss } = useToast();

  // ── Derived: filtered & sorted clusters ──
  const filteredClusters = useMemo((): TimelineCluster[] => {
    if (!data) return [];
    let list = data.clusters;
    if (activeSources.size > 0) {
      list = list.filter(cl => cl.sources.some(s => activeSources.has(s)));
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        cl =>
          cl.label.toLowerCase().includes(q) ||
          cl.topTerms.some(t => t.toLowerCase().includes(q))
      );
    }
    return list.sort((a, b) => new Date(b.start).getTime() - new Date(a.start).getTime());
  }, [data, activeSources, searchQuery]);

  const visibleClusters = useMemo(() => filteredClusters.slice(0, visibleCount), [filteredClusters, visibleCount]);
  const hasMore = visibleCount < filteredClusters.length;

  // ── Infinite scroll ──
  const sentinelRef = useInfiniteScroll(
    () => {
      if (!hasMore || isLoadingMore || isLoadingTimeline) return;
      setIsLoadingMore(true);
      setTimeout(() => {
        setVisibleCount(prev => Math.min(prev + PAGE_SIZE, filteredClusters.length));
        setIsLoadingMore(false);
      }, 300);
    },
    hasMore,
    isLoadingMore || isLoadingTimeline
  );

  // ── Load timeline ──
  const loadTimeline = useCallback(
    async (sources: Set<string>, range: TimeRange) => {
      setLoadingTL(true);
      setTimelineError(null);
      setVisibleCount(PAGE_SIZE);
      try {
        const sourcesArr = Array.from(sources);
        const result = await fetchTimeline({
          sources: sourcesArr.length ? sourcesArr : undefined,
          range,
        });
        setData(result);
        setSelectedId(prev =>
          prev && result.clusters.some(c => c.id === prev) ? prev : null
        );
      } catch (err) {
        const msg = (err as Error).message;
        setTimelineError(msg);
        addToast('error', `Couldn't load timeline: ${msg}`);
      } finally {
        setLoadingTL(false);
      }
    },
    [addToast]
  );

  const handleSourceToggle = useCallback(
    (source: string) => {
      setActiveSources(prev => {
        const next = new Set(prev);
        if (next.size === 0) {
          (data?.sources ?? []).forEach(s => s !== source && next.add(s));
        } else if (next.has(source)) {
          next.delete(source);
        } else {
          next.add(source);
        }
        void loadTimeline(next, timeRange);
        return next;
      });
    },
    [data, loadTimeline, timeRange]
  );

  const handleTimeRangeChange = useCallback(
    (range: TimeRange) => {
      setTimeRange(range);
      void loadTimeline(activeSources, range);
    },
    [activeSources, loadTimeline]
  );

  // ── Cluster click ──
  const handleClusterClick = useCallback(async (id: string) => {
    if (id === selectedId) {
      setSelectedId(null);
      setClusterDetail(null);
      return;
    }
    setSelectedId(id);
    setClusterDetail(null);
    setDetailLoading(true);
    try {
      const detail = await fetchClusterDetail(id);
      setClusterDetail(detail);
    } catch (err) {
      addToast('error', `Couldn't load cluster: ${(err as Error).message}`);
      setSelectedId(null);
    } finally {
      setDetailLoading(false);
    }
  }, [selectedId, addToast]);

  // ── Refresh ──
  const handleRefresh = useCallback(async () => {
    const phase = refreshState.phase;
    if (phase !== 'idle' && phase !== 'completed' && phase !== 'failed') return;
    if (refreshResetTimer.current) clearTimeout(refreshResetTimer.current);
    setRefreshState({ phase: 'triggering' });
    try {
      const { jobId } = await triggerIngest();
      setRefreshState({ phase: 'pending', jobId });
      setPolling(true);
    } catch (err) {
      const msg = (err as Error).message;
      setRefreshState({ phase: 'failed', error: msg });
      addToast('error', msg.toLowerCase().includes('running') ? 'A refresh is already in progress.' : `Couldn't start refresh: ${msg}`);
      refreshResetTimer.current = setTimeout(() => setRefreshState({ phase: 'idle' }), 5000);
    }
  }, [refreshState.phase, addToast]);

  usePolling({
    enabled: polling && !!refreshState.jobId,
    intervalMs: 3000,
    onTick: () => fetchIngestStatus(refreshState.jobId!),
    onResult: status => {
      if (status.status === 'running') setRefreshState(prev => ({ ...prev, phase: 'running' }));
      if (status.status === 'completed') {
        setPolling(false);
        const result = { articlesFetched: status.articlesFetched ?? 0, clustersGenerated: status.clustersGenerated ?? 0 };
        setRefreshState({ phase: 'completed', result });
        addToast('success', `Done — ${result.clustersGenerated} clusters · ${result.articlesFetched} articles`);
        void loadTimeline(activeSources, timeRange);
        refreshResetTimer.current = setTimeout(() => setRefreshState({ phase: 'idle' }), 8000);
      }
      if (status.status === 'failed') {
        setPolling(false);
        const error = status.errorMessage ?? 'Unknown error';
        setRefreshState({ phase: 'failed', error });
        addToast('error', `Refresh failed: ${error}`);
        refreshResetTimer.current = setTimeout(() => setRefreshState({ phase: 'idle' }), 6000);
      }
    },
    onError: err => {
      setPolling(false);
      setRefreshState({ phase: 'failed', error: err.message });
      addToast('error', `Polling error: ${err.message}`);
    },
    shouldStop: s => s.status === 'completed' || s.status === 'failed',
  });

  useEffect(() => () => {
    if (refreshResetTimer.current) clearTimeout(refreshResetTimer.current);
  }, []);

  // ── Render ──
  const allSources = data?.sources ?? [];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--c-bg)' }}>
      <Header meta={data?.meta ?? null} refreshState={refreshState} onRefresh={handleRefresh} />

      <main style={{ maxWidth: 1280, margin: '0 auto', padding: '20px 24px 48px' }}>

        {/* Error banner */}
        {timelineError && !data && (
          <div style={{ marginBottom: 20, padding: '12px 16px', background: '#4A2A2A', border: '1px solid #6A3A3A', borderRadius: 'var(--r-sm)', display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 18, color: '#C88A7A' }}>!</span>
            <div style={{ flex: 1 }}>
              <p className="ui-text" style={{ fontSize: '0.8rem', fontWeight: 600, color: '#E0C8C0' }}>Couldn't connect to the API</p>
              <p className="ui-text" style={{ fontSize: '0.7rem', color: '#C0A8A0' }}>{timelineError}</p>
            </div>
            <button onClick={() => void loadTimeline(activeSources, timeRange)} className="ui-text" style={{ padding: '4px 12px', borderRadius: 'var(--r-sm)', border: '1px solid #8A6A5A', background: 'transparent', color: '#E0C8C0', fontSize: '0.7rem', fontWeight: 600, cursor: 'pointer' }}>
              Retry
            </button>
          </div>
        )}

        {/* Controls row */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center', marginBottom: 16 }}>
          <SourceFilter allSources={allSources} activeSources={activeSources} onToggle={handleSourceToggle} />
          <div style={{ marginLeft: 'auto', display: 'flex', gap: 10, alignItems: 'center' }}>
            <SearchBox value={searchQuery} onChange={setSearchQuery} />
            <TimeRangeSelector value={timeRange} onChange={handleTimeRangeChange} />
          </div>
        </div>

        {/* ── Gantt Timeline section ── */}
        <div className="tl-section">
          <div className="tl-section-title">Chronology</div>
          <div className="tl-section-sub">
            Explore the spread of news clusters over time – each bar represents a topic, width indicates duration, click for details.
          </div>
          <GanttTimeline
            clusters={filteredClusters}
            timeRange={data?.timeRange ?? null}
            selectedId={selectedId}
            onClusterClick={handleClusterClick}
            isLoading={isLoadingTimeline}
          />
        </div>

        {/* Cluster grid – 3 columns */}
        {isLoadingTimeline ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: 16, marginTop: 24 }}>
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="skeleton" style={{ height: 140, borderRadius: 'var(--r-sm)' }} />
            ))}
          </div>
        ) : visibleClusters.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '60px 20px', color: 'var(--c-m)' }}>
            <p className="headline-md">No clusters found</p>
            <p className="subhead" style={{ fontSize: '0.9rem', marginTop: 8 }}>Adjust your filters or refresh the data.</p>
          </div>
        ) : (
          <>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 16, marginTop: 24 }}>
              {visibleClusters.map(cluster => (
                <ClusterCard key={cluster.id} cluster={cluster} onClick={handleClusterClick} />
              ))}
            </div>
            {hasMore && <div ref={sentinelRef} style={{ height: 16, marginTop: 16 }} />}
            {isLoadingMore && (
              <div className="ui-text" style={{ textAlign: 'center', padding: 12, color: 'var(--c-m)', fontSize: '0.8rem' }}>
                Loading more…
              </div>
            )}
          </>
        )}

        {/* Footer */}
        <footer style={{ marginTop: 40, borderTop: '2px solid var(--c-border)', paddingTop: 16, textAlign: 'center', fontSize: '0.65rem', color: 'var(--c-m)', fontFamily: 'Inter, sans-serif', letterSpacing: '0.04em' }}>
          NEWSPULSE DIGITAL EDITION — LIVE CLUSTERING ACROSS NEWS SOURCES
          {data?.meta.lastIngestAt && <> · LAST CRAWLED {relativeTime(data.meta.lastIngestAt)}</>}
        </footer>
      </main>

      <ClusterDetailModal cluster={clusterDetail} isOpen={!!selectedId} onClose={() => { setSelectedId(null); setClusterDetail(null); }} />
      <ToastContainer toasts={toasts} onDismiss={dismiss} />
    </div>
  );
}

// Helper (move to utils if preferred)
function relativeTime(iso: string): string {
  const diffMs = Date.now() - new Date(iso).getTime();
  const m = Math.floor(diffMs / 60000);
  if (m < 1) return 'just now';
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  const d = Math.floor(h / 24);
  if (d === 1) return 'yesterday';
  if (d < 7) return `${d}d ago`;
  return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}