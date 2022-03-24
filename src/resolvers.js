import pkg from '@prisma/client';
const { PrismaClient } = pkg;
const prisma = new PrismaClient()
export const resolvers = {
  Query: {
    users: async () => await prisma.user.findMany({ include: { posts: true } })
  },
}
