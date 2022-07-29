import type { PrismaClient, user } from '@prisma/client';
import { hash } from 'bcrypt';

type ResolverParent = unknown;
type ResolverContext = { prisma: PrismaClient };

export async function findAll(
  parent: ResolverParent,
  args: {},
  { prisma }: ResolverContext
): Promise<user[]> {
  return prisma.user.findMany();
}

type createUserInput = Pick<user, 'name' | 'username' | 'password' | 'email'>;

export async function createUser(
  parent: ResolverParent,
  { data }: { data: createUserInput },
  { prisma }: ResolverContext
): Promise<user> {
  const hashedPassword: any = await hash(data.password as string, 10);
  const dataUser = { ...data, password: hashedPassword };
  return prisma.user.create({ data: dataUser });
}
