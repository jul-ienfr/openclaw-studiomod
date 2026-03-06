// Pillar system — dynamic business units for OpenClaw Studio CEO Dashboard
// Config file: ~/.openclaw/studio/pillars.json

export type PillarType = "personal" | "business";

export type MetricDef = {
  key: string;
  label: string;
  format: "number" | "currency" | "percent" | "status" | "duration";
  source: "report" | "cron" | "gateway";
  unit?: string;
};

export type AgentBinding = {
  agentId: string;
  role: string;
  label: string;
  metrics: MetricDef[];
};

export type Pillar = {
  id: string;
  type: PillarType;
  name: string;
  icon?: string;
  color?: string;
  agents: AgentBinding[];
  order: number;
  enabled: boolean;
};

export type PillarsConfig = {
  version: "1";
  pillars: Pillar[];
};

export const DEFAULT_PILLARS: PillarsConfig = {
  version: "1",
  pillars: [
    {
      id: "perso",
      type: "personal",
      name: "Vie Perso",
      icon: "User",
      color: "#5a849a",
      agents: [],
      order: 0,
      enabled: true,
    },
  ],
};
