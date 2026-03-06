import { getDbWrite } from "./studio-db";

interface Migration {
  version: number;
  description: string;
  up: string;
}

const MIGRATIONS: Migration[] = [
  {
    version: 1,
    description: "Initial schema",
    up: `
      CREATE TABLE IF NOT EXISTS _migrations (
        version INTEGER PRIMARY KEY,
        description TEXT NOT NULL,
        applied_at TEXT NOT NULL DEFAULT (datetime('now'))
      );

      CREATE TABLE IF NOT EXISTS logs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        timestamp TEXT NOT NULL DEFAULT (datetime('now')),
        level TEXT NOT NULL CHECK(level IN ('debug','info','warn','error')),
        source TEXT NOT NULL,
        message TEXT NOT NULL,
        metadata TEXT
      );
      CREATE INDEX IF NOT EXISTS idx_logs_timestamp ON logs(timestamp);
      CREATE INDEX IF NOT EXISTS idx_logs_level ON logs(level);
      CREATE INDEX IF NOT EXISTS idx_logs_source ON logs(source);

      CREATE TABLE IF NOT EXISTS cache (
        key TEXT PRIMARY KEY,
        value TEXT NOT NULL,
        etag TEXT,
        cached_at TEXT NOT NULL DEFAULT (datetime('now')),
        ttl_seconds INTEGER NOT NULL DEFAULT 300
      );
      CREATE INDEX IF NOT EXISTS idx_cache_cached_at ON cache(cached_at);

      CREATE TABLE IF NOT EXISTS preferences (
        key TEXT PRIMARY KEY,
        value TEXT NOT NULL,
        updated_at TEXT NOT NULL DEFAULT (datetime('now'))
      );

      CREATE TABLE IF NOT EXISTS metrics (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        timestamp TEXT NOT NULL DEFAULT (datetime('now')),
        agent_id TEXT,
        metric_type TEXT NOT NULL,
        value TEXT NOT NULL
      );
      CREATE INDEX IF NOT EXISTS idx_metrics_timestamp ON metrics(timestamp);
      CREATE INDEX IF NOT EXISTS idx_metrics_agent ON metrics(agent_id);
      CREATE INDEX IF NOT EXISTS idx_metrics_type ON metrics(metric_type);

      CREATE TABLE IF NOT EXISTS skill_ui_cache (
        skill_path TEXT PRIMARY KEY,
        parsed_at TEXT NOT NULL DEFAULT (datetime('now')),
        schema TEXT NOT NULL,
        mtime INTEGER NOT NULL
      );
    `,
  },
];

/** Run all pending migrations */
export function runMigrations(): { applied: number; current_version: number } {
  const db = getDbWrite();
  let applied = 0;

  try {
    // Ensure _migrations table exists
    db.exec(`
      CREATE TABLE IF NOT EXISTS _migrations (
        version INTEGER PRIMARY KEY,
        description TEXT NOT NULL,
        applied_at TEXT NOT NULL DEFAULT (datetime('now'))
      );
    `);

    const appliedVersions = new Set(
      (
        db.prepare("SELECT version FROM _migrations").all() as {
          version: number;
        }[]
      ).map((r) => r.version),
    );

    for (const migration of MIGRATIONS) {
      if (appliedVersions.has(migration.version)) continue;

      db.transaction(() => {
        db.exec(migration.up);
        db.prepare(
          "INSERT INTO _migrations (version, description) VALUES (?, ?)",
        ).run(migration.version, migration.description);
      })();

      applied++;
    }

    const current = db
      .prepare("SELECT MAX(version) AS v FROM _migrations")
      .get() as { v: number };

    return { applied, current_version: current?.v ?? 0 };
  } finally {
    db.close();
  }
}
