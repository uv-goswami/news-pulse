import { prisma } from '../lib/prisma.js'
import { spawn } from 'child_process'
import { env } from '../lib/env.js'
import fs from 'fs'

export async function createIngestJob(triggeredBy: 'api' | 'scheduler') {
  const existingJob = await prisma.ingestJob.findFirst({
    where: { status: { in: ['pending', 'running'] } },
  })

  if (existingJob) {
    throw new Error('JOB_ALREADY_RUNNING')
  }

  const job = await prisma.ingestJob.create({
    data: {
      status: 'pending',
      triggeredBy,
      triggeredAt: new Date(),
    },
  })

  return job
}

export async function getJobStatus(jobId: string) {
  const job = await prisma.ingestJob.findUnique({
    where: { id: jobId },
  })

  if (!job) return null

  return {
    jobId: job.id,
    status: job.status,
    triggeredBy: job.triggeredBy,
    triggeredAt: job.triggeredAt.toISOString(),
    startedAt: job.startedAt?.toISOString() || null,
    finishedAt: job.finishedAt?.toISOString() || null,
    articlesFetched: job.articlesFetched ?? null,
    clustersGenerated: job.clustersGenerated ?? null,
    errorMessage: job.errorMessage ?? null,
  }
}

export async function updateJobStatus(
  jobId: string,
  data: {
    status?: 'pending' | 'running' | 'completed' | 'failed'
    startedAt?: Date
    finishedAt?: Date
    articlesFetched?: number
    clustersGenerated?: number
    errorMessage?: string
  }
) {
  return prisma.ingestJob.update({
    where: { id: jobId },
    data,
  })
}

const STALE_JOB_TIMEOUT_MS = 5 * 60 * 1000

export async function cleanupStaleJobs() {
  const staleJobs = await prisma.ingestJob.findMany({
    where: {
      status: 'running',
      startedAt: {
        lt: new Date(Date.now() - STALE_JOB_TIMEOUT_MS),
      },
    },
  })

  for (const job of staleJobs) {
    await updateJobStatus(job.id, {
      status: 'failed',
      finishedAt: new Date(),
      errorMessage: 'Job marked as failed due to timeout (stale)',
    })
    console.log(`Cleaned up stale job: ${job.id}`)
  }
}

export async function runPendingJob() {
  await cleanupStaleJobs()

  const pendingJob = await prisma.ingestJob.findFirst({
    where: { status: 'pending' },
    orderBy: { triggeredAt: 'asc' },
  })

  if (!pendingJob) return null

  // Mark as running
  await updateJobStatus(pendingJob.id, {
    status: 'running',
    startedAt: new Date(),
  })

  const pythonPath = env.SCRAPER_PATH
  const pythonCmd = process.env.PYTHON_CMD || 'python3'

  // Check if scraper file exists
  try {
    await fs.promises.access(pythonPath)
  } catch {
    await updateJobStatus(pendingJob.id, {
      status: 'failed',
      finishedAt: new Date(),
      errorMessage: `Scraper file not found at: ${pythonPath}`,
    })
    return null
  }

  // Spawn the Python process without shell to avoid path splitting
  const child = spawn(pythonCmd, [pythonPath], {
    env: { ...process.env, NODE_ENV: env.NODE_ENV },
    // No shell: true – arguments are passed as an array, spaces are fine
  })

  let stderr = ''

  child.stderr.on('data', (data) => { stderr += data.toString() })

  const timeoutId = setTimeout(() => {
    child.kill('SIGTERM')
    void updateJobStatus(pendingJob.id, {
      status: 'failed',
      finishedAt: new Date(),
      errorMessage: `Scraper timed out after ${env.SCRAPER_TIMEOUT_MS}ms`,
    })
  }, env.SCRAPER_TIMEOUT_MS)

  return new Promise((resolve) => {
    child.on('close', async (code) => {
      clearTimeout(timeoutId)
      const finishedAt = new Date()

      if (code === 0) {
        const newArticles = await prisma.article.count({
          where: { fetchedAt: { gte: pendingJob.triggeredAt } },
        })
        const newClusters = await prisma.cluster.count({
          where: { createdAt: { gte: pendingJob.triggeredAt } },
        })

        await updateJobStatus(pendingJob.id, {
          status: 'completed',
          finishedAt,
          articlesFetched: newArticles,
          clustersGenerated: newClusters,
        })
      } else {
        await updateJobStatus(pendingJob.id, {
          status: 'failed',
          finishedAt,
          errorMessage: stderr.trim() || `Scraper process exited with code ${code}`,
        })
      }
      resolve(null)
    })

    child.on('error', async (err) => {
      clearTimeout(timeoutId)
      await updateJobStatus(pendingJob.id, {
        status: 'failed',
        finishedAt: new Date(),
        errorMessage: `Failed to spawn scraper: ${err.message}`,
      })
      resolve(null)
    })
  })
}