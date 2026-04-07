import type { LogEntry } from "@/features/logs/types";
import type { GatewayStatus } from "@/lib/gateway/GatewayClient";

export type DashboardMetrics = {
  messages24h: number;
  cronRuns: number;
  errors: number;
};

export type DashboardCronCounts = {
  active: number;
  total: number;
};

export type DashboardSnapshot = {
  gatewayStatus: GatewayStatus;
  diskUsagePercent: number | null;
  cronCounts: DashboardCronCounts;
  metrics: DashboardMetrics;
  recentActivity: LogEntry[];
};

export const EMPTY_DASHBOARD_SNAPSHOT: DashboardSnapshot = {
  gatewayStatus: "connecting",
  diskUsagePercent: null,
  cronCounts: {
    active: 0,
    total: 0,
  },
  metrics: {
    messages24h: 0,
    cronRuns: 0,
    errors: 0,
  },
  recentActivity: [],
};
