import { NextResponse } from "next/server";
import { resolveStateDir } from "@/lib/clawdbot/paths";
import fs from "node:fs";
import path from "node:path";
import { withErrorHandler } from "@/lib/api/error-handler";
import {
  LOCAL_DAEMON_HEALTH_URL,
  LOCAL_GATEWAY_HEALTH_URL,
  readDiskInfo,
  readServiceStatus,
  type DiskInfo,
} from "@/lib/system/runtime-health";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function readJson(filePath: string): unknown {
  try {
    if (!fs.existsSync(filePath)) return null;
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch {
    return null;
  }
}

function parseCrons(stateDir: string): {
  total: number;
  active: number;
  errored: number;
} {
  const jobsPath = path.join(stateDir, "cron", "jobs.json");
  const data = readJson(jobsPath) as {
    jobs?: Array<{ state?: { enabled?: boolean; consecutiveErrors?: number } }>;
  } | null;
  if (!data?.jobs) return { total: 0, active: 0, errored: 0 };
  const jobs = data.jobs;
  const total = jobs.length;
  const active = jobs.filter((j) => j.state?.enabled !== false).length;
  const errored = jobs.filter(
    (j) => (j.state?.consecutiveErrors ?? 0) > 0,
  ).length;
  return { total, active, errored };
}

function countAgents(stateDir: string): number {
  const configPath = path.join(stateDir, "openclaw.json");
  const config = readJson(configPath) as {
    agents?: { list?: unknown[] };
  } | null;
  if (!config?.agents?.list) return 0;
  return config.agents.list.length;
}

async function get_handler() {
  try {
    const stateDir = resolveStateDir();

    const [disk, gateway, daemon] = await Promise.all([
      readDiskInfo(),
      readServiceStatus(LOCAL_GATEWAY_HEALTH_URL),
      readServiceStatus(LOCAL_DAEMON_HEALTH_URL),
    ]);

    const crons = parseCrons(stateDir);
    const agentCount = countAgents(stateDir);

    return NextResponse.json({
      disk,
      gateway,
      daemon,
      crons,
      agentCount,
      timestamp: Date.now(),
    });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Failed to gather CEO status";
    return NextResponse.json(
      {
        error: message,
        disk: {
          percent: 0,
          total: "?",
          used: "?",
          available: "?",
        } satisfies DiskInfo,
        gateway: "down",
        daemon: "down",
        crons: { total: 0, active: 0, errored: 0 },
        agentCount: 0,
        timestamp: Date.now(),
      },
      { status: 500 },
    );
  }
}

export const GET = withErrorHandler(get_handler);
