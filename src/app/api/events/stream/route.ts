import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

// In-memory subscriber list (per-process)
const subscribers = new Set<ReadableStreamDefaultController>();

export function broadcastEvent(type: string, payload: unknown) {
  const data = JSON.stringify({ type, payload, timestamp: Date.now() });
  const chunk = new TextEncoder().encode(`data: ${data}\n\n`);
  for (const controller of subscribers) {
    try {
      controller.enqueue(chunk);
    } catch {
      subscribers.delete(controller);
    }
  }
}

export async function GET(req: NextRequest) {
  const stream = new ReadableStream({
    start(controller) {
      subscribers.add(controller);

      // Send initial heartbeat
      const heartbeat = new TextEncoder().encode(`: heartbeat\n\n`);
      controller.enqueue(heartbeat);

      // Periodic heartbeat every 30s to keep connection alive
      const interval = setInterval(() => {
        try {
          controller.enqueue(heartbeat);
        } catch {
          clearInterval(interval);
          subscribers.delete(controller);
        }
      }, 30000);

      // Cleanup on close
      req.signal.addEventListener("abort", () => {
        clearInterval(interval);
        subscribers.delete(controller);
        try {
          controller.close();
        } catch {
          /* already closed */
        }
      });
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
      "X-Accel-Buffering": "no",
    },
  });
}
