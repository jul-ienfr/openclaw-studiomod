import { NextResponse } from "next/server";
import { getDb } from "@/lib/watcher/db";

export const runtime = "nodejs";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = Math.max(1, parseInt(searchParams.get("page") ?? "1", 10));
    const limit = Math.min(100, Math.max(1, parseInt(searchParams.get("limit") ?? "20", 10)));
    const offset = (page - 1) * limit;
    const source = searchParams.get("source");
    const decision = searchParams.get("decision");

    const db = getDb();
    const conditions: string[] = [];
    const params: unknown[] = [];

    if (source) { conditions.push("i.source = ?"); params.push(source); }
    if (decision) { conditions.push("s.decision = ?"); params.push(decision); }

    const where = conditions.length > 0 ? `WHERE ${conditions.join(" AND ")}` : "";

    const rows = db.prepare(
      `SELECT s.*, i.title, i.source, i.source_url, i.category, i.author, i.timestamp
       FROM scores s JOIN items i ON s.item_id = i.id
       ${where} ORDER BY s.global DESC LIMIT ? OFFSET ?`
    ).all(...params, limit, offset);

    const countRow = db.prepare(
      `SELECT COUNT(*) AS total FROM scores s JOIN items i ON s.item_id = i.id ${where}`
    ).get(...params) as { total: number };

    return NextResponse.json({ scores: rows, total: countRow.total, page, limit });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to load scores.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
