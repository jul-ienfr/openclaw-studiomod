import { NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";
import { resolveStateDir } from "@/lib/clawdbot/paths";
import { withErrorHandler } from "@/lib/api/error-handler";

export const runtime = "nodejs";

function readJson(p: string): unknown {
  try { return JSON.parse(fs.readFileSync(p, "utf8")); } catch { return null; }
}

async function get_handler() {
  try {
    const stateDir = resolveStateDir();
    const agentsDir = path.join(stateDir, "agents");

    let agentIds: string[] = [];
    try {
      agentIds = fs.readdirSync(agentsDir, { withFileTypes: true })
        .filter((d) => d.isDirectory())
        .map((d) => d.name);
    } catch { agentIds = []; }

    const messages: Array<{
      id: string;
      from: string;
      to: string;
      role: string;
      text: string;
      ts?: number;
    }> = [];

    // Look for cross-agent messages in session histories
    for (const agentId of agentIds.slice(0, 10)) {
      const sessionsPath = path.join(agentsDir, agentId, "sessions", "sessions.json");
      const sessionsData = readJson(sessionsPath) as Record<string, unknown> | null;
      if (!sessionsData) continue;
      const entries = sessionsData.sessions as Record<string, unknown> | undefined;
      if (!entries) continue;

      for (const [sessionKey, sessionVal] of Object.entries(entries).slice(0, 5)) {
        const session = sessionVal as Record<string, unknown>;
        const history = (session.history ?? session.messages ?? []) as Array<Record<string, unknown>>;

        // Find messages that reference other agents (intercom pattern)
        for (const msg of history.slice(-20)) {
          const text = String(msg.content ?? msg.text ?? "");
          const role = String(msg.role ?? "unknown");
          const ts = typeof msg.createdAt === "number" ? msg.createdAt : undefined;

          // Check if this looks like inter-agent communication
          const targetMatch = sessionKey.match(/agent:([^:]+):/);
          const targetAgent = targetMatch?.[1];
          if (!targetAgent || targetAgent === agentId) continue;

          if (text && text.length > 5) {
            messages.push({
              id: `${agentId}-${sessionKey}-${messages.length}`,
              from: agentId,
              to: targetAgent,
              role,
              text: text.slice(0, 300),
              ts,
            });
          }
        }
      }
    }

    // Sort by timestamp
    messages.sort((a, b) => (a.ts ?? 0) - (b.ts ?? 0));

    return NextResponse.json({ messages: messages.slice(-100) });
  } catch (err) {
    return NextResponse.json({ error: String(err), messages: [] }, { status: 500 });
  }
}

export const GET = withErrorHandler(get_handler);