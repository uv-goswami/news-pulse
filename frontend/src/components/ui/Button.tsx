import React from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  loading?: boolean;
  icon?: React.ReactNode;
}

const VARIANT_STYLES: Record<Variant, React.CSSProperties> = {
  primary: {
    background: 'var(--c-primary)',
    color: '#fff',
    border: 'none',
  },
  secondary: {
    background: 'var(--c-surface)',
    color: 'var(--c-h)',
    border: '1.5px solid var(--c-border-m)',
  },
  ghost: {
    background: 'transparent',
    color: 'var(--c-b)',
    border: '1.5px solid transparent',
  },
  danger: {
    background: '#FFF5F5',
    color: '#C53030',
    border: '1.5px solid #FED7D7',
  },
};

const SIZE_STYLES: Record<Size, React.CSSProperties> = {
  sm: { height: 30, padding: '0 10px', fontSize: 12, gap: 5 },
  md: { height: 36, padding: '0 14px', fontSize: 13, gap: 6 },
  lg: { height: 42, padding: '0 18px', fontSize: 14, gap: 8 },
};

export function Button({
  variant = 'secondary',
  size = 'md',
  loading = false,
  icon,
  children,
  style,
  disabled,
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;

  const base: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 'var(--r-sm)',
    fontWeight: 500,
    fontFamily: 'inherit',
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    transition: 'all var(--t-fast)',
    userSelect: 'none',
    outline: 'none',
    opacity: isDisabled ? 0.55 : 1,
    whiteSpace: 'nowrap',
    ...VARIANT_STYLES[variant],
    ...SIZE_STYLES[size],
    ...style,
  };

  return (
    <button style={base} disabled={isDisabled} {...props}>
      {loading ? <Spinner size={size === 'sm' ? 12 : 14} /> : icon}
      {children}
    </button>
  );
}

function Spinner({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      className="anim-spin"
      style={{ flexShrink: 0 }}
    >
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="2" strokeOpacity=".25" />
      <path
        d="M2 8a6 6 0 0 1 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
