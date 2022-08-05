import { AuthenticationError } from 'apollo-server-express';
import type { PrismaClient, Avocado, Attributes, Prisma } from '@prisma/client';
import type { user } from '@prisma/client';

export type ResolverParent = unknown;
export type ResolverContext = { prisma: PrismaClient; user: user | undefined };

export async function findAll(
  parent: ResolverParent,
  args: { where?: Prisma.AvocadoWhereInput; skip?: number; take?: number },
  { prisma }: ResolverContext
): Promise<Avocado[]> {
  return prisma.avocado.findMany({
    include: { attributes: true },
    where: args.where,
    skip: args.skip,
    take: args.take,
  });
}

export async function findOne(
  parent: ResolverParent,
  args: { id: string },
  { prisma }: ResolverContext
): Promise<Avocado | null> {
  return prisma.avocado.findUnique({
    where: {
      id: parseInt(args.id, 10),
    },
    include: {
      attributes: true,
    },
  });
}

export async function createAvo(
  parent: unknown,
  {
    data,
  }: {
    data: Pick<Avocado, 'name' | 'price' | 'image' | 'sku'> &
      Omit<Attributes, 'id'>;
  },
  { prisma, user }: ResolverContext
): Promise<Avocado> {
  if (user == undefined) {
    throw new AuthenticationError('Unauthenticated request');
  }

  const { name, image, price, sku, ...attributes } = data;
  const avo = await prisma.avocado.create({
    data: {
      name,
      price,
      image,
      sku,
      attributes: {
        create: attributes,
      },
    },
    include: { attributes: true },
  });

  return avo;
}
