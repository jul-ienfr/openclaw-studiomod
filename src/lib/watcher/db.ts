import type { Database as DatabaseType } from "bun:sqlite";
import path from "path";
import fs from "fs";

// Lazy-load bun:sqlite to avoid failure during Next.js build (which uses Node.js workers)
// eslint-disable-next-line @typescript-eslint/no-require-imports
const getDatabase = (): typeof import("bun:sqlite").Database =>
  require("bun:sqlite").Database;

const DB_PATH =
  process.env.WATCHER_DB_PATH ??
  path.join(
    process.env.HOME ?? "/home/jul",
    ".openclaw/workspace-openclaw-watcher/data/watcher.db",
  );

/** Read-only connection — pour les GETs */
export function getDb(): DatabaseType {
  const Database = getDatabase();
  const db = new Database(DB_PATH, { readonly: true });
  db.exec("PRAGMA journal_mode = WAL");
  return db;
}

/** Read-write connection — pour les mutations (status, implementations) */
export function getDbWrite(): DatabaseType {
  const Database = getDatabase();
  const db = new Database(DB_PATH);
  db.exec("PRAGMA journal_mode = WAL");
  return db;
}

export function getDbStats(): {
  size_bytes: number;
  items_count: number;
  scores_count: number;
} {
  const db = getDb();
  let size_bytes = 0;
  try {
    size_bytes = fs.statSync(DB_PATH).size;
  } catch {
    /* ignore */
  }
  const items_count = (
    db.prepare("SELECT COUNT(*) AS c FROM items").get() as { c: number }
  ).c;
  const scores_count = (
    db.prepare("SELECT COUNT(*) AS c FROM scores").get() as { c: number }
  ).c;
  db.close();
  return { size_bytes, items_count, scores_count };
}
