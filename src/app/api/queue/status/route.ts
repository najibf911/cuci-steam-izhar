import { NextResponse } from "next/server";

export async function GET() {
  const hasToken = Boolean(process.env.QUEUE_ADMIN_TOKEN && process.env.QUEUE_ADMIN_TOKEN.length > 0);
  return NextResponse.json({ hasToken }, { headers: { "Cache-Control": "no-store" } });
}
