import { getDbWrite, getDb } from "../studio-db";

export interface MetricEntry {
  id: number;
  timestamp: string;
  agent_id: string | null;
  metric_type: string;
  value: unknown;
}

interface MetricRow {
  id: number;
  timestamp: string;
  agent_id: string | null;
  metric_type: string;
  value: string;
}

/** Insert a metric entry */
export function insertMetric(
  agentId: string | null,
  metricType: string,
  value: unknown,
): void {
  const db = getDbWrite();
  db.prepare(
    "INSERT INTO metrics (agent_id, metric_type, value) VALUES (?, ?, ?)",
  ).run(agentId, metricType, JSON.stringify(value));
}

/** Query metrics with optional filters */
export function queryMetrics(opts: {
  agentId?: string;
  metricType?: string;
  since?: string;
  limit?: number;
}): MetricEntry[] {
  const db = getDb();
  const conditions: string[] = [];
  const params: (string | number | null)[] = [];

  if (opts.agentId) {
    conditions.push("agent_id = ?");
    params.push(opts.agentId);
  }
  if (opts.metricType) {
    conditions.push("metric_type = ?");
    params.push(opts.metricType);
  }
  if (opts.since) {
    conditions.push("timestamp >= ?");
    params.push(opts.since);
  }

  const where =
    conditions.length > 0 ? `WHERE ${conditions.join(" AND ")}` : "";
  const limit = opts.limit ?? 100;

  const rows = db
    .prepare(
      `SELECT id, timestamp, agent_id, metric_type, value FROM metrics ${where} ORDER BY timestamp DESC LIMIT ?`,
    )
    .all(...params, limit) as MetricRow[];

  return rows.map((row) => ({
    ...row,
    value: JSON.parse(row.value),
  }));
}

export interface AggregatedMetric {
  period: string;
  count: number;
  sum?: number;
  avg?: number;
}

/** Aggregate metrics for chart display — optimized SQL aggregation */
export function aggregateMetrics(
  metricType: string,
  since: string,
  groupBy: "hour" | "day",
): AggregatedMetric[] {
  const db = getDb();
  const fmt = groupBy === "hour" ? "%Y-%m-%d %H:00" : "%Y-%m-%d";

  // Use pure SQL aggregation without GROUP_CONCAT
  // Try to aggregate as numbers if possible
  const rows = db
    .prepare(
      `SELECT
         strftime(?, timestamp) AS period,
         COUNT(*) AS count,
         CAST(ROUND(AVG(CAST(value AS REAL)), 2) AS REAL) AS avg,
         CAST(SUM(CAST(value AS REAL)) AS REAL) AS sum
       FROM metrics
       WHERE metric_type = ? AND timestamp >= ?
       GROUP BY period
       ORDER BY period ASC`,
    )
    .all(fmt, metricType, since) as {
    period: string;
    count: number;
    avg: number | null;
    sum: number | null;
  }[];

  return rows.map((row) => ({
    period: row.period,
    count: row.count,
    ...(row.avg !== null && { avg: row.avg }),
    ...(row.sum !== null && { sum: row.sum }),
  }));
}
