"use client";

import { useEffect, useState } from "react";
import { HardDrive, Radio, Bot, Clock } from "lucide-react";
import type { GatewayStatus } from "@/lib/gateway/GatewayClient";

type InfraStatusBarProps = {
  gatewayStatus: GatewayStatus;
  activeAgentCount: number;
};

type SystemInfo = {
  disk?: { percent: number };
  crons?: { active: number; total: number };
};

function useSystemInfo(): SystemInfo {
  const [info, setInfo] = useState<SystemInfo>({});

  useEffect(() => {
    let mounted = true;

    async function fetchInfo() {
      try {
        const res = await fetch("/api/config/system");
        if (!res.ok || !mounted) return;
        const data = (await res.json()) as SystemInfo;
        setInfo(data);
      } catch {
        /* silent — system info is optional */
      }
    }

    fetchInfo();
    const id = setInterval(fetchInfo, 60_000);
    return () => {
      mounted = false;
      clearInterval(id);
    };
  }, []);

  return info;
}

function useCronActiveCount(): { active: number; total: number } {
  const [counts, setCounts] = useState({ active: 0, total: 0 });

  useEffect(() => {
    let mounted = true;

    async function fetchJobs() {
      try {
        const res = await fetch("/api/cron/jobs");
        if (!res.ok || !mounted) return;
        const data = (await res.json()) as {
          jobs?: Array<{ state?: { enabled?: boolean } }>;
        };
        const jobs = data.jobs ?? [];
        const active = jobs.filter(
          (j) => j.state?.enabled !== false,
        ).length;
        setCounts({ active, total: jobs.length });
      } catch {
        /* silent */
      }
    }

    fetchJobs();
    const id = setInterval(fetchJobs, 30_000);
    return () => {
      mounted = false;
      clearInterval(id);
    };
  }, []);

  return counts;
}

function gatewayStatusColor(status: GatewayStatus): string {
  if (status === "connected") return "bg-green-500";
  if (status === "connecting") return "bg-yellow-500";
  return "bg-red-500";
}

function gatewayStatusLabel(status: GatewayStatus): string {
  if (status === "connected") return "Connected";
  if (status === "connecting") return "Connecting";
  return "Disconnected";
}

function diskBarColor(pct: number): string {
  if (pct >= 85) return "bg-red-500";
  if (pct >= 75) return "bg-yellow-500";
  return "bg-green-500";
}

function diskTextColor(pct: number): string {
  if (pct >= 85) return "text-red-400";
  if (pct >= 75) return "text-yellow-400";
  return "text-green-400";
}

export function InfraStatusBar({
  gatewayStatus,
  activeAgentCount,
}: InfraStatusBarProps) {
  const systemInfo = useSystemInfo();
  const cronCounts = useCronActiveCount();

  const disk = systemInfo.disk;
  const diskPct = disk?.percent ?? null;

  return (
    <div className="flex flex-wrap items-center gap-4 rounded-xl border border-border bg-card px-4 py-3">
      {/* Gateway connection dot */}
      <div className="flex items-center gap-2">
        <Radio className="h-3.5 w-3.5 text-muted-foreground" strokeWidth={1.75} />
        <span
          className={`h-2 w-2 rounded-full ${gatewayStatusColor(gatewayStatus)}`}
          title={`Gateway: ${gatewayStatusLabel(gatewayStatus)}`}
          aria-label={`Gateway status: ${gatewayStatusLabel(gatewayStatus)}`}
        />
        <span className="text-xs text-muted-foreground">
          {gatewayStatusLabel(gatewayStatus)}
        </span>
      </div>

      <div className="h-4 w-px bg-border" />

      {/* Active agents */}
      <div className="flex items-center gap-2">
        <Bot className="h-3.5 w-3.5 text-muted-foreground" strokeWidth={1.75} />
        <span className="text-xs text-muted-foreground">Agents</span>
        <span className="text-xs font-semibold tabular-nums">
          {activeAgentCount}
        </span>
        <span className="text-xs text-muted-foreground">active</span>
      </div>

      {/* Disk usage (only if available) */}
      {diskPct !== null && (
        <>
          <div className="h-4 w-px bg-border" />
          <div className="flex items-center gap-2">
            <HardDrive
              className="h-3.5 w-3.5 text-muted-foreground"
              strokeWidth={1.75}
            />
            <span className="text-xs text-muted-foreground">Disk</span>
            <span
              className={`text-xs font-semibold tabular-nums ${diskTextColor(diskPct)}`}
            >
              {diskPct}%
            </span>
            <div className="h-1.5 w-16 overflow-hidden rounded-full bg-muted">
              <div
                className={`h-full rounded-full transition-all ${diskBarColor(diskPct)}`}
                style={{ width: `${Math.min(diskPct, 100)}%` }}
              />
            </div>
          </div>
        </>
      )}

      <div className="h-4 w-px bg-border" />

      {/* Active cron jobs */}
      <div className="flex items-center gap-2">
        <Clock className="h-3.5 w-3.5 text-muted-foreground" strokeWidth={1.75} />
        <span className="text-xs text-muted-foreground">Cron</span>
        <span className="text-xs font-semibold tabular-nums">
          {cronCounts.active}/{cronCounts.total}
        </span>
        <span className="text-xs text-muted-foreground">active</span>
      </div>
    </div>
  );
}
