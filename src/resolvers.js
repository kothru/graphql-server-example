import pkg from '@prisma/client';
const { PrismaClient } = pkg;

const prisma = new PrismaClient()
console.log(await prisma.user.findMany({ include: { posts: true } }))
export const resolvers = {
  Query: {
    users: async () => await prisma.user.findMany({ include: { posts: true } })
  },
}
