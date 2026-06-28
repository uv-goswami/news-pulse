import type { TimelineCluster, PositionedCluster } from './types';

// ─── Source colour system ─────────────────────────────────────────────────────

export interface SourceColor {
  from: string;
  to: string;
  light: string;
  text: string;
  border: string;
}

const KNOWN_SOURCES: Record<string, SourceColor> = {
  'BBC News': {
    from: '#E53E3E', to: '#FC8181', light: '#FFF5F5', text: '#C53030', border: '#FED7D7',
  },
  'NPR': {
    from: '#3182CE', to: '#63B3ED', light: '#EBF8FF', text: '#2C5282', border: '#BEE3F8',
  },
  'The Guardian': {
    from: '#38A169', to: '#68D391', light: '#F0FFF4', text: '#276749', border: '#C6F6D5',
  },
  'Al Jazeera': {
    from: '#D69E2E', to: '#F6AD55', light: '#FFFBEB', text: '#975A16', border: '#FAF089',
  },
  'Reuters': {
    from: '#805AD5', to: '#B794F4', light: '#FAF5FF', text: '#553C9A', border: '#E9D8FD',
  },
};

const FALLBACK_PALETTE: SourceColor[] = [
  { from: '#5B5FEF', to: '#A5B4FC', light: '#EEF2FF', text: '#3730A3', border: '#C7D2FE' },
  { from: '#0D9488', to: '#5EEAD4', light: '#F0FDFA', text: '#0F766E', border: '#99F6E4' },
  { from: '#DB2777', to: '#F9A8D4', light: '#FDF2F8', text: '#9D174D', border: '#FBCFE8' },
  { from: '#EA580C', to: '#FDBA74', light: '#FFF7ED', text: '#9A3412', border: '#FED7AA' },
  { from: '#0369A1', to: '#7DD3FC', light: '#F0F9FF', text: '#075985', border: '#BAE6FD' },
];

const _cache = new Map<string, SourceColor>();

export function getSourceColor(name: string): SourceColor {
  if (KNOWN_SOURCES[name]) return KNOWN_SOURCES[name];
  if (_cache.has(name)) return _cache.get(name)!;
  const hash = name.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
  const color = FALLBACK_PALETTE[hash % FALLBACK_PALETTE.length];
  _cache.set(name, color);
  return color;
}

export function clusterGradient(sources: string[]): string {
  if (!sources.length) return 'linear-gradient(135deg, #5B5FEF, #8B5CF6)';
  if (sources.length === 1) {
    const c = getSourceColor(sources[0]);
    return `linear-gradient(135deg, ${c.from}, ${c.to})`;
  }
  const [a, b] = sources.slice(0, 2).map(s => getSourceColor(s));
  return `linear-gradient(135deg, ${a.from}, ${b.to})`;
}

export function clusterShadow(sources: string[], intensity: number): string {
  const c = sources.length ? getSourceColor(sources[0]) : FALLBACK_PALETTE[0];
  const alpha = Math.round((0.12 + intensity * 0.18) * 255).toString(16).padStart(2, '0');
  return `0 2px 8px ${c.from}${alpha}, 0 1px 2px rgba(0,0,0,0.06)`;
}

// ─── Swimlane layout ──────────────────────────────────────────────────────────

export function layoutClusters(
  clusters: TimelineCluster[],
  fromMs: number,
  toMs: number,
): { bars: PositionedCluster[]; lanes: number } {
  if (!clusters.length || toMs <= fromMs) return { bars: [], lanes: 0 };

  const totalMs = toMs - fromMs;
  const MIN_W_MS = totalMs * 0.005; // 0.5% minimum width so single-article clusters are visible
  const GAP_MS = totalMs * 0.015;   // visual gap between bars on the same lane

  const sorted = [...clusters].sort(
    (a, b) => new Date(a.start).getTime() - new Date(b.start).getTime(),
  );

  const laneEnd: number[] = [];

  const bars: PositionedCluster[] = sorted.map(cl => {
    const sMs = new Date(cl.start).getTime();
    let eMs = new Date(cl.end).getTime();
    if (eMs - sMs < MIN_W_MS) eMs = sMs + MIN_W_MS;

    const leftPct = Math.max(0, ((sMs - fromMs) / totalMs) * 100);
    const widthPct = Math.min(100 - leftPct, ((eMs - sMs) / totalMs) * 100);

    let lane = laneEnd.findIndex(end => end + GAP_MS <= sMs);
    if (lane === -1) lane = laneEnd.length;
    laneEnd[lane] = eMs;

    return { ...cl, lane, leftPct, widthPct };
  });

  return { bars, lanes: laneEnd.length };
}

// ─── Time axis ticks ──────────────────────────────────────────────────────────

export interface TimeTick {
  label: string;
  leftPct: number;
  major: boolean;
}

export function computeTicks(fromMs: number, toMs: number): TimeTick[] {
  const totalHrs = (toMs - fromMs) / 3_600_000;
  let stepMs: number;
  if (totalHrs <= 24)        stepMs = 4  * 3_600_000;
  else if (totalHrs <= 168)  stepMs = 24 * 3_600_000;
  else if (totalHrs <= 720)  stepMs = 3  * 24 * 3_600_000;
  else                       stepMs = 7  * 24 * 3_600_000;

  const ticks: TimeTick[] = [];
  const first = Math.ceil(fromMs / stepMs) * stepMs;

  for (let t = first; t <= toMs; t += stepMs) {
    const leftPct = ((t - fromMs) / (toMs - fromMs)) * 100;
    if (leftPct < 0 || leftPct > 100) continue;

    const d = new Date(t);
    const isMidnight = d.getHours() === 0 && d.getMinutes() === 0;
    let label: string;

    if (totalHrs <= 24) {
      label = d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
    } else if (totalHrs <= 168) {
      label = d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
    } else {
      label = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    }

    ticks.push({ label, leftPct, major: isMidnight || totalHrs <= 24 });
  }

  return ticks;
}

// ─── Date / time formatting ───────────────────────────────────────────────────

export function relativeTime(iso: string): string {
  const diffMs = Date.now() - new Date(iso).getTime();
  const m = Math.floor(diffMs / 60_000);
  if (m < 1)  return 'just now';
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  const d = Math.floor(h / 24);
  if (d === 1) return 'yesterday';
  if (d < 7)  return `${d}d ago`;
  return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

export function shortTime(iso: string): string {
  return new Date(iso).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
}

export function shortDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

export function dateRange(start: string, end: string): string {
  const s = new Date(start);
  const e = new Date(end);
  if (s.toDateString() === e.toDateString()) {
    return `${shortDate(start)}, ${shortTime(start)} – ${shortTime(end)}`;
  }
  return `${shortDate(start)} – ${shortDate(end)}`;
}

export function capitalise(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
