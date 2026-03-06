import { NextResponse } from "next/server";
import { parseSkillMd } from "@/lib/skills/skill-parser";
import { buildUISchemas } from "@/lib/skills/ui-schema-builder";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { skillPath } = body as { skillPath?: string };

    if (!skillPath || typeof skillPath !== "string") {
      return NextResponse.json(
        { error: "skillPath is required" },
        { status: 400 },
      );
    }

    const parsed = parseSkillMd(skillPath);
    if (!parsed) {
      return NextResponse.json(
        { error: `No SKILL.md found at ${skillPath}` },
        { status: 404 },
      );
    }

    const uiSchemas = buildUISchemas(parsed);

    return NextResponse.json({
      skill: parsed,
      uiSchemas,
    });
  } catch (err) {
    return NextResponse.json(
      { error: String(err) },
      { status: 500 },
    );
  }
}
