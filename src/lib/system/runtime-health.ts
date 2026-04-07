import { spawn } from "node:child_process";

export type DiskInfo = {
  percent: number;
  total: string;
  used: string;
  available: string;
};

export const LOCAL_GATEWAY_HEALTH_URL = "http://localhost:18789";
export const LOCAL_DAEMON_HEALTH_URL =
  "http://localhost:18089/admin/api/health";

const DEFAULT_DISK_INFO: DiskInfo = {
  percent: 0,
  total: "?",
  used: "?",
  available: "?",
};

const DISK_CACHE_TTL_MS = 5_000;
const SERVICE_CACHE_TTL_MS = 3_000;

let cachedDiskInfo: DiskInfo = DEFAULT_DISK_INFO;
let cachedDiskExpiresAt = 0;
let diskInfoInFlight: Promise<DiskInfo> | null = null;

const serviceStatusCache = new Map<
  string,
  { status: "up" | "down"; expiresAt: number }
>();
const serviceStatusInFlight = new Map<string, Promise<"up" | "down">>();

function spawnWithTimeout(
  cmd: string,
  args: string[],
  timeoutMs = 3_000,
): Promise<string> {
  return new Promise((resolve, reject) => {
    const proc = spawn(cmd, args, { stdio: ["ignore", "pipe", "pipe"] });
    let stdout = "";
    let stderr = "";
    const timer = setTimeout(() => {
      proc.kill("SIGKILL");
      reject(new Error(`Command timed out after ${timeoutMs}ms`));
    }, timeoutMs);

    proc.stdout?.on("data", (chunk: Buffer) => {
      stdout += chunk.toString();
    });
    proc.stderr?.on("data", (chunk: Buffer) => {
      stderr += chunk.toString();
    });
    proc.on("close", (code) => {
      clearTimeout(timer);
      if (code === 0 || stdout) {
        resolve(stdout);
        return;
      }
      reject(new Error(stderr || `Process exited with code ${code}`));
    });
    proc.on("error", (err) => {
      clearTimeout(timer);
      reject(err);
    });
  });
}

function parseDiskInfo(raw: string): DiskInfo {
  const lines = raw.trim().split("\n");
  if (lines.length < 2) return DEFAULT_DISK_INFO;

  const parts = lines[1].split(/\s+/);
  const percent = Number.parseInt(parts[4]?.replace("%", "") ?? "", 10);

  return {
    total: parts[1] ?? "?",
    used: parts[2] ?? "?",
    available: parts[3] ?? "?",
    percent: Number.isFinite(percent) ? percent : 0,
  };
}

async function loadDiskInfo(): Promise<DiskInfo> {
  try {
    const raw = await spawnWithTimeout("df", ["-h", "/"]);
    return parseDiskInfo(raw);
  } catch {
    return DEFAULT_DISK_INFO;
  }
}

export async function readDiskInfo(
  cacheTtlMs: number = DISK_CACHE_TTL_MS,
): Promise<DiskInfo> {
  const now = Date.now();
  if (cachedDiskExpiresAt > now) {
    return cachedDiskInfo;
  }
  if (diskInfoInFlight) {
    return diskInfoInFlight;
  }

  diskInfoInFlight = loadDiskInfo()
    .then((diskInfo) => {
      cachedDiskInfo = diskInfo;
      cachedDiskExpiresAt = Date.now() + cacheTtlMs;
      return diskInfo;
    })
    .finally(() => {
      diskInfoInFlight = null;
    });

  return diskInfoInFlight;
}

export async function readDiskUsagePercent(
  cacheTtlMs: number = DISK_CACHE_TTL_MS,
): Promise<number | null> {
  const diskInfo = await readDiskInfo(cacheTtlMs);
  return Number.isFinite(diskInfo.percent) ? diskInfo.percent : null;
}

async function loadServiceStatus(
  url: string,
  timeoutMs: number,
): Promise<"up" | "down"> {
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    try {
      const response = await fetch(url, { signal: controller.signal });
      return response.ok ? "up" : "down";
    } finally {
      clearTimeout(timer);
    }
  } catch {
    return "down";
  }
}

export async function readServiceStatus(
  url: string,
  options?: { cacheTtlMs?: number; timeoutMs?: number },
): Promise<"up" | "down"> {
  const cacheTtlMs = options?.cacheTtlMs ?? SERVICE_CACHE_TTL_MS;
  const timeoutMs = options?.timeoutMs ?? 2_000;
  const now = Date.now();
  const cached = serviceStatusCache.get(url);
  if (cached && cached.expiresAt > now) {
    return cached.status;
  }

  const inFlight = serviceStatusInFlight.get(url);
  if (inFlight) {
    return inFlight;
  }

  const promise = loadServiceStatus(url, timeoutMs)
    .then((status) => {
      serviceStatusCache.set(url, {
        status,
        expiresAt: Date.now() + cacheTtlMs,
      });
      return status;
    })
    .finally(() => {
      serviceStatusInFlight.delete(url);
    });

  serviceStatusInFlight.set(url, promise);
  return promise;
}
