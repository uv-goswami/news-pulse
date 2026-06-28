'use client';

import { useEffect, useRef, useCallback } from 'react';

interface UsePollingOptions<T> {
  enabled: boolean;
  intervalMs?: number;
  onTick: () => Promise<T>;
  onResult: (result: T) => void;
  onError?: (err: Error) => void;
  shouldStop?: (result: T) => boolean;
}

export function usePolling<T>({
  enabled,
  intervalMs = 3_000,
  onTick,
  onResult,
  onError,
  shouldStop,
}: UsePollingOptions<T>) {
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const isMounted = useRef(true);

  const stop = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
      stop();
    };
  }, [stop]);

  useEffect(() => {
    if (!enabled) { stop(); return; }

    const poll = async () => {
      try {
        const result = await onTick();
        if (!isMounted.current) return;
        onResult(result);
        if (shouldStop?.(result)) stop();
      } catch (err) {
        if (!isMounted.current) return;
        onError?.(err as Error);
        stop();
      }
    };

    poll(); // immediate first tick
    timerRef.current = setInterval(poll, intervalMs);
    return stop;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled]);

  return { stop };
}
