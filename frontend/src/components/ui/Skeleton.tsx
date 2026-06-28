import React from 'react';

interface SkeletonProps {
  width?: number | string;
  height?: number | string;
  radius?: number | string;
  style?: React.CSSProperties;
}

export function Skeleton({ width = '100%', height = 16, radius = 'var(--r-sm)', style }: SkeletonProps) {
  return (
    <div
      className="skeleton"
      style={{ width, height, borderRadius: radius, flexShrink: 0, ...style }}
      aria-hidden="true"
    />
  );
}

/** Mimics the timeline canvas during initial load */
export function TimelineSkeleton() {
  const lanes = [
    [{ left: '2%', width: '28%', height: 36 }, { left: '38%', width: '18%', height: 24 }, { left: '70%', width: '22%', height: 36 }],
    [{ left: '8%', width: '16%', height: 28 }, { left: '32%', width: '32%', height: 40 }, { left: '80%', width: '14%', height: 28 }],
    [{ left: '1%', width: '12%', height: 24 }, { left: '55%', width: '36%', height: 32 }],
  ];

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: 220,
        overflow: 'hidden',
      }}
      aria-label="Loading timeline…"
      aria-busy="true"
    >
      {lanes.map((lane, li) =>
        lane.map((bar, bi) => (
          <div
            key={`${li}-${bi}`}
            className="skeleton"
            style={{
              position: 'absolute',
              left: bar.left,
              width: bar.width,
              height: bar.height,
              top: 8 + li * 68,
              borderRadius: 6,
            }}
          />
        )),
      )}
      {/* Axis skeleton */}
      {[10, 30, 52, 73, 92].map(left => (
        <div key={left} style={{ position: 'absolute', bottom: 12, left: `${left}%` }}>
          <Skeleton width={48} height={10} style={{ marginLeft: -24 }} />
        </div>
      ))}
    </div>
  );
}

/** Skeleton for the cluster detail panel */
export function DetailSkeleton() {
  return (
    <div style={{ padding: '20px 0', display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Skeleton width="55%" height={22} />
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {[80, 64, 72, 56].map(w => <Skeleton key={w} width={w} height={20} radius={20} />)}
      </div>
      <Skeleton width="40%" height={14} />
      <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 10 }}>
        {[1, 2, 3, 4].map(i => (
          <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
            <Skeleton width={48} height={48} radius={6} />
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
              <Skeleton width="80%" height={14} />
              <Skeleton width="50%" height={12} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
