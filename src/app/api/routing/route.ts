import { NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";
import { resolveStateDir } from "@/lib/clawdbot/paths";

export const runtime = "nodejs";

const ROUTING_FILE = "studio-routing.json";

function getFilePath() {
  return path.join(resolveStateDir(), "openclaw-studio", ROUTING_FILE);
}

export async function GET() {
  try {
    const fp = getFilePath();
    if (!fs.existsSync(fp)) return NextResponse.json({ rules: [] });
    const data = JSON.parse(fs.readFileSync(fp, "utf8")) as { rules: unknown[] };
    return NextResponse.json({ rules: data.rules ?? [] });
  } catch (err) {
    return NextResponse.json({ error: String(err), rules: [] }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json() as { rules: unknown[] };
    const fp = getFilePath();
    const dir = path.dirname(fp);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(fp, JSON.stringify({ rules: body.rules ?? [] }, null, 2));
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
