import 'dotenv/config';
import path from 'node:path';
import { type PrismaConfig } from 'prisma';

export default {
    schema: path.join('database'),
    migrations: {
        path: path.join('database', 'migrations'),
        seed: 'ts-node database/seed.ts'
    }
} satisfies PrismaConfig;
