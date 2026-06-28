'use client';

import React, { useMemo } from 'react';
import type { TimelineCluster, TimelineResponse } from '@/lib/types';
import { clusterGradient, clusterShadow } from '@/lib/utils';

interface Props {
  clusters: TimelineCluster[];
  timeRange: TimelineResponse['timeRange'] | null;
  selectedId: string | null;
  onClusterClick: (id: string) => void;
  isLoading?: boolean;
}

export function TimelineStrip({ clusters, timeRange, selectedId, onClusterClick, isLoading }: Props) {
  const fromMs = timeRange ? new Date(timeRange.from).getTime() : 0;
  const toMs   = timeRange ? new Date(timeRange.to).getTime()   : 0;

  const { bars, ticks } = useMemo(() => {
    if (!fromMs || !toMs || !clusters.length) return { bars: [], ticks: [] };
    const totalMs = toMs - fromMs;
    const bars = clusters.map(cl => {
      const start = new Date(cl.start).getTime();
      const end = new Date(cl.end).getTime();
      const left = Math.max(0, ((start - fromMs) / totalMs) * 100);
      const width = Math.max(0.5, ((end - start) / totalMs) * 100);
      return { ...cl, left, width };
    });

    // Generate 5 evenly spaced ticks
    const ticks = [];
    const step = totalMs / 5;
    for (let i = 0; i <= 5; i++) {
      const t = fromMs + i * step;
      const leftPct = (i / 5) * 100;
      const date = new Date(t);
      let label = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      // If range is short (<2 days), show time
      if (totalMs < 2 * 24 * 3600000) {
        label = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
      }
      ticks.push({ label, leftPct, major: i % 2 === 0 });
    }
    return { bars, ticks };
  }, [clusters, fromMs, toMs]);

  if (isLoading) {
    return <div className="skeleton" style={{ height: 40, borderRadius: 'var(--r-sm)' }} />;
  }

  if (!bars.length) {
    return (
      <div style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)', borderRadius: 'var(--r-sm)', padding: '12px 16px', textAlign: 'center', color: 'var(--c-m)', fontSize: '0.75rem', fontFamily: 'Inter, sans-serif' }}>
        No clusters in this time range
      </div>
    );
  }

  return (
    <div className="tl-strip-wrapper">
      <div className="tl-strip">
        {/* Ticks and labels */}
        {ticks.map((tick, i) => (
          <React.Fragment key={i}>
            <div className="tl-tick-line" style={{ left: `${tick.leftPct}%` }} />
            <div className="tl-tick-label">{tick.label}</div>
          </React.Fragment>
        ))}

        {/* Bars */}
        {bars.map(bar => {
          const gradient = clusterGradient(bar.sources);
          const isSelected = bar.id === selectedId;
          return (
            <div
              key={bar.id}
              className={`tl-strip-bar${isSelected ? ' selected' : ''}`}
              style={{
                left: `${bar.left}%`,
                width: `${bar.width}%`,
                background: gradient,
                boxShadow: isSelected ? `0 0 0 1px var(--c-accent), var(--shadow-lg)` : 'none',
                transform: isSelected ? 'scaleY(1.3)' : 'scaleY(1)',
              }}
              onClick={() => onClusterClick(bar.id)}
              title={`${bar.label} (${bar.articleCount} articles)`}
            >
              {bar.width > 3 && (
                <span className="tl-strip-label">{bar.articleCount}</span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}