import { NextRequest, NextResponse } from "next/server";
import fs from "node:fs";
import path from "node:path";
import { resolveStateDir } from "@/lib/clawdbot/paths";
import { withErrorHandler } from "@/lib/api/error-handler";
import { CronJobPatchSchema } from "@/lib/api/schemas/config";
import { parseBody, isValidationError } from "@/lib/api/validation";
import { applyRateLimit, RATE_LIMITS } from "@/lib/rateLimit";

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

type JobsFile = {
  version?: number;
  jobs: Record<string, unknown>[];
};

async function patch_handler(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const limited = applyRateLimit(request, RATE_LIMITS.configPatch);
  if (limited) return limited;

  try {
    const { id } = await params;
    const body = await parseBody(request, CronJobPatchSchema);
    if (isValidationError(body)) return body;

    const stateDir = resolveStateDir();
    const jobsPath = path.join(stateDir, "cron", "jobs.json");
    const jobsData = readJson(jobsPath) as JobsFile | null;

    if (!jobsData) {
      return NextResponse.json(
        { error: "jobs.json not found" },
        { status: 404 },
      );
    }

    const jobIndex = jobsData.jobs.findIndex((j) => j.id === id);
    if (jobIndex === -1) {
      return NextResponse.json({ error: "Job not found" }, { status: 404 });
    }

    // Merge partial update into existing job
    jobsData.jobs[jobIndex] = {
      ...jobsData.jobs[jobIndex],
      ...body,
      id, // ensure id is not overwritten
      updatedAtMs: Date.now(),
    };

    writeJson(jobsPath, jobsData);

    return NextResponse.json({ ok: true, job: jobsData.jobs[jobIndex] });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Failed to update job.";
    console.error("[config/cron/[id]] PATCH", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

async function delete_handler(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const limited = applyRateLimit(_request, RATE_LIMITS.deleteGeneric);
  if (limited) return limited;

  try {
    const { id } = await params;

    const stateDir = resolveStateDir();
    const jobsPath = path.join(stateDir, "cron", "jobs.json");
    const jobsData = readJson(jobsPath) as JobsFile | null;

    if (!jobsData) {
      return NextResponse.json(
        { error: "jobs.json not found" },
        { status: 404 },
      );
    }

    const originalLength = jobsData.jobs.length;
    jobsData.jobs = jobsData.jobs.filter((j) => j.id !== id);

    if (jobsData.jobs.length === originalLength) {
      return NextResponse.json({ error: "Job not found" }, { status: 404 });
    }

    writeJson(jobsPath, jobsData);

    return NextResponse.json({ ok: true });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Failed to delete job.";
    console.error("[config/cron/[id]] DELETE", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export const PATCH = withErrorHandler(patch_handler);
export const DELETE = withErrorHandler(delete_handler);
