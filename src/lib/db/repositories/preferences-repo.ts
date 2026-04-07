import { getDbWrite, getDb } from "../studio-db";

interface PreferenceRow {
  key: string;
  value: string;
  updated_at: string;
}

/** Get a single preference value (parsed from JSON) */
export function getPreference(key: string): unknown | null {
  const db = getDb();
  try {
    const row = db
      .prepare("SELECT value FROM preferences WHERE key = ?")
      .get(key) as { value: string } | undefined;

    if (!row) return null;
    return JSON.parse(row.value);
  } finally {
    db.close();
  }
}

/** Upsert a preference value */
export function setPreference(key: string, value: unknown): void {
  const db = getDbWrite();
  try {
    db.prepare(
      `INSERT INTO preferences (key, value, updated_at)
       VALUES (?, ?, datetime('now'))
       ON CONFLICT(key) DO UPDATE SET
         value = excluded.value,
         updated_at = excluded.updated_at`,
    ).run(key, JSON.stringify(value));
  } finally {
    db.close();
  }
}

/** Get all preferences as a key-value record */
export function getAllPreferences(): Record<string, unknown> {
  const db = getDb();
  try {
    const rows = db
      .prepare("SELECT key, value FROM preferences")
      .all() as PreferenceRow[];

    const result: Record<string, unknown> = {};
    for (const row of rows) {
      result[row.key] = JSON.parse(row.value);
    }
    return result;
  } finally {
    db.close();
  }
}
