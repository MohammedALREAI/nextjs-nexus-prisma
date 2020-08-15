import app, { server, use } from 'nexus'
import { prisma } from 'nexus-plugin-prisma'
import { PrismaClient } from '@prisma/client'
import '../../graphql/schema'

use(
  prisma({
    client: { instance: new PrismaClient() },
    features: { crud: true }
  })
)

app.assemble()

export default server.handlers.graphql
