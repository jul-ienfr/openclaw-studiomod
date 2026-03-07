import type { LogSource } from "@/features/logs/types";
import { pushLog } from "@/features/logs/logStore";

export type ClientLogger = {
  debug: (message: string, metadata?: Record<string, unknown>) => void;
  info: (message: string, metadata?: Record<string, unknown>) => void;
  warn: (message: string, metadata?: Record<string, unknown>) => void;
  error: (message: string, metadata?: Record<string, unknown>) => void;
};

export function createClientLogger(source: LogSource): ClientLogger {
  return {
    debug: (message: string, metadata?: Record<string, unknown>) =>
      pushLog("debug", message, { source, metadata }),
    info: (message: string, metadata?: Record<string, unknown>) =>
      pushLog("info", message, { source, metadata }),
    warn: (message: string, metadata?: Record<string, unknown>) =>
      pushLog("warn", message, { source, metadata }),
    error: (message: string, metadata?: Record<string, unknown>) =>
      pushLog("error", message, { source, metadata }),
  };
}
