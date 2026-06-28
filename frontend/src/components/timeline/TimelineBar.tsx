'use client';

import React, { useState } from 'react';
import type { PositionedCluster } from '@/lib/types';
import { clusterGradient, clusterShadow, getSourceColor, dateRange } from '@/lib/utils';

const LANE_HEIGHT = 64;   // px per swimlane row
const MIN_BAR_H  = 20;    // px
const MAX_BAR_H  = 44;    // px
const TOP_PAD    = 10;    // px above first lane

interface Props {
  bar: PositionedCluster;
  isSelected: boolean;
  onClick: (id: string) => void;
}

export const TimelineBar = React.memo(function TimelineBar({ bar, isSelected, onClick }: Props) {
  const [hovered, setHovered] = useState(false);

  const barH = MIN_BAR_H + Math.round((MAX_BAR_H - MIN_BAR_H) * bar.intensity);
  const topPx = TOP_PAD + bar.lane * LANE_HEIGHT + (MAX_BAR_H - barH) / 2;

  const gradient = clusterGradient(bar.sources);
  const shadow   = clusterShadow(bar.sources, bar.intensity);

  const label = bar.topTerms.slice(0, 3).join(' · ') || bar.label;

  return (
    <>
      {/* Vertical grid line behind bar */}
      <div
        className="tl-tick-line"
        style={{ left: `${bar.leftPct}%`, opacity: hovered || isSelected ? 0.6 : 0 }}
      />

      <div
        className={`tl-bar${isSelected ? ' selected' : ''}`}
        role="button"
        tabIndex={0}
        aria-label={`Cluster: ${label}, ${bar.articleCount} article${bar.articleCount === 1 ? '' : 's'}`}
        aria-pressed={isSelected}
        style={{
          left:       `${bar.leftPct}%`,
          width:      `${bar.widthPct}%`,
          top:        topPx,
          height:     barH,
          background: gradient,
          boxShadow:  isSelected
            ? `0 0 0 2.5px #5C5FEE, 0 0 0 5px rgba(92,95,238,.18), ${shadow}`
            : hovered
              ? `0 4px 16px rgba(0,0,0,.18), ${shadow}`
              : shadow,
          zIndex:     isSelected ? 20 : hovered ? 10 : bar.lane + 1,
        }}
        onClick={() => onClick(bar.id)}
        onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && onClick(bar.id)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Gloss highlight */}
        <div className="tl-bar-gloss" />

        {/* Article count dot */}
        {bar.articleCount >= 3 && (
          <span
            style={{
              position: 'absolute',
              top: 3,
              right: 5,
              background: 'rgba(255,255,255,.55)',
              borderRadius: 8,
              fontSize: 9,
              fontWeight: 700,
              padding: '0 4px',
              lineHeight: '14px',
              color: 'rgba(0,0,0,.65)',
              pointerEvents: 'none',
            }}
          >
            {bar.articleCount}
          </span>
        )}
      </div>

      {/* Hover tooltip — rendered outside the bar so it's never clipped */}
      {hovered && !isSelected && (
        <div
          style={{
            position: 'absolute',
            left:    `${bar.leftPct + bar.widthPct / 2}%`,
            top:     topPx - 6,
            transform: 'translate(-50%, -100%)',
            zIndex:  200,
            pointerEvents: 'none',
            animation: 'fadeIn 120ms ease both',
          }}
        >
          <div
            style={{
              background: 'var(--c-h)',
              color: '#fff',
              borderRadius: 6,
              padding: '6px 10px',
              fontSize: 12,
              lineHeight: 1.4,
              whiteSpace: 'nowrap',
              maxWidth: 240,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              boxShadow: '0 4px 12px rgba(0,0,0,.25)',
            }}
          >
            <div style={{ fontWeight: 600, marginBottom: 2, overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {label}
            </div>
            <div style={{ opacity: .75, fontSize: 11 }}>
              {bar.articleCount} article{bar.articleCount !== 1 ? 's' : ''} · {dateRange(bar.start, bar.end)}
            </div>
            {/* Source dots */}
            <div style={{ marginTop: 4, display: 'flex', gap: 4, flexWrap: 'wrap' }}>
              {bar.sources.map(s => {
                const c = getSourceColor(s);
                return (
                  <span
                    key={s}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 3,
                      fontSize: 10, opacity: .85,
                    }}
                  >
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: c.from, flexShrink: 0 }} />
                    {s}
                  </span>
                );
              })}
            </div>
          </div>
          {/* Arrow */}
          <div
            style={{
              width: 0, height: 0,
              borderLeft: '5px solid transparent',
              borderRight: '5px solid transparent',
              borderTop: '5px solid var(--c-h)',
              margin: '0 auto',
            }}
          />
        </div>
      )}
    </>
  );
});

/** Calculate total canvas height from number of lanes */
export function canvasHeight(lanes: number): number {
  return TOP_PAD + lanes * LANE_HEIGHT + MAX_BAR_H + 6;
}
