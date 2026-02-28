import { NextResponse } from "next/server";

export async function GET() {
  const v = process.env.DATABASE_URL || "";
  return NextResponse.json({
    hasDatabaseUrl: Boolean(v),
    startsWith: v.slice(0, 30),
  });
}