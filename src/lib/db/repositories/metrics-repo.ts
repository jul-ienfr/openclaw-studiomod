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
  try {
    db.prepare(
      "INSERT INTO metrics (agent_id, metric_type, value) VALUES (?, ?, ?)",
    ).run(agentId, metricType, JSON.stringify(value));
  } finally {
    db.close();
  }
}

/** Query metrics with optional filters */
export function queryMetrics(opts: {
  agentId?: string;
  metricType?: string;
  since?: string;
  limit?: number;
}): MetricEntry[] {
  const db = getDb();
  try {
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
  } finally {
    db.close();
  }
}

export interface AggregatedMetric {
  period: string;
  count: number;
  values: unknown[];
}

/** Aggregate metrics for chart display */
export function aggregateMetrics(
  metricType: string,
  since: string,
  groupBy: "hour" | "day",
): AggregatedMetric[] {
  const db = getDb();
  try {
    const fmt = groupBy === "hour" ? "%Y-%m-%d %H:00" : "%Y-%m-%d";

    const rows = db
      .prepare(
        `SELECT
           strftime(?, timestamp) AS period,
           COUNT(*) AS count,
           GROUP_CONCAT(value, '|||') AS values_concat
         FROM metrics
         WHERE metric_type = ? AND timestamp >= ?
         GROUP BY period
         ORDER BY period ASC`,
      )
      .all(fmt, metricType, since) as {
        period: string;
        count: number;
        values_concat: string;
      }[];

    return rows.map((row) => ({
      period: row.period,
      count: row.count,
      values: row.values_concat
        .split("|||")
        .map((v) => {
          try {
            return JSON.parse(v);
          } catch {
            return v;
          }
        }),
    }));
  } finally {
    db.close();
  }
}
