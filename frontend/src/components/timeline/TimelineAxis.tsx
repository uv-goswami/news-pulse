import React from 'react';
import { computeTicks } from '@/lib/utils';

interface TimelineAxisProps {
  fromMs: number;
  toMs: number;
}

export function TimelineAxis({ fromMs, toMs }: TimelineAxisProps) {
  const ticks = computeTicks(fromMs, toMs);

  return (
    <div
      style={{
        position: 'relative',
        height: 32,
        borderTop: '1px solid var(--c-border)',
        marginTop: 6,
        userSelect: 'none',
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    >
      {ticks.map((tick, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            left: `${tick.leftPct}%`,
            transform: 'translateX(-50%)',
            top: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: tick.major ? 1.5 : 1,
              height: tick.major ? 8 : 5,
              background: tick.major ? 'var(--c-border-m)' : 'var(--c-border)',
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontSize: 10,
              color: tick.major ? 'var(--c-b)' : 'var(--c-m)',
              fontWeight: tick.major ? 600 : 400,
              whiteSpace: 'nowrap',
              marginTop: 3,
              fontFamily: "'JetBrains Mono', monospace",
              letterSpacing: tick.major ? '.02em' : 0,
            }}
          >
            {tick.label}
          </span>
        </div>
      ))}
    </div>
  );
}
