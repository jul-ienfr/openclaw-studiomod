import { NextResponse } from "next/server";
import { execWatcher } from "@/lib/watcher/exec";
import { getDbWrite } from "@/lib/watcher/db";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { action, source, level, itemId, dryRun, limit } = body as {
      action?: string;
      source?: string;
      level?: string;
      itemId?: string;
      dryRun?: boolean;
      limit?: number;
    };

    // ── Watcher script actions ──────────────────────────────────────────────
    if (action === "check") {
      const args = ["check"];
      if (source) args.push("--source", source);
      const result = await execWatcher(args);
      return NextResponse.json({ ok: result.code === 0, stdout: result.stdout, stderr: result.stderr });
    }

    if (action === "set-level" && level) {
      const result = await execWatcher(["set-level", level]);
      return NextResponse.json({ ok: result.code === 0, stdout: result.stdout, stderr: result.stderr });
    }

    if (action === "status") {
      const result = await execWatcher(["status"]);
      return NextResponse.json({ ok: result.code === 0, stdout: result.stdout, stderr: result.stderr });
    }

    if (action === "vacuum") {
      const result = await execWatcher(["vacuum"]);
      return NextResponse.json({ ok: result.code === 0, stdout: result.stdout, stderr: result.stderr });
    }

    // ── Implement (execute AUTO decisions) ─────────────────────────────────
    if (action === "implement") {
      const args = ["implement"];
      if (itemId) args.push("--item-id", itemId);
      if (dryRun) args.push("--dry-run");
      if (limit) args.push("--limit", String(limit));
      const result = await execWatcher(args);
      return NextResponse.json({ ok: result.code === 0, stdout: result.stdout, stderr: result.stderr });
    }

    // ── DB direct mutations ─────────────────────────────────────────────────

    if (action === "ignore" && itemId) {
      const db = getDbWrite();
      try {
        const item = db.prepare("SELECT id FROM items WHERE id = ?").get(itemId);
        if (!item) return NextResponse.json({ error: "Item not found" }, { status: 404 });
        db.prepare("UPDATE items SET status = 'archived' WHERE id = ?").run(itemId);
        return NextResponse.json({ ok: true });
      } finally {
        db.close();
      }
    }

    if (action === "set-status" && itemId) {
      const { status } = body as { status?: string };
      const allowed = ["new", "scored", "implemented", "archived"];
      if (!status || !allowed.includes(status)) {
        return NextResponse.json({ error: `status must be one of: ${allowed.join(", ")}` }, { status: 400 });
      }
      const db = getDbWrite();
      try {
        db.prepare("UPDATE items SET status = ? WHERE id = ?").run(status, itemId);
        return NextResponse.json({ ok: true });
      } finally {
        db.close();
      }
    }

    return NextResponse.json(
      { error: "Invalid action. Allowed: check, set-level, status, vacuum, implement, ignore, set-status" },
      { status: 400 }
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to execute action.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
