import { useCallback, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { AgentChatPanel } from "@/features/agents/components/AgentChatPanel";
import { FleetSidebar } from "@/features/agents/components/FleetSidebar";
import { EmptyStatePanel } from "@/features/agents/components/EmptyStatePanel";
import type { AgentState, FocusFilter } from "@/features/agents/state/store";
import type { GatewayModelChoice } from "@/lib/gateway/models";
import type { GatewayStatus } from "@/lib/gateway/GatewayClient";
import type {
  ExecApprovalDecision,
  PendingExecApproval,
} from "@/features/agents/approvals/types";
import type { AgentChannelLink } from "@/features/routing/agentChannelResolver";
import type { GatewayAttachment } from "@/features/agents/hooks/useAttachments";

const ClaudeCodePanel = dynamic(
  () =>
    import("@/features/agents/components/ClaudeCodePanel").then(
      (m) => m.ClaudeCodePanel,
    ),
  { ssr: false },
);

const CC_STORAGE_KEY = "openclaw-cc-panel-width";
const CC_MIN_WIDTH = 300;
const CC_MAX_WIDTH = 800;
const CC_DEFAULT_WIDTH = 380;

function useResizablePanel(enabled: boolean) {
  const [width, setWidth] = useState(() => {
    if (typeof window === "undefined") return CC_DEFAULT_WIDTH;
    const saved = localStorage.getItem(CC_STORAGE_KEY);
    return saved
      ? Math.min(CC_MAX_WIDTH, Math.max(CC_MIN_WIDTH, Number(saved)))
      : CC_DEFAULT_WIDTH;
  });
  const dragging = useRef(false);
  const startX = useRef(0);
  const startW = useRef(0);

  const onMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      dragging.current = true;
      startX.current = e.clientX;
      startW.current = width;
      document.body.style.cursor = "col-resize";
      document.body.style.userSelect = "none";
    },
    [width],
  );

  useEffect(() => {
    if (!enabled) return;
    const onMouseMove = (e: MouseEvent) => {
      if (!dragging.current) return;
      const delta = startX.current - e.clientX;
      const newW = Math.min(
        CC_MAX_WIDTH,
        Math.max(CC_MIN_WIDTH, startW.current + delta),
      );
      setWidth(newW);
    };
    const onMouseUp = () => {
      if (!dragging.current) return;
      dragging.current = false;
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
      localStorage.setItem(CC_STORAGE_KEY, String(width));
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [enabled, width]);

  // Persist on width change (debounced by mouseup above)
  useEffect(() => {
    if (enabled) localStorage.setItem(CC_STORAGE_KEY, String(width));
  }, [enabled, width]);

  return { width, onMouseDown };
}

type MobilePane = "fleet" | "chat";

export interface ChatWorkspaceViewProps {
  agents: AgentState[];
  filteredAgents: AgentState[];
  focusedAgent: AgentState | null;
  selectedAgentId: string | null;
  status: GatewayStatus;
  mobilePane: MobilePane;
  focusFilter: FocusFilter;
  gatewayModels: GatewayModelChoice[];
  stopBusyAgentId: string | null;
  focusedAgentStopDisabledReason: string | null;
  focusedPendingExecApprovals: PendingExecApproval[];
  channelsByAgent: Map<string, AgentChannelLink[]>;
  isLoading: boolean;
  createAgentBusy: boolean;
  onMobilePaneChange: (pane: MobilePane) => void;
  onFocusFilterChange: (filter: FocusFilter) => void;
  onCreateAgent: () => void;
  onFleetSelectAgent: (agentId: string) => void;
  onLoadMoreHistory: (agentId: string) => void;
  onOpenSettings: (agentId: string) => void;
  onRename: (agentId: string, name: string) => Promise<boolean>;
  onNewSession: (agentId: string) => void;
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
  onToolCallingToggle: (agentId: string, enabled: boolean) => void;
  onThinkingTracesToggle: (agentId: string, enabled: boolean) => void;
  onHideSystemMessagesToggle: (agentId: string, enabled: boolean) => void;
  onDraftChange: (agentId: string, value: string) => void;
  onSend: (
    agentId: string,
    sessionKey: string,
    message: string,
    attachments?: GatewayAttachment[],
    opts?: { force?: boolean },
  ) => void;
  onRemoveQueuedMessage: (agentId: string, index: number) => void;
  onSendQueuedNow: (
    agentId: string,
    index: number,
    sessionKey: string,
    message: string,
  ) => void;
  onStopRun: (agentId: string, sessionKey: string) => void;
  onAvatarShuffle: (agentId: string) => void;
  onForwardToAgent: (targetAgentId: string, message: string) => void;
  onResolveExecApproval: (id: string, decision: ExecApprovalDecision) => void;
  showClaudeCodePanel?: boolean;
  onCloseClaudeCode?: () => void;
}

export function ChatWorkspaceView({
  agents,
  filteredAgents,
  focusedAgent,
  selectedAgentId,
  status,
  mobilePane,
  focusFilter,
  gatewayModels,
  stopBusyAgentId,
  focusedAgentStopDisabledReason,
  focusedPendingExecApprovals,
  channelsByAgent,
  isLoading,
  createAgentBusy,
  onMobilePaneChange,
  onFocusFilterChange,
  onCreateAgent,
  onFleetSelectAgent,
  onLoadMoreHistory,
  onOpenSettings,
  onRename,
  onNewSession,
  onModelChange,
  onThinkingChange,
  onToolCallingToggle,
  onThinkingTracesToggle,
  onHideSystemMessagesToggle,
  onDraftChange,
  onSend,
  onRemoveQueuedMessage,
  onSendQueuedNow,
  onStopRun,
  onAvatarShuffle,
  onForwardToAgent,
  onResolveExecApproval,
  showClaudeCodePanel,
  onCloseClaudeCode,
}: ChatWorkspaceViewProps) {
  const tp = useTranslations("page");
  const hasAnyAgents = agents.length > 0;
  const { width: ccWidth, onMouseDown: onResizeStart } =
    useResizablePanel(!!showClaudeCodePanel);

  return (
    <div className="flex min-h-0 flex-1 flex-col gap-4 xl:flex-row">
      <div
        className="glass-panel ui-panel p-2 xl:hidden"
        data-testid="mobile-pane-toggle"
      >
        <div className="ui-segment grid-cols-2">
          <button
            type="button"
            className="ui-segment-item px-2 py-2 font-mono text-[12px] font-medium tracking-[0.02em]"
            data-active={mobilePane === "fleet" ? "true" : "false"}
            onClick={() => onMobilePaneChange("fleet")}
          >
            {tp("fleet")}
          </button>
          <button
            type="button"
            className="ui-segment-item px-2 py-2 font-mono text-[12px] font-medium tracking-[0.02em]"
            data-active={mobilePane === "chat" ? "true" : "false"}
            onClick={() => onMobilePaneChange("chat")}
          >
            {tp("chat")}
          </button>
        </div>
      </div>
      <div
        className={`${mobilePane === "fleet" ? "block" : "hidden"} min-h-0 xl:block xl:min-h-0`}
      >
        <ErrorBoundary fallbackLabel={tp("fleetSidebarError")}>
          <FleetSidebar
            agents={filteredAgents}
            selectedAgentId={focusedAgent?.agentId ?? selectedAgentId}
            filter={focusFilter}
            onFilterChange={onFocusFilterChange}
            onCreateAgent={onCreateAgent}
            createDisabled={
              status !== "connected" || createAgentBusy || isLoading
            }
            createBusy={createAgentBusy}
            onSelectAgent={onFleetSelectAgent}
            channelsByAgent={channelsByAgent}
          />
        </ErrorBoundary>
      </div>
      <div
        className={`${mobilePane === "chat" ? "flex" : "hidden"} ui-panel ui-depth-workspace min-h-0 flex-1 overflow-hidden xl:flex`}
        data-testid="focused-agent-panel"
      >
        {focusedAgent ? (
          <div className="flex min-h-0 flex-1 flex-col">
            <div className="min-h-0 flex-1">
              <AgentChatPanel
                agent={focusedAgent}
                isSelected={false}
                canSend={status === "connected"}
                models={gatewayModels}
                stopBusy={stopBusyAgentId === focusedAgent.agentId}
                stopDisabledReason={focusedAgentStopDisabledReason}
                onLoadMoreHistory={() =>
                  onLoadMoreHistory(focusedAgent.agentId)
                }
                onOpenSettings={() => onOpenSettings(focusedAgent.agentId)}
                onRename={(name) => onRename(focusedAgent.agentId, name)}
                onNewSession={() => onNewSession(focusedAgent.agentId)}
                onModelChange={(value) =>
                  onModelChange(
                    focusedAgent.agentId,
                    focusedAgent.sessionKey,
                    value,
                  )
                }
                onThinkingChange={(value) =>
                  onThinkingChange(
                    focusedAgent.agentId,
                    focusedAgent.sessionKey,
                    value,
                  )
                }
                onToolCallingToggle={(enabled) =>
                  onToolCallingToggle(focusedAgent.agentId, enabled)
                }
                onThinkingTracesToggle={(enabled) =>
                  onThinkingTracesToggle(focusedAgent.agentId, enabled)
                }
                onHideSystemMessagesToggle={(enabled) =>
                  onHideSystemMessagesToggle(focusedAgent.agentId, enabled)
                }
                onDraftChange={(value) =>
                  onDraftChange(focusedAgent.agentId, value)
                }
                onSend={(message, attachments) =>
                  onSend(
                    focusedAgent.agentId,
                    focusedAgent.sessionKey,
                    message,
                    attachments,
                  )
                }
                onRemoveQueuedMessage={(index) =>
                  onRemoveQueuedMessage(focusedAgent.agentId, index)
                }
                onSendQueuedNow={(index) => {
                  const msg = focusedAgent.queuedMessages?.[index];
                  if (!msg) return;
                  onSendQueuedNow(
                    focusedAgent.agentId,
                    index,
                    focusedAgent.sessionKey,
                    msg,
                  );
                }}
                onStopRun={() =>
                  onStopRun(focusedAgent.agentId, focusedAgent.sessionKey)
                }
                onAvatarShuffle={() => onAvatarShuffle(focusedAgent.agentId)}
                otherAgents={agents
                  .filter((a) => a.agentId !== focusedAgent.agentId)
                  .map((a) => ({ agentId: a.agentId, name: a.name }))}
                onForwardToAgent={onForwardToAgent}
                pendingExecApprovals={focusedPendingExecApprovals}
                onResolveExecApproval={(id, decision) => {
                  void onResolveExecApproval(id, decision);
                }}
              />
            </div>
          </div>
        ) : (
          <EmptyStatePanel
            title={hasAnyAgents ? tp("noAgentsMatch") : tp("noAgentsAvailable")}
            description={
              hasAnyAgents
                ? undefined
                : status === "connected"
                  ? tp("useNewAgent")
                  : tp("connectToGateway")
            }
            fillHeight
            className="items-center p-6 text-center text-sm"
          />
        )}
      </div>
      {showClaudeCodePanel ? (
        <div
          className="relative hidden min-h-0 shrink-0 flex-col overflow-hidden rounded-xl border border-border/60 bg-card xl:flex"
          style={{ width: ccWidth }}
          data-testid="claude-code-sidebar"
        >
          {/* Drag handle */}
          <div
            className="absolute inset-y-0 left-0 z-10 w-1.5 cursor-col-resize transition-colors hover:bg-primary/30 active:bg-primary/50"
            onMouseDown={onResizeStart}
          />
          <ErrorBoundary fallbackLabel="Claude Code panel error">
            <ClaudeCodePanel onClose={onCloseClaudeCode ?? (() => {})} />
          </ErrorBoundary>
        </div>
      ) : null}
    </div>
  );
}
