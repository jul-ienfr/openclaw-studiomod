import { NextResponse } from "next/server";
import { spawn } from "node:child_process";
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

interface ServiceInfo {
  name: string;
  status: string;
}

interface SystemInfo {
  disk: DiskInfo;
  gateway: "up" | "down";
  daemon: "up" | "down";
  services: ServiceInfo[];
}

function spawnWithTimeout(
  cmd: string,
  args: string[],
  timeoutMs = 3000,
): Promise<string> {
  return new Promise((resolve, reject) => {
    const proc = spawn(cmd, args, { stdio: ["ignore", "pipe", "pipe"] });
    let stdout = "";
    let stderr = "";
    const timer = setTimeout(() => {
      proc.kill("SIGKILL");
      reject(new Error(`Command timed out after ${timeoutMs}ms`));
    }, timeoutMs);
    proc.stdout?.on("data", (d: Buffer) => {
      stdout += d.toString();
    });
    proc.stderr?.on("data", (d: Buffer) => {
      stderr += d.toString();
    });
    proc.on("close", (code) => {
      clearTimeout(timer);
      if (code === 0 || stdout) resolve(stdout);
      else reject(new Error(stderr || `Process exited with code ${code}`));
    });
    proc.on("error", (err) => {
      clearTimeout(timer);
      reject(err);
    });
  });
}

function parseServices(): Promise<ServiceInfo[]> {
  const serviceNames = ["openclaw-gateway", "voicebox", "ai-daemon"];
  return spawnWithTimeout(
    "systemctl",
    ["--user", "is-active", ...serviceNames],
    3000,
  )
    .then((raw) => {
      const statuses = raw.trim().split("\n");
      return serviceNames.map((name, i) => ({
        name,
        status: statuses[i]?.trim() || "unknown",
      }));
    })
    .catch(() => serviceNames.map((name) => ({ name, status: "unknown" })));
}

async function get_handler() {
  try {
    const [disk, gateway, daemon, services] = await Promise.all([
      readDiskInfo(),
      readServiceStatus(LOCAL_GATEWAY_HEALTH_URL),
      readServiceStatus(LOCAL_DAEMON_HEALTH_URL),
      parseServices(),
    ]);

    const result: SystemInfo = { disk, gateway, daemon, services };
    return NextResponse.json(result);
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Failed to load system info.";
    console.error("[config/system]", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export const GET = withErrorHandler(get_handler);
