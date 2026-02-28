import { NextResponse } from "next/server";
import { execWatcher } from "@/lib/watcher/exec";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { action, source, level } = body as { action?: string; source?: string; level?: string };

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

    return NextResponse.json({ error: "Invalid action. Allowed: check, set-level, status, vacuum" }, { status: 400 });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to execute action.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
