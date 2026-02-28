import { NextResponse } from "next/server";
import { getDb } from "@/lib/watcher/db";

export const runtime = "nodejs";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const source = searchParams.get("source");
    const decision = searchParams.get("decision");
    const category = searchParams.get("category");
    const status = searchParams.get("status");
    const page = Math.max(1, parseInt(searchParams.get("page") ?? "1", 10));
    const limit = Math.min(100, Math.max(1, parseInt(searchParams.get("limit") ?? "20", 10)));
    const offset = (page - 1) * limit;

    const db = getDb();
    const conditions: string[] = [];
    const params: unknown[] = [];

    if (source) { conditions.push("i.source = ?"); params.push(source); }
    if (category) { conditions.push("i.category = ?"); params.push(category); }
    if (status) { conditions.push("i.status = ?"); params.push(status); }
    if (decision) {
      conditions.push("s.decision = ?");
      params.push(decision);
    }

    const where = conditions.length > 0 ? `WHERE ${conditions.join(" AND ")}` : "";

    const countRow = db.prepare(
      `SELECT COUNT(*) AS total FROM items i LEFT JOIN scores s ON i.id = s.item_id ${where}`
    ).get(...params) as { total: number };

    const rows = db.prepare(
      `SELECT i.*, s.fiabilite, s.securite, s.fonctionnement, s.interet, s.global, s.decision, s.scored_at
       FROM items i LEFT JOIN scores s ON i.id = s.item_id
       ${where} ORDER BY i.timestamp DESC LIMIT ? OFFSET ?`
    ).all(...params, limit, offset);

    return NextResponse.json({ items: rows, total: countRow.total, page, limit });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to load items.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
