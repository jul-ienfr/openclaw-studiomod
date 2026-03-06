import { NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";
import { resolveStateDir } from "@/lib/clawdbot/paths";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

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

export async function GET() {
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

    return NextResponse.json({ jobs, config });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Failed to load cron config.";
    console.error("[config/cron] GET", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;

    // Validate: NEVER allow "jobs" key in the cron section of openclaw.json
    if ("jobs" in body) {
      return NextResponse.json(
        {
          error:
            "Jobs must NOT be placed in openclaw.json cron section. They belong in cron/jobs.json.",
        },
        { status: 400 },
      );
    }

    const stateDir = resolveStateDir();
    const configPath = path.join(stateDir, "openclaw.json");
    const fullConfig = (readJson(configPath) as Record<string, unknown>) ?? {};
    const cronSection = (fullConfig.cron ?? {}) as Record<string, unknown>;

    // Only allow safe keys
    const allowedKeys = ["enabled", "maxConcurrentRuns", "sessionRetention"];
    for (const key of allowedKeys) {
      if (key in body) {
        cronSection[key] = body[key];
      }
    }

    fullConfig.cron = cronSection;
    writeJson(configPath, fullConfig);

    return NextResponse.json({ ok: true, config: cronSection });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Failed to save cron config.";
    console.error("[config/cron] POST", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
