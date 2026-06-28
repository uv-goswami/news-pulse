'use client';

import React from 'react';
import type { TimelineCluster } from '@/lib/types';
import { dateRange } from '@/lib/utils';

interface Props {
  cluster: TimelineCluster;
  onClick: (id: string) => void;
}

export function ClusterCard({ cluster, onClick }: Props) {
  const summary = cluster.topTerms.slice(0, 3).join(' · ');

  return (
    <article
      className="anim-fade-in"
      style={{
        background: 'var(--c-surface)',
        border: '1px solid var(--c-border)',
        borderRadius: 'var(--r-sm)',
        padding: '16px 18px 14px',
        cursor: 'pointer',
        transition: 'all var(--t-fast)',
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        height: '100%',
        boxShadow: 'var(--shadow-card)',
        position: 'relative',
      }}
      onClick={() => onClick(cluster.id)}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'var(--c-accent)';
        e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--c-border)';
        e.currentTarget.style.boxShadow = 'var(--shadow-card)';
      }}
    >
      <h3 className="headline-md" style={{ color: 'var(--c-h)', marginBottom: 2 }}>
        {cluster.label || summary}
      </h3>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 4 }}>
        {cluster.topTerms.slice(0, 4).map(term => (
          <span
            key={term}
            className="ui-text"
            style={{
              fontSize: '0.55rem',
              fontWeight: 500,
              color: 'var(--c-m)',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}
          >
            {term}
          </span>
        ))}
      </div>

      <hr className="divider-thin" style={{ margin: '6px 0' }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
        <div>
          <span className="ui-text" style={{ fontSize: '0.55rem', fontWeight: 600, color: 'var(--c-m)', letterSpacing: '0.02em' }}>
            {cluster.articleCount} article{cluster.articleCount !== 1 ? 's' : ''}
          </span>
          <span className="ui-text" style={{ fontSize: '0.55rem', color: 'var(--c-m)', marginLeft: 8 }}>
            {dateRange(cluster.start, cluster.end)}
          </span>
        </div>
        <div style={{ display: 'flex', gap: 3 }}>
          {cluster.sources.slice(0, 3).map(s => (
            <span
              key={s}
              style={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                background: '#888',
                border: '1px solid var(--c-border)',
              }}
              title={s}
            />
          ))}
          {cluster.sources.length > 3 && (
            <span className="ui-text" style={{ fontSize: '0.55rem', color: 'var(--c-m)', marginLeft: 2 }}>+{cluster.sources.length - 3}</span>
          )}
        </div>
      </div>
    </article>
  );
}