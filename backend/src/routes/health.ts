import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma.js'

export async function healthRoutes(app: FastifyInstance) {
  // GET /health – liveness
  app.get('/health', async (_request, reply) => {
    reply.send({
      status: 'ok',
      timestamp: new Date().toISOString(),
      version: '1.0.0',
    })
  })

  // GET /health/ready – readiness (checks database)
  app.get('/health/ready', async (_request, reply) => {
    try {
      // Attempt a simple database query
      await prisma.$queryRaw`SELECT 1`
      reply.send({
        status: 'ready',
        checks: {
          database: 'ok',
          timestamp: new Date().toISOString(),
        },
      })
    } catch (error) {
      reply.status(503).send({
        status: 'not_ready',
        checks: {
          database: `error: ${(error as Error).message}`,
        },
      })
    }
  })
}