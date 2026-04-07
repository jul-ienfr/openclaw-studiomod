import { NextResponse } from "next/server";
import { parseSkillMd } from "@/lib/skills/skill-parser";
import { renderExecTemplate } from "@/lib/skills/skill-executor";
import { withErrorHandler } from "@/lib/api/error-handler";
import { SkillExecuteSchema } from "@/lib/api/schemas/studio";
import { parseBody, isValidationError } from "@/lib/api/validation";
import { applyRateLimit, RATE_LIMITS } from "@/lib/rateLimit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

async function post_handler(request: Request) {
  const limited = applyRateLimit(request, RATE_LIMITS.skillsExecute);
  if (limited) return limited;

  try {
    const validated = await parseBody(request, SkillExecuteSchema);
    if (isValidationError(validated)) return validated;

    const { skillPath, commandName, parameters } = validated;

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
      (parameters ?? {}) as Record<string, string>,
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

export const POST = withErrorHandler(post_handler);
