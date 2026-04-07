"use client";

import { HardDrive, Radio, Bot, Clock } from "lucide-react";
import type { DashboardCronCounts } from "@/features/dashboard/types";
import type { GatewayStatus } from "@/lib/gateway/GatewayClient";

type InfraStatusBarProps = {
  gatewayStatus: GatewayStatus;
  activeAgentCount: number;
  diskUsagePercent: number | null;
  cronCounts: DashboardCronCounts;
};

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
  diskUsagePercent,
  cronCounts,
}: InfraStatusBarProps) {
  return (
    <div className="flex flex-wrap items-center gap-4 rounded-xl border border-border bg-card px-4 py-3">
      {/* Gateway connection dot */}
      <div className="flex items-center gap-2">
        <Radio
          className="h-3.5 w-3.5 text-muted-foreground"
          strokeWidth={1.75}
        />
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
      {diskUsagePercent !== null && (
        <>
          <div className="h-4 w-px bg-border" />
          <div className="flex items-center gap-2">
            <HardDrive
              className="h-3.5 w-3.5 text-muted-foreground"
              strokeWidth={1.75}
            />
            <span className="text-xs text-muted-foreground">Disk</span>
            <span
              className={`text-xs font-semibold tabular-nums ${diskTextColor(diskUsagePercent)}`}
            >
              {diskUsagePercent}%
            </span>
            <div className="h-1.5 w-16 overflow-hidden rounded-full bg-muted">
              <div
                className={`h-full rounded-full transition-all ${diskBarColor(diskUsagePercent)}`}
                style={{ width: `${Math.min(diskUsagePercent, 100)}%` }}
              />
            </div>
          </div>
        </>
      )}

      <div className="h-4 w-px bg-border" />

      {/* Active cron jobs */}
      <div className="flex items-center gap-2">
        <Clock
          className="h-3.5 w-3.5 text-muted-foreground"
          strokeWidth={1.75}
        />
        <span className="text-xs text-muted-foreground">Cron</span>
        <span className="text-xs font-semibold tabular-nums">
          {cronCounts.active}/{cronCounts.total}
        </span>
        <span className="text-xs text-muted-foreground">active</span>
      </div>
    </div>
  );
}
