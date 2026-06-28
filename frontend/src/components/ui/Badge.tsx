import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  onClick?: () => void;
}

export function Badge({ children, style, className = '', onClick }: BadgeProps) {
  const base: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 4,
    padding: '2px 8px',
    borderRadius: 20,
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: '.02em',
    whiteSpace: 'nowrap',
    lineHeight: '18px',
    cursor: onClick ? 'pointer' : 'default',
    userSelect: 'none',
  };

  return (
    <span style={{ ...base, ...style }} className={className} onClick={onClick}>
      {children}
    </span>
  );
}

interface SourceBadgeProps {
  name: string;
  color: { from: string; light: string; text: string; border: string };
  size?: 'sm' | 'md';
}

export function SourceBadge({ name, color, size = 'sm' }: SourceBadgeProps) {
  return (
    <Badge
      style={{
        background: color.light,
        color: color.text,
        border: `1px solid ${color.border}`,
        fontSize: size === 'sm' ? 11 : 12,
        padding: size === 'sm' ? '2px 8px' : '3px 10px',
      }}
    >
      <span
        style={{
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: color.from,
          flexShrink: 0,
        }}
      />
      {name}
    </Badge>
  );
}

interface TermBadgeProps { term: string }

export function TermBadge({ term }: TermBadgeProps) {
  return (
    <Badge
      style={{
        background: 'var(--c-primary-l)',
        color: 'var(--c-primary)',
        border: '1px solid rgba(92,95,238,.2)',
        textTransform: 'lowercase',
      }}
    >
      {term}
    </Badge>
  );
}
