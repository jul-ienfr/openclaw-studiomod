import { NextResponse } from "next/server";
import { parseSkillMd } from "@/lib/skills/skill-parser";
import { renderExecTemplate } from "@/lib/skills/skill-executor";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { skillPath, commandName, parameters } = body as {
      skillPath?: string;
      commandName?: string;
      parameters?: Record<string, string>;
    };

    if (!skillPath || typeof skillPath !== "string") {
      return NextResponse.json(
        { error: "skillPath is required" },
        { status: 400 },
      );
    }
    if (!commandName || typeof commandName !== "string") {
      return NextResponse.json(
        { error: "commandName is required" },
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

    const command = parsed.commands.find((c) => c.name === commandName);
    if (!command) {
      return NextResponse.json(
        {
          error: `Command "${commandName}" not found in skill "${parsed.name}"`,
          available: parsed.commands.map((c) => c.name),
        },
        { status: 404 },
      );
    }

    const rendered = renderExecTemplate(
      command.exec,
      parameters ?? {},
      skillPath,
    );

    return NextResponse.json({
      command: rendered,
      skillName: parsed.name,
      commandName: command.name,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    const status = message.includes("dangerous") ? 400 : 500;
    return NextResponse.json({ error: message }, { status });
  }
}
