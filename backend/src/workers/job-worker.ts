import { runPendingJob, cleanupStaleJobs } from '../services/job.service.js'

let isProcessing = false

export async function startJobWorker(intervalMs: number = 5000) {
  console.log('Job worker started (interval: %dms)', intervalMs)

  // Initial cleanup and run
  setTimeout(() => {
    runPendingJobIfIdle()
  }, 1000)

  // Periodic polling
  setInterval(() => {
    runPendingJobIfIdle()
  }, intervalMs)

  // Also run stale cleanup every minute
  setInterval(() => {
    cleanupStaleJobs().catch(console.error)
  }, 60 * 1000)
}

async function runPendingJobIfIdle() {
  if (isProcessing) return
  isProcessing = true
  try {
    await runPendingJob()
  } catch (error) {
    console.error('Job worker error:', error)
  } finally {
    isProcessing = false
  }
}