import { NextResponse } from "next/server";
import { getQueue, setQueue } from "@/lib/queue";

export async function GET() {
  return NextResponse.json(getQueue(), {
    headers: {
      "Cache-Control": "no-store",
    },
  });
}

// Optional: allow POST updates (e.g., from an admin tool)
export async function POST(request: Request) {
  try {
    // Simple bearer token auth for production updates
    const auth = request.headers.get("authorization") || "";
    const expected = process.env.QUEUE_ADMIN_TOKEN;
    if (!expected || !auth.startsWith("Bearer ") || auth.slice(7) !== expected) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const position = Number(body.position);
    const waitMinutes = Number(body.waitMinutes);
    if (!Number.isFinite(position) || !Number.isFinite(waitMinutes)) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }
    const state = setQueue(position, waitMinutes);
    return NextResponse.json(state);
  } catch (err) {
    return NextResponse.json({ error: "Bad request" }, { status: 400 });
  }
}
