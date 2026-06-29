// prisma/seed.ts
import { prisma } from '../src/lib/prisma.js'

async function main() {
  console.log('🌱 Seeding...')

  const user = await prisma.user.create({
    data: {
      email: 'test@example.com',
      passwordHash: '$2a$10$dummyhash', 
      role: 'viewer',
    },
  })

  console.log('✅ Created user:', user)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })