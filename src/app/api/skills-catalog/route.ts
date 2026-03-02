import { NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";
import { resolveStateDir } from "@/lib/clawdbot/paths";

export const runtime = "nodejs";

function readJson(p: string): unknown {
  try { return JSON.parse(fs.readFileSync(p, "utf8")); } catch { return null; }
}

function readSkillMd(skillDir: string): { name: string; description?: string } {
  try {
    const mdPath = path.join(skillDir, "SKILL.md");
    if (!fs.existsSync(mdPath)) return { name: path.basename(skillDir) };
    const content = fs.readFileSync(mdPath, "utf8");
    const nameMatch = content.match(/^name:\s*(.+)$/m);
    const descMatch = content.match(/^description:\s*(.+)$/m);
    return {
      name: nameMatch?.[1]?.trim() ?? path.basename(skillDir),
      description: descMatch?.[1]?.trim(),
    };
  } catch {
    return { name: path.basename(skillDir) };
  }
}

export async function GET() {
  try {
    const stateDir = resolveStateDir();
    const agentsDir = path.join(stateDir, "agents");
    const globalSkillsDir = path.join(stateDir, "skills");

    const skills: Array<{
      name: string;
      description?: string;
      agentId: string;
      enabled: boolean;
      path?: string;
    }> = [];

    // Global skills
    if (fs.existsSync(globalSkillsDir)) {
      for (const entry of fs.readdirSync(globalSkillsDir, { withFileTypes: true })) {
        if (!entry.isDirectory()) continue;
        const skillDir = path.join(globalSkillsDir, entry.name);
        const meta = readSkillMd(skillDir);
        skills.push({ ...meta, agentId: "global", enabled: true, path: skillDir });
      }
    }

    // Per-agent skills
    let agentIds: string[] = [];
    try {
      agentIds = fs.readdirSync(agentsDir, { withFileTypes: true })
        .filter((d) => d.isDirectory())
        .map((d) => d.name);
    } catch { /**/ }

    for (const agentId of agentIds) {
      const agentConf = readJson(path.join(agentsDir, agentId, "agent", "agent.json")) as Record<string, unknown> | null;
      const skillsConf = (agentConf?.skills as Record<string, unknown>) ?? {};

      for (const [skillName, skillVal] of Object.entries(skillsConf)) {
        const s = skillVal as Record<string, unknown>;
        skills.push({
          name: skillName,
          description: s.description as string | undefined,
          agentId,
          enabled: s.enabled !== false,
        });
      }
    }

    return NextResponse.json({ skills });
  } catch (err) {
    return NextResponse.json({ error: String(err), skills: [] }, { status: 500 });
  }
}
