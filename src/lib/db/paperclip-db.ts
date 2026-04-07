import postgres from "postgres";

const PC_DB_URL =
  process.env.POSTGRES_URL_PAPERCLIP ??
  "postgresql://paperclip:paperclip@127.0.0.1:54329/paperclip";

// Lazy singleton — created on first use (server-side only)
let sql: postgres.Sql | null = null;

export function getPaperclipDb() {
  if (typeof window !== "undefined") {
    throw new Error("getPaperclipDb() cannot be called from the browser");
  }
  if (!sql) {
    sql = postgres(PC_DB_URL, { max: 10 });
  }
  return sql;
}
