import { NextResponse } from "next/server";
import { execSync } from "node:child_process";

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

function parseDisk(): DiskInfo {
  try {
    const raw = execSync("df -h /", { encoding: "utf-8", timeout: 5000 });
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
  } catch {
    return { total: "?", used: "?", available: "?", percent: 0 };
  }
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

function parseServices(): ServiceInfo[] {
  const serviceNames = ["openclaw-gateway", "voicebox", "ai-daemon"];
  try {
    const raw = execSync(
      `systemctl --user is-active ${serviceNames.join(" ")} 2>/dev/null || true`,
      { encoding: "utf-8", timeout: 5000 },
    );
    const statuses = raw.trim().split("\n");
    return serviceNames.map((name, i) => ({
      name,
      status: statuses[i]?.trim() || "unknown",
    }));
  } catch {
    return serviceNames.map((name) => ({ name, status: "unknown" }));
  }
}

export async function GET() {
  try {
    const [disk, gateway, daemon] = await Promise.all([
      Promise.resolve(parseDisk()),
      checkEndpoint("http://localhost:18789"),
      checkEndpoint("http://localhost:18089/admin/api/health"),
    ]);

    const services = parseServices();

    const result: SystemInfo = { disk, gateway, daemon, services };
    return NextResponse.json(result);
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Failed to load system info.";
    console.error("[config/system]", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
