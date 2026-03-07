// @vitest-environment node

import { describe, expect, it } from "vitest";
import {
  AgentBindingSchema,
  PillarSchema,
  PillarsConfigSchema,
} from "./schemas";

// ─── Fixtures ────────────────────────────────────────────────────────────────

const validAgentBinding = {
  agentId: "agent-001",
  role: "researcher",
  label: "Research Agent",
  metrics: [
    {
      key: "jobs_found",
      label: "Jobs Found",
      format: "number" as const,
      source: "report" as const,
    },
  ],
};

const validPillar = {
  id: "pillar-1",
  type: "personal" as const,
  name: "Job Search",
  icon: "briefcase",
  color: "#3b82f6",
  agents: [validAgentBinding],
  workflows: [],
  order: 0,
  enabled: true,
};

// ─── PillarSchema ────────────────────────────────────────────────────────────

describe("PillarSchema", () => {
  it("accepts a valid pillar", () => {
    const result = PillarSchema.safeParse(validPillar);
    expect(result.success).toBe(true);
  });

  it("accepts pillar with optional fields omitted", () => {
    const minimal = {
      id: "p1",
      type: "business",
      name: "Mining",
      agents: [],
      order: 1,
      enabled: false,
    };
    const result = PillarSchema.safeParse(minimal);
    expect(result.success).toBe(true);
    if (result.success) {
      // workflows defaults to []
      expect(result.data.workflows).toEqual([]);
      // optional fields are undefined
      expect(result.data.icon).toBeUndefined();
      expect(result.data.color).toBeUndefined();
      expect(result.data.ceoAgentId).toBeUndefined();
    }
  });

  it("rejects missing required fields", () => {
    const result = PillarSchema.safeParse({
      id: "p2",
      // missing: type, name, agents, order, enabled
    });
    expect(result.success).toBe(false);
    if (!result.success) {
      const paths = result.error.issues.map((i) => i.path.join("."));
      expect(paths).toContain("type");
      expect(paths).toContain("name");
      expect(paths).toContain("agents");
      expect(paths).toContain("order");
      expect(paths).toContain("enabled");
    }
  });

  it("rejects invalid type enum value", () => {
    const result = PillarSchema.safeParse({
      ...validPillar,
      type: "unknown",
    });
    expect(result.success).toBe(false);
  });
});

// ─── PillarsConfigSchema ─────────────────────────────────────────────────────

describe("PillarsConfigSchema", () => {
  it("validates a full config with multiple pillars", () => {
    const config = {
      version: "1",
      pillars: [
        validPillar,
        { ...validPillar, id: "pillar-2", name: "Admin", order: 1 },
      ],
    };
    const result = PillarsConfigSchema.safeParse(config);
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.pillars).toHaveLength(2);
    }
  });

  it("rejects wrong version", () => {
    const result = PillarsConfigSchema.safeParse({
      version: "2",
      pillars: [],
    });
    expect(result.success).toBe(false);
  });

  it("rejects missing pillars array", () => {
    const result = PillarsConfigSchema.safeParse({ version: "1" });
    expect(result.success).toBe(false);
  });
});

// ─── AgentBindingSchema ──────────────────────────────────────────────────────

describe("AgentBindingSchema", () => {
  it("accepts a valid agent binding", () => {
    const result = AgentBindingSchema.safeParse(validAgentBinding);
    expect(result.success).toBe(true);
  });

  it("requires agentId, role, label, and metrics", () => {
    const result = AgentBindingSchema.safeParse({});
    expect(result.success).toBe(false);
    if (!result.success) {
      const paths = result.error.issues.map((i) => i.path.join("."));
      expect(paths).toContain("agentId");
      expect(paths).toContain("role");
      expect(paths).toContain("label");
      expect(paths).toContain("metrics");
    }
  });

  it("validates nested metric format enum", () => {
    const binding = {
      ...validAgentBinding,
      metrics: [
        {
          key: "k",
          label: "L",
          format: "invalid_format",
          source: "report",
        },
      ],
    };
    const result = AgentBindingSchema.safeParse(binding);
    expect(result.success).toBe(false);
  });

  it("accepts metric with optional unit field", () => {
    const binding = {
      ...validAgentBinding,
      metrics: [
        {
          key: "revenue",
          label: "Revenue",
          format: "currency",
          source: "cron",
          unit: "EUR",
        },
      ],
    };
    const result = AgentBindingSchema.safeParse(binding);
    expect(result.success).toBe(true);
  });
});
