import { FastifyInstance } from 'fastify'
import { listClusters, getClusterById } from '../services/cluster.service.js'

const clusterListSchema = {
  querystring: {
    type: 'object',
    properties: {
      page: { type: 'integer', minimum: 1, default: 1 },
      limit: { type: 'integer', minimum: 1, maximum: 100, default: 20 },
      source: {
        type: 'array',
        items: { type: 'string' },
        default: [],
      },
      from: { type: 'string', format: 'date-time' },
      to: { type: 'string', format: 'date-time' },
    },
  },
}

const clusterDetailSchema = {
  params: {
    type: 'object',
    required: ['id'],
    properties: {
      id: { type: 'string', format: 'uuid' },
    },
  },
  querystring: {
    type: 'object',
    properties: {
      source: {
        type: 'array',
        items: { type: 'string' },
        default: [],
      },
    },
  },
}

export async function clustersRoutes(app: FastifyInstance) {
  // GET /clusters
  app.get('/clusters', { schema: clusterListSchema }, async (request, reply) => {
    const { page, limit, source, from, to } = request.query as any

    const result = await listClusters({
      page: page || 1,
      limit: limit || 20,
      sources: source && source.length > 0 ? source : undefined,
      from,
      to,
    })

    reply.send(result)
  })

  // GET /clusters/:id
  app.get('/clusters/:id', { schema: clusterDetailSchema }, async (request, reply) => {
    const { id } = request.params as { id: string }
    const { source } = request.query as { source?: string[] }

    const cluster = await getClusterById(id, source && source.length > 0 ? source : undefined)

    if (!cluster) {
      reply.status(404).send({
        error: {
          code: 'CLUSTER_NOT_FOUND',
          message: `No cluster found with id ${id}`,
          statusCode: 404,
          requestId: request.id,
        },
      })
      return
    }

    reply.send(cluster)
  })
}