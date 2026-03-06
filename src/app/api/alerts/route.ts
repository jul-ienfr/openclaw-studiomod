import { NextResponse } from "next/server";
import { resolveStateDir } from "@/lib/clawdbot/paths";
import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { withErrorHandler } from "@/lib/api/error-handler";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Alert = {
  id: string;
  level: "info" | "warning" | "error";
  message: string;
  action?: { label: string; href: string };
};

function readJson(filePath: string): unknown {
  try {
    if (!fs.existsSync(filePath)) return null;
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch {
    return null;
  }
}

function getDiskPercent(): number {
  try {
    const output = execSync("df -h /", { encoding: "utf8", timeout: 5000 });
    const lines = output.trim().split("\n");
    if (lines.length < 2) return 0;
    const parts = lines[1].split(/\s+/);
    const percentStr = parts[4] ?? "0%";
    return parseInt(percentStr.replace("%", ""), 10) || 0;
  } catch {
    return 0;
  }
}

async function isServiceUp(url: string): Promise<boolean> {
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(2000) });
    return res.ok;
  } catch {
    return false;
  }
}

async function get_handler() {
  try {
    const stateDir = resolveStateDir();
    const alerts: Alert[] = [];

    // Disk check
    const diskPct = getDiskPercent();
    if (diskPct >= 85) {
      alerts.push({
        id: "disk-critical",
        level: "error",
        message: `Disque critique : ${diskPct}%`,
        action: { label: "Voir logs", href: "/logs" },
      });
    } else if (diskPct > 75) {
      alerts.push({
        id: "disk-warning",
        level: "warning",
        message: `Disque : ${diskPct}% utilise`,
      });
    }

    // Gateway check
    const [gatewayUp, daemonUp] = await Promise.all([
      isServiceUp("http://localhost:18789"),
      isServiceUp("http://localhost:18089/admin/api/health"),
    ]);

    if (!gatewayUp) {
      alerts.push({
        id: "gateway-down",
        level: "error",
        message: "Gateway OpenClaw hors-ligne",
        action: { label: "Config", href: "/config" },
      });
    }

    if (!daemonUp) {
      alerts.push({
        id: "daemon-down",
        level: "warning",
        message: "ai-daemon hors-ligne",
      });
    }

    // Cron jobs with errors
    const jobsPath = path.join(stateDir, "cron", "jobs.json");
    const cronData = readJson(jobsPath) as {
      jobs?: Array<{
        id?: string;
        name?: string;
        state?: { consecutiveErrors?: number };
      }>;
    } | null;

    if (cronData?.jobs) {
      for (const job of cronData.jobs) {
        const errors = job.state?.consecutiveErrors ?? 0;
        if (errors > 3) {
          alerts.push({
            id: `cron-err-${job.id ?? job.name ?? "unknown"}`,
            level: "warning",
            message: `Cron "${job.name ?? job.id ?? "?"}" : ${errors} erreurs consecutives`,
          });
        }
      }
    }

    return NextResponse.json({ alerts });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Failed to check alerts";
    return NextResponse.json({ alerts: [], error: message }, { status: 500 });
  }
}

export const GET = withErrorHandler(get_handler);