import { NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";
import { resolveStateDir } from "@/lib/clawdbot/paths";

export const runtime = "nodejs";

const WEBHOOKS_FILE = "studio-webhooks.json";

function getFilePath() {
  return path.join(resolveStateDir(), "openclaw-studio", WEBHOOKS_FILE);
}

export async function GET() {
  try {
    const fp = getFilePath();
    if (!fs.existsSync(fp)) return NextResponse.json({ webhooks: [] });
    const data = JSON.parse(fs.readFileSync(fp, "utf8")) as { webhooks: unknown[] };
    return NextResponse.json({ webhooks: data.webhooks ?? [] });
  } catch (err) {
    return NextResponse.json({ error: String(err), webhooks: [] }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json() as { webhooks: unknown[] };
    const fp = getFilePath();
    const dir = path.dirname(fp);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(fp, JSON.stringify({ webhooks: body.webhooks ?? [] }, null, 2));
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
