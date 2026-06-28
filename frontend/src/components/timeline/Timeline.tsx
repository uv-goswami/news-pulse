'use client';

import React, { useMemo } from 'react';
import type { TimelineCluster, TimelineResponse } from '@/lib/types';
import { layoutClusters } from '@/lib/utils';
import { TimelineBar, canvasHeight } from './TimelineBar';
import { TimelineAxis } from './TimelineAxis';
import { TimelineSkeleton } from '@/components/ui/Skeleton';

interface Props {
  clusters: TimelineCluster[];
  timeRange: TimelineResponse['timeRange'] | null;
  selectedId: string | null;
  onClusterClick: (id: string) => void;
  isLoading?: boolean;
}

export function Timeline({ clusters, timeRange, selectedId, onClusterClick, isLoading }: Props) {
  const fromMs = timeRange ? new Date(timeRange.from).getTime() : 0;
  const toMs   = timeRange ? new Date(timeRange.to).getTime()   : 0;

  const { bars, lanes } = useMemo(
    () => (fromMs && toMs ? layoutClusters(clusters, fromMs, toMs) : { bars: [], lanes: 0 }),
    [clusters, fromMs, toMs],
  );

  if (isLoading) return <TimelineSkeleton />;

  if (!clusters.length) return <EmptyTimeline />;

  const height = canvasHeight(Math.max(lanes, 1));

  return (
    <div style={{ width: '100%', overflowX: 'auto', WebkitOverflowScrolling: 'touch' }}>
      <div style={{ minWidth: 600 }}>
        {/* Canvas */}
        <div
          className="tl-canvas"
          style={{ height }}
          aria-label={`Timeline showing ${clusters.length} news clusters`}
          role="img"
        >
          {/* Background lane stripes */}
          {Array.from({ length: lanes }).map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 10 + i * 64,
                height: 64,
                background: i % 2 === 0 ? 'transparent' : 'rgba(92,95,238,.025)',
                pointerEvents: 'none',
              }}
            />
          ))}

          {/* Bars */}
          {bars.map(bar => (
            <TimelineBar
              key={bar.id}
              bar={bar}
              isSelected={bar.id === selectedId}
              onClick={onClusterClick}
            />
          ))}
        </div>

        {/* Time axis */}
        <TimelineAxis fromMs={fromMs} toMs={toMs} />
      </div>
    </div>
  );
}

function EmptyTimeline() {
  return (
    <div
      className="anim-fade-in"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '52px 24px',
        gap: 12,
        textAlign: 'center',
      }}
    >
      {/* Simple pulse SVG illustration */}
      <svg width="72" height="40" viewBox="0 0 72 40" fill="none" aria-hidden="true">
        <path
          d="M2 20 h12 l4-14 l4 28 l4-20 l4 12 l3-6 h37"
          stroke="#CBD5E0"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <p style={{ fontSize: 15, fontWeight: 600, color: 'var(--c-h)' }}>No clusters yet</p>
      <p style={{ fontSize: 13, color: 'var(--c-m)', maxWidth: 280 }}>
        Trigger a refresh to pull the latest news and group articles by topic.
      </p>
    </div>
  );
}
