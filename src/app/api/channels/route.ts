import { NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";
import { resolveStateDir } from "@/lib/clawdbot/paths";

export const runtime = "nodejs";

function readJson(p: string): unknown {
  try { return JSON.parse(fs.readFileSync(p, "utf8")); } catch { return null; }
}

function maskSecret(val: string): string {
  if (val.length <= 8) return "****";
  return val.slice(0, 4) + "****" + val.slice(-4);
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const rawName = searchParams.get("raw"); // ?raw=telegram → return raw config for edit

    const stateDir = resolveStateDir();
    const config = readJson(path.join(stateDir, "openclaw.json")) as Record<string, unknown> | null;
    const channelsRaw = config?.channels as Record<string, unknown> | undefined;

    // Raw mode for edit modal: return unmasked channel config
    if (rawName && channelsRaw) {
      const ch = channelsRaw[rawName] ?? {};
      return NextResponse.json({ raw: ch });
    }

    const channels = [];
    if (channelsRaw) {
      for (const [name, conf] of Object.entries(channelsRaw)) {
        const c = conf as Record<string, unknown>;
        const details: Record<string, string> = {};

        if (name === "telegram") {
          const token = c.botToken ?? c.token;
          if (token) details["Bot Token"] = maskSecret(String(token));
          const allowFrom = c.allowFrom as string[] | undefined;
          if (allowFrom?.length) details["Allow From"] = allowFrom.join(", ");
          details["DM Policy"] = String(c.dmPolicy ?? "allowlist");
        }

        if (name === "whatsapp") {
          const allowFrom = c.allowFrom as string[] | undefined;
          if (allowFrom?.length) details["Allow From"] = allowFrom.join(", ");
          details["DM Policy"] = String(c.dmPolicy ?? "allowlist");
          if (c.selfChatMode) details["Self Chat"] = "activé";
        }

        const enabled = c.enabled !== false && Object.keys(c).length > 0;
        channels.push({ name, enabled, details });
      }
    }

    return NextResponse.json({ channels });
  } catch (err) {
    return NextResponse.json({ error: String(err), channels: [] }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json() as { name: string; patch: Record<string, unknown> };
    const { name, patch } = body;

    if (!name || typeof name !== "string") {
      return NextResponse.json({ error: "name requis" }, { status: 400 });
    }

    const stateDir = resolveStateDir();
    const configPath = path.join(stateDir, "openclaw.json");
    const raw = fs.readFileSync(configPath, "utf8");
    const config = JSON.parse(raw) as Record<string, unknown>;

    const channels = (config.channels ?? {}) as Record<string, unknown>;
    const existing = (channels[name] ?? {}) as Record<string, unknown>;

    // Merge patch into existing (null = delete key)
    const merged: Record<string, unknown> = { ...existing };
    for (const [k, v] of Object.entries(patch)) {
      if (v === null || v === undefined) {
        delete merged[k];
      } else {
        merged[k] = v;
      }
    }

    channels[name] = merged;
    config.channels = channels;
    fs.writeFileSync(configPath, JSON.stringify(config, null, 4), "utf8");

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const name = searchParams.get("name");
    if (!name) return NextResponse.json({ error: "name requis" }, { status: 400 });

    const stateDir = resolveStateDir();
    const configPath = path.join(stateDir, "openclaw.json");
    const raw = fs.readFileSync(configPath, "utf8");
    const config = JSON.parse(raw) as Record<string, unknown>;

    const channels = (config.channels ?? {}) as Record<string, unknown>;
    delete channels[name];
    config.channels = channels;
    fs.writeFileSync(configPath, JSON.stringify(config, null, 4), "utf8");

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
