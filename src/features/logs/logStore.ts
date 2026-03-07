import type { LogEntry, LogLevel, LogSource, LogFilter } from "./types";

const MAX_PER_SOURCE = 500;
const MAX_TOTAL = 4000;
const STORAGE_KEY = "openclaw-studio:logs";

let buffer: LogEntry[] = [];

const loadBuffer = (): LogEntry[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as LogEntry[];
  } catch {
    return [];
  }
};

const persistBuffer = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(buffer));
};

export const initLogStore = () => {
  buffer = loadBuffer();
};

const rotateBySource = (source: LogSource) => {
  const sourceEntries = buffer.filter((e) => e.source === source);
  if (sourceEntries.length <= MAX_PER_SOURCE) return;
  const excess = sourceEntries.length - MAX_PER_SOURCE;
  let removed = 0;
  buffer = buffer.filter((e) => {
    if (e.source === source && removed < excess) {
      removed++;
      return false;
    }
    return true;
  });
};

const smartPurge = () => {
  if (buffer.length <= MAX_TOTAL) return;
  // Delete oldest debug entries first
  const debugEntries = buffer
    .map((e, i) => ({ entry: e, index: i }))
    .filter((item) => item.entry.level === "debug");
  const toRemove = buffer.length - MAX_TOTAL;
  const removeIndices = new Set(
    debugEntries.slice(0, toRemove).map((item) => item.index),
  );
  if (removeIndices.size >= toRemove) {
    buffer = buffer.filter((_, i) => !removeIndices.has(i));
    return;
  }
  // If not enough debug entries, remove oldest entries regardless of level
  buffer = buffer.slice(-MAX_TOTAL);
};

type PushLogOptions = {
  source: LogSource;
  agentId?: string;
  metadata?: Record<string, unknown>;
};

export const pushLog = (
  level: LogLevel,
  message: string,
  options: PushLogOptions,
) => {
  const entry: LogEntry = {
    id: crypto.randomUUID(),
    timestamp: Date.now(),
    level,
    source: options.source,
    message,
    ...(options.agentId ? { agentId: options.agentId } : {}),
    ...(options.metadata ? { metadata: options.metadata } : {}),
  };
  buffer.push(entry);
  rotateBySource(options.source);
  smartPurge();
  persistBuffer();
};

export const getLogs = (filter?: LogFilter): LogEntry[] => {
  let entries = [...buffer];
  if (filter?.level) {
    entries = entries.filter((e) => e.level === filter.level);
  }
  if (filter?.source) {
    entries = entries.filter((e) => e.source === filter.source);
  }
  if (filter?.agentId) {
    entries = entries.filter((e) => e.agentId === filter.agentId);
  }
  if (filter?.search) {
    const q = filter.search.toLowerCase();
    entries = entries.filter(
      (e) =>
        e.message.toLowerCase().includes(q) ||
        (e.agentId && e.agentId.toLowerCase().includes(q)) ||
        e.source.toLowerCase().includes(q),
    );
  }
  return entries;
};

export const clearLogs = () => {
  buffer = [];
  localStorage.removeItem(STORAGE_KEY);
};

export const getLogCount = (): number => buffer.length;

export const exportLogs = (filter?: LogFilter): string => {
  const entries = getLogs(filter);
  return entries
    .map((e) => {
      const sourceTag = `[${e.source}]`;
      const agentTag = e.agentId ? ` [${e.agentId}]` : "";
      return `[${new Date(e.timestamp).toISOString()}] [${e.level.toUpperCase()}] ${sourceTag}${agentTag} ${e.message}`;
    })
    .join("\n");
};
