import * as Sentry from '@sentry/node'
import { fastify } from 'fastify'
import { useSentryTracing } from './sentry'

export type { FastifyBaseLogger } from 'fastify'

export async function createServer(options: {
  tracing: boolean
  name: string
  log: {
    level: string
  }
}) {
  const server = fastify({
    disableRequestLogging: true,
    bodyLimit: 11e6, // 11 mb
    logger: {
      level: options.log.level,
    },
  })

  server.addHook('onReady', async () => {
    server.log.info(`Service "${options.name}" is ready`)
  })

  process
    .on('unhandledRejection', (reason, p) => {
      Sentry.captureException(reason)
      server.log.error(reason as any, 'Unhandled Rejection at Promise', p)
    })
    .on('uncaughtException', (err) => {
      Sentry.captureException(err)
      server.log.error(err as any, 'Uncaught Exception thrown')
    })

  if (options.tracing)
    await useSentryTracing(server)

  // await useRequestLogging(server)

  return server
}
