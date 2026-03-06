import { NextResponse } from "next/server";
import { spawn } from "node:child_process";
import { withErrorHandler } from "@/lib/api/error-handler";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

interface DiskInfo {
  total: string;
  used: string;
  available: string;
  percent: number;
}

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
    proc.stdout?.on("data", (d: Buffer) => { stdout += d.toString(); });
    proc.stderr?.on("data", (d: Buffer) => { stderr += d.toString(); });
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

function parseDisk(): Promise<DiskInfo> {
  return spawnWithTimeout("df", ["-h", "/"])
    .then((raw) => {
      const lines = raw.trim().split("\n");
      if (lines.length < 2)
        return { total: "?", used: "?", available: "?", percent: 0 };
      const parts = lines[1].split(/\s+/);
      // parts: [Filesystem, Size, Used, Avail, Use%, Mounted]
      const percent = parseInt(parts[4]?.replace("%", "") ?? "0", 10);
      return {
        total: parts[1] ?? "?",
        used: parts[2] ?? "?",
        available: parts[3] ?? "?",
        percent: isNaN(percent) ? 0 : percent,
      };
    })
    .catch(() => ({ total: "?", used: "?", available: "?", percent: 0 }));
}

async function checkEndpoint(
  url: string,
  timeoutMs = 2000,
): Promise<"up" | "down"> {
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(timer);
    return res.ok ? "up" : "down";
  } catch {
    return "down";
  }
}

function parseServices(): Promise<ServiceInfo[]> {
  const serviceNames = ["openclaw-gateway", "voicebox", "ai-daemon"];
  return spawnWithTimeout("systemctl", ["--user", "is-active", ...serviceNames], 3000)
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
      parseDisk(),
      checkEndpoint("http://localhost:18789"),
      checkEndpoint("http://localhost:18089/admin/api/health"),
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