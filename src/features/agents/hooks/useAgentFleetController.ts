"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import {
  getFilteredAgents,
  getSelectedAgent,
  type FocusFilter,
  useAgentStore,
} from "@/features/agents/state/store";
import type { AgentState } from "@/features/agents/state/store";
import { isHeartbeatPrompt } from "@/lib/text/message-extract";
import {
  type CronJobSummary,
  formatCronJobDisplay,
  listCronJobs,
  resolveLatestCronJobForAgent,
} from "@/lib/cron/types";
import {
  createGatewayAgent,
  readConfigAgentList,
  resolveDefaultConfigAgentId,
  slugifyAgentName,
} from "@/lib/gateway/agentConfig";
import { buildAvatarDataUrl } from "@/lib/avatars/multiavatar";
import {
  loadAgentUiPrefs,
  saveAgentUiPref,
} from "@/features/agents/state/agentUiPrefs";
import { applySessionSettingMutation } from "@/features/agents/state/sessionSettingsMutations";
import { createSpecialLatestUpdateOperation } from "@/features/agents/operations/specialLatestUpdateOperation";
import { resolveLatestUpdateKind } from "@/features/agents/operations/latestUpdateWorkflow";
import {
  executeStudioBootstrapLoadCommands,
  executeStudioFocusedPatchCommands,
  executeStudioFocusedPreferenceLoadCommands,
  runStudioBootstrapLoadOperation,
  runStudioFocusFilterPersistenceOperation,
  runStudioFocusedPreferenceLoadOperation,
  runStudioFocusedSelectionPersistenceOperation,
} from "@/features/agents/operations/studioBootstrapOperation";
import {
  CREATE_AGENT_DEFAULT_PERMISSIONS,
  applyCreateAgentBootstrapPermissions,
  executeCreateAgentBootstrapCommands,
  runCreateAgentBootstrapOperation,
} from "@/features/agents/operations/createAgentBootstrapOperation";
import {
  buildQueuedMutationBlock,
  isCreateBlockTimedOut,
  type CreateAgentBlockState,
} from "@/features/agents/operations/mutationLifecycleWorkflow";
import { runCreateAgentMutationLifecycle } from "@/features/agents/operations/mutationLifecycleWorkflow";
import { resolveAgentPermissionsDraft } from "@/features/agents/operations/agentPermissionsOperation";
import {
  isGatewayDisconnectLikeError,
} from "@/lib/gateway/GatewayClient";
import type { GatewayClient } from "@/lib/gateway/GatewayClient";
import type { GatewayStatus } from "@/lib/gateway/GatewayClient";
import type { GatewayModelPolicySnapshot, GatewayModelChoice } from "@/lib/gateway/models";
import type { AgentCreateModalSubmitPayload } from "@/features/agents/creation/types";
import type { ConfigMutationKind } from "@/features/agents/operations/useConfigMutationQueue";
import type { InspectSidebarState } from "@/features/agents/operations/settingsRouteWorkflow";
import type { AgentPermissionsDraft } from "@/features/agents/operations/agentPermissionsOperation";
import { randomUUID } from "@/lib/uuid";
import { getChannelsByAgent } from "@/features/routing/agentChannelResolver";
import { initCollector } from "@/features/analytics/analyticsCollector";
import type { createStudioSettingsCoordinator } from "@/lib/studio/coordinator";

const RESERVED_MAIN_AGENT_ID = "main";

const resolveNextNewAgentName = (agents: AgentState[]) => {
  const baseName = "New Agent";
  const existingNames = new Set(
    agents
      .map((agent) => agent.name.trim().toLowerCase())
      .filter((name) => name.length > 0),
  );
  const existingIds = new Set(
    agents
      .map((agent) => agent.agentId.trim().toLowerCase())
      .filter((agentId) => agentId.length > 0),
  );
  const baseLower = baseName.toLowerCase();
  if (
    !existingNames.has(baseLower) &&
    !existingIds.has(slugifyAgentName(baseName))
  )
    return baseName;
  for (let index = 2; index < 10000; index += 1) {
    const candidate = `${baseName} ${index}`;
    if (existingNames.has(candidate.toLowerCase())) continue;
    if (existingIds.has(slugifyAgentName(candidate))) continue;
    return candidate;
  }
  throw new Error("Unable to allocate a unique agent name.");
};

export type AgentFleetControllerParams = {
  client: GatewayClient;
  status: GatewayStatus;
  gatewayUrl: string;
  gatewayConfigSnapshot: GatewayModelPolicySnapshot | null;
  setGatewayConfigSnapshot: React.Dispatch<
    React.SetStateAction<GatewayModelPolicySnapshot | null>
  >;
  settingsCoordinator: ReturnType<typeof createStudioSettingsCoordinator>;
  isLocalGateway: boolean;
  allModels: GatewayModelChoice[];
  enqueueConfigMutation: (params: {
    kind: ConfigMutationKind;
    label: string;
    run: () => Promise<void>;
    requiresIdleAgents?: boolean;
  }) => Promise<void>;
  /** Ref that the page keeps in sync with settingsMutationController */
  hasRenameMutationBlockRef: React.RefObject<boolean>;
  /** Ref that the page keeps in sync with settingsMutationController */
  hasDeleteMutationBlockRef: React.RefObject<boolean>;
  /** Ref that the page keeps in sync with settingsMutationController */
  restartingMutationBlockRef: React.RefObject<{ phase: string; sawDisconnect: boolean; kind: string; agentName: string } | null>;
  /** Ref that the page keeps in sync after useGatewayConfigSyncController */
  refreshGatewayConfigSnapshotRef: React.RefObject<() => Promise<void>>;
  inspectSidebarAgentId: string | null;
  setInspectSidebar: React.Dispatch<React.SetStateAction<InspectSidebarState>>;
  /** Ref that the page keeps in sync after useChatInteractionController */
  flushPendingDraftRef: React.RefObject<(agentId: string | null) => void>;
  setMobilePaneChat: () => void;
  /** Ref that the page keeps in sync after useSettingsRouteController */
  handleSettingsRouteTabChangeRef: React.RefObject<(tab: string) => void>;
  settingsRouteActive: boolean;
};

export type AgentFleetControllerState = {
  /** Store state & dispatch */
  state: ReturnType<typeof useAgentStore>["state"];
  dispatch: ReturnType<typeof useAgentStore>["dispatch"];
  /** Agent collections */
  agents: AgentState[];
  filteredAgents: AgentState[];
  selectedAgent: AgentState | null;
  focusedAgent: AgentState | null;
  focusedAgentId: string | null;
  focusedAgentRunning: boolean;
  focusedAgentStopDisabledReason: string | null;
  /** Focus filter */
  focusFilter: FocusFilter;
  handleFocusFilterChange: (next: FocusFilter) => void;
  /** Channel mapping */
  channelsByAgent: Map<string, import("@/features/routing/agentChannelResolver").AgentChannelLink[]>;
  /** Loading state */
  agentsLoadedOnce: boolean;
  /** Load agents from gateway */
  loadAgents: () => Promise<void>;
  /** Error message (store error + model error) */
  errorMessage: string | null;
  /** Running agents */
  runningAgentCount: number;
  hasRunningAgents: boolean;
  /** Agent creation */
  createAgentBusy: boolean;
  createAgentModalOpen: boolean;
  createAgentModalError: string | null;
  createAgentBlock: CreateAgentBlockState | null;
  suggestedCreateAgentName: string;
  handleOpenCreateAgentModal: () => void;
  handleCreateAgentSubmit: (payload: AgentCreateModalSubmitPayload) => Promise<void>;
  setCreateAgentModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCreateAgentModalError: React.Dispatch<React.SetStateAction<string | null>>;
  setCreateAgentBusy: React.Dispatch<React.SetStateAction<boolean>>;
  setCreateAgentBlock: React.Dispatch<React.SetStateAction<CreateAgentBlockState | null>>;
  /** Session settings */
  handleModelChange: (agentId: string, sessionKey: string, value: string | null) => Promise<void>;
  handleThinkingChange: (agentId: string, sessionKey: string, value: string | null) => Promise<void>;
  handleToolCallingToggle: (agentId: string, enabled: boolean) => void;
  handleThinkingTracesToggle: (agentId: string, enabled: boolean) => void;
  handleHideSystemMessagesToggle: (agentId: string, enabled: boolean) => void;
  /** Avatar */
  handleAvatarShuffle: (agentId: string) => Promise<void>;
  /** Favicon */
  faviconHref: string | null;
  /** Inspect sidebar agent */
  inspectSidebarAgent: AgentState | null;
  /** Settings panel computed values */
  settingsAgentPermissionsDraft: AgentPermissionsDraft | null;
  settingsAgentSkillsAllowlist: string[] | undefined;
  settingsSkillScopeWarning: string | null;
  /** Special update handling */
  specialLatestUpdate: ReturnType<typeof createSpecialLatestUpdateOperation>;
  specialUpdateRef: React.RefObject<Map<string, string>>;
  /** Preferred selected agent ref */
  preferredSelectedAgentIdRef: React.RefObject<string | null>;
  /** State ref */
  stateRef: React.RefObject<ReturnType<typeof useAgentStore>["state"]>;
  /** Gateway connect tracking */
  didAttemptGatewayConnect: boolean;
  /** Heartbeat tick */
  heartbeatTick: number;
  setHeartbeatTick: React.Dispatch<React.SetStateAction<number>>;
  /** System initial skill key */
  systemInitialSkillKey: string | null;
  setSystemInitialSkillKey: React.Dispatch<React.SetStateAction<string | null>>;
  /** Personality unsaved */
  personalityHasUnsavedChanges: boolean;
  setPersonalityHasUnsavedChanges: React.Dispatch<React.SetStateAction<boolean>>;
  /** handleOpenSystemSkillSetup */
  handleOpenSystemSkillSetup: (skillKey?: string) => void;
  /** persistAvatarSeed utility */
  persistAvatarSeed: (agentId: string, avatarSeed: string) => void;
  /** gatewayModelsError (passed through for error display) */
  gatewayModelsError: string | null;
};

export const useAgentFleetController = ({
  client,
  status,
  gatewayUrl,
  gatewayConfigSnapshot,
  setGatewayConfigSnapshot,
  settingsCoordinator,
  isLocalGateway,
  allModels,
  enqueueConfigMutation,
  hasRenameMutationBlockRef,
  hasDeleteMutationBlockRef,
  restartingMutationBlockRef,
  refreshGatewayConfigSnapshotRef,
  inspectSidebarAgentId,
  setInspectSidebar,
  flushPendingDraftRef,
  setMobilePaneChat,
  handleSettingsRouteTabChangeRef,
  settingsRouteActive,
}: AgentFleetControllerParams): AgentFleetControllerState => {
  const { state, dispatch, hydrateAgents, setError, setLoading } =
    useAgentStore();

  // Ref accessor aliases for stable function references
  const refreshGatewayConfigSnapshot = (...args: Parameters<NonNullable<typeof refreshGatewayConfigSnapshotRef.current>>) =>
    refreshGatewayConfigSnapshotRef.current?.(...args);
  const flushPendingDraft = (...args: Parameters<NonNullable<typeof flushPendingDraftRef.current>>) =>
    flushPendingDraftRef.current?.(...args);
  const handleSettingsRouteTabChange = (...args: Parameters<NonNullable<typeof handleSettingsRouteTabChangeRef.current>>) =>
    handleSettingsRouteTabChangeRef.current?.(...args);
  const hasRenameMutationBlock = hasRenameMutationBlockRef.current;
  const hasDeleteMutationBlock = hasDeleteMutationBlockRef.current;

  const [focusFilter, setFocusFilter] = useState<FocusFilter>("all");
  const [focusedPreferencesLoaded, setFocusedPreferencesLoaded] =
    useState(false);
  const [agentsLoadedOnce, setAgentsLoadedOnce] = useState(false);
  const [didAttemptGatewayConnect, setDidAttemptGatewayConnect] =
    useState(false);
  const [heartbeatTick, setHeartbeatTick] = useState(0);
  const [createAgentBusy, setCreateAgentBusy] = useState(false);
  const [createAgentModalOpen, setCreateAgentModalOpen] = useState(false);
  const [createAgentModalError, setCreateAgentModalError] = useState<
    string | null
  >(null);
  const [createAgentBlock, setCreateAgentBlock] =
    useState<CreateAgentBlockState | null>(null);
  const [systemInitialSkillKey, setSystemInitialSkillKey] = useState<
    string | null
  >(null);
  const [personalityHasUnsavedChanges, setPersonalityHasUnsavedChanges] =
    useState(false);

  const stateRef = useRef(state);
  const focusFilterTouchedRef = useRef(false);
  const specialUpdateRef = useRef<Map<string, string>>(new Map());
  const preferredSelectedAgentIdRef = useRef<string | null>(null);

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
  const focusedAgentRunning = focusedAgent?.status === "running";
  const focusedAgentStopDisabledReason = useMemo(() => {
    if (!focusedAgent) return null;
    if (focusedAgent.status !== "running") return null;
    const lastMessage = focusedAgent.lastUserMessage?.trim() ?? "";
    if (!lastMessage || !isHeartbeatPrompt(lastMessage)) return null;
    return "This task is running as an automatic heartbeat check. Stopping heartbeat runs from Studio isn't available yet (coming soon).";
  }, [focusedAgent]);

  const inspectSidebarAgent = useMemo(() => {
    if (!inspectSidebarAgentId) return null;
    return (
      agents.find((entry) => entry.agentId === inspectSidebarAgentId) ?? null
    );
  }, [agents, inspectSidebarAgentId]);

  const runningAgentCount = useMemo(
    () => agents.filter((agent) => agent.status === "running").length,
    [agents],
  );
  const hasRunningAgents = runningAgentCount > 0;

  const suggestedCreateAgentName = useMemo(() => {
    try {
      return resolveNextNewAgentName(state.agents);
    } catch {
      return "New Agent";
    }
  }, [state.agents]);

  const faviconSeed = useMemo(() => {
    const firstAgent = agents[0];
    const seed = firstAgent?.avatarSeed ?? firstAgent?.agentId ?? "";
    return seed.trim() || null;
  }, [agents]);
  const faviconHref = useMemo(
    () => (faviconSeed ? buildAvatarDataUrl(faviconSeed) : null),
    [faviconSeed],
  );

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

  // Analytics collector init
  useEffect(() => {
    initCollector();
  }, []);

  // Keep stateRef in sync
  useEffect(() => {
    stateRef.current = state;
  }, [state]);

  // Favicon effect
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

  // Reset system initial skill key on agent change
  useEffect(() => {
    setSystemInitialSkillKey(null);
  }, [inspectSidebarAgentId]);

  // Gateway connect tracking
  useEffect(() => {
    if (status === "connecting") {
      setDidAttemptGatewayConnect(true);
    }
  }, [status]);

  // Reset agentsLoadedOnce on disconnect/url change
  useEffect(() => {
    if (status === "connected") return;
    setAgentsLoadedOnce(false);
  }, [gatewayUrl, status]);

  // Set loading false on disconnect
  useEffect(() => {
    if (status === "disconnected") {
      setLoading(false);
    }
  }, [setLoading, status]);

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
      // Restore persisted UI prefs
      const hydrateCmd = commands.find((c) => c.kind === "hydrate-agents");
      if (hydrateCmd && hydrateCmd.kind === "hydrate-agents") {
        for (const seed of hydrateCmd.seeds) {
          const prefs = loadAgentUiPrefs(seed.agentId);
          const prefPatch: Partial<AgentState> = {};
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
    setGatewayConfigSnapshot,
  ]);

  // Focus preference loading
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
        setFocusFilter: () => {}, // always start with "all" on load
        logError: (message, error) => console.error(message, error),
      });
    };
    void loadFocusedPreferences();
    return () => {
      cancelled = true;
    };
  }, [gatewayUrl, settingsCoordinator]);

  // Focus filter persistence
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

  // Selection persistence
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

  // Load agents on connect
  useEffect(() => {
    if (status !== "connected" || !focusedPreferencesLoaded) return;
    const rmb = restartingMutationBlockRef.current;
    if (rmb && rmb.phase !== "queued") return;
    if (createAgentBlock && createAgentBlock.phase !== "queued") return;
    void loadAgents();
  }, [
    createAgentBlock,
    focusedPreferencesLoaded,
    gatewayUrl,
    loadAgents,
    status,
  ]);

  // Special update tracking
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

  const handleFocusFilterChange = useCallback(
    (next: FocusFilter) => {
      flushPendingDraft(focusedAgent?.agentId ?? null);
      focusFilterTouchedRef.current = true;
      setFocusFilter(next);
    },
    [flushPendingDraft, focusedAgent],
  );

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

  const handleSessionSettingChange = useCallback(
    async (
      agentId: string,
      sessionKey: string,
      field: "model" | "thinkingLevel",
      value: string | null,
    ) => {
      await applySessionSettingMutation({
        agents: stateRef.current.agents,
        dispatch,
        client,
        agentId,
        sessionKey,
        field,
        value,
      });
    },
    [client, dispatch],
  );

  const handleModelChange = useCallback(
    async (agentId: string, sessionKey: string, value: string | null) => {
      saveAgentUiPref(agentId, "model", value);
      await handleSessionSettingChange(agentId, sessionKey, "model", value);
    },
    [handleSessionSettingChange],
  );

  const handleThinkingChange = useCallback(
    async (agentId: string, sessionKey: string, value: string | null) => {
      await handleSessionSettingChange(
        agentId,
        sessionKey,
        "thinkingLevel",
        value,
      );
    },
    [handleSessionSettingChange],
  );

  const handleToolCallingToggle = useCallback(
    (agentId: string, enabled: boolean) => {
      dispatch({
        type: "updateAgent",
        agentId,
        patch: { toolCallingEnabled: enabled },
      });
      saveAgentUiPref(agentId, "toolCallingEnabled", enabled);
    },
    [dispatch],
  );

  const handleThinkingTracesToggle = useCallback(
    (agentId: string, enabled: boolean) => {
      dispatch({
        type: "updateAgent",
        agentId,
        patch: { showThinkingTraces: enabled },
      });
      saveAgentUiPref(agentId, "showThinkingTraces", enabled);
    },
    [dispatch],
  );

  const handleHideSystemMessagesToggle = useCallback(
    (agentId: string, enabled: boolean) => {
      dispatch({
        type: "updateAgent",
        agentId,
        patch: { hideSystemMessages: enabled },
      });
      saveAgentUiPref(agentId, "hideSystemMessages", enabled);
    },
    [dispatch],
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

  const handleOpenCreateAgentModal = useCallback(() => {
    if (createAgentBusy) return;
    if (createAgentBlock) return;
    if (restartingMutationBlockRef.current) return;
    setCreateAgentModalError(null);
    setCreateAgentModalOpen(true);
  }, [createAgentBlock, createAgentBusy]);

  const handleCreateAgentSubmit = useCallback(
    async (payload: AgentCreateModalSubmitPayload) => {
      await runCreateAgentMutationLifecycle(
        {
          payload,
          status,
          hasCreateBlock: Boolean(createAgentBlock),
          hasRenameBlock: hasRenameMutationBlockRef.current,
          hasDeleteBlock: hasDeleteMutationBlockRef.current,
          createAgentBusy,
        },
        {
          enqueueConfigMutation,
          createAgent: async (name, avatarSeed) => {
            const created = await createGatewayAgent({ client, name });
            if (avatarSeed) {
              persistAvatarSeed(created.id, avatarSeed);
            }
            flushPendingDraft(focusedAgent?.agentId ?? null);
            focusFilterTouchedRef.current = true;
            setFocusFilter("all");
            dispatch({ type: "selectAgent", agentId: created.id });
            return { id: created.id };
          },
          setQueuedBlock: ({ agentName, startedAt }) => {
            const queuedCreateBlock = buildQueuedMutationBlock({
              kind: "create-agent",
              agentId: "",
              agentName,
              startedAt,
            });
            setCreateAgentBlock({
              agentName: queuedCreateBlock.agentName,
              phase: "queued",
              startedAt: queuedCreateBlock.startedAt,
            });
          },
          setCreatingBlock: (agentName) => {
            setCreateAgentBlock((current) => {
              if (!current || current.agentName !== agentName) return current;
              return { ...current, phase: "creating" };
            });
          },
          onCompletion: async (completion) => {
            const personaPayload =
              payload.persona || payload.directives || payload.userContext
                ? {
                    persona: payload.persona,
                    directives: payload.directives,
                    userContext: payload.userContext,
                  }
                : undefined;
            const commands = await runCreateAgentBootstrapOperation({
              completion,
              focusedAgentId: focusedAgent?.agentId ?? null,
              loadAgents,
              findAgentById: (agentId) =>
                stateRef.current.agents.find(
                  (entry) => entry.agentId === agentId,
                ) ?? null,
              applyDefaultPermissions: async ({ agentId, sessionKey }) => {
                await applyCreateAgentBootstrapPermissions({
                  client,
                  agentId,
                  sessionKey,
                  draft: { ...CREATE_AGENT_DEFAULT_PERMISSIONS },
                  loadAgents,
                });
              },
              refreshGatewayConfigSnapshot,
              personaPayload,
            });
            executeCreateAgentBootstrapCommands({
              commands,
              client,
              agentName: completion.agentName,
              setCreateAgentModalError,
              setGlobalError: setError,
              setCreateAgentBlock: (value) => {
                setCreateAgentBlock(value);
              },
              setCreateAgentModalOpen,
              flushPendingDraft,
              selectAgent: (agentId) => {
                dispatch({ type: "selectAgent", agentId });
              },
              setInspectSidebarCapabilities: (agentId) => {
                setInspectSidebar({ agentId, tab: "capabilities" });
              },
              setMobilePaneChat: () => {
                setMobilePaneChat();
              },
            });
          },
          setCreateAgentModalError,
          setCreateAgentBusy,
          clearCreateBlock: () => {
            setCreateAgentBlock(null);
          },
          onError: setError,
        },
      );
    },
    [
      client,
      createAgentBusy,
      createAgentBlock,
      dispatch,
      enqueueConfigMutation,
      flushPendingDraft,
      focusedAgent,
      hasDeleteMutationBlockRef,
      hasRenameMutationBlockRef,
      loadAgents,
      persistAvatarSeed,
      refreshGatewayConfigSnapshot,
      setError,
      status,
      setInspectSidebar,
      setMobilePaneChat,
    ],
  );

  // Create agent block timeout
  useEffect(() => {
    if (!createAgentBlock || createAgentBlock.phase === "queued") return;
    const maxWaitMs = 90_000;
    const timeoutNow = isCreateBlockTimedOut({
      block: createAgentBlock,
      nowMs: Date.now(),
      maxWaitMs,
    });
    const handleTimeout = () => {
      setCreateAgentBlock(null);
      setCreateAgentModalOpen(false);
      void loadAgents();
      setError("Agent creation timed out.");
    };
    if (timeoutNow) {
      handleTimeout();
      return;
    }
    const elapsed = Date.now() - createAgentBlock.startedAt;
    const remaining = Math.max(0, maxWaitMs - elapsed);
    const timeoutId = window.setTimeout(() => {
      if (
        !isCreateBlockTimedOut({
          block: createAgentBlock,
          nowMs: Date.now(),
          maxWaitMs,
        })
      ) {
        return;
      }
      handleTimeout();
    }, remaining);
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [createAgentBlock, loadAgents, setError]);

  const handleOpenSystemSkillSetup = useCallback(
    (skillKey?: string) => {
      const normalized = skillKey?.trim() ?? "";
      setSystemInitialSkillKey(normalized.length > 0 ? normalized : null);
      handleSettingsRouteTabChange("system");
    },
    [handleSettingsRouteTabChange],
  );

  return {
    state,
    dispatch,
    agents,
    filteredAgents,
    selectedAgent,
    focusedAgent,
    focusedAgentId,
    focusedAgentRunning,
    focusedAgentStopDisabledReason,
    focusFilter,
    handleFocusFilterChange,
    channelsByAgent,
    agentsLoadedOnce,
    loadAgents,
    errorMessage: state.error ?? null,
    runningAgentCount,
    hasRunningAgents,
    createAgentBusy,
    createAgentModalOpen,
    createAgentModalError,
    createAgentBlock,
    suggestedCreateAgentName,
    handleOpenCreateAgentModal,
    handleCreateAgentSubmit,
    setCreateAgentModalOpen,
    setCreateAgentModalError,
    setCreateAgentBusy,
    setCreateAgentBlock,
    handleModelChange,
    handleThinkingChange,
    handleToolCallingToggle,
    handleThinkingTracesToggle,
    handleHideSystemMessagesToggle,
    handleAvatarShuffle,
    faviconHref,
    inspectSidebarAgent,
    settingsAgentPermissionsDraft,
    settingsAgentSkillsAllowlist,
    settingsSkillScopeWarning,
    specialLatestUpdate,
    specialUpdateRef,
    preferredSelectedAgentIdRef,
    stateRef,
    didAttemptGatewayConnect,
    heartbeatTick,
    setHeartbeatTick,
    systemInitialSkillKey,
    setSystemInitialSkillKey,
    personalityHasUnsavedChanges,
    setPersonalityHasUnsavedChanges,
    handleOpenSystemSkillSetup,
    persistAvatarSeed,
    gatewayModelsError: null,
  };
};
