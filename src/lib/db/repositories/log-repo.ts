import { getDbWrite, getDb } from "../studio-db";

export interface LogEntry {
  id: number;
  timestamp: string;
  level: string;
  source: string;
  message: string;
  metadata: unknown | null;
}

interface LogRow {
  id: number;
  timestamp: string;
  level: string;
  source: string;
  message: string;
  metadata: string | null;
}

type LogQueryOptions = {
  level?: string;
  source?: string;
  since?: string;
};

function buildLogWhereClause(opts: LogQueryOptions): {
  where: string;
  params: (string | number | null)[];
} {
  const conditions: string[] = [];
  const params: (string | number | null)[] = [];

  if (opts.level) {
    conditions.push("level = ?");
    params.push(opts.level);
  }
  if (opts.source) {
    conditions.push("source = ?");
    params.push(opts.source);
  }
  if (opts.since) {
    conditions.push("timestamp >= ?");
    params.push(opts.since);
  }

  return {
    where: conditions.length > 0 ? `WHERE ${conditions.join(" AND ")}` : "",
    params,
  };
}

/** Insert a log entry */
export function insertLog(
  level: "debug" | "info" | "warn" | "error",
  source: string,
  message: string,
  metadata?: unknown,
): void {
  const db = getDbWrite();
  db.prepare(
    "INSERT INTO logs (level, source, message, metadata) VALUES (?, ?, ?, ?)",
  ).run(level, source, message, metadata ? JSON.stringify(metadata) : null);
}

/** Query logs with optional filters */
export function queryLogs(opts: {
  level?: string;
  source?: string;
  since?: string;
  limit?: number;
}): LogEntry[] {
  const db = getDb();
  const { where, params } = buildLogWhereClause(opts);
  const limit = opts.limit ?? 100;

  const rows = db
    .prepare(
      `SELECT id, timestamp, level, source, message, metadata FROM logs ${where} ORDER BY timestamp DESC LIMIT ?`,
    )
    .all(...params, limit) as LogRow[];

  return rows.map((row) => ({
    ...row,
    metadata: row.metadata ? JSON.parse(row.metadata) : null,
  }));
}

export function countLogs(opts: LogQueryOptions = {}): number {
  const db = getDb();
  const { where, params } = buildLogWhereClause(opts);
  const row = db
    .prepare(`SELECT COUNT(*) AS count FROM logs ${where}`)
    .get(...params) as { count?: number } | undefined;
  return row?.count ?? 0;
}

/** Delete logs older than the specified number of days */
export function pruneLogs(olderThanDays: number): number {
  const db = getDbWrite();
  const result = db
    .prepare("DELETE FROM logs WHERE timestamp < datetime('now', ?)")
    .run(`-${olderThanDays} days`);
  return result.changes;
}
