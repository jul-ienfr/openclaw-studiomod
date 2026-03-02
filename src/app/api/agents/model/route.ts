import { NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";
import { resolveStateDir } from "@/lib/clawdbot/paths";

export const runtime = "nodejs";

function readConfig(): Record<string, unknown> {
  try {
    const p = path.join(resolveStateDir(), "openclaw.json");
    return JSON.parse(fs.readFileSync(p, "utf8")) as Record<string, unknown>;
  } catch {
    return {};
  }
}

function writeConfig(config: Record<string, unknown>) {
  const p = path.join(resolveStateDir(), "openclaw.json");
  fs.writeFileSync(p, JSON.stringify(config, null, 4), "utf8");
}

/** PATCH /api/agents/model — persist an agent's default model to openclaw.json */
export async function PATCH(request: Request) {
  try {
    const body = (await request.json()) as { agentId: string; model: string | null };
    const { agentId, model } = body;

    if (!agentId) return NextResponse.json({ error: "agentId required" }, { status: 400 });

    const config = readConfig();
    const agentsSection = (config.agents ?? {}) as Record<string, unknown>;

    if (model === null) {
      // Remove per-agent override → fall back to global default
      const list = (agentsSection.list ?? []) as Record<string, unknown>[];
      agentsSection.list = list.map((entry) =>
        entry.id === agentId ? { ...entry, model: undefined } : entry
      );
    } else {
      // Set per-agent model override
      const list = (agentsSection.list ?? []) as Record<string, unknown>[];
      const idx = list.findIndex((e) => e.id === agentId);
      if (idx >= 0) {
        list[idx] = { ...list[idx], model: { primary: model } };
      } else {
        // Agent not in list yet — add minimal entry
        list.push({ id: agentId, model: { primary: model } });
      }
      agentsSection.list = list;
    }

    config.agents = agentsSection;
    writeConfig(config);

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}

/** GET /api/agents/model?agentId=main — read current model for an agent */
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const agentId = searchParams.get("agentId");

    const config = readConfig();
    const agentsSection = (config.agents ?? {}) as Record<string, unknown>;
    const list = (agentsSection.list ?? []) as Record<string, unknown>[];
    const defaults = (agentsSection.defaults ?? {}) as Record<string, unknown>;

    const entry = list.find((e) => e.id === agentId);
    const entryModel = entry?.model as { primary?: string } | string | undefined;
    const defaultsModel = defaults.model as { primary?: string } | string | undefined;

    const agentModel =
      typeof entryModel === "string"
        ? entryModel
        : entryModel?.primary ?? null;

    const defaultModel =
      typeof defaultsModel === "string"
        ? defaultsModel
        : defaultsModel?.primary ?? null;

    return NextResponse.json({ model: agentModel ?? defaultModel });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
