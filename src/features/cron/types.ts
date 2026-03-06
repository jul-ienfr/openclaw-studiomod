export type CronJobStatus = "ok" | "error" | "never";

export type CronJobSchedule = {
  kind: string;
  expr: string;
  tz?: string;
  staggerMs?: number;
};

export type CronJobState = {
  consecutiveErrors: number;
  nextRunAtMs?: number;
  lastRunAtMs?: number;
  lastRunStatus?: string;
  lastStatus?: string;
  lastDurationMs?: number;
  lastDeliveryStatus?: string;
  lastDelivered?: boolean;
  lastError?: string;
};

export type CronJobDelivery = {
  mode: string;
  channel?: string;
  to?: string;
};

export type CronJob = {
  id: string;
  agentId: string;
  name: string;
  enabled: boolean;
  createdAtMs: number;
  updatedAtMs: number;
  schedule: CronJobSchedule;
  sessionTarget?: string;
  wakeMode?: string;
  payload?: {
    kind: string;
    message?: string;
    timeoutSeconds?: number;
  };
  delivery?: CronJobDelivery;
  state: CronJobState;
};

export type CronConfig = {
  enabled?: boolean;
  maxConcurrentRuns?: number;
  sessionRetention?: string;
};

export type CronStats = {
  total: number;
  ok: number;
  error: number;
  neverRan: number;
  disabled: number;
};
