import { NextResponse } from "next/server";
import { z } from "zod";
import { parseQuery, isValidationError } from "@/lib/api/validation";
import { createLogger } from "@/lib/logger";
import { withErrorHandler } from "@/lib/api/error-handler";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const log = createLogger("api:studio:logs");

const LogsQuerySchema = z.object({
  level: z.enum(["debug", "info", "warn", "error"]).optional(),
  source: z.string().optional(),
  since: z.string().optional(),
  format: z.enum(["json", "csv"]).optional(),
  limit: z
    .string()
    .optional()
    .transform((v) => {
      if (!v) return 100;
      const n = parseInt(v, 10);
      if (isNaN(n) || n < 1) return 100;
      return Math.min(n, 1000);
    }),
});

async function get_handler(request: Request) {
  try {
    // Run migrations first to ensure the logs table exists
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { runMigrations } = require("@/lib/db/migrations");
    runMigrations();

    const url = new URL(request.url);
    const parsed = parseQuery(url, LogsQuerySchema);
    if (isValidationError(parsed)) return parsed;

    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { queryLogs } = require("@/lib/db/repositories/log-repo");

    const logs = queryLogs({
      level: parsed.level,
      source: parsed.source,
      since: parsed.since,
      limit: parsed.limit,
    });

    if (parsed.format === "csv") {
      const header = "timestamp,level,source,message";
      const rows = logs.map(
        (l: { timestamp: string; level: string; source: string; message: string }) =>
          `${l.timestamp},${l.level},${l.source},"${String(l.message).replace(/"/g, '""')}"`,
      );
      const csv = [header, ...rows].join("\n");
      return new Response(csv, {
        headers: {
          "Content-Type": "text/csv",
          "Content-Disposition": "attachment; filename=openclaw-logs.csv",
        },
      });
    }

    return NextResponse.json({ logs, count: logs.length });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    log.error("Failed to query logs", { error: message });
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export const GET = withErrorHandler(get_handler);