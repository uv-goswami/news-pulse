import React from 'react';
import type { TimelineResponse, RefreshState } from '@/lib/types';
import { relativeTime } from '@/lib/utils';
import { RefreshButton } from './RefreshButton';

interface Props {
  meta: TimelineResponse['meta'] | null;
  refreshState: RefreshState;
  onRefresh: () => void;
}

export function Header({ meta, refreshState, onRefresh }: Props) {
  const dateStr = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <header
      style={{
        background: 'var(--c-surface)',
        borderBottom: '2px solid var(--c-border)',
        padding: '16px 24px 12px',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        boxShadow: '0 2px 12px rgba(0,0,0,0.4)',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <h1 className="headline-lg" style={{ color: 'var(--c-h)', marginBottom: 2, letterSpacing: '-0.02em' }}>
              <span>NEWSPULSE</span>
              <span style={{ fontSize: '0.65rem', fontWeight: 400, color: 'var(--c-m)', marginLeft: 10, letterSpacing: '0.06em' }}>
                DIGITAL EDITION
              </span>
            </h1>
            <div className="subhead" style={{ fontSize: '0.8rem' }}>
              {dateStr}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
            {meta && (
              <div className="ui-text" style={{ fontSize: '0.65rem', color: 'var(--c-m)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                {meta.totalClusters} clusters · {meta.totalArticles} articles
                {meta.lastIngestAt && <> · Updated {relativeTime(meta.lastIngestAt)}</>}
              </div>
            )}
            <RefreshButton state={refreshState} onRefresh={onRefresh} />
          </div>
        </div>
        <hr className="divider-thin" style={{ marginTop: 8, marginBottom: 0 }} />
      </div>
    </header>
  );
}