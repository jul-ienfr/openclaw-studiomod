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
import { HeaderBar } from "@/features/agents/components/HeaderBar";
import { BrowserViewPanel } from "@/features/browser/components/BrowserViewPanel";
import { getChannelsByAgent } from "@/features/routing/agentChannelResolver";
import { useTranslations } from "next-intl";
import { isHeartbeatPrompt } from "@/lib/text/message-extract";
import { useSharedGatewayConnection } from "@/lib/gateway/GatewayConnectionProvider";
import {
  type GatewayModelChoice,
  type GatewayModelPolicySnapshot,
  buildStaticModelCatalog,
  mergeModelCatalogs,
  filterModelsByConfiguredProviders,
} from "@/lib/gateway/models";
import { PROVIDER_REGISTRY } from "@/features/providers/providerRegistry";
import { ProviderStoreProvider } from "@/features/providers/ProviderStoreProvider";
import { useProviderStore } from "@/features/providers/providerStore";
import {
  AgentStoreProvider,
  getFilteredAgents,
  getSelectedAgent,
  type FocusFilter,
  useAgentStore,
} from "@/features/agents/state/store";
import { isGatewayDisconnectLikeError } from "@/lib/gateway/GatewayClient";
import { initCollector } from "@/features/analytics/analyticsCollector";
import {
  type CronJobSummary,
  formatCronJobDisplay,
  listCronJobs,
  resolveLatestCronJobForAgent,
} from "@/lib/cron/types";
import { buildAvatarDataUrl } from "@/lib/avatars/multiavatar";
import { loadAgentUiPrefs } from "@/features/agents/state/agentUiPrefs";
import type { ConfigMutationKind } from "@/features/agents/operations/useConfigMutationQueue";
import { useConfigMutationQueue } from "@/features/agents/operations/useConfigMutationQueue";
import { useGatewayConfigSyncController } from "@/features/agents/operations/useGatewayConfigSyncController";
import { isLocalGatewayUrl } from "@/lib/gateway/local-gateway";
import { randomUUID } from "@/lib/uuid";
import type {
  InspectSidebarState,
  SettingsRouteTab,
} from "@/features/agents/operations/settingsRouteWorkflow";
import {
  SETTINGS_ROUTE_AGENT_ID_QUERY_PARAM,
  parseSettingsRouteAgentIdFromQueryParam,
  parseSettingsRouteAgentIdFromPathname,
} from "@/features/agents/operations/settingsRouteWorkflow";
import { useAgentSettingsMutationController } from "@/features/agents/operations/useAgentSettingsMutationController";
import { useRuntimeSyncController } from "@/features/agents/operations/useRuntimeSyncController";
import { useChatInteractionController } from "@/features/agents/operations/useChatInteractionController";
import { useSettingsRouteController } from "@/features/agents/operations/useSettingsRouteController";
import { resolveLatestUpdateKind } from "@/features/agents/operations/latestUpdateWorkflow";
import { createSpecialLatestUpdateOperation } from "@/features/agents/operations/specialLatestUpdateOperation";
import {
  executeStudioBootstrapLoadCommands,
  executeStudioFocusedPatchCommands,
  executeStudioFocusedPreferenceLoadCommands,
  runStudioBootstrapLoadOperation,
  runStudioFocusFilterPersistenceOperation,
  runStudioFocusedPreferenceLoadOperation,
  runStudioFocusedSelectionPersistenceOperation,
} from "@/features/agents/operations/studioBootstrapOperation";

// Extracted orchestrator pieces
import {
  resolveControlUiUrl,
  usePanelVisibility,
  useClaudeCodeAgents,
  useExecApprovals,
  useAgentSettingsContext,
  useSessionControls,
  useCreateAgent,
  useGatewayEventSetup,
  OverlayPanels,
  SettingsRouteView,
  ChatWorkspaceView,
  BlockingModals,
  MobileBottomNav,
} from "@/features/agents/orchestrator";

type MobilePane = "fleet" | "chat";

const AgentStudioInner = () => {
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
  const {
    client,
    status,
    gatewayUrl,
    token,
    localGatewayDefaults,
    error: gatewayError,
    connect,
    disconnect,
    useLocalGatewayDefaults,
    setGatewayUrl,
    setToken,
    settingsCoordinator,
  } = useSharedGatewayConnection();

  const { state, dispatch, hydrateAgents, setError, setLoading } =
    useAgentStore();
  const { panels, panelActions } = usePanelVisibility();
  const claudeCodeAgents = useClaudeCodeAgents();
  const [focusFilter, setFocusFilter] = useState<FocusFilter>("all");
  const [focusedPreferencesLoaded, setFocusedPreferencesLoaded] =
    useState(false);
  const [agentsLoadedOnce, setAgentsLoadedOnce] = useState(
    () => state.agents.length > 0,
  );
  const [didAttemptGatewayConnect, setDidAttemptGatewayConnect] = useState(
    () => status !== "disconnected",
  );
  const [heartbeatTick, setHeartbeatTick] = useState(0);
  const stateRef = useRef(state);
  const focusFilterTouchedRef = useRef(false);
  const [gatewayModels, setGatewayModels] = useState<GatewayModelChoice[]>([]);
  const [gatewayModelsError, setGatewayModelsError] = useState<string | null>(
    null,
  );
  const { getConfiguredProviderIds } = useProviderStore();
  const configuredProviderIds = useMemo(
    () => getConfiguredProviderIds(),
    [getConfiguredProviderIds],
  );
  const allModels = useMemo(
    () =>
      filterModelsByConfiguredProviders(
        mergeModelCatalogs(
          gatewayModels,
          buildStaticModelCatalog(PROVIDER_REGISTRY),
        ),
        configuredProviderIds,
      ),
    [gatewayModels, configuredProviderIds],
  );
  const [gatewayConfigSnapshot, setGatewayConfigSnapshot] =
    useState<GatewayModelPolicySnapshot | null>(null);
  const [mobilePane, setMobilePane] = useState<MobilePane>("chat");
  const [inspectSidebar, setInspectSidebar] =
    useState<InspectSidebarState>(null);
  const [systemInitialSkillKey, setSystemInitialSkillKey] = useState<
    string | null
  >(null);
  const [personalityHasUnsavedChanges, setPersonalityHasUnsavedChanges] =
    useState(false);
  const [settingsSidebarItem, setSettingsSidebarItem] =
    useState<SettingsRouteTab>("personality");
  const preferredSelectedAgentIdRef = useRef<string | null>(null);
  const enqueueConfigMutationRef = useRef<
    (params: {
      kind: ConfigMutationKind;
      label: string;
      run: () => Promise<void>;
      requiresIdleAgents?: boolean;
    }) => Promise<void>
  >((input) =>
    Promise.reject(
      new Error(`Config mutation queue not ready for "${input.kind}".`),
    ),
  );

  const agents = state.agents;
  const selectedAgent = useMemo(() => getSelectedAgent(state), [state]);
  const filteredAgents = useMemo(
    () => getFilteredAgents(state, focusFilter),
    [focusFilter, state],
  );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const channelsByAgent = useMemo(() => getChannelsByAgent(), [agents]);
  const focusedAgent = useMemo(() => {
    if (filteredAgents.length === 0) return null;
    const selectedInFilter = selectedAgent
      ? filteredAgents.find((entry) => entry.agentId === selectedAgent.agentId)
      : null;
    return selectedInFilter ?? filteredAgents[0] ?? null;
  }, [filteredAgents, selectedAgent]);
  const focusedAgentId = focusedAgent?.agentId ?? null;
  const showClaudeCodeSidebar =
    focusedAgentId !== null && claudeCodeAgents.includes(focusedAgentId);
  const focusedAgentRunning = focusedAgent?.status === "running";
  const focusedAgentStopDisabledReason = useMemo(() => {
    if (!focusedAgent) return null;
    if (focusedAgent.status !== "running") return null;
    const lastMessage = focusedAgent.lastUserMessage?.trim() ?? "";
    if (!lastMessage || !isHeartbeatPrompt(lastMessage)) return null;
    return "This task is running as an automatic heartbeat check. Stopping heartbeat runs from Studio isn't available yet (coming soon).";
  }, [focusedAgent]);
  const inspectSidebarAgentId = inspectSidebar?.agentId ?? null;
  const inspectSidebarTab = inspectSidebar?.tab ?? null;
  const effectiveSettingsTab: SettingsRouteTab =
    inspectSidebarTab ?? "personality";

  useEffect(() => {
    initCollector();
  }, []);
  useEffect(() => {
    setSettingsSidebarItem(effectiveSettingsTab);
  }, [effectiveSettingsTab]);

  const inspectSidebarAgent = useMemo(() => {
    if (!inspectSidebarAgentId) return null;
    return (
      agents.find((entry) => entry.agentId === inspectSidebarAgentId) ?? null
    );
  }, [agents, inspectSidebarAgentId]);

  useEffect(() => {
    setSystemInitialSkillKey(null);
  }, [inspectSidebarAgentId]);
  useEffect(() => {
    if (effectiveSettingsTab !== "system") {
      setSystemInitialSkillKey(null);
    }
  }, [effectiveSettingsTab]);

  // --- Extracted hooks ---
  const {
    settingsAgentPermissionsDraft,
    settingsAgentSkillsAllowlist,
    settingsSkillScopeWarning,
  } = useAgentSettingsContext({
    inspectSidebarAgent,
    gatewayConfigSnapshot,
  });

  const sessionControls = useSessionControls({
    client,
    dispatch,
    getAgents: () => stateRef.current.agents,
  });

  const errorMessage = state.error ?? gatewayModelsError;
  const runningAgentCount = useMemo(
    () => agents.filter((agent) => agent.status === "running").length,
    [agents],
  );
  const hasRunningAgents = runningAgentCount > 0;
  const isLocalGateway = useMemo(
    () => isLocalGatewayUrl(gatewayUrl),
    [gatewayUrl],
  );
  const controlUiUrl = useMemo(
    () =>
      resolveControlUiUrl({
        gatewayUrl,
        configSnapshot: gatewayConfigSnapshot,
      }),
    [gatewayConfigSnapshot, gatewayUrl],
  );

  // Favicon effect
  const faviconSeed = useMemo(() => {
    const firstAgent = agents[0];
    const seed = firstAgent?.avatarSeed ?? firstAgent?.agentId ?? "";
    return seed.trim() || null;
  }, [agents]);
  const faviconHref = useMemo(
    () => (faviconSeed ? buildAvatarDataUrl(faviconSeed) : null),
    [faviconSeed],
  );
  useEffect(() => {
    const selector = 'link[data-agent-favicon="true"]';
    const existing = document.querySelector(selector) as HTMLLinkElement | null;
    if (!faviconHref) {
      existing?.remove();
      return;
    }
    if (existing) {
      if (existing.href !== faviconHref) {
        existing.href = faviconHref;
      }
      return;
    }
    const link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/svg+xml";
    link.href = faviconHref;
    link.setAttribute("data-agent-favicon", "true");
    document.head.appendChild(link);
  }, [faviconHref]);

  // Special latest update (cron, heartbeat)
  const resolveCronJobForAgent = useCallback(
    (jobs: CronJobSummary[], agentId: string) => {
      return resolveLatestCronJobForAgent(jobs, agentId);
    },
    [],
  );
  const specialLatestUpdate = useMemo(() => {
    return createSpecialLatestUpdateOperation({
      callGateway: (method, params) => client.call(method, params),
      listCronJobs: () => listCronJobs(client, { includeDisabled: true }),
      resolveCronJobForAgent,
      formatCronJobDisplay,
      dispatchUpdateAgent: (agentId, patch) => {
        dispatch({ type: "updateAgent", agentId, patch });
      },
      isDisconnectLikeError: isGatewayDisconnectLikeError,
      logError: (message) => console.error(message),
    });
  }, [client, dispatch, resolveCronJobForAgent]);
  const refreshHeartbeatLatestUpdate = useCallback(() => {
    const agents = stateRef.current.agents;
    specialLatestUpdate.refreshHeartbeat(agents);
  }, [specialLatestUpdate]);

  // Load agents
  const loadAgents = useCallback(async () => {
    if (status !== "connected") return;
    setLoading(true);
    try {
      const commands = await runStudioBootstrapLoadOperation({
        client,
        gatewayUrl,
        cachedConfigSnapshot: gatewayConfigSnapshot,
        loadStudioSettings:
          settingsCoordinator.loadSettings.bind(settingsCoordinator),
        isDisconnectLikeError: isGatewayDisconnectLikeError,
        preferredSelectedAgentId: preferredSelectedAgentIdRef.current,
        hasCurrentSelection: Boolean(stateRef.current.selectedAgentId),
        logError: (message, error) => console.error(message, error),
      });
      executeStudioBootstrapLoadCommands({
        commands,
        setGatewayConfigSnapshot,
        hydrateAgents,
        dispatchUpdateAgent: (agentId, patch) => {
          dispatch({ type: "updateAgent", agentId, patch });
        },
        setError,
      });
      const hydrateCmd = commands.find((c) => c.kind === "hydrate-agents");
      if (hydrateCmd && hydrateCmd.kind === "hydrate-agents") {
        for (const seed of hydrateCmd.seeds) {
          const prefs = loadAgentUiPrefs(seed.agentId);
          const prefPatch: Partial<
            import("@/features/agents/state/store").AgentState
          > = {};
          if (typeof prefs.toolCallingEnabled === "boolean")
            prefPatch.toolCallingEnabled = prefs.toolCallingEnabled;
          if (typeof prefs.showThinkingTraces === "boolean")
            prefPatch.showThinkingTraces = prefs.showThinkingTraces;
          if (typeof prefs.hideSystemMessages === "boolean")
            prefPatch.hideSystemMessages = prefs.hideSystemMessages;
          if (prefs.model !== undefined) prefPatch.model = prefs.model ?? null;
          if (Object.keys(prefPatch).length > 0) {
            dispatch({
              type: "updateAgent",
              agentId: seed.agentId,
              patch: prefPatch,
            });
          }
        }
      }
    } finally {
      setLoading(false);
      setAgentsLoadedOnce(true);
    }
  }, [
    client,
    dispatch,
    hydrateAgents,
    setError,
    setLoading,
    gatewayUrl,
    gatewayConfigSnapshot,
    settingsCoordinator,
    status,
  ]);

  const enqueueConfigMutationFromRef = useCallback(
    (mutation: {
      kind: ConfigMutationKind;
      label: string;
      run: () => Promise<void>;
    }) => {
      return enqueueConfigMutationRef.current(mutation);
    },
    [],
  );

  const { refreshGatewayConfigSnapshot } = useGatewayConfigSyncController({
    client,
    status,
    settingsRouteActive,
    inspectSidebarAgentId,
    gatewayConfigSnapshot,
    setGatewayConfigSnapshot,
    setGatewayModels,
    setGatewayModelsError,
    enqueueConfigMutation: enqueueConfigMutationFromRef,
    loadAgents,
    isDisconnectLikeError: isGatewayDisconnectLikeError,
  });

  const settingsMutationController = useAgentSettingsMutationController({
    client,
    status,
    isLocalGateway,
    agents,
    hasCreateBlock: false, // updated below after useCreateAgent
    enqueueConfigMutation: enqueueConfigMutationFromRef,
    gatewayConfigSnapshot,
    settingsRouteActive,
    inspectSidebarAgentId,
    inspectSidebarTab,
    loadAgents,
    refreshGatewayConfigSnapshot,
    clearInspectSidebar: () => setInspectSidebar(null),
    setInspectSidebarCapabilities: (agentId) => {
      setInspectSidebar((current) => {
        if (current?.agentId === agentId) return current;
        return { agentId, tab: "capabilities" };
      });
    },
    dispatchUpdateAgent: (agentId, patch) => {
      dispatch({ type: "updateAgent", agentId, patch });
    },
    setMobilePaneChat: () => setMobilePane("chat"),
    setError,
  });

  const hasRestartBlockInProgress = Boolean(
    settingsMutationController.hasRestartBlockInProgress,
  );
  const {
    enqueueConfigMutation,
    queuedCount: queuedConfigMutationCount,
    queuedBlockedByRunningAgents,
    activeConfigMutation,
  } = useConfigMutationQueue({
    status,
    hasRunningAgents,
    hasRestartBlockInProgress,
  });
  enqueueConfigMutationRef.current = enqueueConfigMutation;

  useEffect(() => {
    stateRef.current = state;
  }, [state]);

  // Persistence effects
  useEffect(() => {
    if (status === "connected") return;
    setAgentsLoadedOnce(false);
  }, [gatewayUrl, status]);

  useEffect(() => {
    let cancelled = false;
    const key = gatewayUrl.trim();
    if (!key) {
      preferredSelectedAgentIdRef.current = null;
      setFocusedPreferencesLoaded(true);
      return;
    }
    setFocusedPreferencesLoaded(false);
    focusFilterTouchedRef.current = false;
    preferredSelectedAgentIdRef.current = null;
    const loadFocusedPreferences = async () => {
      const commands = await runStudioFocusedPreferenceLoadOperation({
        gatewayUrl,
        loadStudioSettings:
          settingsCoordinator.loadSettings.bind(settingsCoordinator),
        isFocusFilterTouched: () => focusFilterTouchedRef.current,
      });
      if (cancelled) return;
      executeStudioFocusedPreferenceLoadCommands({
        commands,
        setFocusedPreferencesLoaded,
        setPreferredSelectedAgentId: (agentId) => {
          preferredSelectedAgentIdRef.current = agentId;
        },
        setFocusFilter: () => {},
        logError: (message, error) => console.error(message, error),
      });
    };
    void loadFocusedPreferences();
    return () => {
      cancelled = true;
    };
  }, [gatewayUrl, settingsCoordinator]);

  useEffect(() => {
    const commands = runStudioFocusFilterPersistenceOperation({
      gatewayUrl,
      focusFilterTouched: focusFilterTouchedRef.current,
      focusFilter,
    });
    executeStudioFocusedPatchCommands({
      commands,
      schedulePatch:
        settingsCoordinator.schedulePatch.bind(settingsCoordinator),
    });
  }, [focusFilter, gatewayUrl, settingsCoordinator]);

  useEffect(() => {
    const commands = runStudioFocusedSelectionPersistenceOperation({
      gatewayUrl,
      status,
      focusedPreferencesLoaded,
      agentsLoadedOnce,
      selectedAgentId: state.selectedAgentId,
    });
    executeStudioFocusedPatchCommands({
      commands,
      schedulePatch:
        settingsCoordinator.schedulePatch.bind(settingsCoordinator),
    });
  }, [
    agentsLoadedOnce,
    focusedPreferencesLoaded,
    gatewayUrl,
    settingsCoordinator,
    status,
    state.selectedAgentId,
  ]);

  useEffect(() => {
    if (status !== "connected" || !focusedPreferencesLoaded) return;
    if (
      settingsMutationController.restartingMutationBlock &&
      settingsMutationController.restartingMutationBlock.phase !== "queued"
    )
      return;
    void loadAgents();
  }, [
    focusedPreferencesLoaded,
    gatewayUrl,
    loadAgents,
    settingsMutationController.restartingMutationBlock,
    status,
  ]);

  useEffect(() => {
    if (status === "disconnected") {
      setLoading(false);
    }
  }, [setLoading, status]);

  // Special latest update tracking
  useEffect(() => {
    for (const agent of agents) {
      const lastMessage = agent.lastUserMessage?.trim() ?? "";
      const kind = resolveLatestUpdateKind(lastMessage);
      const key = agent.agentId;
      const marker =
        kind === "heartbeat" ? `${lastMessage}:${heartbeatTick}` : lastMessage;
      const previous = specialUpdateRef.current.get(key);
      if (previous === marker) continue;
      specialUpdateRef.current.set(key, marker);
      void specialLatestUpdate.update(agent.agentId, agent, lastMessage);
    }
  }, [agents, heartbeatTick, specialLatestUpdate]);
  const specialUpdateRef = useRef<Map<string, string>>(new Map());

  // Runtime sync
  const {
    loadSummarySnapshot,
    loadAgentHistory,
    loadMoreAgentHistory,
    clearHistoryInFlight,
  } = useRuntimeSyncController({
    client,
    status,
    agents,
    focusedAgentId,
    focusedAgentRunning,
    dispatch,
    clearRunTracking: (runId) => {
      runtimeEventHandlerRef.current?.clearRunTracking(runId);
    },
    isDisconnectLikeError: isGatewayDisconnectLikeError,
  });

  // Chat interaction
  const {
    stopBusyAgentId,
    flushPendingDraft,
    handleDraftChange,
    handleSend,
    removeQueuedMessage,
    handleNewSession,
    handleStopRun,
    queueLivePatch,
    clearPendingLivePatch,
  } = useChatInteractionController({
    client,
    status,
    agents,
    dispatch,
    setError,
    getAgents: () => stateRef.current.agents,
    clearRunTracking: (runId) => {
      runtimeEventHandlerRef.current?.clearRunTracking(runId);
    },
    clearHistoryInFlight,
    clearSpecialUpdateMarker: (agentId) => {
      specialUpdateRef.current.delete(agentId);
    },
    clearSpecialLatestUpdateInFlight: (agentId) => {
      specialLatestUpdate.clearInFlight(agentId);
    },
    setInspectSidebarNull: () => setInspectSidebar(null),
    setMobilePaneChat: () => setMobilePane("chat"),
  });

  // Exec approvals
  const {
    focusedPendingExecApprovals,
    handleResolveExecApproval,
    handleGatewayEventIngress,
    approvalPausedRunIdByAgentRef,
  } = useExecApprovals({
    client,
    status,
    agents,
    focusedAgentId,
    dispatch,
    getAgents: () => stateRef.current.agents,
    loadAgentHistory,
    runtimeEventHandlerRef: { current: null } as React.MutableRefObject<{
      clearRunTracking: (runId: string) => void;
    } | null>, // Will be set below
  });

  // Gateway event setup
  const { runtimeEventHandlerRef } = useGatewayEventSetup({
    client,
    status,
    dispatch,
    getAgents: () => stateRef.current.agents,
    queueLivePatch,
    clearPendingLivePatch,
    loadSummarySnapshot,
    loadAgentHistory,
    refreshHeartbeatLatestUpdate,
    setHeartbeatTick,
    approvalPausedRunIdByAgentRef,
    specialLatestUpdate,
    handleGatewayEventIngress,
  });

  // Avatar persistence
  const persistAvatarSeed = useCallback(
    (agentId: string, avatarSeed: string) => {
      const resolvedAgentId = agentId.trim();
      const resolvedAvatarSeed = avatarSeed.trim();
      const key = gatewayUrl.trim();
      if (!resolvedAgentId || !resolvedAvatarSeed || !key) return;
      settingsCoordinator.schedulePatch(
        {
          avatars: {
            [key]: {
              [resolvedAgentId]: resolvedAvatarSeed,
            },
          },
        },
        0,
      );
    },
    [gatewayUrl, settingsCoordinator],
  );

  // Create agent
  const createAgent = useCreateAgent({
    client,
    status,
    agents,
    dispatch,
    setError,
    getAgents: () => stateRef.current.agents,
    focusedAgentId,
    hasRenameMutationBlock: settingsMutationController.hasRenameMutationBlock,
    hasDeleteMutationBlock: settingsMutationController.hasDeleteMutationBlock,
    restartingMutationBlock: settingsMutationController.restartingMutationBlock,
    enqueueConfigMutation,
    loadAgents,
    refreshGatewayConfigSnapshot,
    persistAvatarSeed,
    flushPendingDraft,
    focusFilterTouchedRef,
    setFocusFilter,
    setInspectSidebar,
    setMobilePane,
  });

  const handleFocusFilterChange = useCallback(
    (next: FocusFilter) => {
      flushPendingDraft(focusedAgent?.agentId ?? null);
      focusFilterTouchedRef.current = true;
      setFocusFilter(next);
    },
    [flushPendingDraft, focusedAgent],
  );

  const {
    handleBackToChat,
    handleSettingsRouteTabChange,
    handleOpenAgentSettingsRoute,
    handleFleetSelectAgent,
  } = useSettingsRouteController({
    settingsRouteActive,
    settingsRouteAgentId,
    status,
    agentsLoadedOnce,
    selectedAgentId: state.selectedAgentId,
    focusedAgentId: focusedAgent?.agentId ?? null,
    personalityHasUnsavedChanges,
    activeTab: effectiveSettingsTab,
    inspectSidebar,
    agents,
    flushPendingDraft,
    dispatchSelectAgent: (agentId) => {
      dispatch({ type: "selectAgent", agentId });
    },
    setInspectSidebar,
    setMobilePaneChat: () => setMobilePane("chat"),
    setPersonalityHasUnsavedChanges,
    push: router.push,
    replace: router.replace,
    confirmDiscard: () => window.confirm("Discard changes?"),
  });

  const handleOpenSystemSkillSetup = useCallback(
    (skillKey?: string) => {
      const normalized = skillKey?.trim() ?? "";
      setSystemInitialSkillKey(normalized.length > 0 ? normalized : null);
      setSettingsSidebarItem("system");
      handleSettingsRouteTabChange("system");
    },
    [handleSettingsRouteTabChange],
  );

  const handleAvatarShuffle = useCallback(
    async (agentId: string) => {
      const avatarSeed = randomUUID();
      dispatch({
        type: "updateAgent",
        agentId,
        patch: { avatarSeed },
      });
      persistAvatarSeed(agentId, avatarSeed);
    },
    [dispatch, persistAvatarSeed],
  );

  // Config mutation status line
  const configMutationStatusLine = activeConfigMutation
    ? `Applying config change: ${activeConfigMutation.label}`
    : queuedConfigMutationCount > 0
      ? queuedBlockedByRunningAgents
        ? `Queued ${queuedConfigMutationCount} config change${queuedConfigMutationCount === 1 ? "" : "s"}; waiting for ${runningAgentCount} running agent${runningAgentCount === 1 ? "" : "s"} to finish`
        : status !== "connected"
          ? `Queued ${queuedConfigMutationCount} config change${queuedConfigMutationCount === 1 ? "" : "s"}; waiting for gateway connection`
          : `Queued ${queuedConfigMutationCount} config change${queuedConfigMutationCount === 1 ? "" : "s"}`
      : null;

  // Connection attempt tracking
  useEffect(() => {
    if (status === "connecting") {
      setDidAttemptGatewayConnect(true);
    }
  }, [status]);
  useEffect(() => {
    if (gatewayError) {
      setDidAttemptGatewayConnect(true);
    }
  }, [gatewayError]);

  // --- Early returns for loading/disconnected states ---
  if (
    !agentsLoadedOnce &&
    (!didAttemptGatewayConnect || status === "connecting")
  ) {
    return (
      <div className="relative min-h-screen w-full overflow-hidden bg-background">
        <div className="flex min-h-screen items-center justify-center px-6">
          <div className="glass-panel ui-panel w-full max-w-md px-6 py-6 text-center">
            <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              OpenClaw Studio
            </div>
            <div className="mt-3 text-sm text-muted-foreground">
              {status === "connecting"
                ? tp("connectingGateway")
                : tp("bootingStudio")}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (
    status === "disconnected" &&
    !agentsLoadedOnce &&
    didAttemptGatewayConnect
  ) {
    return (
      <div className="relative min-h-screen w-full overflow-hidden bg-background">
        <div className="flex min-h-screen items-center justify-center px-6">
          <div className="glass-panel ui-panel w-full max-w-md px-6 py-6 text-center">
            <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              OpenClaw Studio
            </div>
            <div className="mt-3 text-sm text-muted-foreground">
              {gatewayError
                ? `${tp("connectingGateway")}… (${gatewayError})`
                : `${tp("connectingGateway")}…`}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (status === "connected" && !agentsLoadedOnce) {
    return (
      <div className="relative min-h-screen w-full overflow-hidden bg-background">
        <div className="flex min-h-screen items-center justify-center px-6">
          <div className="glass-panel ui-panel w-full max-w-md px-6 py-6 text-center">
            <div className="font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              OpenClaw Studio
            </div>
            <div className="mt-3 text-sm text-muted-foreground">
              Loading agents...
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- Main connected view ---
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      {state.loading ? (
        <div className="pointer-events-none fixed bottom-4 left-0 right-0 z-50 flex justify-center px-3">
          <div className="glass-panel ui-card px-6 py-3 font-mono text-[11px] tracking-[0.08em] text-muted-foreground">
            Loading agents...
          </div>
        </div>
      ) : null}
      <div className="relative z-10 flex h-screen flex-col">
        <HeaderBar
          status={status}
          onConnectionSettings={() => panelActions.show("connection")}
          onProviders={() => panelActions.toggle("providers")}
          onChannels={() => panelActions.toggle("channels")}
          onRouting={() => panelActions.toggle("routing")}
          onWebhooks={() => panelActions.toggle("webhooks")}
          onSkills={() => panelActions.toggle("skills")}
          onAnalytics={() => panelActions.toggle("analytics")}
          onLogs={() => panelActions.toggle("logViewer")}
          onCanvas={() => panelActions.toggle("canvas")}
          onIntercom={() => panelActions.toggle("intercom")}
          onVoice={() => panelActions.toggle("voice")}
          onClaudeCode={() => panelActions.toggle("claudeCode")}
          onBrowserView={() => panelActions.toggle("browserView")}
          configuredProviderCount={configuredProviderIds.length}
          totalProviderCount={PROVIDER_REGISTRY.length}
        />
        <div className="flex min-h-0 flex-1 flex-col gap-3 px-3 pb-3 pt-2 sm:px-4 sm:pb-4 sm:pt-3 md:px-5 md:pb-5 md:pt-3">
          <OverlayPanels
            panels={panels}
            panelActions={panelActions}
            agents={agents}
            gatewayUrl={gatewayUrl}
            token={token}
            status={status}
            gatewayError={gatewayError}
            onGatewayUrlChange={setGatewayUrl}
            onTokenChange={setToken}
            onConnect={() => void connect()}
            onDisconnect={disconnect}
          />

          {errorMessage ? (
            <div className="w-full">
              <div className="ui-alert-danger rounded-md px-4 py-2 text-sm">
                {errorMessage}
              </div>
            </div>
          ) : null}
          {configMutationStatusLine ? (
            <div className="w-full">
              <div className="ui-card px-4 py-2 font-mono text-[11px] tracking-[0.07em] text-muted-foreground">
                {configMutationStatusLine}
              </div>
            </div>
          ) : null}

          {panels.browserView ? (
            <BrowserViewPanel
              onClose={() => panelActions.hide("browserView")}
            />
          ) : settingsRouteActive ? (
            <SettingsRouteView
              client={client}
              agents={agents}
              inspectSidebarAgent={inspectSidebarAgent}
              settingsRouteAgentId={settingsRouteAgentId}
              effectiveSettingsTab={effectiveSettingsTab}
              activeSettingsSidebarItem={settingsSidebarItem}
              personalityHasUnsavedChanges={personalityHasUnsavedChanges}
              allModels={allModels}
              settingsAgentPermissionsDraft={settingsAgentPermissionsDraft}
              settingsAgentSkillsAllowlist={settingsAgentSkillsAllowlist}
              settingsSkillScopeWarning={settingsSkillScopeWarning}
              systemInitialSkillKey={systemInitialSkillKey}
              controlUiUrl={controlUiUrl}
              channelsByAgent={channelsByAgent}
              settingsMutationController={settingsMutationController}
              onBackToChat={handleBackToChat}
              onSettingsSidebarItemChange={setSettingsSidebarItem}
              onSettingsRouteTabChange={handleSettingsRouteTabChange}
              onModelChange={sessionControls.handleModelChange}
              onThinkingChange={sessionControls.handleThinkingChange}
              onPersonalityUnsavedChange={setPersonalityHasUnsavedChanges}
              onSystemInitialSkillHandled={() => setSystemInitialSkillKey(null)}
              onOpenSystemSkillSetup={handleOpenSystemSkillSetup}
            />
          ) : (
            <ChatWorkspaceView
              agents={agents}
              filteredAgents={filteredAgents}
              focusedAgent={focusedAgent}
              selectedAgentId={state.selectedAgentId}
              status={status}
              mobilePane={mobilePane}
              focusFilter={focusFilter}
              gatewayModels={gatewayModels}
              stopBusyAgentId={stopBusyAgentId}
              focusedAgentStopDisabledReason={focusedAgentStopDisabledReason}
              focusedPendingExecApprovals={focusedPendingExecApprovals}
              channelsByAgent={channelsByAgent}
              isLoading={state.loading}
              createAgentBusy={createAgent.createAgentBusy}
              onMobilePaneChange={setMobilePane}
              onFocusFilterChange={handleFocusFilterChange}
              onCreateAgent={createAgent.handleOpenCreateAgentModal}
              onFleetSelectAgent={handleFleetSelectAgent}
              onLoadMoreHistory={loadMoreAgentHistory}
              onOpenSettings={handleOpenAgentSettingsRoute}
              onRename={(agentId, name) =>
                settingsMutationController.handleRenameAgent(agentId, name)
              }
              onNewSession={handleNewSession}
              onModelChange={sessionControls.handleModelChange}
              onThinkingChange={sessionControls.handleThinkingChange}
              onToolCallingToggle={sessionControls.handleToolCallingToggle}
              onThinkingTracesToggle={
                sessionControls.handleThinkingTracesToggle
              }
              onHideSystemMessagesToggle={
                sessionControls.handleHideSystemMessagesToggle
              }
              onDraftChange={handleDraftChange}
              onSend={handleSend}
              onRemoveQueuedMessage={removeQueuedMessage}
              onSendQueuedNow={(agentId, index, sessionKey, message) => {
                removeQueuedMessage(agentId, index);
                void handleSend(agentId, sessionKey, message, undefined, {
                  force: true,
                });
              }}
              onStopRun={handleStopRun}
              onAvatarShuffle={handleAvatarShuffle}
              onForwardToAgent={(targetAgentId, message) => {
                const target = agents.find((a) => a.agentId === targetAgentId);
                if (!target) return;
                void handleSend(target.agentId, target.sessionKey, message);
              }}
              onResolveExecApproval={(id, decision) => {
                void handleResolveExecApproval(id, decision);
              }}
              showClaudeCodePanel={showClaudeCodeSidebar || panels.claudeCode}
              onCloseClaudeCode={() => panelActions.hide("claudeCode")}
            />
          )}
        </div>
      </div>
      <BlockingModals
        createAgentModalOpen={createAgent.createAgentModalOpen}
        suggestedCreateAgentName={createAgent.suggestedCreateAgentName}
        createAgentBusy={createAgent.createAgentBusy}
        createAgentModalError={createAgent.createAgentModalError}
        allModels={allModels}
        onCloseCreateModal={() => {
          if (createAgent.createAgentBusy) return;
          createAgent.setCreateAgentModalError(null);
          createAgent.setCreateAgentModalOpen(false);
        }}
        onCreateAgentSubmit={(payload) => {
          void createAgent.handleCreateAgentSubmit(payload);
        }}
        createAgentBlock={createAgent.createAgentBlock}
        createBlockStatusLine={createAgent.createBlockStatusLine}
        restartingMutationBlock={
          settingsMutationController.restartingMutationBlock
        }
        status={status}
      />
      <MobileBottomNav
        mobilePane={mobilePane}
        inspectSidebar={inspectSidebar}
        showAnalytics={panels.analytics}
        focusedAgentId={focusedAgent?.agentId ?? null}
        onSetMobilePane={setMobilePane}
        onClearInspectSidebar={() => setInspectSidebar(null)}
        onToggleAnalytics={() => panelActions.toggle("analytics")}
        onOpenAgentSettings={handleOpenAgentSettingsRoute}
      />
    </div>
  );
};

export function AgentStudioOrchestrator() {
  return (
    <ProviderStoreProvider>
      <AgentStoreProvider>
        <Suspense>
          <AgentStudioInner />
        </Suspense>
      </AgentStoreProvider>
    </ProviderStoreProvider>
  );
}
