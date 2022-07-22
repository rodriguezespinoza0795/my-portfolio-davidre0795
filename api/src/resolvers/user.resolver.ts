import type { PrismaClient, User } from '@prisma/client'


type ResolverParent = unknown
type ResolverContext = { prisma: PrismaClient }

export async function findAll(parent: ResolverParent, args: {} ,context: ResolverContext): Promise<User[]> {
  return context.prisma.user.findMany()
}
