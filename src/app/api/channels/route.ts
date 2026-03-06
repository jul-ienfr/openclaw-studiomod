import { NextResponse } from "next/server";
import { z } from "zod";
import fs from "node:fs";
import path from "node:path";
import { resolveStateDir } from "@/lib/clawdbot/paths";
import { parseBody, parseQuery, isValidationError } from "@/lib/api/validation";
import { createLogger } from "@/lib/logger";

export const runtime = "nodejs";

const log = createLogger("api:channels");

// --- Schemas ---

const ChannelsGetQuerySchema = z.object({
  raw: z.string().optional(),
});

const ChannelsPatchSchema = z.object({
  name: z.string().min(1, "name requis"),
  patch: z.record(z.string(), z.unknown()),
});

const ChannelsDeleteQuerySchema = z.object({
  name: z.string().min(1, "name requis"),
});

// --- Helpers ---

function readJson(p: string): unknown {
  try { return JSON.parse(fs.readFileSync(p, "utf8")); } catch { return null; }
}

function maskSecret(val: string): string {
  if (val.length <= 8) return "****";
  return val.slice(0, 4) + "****" + val.slice(-4);
}

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const parsed = parseQuery(url, ChannelsGetQuerySchema);
    if (isValidationError(parsed)) return parsed;

    const { raw: rawName } = parsed;

    const stateDir = resolveStateDir();
    const config = readJson(path.join(stateDir, "openclaw.json")) as Record<string, unknown> | null;
    const channelsRaw = config?.channels as Record<string, unknown> | undefined;

    // Raw mode for edit modal: return unmasked channel config
    if (rawName && channelsRaw) {
      const ch = channelsRaw[rawName] ?? {};
      return NextResponse.json({ raw: ch });
    }

    // Check gateway health to determine actual connection status
    let gatewayOnline = false;
    try {
      const gwRes = await fetch("http://127.0.0.1:18789/health", {
        signal: AbortSignal.timeout(2000),
      });
      if (gwRes.ok) gatewayOnline = true;
    } catch {
      // Gateway unreachable
    }

    // Read agent sessions for last activity per channel
    const agentsDir = path.join(stateDir, "agents");
    const lastActivityMap: Record<string, number> = {};
    try {
      const agentDirs = fs.readdirSync(agentsDir, { withFileTypes: true })
        .filter((d) => d.isDirectory())
        .map((d) => d.name);
      for (const agentId of agentDirs.slice(0, 20)) {
        const sessionsPath = path.join(agentsDir, agentId, "sessions", "sessions.json");
        try {
          if (!fs.existsSync(sessionsPath)) continue;
          const sessionsData = JSON.parse(fs.readFileSync(sessionsPath, "utf8")) as Record<string, unknown>;
          const entries = sessionsData.sessions as Record<string, unknown> | undefined;
          if (!entries) continue;
          for (const sessionVal of Object.values(entries)) {
            const session = sessionVal as Record<string, unknown>;
            const delivery = String(session.delivery ?? session.channel ?? "");
            const history = (session.history ?? session.messages ?? []) as Array<Record<string, unknown>>;
            if (history.length > 0) {
              const lastMsg = history[history.length - 1];
              const ts = typeof lastMsg.createdAt === "number" ? lastMsg.createdAt :
                         typeof lastMsg.timestamp === "number" ? lastMsg.timestamp : 0;
              if (delivery && ts > (lastActivityMap[delivery] ?? 0)) {
                lastActivityMap[delivery] = ts;
              }
            }
          }
        } catch { /* skip unreadable sessions */ }
      }
    } catch { /* agents dir may not exist */ }

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
        // Determine real connection status
        let status: "connected" | "disconnected" | "error" | "configuring" = "disconnected";
        if (enabled && gatewayOnline) {
          status = "connected";
        } else if (enabled && !gatewayOnline) {
          status = "error";
        } else if (Object.keys(c).length > 0) {
          status = "configuring";
        }

        channels.push({
          name,
          enabled,
          status,
          details,
          lastActivity: lastActivityMap[name] ?? null,
        });
      }
    }

    log.info("Listed channels", { count: channels.length });
    return NextResponse.json({ channels, gatewayOnline });
  } catch (err) {
    log.error("Failed to list channels", { error: String(err) });
    return NextResponse.json({ error: String(err), channels: [] }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const parsed = await parseBody(request, ChannelsPatchSchema);
    if (isValidationError(parsed)) return parsed;

    const { name, patch } = parsed;

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

    log.info("Patched channel", { channel: name });
    return NextResponse.json({ ok: true });
  } catch (err) {
    log.error("Failed to patch channel", { error: String(err) });
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const url = new URL(request.url);
    const parsed = parseQuery(url, ChannelsDeleteQuerySchema);
    if (isValidationError(parsed)) return parsed;

    const { name } = parsed;

    const stateDir = resolveStateDir();
    const configPath = path.join(stateDir, "openclaw.json");
    const raw = fs.readFileSync(configPath, "utf8");
    const config = JSON.parse(raw) as Record<string, unknown>;

    const channels = (config.channels ?? {}) as Record<string, unknown>;
    delete channels[name];
    config.channels = channels;
    fs.writeFileSync(configPath, JSON.stringify(config, null, 4), "utf8");

    log.info("Deleted channel", { channel: name });
    return NextResponse.json({ ok: true });
  } catch (err) {
    log.error("Failed to delete channel", { error: String(err) });
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
