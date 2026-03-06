import { NextResponse } from "next/server";
import { getDb } from "@/lib/watcher/db";
import { withErrorHandler } from "@/lib/api/error-handler";

export const runtime = "nodejs";

async function get_handler() {
  try {
    const db = getDb();
    const rows = db.prepare("SELECT * FROM source_state ORDER BY source ASC").all();
    return NextResponse.json({ sources: rows });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to load source states.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export const GET = withErrorHandler(get_handler);