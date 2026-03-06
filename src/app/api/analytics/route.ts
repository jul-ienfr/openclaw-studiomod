import { NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";
import { resolveStateDir } from "@/lib/clawdbot/paths";
import { withErrorHandler } from "@/lib/api/error-handler";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type TimeRange = "24h" | "7d" | "30d";

function readJson(filePath: string): unknown {
  try {
    if (!fs.existsSync(filePath)) return null;
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch {
    return null;
  }
}

function rangeMs(range: TimeRange): number {
  switch (range) {
    case "24h": return 24 * 60 * 60 * 1000;
    case "7d": return 7 * 24 * 60 * 60 * 1000;
    case "30d": return 30 * 24 * 60 * 60 * 1000;
  }
}

function rangeSqlite(range: TimeRange): string {
  switch (range) {
    case "24h": return "-1 day";
    case "7d": return "-7 days";
    case "30d": return "-30 days";
  }
}

function groupByFormat(range: TimeRange): string {
  return range === "24h" ? "%Y-%m-%d %H:00" : "%Y-%m-%d";
}

function tryQueryMetrics(range: TimeRange) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { runMigrations } = require("@/lib/db/migrations");
    runMigrations();

    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { getDb } = require("@/lib/db/studio-db");
    const db = getDb();

    const since = rangeSqlite(range);
    const fmt = groupByFormat(range);

    // Total metric counts by type
    const typeCounts = db
      .prepare(
        `SELECT metric_type, COUNT(*) AS cnt
         FROM metrics WHERE timestamp >= datetime('now', ?)
         GROUP BY metric_type`,
      )
      .all(since) as { metric_type: string; cnt: number }[];

    // Time series for messages and errors
    const timeSeries = db
      .prepare(
        `SELECT
           strftime(?, timestamp) AS period,
           metric_type,
           COUNT(*) AS cnt
         FROM metrics
         WHERE timestamp >= datetime('now', ?)
         GROUP BY period, metric_type
         ORDER BY period ASC`,
      )
      .all(fmt, since) as { period: string; metric_type: string; cnt: number }[];

    // Agent breakdown
    const agentBreakdown = db
      .prepare(
        `SELECT
           agent_id,
           COUNT(*) AS message_count,
           MAX(timestamp) AS last_active
         FROM metrics
         WHERE agent_id IS NOT NULL AND timestamp >= datetime('now', ?)
         GROUP BY agent_id
         ORDER BY message_count DESC
         LIMIT 20`,
      )
      .all(since) as { agent_id: string; message_count: number; last_active: string }[];

    // Response time averages per agent
    const responseTimes = db
      .prepare(
        `SELECT
           agent_id,
           AVG(CAST(json_extract(value, '$.duration_ms') AS REAL)) AS avg_response_ms
         FROM metrics
         WHERE metric_type = 'response_time' AND timestamp >= datetime('now', ?)
           AND agent_id IS NOT NULL
         GROUP BY agent_id`,
      )
      .all(since) as { agent_id: string; avg_response_ms: number | null }[];

    // Token usage
    const tokenUsage = db
      .prepare(
        `SELECT
           COALESCE(SUM(CAST(json_extract(value, '$.tokens') AS INTEGER)), 0) AS total_tokens
         FROM metrics
         WHERE metric_type = 'tokens_used' AND timestamp >= datetime('now', ?)`,
      )
      .all(since) as { total_tokens: number }[];

    db.close();
    return { typeCounts, timeSeries, agentBreakdown, responseTimes, tokenUsage };
  } catch {
    return null;
  }
}

async function get_handler(request: Request) {
  try {
    const url = new URL(request.url);
    const range = (url.searchParams.get("range") ?? "24h") as TimeRange;
    if (!["24h", "7d", "30d"].includes(range)) {
      return NextResponse.json({ error: "Invalid range" }, { status: 400 });
    }

    const stateDir = resolveStateDir();
    const agentsDir = path.join(stateDir, "agents");

    // List agent directories
    let agentIds: string[] = [];
    try {
      agentIds = fs
        .readdirSync(agentsDir, { withFileTypes: true })
        .filter((d) => d.isDirectory())
        .map((d) => d.name);
    } catch {
      agentIds = [];
    }

    // Read openclaw.json for agent config
    const config = readJson(path.join(stateDir, "openclaw.json")) as Record<string, unknown> | null;
    const agentsConfig = (config?.agents as Record<string, unknown>) ?? {};
    const configAgents = (agentsConfig.agents as Record<string, Record<string, unknown>>) ?? {};

    // Read sessions and compute message counts per agent
    const cutoff = Date.now() - rangeMs(range);
    const agentStats: Array<{
      agentId: string;
      agentName: string;
      messageCount: number;
      lastActive: number;
      enabled: boolean;
    }> = [];

    let totalSent = 0;
    let totalReceived = 0;
    let totalConversations = 0;

    // Messages per day/hour buckets
    const bucketCount = range === "24h" ? 24 : range === "7d" ? 7 : 30;
    const bucketSize = rangeMs(range) / bucketCount;
    const now = Date.now();
    const sentBuckets = new Array(bucketCount).fill(0);
    const receivedBuckets = new Array(bucketCount).fill(0);

    for (const agentId of agentIds) {
      const agentConf = configAgents[agentId] ?? {};
      const sessionsPath = path.join(stateDir, "agents", agentId, "sessions", "sessions.json");
      const sessionsData = readJson(sessionsPath) as Record<string, unknown> | null;
      let agentMessages = 0;
      let lastActive = 0;

      if (sessionsData) {
        const entries = sessionsData.sessions as Record<string, unknown> | undefined;
        if (entries) {
          totalConversations += Object.keys(entries).length;
          for (const sessionVal of Object.values(entries)) {
            const session = sessionVal as Record<string, unknown>;
            const history = (session.history ?? session.messages ?? []) as Array<Record<string, unknown>>;
            for (const msg of history) {
              const ts = typeof msg.createdAt === "number" ? msg.createdAt :
                         typeof msg.timestamp === "number" ? msg.timestamp : 0;
              if (ts > 0 && ts >= cutoff) {
                agentMessages++;
                if (ts > lastActive) lastActive = ts;
                const role = String(msg.role ?? "");
                if (role === "user") totalSent++;
                if (role === "assistant") totalReceived++;

                // Bucket assignment
                const bucketIndex = Math.floor((ts - (now - rangeMs(range))) / bucketSize);
                if (bucketIndex >= 0 && bucketIndex < bucketCount) {
                  if (role === "user") sentBuckets[bucketIndex]++;
                  if (role === "assistant") receivedBuckets[bucketIndex]++;
                }
              }
            }
          }
        }
      }

      agentStats.push({
        agentId,
        agentName: (agentConf.displayName as string) ?? agentId,
        messageCount: agentMessages,
        lastActive,
        enabled: agentConf.enabled !== false,
      });
    }

    // Sort by message count
    agentStats.sort((a, b) => b.messageCount - a.messageCount);

    // Try to get SQLite metrics (additional data)
    const sqliteData = tryQueryMetrics(range);

    // Merge SQLite agent breakdown with session data
    if (sqliteData?.agentBreakdown) {
      for (const row of sqliteData.agentBreakdown) {
        const existing = agentStats.find((a) => a.agentId === row.agent_id);
        if (existing) {
          // SQLite data supplements session data
          existing.messageCount = Math.max(existing.messageCount, row.message_count);
        }
      }
    }

    // Token count from SQLite if available
    const totalTokens = sqliteData?.tokenUsage?.[0]?.total_tokens ?? 0;

    // Build time series points
    const makeTimeSeries = (buckets: number[]) =>
      buckets.map((value, i) => ({
        timestamp: now - rangeMs(range) + i * bucketSize + bucketSize / 2,
        value,
      }));

    // If SQLite has time-series data, overlay it
    const sqliteSeriesMap = new Map<string, Map<string, number>>();
    if (sqliteData?.timeSeries) {
      for (const row of sqliteData.timeSeries) {
        if (!sqliteSeriesMap.has(row.metric_type)) {
          sqliteSeriesMap.set(row.metric_type, new Map());
        }
        sqliteSeriesMap.get(row.metric_type)!.set(row.period, row.cnt);
      }
    }

    // Active agents = agents with messages in this range
    const activeAgents = agentStats.filter((a) => a.messageCount > 0).length;

    // Metrics summary
    const metrics = [
      { id: "total-conversations", label: "Conversations", value: totalConversations, unit: "" },
      { id: "messages-sent", label: "Sent", value: totalSent, unit: "msg" },
      { id: "messages-received", label: "Received", value: totalReceived, unit: "msg" },
      { id: "active-agents", label: "Active Agents", value: activeAgents, unit: "" },
      { id: "tokens-consumed", label: "Tokens", value: totalTokens, unit: "" },
    ];

    const timeSeries = [
      { metricId: "messages-sent", points: makeTimeSeries(sentBuckets) },
      { metricId: "messages-received", points: makeTimeSeries(receivedBuckets) },
    ];

    // Agent leaderboard
    const leaderboard = agentStats
      .filter((a) => a.messageCount > 0)
      .slice(0, 10)
      .map((a) => ({
        agentId: a.agentId,
        agentName: a.agentName,
        messageCount: a.messageCount,
        lastActive: a.lastActive,
        avgResponseTime: 0,
        errorRate: 0,
        tokensUsed: 0,
      }));

    // Overlay response times from SQLite
    if (sqliteData?.responseTimes) {
      for (const rt of sqliteData.responseTimes) {
        const entry = leaderboard.find((a) => a.agentId === rt.agent_id);
        if (entry && rt.avg_response_ms != null) {
          entry.avgResponseTime = Math.round(rt.avg_response_ms);
        }
      }
    }

    return NextResponse.json({
      metrics,
      timeSeries,
      leaderboard,
      agents: agentStats.map((a) => ({
        agentId: a.agentId,
        enabled: a.enabled,
      })),
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to load analytics";
    return NextResponse.json({ error: message, metrics: [], timeSeries: [], leaderboard: [], agents: [] }, { status: 500 });
  }
}

export const GET = withErrorHandler(get_handler);