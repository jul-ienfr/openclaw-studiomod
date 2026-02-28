import Database from "better-sqlite3";
import path from "path";

const DB_PATH = process.env.WATCHER_DB_PATH
  ?? path.join(process.env.HOME ?? "/home/jul", ".openclaw/workspace-openclaw-watcher/data/watcher.db");

let _db: Database.Database | null = null;

export function getDb(): Database.Database {
  if (!_db) {
    _db = new Database(DB_PATH, { readonly: true });
    _db.pragma("journal_mode = WAL");
  }
  return _db;
}

export function getDbStats(): { size_bytes: number; items_count: number; scores_count: number } {
  const db = getDb();
  const fs = require("fs");
  let size_bytes = 0;
  try { size_bytes = fs.statSync(DB_PATH).size; } catch { /* ignore */ }
  const items_count = (db.prepare("SELECT COUNT(*) AS c FROM items").get() as { c: number }).c;
  const scores_count = (db.prepare("SELECT COUNT(*) AS c FROM scores").get() as { c: number }).c;
  return { size_bytes, items_count, scores_count };
}
