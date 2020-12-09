import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    const result = await prisma.user.create({
        data: {
            email: "sydoafk@gmail.com",
            name: "Vinícius Roque"
        },
        select: {
            name: true
        }
    })

    console.log(result)
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })