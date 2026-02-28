import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    hasDatabaseUrl: Boolean(process.env.DATABASE_URL),
    startsWith: process.env.DATABASE_URL?.slice(0, 45) ?? null,
  });
}