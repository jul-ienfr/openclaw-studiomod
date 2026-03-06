import { NextResponse } from "next/server";
import { z } from "zod";
import { parseQuery, isValidationError } from "@/lib/api/validation";
import { createLogger } from "@/lib/logger";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const log = createLogger("api:studio:metrics");

const MetricsQuerySchema = z.object({
  agentId: z.string().optional(),
  metricType: z.string().optional(),
  since: z.string().optional(),
  groupBy: z.enum(["hour", "day"]).optional(),
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

export async function GET(request: Request) {
  try {
    // Run migrations first to ensure the metrics table exists
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { runMigrations } = require("@/lib/db/migrations");
    runMigrations();

    const url = new URL(request.url);
    const parsed = parseQuery(url, MetricsQuerySchema);
    if (isValidationError(parsed)) return parsed;

    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { queryMetrics, aggregateMetrics } = require("@/lib/db/repositories/metrics-repo");

    // If groupBy is specified, return aggregated data for charts
    if (parsed.groupBy) {
      const since =
        parsed.since ??
        new Date(Date.now() - 86400000).toISOString(); // default: last 24h
      const aggregated = aggregateMetrics(
        parsed.metricType ?? "message",
        since,
        parsed.groupBy,
      );
      return NextResponse.json({ aggregated, count: aggregated.length });
    }

    // Otherwise return raw metrics
    const metrics = queryMetrics({
      agentId: parsed.agentId,
      metricType: parsed.metricType,
      since: parsed.since,
      limit: parsed.limit,
    });

    return NextResponse.json({ metrics, count: metrics.length });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    log.error("Failed to query metrics", { error: message });
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
