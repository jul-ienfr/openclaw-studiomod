export type LogLevel = "debug" | "info" | "warn" | "error";

export type LogSource = "gateway" | "agent" | "watcher" | "settings" | "theme" | "system" | "api" | "ui";

export type LogEntry = {
  id: string;
  timestamp: number;
  level: LogLevel;
  source: LogSource;
  agentId?: string;
  message: string;
  metadata?: Record<string, unknown>;
};

export type LogFilter = {
  level?: LogLevel;
  source?: LogSource;
  agentId?: string;
  search?: string;
};

export const LOG_SOURCES: LogSource[] = [
  "gateway",
  "agent",
  "watcher",
  "settings",
  "theme",
  "system",
  "api",
  "ui",
];
