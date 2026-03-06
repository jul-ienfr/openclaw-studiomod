"use client";

import {
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { Users, MessageSquare, BarChart3, Settings } from "lucide-react";

import { HeaderBar } from "@/features/agents/components/HeaderBar";
import { GatewayConnectScreen } from "@/features/agents/components/GatewayConnectScreen";
import { AgentSettingsRoutePage } from "@/features/agents/components/AgentSettingsRoutePage";
import { AgentChatWorkspace } from "@/features/agents/components/AgentChatWorkspace";
import { AgentStudioModals } from "@/features/agents/components/AgentStudioModals";
import { PROVIDER_REGISTRY } from "@/features/providers/providerRegistry";
import { ProviderStoreProvider } from "@/features/providers/ProviderStoreProvider";
import { AgentStoreProvider } from "@/features/agents/state/store";
import { createGatewayRuntimeEventHandler } from "@/features/agents/state/gatewayRuntimeEventHandler";
import { isGatewayDisconnectLikeError, type EventFrame } from "@/lib/gateway/GatewayClient";
import type { ConfigMutationKind } from "@/features/agents/operations/useConfigMutationQueue";
import { useConfigMutationQueue } from "@/features/agents/operations/useConfigMutationQueue";
import { useGatewayConfigSyncController } from "@/features/agents/operations/useGatewayConfigSyncController";
import { useAgentSettingsMutationController } from "@/features/agents/operations/useAgentSettingsMutationController";
import { useRuntimeSyncController } from "@/features/agents/operations/useRuntimeSyncController";
import { useChatInteractionController } from "@/features/agents/operations/useChatInteractionController";
import {
  SETTINGS_ROUTE_AGENT_ID_QUERY_PARAM,
  parseSettingsRouteAgentIdFromQueryParam,
  parseSettingsRouteAgentIdFromPathname,
  type InspectSidebarState,
  type SettingsRouteTab,
} from "@/features/agents/operations/settingsRouteWorkflow";
import { useSettingsRouteController } from "@/features/agents/operations/useSettingsRouteController";
import { resolveConfigMutationStatusLine } from "@/features/agents/operations/mutationLifecycleWorkflow";
import { useAgentSessions } from "@/features/agents/hooks/useAgentSessions";
import { useAgentGatewayController } from "@/features/agents/hooks/useAgentGatewayController";
import { useAgentFleetController } from "@/features/agents/hooks/useAgentFleetController";
import { useAgentApprovalController } from "@/features/agents/hooks/useAgentApprovalController";
import { usePanelOrchestrator, AgentPanelOrchestrator } from "@/features/agents/components/AgentPanelOrchestrator";

type MobilePane = "fleet" | "chat";
type SettingsSidebarItem = SettingsRouteTab;

const AgentStudioPage = () => {
  const tp = useTranslations("page");
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const settingsRouteAgentId = useMemo(
    () =>
      parseSettingsRouteAgentIdFromQueryParam(
        searchParams.get(SETTINGS_ROUTE_AGENT_ID_QUERY_PARAM),
      ) ?? parseSettingsRouteAgentIdFromPathname(pathname ?? ""),
    [pathname, searchParams],
  );
  const settingsRouteActive = settingsRouteAgentId !== null;

  const gateway = useAgentGatewayController();
  const panels = usePanelOrchestrator();

  const [mobilePane, setMobilePane] = useState<MobilePane>("chat");
  const [inspectSidebar, setInspectSidebar] = useState<InspectSidebarState>(null);
  const [settingsSidebarItem, setSettingsSidebarItem] = useState<SettingsSidebarItem>("personality");

  const inspectSidebarAgentId = inspectSidebar?.agentId ?? null;
  const inspectSidebarTab = inspectSidebar?.tab ?? null;
  const effectiveSettingsTab: SettingsRouteTab = inspectSidebarTab ?? "personality";

  useEffect(() => { setSettingsSidebarItem(effectiveSettingsTab); }, [effectiveSettingsTab]);

  const enqueueConfigMutationRef = useRef<
    (params: { kind: ConfigMutationKind; label: string; run: () => Promise<void>; requiresIdleAgents?: boolean }) => Promise<void>
  >((input) => Promise.reject(new Error(`Config mutation queue not ready for "${input.kind}".`)));
  const runtimeEventHandlerRef = useRef<ReturnType<typeof createGatewayRuntimeEventHandler> | null>(null);
  const enqueueConfigMutationFromRef = useCallback(
    (mutation: { kind: ConfigMutationKind; label: string; run: () => Promise<void> }) =>
      enqueueConfigMutationRef.current(mutation),
    [],
  );

  const fleet = useAgentFleetController({
    client: gateway.client, status: gateway.status, gatewayUrl: gateway.gatewayUrl,
    gatewayConfigSnapshot: gateway.gatewayConfigSnapshot,
    setGatewayConfigSnapshot: gateway.setGatewayConfigSnapshot,
    settingsCoordinator: gateway.settingsCoordinator, isLocalGateway: gateway.isLocalGateway,
    allModels: gateway.allModels, enqueueConfigMutation: enqueueConfigMutationFromRef,
    hasRenameMutationBlockRef: { current: false }, hasDeleteMutationBlockRef: { current: false }, restartingMutationBlockRef: { current: null },
    refreshGatewayConfigSnapshotRef: { current: async () => {} }, inspectSidebarAgentId, setInspectSidebar,
    flushPendingDraftRef: { current: () => {} }, setMobilePaneChat: () => setMobilePane("chat"),
    handleSettingsRouteTabChangeRef: { current: () => {} }, settingsRouteActive,
  });

  const { refreshGatewayConfigSnapshot } = useGatewayConfigSyncController({
    client: gateway.client, status: gateway.status, settingsRouteActive, inspectSidebarAgentId,
    gatewayConfigSnapshot: gateway.gatewayConfigSnapshot,
    setGatewayConfigSnapshot: gateway.setGatewayConfigSnapshot,
    setGatewayModels: gateway.setGatewayModels, setGatewayModelsError: gateway.setGatewayModelsError,
    enqueueConfigMutation: enqueueConfigMutationFromRef, loadAgents: fleet.loadAgents,
    isDisconnectLikeError: isGatewayDisconnectLikeError,
  });

  const settingsMutationController = useAgentSettingsMutationController({
    client: gateway.client, status: gateway.status, isLocalGateway: gateway.isLocalGateway,
    agents: fleet.agents, hasCreateBlock: Boolean(fleet.createAgentBlock),
    enqueueConfigMutation: enqueueConfigMutationFromRef,
    gatewayConfigSnapshot: gateway.gatewayConfigSnapshot,
    settingsRouteActive, inspectSidebarAgentId, inspectSidebarTab,
    loadAgents: fleet.loadAgents, refreshGatewayConfigSnapshot,
    clearInspectSidebar: () => setInspectSidebar(null),
    setInspectSidebarCapabilities: (agentId) => {
      setInspectSidebar((cur) => cur?.agentId === agentId ? cur : { agentId, tab: "capabilities" });
    },
    dispatchUpdateAgent: (agentId, patch) => fleet.dispatch({ type: "updateAgent", agentId, patch }),
    setMobilePaneChat: () => setMobilePane("chat"),
    setError: () => {},
  });

  const hasRestartBlockInProgress = Boolean(
    settingsMutationController.hasRestartBlockInProgress ||
      (fleet.createAgentBlock && fleet.createAgentBlock.phase !== "queued"),
  );
  const restartingMutationBlock = settingsMutationController.restartingMutationBlock;

  const { enqueueConfigMutation, queuedCount: queuedConfigMutationCount, queuedBlockedByRunningAgents, activeConfigMutation } =
    useConfigMutationQueue({ status: gateway.status, hasRunningAgents: fleet.hasRunningAgents, hasRestartBlockInProgress });
  enqueueConfigMutationRef.current = enqueueConfigMutation;

  const { loadSummarySnapshot, loadAgentHistory, loadMoreAgentHistory, clearHistoryInFlight } =
    useRuntimeSyncController({
      client: gateway.client, status: gateway.status, agents: fleet.agents,
      focusedAgentId: fleet.focusedAgentId, focusedAgentRunning: fleet.focusedAgentRunning,
      dispatch: fleet.dispatch,
      clearRunTracking: (runId) => { runtimeEventHandlerRef.current?.clearRunTracking(runId); },
      isDisconnectLikeError: isGatewayDisconnectLikeError,
    });

  const { stopBusyAgentId, flushPendingDraft, handleDraftChange, handleSend, removeQueuedMessage,
    handleNewSession, handleSelectSession, handleStopRun, queueLivePatch, clearPendingLivePatch } =
    useChatInteractionController({
      client: gateway.client, status: gateway.status, agents: fleet.agents,
      dispatch: fleet.dispatch, setError: () => {},
      getAgents: () => fleet.stateRef.current.agents,
      clearRunTracking: (runId) => { runtimeEventHandlerRef.current?.clearRunTracking(runId); },
      clearHistoryInFlight,
      clearSpecialUpdateMarker: (agentId) => { fleet.specialUpdateRef.current.delete(agentId); },
      clearSpecialLatestUpdateInFlight: (agentId) => { fleet.specialLatestUpdate.clearInFlight(agentId); },
      setInspectSidebarNull: () => setInspectSidebar(null),
      setMobilePaneChat: () => setMobilePane("chat"),
    });

  const approval = useAgentApprovalController({
    client: gateway.client, status: gateway.status, agents: fleet.agents,
    focusedAgentId: fleet.focusedAgentId, dispatch: fleet.dispatch,
    loadAgentHistory,
    clearRunTracking: (runId) => runtimeEventHandlerRef.current?.clearRunTracking(runId),
  });

  const { handleBackToChat, handleSettingsRouteTabChange, handleOpenAgentSettingsRoute, handleFleetSelectAgent } =
    useSettingsRouteController({
      settingsRouteActive, settingsRouteAgentId, status: gateway.status,
      agentsLoadedOnce: fleet.agentsLoadedOnce, selectedAgentId: fleet.state.selectedAgentId,
      focusedAgentId: fleet.focusedAgent?.agentId ?? null,
      personalityHasUnsavedChanges: fleet.personalityHasUnsavedChanges,
      activeTab: effectiveSettingsTab, inspectSidebar, agents: fleet.agents,
      flushPendingDraft,
      dispatchSelectAgent: (agentId) => fleet.dispatch({ type: "selectAgent", agentId }),
      setInspectSidebar, setMobilePaneChat: () => setMobilePane("chat"),
      setPersonalityHasUnsavedChanges: fleet.setPersonalityHasUnsavedChanges,
      push: router.push, replace: router.replace,
      confirmDiscard: () => window.confirm("Discard changes?"),
    });

  useEffect(() => {
    const handler = createGatewayRuntimeEventHandler({
      getStatus: () => gateway.status,
      getAgents: () => fleet.stateRef.current.agents,
      dispatch: fleet.dispatch, queueLivePatch, clearPendingLivePatch, loadSummarySnapshot,
      requestHistoryRefresh: ({ agentId }) => loadAgentHistory(agentId),
      refreshHeartbeatLatestUpdate: () => {
        fleet.specialLatestUpdate.refreshHeartbeat(fleet.stateRef.current.agents);
      },
      bumpHeartbeatTick: () => fleet.setHeartbeatTick((prev) => prev + 1),
      setTimeout: (fn, delayMs) => window.setTimeout(fn, delayMs),
      clearTimeout: (id) => window.clearTimeout(id),
      isDisconnectLikeError: isGatewayDisconnectLikeError,
      logWarn: (message, meta) => console.warn(message, meta),
      shouldSuppressRunAbortedLine: ({ agentId, runId, stopReason }) => {
        if (stopReason !== "rpc") return false;
        const nRunId = runId?.trim() ?? "";
        if (!nRunId) return false;
        const pausedRunId = approval.approvalPausedRunIdByAgentRef.current.get(agentId)?.trim() ?? "";
        return pausedRunId.length > 0 && pausedRunId === nRunId;
      },
      updateSpecialLatestUpdate: (agentId, agent, message) => {
        void fleet.specialLatestUpdate.update(agentId, agent, message);
      },
    });
    runtimeEventHandlerRef.current = handler;
    const unsubscribe = gateway.client.onEvent((event: EventFrame) => {
      handler.handleEvent(event);
      approval.handleGatewayEventIngress(event);
    });
    return () => { runtimeEventHandlerRef.current = null; handler.dispose(); unsubscribe(); };
  }, [
    gateway.client, gateway.status, fleet.dispatch, fleet.stateRef, fleet.specialLatestUpdate,
    fleet.setHeartbeatTick, loadAgentHistory, loadSummarySnapshot, clearPendingLivePatch,
    queueLivePatch, approval.handleGatewayEventIngress, approval.approvalPausedRunIdByAgentRef,
  ]);

  const { sessions: focusedAgentSessions, loading: focusedAgentSessionsLoading, refresh: refreshFocusedAgentSessions } =
    useAgentSessions({ client: gateway.client, agentId: fleet.focusedAgent?.agentId ?? "", status: gateway.status });
  useEffect(() => {
    if (fleet.focusedAgent?.agentId) void refreshFocusedAgentSessions();
  }, [fleet.focusedAgent?.agentId, refreshFocusedAgentSessions]);

  // Derived status lines
  const errorMessage = fleet.state.error ?? gateway.gatewayModelsError;
  const configMutationStatusLine = activeConfigMutation
    ? `Applying config change: ${activeConfigMutation.label}`
    : queuedConfigMutationCount > 0
      ? queuedBlockedByRunningAgents
        ? `Queued ${queuedConfigMutationCount} config change${queuedConfigMutationCount === 1 ? "" : "s"}; waiting for ${fleet.runningAgentCount} running agent${fleet.runningAgentCount === 1 ? "" : "s"} to finish`
        : gateway.status !== "connected"
          ? `Queued ${queuedConfigMutationCount} config change${queuedConfigMutationCount === 1 ? "" : "s"}; waiting for gateway connection`
          : `Queued ${queuedConfigMutationCount} config change${queuedConfigMutationCount === 1 ? "" : "s"}`
      : null;
  const createBlockStatusLine = fleet.createAgentBlock
    ? fleet.createAgentBlock.phase === "queued"
      ? "Waiting for active runs to finish"
      : fleet.createAgentBlock.phase === "creating" ? "Submitting config change" : null
    : null;
  const restartingMutationStatusLine = resolveConfigMutationStatusLine({
    block: restartingMutationBlock ? { phase: restartingMutationBlock.phase, sawDisconnect: restartingMutationBlock.sawDisconnect } : null,
    status: gateway.status,
  });
  const restartingMutationModalTestId = restartingMutationBlock
    ? restartingMutationBlock.kind === "delete-agent" ? "agent-delete-restart-modal" : "agent-rename-restart-modal"
    : null;
  const restartingMutationAriaLabel = restartingMutationBlock
    ? restartingMutationBlock.kind === "delete-agent" ? "Deleting agent and restarting gateway" : "Renaming agent and restarting gateway"
    : null;
  const restartingMutationHeading = restartingMutationBlock
    ? restartingMutationBlock.kind === "delete-agent" ? "Agent delete in progress" : "Agent rename in progress"
    : null;
  const hasAnyAgents = fleet.agents.length > 0;

  // Boot / connect / loading early returns
  const headerBarProps = {
    status: gateway.status,
    configuredProviderCount: gateway.configuredProviderIds.length,
    totalProviderCount: PROVIDER_REGISTRY.length,
  };
  if (!fleet.agentsLoadedOnce && (!fleet.didAttemptGatewayConnect || gateway.status === "connecting")) {
    return (
      <div className="relative min-h-screen w-full overflow-hidden bg-background">
        <div className="flex min-h-screen items-center justify-center px-6">
          <div className="glass-panel ui-panel w-full max-w-md px-6 py-6 text-center">
            <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">OpenClaw Studio</div>
            <div className="mt-3 text-sm text-muted-foreground">
              {gateway.status === "connecting" ? tp("connectingGateway") : tp("bootingStudio")}
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (gateway.status === "disconnected" && !fleet.agentsLoadedOnce && fleet.didAttemptGatewayConnect) {
    return (
      <div className="relative min-h-screen w-full overflow-hidden bg-background">
        <div className="relative z-10 flex h-screen flex-col">
          <HeaderBar {...headerBarProps} onConnectionSettings={panels.headerCallbacksOpen.onConnectionSettings}
            onProviders={panels.headerCallbacksOpen.onProviders} onChannels={panels.headerCallbacksOpen.onChannels}
            onRouting={panels.headerCallbacksOpen.onRouting} onWebhooks={panels.headerCallbacksOpen.onWebhooks}
            onSkills={panels.headerCallbacksOpen.onSkills} onAnalytics={panels.headerCallbacksOpen.onAnalytics}
            onLogs={panels.headerCallbacksOpen.onLogs} onCanvas={panels.headerCallbacksOpen.onCanvas}
            onIntercom={panels.headerCallbacksOpen.onIntercom} onVoice={panels.headerCallbacksOpen.onVoice} />
          <div className="flex min-h-0 flex-1 flex-col gap-4 px-3 pb-3 pt-3 sm:px-4 sm:pb-4 sm:pt-4 md:px-6 md:pb-6 md:pt-4">
            {settingsRouteActive ? (
              <div className="w-full">
                <button type="button" className="ui-btn-secondary px-3 py-1.5 font-mono text-[10px] font-semibold tracking-[0.06em]" onClick={handleBackToChat}>
                  {tp("backToChat")}
                </button>
              </div>
            ) : null}
            <GatewayConnectScreen gatewayUrl={gateway.gatewayUrl} token={gateway.token}
              localGatewayDefaults={gateway.localGatewayDefaults} status={gateway.status}
              error={gateway.gatewayError} onGatewayUrlChange={gateway.setGatewayUrl}
              onTokenChange={gateway.setToken} onUseLocalDefaults={gateway.useLocalGatewayDefaults}
              onConnect={() => void gateway.connect()} />
          </div>
        </div>
      </div>
    );
  }
  if (gateway.status === "connected" && !fleet.agentsLoadedOnce) {
    return (
      <div className="relative min-h-screen w-full overflow-hidden bg-background">
        <div className="flex min-h-screen items-center justify-center px-6">
          <div className="glass-panel ui-panel w-full max-w-md px-6 py-6 text-center">
            <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">OpenClaw Studio</div>
            <div className="mt-3 text-sm text-muted-foreground">Loading agents…</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      {fleet.state.loading ? (
        <div className="pointer-events-none fixed bottom-4 left-0 right-0 z-50 flex justify-center px-3">
          <div className="glass-panel ui-card px-6 py-3 font-mono text-[11px] tracking-[0.08em] text-muted-foreground">Loading agents…</div>
        </div>
      ) : null}
      <div className="relative z-10 flex h-screen flex-col">
        <HeaderBar {...headerBarProps} onConnectionSettings={panels.headerCallbacks.onConnectionSettings}
          onProviders={panels.headerCallbacks.onProviders} onChannels={panels.headerCallbacks.onChannels}
          onRouting={panels.headerCallbacks.onRouting} onWebhooks={panels.headerCallbacks.onWebhooks}
          onSkills={panels.headerCallbacks.onSkills} onAnalytics={panels.headerCallbacks.onAnalytics}
          onLogs={panels.headerCallbacks.onLogs} onCanvas={panels.headerCallbacks.onCanvas}
          onIntercom={panels.headerCallbacks.onIntercom} onVoice={panels.headerCallbacks.onVoice} />
        <div className="flex min-h-0 flex-1 flex-col gap-3 px-3 pb-3 pt-2 sm:px-4 sm:pb-4 sm:pt-3 md:px-5 md:pb-5 md:pt-3">
          <AgentPanelOrchestrator visibility={panels.visibility} closers={panels.closers}
            gatewayUrl={gateway.gatewayUrl} token={gateway.token} status={gateway.status}
            gatewayError={gateway.gatewayError} setGatewayUrl={gateway.setGatewayUrl}
            setToken={gateway.setToken} connect={gateway.connect} disconnect={gateway.disconnect}
            agents={fleet.agents} />
          {errorMessage ? (
            <div className="w-full"><div className="ui-alert-danger rounded-md px-4 py-2 text-sm">{errorMessage}</div></div>
          ) : null}
          {configMutationStatusLine ? (
            <div className="w-full"><div className="ui-card px-4 py-2 font-mono text-[11px] tracking-[0.07em] text-muted-foreground">{configMutationStatusLine}</div></div>
          ) : null}
          {settingsRouteActive ? (
            <AgentSettingsRoutePage
              inspectSidebarAgent={fleet.inspectSidebarAgent ?? null}
              settingsRouteAgentId={settingsRouteAgentId}
              effectiveSettingsTab={effectiveSettingsTab}
              activeSettingsSidebarItem={settingsSidebarItem}
              personalityHasUnsavedChanges={fleet.personalityHasUnsavedChanges}
              allModels={gateway.allModels} gatewayClient={gateway.client}
              settingsAgentPermissionsDraft={fleet.settingsAgentPermissionsDraft ?? null}
              settingsSkillScopeWarning={fleet.settingsSkillScopeWarning ?? null}
              systemInitialSkillKey={fleet.systemInitialSkillKey}
              settingsAgentSkillsAllowlist={fleet.settingsAgentSkillsAllowlist}
              settingsSkillsReport={settingsMutationController.settingsSkillsReport}
              settingsSkillsLoading={settingsMutationController.settingsSkillsLoading}
              settingsSkillsError={settingsMutationController.settingsSkillsError}
              settingsSkillsBusy={settingsMutationController.settingsSkillsBusy}
              settingsSkillsBusyKey={settingsMutationController.settingsSkillsBusyKey}
              settingsSkillMessages={settingsMutationController.settingsSkillMessages}
              settingsSkillApiKeyDrafts={settingsMutationController.settingsSkillApiKeyDrafts}
              settingsCronJobs={settingsMutationController.settingsCronJobs}
              settingsCronLoading={settingsMutationController.settingsCronLoading}
              settingsCronError={settingsMutationController.settingsCronError}
              cronCreateBusy={settingsMutationController.cronCreateBusy}
              cronRunBusyJobId={settingsMutationController.cronRunBusyJobId}
              cronDeleteBusyJobId={settingsMutationController.cronDeleteBusyJobId}
              controlUiUrl={gateway.controlUiUrl} channelsByAgent={fleet.channelsByAgent}
              agents={fleet.agents} onBackToChat={handleBackToChat}
              onTabChange={handleSettingsRouteTabChange} onSetSidebarItem={setSettingsSidebarItem}
              onModelChange={(id, sk, v) => fleet.handleModelChange(id, sk, v)}
              onThinkingChange={(id, sk, v) => fleet.handleThinkingChange(id, sk, v)}
              onSetPersonalityHasUnsavedChanges={fleet.setPersonalityHasUnsavedChanges}
              onRenameAgent={(id, name) => settingsMutationController.handleRenameAgent(id, name)}
              onUpdateAgentPermissions={(id, draft) => settingsMutationController.handleUpdateAgentPermissions(id, draft)}
              onDeleteAgent={(id) => settingsMutationController.handleDeleteAgent(id)}
              onSystemInitialSkillHandled={() => fleet.setSystemInitialSkillKey(null)}
              onSetSkillEnabled={(id, sk, en) => settingsMutationController.handleSetSkillEnabled(id, sk, en)}
              onOpenSystemSkillSetup={fleet.handleOpenSystemSkillSetup}
              onInstallSkill={(id, sk, n, iid) => settingsMutationController.handleInstallSkill(id, sk, n, iid)}
              onRemoveSkill={(id, skill) => settingsMutationController.handleRemoveSkill(id, skill)}
              onSkillApiKeyChange={(sk, v) => settingsMutationController.handleSkillApiKeyDraftChange(sk, v)}
              onSaveSkillApiKey={(id, sk) => settingsMutationController.handleSaveSkillApiKey(id, sk)}
              onSetSkillGlobalEnabled={(id, sk, en) => settingsMutationController.handleSetSkillGlobalEnabled(id, sk, en)}
              onCreateCronJob={(id, draft) => settingsMutationController.handleCreateCronJob(id, draft)}
              onRunCronJob={(id, jid) => settingsMutationController.handleRunCronJob(id, jid)}
              onDeleteCronJob={(id, jid) => settingsMutationController.handleDeleteCronJob(id, jid)}
            />
          ) : (
            <AgentChatWorkspace
              mobilePane={mobilePane} onMobilePaneChange={setMobilePane}
              filteredAgents={fleet.filteredAgents}
              focusedAgentId={fleet.focusedAgent?.agentId ?? null}
              selectedAgentId={fleet.state.selectedAgentId}
              focusFilter={fleet.focusFilter} onFilterChange={fleet.handleFocusFilterChange}
              onCreateAgent={fleet.handleOpenCreateAgentModal}
              createDisabled={gateway.status !== "connected" || fleet.createAgentBusy || fleet.state.loading}
              createBusy={fleet.createAgentBusy} onSelectAgent={handleFleetSelectAgent}
              channelsByAgent={fleet.channelsByAgent} focusedAgent={fleet.focusedAgent ?? null}
              allAgents={fleet.agents} hasAnyAgents={hasAnyAgents}
              gatewayStatus={gateway.status} gatewayModels={gateway.gatewayModels}
              stopBusyAgentId={stopBusyAgentId}
              focusedAgentStopDisabledReason={fleet.focusedAgentStopDisabledReason}
              focusedAgentSessions={focusedAgentSessions}
              focusedAgentSessionsLoading={focusedAgentSessionsLoading}
              pendingExecApprovals={approval.focusedPendingExecApprovals}
              onLoadMoreHistory={loadMoreAgentHistory}
              onOpenSettings={handleOpenAgentSettingsRoute}
              onRenameAgent={(id, name) => settingsMutationController.handleRenameAgent(id, name)}
              onNewSession={handleNewSession} onSelectSession={handleSelectSession}
              onRefreshSessions={refreshFocusedAgentSessions}
              onModelChange={(id, sk, v) => fleet.handleModelChange(id, sk, v)}
              onThinkingChange={(id, sk, v) => fleet.handleThinkingChange(id, sk, v)}
              onToolCallingToggle={fleet.handleToolCallingToggle}
              onThinkingTracesToggle={fleet.handleThinkingTracesToggle}
              onHideSystemMessagesToggle={fleet.handleHideSystemMessagesToggle}
              onDraftChange={handleDraftChange}
              onSend={(id, sk, msg, att, opts) => { void handleSend(id, sk, msg, att, opts); }}
              onRemoveQueuedMessage={removeQueuedMessage}
              onStopRun={handleStopRun} onAvatarShuffle={fleet.handleAvatarShuffle}
              onResolveExecApproval={(id, decision) => { void approval.handleResolveExecApproval(id, decision); }}
            />
          )}
        </div>
      </div>
      <AgentStudioModals
        createAgentModalOpen={fleet.createAgentModalOpen}
        suggestedCreateAgentName={fleet.suggestedCreateAgentName}
        createAgentBusy={fleet.createAgentBusy}
        createAgentModalError={fleet.createAgentModalError}
        allModels={gateway.allModels}
        onCloseCreateModal={() => {
          if (fleet.createAgentBusy) return;
          fleet.setCreateAgentModalError(null);
          fleet.setCreateAgentModalOpen(false);
        }}
        onSubmitCreateAgent={(payload) => { void fleet.handleCreateAgentSubmit(payload); }}
        createAgentBlock={fleet.createAgentBlock ?? null}
        createBlockStatusLine={createBlockStatusLine}
        restartingMutationBlock={restartingMutationBlock ?? null}
        restartingMutationStatusLine={restartingMutationStatusLine}
        restartingMutationModalTestId={restartingMutationModalTestId}
        restartingMutationAriaLabel={restartingMutationAriaLabel}
        restartingMutationHeading={restartingMutationHeading}
      />
      <nav className="mobile-bottom-nav" aria-label="Mobile navigation">
        <button type="button" className="mobile-bottom-nav-item"
          data-active={mobilePane === "fleet" && !inspectSidebar ? "true" : "false"}
          onClick={() => { setMobilePane("fleet"); setInspectSidebar(null); }}>
          <Users /><span>{tp("fleet")}</span>
        </button>
        <button type="button" className="mobile-bottom-nav-item"
          data-active={mobilePane === "chat" && !inspectSidebar ? "true" : "false"}
          onClick={() => { setMobilePane("chat"); setInspectSidebar(null); }}>
          <MessageSquare /><span>{tp("chat")}</span>
        </button>
        <button type="button" className="mobile-bottom-nav-item"
          data-active={panels.visibility.showAnalytics ? "true" : "false"}
          onClick={() => panels.setShowAnalytics((v) => !v)}>
          <BarChart3 /><span>{tp("analytics")}</span>
        </button>
        <button type="button" className="mobile-bottom-nav-item"
          data-active={!!inspectSidebar ? "true" : "false"}
          onClick={() => { if (fleet.focusedAgent) handleOpenAgentSettingsRoute(fleet.focusedAgent.agentId); }}>
          <Settings /><span>{tp("settings")}</span>
        </button>
      </nav>
    </div>
  );
};

export default function Home() {
  return (
    <ProviderStoreProvider>
      <AgentStoreProvider>
        <Suspense>
          <AgentStudioPage />
        </Suspense>
      </AgentStoreProvider>
    </ProviderStoreProvider>
  );
}
