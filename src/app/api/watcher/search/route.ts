import { NextResponse } from "next/server";
import { getDb } from "@/lib/watcher/db";

export const runtime = "nodejs";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q");
    const limit = Math.min(50, Math.max(1, parseInt(searchParams.get("limit") ?? "20", 10)));

    if (!query || query.trim().length === 0) {
      return NextResponse.json({ items: [], total: 0 });
    }

    const db = getDb();
    const searchPattern = `%${query.trim()}%`;

    // Recherche locale dans la DB
    const rows = db
      .prepare(
        `SELECT i.*, s.fiabilite, s.securite, s.fonctionnement, s.interet, s.global, s.decision, s.scored_at
         FROM items i 
         LEFT JOIN scores s ON i.id = s.item_id
         WHERE (i.title LIKE ? OR i.title_fr LIKE ? OR i.content LIKE ?)
         ORDER BY s.global DESC, i.timestamp DESC 
         LIMIT ?`
      )
      .all(searchPattern, searchPattern, searchPattern, limit);

    return NextResponse.json({ items: rows, total: rows.length });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Search failed.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
