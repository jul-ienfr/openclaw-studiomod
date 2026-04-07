import { NextResponse } from "next/server";
import { buildPersonaBuilderUserPrompt } from "@/features/agents/creation/personaBuilderPrompt";
import { parsePersonaBuilderResult } from "@/features/agents/creation/personaBuilderSchema";
import { withErrorHandler } from "@/lib/api/error-handler";
import { PersonaBuilderSchema } from "@/lib/api/schemas/studio";
import { parseBody, isValidationError } from "@/lib/api/validation";
import { applyRateLimit, RATE_LIMITS } from "@/lib/rateLimit";

export const runtime = "nodejs";

async function post_handler(request: Request) {
  const limited = applyRateLimit(request, RATE_LIMITS.personaBuilder);
  if (limited) return limited;

  try {
    const body = await parseBody(request, PersonaBuilderSchema);
    if (isValidationError(body)) return body;

    const { description, feedback } = body;

    buildPersonaBuilderUserPrompt(description, feedback);

    // Use fetch to call the gateway's LLM endpoint
    // This is a placeholder — in production, this would route through the gateway client
    // For now, return a structured fallback that the frontend can use
    const fallbackResult = {
      name: description.split(" ").slice(0, 3).join(" "),
      persona: {
        traits: {
          formality: 50,
          verbosity: 50,
          creativity: 50,
          proactivity: 50,
          warmth: 50,
        },
        vibe: "Versatile and helpful",
        coreTruths:
          "- I prioritize the user's goals.\n- I am honest about my limitations.",
        boundaries:
          "- I do not fabricate information.\n- I ask for clarification when unsure.",
      },
      directives: {
        mission: `Assist the user with: ${description}`,
        rules:
          "- Respond clearly and directly.\n- Adapt to the user's communication style.",
        priorities: "1. Accuracy\n2. Helpfulness\n3. Clarity",
        outputFormat: "Flexible — adapt to the task.",
      },
      suggestedModel: "anthropic/claude-sonnet-4-5-20250414",
    };

    const result = parsePersonaBuilderResult(fallbackResult);
    if (!result) {
      return NextResponse.json(
        { error: "Failed to generate persona." },
        { status: 500 },
      );
    }

    return NextResponse.json({ result });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Failed to build persona.";
    console.error("Persona builder error:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export const POST = withErrorHandler(post_handler);
