import { useMemo } from "react";
import type { AgentState } from "@/features/agents/state/store";
import type { GatewayModelPolicySnapshot } from "@/lib/gateway/models";
import {
  readConfigAgentList,
  resolveDefaultConfigAgentId,
} from "@/lib/gateway/agentConfig";
import { resolveAgentPermissionsDraft } from "@/features/agents/operations/agentPermissionsOperation";

export interface UseAgentSettingsContextParams {
  inspectSidebarAgent: AgentState | null;
  gatewayConfigSnapshot: GatewayModelPolicySnapshot | null;
}

export function useAgentSettingsContext({
  inspectSidebarAgent,
  gatewayConfigSnapshot,
}: UseAgentSettingsContextParams) {
  const settingsAgentPermissionsDraft = useMemo(() => {
    if (!inspectSidebarAgent) return null;
    const baseConfig =
      gatewayConfigSnapshot?.config &&
      typeof gatewayConfigSnapshot.config === "object" &&
      !Array.isArray(gatewayConfigSnapshot.config)
        ? (gatewayConfigSnapshot.config as Record<string, unknown>)
        : undefined;
    const list = readConfigAgentList(baseConfig);
    const configEntry =
      list.find((entry) => entry.id === inspectSidebarAgent.agentId) ?? null;
    const toolsRaw =
      configEntry &&
      typeof (configEntry as Record<string, unknown>).tools === "object"
        ? ((configEntry as Record<string, unknown>).tools as unknown)
        : null;
    const tools =
      toolsRaw && typeof toolsRaw === "object" && !Array.isArray(toolsRaw)
        ? (toolsRaw as Record<string, unknown>)
        : null;
    return resolveAgentPermissionsDraft({
      agent: inspectSidebarAgent,
      existingTools: tools,
    });
  }, [gatewayConfigSnapshot, inspectSidebarAgent]);

  const settingsAgentSkillsAllowlist = useMemo(() => {
    if (!inspectSidebarAgent) return undefined;
    const baseConfig =
      gatewayConfigSnapshot?.config &&
      typeof gatewayConfigSnapshot.config === "object" &&
      !Array.isArray(gatewayConfigSnapshot.config)
        ? (gatewayConfigSnapshot.config as Record<string, unknown>)
        : undefined;
    const list = readConfigAgentList(baseConfig);
    const configEntry =
      list.find((entry) => entry.id === inspectSidebarAgent.agentId) ?? null;
    const raw = configEntry?.skills;
    if (!Array.isArray(raw)) return undefined;
    return raw
      .filter((value): value is string => typeof value === "string")
      .map((value) => value.trim())
      .filter((value) => value.length > 0);
  }, [gatewayConfigSnapshot, inspectSidebarAgent]);

  const settingsDefaultAgentId = useMemo(() => {
    const baseConfig =
      gatewayConfigSnapshot?.config &&
      typeof gatewayConfigSnapshot.config === "object" &&
      !Array.isArray(gatewayConfigSnapshot.config)
        ? (gatewayConfigSnapshot.config as Record<string, unknown>)
        : undefined;
    return resolveDefaultConfigAgentId(baseConfig);
  }, [gatewayConfigSnapshot]);

  const settingsSkillScopeWarning = useMemo(() => {
    if (!inspectSidebarAgent) return null;
    if (inspectSidebarAgent.agentId === settingsDefaultAgentId) {
      return "Setup actions are shared across agents. Installs run in this shared workspace.";
    }
    return `Setup actions are shared across agents. Installs currently run in ${settingsDefaultAgentId} (shared workspace), not ${inspectSidebarAgent.agentId}.`;
  }, [inspectSidebarAgent, settingsDefaultAgentId]);

  return {
    settingsAgentPermissionsDraft,
    settingsAgentSkillsAllowlist,
    settingsDefaultAgentId,
    settingsSkillScopeWarning,
  };
}
