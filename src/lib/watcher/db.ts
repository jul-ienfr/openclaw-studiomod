import type { Database as DatabaseType } from "bun:sqlite";
import path from "path";
import fs from "fs";

// Lazy-load bun:sqlite to avoid failure during Next.js build (which uses Node.js workers)
const getDatabase = (): typeof import("bun:sqlite").Database => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  return require("bun:sqlite").Database;
};

const DB_PATH =
  process.env.WATCHER_DB_PATH ??
  path.join(
    process.env.HOME ?? "/home/jul",
    ".openclaw/workspace-openclaw-watcher/data/watcher.db",
  );

let watcherIndexesEnsured = false;

function ensureWatcherIndexes(): void {
  if (watcherIndexesEnsured || !fs.existsSync(DB_PATH)) return;

  try {
    const Database = getDatabase();
    const db = new Database(DB_PATH);
    try {
      db.exec("PRAGMA journal_mode = WAL");
      const tables = new Set(
        (
          db
            .prepare("SELECT name FROM sqlite_master WHERE type = 'table'")
            .all() as { name: string }[]
        ).map((row) => row.name),
      );

      if (tables.has("items")) {
        db.exec(`
          CREATE INDEX IF NOT EXISTS idx_watcher_items_status ON items(status);
          CREATE INDEX IF NOT EXISTS idx_watcher_items_source ON items(source);
          CREATE INDEX IF NOT EXISTS idx_watcher_items_category ON items(category);
          CREATE INDEX IF NOT EXISTS idx_watcher_items_timestamp ON items(timestamp DESC);
          CREATE INDEX IF NOT EXISTS idx_watcher_items_author_lower ON items(LOWER(author));
        `);
      }

      if (tables.has("scores")) {
        db.exec(`
          CREATE INDEX IF NOT EXISTS idx_watcher_scores_item_id ON scores(item_id);
          CREATE INDEX IF NOT EXISTS idx_watcher_scores_global ON scores(global DESC);
          CREATE INDEX IF NOT EXISTS idx_watcher_scores_decision ON scores(decision);
        `);
      }

      if (tables.has("implementations")) {
        db.exec(`
          CREATE INDEX IF NOT EXISTS idx_watcher_implementations_item_id ON implementations(item_id);
          CREATE INDEX IF NOT EXISTS idx_watcher_implementations_implemented_at ON implementations(implemented_at DESC);
        `);
      }

      if (tables.has("source_state")) {
        db.exec(`
          CREATE INDEX IF NOT EXISTS idx_watcher_source_state_source ON source_state(source);
        `);
      }

      watcherIndexesEnsured = true;
    } finally {
      db.close();
    }
  } catch {
    // Best-effort optimization only. If the DB is not ready yet, we'll retry later.
  }
}

/** Read-only connection — pour les GETs */
export function getDb(): DatabaseType {
  ensureWatcherIndexes();
  const Database = getDatabase();
  const db = new Database(DB_PATH, { readonly: true });
  db.exec("PRAGMA journal_mode = WAL");
  return db;
}

/** Read-write connection — pour les mutations (status, implementations) */
export function getDbWrite(): DatabaseType {
  ensureWatcherIndexes();
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
