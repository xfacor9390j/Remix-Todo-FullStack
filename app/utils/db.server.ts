// src/db.server.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export { prisma };
