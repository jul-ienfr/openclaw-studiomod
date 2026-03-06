import { NextResponse } from "next/server";
import { getDb } from "@/lib/watcher/db";
import { withErrorHandler } from "@/lib/api/error-handler";

export const runtime = "nodejs";

async function get_handler(
  _request: Request,
  { params }: { params: Promise<{ itemId: string }> }
) {
  try {
    const { itemId } = await params;
    const db = getDb();
    const row = db.prepare(
      "SELECT s.*, i.title, i.source, i.source_url, i.category, i.author, i.timestamp, i.content FROM scores s JOIN items i ON s.item_id = i.id WHERE s.item_id = ?"
    ).get(itemId);
    if (!row) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json(row);
  } catch (err) {
    return NextResponse.json({ error: err instanceof Error ? err.message : "Failed" }, { status: 500 });
  }
}

export const GET = withErrorHandler(get_handler);