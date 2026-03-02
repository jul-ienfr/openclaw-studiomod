import { NextResponse } from "next/server";

// TODO: Replace the placeholder logic with an actual LLM-based coherence
// validator via the gateway client once LLM routing is wired.

type ValidationIssue = {
  severity: "warning" | "error";
  message: string;
  field: string;
};

// Simple in-memory cache (5 min TTL)
const CACHE_TTL_MS = 5 * 60 * 1000;
const cache = new Map<string, { issues: ValidationIssue[]; ts: number }>();

function getCacheKey(body: unknown): string {
  return JSON.stringify(body);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Check cache
    const key = getCacheKey(body);
    const cached = cache.get(key);
    if (cached && Date.now() - cached.ts < CACHE_TTL_MS) {
      return NextResponse.json({ issues: cached.issues });
    }

    const { persona, directives } = body as {
      persona?: {
        traits?: Record<string, number>;
        vibe?: string;
        coreTruths?: string;
        boundaries?: string;
      };
      directives?: {
        mission?: string;
        rules?: string;
        priorities?: string;
        outputFormat?: string;
      };
    };

    const issues: ValidationIssue[] = [];

    // Basic heuristic checks (placeholder until LLM integration)
    if (!directives?.mission?.trim()) {
      issues.push({
        severity: "warning",
        message: "No mission defined — the agent may lack focus.",
        field: "directives.mission",
      });
    }

    if (!persona?.vibe?.trim() && !persona?.coreTruths?.trim()) {
      issues.push({
        severity: "warning",
        message:
          "Neither vibe nor core truths are defined — personality will be generic.",
        field: "persona.vibe",
      });
    }

    // Trait tension detector
    const traits = persona?.traits;
    if (traits) {
      if (traits.warmth > 85 && traits.formality > 85) {
        issues.push({
          severity: "warning",
          message:
            "High warmth + high formality can feel contradictory. Consider adjusting one.",
          field: "persona.traits",
        });
      }
      if (traits.verbosity < 20 && traits.creativity > 80) {
        issues.push({
          severity: "warning",
          message:
            "Very low verbosity with high creativity may limit creative expression.",
          field: "persona.traits",
        });
      }
    }

    // Store in cache (evict stale entries periodically)
    cache.set(key, { issues, ts: Date.now() });
    if (cache.size > 100) {
      const now = Date.now();
      for (const [k, v] of cache) {
        if (now - v.ts > CACHE_TTL_MS) cache.delete(k);
      }
    }

    return NextResponse.json({ issues });
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 },
    );
  }
}
