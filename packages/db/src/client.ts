import { PrismaClient } from './generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

const connectionString = process.env.DATABASE_URL;

// 1. Init the Postgres pool and adapter
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

// 2. Setup the Singleton to prevent "Too many connections" in dev
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

// 3. Re-export all the types (User, Post, etc.)
export * from './generated/prisma/client';