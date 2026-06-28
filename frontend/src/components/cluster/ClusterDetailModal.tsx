'use client';

import React, { useMemo } from 'react';
import type { ClusterDetail } from '@/lib/types';
import { getSourceColor, shortTime, shortDate, relativeTime } from '@/lib/utils';
import { SourceBadge } from '@/components/ui/Badge';

interface Props {
  cluster: ClusterDetail | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ClusterDetailModal({ cluster, isOpen, onClose }: Props) {
  if (!isOpen || !cluster) return null;

  const sourceBreakdown = useMemo(() => {
    const counts: Record<string, number> = {};
    cluster.articles.forEach(a => {
      counts[a.sourceName] = (counts[a.sourceName] || 0) + 1;
    });
    return Object.entries(counts).sort((a, b) => b[1] - a[1]);
  }, [cluster]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        background: 'rgba(0,0,0,0.4)',
        backdropFilter: 'blur(2px)',
        animation: 'fadeIn 200ms ease',
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: 'var(--c-surface)',
          borderRadius: 'var(--r-md)',
          maxWidth: 800,
          width: '100%',
          maxHeight: '80vh',
          overflowY: 'auto',
          padding: '28px 32px',
          boxShadow: 'var(--shadow-lg)',
          border: '1px solid var(--c-border)',
          position: 'relative',
        }}
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="ui-text"
          style={{
            position: 'absolute',
            top: 12,
            right: 16,
            background: 'none',
            border: 'none',
            fontSize: 22,
            cursor: 'pointer',
            color: 'var(--c-m)',
            padding: '4px 8px',
            borderRadius: 'var(--r-sm)',
            transition: 'background var(--t-fast)',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = 'var(--c-surface-2)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
        >
          ×
        </button>

        <h2 className="headline-lg" style={{ color: 'var(--c-h)', marginRight: 40 }}>
          {cluster.label}
        </h2>

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 8 }}>
          {cluster.topTerms.map(term => (
            <span key={term} className="ui-text" style={{ background: 'var(--c-surface-2)', padding: '2px 10px', borderRadius: 'var(--r-sm)', fontSize: '0.7rem', color: 'var(--c-m)', fontWeight: 500, letterSpacing: '0.03em' }}>
              {term}
            </span>
          ))}
        </div>

        <hr className="divider-thin" style={{ margin: '16px 0' }} />

        <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap' }}>
          <div>
            <span className="ui-text" style={{ fontSize: '0.65rem', fontWeight: 600, color: 'var(--c-m)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Articles</span>
            <p className="headline-md" style={{ fontSize: '1.5rem', color: 'var(--c-h)' }}>{cluster.articleCount}</p>
          </div>
          <div>
            <span className="ui-text" style={{ fontSize: '0.65rem', fontWeight: 600, color: 'var(--c-m)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Sources</span>
            <p className="headline-md" style={{ fontSize: '1.5rem', color: 'var(--c-h)' }}>{sourceBreakdown.length}</p>
          </div>
          <div>
            <span className="ui-text" style={{ fontSize: '0.65rem', fontWeight: 600, color: 'var(--c-m)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Time range</span>
            <p style={{ fontSize: '0.9rem', color: 'var(--c-h)' }}>
              {shortDate(cluster.earliestArticleAt)} – {shortDate(cluster.latestArticleAt)}
            </p>
          </div>
        </div>

        <hr className="divider-thin" style={{ margin: '16px 0' }} />

        <h4 className="headline-sm" style={{ marginBottom: 12 }}>Articles</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {cluster.articles.map(article => {
            const c = getSourceColor(article.sourceName);
            return (
              <a
                key={article.id}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  gap: 12,
                  padding: '10px 12px',
                  background: 'var(--c-surface-2)',
                  borderRadius: 'var(--r-sm)',
                  transition: 'background var(--t-fast)',
                  textDecoration: 'none',
                  border: '1px solid var(--c-border)',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--c-border)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'var(--c-surface-2)')}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <p className="headline-sm" style={{ fontSize: '0.95rem', color: 'var(--c-h)' }}>{article.headline}</p>
                  {article.summary && (
                    <p style={{ fontSize: '0.8rem', color: 'var(--c-b)', marginTop: 4, fontFamily: 'Lora, serif' }}>{article.summary}</p>
                  )}
                  <div style={{ display: 'flex', gap: 8, marginTop: 6, alignItems: 'center' }}>
                    <SourceBadge name={article.sourceName} color={c} />
                    <span className="ui-text" style={{ fontSize: '0.65rem', color: 'var(--c-m)' }}>
                      {shortDate(article.publishedAt)} {shortTime(article.publishedAt)}
                    </span>
                    <span className="ui-text" style={{ fontSize: '0.65rem', color: 'var(--c-m)' }}>
                      ({relativeTime(article.publishedAt)})
                    </span>
                  </div>
                </div>
                <svg width="12" height="12" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, color: 'var(--c-m)', marginTop: 4 }}>
                  <path d="M1 13L12 2M12 2H5M12 2v7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}