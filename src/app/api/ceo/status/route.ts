import { NextResponse } from "next/server";
import { resolveStateDir } from "@/lib/clawdbot/paths";
import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

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

function parseDisk(): {
  percent: number;
  total: string;
  used: string;
  available: string;
} {
  try {
    const output = execSync("df -h /", { encoding: "utf8", timeout: 5000 });
    const lines = output.trim().split("\n");
    if (lines.length < 2)
      return { percent: 0, total: "?", used: "?", available: "?" };
    const parts = lines[1].split(/\s+/);
    // df -h output: Filesystem Size Used Avail Use% Mounted
    const total = parts[1] ?? "?";
    const used = parts[2] ?? "?";
    const available = parts[3] ?? "?";
    const percentStr = parts[4] ?? "0%";
    const percent = parseInt(percentStr.replace("%", ""), 10) || 0;
    return { percent, total, used, available };
  } catch {
    return { percent: 0, total: "?", used: "?", available: "?" };
  }
}

async function checkService(url: string): Promise<"up" | "down"> {
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(2000) });
    return res.ok ? "up" : "down";
  } catch {
    return "down";
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

export async function GET() {
  try {
    const stateDir = resolveStateDir();

    const [disk, gateway, daemon] = await Promise.all([
      Promise.resolve(parseDisk()),
      checkService("http://localhost:18789"),
      checkService("http://localhost:18089/admin/api/health"),
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
        disk: { percent: 0, total: "?", used: "?", available: "?" },
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
