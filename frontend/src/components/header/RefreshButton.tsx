'use client';

import React from 'react';
import type { RefreshState } from '@/lib/types';

interface Props {
  state: RefreshState;
  onRefresh: () => void;
}

const PHASE_MESSAGES: Record<RefreshState['phase'], string> = {
  idle:       'Refresh',
  triggering: 'Starting…',
  pending:    'Queued…',
  running:    'Fetching…',
  completed:  'Done',
  failed:     'Retry',
};

export function RefreshButton({ state, onRefresh }: Props) {
  const isActive = state.phase !== 'idle' && state.phase !== 'completed' && state.phase !== 'failed';
  const isDone   = state.phase === 'completed';
  const isFailed = state.phase === 'failed';

  let bg = 'var(--c-accent)';
  let color = '#2A2A2A';
  if (isDone)   { bg = '#5A7A5A'; color = '#F0F0E8'; }
  if (isFailed) { bg = '#7A4A4A'; color = '#F0E8E8'; }

  return (
    <button
      onClick={onRefresh}
      disabled={isActive}
      className="ui-text"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        height: 28,
        padding: '0 12px',
        borderRadius: 'var(--r-sm)',
        background: bg,
        color,
        border: 'none',
        fontSize: '0.65rem',
        fontWeight: 600,
        letterSpacing: '0.04em',
        cursor: isActive ? 'not-allowed' : 'pointer',
        opacity: isActive ? 0.5 : 1,
        transition: 'all var(--t-fast)',
        textTransform: 'uppercase',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      {isActive ? <SpinIcon /> : isDone ? <CheckIcon /> : <RefreshIcon />}
      {isActive ? PHASE_MESSAGES[state.phase] : isDone ? 'Refresh' : PHASE_MESSAGES[state.phase]}
    </button>
  );
}

// Icon components (same as before, with white stroke)
function RefreshIcon() {
  return <svg width="12" height="12" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}><path d="M13.5 8a5.5 5.5 0 1 1-1.1-3.3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/><path d="M14 3l-.5 2.5-2.5-.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}
function SpinIcon() {
  return <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="anim-spin"><circle cx="8" cy="8" r="5.5" stroke="rgba(255,255,255,.3)" strokeWidth="2"/><path d="M2.5 8A5.5 5.5 0 0 1 8 2.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>;
}
function CheckIcon() {
  return <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}