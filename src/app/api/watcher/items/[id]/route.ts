import { NextResponse } from "next/server";
import { getDb } from "@/lib/watcher/db";
import { withErrorHandler } from "@/lib/api/error-handler";

export const runtime = "nodejs";

async function get_handler(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const db = getDb();
    const row = db.prepare(
      "SELECT i.*, s.fiabilite, s.securite, s.fonctionnement, s.interet, s.global, s.decision, s.scored_at FROM items i LEFT JOIN scores s ON i.id = s.item_id WHERE i.id = ?"
    ).get(id);
    if (!row) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(row);
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : "Failed" }, { status: 500 });
  }
}

export const GET = withErrorHandler(get_handler);