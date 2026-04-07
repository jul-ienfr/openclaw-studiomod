import { NextRequest } from "next/server";

declare global {
  var __studioEventBroadcaster:
    | {
        addClient: (res: import("node:http").ServerResponse) => () => void;
        getClientCount: () => number;
      }
    | undefined;
}

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  const broadcaster = globalThis.__studioEventBroadcaster;

  if (!broadcaster) {
    return new Response("Gateway broadcaster not available", { status: 503 });
  }

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    start(controller) {
      // Send initial ping to confirm connection
      controller.enqueue(encoder.encode(": connected\n\n"));

      // Build a fake ServerResponse-like object that the broadcaster can write to
      const pseudoRes = {
        write: (chunk: string) => {
          try {
            controller.enqueue(encoder.encode(chunk));
          } catch {
            // stream closed
          }
        },
        end: () => {
          try {
            controller.close();
          } catch {
            // already closed
          }
        },
      };

      const cleanup = broadcaster.addClient(pseudoRes as never);

      req.signal.addEventListener("abort", () => {
        cleanup();
        try {
          controller.close();
        } catch {
          // already closed
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
