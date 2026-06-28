import Fastify from 'fastify'
import { registerPlugins } from './plugins/index.js'
import { registerErrorHandler } from './utils/error-handler.js'
import { healthRoutes } from './routes/health.js'
import { clustersRoutes } from './routes/clusters.js'
import { timelineRoutes } from './routes/timeline.js'
import { ingestRoutes } from './routes/ingest.js'
import { startJobWorker } from './workers/job-worker.js'
import { env } from './lib/env.js'
import 'dotenv/config'

const app = Fastify({
  logger: {
    level: env.LOG_LEVEL,
    transport: env.NODE_ENV !== 'production'
      ? { target: 'pino-pretty' }
      : undefined,
  },
  requestIdHeader: 'x-request-id',
  genReqId: (req) => (req.headers['x-request-id'] as string) || crypto.randomUUID(),
})

// Register plugins
await registerPlugins(app)

// Register error handler
registerErrorHandler(app)

// Register routes
await app.register(healthRoutes)
await app.register(clustersRoutes)
await app.register(timelineRoutes)
await app.register(ingestRoutes)

// Start the server
try {
  await app.listen({ port: env.PORT, host: env.HOST })
  app.log.info(`Server listening on ${env.HOST}:${env.PORT}`)

  // Start the job worker after the server is up
  await startJobWorker(5000)
  app.log.info('Job worker started')
} catch (err) {
  app.log.error(err)
  process.exit(1)
}