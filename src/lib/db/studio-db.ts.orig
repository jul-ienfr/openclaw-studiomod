import type { Database as DatabaseType } from "bun:sqlite";
import path from "path";
import fs from "fs";

// Lazy-load bun:sqlite to avoid failure during Next.js build (which uses Node.js workers)
// eslint-disable-next-line @typescript-eslint/no-require-imports
const getDatabase = (): typeof import("bun:sqlite").Database =>
  require("bun:sqlite").Database;

const DB_PATH =
  process.env.STUDIO_DB_PATH ??
  path.join(
    process.env.HOME ?? "/home/jul",
    ".openclaw/openclaw-studio/studio.db",
  );

/** Ensure the directory exists before opening the DB */
function ensureDir(): void {
  const dir = path.dirname(DB_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

/** Read-only connection with WAL mode */
export function getDb(): DatabaseType {
  ensureDir();
  const Database = getDatabase();
  const db = new Database(DB_PATH, { readonly: true });
  db.exec("PRAGMA journal_mode = WAL");
  return db;
}

/** Read-write connection with WAL mode + foreign keys */
export function getDbWrite(): DatabaseType {
  ensureDir();
  const Database = getDatabase();
  const db = new Database(DB_PATH);
  db.exec("PRAGMA journal_mode = WAL");
  db.exec("PRAGMA foreign_keys = ON");
  return db;
}

/** Get DB stats for health endpoint */
export function getDbStats(): {
  size_bytes: number;
  migration_version: number;
  table_counts: Record<string, number>;
} {
  const db = getDb();
  let size_bytes = 0;
  try {
    size_bytes = fs.statSync(DB_PATH).size;
  } catch {
    /* ignore */
  }

  let migration_version = 0;
  try {
    const row = db
      .prepare("SELECT MAX(version) AS v FROM _migrations")
      .get() as { v: number } | undefined;
    migration_version = row?.v ?? 0;
  } catch {
    /* table may not exist yet */
  }

  const table_counts: Record<string, number> = {};
  const tables = ["logs", "cache", "preferences", "metrics", "skill_ui_cache"];
  for (const table of tables) {
    try {
      const row = db
        .prepare(`SELECT COUNT(*) AS c FROM ${table}`)
        .get() as { c: number };
      table_counts[table] = row.c;
    } catch {
      table_counts[table] = -1; // table doesn't exist yet
    }
  }

  db.close();
  return { size_bytes, migration_version, table_counts };
}

export { DB_PATH };
