import { FastifyInstance } from 'fastify'

export function registerErrorHandler(app: FastifyInstance) {
  app.setErrorHandler((error, request, reply) => {
    const err = error as any // Type assertion to access error properties safely

    const statusCode = err.statusCode || 500
    const code = err.code || 'INTERNAL_SERVER_ERROR'
    const message = err.message || 'An unexpected error occurred'

    // For validation errors, include details
    const details = err.validation
      ? err.validation.map((v: any) => ({
          field: v.instancePath || v.field,
          message: v.message || 'Invalid value',
        }))
      : undefined

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