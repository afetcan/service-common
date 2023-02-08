import type { FastifyBaseLogger } from 'fastify'

const errorTypes = ['unhandledRejection', 'uncaughtException']
const signalTraps = ['SIGTERM', 'SIGINT', 'SIGUSR2']

export function registerShutdown(config: {
  logger: FastifyBaseLogger
  onShutdown(): void | Promise<void>
  noExit?: boolean
}) {
  let exited = false

  const shouldExit = !config.noExit

  async function shutdown() {
    if (exited)
      return

    config.logger.info('Shutting down...')
    exited = true
    await config.onShutdown()
  }

  // eslint-disable-next-line array-callback-return
  errorTypes.map((type) => {
    process.on(type, async (e) => {
      try {
        config.logger.info(`process.on ${type}`)
        config.logger.error(e)
        await shutdown()
        if (shouldExit)
          process.exit(0)
      }
      catch (_) {
        if (shouldExit)
          process.exit(1)
      }
    })
  })

  // eslint-disable-next-line array-callback-return
  signalTraps.map((type) => {
    process.once(type, async () => {
      try {
        await shutdown()
      }
      finally {
        if (shouldExit)
          process.kill(process.pid, type)
      }
    })
  })
}
