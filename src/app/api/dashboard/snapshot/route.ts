import { NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";
import type {
  LogEntry as DashboardLogEntry,
  LogLevel,
  LogSource,
} from "@/features/logs/types";
import type { DashboardSnapshot } from "@/features/dashboard/types";
import type { GatewayStatus } from "@/lib/gateway/GatewayClient";
import { withErrorHandler } from "@/lib/api/error-handler";
import { applyRateLimit, RATE_LIMITS } from "@/lib/rateLimit";
import { resolveStateDir } from "@/lib/clawdbot/paths";
import { countLogs, queryLogs } from "@/lib/db/repositories/log-repo";
import { countMetrics } from "@/lib/db/repositories/metrics-repo";
import { readDiskUsagePercent } from "@/lib/system/runtime-health";
import { loadStudioSettings } from "@/lib/studio/settings-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type CronJobSummary = {
  state?: {
    enabled?: boolean;
    lastRunAt?: number;
  };
};

function readJson(p: string): unknown {
  try {
    return JSON.parse(fs.readFileSync(p, "utf8"));
  } catch {
    return null;
  }
}

function loadCronJobs(): CronJobSummary[] {
  const stateDir = resolveStateDir();
  const jobsPath = path.join(stateDir, "cron", "jobs.json");
  const jobsData = readJson(jobsPath) as { jobs?: CronJobSummary[] } | null;
  return Array.isArray(jobsData?.jobs) ? jobsData.jobs : [];
}

function resolveGatewayStatus(): GatewayStatus {
  try {
    const gatewayUrl = loadStudioSettings().gateway?.url?.trim();
    return gatewayUrl ? "connected" : "disconnected";
  } catch {
    return "disconnected";
  }
}

function toDashboardLogEntry(entry: {
  id: number;
  level: string;
  message: string;
  timestamp: string;
  source: string;
  metadata: unknown | null;
}): DashboardLogEntry {
  return {
    id: String(entry.id),
    level: entry.level as LogLevel,
    message: entry.message,
    timestamp: new Date(entry.timestamp).getTime(),
    source: entry.source as LogSource,
    metadata:
      entry.metadata && typeof entry.metadata === "object"
        ? (entry.metadata as Record<string, unknown>)
        : undefined,
  };
}

async function get_handler(request: Request) {
  const limited = applyRateLimit(request, RATE_LIMITS.studio);
  if (limited) return limited;

  const url = new URL(request.url);
  const limitParam = Number.parseInt(url.searchParams.get("limit") ?? "", 10);
  const activityLimit =
    Number.isFinite(limitParam) && limitParam > 0
      ? Math.min(limitParam, 50)
      : 12;

  const since24h = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();

  const [diskUsagePercent, recentActivityRows] = await Promise.all([
    readDiskUsagePercent(),
    Promise.resolve(queryLogs({ limit: activityLimit })),
  ]);

  const cronJobs = loadCronJobs();
  const cronCounts = {
    active: cronJobs.filter((job) => job.state?.enabled !== false).length,
    total: cronJobs.length,
  };
  const now = Date.now();
  const metrics = {
    messages24h: countMetrics({ metricType: "message", since: since24h }),
    cronRuns: cronJobs.filter((job) => {
      const lastRunAt = job.state?.lastRunAt;
      return (
        typeof lastRunAt === "number" && now - lastRunAt < 24 * 60 * 60 * 1000
      );
    }).length,
    errors: countLogs({ level: "error" }),
  };

  const snapshot: DashboardSnapshot = {
    gatewayStatus: resolveGatewayStatus(),
    diskUsagePercent,
    cronCounts,
    metrics,
    recentActivity: recentActivityRows.map(toDashboardLogEntry),
  };

  return NextResponse.json(snapshot);
}

export const GET = withErrorHandler(get_handler);
