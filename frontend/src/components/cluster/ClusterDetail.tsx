'use client';

import React, { useMemo } from 'react';
import type { ClusterDetail } from '@/lib/types';
import { getSourceColor, shortTime, shortDate, relativeTime, dateRange, capitalise } from '@/lib/utils';
import { TermBadge, SourceBadge } from '@/components/ui/Badge';
import { DetailSkeleton } from '@/components/ui/Skeleton';

interface Props {
  cluster: ClusterDetail | null;
  clusterId: string;
  isLoading: boolean;
  onClose: () => void;
}

export function ClusterDetailPanel({ cluster, isLoading, onClose }: Props) {
  return (
    <div
      className="anim-slide-up"
      style={{
        marginTop: 16,
        background: 'var(--c-surface)',
        borderRadius: 'var(--r-lg)',
        boxShadow: 'var(--shadow-md)',
        border: '1px solid var(--c-border)',
        overflow: 'hidden',
      }}
    >
      {isLoading || !cluster ? (
        <div style={{ padding: '20px 24px' }}>
          <DetailSkeleton />
        </div>
      ) : (
        <DetailContent cluster={cluster} onClose={onClose} />
      )}
    </div>
  );
}

// ─── Full detail content ──────────────────────────────────────────────────────

function DetailContent({ cluster, onClose }: { cluster: ClusterDetail; onClose: () => void }) {
  // Source breakdown
  const sourceBreakdown = useMemo(() => {
    const counts: Record<string, number> = {};
    cluster.articles.forEach(a => {
      counts[a.sourceName] = (counts[a.sourceName] ?? 0) + 1;
    });
    return Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .map(([name, count]) => ({
        name,
        count,
        pct: (count / cluster.articleCount) * 100,
        color: getSourceColor(name),
      }));
  }, [cluster]);

  const label = cluster.topTerms.slice(0, 4).map(capitalise).join(' · ') || cluster.label;

  return (
    <div>
      {/* Header strip */}
      <div
        style={{
          padding: '18px 24px 14px',
          borderBottom: '1px solid var(--c-border)',
          display: 'flex',
          alignItems: 'flex-start',
          gap: 12,
          background: 'var(--c-surface-2)',
        }}
      >
        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{ fontSize: 11, fontWeight: 600, color: 'var(--c-primary)', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: 4 }}>
            Topic cluster
          </p>
          <h2
            style={{
              fontSize: 17,
              fontWeight: 700,
              color: 'var(--c-h)',
              lineHeight: 1.3,
              marginBottom: 8,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
            title={label}
          >
            {label}
          </h2>

          {/* Top terms */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
            {cluster.topTerms.map(t => <TermBadge key={t} term={t} />)}
          </div>
        </div>

        {/* Meta + close */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8, flexShrink: 0 }}>
          <button
            onClick={onClose}
            aria-label="Close detail panel"
            style={{
              width: 28, height: 28,
              borderRadius: '50%',
              border: '1.5px solid var(--c-border-m)',
              background: 'var(--c-surface)',
              color: 'var(--c-m)',
              cursor: 'pointer',
              fontSize: 16,
              lineHeight: '26px',
              textAlign: 'center',
              transition: 'all var(--t-fast)',
            }}
            onMouseEnter={e => { (e.target as HTMLButtonElement).style.background = '#FFF5F5'; (e.target as HTMLButtonElement).style.color = '#E53E3E'; }}
            onMouseLeave={e => { (e.target as HTMLButtonElement).style.background = 'var(--c-surface)'; (e.target as HTMLButtonElement).style.color = 'var(--c-m)'; }}
          >
            ×
          </button>
          <div style={{ textAlign: 'right' }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: 'var(--c-h)' }}>
              {cluster.articleCount} article{cluster.articleCount !== 1 ? 's' : ''}
            </p>
            <p style={{ fontSize: 11, color: 'var(--c-m)', marginTop: 2 }}>
              {dateRange(cluster.earliestArticleAt, cluster.latestArticleAt)}
            </p>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 0 }}>
        {/* Articles list (main column) */}
        <div
          style={{
            flex: 1,
            minWidth: 0,
            maxHeight: 420,
            overflowY: 'auto',
            padding: '12px 0',
          }}
        >
          {cluster.articles.map((article, i) => {
            const c = getSourceColor(article.sourceName);
            return (
              <a
                key={article.id}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="anim-fade-in"
                style={{
                  display: 'flex',
                  gap: 12,
                  padding: '10px 24px',
                  cursor: 'pointer',
                  borderBottom: i < cluster.articles.length - 1 ? '1px solid var(--c-border)' : 'none',
                  transition: 'background var(--t-fast)',
                  textDecoration: 'none',
                  animationDelay: `${i * 30}ms`,
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--c-surface-2)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                {/* Source colour bar */}
                <div
                  style={{
                    width: 3,
                    borderRadius: 3,
                    background: `linear-gradient(180deg, ${c.from}, ${c.to})`,
                    flexShrink: 0,
                    alignSelf: 'stretch',
                  }}
                />

                <div style={{ flex: 1, minWidth: 0 }}>
                  <p
                    style={{
                      fontSize: 13,
                      fontWeight: 600,
                      color: 'var(--c-h)',
                      lineHeight: 1.4,
                      marginBottom: 4,
                      overflow: 'hidden',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                    }}
                  >
                    {article.headline}
                  </p>
                  {article.summary && (
                    <p
                      style={{
                        fontSize: 12,
                        color: 'var(--c-m)',
                        lineHeight: 1.4,
                        marginBottom: 6,
                        overflow: 'hidden',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                      }}
                    >
                      {article.summary}
                    </p>
                  )}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <SourceBadge name={article.sourceName} color={c} />
                    <span style={{ fontSize: 11, color: 'var(--c-m)', fontFamily: 'monospace' }}>
                      {shortDate(article.publishedAt)}, {shortTime(article.publishedAt)}
                    </span>
                    <span style={{ fontSize: 11, color: 'var(--c-m)' }}>
                      ({relativeTime(article.publishedAt)})
                    </span>
                  </div>
                </div>

                {/* External link arrow */}
                <svg
                  width="12" height="12" viewBox="0 0 12 12" fill="none"
                  style={{ flexShrink: 0, color: 'var(--c-m)', marginTop: 2, opacity: .6 }}
                  aria-hidden="true"
                >
                  <path d="M1 11L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            );
          })}
        </div>

        {/* Right sidebar: source breakdown */}
        <div
          style={{
            width: 180,
            flexShrink: 0,
            borderLeft: '1px solid var(--c-border)',
            padding: '16px 16px',
            background: 'var(--c-surface-2)',
          }}
        >
          <p style={{ fontSize: 11, fontWeight: 600, color: 'var(--c-m)', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: 12 }}>
            Sources
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {sourceBreakdown.map(src => (
              <div key={src.name}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                  <span style={{ fontSize: 12, fontWeight: 600, color: src.color.text }}>{src.name}</span>
                  <span style={{ fontSize: 11, color: 'var(--c-m)' }}>{src.count}</span>
                </div>
                {/* Mini progress bar */}
                <div style={{ height: 4, borderRadius: 4, background: src.color.border, overflow: 'hidden' }}>
                  <div
                    style={{
                      height: '100%',
                      borderRadius: 4,
                      background: `linear-gradient(90deg, ${src.color.from}, ${src.color.to})`,
                      width: `${src.pct}%`,
                      transition: 'width 600ms cubic-bezier(.16,1,.3,1)',
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div style={{ margin: '16px 0', borderTop: '1px solid var(--c-border)' }} />

          <p style={{ fontSize: 11, fontWeight: 600, color: 'var(--c-m)', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: 8 }}>
            Timeline
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div>
              <p style={{ fontSize: 10, color: 'var(--c-m)', marginBottom: 1 }}>First article</p>
              <p style={{ fontSize: 12, fontWeight: 600, color: 'var(--c-h)', fontFamily: 'monospace' }}>
                {shortDate(cluster.earliestArticleAt)}<br />
                <span style={{ fontWeight: 400, color: 'var(--c-m)' }}>{shortTime(cluster.earliestArticleAt)}</span>
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <div style={{ flex: 1, height: 1, background: 'var(--c-border)' }} />
              <span style={{ fontSize: 10, color: 'var(--c-m)' }}>→</span>
              <div style={{ flex: 1, height: 1, background: 'var(--c-border)' }} />
            </div>
            <div>
              <p style={{ fontSize: 10, color: 'var(--c-m)', marginBottom: 1 }}>Latest article</p>
              <p style={{ fontSize: 12, fontWeight: 600, color: 'var(--c-h)', fontFamily: 'monospace' }}>
                {shortDate(cluster.latestArticleAt)}<br />
                <span style={{ fontWeight: 400, color: 'var(--c-m)' }}>{shortTime(cluster.latestArticleAt)}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
