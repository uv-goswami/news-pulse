import { FastifyInstance } from 'fastify'
import fastifyCors from '@fastify/cors'
import fastifyHelmet from '@fastify/helmet'
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'
import fastifyJwt from '@fastify/jwt'
import fastifyCookie from '@fastify/cookie'
import fastifyRateLimit from '@fastify/rate-limit'

export async function registerPlugins(app: FastifyInstance) {
  // CORS – allow frontend origins
  await app.register(fastifyCors, {
    origin: [
      'http://localhost:3000',
      process.env.FRONTEND_URL,
    ].filter(Boolean) as string[],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  })

  // Helmet – security headers
  await app.register(fastifyHelmet)

  // Rate limiting
  await app.register(fastifyRateLimit, {
    max: 100,
    timeWindow: '1 minute',
    global: true,
  })

  // JWT – optional, used only if auth is enabled
  await app.register(fastifyJwt, {
    secret: process.env.JWT_SECRET || 'change-me-in-production',
    cookie: {
      cookieName: 'refreshToken',
      signed: false,
    },
  })

  // Cookie parser – for refresh token
  await app.register(fastifyCookie)

  // Swagger – serves OpenAPI docs at /docs
  await app.register(fastifySwagger, {
    openapi: {
      info: {
        title: 'News Pulse API',
        description: 'REST API for topic-clustered news timeline',
        version: '1.0.0',
      },
      servers: [
        {
          url: process.env.NODE_ENV === 'production'
            ? 'https://news-pulse-backend.onrender.com'
            : 'http://localhost:3001',
        },
      ],
    },
    stripBasePath: true,
  })

  await app.register(fastifySwaggerUi, {
    routePrefix: '/docs',
  })
}