import { prisma } from '../lib/prisma.js'
import type { Prisma } from '../../generated/prisma/client.js'

interface ListClustersParams {
  page?: number
  limit?: number
  sources?: string[]
  from?: string
  to?: string
}

export async function listClusters(params: ListClustersParams) {
  const { page = 1, limit = 20, sources, from, to } = params
  const skip = (page - 1) * limit
  const take = Math.min(limit, 100)

  const where: Prisma.ClusterWhereInput = {}

  if (sources && sources.length > 0) {
    where.articles = {
      some: {
        sourceName: { in: sources },
      },
    }
  }

  if (from) {
    where.latestArticleAt = { gte: new Date(from) }
  }
  if (to) {
    where.earliestArticleAt = { lte: new Date(to) }
  }

  const clusters = await prisma.cluster.findMany({
    where,
    include: {
      articles: {
        select: { sourceName: true },
      },
    },
    orderBy: {
      latestArticleAt: 'desc',
    },
    skip,
    take,
  })

  const data = clusters.map((cluster) => {
    const sourcesSet = new Set(cluster.articles.map((a) => a.sourceName))
    const { articles, ...rest } = cluster
    return {
      ...rest,
      sources: Array.from(sourcesSet),
      topTerms: cluster.topTerms as string[],
    }
  })

  const total = await prisma.cluster.count({ where })

  return {
    data,
    meta: {
      page,
      limit: take,
      total,
      totalPages: Math.ceil(total / take),
    },
  }
}

export async function getClusterById(id: string, sources?: string[]) {
  const cluster = await prisma.cluster.findUnique({
    where: { id },
    include: {
      articles: {
        where: sources && sources.length > 0
          ? { sourceName: { in: sources } }
          : undefined,
        orderBy: { publishedAt: 'asc' },
      },
    },
  })

  if (!cluster) return null

  const { articles, ...rest } = cluster
  return {
    ...rest,
    topTerms: cluster.topTerms as string[],
    articles: cluster.articles.map((article) => ({
      ...article,
    })),
  }
}