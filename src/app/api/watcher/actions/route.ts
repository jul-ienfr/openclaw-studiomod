import { NextRequest, NextResponse } from "next/server";
import { execWatcher } from "@/lib/watcher/exec";
import { getDbWrite } from "@/lib/watcher/db";
import { withErrorHandler } from "@/lib/api/error-handler";
import { WatcherActionSchema } from "@/lib/api/schemas/watcher";
import { parseBody, isValidationError } from "@/lib/api/validation";
import { applyRateLimit, RATE_LIMITS } from "@/lib/rateLimit";

export const runtime = "nodejs";

async function post_handler(request: NextRequest) {
  const limited = applyRateLimit(request, RATE_LIMITS.watcherActions);
  if (limited) return limited;

  try {
    const parsed = await parseBody(request, WatcherActionSchema);
    if (isValidationError(parsed)) return parsed;

    const { action } = parsed;

    // ── Watcher script actions ──────────────────────────────────────────────
    if (action === "check") {
      const args = ["check"];
      if (parsed.source) args.push("--source", parsed.source);
      const result = await execWatcher(args);
      return NextResponse.json({
        ok: result.code === 0,
        stdout: result.stdout,
        stderr: result.stderr,
      });
    }

    if (action === "set-level") {
      const result = await execWatcher(["set-level", parsed.level]);
      return NextResponse.json({
        ok: result.code === 0,
        stdout: result.stdout,
        stderr: result.stderr,
      });
    }

    if (action === "status") {
      const result = await execWatcher(["status"]);
      return NextResponse.json({
        ok: result.code === 0,
        stdout: result.stdout,
        stderr: result.stderr,
      });
    }

    if (action === "vacuum") {
      const result = await execWatcher(["vacuum"]);
      return NextResponse.json({
        ok: result.code === 0,
        stdout: result.stdout,
        stderr: result.stderr,
      });
    }

    // ── Implement (execute AUTO decisions) ─────────────────────────────────
    if (action === "implement") {
      const args = ["implement"];
      if (parsed.itemId) args.push("--item-id", parsed.itemId);
      if (parsed.dryRun) args.push("--dry-run");
      if (parsed.limit) args.push("--limit", String(parsed.limit));
      const result = await execWatcher(args);
      return NextResponse.json({
        ok: result.code === 0,
        stdout: result.stdout,
        stderr: result.stderr,
      });
    }

    // ── DB direct mutations ─────────────────────────────────────────────────

    if (action === "ignore") {
      const db = getDbWrite();
      try {
        const item = db
          .prepare("SELECT id FROM items WHERE id = ?")
          .get(parsed.itemId);
        if (!item)
          return NextResponse.json(
            { error: "Item not found" },
            { status: 404 },
          );
        db.prepare("UPDATE items SET status = 'archived' WHERE id = ?").run(
          parsed.itemId,
        );
        return NextResponse.json({ ok: true });
      } finally {
        db.close();
      }
    }

    if (action === "set-status") {
      const db = getDbWrite();
      try {
        db.prepare("UPDATE items SET status = ? WHERE id = ?").run(
          parsed.status,
          parsed.itemId,
        );
        return NextResponse.json({ ok: true });
      } finally {
        db.close();
      }
    }

    return NextResponse.json(
      {
        error:
          "Invalid action. Allowed: check, set-level, status, vacuum, implement, ignore, set-status",
      },
      { status: 400 },
    );
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Failed to execute action.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export const POST = withErrorHandler(post_handler);
