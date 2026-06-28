'use client';

import React, { useState, useCallback, useEffect, useRef } from 'react';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

export interface ToastItem {
  id: string;
  type: ToastType;
  message: string;
  duration?: number;
  leaving?: boolean;
}

// ─── Single Toast – newspaper style ──────────────────────────────────────────

const TYPE_LABELS: Record<ToastType, string> = {
  success: 'Notice',
  error:   'Alert',
  info:    'Information',
  warning: 'Caution',
};

function Toast({ item, onDismiss }: { item: ToastItem; onDismiss: (id: string) => void }) {
  return (
    <div
      className={item.leaving ? 'toast-leave' : 'toast-enter'}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        padding: '12px 16px',
        background: 'var(--c-surface)',
        border: '1px solid var(--c-border)',
        borderRadius: 'var(--r-sm)',
        boxShadow: 'var(--shadow-card)',
        maxWidth: 360,
        cursor: 'default',
        userSelect: 'none',
        position: 'relative',
        fontFamily: 'Lora, serif',
      }}
      role="alert"
    >
      {/* Header: type label + dismiss button */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--c-m)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
          {TYPE_LABELS[item.type]}
        </span>
        <button
          onClick={() => onDismiss(item.id)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--c-m)',
            fontSize: '1rem',
            lineHeight: 1,
            padding: '0 2px',
          }}
          aria-label="Dismiss"
        >
          ×
        </button>
      </div>

      {/* Divider */}
      <hr className="divider-thin" style={{ margin: '4px 0' }} />

      {/* Message */}
      <p style={{ fontSize: '0.85rem', color: 'var(--c-b)', lineHeight: 1.5 }}>
        {item.message}
      </p>

      {/* Subtle accent line at bottom (matching type) */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 2,
        background: item.type === 'error' ? '#6A3A3A' : item.type === 'success' ? '#3A5A3A' : 'var(--c-border)',
        borderRadius: '0 0 var(--r-sm) var(--r-sm)',
        opacity: 0.4,
      }} />
    </div>
  );
}

// ─── Toast container ──────────────────────────────────────────────────────────

interface ToastContainerProps {
  toasts: ToastItem[];
  onDismiss: (id: string) => void;
}

export function ToastContainer({ toasts, onDismiss }: ToastContainerProps) {
  if (!toasts.length) return null;
  return (
    <div
      style={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        alignItems: 'flex-end',
      }}
      aria-live="polite"
    >
      {toasts.map(t => (
        <Toast key={t.id} item={t} onDismiss={onDismiss} />
      ))}
    </div>
  );
}

// ─── useToast hook ────────────────────────────────────────────────────────────

let _counter = 0;

export function useToast() {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const timers = useRef<Map<string, NodeJS.Timeout>>(new Map());

  const dismiss = useCallback((id: string) => {
    setToasts(prev => prev.map(t => t.id === id ? { ...t, leaving: true } : t));
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 220);
  }, []);

  const add = useCallback((type: ToastType, message: string, duration = 5000) => {
    const id = `toast-${++_counter}`;
    setToasts(prev => [...prev, { id, type, message, duration }]);
    const timer = setTimeout(() => dismiss(id), duration);
    timers.current.set(id, timer);
    return id;
  }, [dismiss]);

  useEffect(() => () => {
    timers.current.forEach(t => clearTimeout(t));
  }, []);

  return { toasts, add, dismiss };
}