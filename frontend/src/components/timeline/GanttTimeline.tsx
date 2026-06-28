'use client';

import React, { useMemo } from 'react';
import type { TimelineCluster, TimelineResponse } from '@/lib/types';
import { clusterGradient, clusterShadow, computeTicks, dateRange } from '@/lib/utils';

interface Props {
  clusters: TimelineCluster[];
  timeRange: TimelineResponse['timeRange'] | null;
  selectedId: string | null;
  onClusterClick: (id: string) => void;
  isLoading?: boolean;
}

export function GanttTimeline({ clusters, timeRange, selectedId, onClusterClick, isLoading }: Props) {
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
    // Compute ticks (at most 6)
    const ticks = computeTicks(fromMs, toMs).filter((_, i) => i % 2 === 0 || i === 0 || i === computeTicks(fromMs, toMs).length - 1);
    return { bars, ticks };
  }, [clusters, fromMs, toMs]);

  if (isLoading) {
    return (
      <div style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)', borderRadius: 'var(--r-sm)', padding: '20px' }}>
        <div className="skeleton" style={{ height: 20, marginBottom: 12 }} />
        {[1, 2, 3, 4].map(i => (
          <div key={i} style={{ display: 'flex', gap: 16, marginBottom: 12, alignItems: 'center' }}>
            <div className="skeleton" style={{ width: '30%', height: 16 }} />
            <div className="skeleton" style={{ flex: 1, height: 16 }} />
          </div>
        ))}
      </div>
    );
  }

  if (!bars.length) {
    return (
      <div style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)', borderRadius: 'var(--r-sm)', padding: '20px', textAlign: 'center', color: 'var(--c-m)', fontSize: '0.85rem', fontFamily: 'Inter, sans-serif' }}>
        No clusters in this time range
      </div>
    );
  }

  return (
    <div style={{ background: 'var(--c-surface)', border: '1px solid var(--c-border)', borderRadius: 'var(--r-sm)', overflow: 'hidden' }}>
      {/* Time axis header */}
      <div style={{ padding: '8px 16px 0', borderBottom: '1px solid var(--c-border)', position: 'relative', height: 36 }}>
        {ticks.map((tick, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: `calc(30% + ${tick.leftPct * 0.7}%)`,
              transform: 'translateX(-50%)',
              top: 0,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-start',
            }}
          >
            <div style={{ width: 1, height: 8, background: 'var(--c-border)', marginBottom: 2 }} />
            <span className="ui-text" style={{ fontSize: '0.65rem', color: 'var(--c-m)', whiteSpace: 'nowrap', letterSpacing: '0.02em' }}>
              {tick.label}
            </span>
          </div>
        ))}
      </div>

      {/* Cluster rows */}
      <div style={{ maxHeight: 420, overflowY: 'auto', padding: '4px 0' }}>
        {bars.map(bar => {
          const isSelected = bar.id === selectedId;
          const gradient = clusterGradient(bar.sources);
          const shadow = clusterShadow(bar.sources, bar.intensity);

          return (
            <div
              key={bar.id}
              className="anim-fade-in"
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '6px 16px',
                cursor: 'pointer',
                transition: 'background var(--t-fast)',
                background: isSelected ? 'var(--c-surface-2)' : 'transparent',
                borderBottom: '1px solid var(--c-border)',
                minHeight: 50,
              }}
              onClick={() => onClusterClick(bar.id)}
              onMouseEnter={e => {
                if (!isSelected) e.currentTarget.style.background = 'var(--c-surface-2)';
              }}
              onMouseLeave={e => {
                if (!isSelected) e.currentTarget.style.background = 'transparent';
              }}
            >
              {/* Label column */}
              <div style={{ flex: '0 0 30%', minWidth: 0, paddingRight: 12 }}>
                <p className="headline-sm" style={{ fontSize: '0.95rem', color: isSelected ? 'var(--c-accent)' : 'var(--c-h)', fontWeight: 700, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {bar.label}
                </p>
                <span className="ui-text" style={{ fontSize: '0.7rem', color: 'var(--c-m)' }}>
                  {bar.articleCount} article{bar.articleCount !== 1 ? 's' : ''}
                </span>
              </div>

              {/* Bar column */}
              <div style={{ flex: '0 0 70%', position: 'relative', height: 28 }}>
                <div style={{ width: '100%', height: 6, background: 'var(--c-border)', borderRadius: 3, position: 'absolute', top: '50%', transform: 'translateY(-50%)' }} />

                <div
                  style={{
                    position: 'absolute',
                    left: `${bar.left}%`,
                    width: `${bar.width}%`,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    height: 20,
                    borderRadius: 'var(--r-sm)',
                    background: gradient,
                    boxShadow: isSelected ? `0 0 0 1px var(--c-accent), ${shadow}` : shadow,
                    transition: 'all var(--t-fast)',
                  }}
                >
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(255,255,255,0.1) 0%, transparent 60%)', borderRadius: 'inherit' }} />
                </div>

                <div
                  style={{
                    position: 'absolute',
                    right: 0,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    fontSize: '0.65rem',
                    color: 'var(--c-m)',
                    fontFamily: 'Inter, sans-serif',
                    whiteSpace: 'nowrap',
                    marginLeft: 8,
                  }}
                >
                  {dateRange(bar.start, bar.end)}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}