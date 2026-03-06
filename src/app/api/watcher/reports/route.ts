import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { withErrorHandler } from "@/lib/api/error-handler";

export const runtime = "nodejs";

const REPORTS_DIR = process.env.WATCHER_REPORTS_DIR
  ?? path.join(process.env.HOME ?? "/home/jul", ".openclaw/workspace-openclaw-watcher/reports");

async function get_handler(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const file = searchParams.get("file");

    if (file) {
      const safeName = path.basename(file);
      const filePath = path.join(REPORTS_DIR, safeName);
      if (!fs.existsSync(filePath)) {
        return NextResponse.json({ error: "Report not found." }, { status: 404 });
      }
      const content = fs.readFileSync(filePath, "utf-8");
      return NextResponse.json({ file: safeName, content });
    }

    if (!fs.existsSync(REPORTS_DIR)) {
      return NextResponse.json({ reports: [] });
    }

    const files = fs.readdirSync(REPORTS_DIR)
      .filter(f => f.endsWith(".md"))
      .sort()
      .reverse()
      .map(f => {
        const stat = fs.statSync(path.join(REPORTS_DIR, f));
        return { file: f, size: stat.size, modified: stat.mtime.toISOString() };
      });

    return NextResponse.json({ reports: files });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to load reports.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export const GET = withErrorHandler(get_handler);