import { NextResponse } from "next/server";
import { withErrorHandler } from "@/lib/api/error-handler";
import { applyRateLimit, RATE_LIMITS } from "@/lib/rateLimit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

async function get_handler(request: Request) {
  const limited = applyRateLimit(request, RATE_LIMITS.studio);
  if (limited) return limited;

  const url = new URL(request.url);
  const level = url.searchParams.get("level") ?? undefined;
  const source = url.searchParams.get("source") ?? undefined;
  const sort = url.searchParams.get("sort") ?? "desc";
  const countOnly = url.searchParams.get("count_only") === "1";

  // Parse limit (default 100, max 1000)
  let limit = 100;
  const limitParam = url.searchParams.get("limit");
  if (limitParam) {
    const n = parseInt(limitParam, 10);
    if (!isNaN(n) && n >= 1) limit = Math.min(n, 1000);
  }

  // Convert millisecond timestamp to ISO string for the DB
  let since: string | undefined;
  const sinceParam = url.searchParams.get("since");
  if (sinceParam) {
    const ms = parseInt(sinceParam, 10);
    if (!isNaN(ms)) {
      since = new Date(ms).toISOString();
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { countLogs, queryLogs } = require("@/lib/db/repositories/log-repo");

  if (countOnly) {
    return NextResponse.json({
      logs: [],
      total: countLogs({ level, source, since }),
    });
  }

  const rows = queryLogs({ level, source, since, limit });

  // Convert DB rows to the shape consumers expect
  const logs = rows.map(
    (row: {
      id: number;
      timestamp: string;
      level: string;
      source: string;
      message: string;
      metadata: unknown | null;
    }) => ({
      id: String(row.id),
      level: row.level,
      message: row.message,
      timestamp: new Date(row.timestamp).getTime(),
      source: row.source,
      metadata: row.metadata ?? undefined,
    }),
  );

  // queryLogs always returns DESC; reverse if ascending requested
  if (sort === "asc") {
    logs.reverse();
  }

  return NextResponse.json({ logs, total: logs.length });
}

export const GET = withErrorHandler(get_handler);
