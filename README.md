This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Prisma Multi-File Schema

This project uses a multi-file schema approach for Prisma, which allows us to organize our database models into separate files for better maintainability.

### Structure

- `prisma/schema.prisma` - Main configuration file with generator and datasource
- `prisma/models/` - Directory containing individual model files
- `prisma/migrations/` - Database migration files

### Database Seeding

This project includes a seeder (`prisma/seed.ts`) that provides initial data for the application. There are two ways to seed the database:

1. **Automatic seeding during migration** (recommended):
   ```bash
   pnpm prisma migrate dev --name init
   ```
   This will automatically run the seeder after applying migrations.

2. **Manual seeding**:
   ```bash
   # Seed the database with initial data
   pnpm seed
   
   # Clean the database and seed with fresh data
   pnpm seed -- --clean
   ```

### Available Scripts

- `npm run prisma:generate` - Combine schema files and generate Prisma client
- `npm run prisma:migrate [name]` - Create and run database migration (includes seeding data automatically)
- `npm run seed` - Seed the database with initial data (manual seeding)
- `npm run seed -- --clean` - Clean the database and seed with fresh data (manual seeding)

For more details about the Prisma setup, check [prisma/README.md](prisma/README.md).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
