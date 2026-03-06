"use client";

import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import { getThinkingLevels } from "@/lib/gateway/models";
import type { GatewayModelChoice } from "@/lib/gateway/models";
import type { GatewayClient } from "@/lib/gateway/GatewayClient";
import type { AgentState } from "@/features/agents/state/store";
import type { SettingsRouteTab } from "@/features/agents/operations/settingsRouteWorkflow";
import type { AgentPermissionsDraft } from "@/features/agents/operations/agentPermissionsOperation";
import type { CronCreateDraft } from "@/lib/cron/createPayloadBuilder";
import type { CronJobSummary } from "@/lib/cron/types";
import type { SkillStatusReport } from "@/lib/skills/types";
import type { AgentChannelLink } from "@/features/routing/agentChannelResolver";
import { EmptyStatePanel } from "@/features/agents/components/EmptyStatePanel";

const AgentBrainPanel = dynamic(
  () =>
    import("@/features/agents/components/AgentBrainPanel").then(
      (m) => m.AgentBrainPanel,
    ),
  { ssr: false },
);
const AgentSettingsPanel = dynamic(
  () =>
    import("@/features/agents/components/AgentSettingsPanel").then(
      (m) => m.AgentSettingsPanel,
    ),
  { ssr: false },
);
const AgentPerformanceTab = dynamic(
  () =>
    import("@/features/agents/components/AgentPerformanceTab").then(
      (m) => m.AgentPerformanceTab,
    ),
  { ssr: false },
);

const RESERVED_MAIN_AGENT_ID = "main";

type SettingsSidebarEntry = {
  id: SettingsRouteTab;
  label: string;
};

const SETTINGS_SIDEBAR_ENTRIES: SettingsSidebarEntry[] = [
  { id: "personality", label: "Behavior" },
  { id: "capabilities", label: "Capabilities" },
  { id: "skills", label: "Skills" },
  { id: "system", label: "System setup" },
  { id: "automations", label: "Automations" },
  { id: "credentials", label: "Credentials" },
  { id: "performance", label: "Performance" },
  { id: "advanced", label: "Advanced" },
];

export type AgentSettingsRoutePageProps = {
  inspectSidebarAgent: AgentState | null;
  settingsRouteAgentId: string | null;
  effectiveSettingsTab: SettingsRouteTab;
  activeSettingsSidebarItem: SettingsRouteTab;
  personalityHasUnsavedChanges: boolean;
  allModels: GatewayModelChoice[];
  gatewayClient: GatewayClient;
  settingsAgentPermissionsDraft: AgentPermissionsDraft | null;
  settingsSkillScopeWarning: string | null;
  systemInitialSkillKey: string | null;
  settingsAgentSkillsAllowlist: string[] | undefined;
  settingsSkillsReport: SkillStatusReport | null;
  settingsSkillsLoading: boolean;
  settingsSkillsError: string | null;
  settingsSkillsBusy: boolean;
  settingsSkillsBusyKey: string | null;
  settingsSkillMessages: Record<string, { kind: "success" | "error"; message: string }>;
  settingsSkillApiKeyDrafts: Record<string, string>;
  settingsCronJobs: CronJobSummary[];
  settingsCronLoading: boolean;
  settingsCronError: string | null;
  cronCreateBusy: boolean;
  cronRunBusyJobId: string | null;
  cronDeleteBusyJobId: string | null;
  controlUiUrl: string | null;
  channelsByAgent: Map<string, AgentChannelLink[]>;
  onBackToChat: () => void;
  onTabChange: (tab: SettingsRouteTab) => void;
  onSetSidebarItem: (tab: SettingsRouteTab) => void;
  onModelChange: (agentId: string, sessionKey: string, value: string | null) => void;
  onThinkingChange: (agentId: string, sessionKey: string, value: string | null) => void;
  onSetPersonalityHasUnsavedChanges: (dirty: boolean) => void;
  onRenameAgent: (agentId: string, name: string) => Promise<boolean> | boolean;
  onUpdateAgentPermissions: (agentId: string, draft: AgentPermissionsDraft) => Promise<void> | void;
  onDeleteAgent: (agentId: string) => void;
  onSystemInitialSkillHandled: () => void;
  onSetSkillEnabled: (agentId: string, skillName: string, enabled: boolean) => Promise<void> | void;
  onOpenSystemSkillSetup: (skillKey?: string) => void;
  onInstallSkill: (agentId: string, skillKey: string, name: string, installId: string) => Promise<void> | void;
  onRemoveSkill: (agentId: string, skill: { skillKey: string; source: string; baseDir: string }) => Promise<void> | void;
  onSkillApiKeyChange: (skillKey: string, value: string) => Promise<void> | void;
  onSaveSkillApiKey: (agentId: string, skillKey: string) => Promise<void> | void;
  onSetSkillGlobalEnabled: (agentId: string, skillKey: string, enabled: boolean) => Promise<void> | void;
  onCreateCronJob: (agentId: string, draft: CronCreateDraft) => Promise<void> | void;
  onRunCronJob: (agentId: string, jobId: string) => Promise<void> | void;
  onDeleteCronJob: (agentId: string, jobId: string) => Promise<void> | void;
  agents: AgentState[];
};

export const AgentSettingsRoutePage = ({
  inspectSidebarAgent,
  settingsRouteAgentId,
  effectiveSettingsTab,
  activeSettingsSidebarItem,
  personalityHasUnsavedChanges,
  allModels,
  gatewayClient,
  settingsAgentPermissionsDraft,
  settingsSkillScopeWarning,
  systemInitialSkillKey,
  settingsAgentSkillsAllowlist,
  settingsSkillsReport,
  settingsSkillsLoading,
  settingsSkillsError,
  settingsSkillsBusy,
  settingsSkillsBusyKey,
  settingsSkillMessages,
  settingsSkillApiKeyDrafts,
  settingsCronJobs,
  settingsCronLoading,
  settingsCronError,
  cronCreateBusy,
  cronRunBusyJobId,
  cronDeleteBusyJobId,
  controlUiUrl,
  channelsByAgent,
  onBackToChat,
  onTabChange,
  onSetSidebarItem,
  onModelChange,
  onThinkingChange,
  onSetPersonalityHasUnsavedChanges,
  onRenameAgent,
  onUpdateAgentPermissions,
  onDeleteAgent,
  onSystemInitialSkillHandled,
  onSetSkillEnabled,
  onOpenSystemSkillSetup,
  onInstallSkill,
  onRemoveSkill,
  onSkillApiKeyChange,
  onSaveSkillApiKey,
  onSetSkillGlobalEnabled,
  onCreateCronJob,
  onRunCronJob,
  onDeleteCronJob,
  agents,
}: AgentSettingsRoutePageProps) => {
  const tp = useTranslations("page");

  const sidebarModel = allModels.find(
    (m) => `${m.provider}/${m.id}` === inspectSidebarAgent?.model,
  );
  const sidebarThinkingLevels = getThinkingLevels(
    inspectSidebarAgent?.model ?? "",
    sidebarModel?.reasoning,
  );

  return (
    <div
      className="ui-panel ui-depth-workspace flex min-h-0 flex-1 overflow-hidden"
      data-testid="agent-settings-route-panel"
    >
      <aside className="w-[240px] shrink-0 border-r border-border/60">
        <div className="border-b border-border/60 px-4 py-3">
          <button
            type="button"
            className="ui-btn-secondary w-full px-3 py-1.5 font-mono text-[10px] font-semibold tracking-[0.06em]"
            onClick={onBackToChat}
          >
            {tp("backToChat")}
          </button>
        </div>
        <nav className="py-3">
          {SETTINGS_SIDEBAR_ENTRIES.map((entry) => {
            const active = activeSettingsSidebarItem === entry.id;
            return (
              <button
                key={entry.id}
                type="button"
                className={`relative w-full px-5 py-3 text-left text-sm transition ${
                  active
                    ? "bg-surface-2/55 font-medium text-foreground"
                    : "font-normal text-muted-foreground hover:bg-surface-2/35 hover:text-foreground"
                }`}
                onClick={() => {
                  onSetSidebarItem(entry.id);
                  onTabChange(entry.id);
                }}
              >
                {active ? (
                  <span
                    className="absolute inset-y-2 left-0 w-0.5 rounded-r bg-primary"
                    aria-hidden="true"
                  />
                ) : null}
                {entry.label}
              </button>
            );
          })}
        </nav>
      </aside>
      <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
        <div className="flex items-start justify-between border-b border-border/60 px-6 py-4">
          <div className="min-w-0 flex-1">
            <div className="text-lg font-semibold text-foreground">
              {inspectSidebarAgent?.name ?? settingsRouteAgentId ?? "Agent settings"}
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <label className="flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground">
                <span className="font-semibold tracking-[0.04em]">Model</span>
                <select
                  className="ui-input h-6 min-w-[140px] rounded-md px-1.5 text-[11px] font-semibold text-foreground"
                  value={inspectSidebarAgent?.model ?? ""}
                  onChange={(e) => {
                    const agentId = inspectSidebarAgent?.agentId;
                    const sessionKey = inspectSidebarAgent?.sessionKey;
                    if (!agentId || !sessionKey) return;
                    const next = e.target.value.trim();
                    onModelChange(agentId, sessionKey, next || null);
                  }}
                >
                  <option value="">Default (gateway)</option>
                  {allModels.map((m) => {
                    const key = `${m.provider}/${m.id}`;
                    return (
                      <option key={key} value={key}>
                        {m.name || key}
                        {m.reasoning ? " (Reasoning)" : ""}
                      </option>
                    );
                  })}
                </select>
              </label>
              {sidebarModel?.reasoning !== false ? (
                <label className="flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground">
                  <span className="font-semibold tracking-[0.04em]">Thinking</span>
                  <select
                    className="ui-input h-6 rounded-md px-1.5 text-[11px] font-semibold text-foreground"
                    value={inspectSidebarAgent?.thinkingLevel ?? ""}
                    onChange={(e) => {
                      const agentId = inspectSidebarAgent?.agentId;
                      const sessionKey = inspectSidebarAgent?.sessionKey;
                      if (!agentId || !sessionKey) return;
                      const next = e.target.value.trim();
                      onThinkingChange(agentId, sessionKey, next || null);
                    }}
                  >
                    {sidebarThinkingLevels.map((level) => (
                      <option key={level.value} value={level.value}>
                        {level.label}
                      </option>
                    ))}
                  </select>
                </label>
              ) : null}
            </div>
          </div>
          <div className="shrink-0 rounded-md border border-border/70 bg-surface-1 px-3 py-1 font-mono text-[11px] text-muted-foreground">
            [{personalityHasUnsavedChanges ? "Unsaved" : "Saved ✓"}]
          </div>
        </div>
        <div className="min-h-0 flex-1 overflow-hidden">
          {inspectSidebarAgent ? (
            effectiveSettingsTab === "personality" ? (
              <AgentBrainPanel
                client={gatewayClient}
                agents={agents}
                selectedAgentId={inspectSidebarAgent.agentId}
                onUnsavedChangesChange={onSetPersonalityHasUnsavedChanges}
              />
            ) : effectiveSettingsTab === "performance" ? (
              <div className="h-full overflow-y-auto px-6 py-6">
                <div className="mx-auto w-full max-w-[920px]">
                  <AgentPerformanceTab agent={inspectSidebarAgent} />
                </div>
              </div>
            ) : (
              <div className="h-full overflow-y-auto px-6 py-6">
                <div className="mx-auto w-full max-w-[920px]">
                  <AgentSettingsPanel
                    key={`${inspectSidebarAgent.agentId}:${effectiveSettingsTab}`}
                    gatewayClient={gatewayClient}
                    mode={
                      effectiveSettingsTab === "automations"
                        ? "automations"
                        : effectiveSettingsTab === "skills"
                          ? "skills"
                          : effectiveSettingsTab === "system"
                            ? "system"
                            : effectiveSettingsTab === "credentials"
                              ? "credentials"
                              : effectiveSettingsTab === "advanced"
                                ? "advanced"
                                : "capabilities"
                    }
                    showHeader={false}
                    agent={inspectSidebarAgent}
                    models={allModels}
                    onModelChange={(value) =>
                      onModelChange(
                        inspectSidebarAgent.agentId,
                        inspectSidebarAgent.sessionKey,
                        value,
                      )
                    }
                    onThinkingChange={(value) =>
                      onThinkingChange(
                        inspectSidebarAgent.agentId,
                        inspectSidebarAgent.sessionKey,
                        value,
                      )
                    }
                    onRename={(name) =>
                      onRenameAgent(inspectSidebarAgent.agentId, name)
                    }
                    onClose={onBackToChat}
                    permissionsDraft={settingsAgentPermissionsDraft ?? undefined}
                    onUpdateAgentPermissions={(draft) =>
                      onUpdateAgentPermissions(inspectSidebarAgent.agentId, draft)
                    }
                    onDelete={() => onDeleteAgent(inspectSidebarAgent.agentId)}
                    canDelete={inspectSidebarAgent.agentId !== RESERVED_MAIN_AGENT_ID}
                    skillsReport={settingsSkillsReport}
                    skillsLoading={settingsSkillsLoading}
                    skillsError={settingsSkillsError}
                    skillsBusy={settingsSkillsBusy}
                    skillsBusyKey={settingsSkillsBusyKey}
                    skillMessages={settingsSkillMessages}
                    skillApiKeyDrafts={settingsSkillApiKeyDrafts}
                    defaultAgentScopeWarning={settingsSkillScopeWarning}
                    systemInitialSkillKey={systemInitialSkillKey}
                    onSystemInitialSkillHandled={onSystemInitialSkillHandled}
                    skillsAllowlist={settingsAgentSkillsAllowlist}
                    onSetSkillEnabled={(skillName, enabled) =>
                      onSetSkillEnabled(inspectSidebarAgent.agentId, skillName, enabled)
                    }
                    onOpenSystemSetup={onOpenSystemSkillSetup}
                    onInstallSkill={(skillKey, name, installId) =>
                      onInstallSkill(inspectSidebarAgent.agentId, skillKey, name, installId)
                    }
                    onRemoveSkill={(skill) =>
                      onRemoveSkill(inspectSidebarAgent.agentId, skill)
                    }
                    onSkillApiKeyChange={(skillKey, value) =>
                      onSkillApiKeyChange(skillKey, value)
                    }
                    onSaveSkillApiKey={(skillKey) =>
                      onSaveSkillApiKey(inspectSidebarAgent.agentId, skillKey)
                    }
                    onSetSkillGlobalEnabled={(skillKey, enabled) =>
                      onSetSkillGlobalEnabled(inspectSidebarAgent.agentId, skillKey, enabled)
                    }
                    cronJobs={settingsCronJobs}
                    cronLoading={settingsCronLoading}
                    cronError={settingsCronError}
                    cronCreateBusy={cronCreateBusy}
                    cronRunBusyJobId={cronRunBusyJobId}
                    cronDeleteBusyJobId={cronDeleteBusyJobId}
                    onCreateCronJob={(draft) =>
                      onCreateCronJob(inspectSidebarAgent.agentId, draft)
                    }
                    onRunCronJob={(jobId) =>
                      onRunCronJob(inspectSidebarAgent.agentId, jobId)
                    }
                    onDeleteCronJob={(jobId) =>
                      onDeleteCronJob(inspectSidebarAgent.agentId, jobId)
                    }
                    controlUiUrl={controlUiUrl}
                    connectedChannels={
                      channelsByAgent.get(inspectSidebarAgent.agentId) ?? []
                    }
                  />
                </div>
              </div>
            )
          ) : (
            <EmptyStatePanel
              title={tp("agentNotFound")}
              description={tp("agentNotFoundDescription")}
              fillHeight
              className="items-center p-6 text-center text-sm"
            />
          )}
        </div>
      </div>
    </div>
  );
};
