import { FastifyInstance } from 'fastify'
import { createIngestJob, getJobStatus } from '../services/job.service.js'
import { startJobWorker } from '../workers/job-worker.js'

const triggerSchema = {
  // No body, optional query params? None.
}

const statusSchema = {
  params: {
    type: 'object',
    required: ['jobId'],
    properties: {
      jobId: { type: 'string', format: 'uuid' },
    },
  },
}

export async function ingestRoutes(app: FastifyInstance) {
  // POST /ingest/trigger
  app.post('/ingest/trigger', { schema: triggerSchema }, async (request, reply) => {
    try {
      const job = await createIngestJob('api')
      reply.status(202).send({
        jobId: job.id,
        status: job.status,
        message: 'Ingest job created. Poll /ingest/status/:jobId for updates.',
        triggeredAt: job.triggeredAt.toISOString(),
      })
    } catch (error: any) {
      if (error.message === 'JOB_ALREADY_RUNNING') {
        reply.status(409).send({
          error: {
            code: 'JOB_ALREADY_RUNNING',
            message: 'An ingest job is already in progress. Wait for it to complete.',
            statusCode: 409,
            requestId: request.id,
          },
        })
      } else {
        throw error
      }
    }
  })

  // GET /ingest/status/:jobId
  app.get('/ingest/status/:jobId', { schema: statusSchema }, async (request, reply) => {
    const { jobId } = request.params as { jobId: string }
    const status = await getJobStatus(jobId)

    if (!status) {
      reply.status(404).send({
        error: {
          code: 'JOB_NOT_FOUND',
          message: `No job found with id ${jobId}`,
          statusCode: 404,
          requestId: request.id,
        },
      })
      return
    }

    reply.send(status)
  })
}

// We'll start the worker in server.ts