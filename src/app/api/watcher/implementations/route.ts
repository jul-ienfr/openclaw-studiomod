import { NextResponse } from "next/server";
import { getDb, getDbWrite } from "@/lib/watcher/db";
import { execFile } from "child_process";

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
    db.close();

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
      // Get the rollback command from DB
      const db = getDb();
      const impl = db.prepare("SELECT rollback_cmd, item_id FROM implementations WHERE id = ?").get(implId) as
        | { rollback_cmd: string | null; item_id: string }
        | undefined;
      db.close();

      if (!impl) {
        return NextResponse.json({ ok: false, error: "Implementation not found." }, { status: 404 });
      }

      if (!impl.rollback_cmd) {
        // No rollback command — just mark as rolled_back in DB
        const dbw = getDbWrite();
        try {
          dbw.prepare("UPDATE implementations SET status = 'rolled_back' WHERE id = ?").run(implId);
          dbw.prepare("UPDATE items SET status = 'new' WHERE id = ?").run(impl.item_id);
        } finally {
          dbw.close();
        }
        return NextResponse.json({ ok: true, message: "Marked as rolled back (no rollback command)." });
      }

      // Execute the rollback command
      const result = await new Promise<{ ok: boolean; stdout: string; stderr: string }>((resolve) => {
        execFile("bash", ["-c", impl.rollback_cmd!], { timeout: 30_000 }, (err, stdout, stderr) => {
          resolve({ ok: !err, stdout: stdout ?? "", stderr: stderr ?? "" });
        });
      });

      if (result.ok) {
        const dbw = getDbWrite();
        try {
          dbw.prepare("UPDATE implementations SET status = 'rolled_back' WHERE id = ?").run(implId);
          dbw.prepare("UPDATE items SET status = 'new' WHERE id = ?").run(impl.item_id);
        } finally {
          dbw.close();
        }
      }

      return NextResponse.json(result);
    }

    return NextResponse.json({ error: "Invalid action." }, { status: 400 });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to execute action.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
