/**
 * Cloudflared tunnel manager — singleton.
 *
 * Downloads the cloudflared binary on first use (stored in {projectRoot}/.cloudflared/),
 * spawns a "quick tunnel" (`cloudflared tunnel --url http://localhost:<port>`),
 * and exposes start/stop/status helpers consumed by the API route.
 *
 * Only ONE cloudflared process may exist at a time.  Before spawning a new one,
 * any pre-existing cloudflared process (including orphans from a previous crash)
 * is killed.  A PID file (`{BIN_DIR}/cloudflared.pid`) tracks the running instance.
 */

import { spawn, execSync, type ChildProcess } from "node:child_process";
import {
  createWriteStream,
  existsSync,
  chmodSync,
  mkdirSync,
  writeFileSync,
  readFileSync,
  unlinkSync,
} from "node:fs";
import { pipeline } from "node:stream/promises";
import { Readable } from "node:stream";
import path from "node:path";
import os from "node:os";

// ── Types ──────────────────────────────────────────────────────────────

export interface TunnelStatus {
  active: boolean;
  url?: string;
  error?: string;
  downloading?: boolean;
}

// ── Constants ──────────────────────────────────────────────────────────

const PROJECT_ROOT = path.resolve(process.cwd());
const BIN_DIR = path.join(PROJECT_ROOT, ".cloudflared");
const PID_FILE = path.join(BIN_DIR, "cloudflared.pid");
const TUNNEL_URL_RE = /https:\/\/[a-z0-9-]+\.trycloudflare\.com/;

function getBinaryName(): string {
  const platform = os.platform(); // "linux" | "darwin" | "win32"
  const arch = os.arch(); // "x64" | "arm64"

  if (platform === "win32") {
    return "cloudflared-windows-amd64.exe";
  }
  const archSuffix = arch === "arm64" ? "arm64" : "amd64";
  if (platform === "darwin") {
    return `cloudflared-darwin-${archSuffix}`;
  }
  return `cloudflared-linux-${archSuffix}`;
}

function getDownloadUrl(): string {
  const bin = getBinaryName();
  return `https://github.com/cloudflare/cloudflared/releases/latest/download/${bin}`;
}

function getBinaryPath(): string {
  const name = os.platform() === "win32" ? "cloudflared.exe" : "cloudflared";
  return path.join(BIN_DIR, name);
}

// ── URL change notification via globalThis ────────────────────────────
// server/index.js registers a callback on globalThis before this module loads.
// This avoids importing server/ modules (which Turbopack cannot resolve).

const CALLBACK_KEY = "__tunnelUrlChangeCallback";

function notifyUrlChange(url: string | null) {
  const fn = (globalThis as Record<string, unknown>)[CALLBACK_KEY];
  if (typeof fn === "function") {
    try {
      fn(url);
    } catch {
      /* non-fatal */
    }
  }
}

// ── Orphan cleanup ────────────────────────────────────────────────────
// Kill any pre-existing cloudflared processes before we start.
// Handles the case where a previous Studio instance crashed without cleanup.

function writePidFile(pid: number) {
  try {
    mkdirSync(BIN_DIR, { recursive: true });
    writeFileSync(PID_FILE, String(pid), { mode: 0o644 });
  } catch {
    /* best-effort */
  }
}

function removePidFile() {
  try {
    if (existsSync(PID_FILE)) unlinkSync(PID_FILE);
  } catch {
    /* best-effort */
  }
}

function killOrphanCloudflared() {
  // 1. Try the PID file first
  try {
    if (existsSync(PID_FILE)) {
      const pid = parseInt(readFileSync(PID_FILE, "utf8").trim(), 10);
      if (pid > 0) {
        try {
          process.kill(pid, "SIGTERM");
        } catch {
          /* already dead */
        }
      }
      removePidFile();
    }
  } catch {
    /* ignore */
  }

  // 2. Fallback: kill ALL cloudflared tunnel processes via pkill
  //    This catches any orphans not tracked by the PID file.
  try {
    execSync("pkill -f 'cloudflared tunnel --url' 2>/dev/null || true", {
      stdio: "ignore",
      timeout: 5000,
    });
  } catch {
    /* ignore — no matching process or pkill unavailable */
  }
}

// ── Singleton state ────────────────────────────────────────────────────

let tunnelProcess: ChildProcess | null = null;
let tunnelUrl: string | undefined;
let tunnelError: string | undefined;
let isDownloading = false;

// Clean up on process exit
function cleanup() {
  if (tunnelProcess) {
    tunnelProcess.kill("SIGTERM");
    tunnelProcess = null;
  }
  removePidFile();
}
process.on("exit", cleanup);
process.on("SIGINT", cleanup);
process.on("SIGTERM", cleanup);

// ── Download ───────────────────────────────────────────────────────────

async function ensureBinary(): Promise<string> {
  const binPath = getBinaryPath();
  if (existsSync(binPath)) return binPath;

  isDownloading = true;
  try {
    mkdirSync(BIN_DIR, { recursive: true });

    const url = getDownloadUrl();
    const res = await fetch(url, { redirect: "follow" });
    if (!res.ok || !res.body) {
      throw new Error(`Download failed: ${res.status} ${res.statusText}`);
    }

    const dest = createWriteStream(binPath);
    await pipeline(Readable.fromWeb(res.body as never), dest);
    chmodSync(binPath, 0o755);

    return binPath;
  } catch (err) {
    // Clean up partial download
    try {
      const { unlinkSync } = await import("node:fs");
      if (existsSync(binPath)) unlinkSync(binPath);
    } catch {
      /* ignore */
    }
    throw err;
  } finally {
    isDownloading = false;
  }
}

// ── Start / Stop / Status ──────────────────────────────────────────────

export async function startTunnel(port?: number): Promise<TunnelStatus> {
  if (tunnelProcess) {
    return { active: true, url: tunnelUrl };
  }

  // Kill any orphaned cloudflared before spawning a new one
  killOrphanCloudflared();

  tunnelUrl = undefined;
  tunnelError = undefined;

  const targetPort = port ?? parseInt(process.env.PORT ?? "3000", 10);
  const binPath = await ensureBinary();

  return new Promise<TunnelStatus>((resolve) => {
    const child = spawn(
      binPath,
      ["tunnel", "--url", `http://localhost:${targetPort}`],
      {
        stdio: ["ignore", "pipe", "pipe"],
      },
    );

    tunnelProcess = child;
    if (child.pid) writePidFile(child.pid);
    let resolved = false;

    const timeout = setTimeout(() => {
      if (!resolved) {
        resolved = true;
        // Tunnel started but URL not yet captured — return active with no URL yet
        if (tunnelProcess) {
          resolve({ active: true, url: tunnelUrl });
        } else {
          resolve({
            active: false,
            error: tunnelError ?? "Tunnel failed to start",
          });
        }
      }
    }, 15_000);

    const handleLine = (line: string) => {
      const match = line.match(TUNNEL_URL_RE);
      if (match && !resolved) {
        tunnelUrl = match[0];
        resolved = true;
        clearTimeout(timeout);
        notifyUrlChange(tunnelUrl);
        resolve({ active: true, url: tunnelUrl });
      }
    };

    child.stdout?.on("data", (chunk: Buffer) => {
      for (const line of chunk.toString().split("\n")) handleLine(line);
    });

    child.stderr?.on("data", (chunk: Buffer) => {
      for (const line of chunk.toString().split("\n")) handleLine(line);
    });

    child.on("error", (err) => {
      tunnelError = err.message;
      tunnelProcess = null;
      if (!resolved) {
        resolved = true;
        clearTimeout(timeout);
        resolve({ active: false, error: err.message });
      }
    });

    child.on("exit", (code) => {
      tunnelProcess = null;
      tunnelUrl = undefined;
      removePidFile();
      if (!resolved) {
        resolved = true;
        clearTimeout(timeout);
        tunnelError = `cloudflared exited with code ${code}`;
        resolve({ active: false, error: tunnelError });
      }
    });
  });
}

export function stopTunnel(): TunnelStatus {
  if (tunnelProcess) {
    tunnelProcess.kill("SIGTERM");
    tunnelProcess = null;
  }
  tunnelUrl = undefined;
  tunnelError = undefined;
  notifyUrlChange(null);
  return { active: false };
}

export function getTunnelStatus(): TunnelStatus {
  if (isDownloading) {
    return { active: false, downloading: true };
  }
  return {
    active: tunnelProcess !== null,
    url: tunnelUrl,
    error: tunnelError,
  };
}

// Auto-start tunnel on module load (production only)
if (process.env.NODE_ENV === "production" && !tunnelProcess) {
  startTunnel().catch(() => {
    /* tunnel auto-start failed silently — user can retry from UI */
  });
}
