import { NextResponse } from "next/server";
import { z } from "zod";
import fs from "node:fs";
import path from "node:path";
import { resolveStateDir } from "@/lib/clawdbot/paths";
import { parseBody, isValidationError } from "@/lib/api/validation";
import { createLogger } from "@/lib/logger";
import { withErrorHandler } from "@/lib/api/error-handler";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const log = createLogger("api:config:cron");

// --- Schemas ---

const CronPostSchema = z
  .object({
    enabled: z.boolean().optional(),
    maxConcurrentRuns: z.number().int().positive().optional(),
    sessionRetention: z.string().optional(),
  })
  .strict()
  .refine((data) => !("jobs" in (data as Record<string, unknown>)), {
    message:
      "Jobs must NOT be placed in openclaw.json cron section. They belong in cron/jobs.json.",
  });

// --- Helpers ---

function readJson(p: string): unknown {
  try {
    return JSON.parse(fs.readFileSync(p, "utf8"));
  } catch {
    return null;
  }
}

function writeJson(p: string, data: unknown): void {
  fs.writeFileSync(p, JSON.stringify(data, null, 2) + "\n", "utf8");
}

interface CronConfig {
  enabled?: boolean;
  maxConcurrentRuns?: number;
  sessionRetention?: string;
}

async function get_handler() {
  try {
    const stateDir = resolveStateDir();

    // Read cron jobs from cron/jobs.json
    const jobsPath = path.join(stateDir, "cron", "jobs.json");
    const jobsData = readJson(jobsPath) as {
      version?: number;
      jobs?: unknown[];
    } | null;
    const jobs = jobsData?.jobs ?? [];

    // Read cron config from openclaw.json (only maxConcurrentRuns, sessionRetention, enabled)
    const configPath = path.join(stateDir, "openclaw.json");
    const fullConfig = readJson(configPath) as Record<string, unknown> | null;
    const cronSection = (fullConfig?.cron ?? {}) as CronConfig;

    const config: CronConfig = {
      enabled: cronSection.enabled ?? true,
      maxConcurrentRuns: cronSection.maxConcurrentRuns ?? 3,
      sessionRetention: cronSection.sessionRetention ?? "7d",
    };

    log.info("Loaded cron config", { jobCount: jobs.length });
    return NextResponse.json({ jobs, config });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Failed to load cron config.";
    log.error("GET failed", { error: message });
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

async function post_handler(request: Request) {
  try {
    const parsed = await parseBody(request, CronPostSchema);
    if (isValidationError(parsed)) return parsed;

    const stateDir = resolveStateDir();
    const configPath = path.join(stateDir, "openclaw.json");
    const fullConfig = (readJson(configPath) as Record<string, unknown>) ?? {};
    const cronSection = (fullConfig.cron ?? {}) as Record<string, unknown>;

    // Only allow safe keys
    const allowedKeys = ["enabled", "maxConcurrentRuns", "sessionRetention"];
    for (const key of allowedKeys) {
      if (key in parsed) {
        cronSection[key] = (parsed as Record<string, unknown>)[key];
      }
    }

    fullConfig.cron = cronSection;
    writeJson(configPath, fullConfig);

    log.info("Updated cron config", { config: cronSection });
    return NextResponse.json({ ok: true, config: cronSection });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Failed to save cron config.";
    log.error("POST failed", { error: message });
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export const GET = withErrorHandler(get_handler);
export const POST = withErrorHandler(post_handler);