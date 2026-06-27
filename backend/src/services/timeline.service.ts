import { prisma } from '../lib/prisma.js'
import type { Prisma } from '../../generated/prisma/client.js'

interface TimelineParams {
  from?: string
  to?: string
  sources?: string[]
  minArticles?: number
}

export async function getTimelineData(params: TimelineParams) {
  const { from, to, sources, minArticles = 1 } = params

  const where: Prisma.ClusterWhereInput = {}

  if (from) {
    where.latestArticleAt = { gte: new Date(from) }
  }
  if (to) {
    where.earliestArticleAt = { lte: new Date(to) }
  }

  if (sources && sources.length > 0) {
    where.articles = {
      some: {
        sourceName: { in: sources },
      },
    }
  }

  if (minArticles > 1) {
    where.articleCount = { gte: minArticles }
  }

  const clusters = await prisma.cluster.findMany({
    where,
    include: {
      articles: {
        select: { sourceName: true, publishedAt: true },
      },
    },
    orderBy: {
      latestArticleAt: 'desc',
    },
  })

  const maxArticleCount = clusters.reduce((max, c) => Math.max(max, c.articleCount), 0)

  const transformed = clusters.map((cluster) => {
    const sourcesSet = new Set(cluster.articles.map((a) => a.sourceName))
    return {
      id: cluster.id,
      label: cluster.label,
      topTerms: cluster.topTerms as string[],
      start: cluster.earliestArticleAt?.toISOString() || '',
      end: cluster.latestArticleAt?.toISOString() || '',
      articleCount: cluster.articleCount,
      intensity: maxArticleCount > 0 ? cluster.articleCount / maxArticleCount : 0,
      sources: Array.from(sourcesSet),
    }
  })

  const allSources = new Set<string>()
  transformed.forEach((c) => c.sources.forEach((s) => allSources.add(s)))

  let timeFrom = from ? new Date(from) : null
  let timeTo = to ? new Date(to) : null

  if (clusters.length > 0) {
    const earliest = clusters.reduce((min, c) => c.earliestArticleAt && (!min || c.earliestArticleAt < min) ? c.earliestArticleAt : min, null as Date | null)
    const latest = clusters.reduce((max, c) => c.latestArticleAt && (!max || c.latestArticleAt > max) ? c.latestArticleAt : max, null as Date | null)
    if (earliest && !timeFrom) timeFrom = earliest
    if (latest && !timeTo) timeTo = latest
  }

  const lastIngest = await prisma.ingestJob.findFirst({
    orderBy: { triggeredAt: 'desc' },
    select: { triggeredAt: true },
  })

  return {
    timeRange: {
      from: timeFrom?.toISOString() || new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
      to: timeTo?.toISOString() || new Date().toISOString(),
    },
    sources: Array.from(allSources),
    clusters: transformed,
    meta: {
      totalClusters: transformed.length,
      totalArticles: clusters.reduce((sum, c) => sum + c.articleCount, 0),
      lastIngestAt: lastIngest?.triggeredAt?.toISOString() || null,
    },
  }
}