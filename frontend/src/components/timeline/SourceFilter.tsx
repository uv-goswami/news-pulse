'use client';

import React from 'react';
import type { TimeRange } from '@/lib/types';
import { getSourceColor } from '@/lib/utils';

interface SourceFilterProps {
  allSources: string[];
  activeSources: Set<string>;
  onToggle: (source: string) => void;
}

export function SourceFilter({ allSources, activeSources, onToggle }: SourceFilterProps) {
  if (!allSources.length) return null;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, alignItems: 'center' }}>
      <span className="ui-text" style={{ fontSize: '0.6rem', fontWeight: 600, color: 'var(--c-m)', textTransform: 'uppercase', letterSpacing: '0.08em', marginRight: 4 }}>
        Sources
      </span>
      {allSources.map(source => {
        const isActive = activeSources.size === 0 || activeSources.has(source);
        return (
          <button
            key={source}
            onClick={() => onToggle(source)}
            className="ui-text"
            style={{
              padding: '3px 10px',
              borderRadius: 'var(--r-sm)',
              border: `1px solid ${isActive ? 'var(--c-accent)' : 'var(--c-border)'}`,
              background: isActive ? 'var(--c-accent)' : 'transparent',
              color: isActive ? '#2A2A2A' : 'var(--c-b)',
              fontSize: '0.65rem',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all var(--t-fast)',
              fontFamily: 'Inter, sans-serif',
              letterSpacing: '0.02em',
            }}
          >
            {source}
          </button>
        );
      })}
    </div>
  );
}

interface TimeRangeSelectorProps {
  value: TimeRange;
  onChange: (r: TimeRange) => void;
}

const OPTIONS: { value: TimeRange; label: string }[] = [
  { value: '24h', label: '24h' },
  { value: '7d',  label: '7 Days' },
  { value: '30d', label: '30 Days' },
];

export function TimeRangeSelector({ value, onChange }: TimeRangeSelectorProps) {
  return (
    <div style={{ display: 'flex', gap: 0, border: '1px solid var(--c-border)', borderRadius: 'var(--r-sm)', overflow: 'hidden' }}>
      {OPTIONS.map((opt, i) => {
        const isActive = opt.value === value;
        return (
          <button
            key={opt.value}
            onClick={() => onChange(opt.value)}
            className="ui-text"
            style={{
              padding: '4px 10px',
              fontSize: '0.65rem',
              fontWeight: isActive ? 600 : 400,
              background: isActive ? 'var(--c-accent)' : 'transparent',
              color: isActive ? '#2A2A2A' : 'var(--c-b)',
              border: 'none',
              borderLeft: i > 0 ? '1px solid var(--c-border)' : 'none',
              cursor: 'pointer',
              transition: 'all var(--t-fast)',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}

interface SearchBoxProps {
  value: string;
  onChange: (v: string) => void;
}

export function SearchBox({ value, onChange }: SearchBoxProps) {
  return (
    <div style={{ position: 'relative' }}>
      <input
        type="search"
        placeholder="Search clusters…"
        value={value}
        onChange={e => onChange(e.target.value)}
        className="ui-text"
        style={{
          height: 28,
          paddingLeft: 26,
          paddingRight: value ? 26 : 8,
          borderRadius: 'var(--r-sm)',
          border: '1px solid var(--c-border)',
          background: 'var(--c-surface)',
          color: 'var(--c-h)',
          fontSize: '0.7rem',
          fontFamily: 'Inter, sans-serif',
          width: 150,
          outline: 'none',
          transition: 'border-color var(--t-fast)',
        }}
        onFocus={e => (e.target.style.borderColor = 'var(--c-accent)')}
        onBlur={e => (e.target.style.borderColor = 'var(--c-border)')}
      />
      <svg width="12" height="12" viewBox="0 0 16 16" fill="none" style={{ position: 'absolute', left: 8, top: '50%', transform: 'translateY(-50%)', color: 'var(--c-m)', pointerEvents: 'none' }}>
        <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M11 11l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      {value && (
        <button
          onClick={() => onChange('')}
          className="ui-text"
          style={{
            position: 'absolute', right: 6, top: '50%', transform: 'translateY(-50%)',
            background: 'none', border: 'none', cursor: 'pointer',
            color: 'var(--c-m)', fontSize: 14, lineHeight: 1, padding: 0,
          }}
        >
          ×
        </button>
      )}
    </div>
  );
}