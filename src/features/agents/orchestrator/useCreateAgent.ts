import { useCallback, useEffect, useMemo, useState } from "react";
import type { AgentState, AgentAction } from "@/features/agents/state/store";
import type { GatewayClient, GatewayStatus } from "@/lib/gateway/GatewayClient";
import type { AgentCreateModalSubmitPayload } from "@/features/agents/creation/types";
import type { FocusFilter } from "@/features/agents/state/store";
import type { InspectSidebarState } from "@/features/agents/operations/settingsRouteWorkflow";
import type { ConfigMutationKind } from "@/features/agents/operations/useConfigMutationQueue";
import { createGatewayAgent } from "@/lib/gateway/agentConfig";
import {
  CREATE_AGENT_DEFAULT_PERMISSIONS,
  applyCreateAgentBootstrapPermissions,
  executeCreateAgentBootstrapCommands,
  runCreateAgentBootstrapOperation,
} from "@/features/agents/operations/createAgentBootstrapOperation";
import {
  buildQueuedMutationBlock,
  isCreateBlockTimedOut,
  runCreateAgentMutationLifecycle,
  type CreateAgentBlockState,
} from "@/features/agents/operations/mutationLifecycleWorkflow";
import { resolveNextNewAgentName } from "./utils";

export interface UseCreateAgentParams {
  client: GatewayClient;
  status: GatewayStatus;
  agents: AgentState[];
  dispatch: (action: AgentAction) => void;
  setError: (error: string | null) => void;
  getAgents: () => AgentState[];
  focusedAgentId: string | null;
  hasRenameMutationBlock: boolean;
  hasDeleteMutationBlock: boolean;
  restartingMutationBlock: {
    phase: "queued" | "mutating" | "awaiting-restart";
  } | null;
  enqueueConfigMutation: (params: {
    kind: ConfigMutationKind;
    label: string;
    run: () => Promise<void>;
    requiresIdleAgents?: boolean;
  }) => Promise<void>;
  loadAgents: () => Promise<void>;
  refreshGatewayConfigSnapshot: () => Promise<unknown>;
  persistAvatarSeed: (agentId: string, avatarSeed: string) => void;
  flushPendingDraft: (agentId: string | null) => void;
  focusFilterTouchedRef: React.MutableRefObject<boolean>;
  setFocusFilter: (filter: FocusFilter) => void;
  setInspectSidebar: (state: InspectSidebarState) => void;
  setMobilePane: (pane: "fleet" | "chat") => void;
}

export function useCreateAgent({
  client,
  status,
  agents,
  dispatch,
  setError,
  getAgents,
  focusedAgentId,
  hasRenameMutationBlock,
  hasDeleteMutationBlock,
  restartingMutationBlock,
  enqueueConfigMutation,
  loadAgents,
  refreshGatewayConfigSnapshot,
  persistAvatarSeed,
  flushPendingDraft,
  focusFilterTouchedRef,
  setFocusFilter,
  setInspectSidebar,
  setMobilePane,
}: UseCreateAgentParams) {
  const [createAgentBusy, setCreateAgentBusy] = useState(false);
  const [createAgentModalOpen, setCreateAgentModalOpen] = useState(false);
  const [createAgentModalError, setCreateAgentModalError] = useState<
    string | null
  >(null);
  const [createAgentBlock, setCreateAgentBlock] =
    useState<CreateAgentBlockState | null>(null);

  const suggestedCreateAgentName = useMemo(() => {
    try {
      return resolveNextNewAgentName(agents);
    } catch {
      return "New Agent";
    }
  }, [agents]);

  const handleOpenCreateAgentModal = useCallback(() => {
    if (createAgentBusy) return;
    if (createAgentBlock) return;
    if (restartingMutationBlock) return;
    setCreateAgentModalError(null);
    setCreateAgentModalOpen(true);
  }, [createAgentBlock, createAgentBusy, restartingMutationBlock]);

  const handleCreateAgentSubmit = useCallback(
    async (payload: AgentCreateModalSubmitPayload) => {
      await runCreateAgentMutationLifecycle(
        {
          payload,
          status,
          hasCreateBlock: Boolean(createAgentBlock),
          hasRenameBlock: hasRenameMutationBlock,
          hasDeleteBlock: hasDeleteMutationBlock,
          createAgentBusy,
        },
        {
          enqueueConfigMutation,
          createAgent: async (name, avatarSeed) => {
            const created = await createGatewayAgent({ client, name });
            if (avatarSeed) {
              persistAvatarSeed(created.id, avatarSeed);
            }
            flushPendingDraft(focusedAgentId);
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
              focusedAgentId,
              loadAgents,
              findAgentById: (agentId) =>
                getAgents().find((entry) => entry.agentId === agentId) ?? null,
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
                setMobilePane("chat");
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
      focusedAgentId,
      focusFilterTouchedRef,
      getAgents,
      hasDeleteMutationBlock,
      hasRenameMutationBlock,
      loadAgents,
      persistAvatarSeed,
      refreshGatewayConfigSnapshot,
      setError,
      setFocusFilter,
      setInspectSidebar,
      setMobilePane,
      status,
    ],
  );

  // Timeout for create agent block
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

  const createBlockStatusLine = createAgentBlock
    ? createAgentBlock.phase === "queued"
      ? "Waiting for active runs to finish"
      : createAgentBlock.phase === "creating"
        ? "Submitting config change"
        : null
    : null;

  return {
    createAgentBusy,
    createAgentModalOpen,
    createAgentModalError,
    createAgentBlock,
    suggestedCreateAgentName,
    createBlockStatusLine,
    handleOpenCreateAgentModal,
    handleCreateAgentSubmit,
    setCreateAgentModalOpen,
    setCreateAgentModalError,
  };
}
