import { NextResponse } from "next/server";
import { getDb } from "@/lib/watcher/db";
import { execWatcher } from "@/lib/watcher/exec";

export const runtime = "nodejs";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = Math.max(1, parseInt(searchParams.get("page") ?? "1", 10));
    const limit = Math.min(100, Math.max(1, parseInt(searchParams.get("limit") ?? "20", 10)));
    const offset = (page - 1) * limit;

    const db = getDb();
    const rows = db.prepare(
      `SELECT impl.*, i.title, i.source
       FROM implementations impl LEFT JOIN items i ON impl.item_id = i.id
       ORDER BY impl.implemented_at DESC LIMIT ? OFFSET ?`
    ).all(limit, offset);

    const countRow = db.prepare("SELECT COUNT(*) AS total FROM implementations").get() as { total: number };

    return NextResponse.json({ implementations: rows, total: countRow.total, page, limit });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to load implementations.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { action, implId } = body as { action?: string; implId?: string };

    if (action === "rollback" && implId) {
      const result = await execWatcher(["rollback", implId]);
      return NextResponse.json({ ok: result.code === 0, stdout: result.stdout, stderr: result.stderr });
    }

    return NextResponse.json({ error: "Invalid action." }, { status: 400 });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to execute action.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
