#!/usr/bin/env node

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function cleanDatabase() {
  // Hapus data dari tabel dalam urutan yang benar untuk menghindari constraint errors
  await prisma.comment.deleteMany()
  await prisma.post.deleteMany()
  await prisma.category.deleteMany()
  await prisma.user.deleteMany()
  console.log('Database cleaned successfully!')
}

async function seedUsers() {
  const userData = [
    {
      name: 'John Doe',
      username: 'johndoe',
      email: 'john@example.com',
      emailVerifiedAt: new Date(),
    },
    {
      name: 'Jane Smith',
      username: 'janesmith',
      email: 'jane@example.com',
      emailVerifiedAt: new Date(),
    }
  ]

  const users = []
  for (const data of userData) {
    const user = await prisma.user.create({ data })
    users.push(user)
  }

  console.log('Users seeded successfully!')
  return users
}

async function seedCategories() {
  const categoryData = [
    { name: 'Technology' },
    { name: 'Health' }
  ]

  const categories = []
  for (const data of categoryData) {
    const category = await prisma.category.create({ data })
    categories.push(category)
  }

  console.log('Categories seeded successfully!')
  return categories
}

async function seedPosts(users: any[], categories: any[]) {
  const postData = [
    {
      title: 'Introduction to Prisma',
      content: 'Prisma is a modern database toolkit that makes database access easy.',
      published: true,
      author: { connect: { id: users[0].id } },
      Category: { connect: { id: categories[0].id } }
    },
    {
      title: 'Healthy Lifestyle Tips',
      content: 'Here are some tips to maintain a healthy lifestyle.',
      published: true,
      author: { connect: { id: users[1].id } },
      Category: { connect: { id: categories[1].id } }
    }
  ]

  const posts = []
  for (const data of postData) {
    const post = await prisma.post.create({ data })
    posts.push(post)
  }

  console.log('Posts seeded successfully!')
  return posts
}

async function seedComments(users: any[], posts: any[]) {
  const commentData = [
    {
      content: 'Great post! Thanks for sharing.',
      post: { connect: { id: posts[0].id } },
      author: { connect: { id: users[1].id } }
    },
    {
      content: 'This was very helpful. Looking forward to more posts.',
      post: { connect: { id: posts[1].id } },
      author: { connect: { id: users[0].id } }
    }
  ]

  const comments = []
  for (const data of commentData) {
    const comment = await prisma.comment.create({ data })
    comments.push(comment)
  }

  console.log('Comments seeded successfully!')
  return comments
}

async function main() {
  const args = process.argv.slice(2)
  const shouldClean = args.includes('--clean')
  
  if (shouldClean) {
    await cleanDatabase()
  }

  // Seed Users
  const users = await seedUsers()

  // Seed Categories
  const categories = await seedCategories()

  // Seed Posts
  const posts = await seedPosts(users, categories)

  // Seed Comments
  const comments = await seedComments(users, posts)

  console.log('All data seeded successfully!')
  console.log({ 
    users: users.length, 
    categories: categories.length, 
    posts: posts.length, 
    comments: comments.length 
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
