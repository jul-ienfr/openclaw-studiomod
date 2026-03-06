import { NextResponse } from "next/server";
import path from "node:path";
import { resolveStateDir } from "@/lib/clawdbot/paths";
import {
  parseSkillMd,
  listSkillDirs,
  getSkillMtime,
} from "@/lib/skills/skill-parser";
import { enrichWithUI, type SkillWithUI } from "@/lib/skills/ui-schema-builder";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/** Cache helper using the existing cache repo (lazy-loaded for bun:sqlite) */
function getCached(skillDir: string, mtime: number): SkillWithUI | null {
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { getDb } = require("@/lib/db/studio-db") as typeof import("@/lib/db/studio-db");
    const db = getDb();
    try {
      const row = db
        .prepare(
          "SELECT schema, mtime FROM skill_ui_cache WHERE skill_path = ?",
        )
        .get(skillDir) as { schema: string; mtime: number } | undefined;

      if (row && row.mtime === Math.floor(mtime)) {
        return JSON.parse(row.schema) as SkillWithUI;
      }
    } finally {
      db.close();
    }
  } catch {
    // SQLite not available (build time) or table missing — skip cache
  }
  return null;
}

function setCache(skillDir: string, mtime: number, data: SkillWithUI): void {
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { getDbWrite } = require("@/lib/db/studio-db") as typeof import("@/lib/db/studio-db");
    const db = getDbWrite();
    try {
      db.prepare(
        `INSERT INTO skill_ui_cache (skill_path, schema, mtime, parsed_at)
         VALUES (?, ?, ?, datetime('now'))
         ON CONFLICT(skill_path) DO UPDATE SET
           schema = excluded.schema,
           mtime = excluded.mtime,
           parsed_at = excluded.parsed_at`,
      ).run(skillDir, JSON.stringify(data), Math.floor(mtime));
    } finally {
      db.close();
    }
  } catch {
    // Skip caching silently
  }
}

export async function GET() {
  try {
    const stateDir = resolveStateDir();
    const skillsBase = path.join(stateDir, "skills");
    const skillDirs = listSkillDirs(skillsBase);

    const skills: SkillWithUI[] = [];

    for (const dir of skillDirs) {
      const mtime = getSkillMtime(dir);

      // Try cache first
      const cached = getCached(dir, mtime);
      if (cached) {
        skills.push(cached);
        continue;
      }

      // Parse fresh
      const parsed = parseSkillMd(dir);
      if (!parsed) continue;

      const enriched = enrichWithUI(parsed);
      skills.push(enriched);

      // Store in cache
      setCache(dir, mtime, enriched);
    }

    return NextResponse.json({ skills });
  } catch (err) {
    return NextResponse.json(
      { error: String(err), skills: [] },
      { status: 500 },
    );
  }
}
