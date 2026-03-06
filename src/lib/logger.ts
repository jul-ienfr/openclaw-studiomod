/**
 * Structured logger for OpenClaw Studio.
 *
 * - Outputs JSON to stdout (level, timestamp, source, message, meta)
 * - Simultaneously writes to SQLite `logs` table via log-repo (fire-and-forget)
 */

type LogLevel = "debug" | "info" | "warn" | "error";

interface LogPayload {
  level: LogLevel;
  timestamp: string;
  source: string;
  message: string;
  meta?: Record<string, unknown>;
}

interface Logger {
  debug: (message: string, meta?: Record<string, unknown>) => void;
  info: (message: string, meta?: Record<string, unknown>) => void;
  warn: (message: string, meta?: Record<string, unknown>) => void;
  error: (message: string, meta?: Record<string, unknown>) => void;
}

function writeToSqlite(
  level: LogLevel,
  source: string,
  message: string,
  meta?: Record<string, unknown>,
): void {
  try {
    // Lazy import to avoid bun:sqlite issues during Next.js build
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { insertLog } = require("@/lib/db/repositories/log-repo");
    insertLog(level, source, message, meta);
  } catch {
    // Fire-and-forget: never crash the app on log write failure
  }
}

function emit(
  level: LogLevel,
  source: string,
  message: string,
  meta?: Record<string, unknown>,
): void {
  const payload: LogPayload = {
    level,
    timestamp: new Date().toISOString(),
    source,
    message,
  };
  if (meta && Object.keys(meta).length > 0) {
    payload.meta = meta;
  }

  // Structured JSON to stdout
  const line = JSON.stringify(payload);
  if (level === "error") {
    process.stderr.write(line + "\n");
  } else {
    process.stdout.write(line + "\n");
  }

  // Non-blocking SQLite write
  writeToSqlite(level, source, message, meta);
}

/**
 * Create a namespaced logger instance.
 *
 * @example
 * const log = createLogger("api:providers");
 * log.info("Provider validated", { providerId: "anthropic" });
 */
export function createLogger(source: string): Logger {
  return {
    debug: (message, meta) => emit("debug", source, message, meta),
    info: (message, meta) => emit("info", source, message, meta),
    warn: (message, meta) => emit("warn", source, message, meta),
    error: (message, meta) => emit("error", source, message, meta),
  };
}
