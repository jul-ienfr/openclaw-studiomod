import { NextResponse } from "next/server";
import * as os from "node:os";
import { getDbStats, DB_PATH } from "@/lib/db/studio-db";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET() {
  const start = Date.now();

  let dbStats = null;
  try {
    dbStats = getDbStats();
  } catch {}

  const mem = process.memoryUsage();

  return NextResponse.json({
    meta: {
      timestamp: new Date().toISOString(),
      responseMs: Date.now() - start,
    },
    gateway: globalThis.__studioGatewayClient?.getStatus() ?? {
      connected: false,
      url: null,
    },
    sse: {
      activeClients: globalThis.__studioEventBroadcaster?.getClientCount() ?? 0,
    },
    process: {
      uptimeSeconds: Math.round(process.uptime()),
      memoryRssMb: Math.round(mem.rss / 1024 / 1024),
      memoryHeapUsedMb: Math.round(mem.heapUsed / 1024 / 1024),
      memoryHeapTotalMb: Math.round(mem.heapTotal / 1024 / 1024),
      nodeVersion: process.versions.node ?? null,
      bunVersion: (process.versions as Record<string, string>).bun ?? null,
      v8Version: process.versions.v8 ?? null,
    },
    system: {
      platform: os.platform(),
      hostname: os.hostname(),
      arch: os.arch(),
      cpuCount: os.cpus().length,
      uptimeSeconds: Math.round(os.uptime()),
      loadAvg: os.loadavg(),
      freeMemMb: Math.round(os.freemem() / 1024 / 1024),
      totalMemMb: Math.round(os.totalmem() / 1024 / 1024),
    },
    db: dbStats
      ? {
          path: DB_PATH,
          sizeKb: Math.round(dbStats.size_bytes / 1024),
          migrationVersion: dbStats.migration_version,
          tableCounts: dbStats.table_counts,
        }
      : null,
    build: {
      nodeEnv: process.env.NODE_ENV,
      port: process.env.PORT ?? "3000",
      host: process.env.HOST ?? "0.0.0.0",
      stateDir: process.env.OPENCLAW_STATE_DIR ?? "~/.openclaw",
    },
  });
}
