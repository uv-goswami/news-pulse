import { FastifyInstance } from 'fastify'

export function registerErrorHandler(app: FastifyInstance) {
  app.setErrorHandler((error, request, reply) => {
    const statusCode = error.statusCode || 500
    const code = error.code || 'INTERNAL_SERVER_ERROR'
    const message = error.message || 'An unexpected error occurred'

    // For validation errors, include details
    const details = error.validation ? error.validation.map((v: any) => ({
      field: v.instancePath || v.field,
      message: v.message || 'Invalid value',
    })) : undefined

    reply.status(statusCode).send({
      error: {
        code,
        message,
        statusCode,
        requestId: request.id,
        ...(details && { details }),
      },
    })
  })
}