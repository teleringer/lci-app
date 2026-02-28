// @ts-nocheck
import { PrismaClient } from "@prisma/client";
...
import { PrismaClient } from "@prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";
import { Pool } from "@neondatabase/serverless";

console.log("[lib/prisma.ts] LOADED ✅");

function makePrismaClient() {
  const raw = process.env.DATABASE_URL;

  console.log(
    "[lib/prisma.ts] DATABASE_URL present?",
    Boolean(raw),
    "prefix:",
    raw?.slice(0, 35)
  );

  if (!raw || raw.trim() === "") {
    throw new Error("DATABASE_URL missing/empty at runtime");
  }

  // Parse ourselves (removes any driver parsing weirdness)
  const u = new URL(raw);
  const host = u.hostname;
  const port = u.port ? Number(u.port) : 5432;
  const database = u.pathname.replace("/", "");
  const user = decodeURIComponent(u.username);
  const password = decodeURIComponent(u.password);

  const pool = new Pool({
    host,
    port,
    database,
    user,
    password,
    ssl: true,
  });

  const adapter = new PrismaNeon(pool);

  return new PrismaClient({ adapter, log: ["error"] });
}

// IMPORTANT: no global caching for now (so we always rebuild fresh)
export const prisma = makePrismaClient();