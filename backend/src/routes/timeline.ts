import { FastifyInstance } from 'fastify'
import { getTimelineData } from '../services/timeline.service.js'

interface TimelineQuery {
  from?: string
  to?: string
  source?: string | string[]
  minArticles?: number
}

const timelineSchema = {
  querystring: {
    type: 'object',
    properties: {
      from: { type: 'string', format: 'date-time' },
      to: { type: 'string', format: 'date-time' },
      source: {
        type: 'array',
        items: { type: 'string' },
        default: [],
      },
      minArticles: { type: 'integer', minimum: 1, default: 1 },
    },
  },
}

export async function timelineRoutes(app: FastifyInstance) {
  app.get('/timeline', { schema: timelineSchema }, async (request, reply) => {
    const query = request.query as TimelineQuery
    const { from, to, source, minArticles } = query

    const data = await getTimelineData({
      from,
      to,
      sources: source && source.length > 0 ? (Array.isArray(source) ? source : [source]) : undefined,
      minArticles: minArticles || 1,
    })

    reply.send(data)
  })
}