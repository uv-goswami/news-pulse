import 'dotenv/config'
import path from 'path'

export const env = {
  PORT: Number(process.env.PORT) || 3001,
  HOST: process.env.HOST || '0.0.0.0',
  NODE_ENV: process.env.NODE_ENV || 'development',
  LOG_LEVEL: process.env.LOG_LEVEL || 'info',
  DATABASE_URL: process.env.DATABASE_URL as string,

  // JWT (optional)
  JWT_SECRET: process.env.JWT_SECRET || 'change-me-in-production',
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET || 'change-me-in-production',

  // Frontend URL for CORS
  FRONTEND_URL: process.env.FRONTEND_URL || 'http://localhost:3000',

  // Scraper path – absolute path to the Python main script
  // Defaults to ../scraper/main.py relative to the backend directory
  SCRAPER_PATH: process.env.SCRAPER_PATH
    ? path.resolve(process.env.SCRAPER_PATH)
    : path.resolve(process.cwd(), '..', 'scraper', 'main.py'),

  // Scraper timeout (ms) – if exceeded, job fails
  SCRAPER_TIMEOUT_MS: Number(process.env.SCRAPER_TIMEOUT_MS) || 120_000,
}