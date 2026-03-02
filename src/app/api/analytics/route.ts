import { NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";
import { resolveStateDir } from "@/lib/clawdbot/paths";

export const runtime = "nodejs";

function readJson(filePath: string): unknown {
  try {
    if (!fs.existsSync(filePath)) return null;
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch {
    return null;
  }
}

export async function GET() {
  try {
    const stateDir = resolveStateDir();
    const agentsDir = path.join(stateDir, "agents");

    // List agent directories
    let agentIds: string[] = [];
    try {
      agentIds = fs
        .readdirSync(agentsDir, { withFileTypes: true })
        .filter((d) => d.isDirectory())
        .map((d) => d.name);
    } catch {
      agentIds = [];
    }

    // Read openclaw.json for heartbeat config
    const config = readJson(path.join(stateDir, "openclaw.json")) as Record<string, unknown> | null;
    const agentsConfig = (config?.agents as Record<string, unknown>) ?? {};
    const configAgents = (agentsConfig.agents as Record<string, Record<string, unknown>>) ?? {};

    const agents = agentIds.map((agentId) => {
      const agentConf = configAgents[agentId] ?? {};
      const heartbeat = agentConf.heartbeat as Record<string, unknown> | undefined;
      return {
        agentId,
        enabled: agentConf.enabled !== false,
        every: heartbeat?.every ?? null,
        everyMs: heartbeat?.everyMs ?? null,
      };
    });

    // Read recent sessions
    const sessions: Array<{ key: string; status: string; items: unknown[] }> = [];
    for (const agentId of agentIds.slice(0, 20)) {
      const sessionsPath = path.join(stateDir, "agents", agentId, "sessions", "sessions.json");
      const sessionsData = readJson(sessionsPath) as Record<string, unknown> | null;
      if (!sessionsData) continue;
      const entries = sessionsData.sessions as Record<string, unknown> | undefined;
      if (!entries) continue;
      for (const [key, sessionVal] of Object.entries(entries).slice(0, 3)) {
        const session = sessionVal as Record<string, unknown>;
        const history = (session.history ?? session.messages ?? []) as unknown[];
        const items = (history as Array<Record<string, unknown>>).slice(-5).map((m) => ({
          role: String(m.role ?? "unknown"),
          text: String(m.content ?? m.text ?? "").slice(0, 120),
          timestamp: typeof m.createdAt === "number" ? m.createdAt : undefined,
        }));
        sessions.push({ key, status: items.length > 0 ? "ok" : "empty", items });
      }
    }

    return NextResponse.json({ agents, sessions });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to load analytics";
    return NextResponse.json({ error: message, agents: [], sessions: [] }, { status: 500 });
  }
}
