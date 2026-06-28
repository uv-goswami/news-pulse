import { fetchTimeline } from '@/lib/api';
import type { TimeRange } from '@/lib/types';
import { NewsPulseClient } from '@/components/NewsPulseClient';

interface PageProps {
  searchParams: { sources?: string | string[]; range?: string };
}

export default async function Page({ searchParams }: PageProps) {
  const rawSources = searchParams.sources ?? [];
  const sources = Array.isArray(rawSources) ? rawSources : [rawSources];
  const range: TimeRange = (['24h', '7d', '30d'].includes(searchParams.range ?? '') ?
    searchParams.range : '7d') as TimeRange;

  let initialData = null;
  let initialError: string | null = null;

  try {
    initialData = await fetchTimeline({
      sources: sources.length ? sources : undefined,
      range,
    });
  } catch (err) {
    initialError = (err as Error).message;
  }

  return (
    <NewsPulseClient
      initialData={initialData}
      initialSources={sources}
      initialRange={range}
      initialError={initialError}
    />
  );
}
