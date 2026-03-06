import { NextResponse } from "next/server";
import { getDb } from "@/lib/watcher/db";
import { withErrorHandler } from "@/lib/api/error-handler";

export const runtime = "nodejs";

async function get_handler(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const source = searchParams.get("source");
    const decision = searchParams.get("decision");
    const category = searchParams.get("category");
    const status = searchParams.get("status");
    const minScore = searchParams.get("min_score");
    const page = Math.max(1, parseInt(searchParams.get("page") ?? "1", 10));
    const limit = Math.min(100, Math.max(1, parseInt(searchParams.get("limit") ?? "20", 10)));
    const offset = (page - 1) * limit;

    const db = getDb();
    const conditions: string[] = [];
    const params: (string | number | null)[] = [];

    if (source) { conditions.push("i.source = ?"); params.push(source); }
    if (category) {
      // Support multi-valeurs séparées par des virgules
      const cats = category.split(",").map(c => c.trim()).filter(Boolean);
      if (cats.length === 1) {
        conditions.push("i.category = ?");
        params.push(cats[0]);
      } else if (cats.length > 1) {
        conditions.push(`i.category IN (${cats.map(() => "?").join(",")})`);
        params.push(...cats);
      }
    }
    if (status) {
      // Support multi-valeurs séparées par des virgules
      const statuses = status.split(",").map(s => s.trim()).filter(Boolean);
      if (statuses.length === 1) {
        conditions.push("i.status = ?");
        params.push(statuses[0]);
      } else if (statuses.length > 1) {
        conditions.push(`i.status IN (${statuses.map(() => "?").join(",")})`);
        params.push(...statuses);
      }
    }
    if (decision) { conditions.push("s.decision = ?"); params.push(decision); }
    if (minScore) {
      const score = parseFloat(minScore);
      if (!isNaN(score)) {
        conditions.push("s.global >= ?");
        params.push(score);
      }
    }

    const where = conditions.length > 0 ? `WHERE ${conditions.join(" AND ")}` : "";

    const countRow = db.prepare(
      `SELECT COUNT(*) AS total FROM items i LEFT JOIN scores s ON i.id = s.item_id ${where}`
    ).get(...params) as { total: number };

    const rows = db.prepare(
      `SELECT i.*, s.fiabilite, s.securite, s.fonctionnement, s.interet, s.global, s.decision, s.scored_at
       FROM items i LEFT JOIN scores s ON i.id = s.item_id
       ${where} ORDER BY s.global DESC, i.timestamp DESC LIMIT ? OFFSET ?`
    ).all(...params, limit, offset);

    return NextResponse.json({ items: rows, total: countRow.total, page, limit });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to load items.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export const GET = withErrorHandler(get_handler);