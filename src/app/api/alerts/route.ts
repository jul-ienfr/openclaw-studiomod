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
} from "@/lib/system/runtime-health";

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

async function get_handler() {
  try {
    const stateDir = resolveStateDir();
    const alerts: Alert[] = [];

    // Disk check
    const diskPct = (await readDiskInfo()).percent;
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
    const [gatewayStatus, daemonStatus] = await Promise.all([
      readServiceStatus(LOCAL_GATEWAY_HEALTH_URL),
      readServiceStatus(LOCAL_DAEMON_HEALTH_URL),
    ]);
    const gatewayUp = gatewayStatus === "up";
    const daemonUp = daemonStatus === "up";

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
