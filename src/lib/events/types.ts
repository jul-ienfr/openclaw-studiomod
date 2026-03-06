export type EventType =
  | "agent:status-change"
  | "agent:message"
  | "system:health"
  | "report:new"
  | "alert:critical"
  | "cron:complete"
  | "pillar:update";

export type SSEEvent<T = unknown> = {
  type: EventType;
  payload: T;
  timestamp: number;
};

export type AgentStatusPayload = {
  agentId: string;
  status: "online" | "offline" | "busy" | "error";
  sessionId?: string;
};

export type SystemHealthPayload = {
  gateway: boolean;
  agents: number;
  uptime: number;
};

export type AlertPayload = {
  id: string;
  level: "info" | "warning" | "error" | "critical";
  message: string;
  source: string;
};
