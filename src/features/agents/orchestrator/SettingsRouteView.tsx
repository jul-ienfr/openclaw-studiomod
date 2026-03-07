import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import { EmptyStatePanel } from "@/features/agents/components/EmptyStatePanel";
import type { AgentState } from "@/features/agents/state/store";
import type { GatewayModelChoice } from "@/lib/gateway/models";
import { getThinkingLevels } from "@/lib/gateway/models";
import type { GatewayClient } from "@/lib/gateway/GatewayClient";
import type { SettingsRouteTab } from "@/features/agents/operations/settingsRouteWorkflow";
import type { useAgentSettingsMutationController } from "@/features/agents/operations/useAgentSettingsMutationController";
import type { AgentPermissionsDraft } from "@/features/agents/operations/agentPermissionsOperation";
import type { AgentChannelLink } from "@/features/routing/agentChannelResolver";
import { RESERVED_MAIN_AGENT_ID } from "./utils";

const AgentBrainPanel = dynamic(
  () =>
    import("@/features/agents/components/AgentInspectPanels").then(
      (m) => m.AgentBrainPanel,
    ),
  { ssr: false },
);
const AgentSettingsPanel = dynamic(
  () =>
    import("@/features/agents/components/AgentInspectPanels").then(
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

type SettingsSidebarItem = SettingsRouteTab;

export interface SettingsRouteViewProps {
  client: GatewayClient;
  agents: AgentState[];
  inspectSidebarAgent: AgentState | null;
  settingsRouteAgentId: string | null;
  effectiveSettingsTab: SettingsRouteTab;
  activeSettingsSidebarItem: SettingsSidebarItem;
  personalityHasUnsavedChanges: boolean;
  allModels: GatewayModelChoice[];
  settingsAgentPermissionsDraft: AgentPermissionsDraft | null;
  settingsAgentSkillsAllowlist: string[] | undefined;
  settingsSkillScopeWarning: string | null;
  systemInitialSkillKey: string | null;
  controlUiUrl: string | null;
  channelsByAgent: Map<string, AgentChannelLink[]>;
  settingsMutationController: ReturnType<
    typeof useAgentSettingsMutationController
  >;
  onBackToChat: () => void;
  onSettingsSidebarItemChange: (item: SettingsSidebarItem) => void;
  onSettingsRouteTabChange: (tab: SettingsRouteTab) => void;
  onModelChange: (
    agentId: string,
    sessionKey: string,
    value: string | null,
  ) => void;
  onThinkingChange: (
    agentId: string,
    sessionKey: string,
    value: string | null,
  ) => void;
  onPersonalityUnsavedChange: (hasChanges: boolean) => void;
  onSystemInitialSkillHandled: () => void;
  onOpenSystemSkillSetup: (skillKey?: string) => void;
}

export function SettingsRouteView({
  client,
  agents,
  inspectSidebarAgent,
  settingsRouteAgentId,
  effectiveSettingsTab,
  activeSettingsSidebarItem,
  personalityHasUnsavedChanges,
  allModels,
  settingsAgentPermissionsDraft,
  settingsAgentSkillsAllowlist,
  settingsSkillScopeWarning,
  systemInitialSkillKey,
  controlUiUrl,
  channelsByAgent,
  settingsMutationController,
  onBackToChat,
  onSettingsSidebarItemChange,
  onSettingsRouteTabChange,
  onModelChange,
  onThinkingChange,
  onPersonalityUnsavedChange,
  onSystemInitialSkillHandled,
  onOpenSystemSkillSetup,
}: SettingsRouteViewProps) {
  const tp = useTranslations("page");

  const settingsTabs = [
    { id: "personality", label: "Behavior" },
    { id: "capabilities", label: "Capabilities" },
    { id: "skills", label: "Skills" },
    { id: "system", label: "System setup" },
    { id: "automations", label: "Automations" },
    { id: "credentials", label: "Credentials" },
    { id: "performance", label: "Performance" },
    { id: "advanced", label: "Advanced" },
  ] as const;

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
          {settingsTabs.map((entry) => {
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
                  onSettingsSidebarItemChange(entry.id);
                  onSettingsRouteTabChange(entry.id);
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
              {inspectSidebarAgent?.name ??
                settingsRouteAgentId ??
                "Agent settings"}
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
                    void onModelChange(agentId, sessionKey, next || null);
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
              {(() => {
                const sidebarModel = allModels.find(
                  (m) => `${m.provider}/${m.id}` === inspectSidebarAgent?.model,
                );
                if (sidebarModel?.reasoning === false) return null;
                const sidebarThinkingLevels = getThinkingLevels(
                  inspectSidebarAgent?.model ?? "",
                  sidebarModel?.reasoning,
                );
                return (
                  <label className="flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground">
                    <span className="font-semibold tracking-[0.04em]">
                      Thinking
                    </span>
                    <select
                      className="ui-input h-6 rounded-md px-1.5 text-[11px] font-semibold text-foreground"
                      value={inspectSidebarAgent?.thinkingLevel ?? ""}
                      onChange={(e) => {
                        const agentId = inspectSidebarAgent?.agentId;
                        const sessionKey = inspectSidebarAgent?.sessionKey;
                        if (!agentId || !sessionKey) return;
                        const next = e.target.value.trim();
                        void onThinkingChange(
                          agentId,
                          sessionKey,
                          next || null,
                        );
                      }}
                    >
                      {sidebarThinkingLevels.map((level) => (
                        <option key={level.value} value={level.value}>
                          {level.label}
                        </option>
                      ))}
                    </select>
                  </label>
                );
              })()}
            </div>
          </div>
          <div className="shrink-0 rounded-md border border-border/70 bg-surface-1 px-3 py-1 font-mono text-[11px] text-muted-foreground">
            [{personalityHasUnsavedChanges ? "Unsaved" : "Saved \u2713"}]
          </div>
        </div>
        <div className="min-h-0 flex-1 overflow-hidden">
          {inspectSidebarAgent ? (
            effectiveSettingsTab === "personality" ? (
              <AgentBrainPanel
                client={client}
                agents={agents}
                selectedAgentId={inspectSidebarAgent.agentId}
                onUnsavedChangesChange={onPersonalityUnsavedChange}
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
                    gatewayClient={client}
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
                      settingsMutationController.handleRenameAgent(
                        inspectSidebarAgent.agentId,
                        name,
                      )
                    }
                    onClose={onBackToChat}
                    permissionsDraft={
                      settingsAgentPermissionsDraft ?? undefined
                    }
                    onUpdateAgentPermissions={(draft) =>
                      settingsMutationController.handleUpdateAgentPermissions(
                        inspectSidebarAgent.agentId,
                        draft,
                      )
                    }
                    onDelete={() =>
                      settingsMutationController.handleDeleteAgent(
                        inspectSidebarAgent.agentId,
                      )
                    }
                    canDelete={
                      inspectSidebarAgent.agentId !== RESERVED_MAIN_AGENT_ID
                    }
                    skillsReport={
                      settingsMutationController.settingsSkillsReport
                    }
                    skillsLoading={
                      settingsMutationController.settingsSkillsLoading
                    }
                    skillsError={settingsMutationController.settingsSkillsError}
                    skillsBusy={settingsMutationController.settingsSkillsBusy}
                    skillsBusyKey={
                      settingsMutationController.settingsSkillsBusyKey
                    }
                    skillMessages={
                      settingsMutationController.settingsSkillMessages
                    }
                    skillApiKeyDrafts={
                      settingsMutationController.settingsSkillApiKeyDrafts
                    }
                    defaultAgentScopeWarning={settingsSkillScopeWarning}
                    systemInitialSkillKey={systemInitialSkillKey}
                    onSystemInitialSkillHandled={onSystemInitialSkillHandled}
                    skillsAllowlist={settingsAgentSkillsAllowlist}
                    onSetSkillEnabled={(skillName, enabled) =>
                      settingsMutationController.handleSetSkillEnabled(
                        inspectSidebarAgent.agentId,
                        skillName,
                        enabled,
                      )
                    }
                    onOpenSystemSetup={onOpenSystemSkillSetup}
                    onInstallSkill={(skillKey, name, installId) =>
                      settingsMutationController.handleInstallSkill(
                        inspectSidebarAgent.agentId,
                        skillKey,
                        name,
                        installId,
                      )
                    }
                    onRemoveSkill={(skill) =>
                      settingsMutationController.handleRemoveSkill(
                        inspectSidebarAgent.agentId,
                        skill,
                      )
                    }
                    onSkillApiKeyChange={(skillKey, value) =>
                      settingsMutationController.handleSkillApiKeyDraftChange(
                        skillKey,
                        value,
                      )
                    }
                    onSaveSkillApiKey={(skillKey) =>
                      settingsMutationController.handleSaveSkillApiKey(
                        inspectSidebarAgent.agentId,
                        skillKey,
                      )
                    }
                    onSetSkillGlobalEnabled={(skillKey, enabled) =>
                      settingsMutationController.handleSetSkillGlobalEnabled(
                        inspectSidebarAgent.agentId,
                        skillKey,
                        enabled,
                      )
                    }
                    cronJobs={settingsMutationController.settingsCronJobs}
                    cronLoading={settingsMutationController.settingsCronLoading}
                    cronError={settingsMutationController.settingsCronError}
                    cronCreateBusy={settingsMutationController.cronCreateBusy}
                    cronRunBusyJobId={
                      settingsMutationController.cronRunBusyJobId
                    }
                    cronDeleteBusyJobId={
                      settingsMutationController.cronDeleteBusyJobId
                    }
                    onCreateCronJob={(draft) =>
                      settingsMutationController.handleCreateCronJob(
                        inspectSidebarAgent.agentId,
                        draft,
                      )
                    }
                    onRunCronJob={(jobId) =>
                      settingsMutationController.handleRunCronJob(
                        inspectSidebarAgent.agentId,
                        jobId,
                      )
                    }
                    onDeleteCronJob={(jobId) =>
                      settingsMutationController.handleDeleteCronJob(
                        inspectSidebarAgent.agentId,
                        jobId,
                      )
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
}
