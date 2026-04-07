import { getDb } from "@/lib/watcher/db";
import { requireAuth } from "@/features/watcher/operations/authMiddleware";
import { withErrorHandler } from "@/lib/api/error-handler";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const POLL_INTERVAL_MS = 10_000;

async function get_handler(request: Request) {
  const authError = requireAuth(request);
  if (authError) return authError;

  const encoder = new TextEncoder();
  let closed = false;
  let timer: ReturnType<typeof setTimeout> | null = null;

  const stream = new ReadableStream({
    start(controller) {
      function send(event: string, data: unknown) {
        if (closed) return;
        try {
          controller.enqueue(
            encoder.encode(
              `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`,
            ),
          );
        } catch {
          closed = true;
        }
      }

      // Send initial ping
      send("ping", { ts: Date.now() });

      async function poll() {
        if (closed) return;
        try {
          const db = getDb();
          // Group all queries in a single transaction to reduce DB round-trips
          const [sources, newCountRow, lastImpl] = db.transaction(() => [
            db.prepare("SELECT * FROM source_state ORDER BY source ASC").all(),
            db
              .prepare("SELECT COUNT(*) AS c FROM items WHERE status = 'new'")
              .get() as { c: number },
            db
              .prepare(
                "SELECT id, status, implemented_at FROM implementations ORDER BY implemented_at DESC LIMIT 1",
              )
              .get() as
              | { id: string; status: string; implemented_at: number }
              | undefined,
          ])() as [
            unknown,
            { c: number },
            { id: string; status: string; implemented_at: number } | undefined,
          ];

          send("sources-updated", { sources });
          send("new-items", { count: newCountRow.c });
          if (lastImpl) send("implementation-status", { latest: lastImpl });
        } catch {
          // DB may not exist yet — send ping to keep alive
          send("ping", { ts: Date.now() });
        }
        if (!closed) {
          timer = setTimeout(poll, POLL_INTERVAL_MS);
        }
      }

      // Start polling after 500ms delay
      timer = setTimeout(poll, 500);

      // Handle client disconnect
      request.signal.addEventListener("abort", () => {
        closed = true;
        if (timer) clearTimeout(timer);
        try {
          controller.close();
        } catch {
          /* ignore */
        }
      });
    },
    cancel() {
      closed = true;
      if (timer) clearTimeout(timer);
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

export const GET = withErrorHandler(get_handler);
