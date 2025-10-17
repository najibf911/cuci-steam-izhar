import { NextRequest } from "next/server";
import { getQueue, subscribe, type QueueState } from "@/lib/queue";

export async function GET(req: NextRequest) {
  const encoder = new TextEncoder();
  const { readable, writable } = new TransformStream();
  const writer = writable.getWriter();

  const write = (text: string) => writer.write(encoder.encode(text));
  const send = (data: QueueState) => write(`data: ${JSON.stringify(data)}\n\n`);

  // initial snapshot
  send(getQueue());
  // subscribe to updates
  const unsubscribe = subscribe((state) => send(state));

  // keep-alive pings
  const keepAlive = setInterval(() => {
    write(":keep-alive\n\n");
  }, 25000);

  const cleanup = () => {
    clearInterval(keepAlive);
    unsubscribe();
    try {
      writer.releaseLock();
    } catch {}
  };

  // When client disconnects
  req.signal.addEventListener("abort", cleanup, { once: true });

  return new Response(readable, {
    status: 200,
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
      // CORS as needed:
      "Access-Control-Allow-Origin": "*",
    },
  });
}
