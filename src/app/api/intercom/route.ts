import { NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";
import readline from "node:readline";
import { resolveStateDir } from "@/lib/clawdbot/paths";
import { withErrorHandler } from "@/lib/api/error-handler";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function readJson(p: string): unknown {
  try {
    return JSON.parse(fs.readFileSync(p, "utf8"));
  } catch {
    return null;
  }
}

function extractText(content: unknown): string {
  if (typeof content === "string") return content;
  if (Array.isArray(content)) {
    return content
      .filter(
        (b): b is Record<string, unknown> =>
          typeof b === "object" && b !== null && b.type === "text",
      )
      .map((b) => String(b.text ?? ""))
      .join(" ");
  }
  return "";
}

const INTERCOM_ROLES = new Set(["user", "assistant"]);

async function readSessionMessages(
  sessionFile: string,
  maxMessages = 6,
): Promise<Array<{ role: string; text: string; ts: number }>> {
  if (!fs.existsSync(sessionFile)) return [];
  const result: Array<{ role: string; text: string; ts: number }> = [];
  try {
    const rl = readline.createInterface({
      input: fs.createReadStream(sessionFile),
      crlfDelay: Infinity,
    });
    for await (const line of rl) {
      if (!line.trim()) continue;
      try {
        const obj = JSON.parse(line) as Record<string, unknown>;
        if (obj.type === "message" && obj.message) {
          const msg = obj.message as Record<string, unknown>;
          const role = String(msg.role ?? "unknown");
          if (!INTERCOM_ROLES.has(role)) continue;
          const text = extractText(msg.content);
          const ts = obj.timestamp
            ? new Date(String(obj.timestamp)).getTime()
            : Date.now();
          if (text.trim().length > 5) {
            result.push({ role, text, ts });
            if (result.length >= maxMessages) break;
          }
        }
      } catch {
        /* skip malformed lines */
      }
    }
  } catch {
    /* ignore file errors */
  }
  return result;
}

async function handleDetail(
  stateDir: string,
  agentId: string,
  sessionKey: string,
) {
  const sessionsPath = path.join(
    stateDir,
    "agents",
    agentId,
    "sessions",
    "sessions.json",
  );
  const sessionsData = readJson(sessionsPath) as Record<string, unknown> | null;
  if (!sessionsData) return NextResponse.json({ messages: [] });

  const session = sessionsData[sessionKey] as
    | Record<string, unknown>
    | undefined;
  if (!session) return NextResponse.json({ messages: [] });

  const spawnedBy = session.spawnedBy as string | undefined;
  const fromAgent = spawnedBy?.match(/^agent:([^:]+):/)?.[1] ?? "unknown";
  const label = session.label as string | undefined;
  const sessionFile = session.sessionFile as string | undefined;
  const isSameAgent = fromAgent === agentId;

  const sessionMsgs = sessionFile
    ? await readSessionMessages(sessionFile, 200)
    : [];

  const messages = sessionMsgs.map((m, i) => ({
    id: `${agentId}-${sessionKey}-${m.ts}-${i}`,
    from: fromAgent,
    to: agentId,
    sessionKey,
    label,
    role: m.role,
    text: m.text,
    ts: m.ts,
    sameAgent: isSameAgent,
  }));

  return NextResponse.json({ messages });
}

async function handler(request: Request) {
  const url = new URL(request.url);
  const detailAgent = url.searchParams.get("agentId");
  const detailSession = url.searchParams.get("sessionKey");

  const stateDir = resolveStateDir();

  if (detailAgent && detailSession) {
    return handleDetail(stateDir, detailAgent, detailSession);
  }

  const agentsDir = path.join(stateDir, "agents");

  let agentIds: string[] = [];
  try {
    agentIds = fs
      .readdirSync(agentsDir, { withFileTypes: true })
      .filter((d) => d.isDirectory())
      .map((d) => d.name);
  } catch {
    agentIds = [];
  }

  const messages: Array<{
    id: string;
    from: string;
    to: string;
    sessionKey: string;
    label?: string;
    role: string;
    text: string;
    ts: number;
    sameAgent: boolean;
  }> = [];

  // sessions.json is a FLAT dict — no .sessions wrapper
  for (const agentId of agentIds.slice(0, 30)) {
    const sessionsPath = path.join(
      agentsDir,
      agentId,
      "sessions",
      "sessions.json",
    );
    const sessionsData = readJson(sessionsPath) as Record<
      string,
      unknown
    > | null;
    if (!sessionsData || typeof sessionsData !== "object") continue;

    for (const [sessionKey, sessionVal] of Object.entries(sessionsData).slice(
      0,
      30,
    )) {
      const session = sessionVal as Record<string, unknown>;
      const spawnedBy = session.spawnedBy as string | undefined;
      if (!spawnedBy) continue;

      const spawnedByMatch = spawnedBy.match(/^agent:([^:]+):/);
      const fromAgent = spawnedByMatch?.[1];
      if (!fromAgent) continue;

      const isSameAgent = fromAgent === agentId;
      const label = session.label as string | undefined;
      const sessionFile = session.sessionFile as string | undefined;

      // Messages are in separate JSONL files, not inline
      const sessionMsgs = sessionFile
        ? await readSessionMessages(sessionFile, 4)
        : [];

      if (sessionMsgs.length > 0) {
        for (const m of sessionMsgs) {
          messages.push({
            id: `${agentId}-${sessionKey}-${m.ts}-${messages.length}`,
            from: fromAgent,
            to: agentId,
            sessionKey,
            label,
            role: m.role,
            text: m.text.slice(0, 600),
            ts: m.ts,
            sameAgent: isSameAgent,
          });
        }
      } else {
        const updatedAt = session.updatedAt as number | string | undefined;
        const ts =
          typeof updatedAt === "number"
            ? updatedAt
            : updatedAt
              ? new Date(String(updatedAt)).getTime()
              : Date.now();
        messages.push({
          id: `${agentId}-${sessionKey}-spawn`,
          from: fromAgent,
          to: agentId,
          sessionKey,
          label,
          role: "spawn",
          text: label ? `Subagent: ${label}` : "Subagent session",
          ts,
          sameAgent: isSameAgent,
        });
      }
    }
  }

  messages.sort((a, b) => b.ts - a.ts);
  return NextResponse.json({ messages: messages.slice(0, 300) });
}

export const GET = withErrorHandler(handler);
