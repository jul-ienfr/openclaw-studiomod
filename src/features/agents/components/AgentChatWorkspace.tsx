"use client";

import { useTranslations } from "next-intl";
import { AgentChatPanel } from "@/features/agents/components/AgentChatPanel";
import { FleetSidebar } from "@/features/agents/components/FleetSidebar";
import { EmptyStatePanel } from "@/features/agents/components/EmptyStatePanel";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import type { AgentState, FocusFilter } from "@/features/agents/state/store";
import type { GatewayModelChoice } from "@/lib/gateway/models";
import type { GatewayStatus } from "@/lib/gateway/GatewayClient";
import type { GatewayAttachment } from "@/features/agents/hooks/useAttachments";
import type { AgentChannelLink } from "@/features/routing/agentChannelResolver";
import type {
  ExecApprovalDecision,
  PendingExecApproval,
} from "@/features/agents/approvals/types";
import type { SessionInfo } from "@/features/agents/hooks/useAgentSessions";

type MobilePane = "fleet" | "chat";

export type AgentChatWorkspaceProps = {
  mobilePane: MobilePane;
  onMobilePaneChange: (pane: MobilePane) => void;
  // Fleet sidebar
  filteredAgents: AgentState[];
  focusedAgentId: string | null;
  selectedAgentId: string | null;
  focusFilter: FocusFilter;
  onFilterChange: (next: FocusFilter) => void;
  onCreateAgent: () => void;
  createDisabled: boolean;
  createBusy: boolean;
  onSelectAgent: (agentId: string) => void;
  channelsByAgent: Map<string, AgentChannelLink[]>;
  // Chat panel
  focusedAgent: AgentState | null;
  allAgents: AgentState[];
  hasAnyAgents: boolean;
  gatewayStatus: GatewayStatus;
  gatewayModels: GatewayModelChoice[];
  stopBusyAgentId: string | null;
  focusedAgentStopDisabledReason: string | null;
  focusedAgentSessions: SessionInfo[];
  focusedAgentSessionsLoading: boolean;
  pendingExecApprovals: PendingExecApproval[];
  // Chat callbacks
  onLoadMoreHistory: (agentId: string) => void;
  onOpenSettings: (agentId: string) => void;
  onRenameAgent: (agentId: string, name: string) => Promise<boolean> | boolean;
  onNewSession: (agentId: string, channelId?: string) => void;
  onSelectSession: (agentId: string, sessionKey: string) => void;
  onRefreshSessions: () => void;
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
  onStopRun: (agentId: string, sessionKey: string) => void;
  onAvatarShuffle: (agentId: string) => void;
  onResolveExecApproval: (id: string, decision: ExecApprovalDecision) => void;
};

export const AgentChatWorkspace = ({
  mobilePane,
  onMobilePaneChange,
  filteredAgents,
  focusedAgentId,
  selectedAgentId,
  focusFilter,
  onFilterChange,
  onCreateAgent,
  createDisabled,
  createBusy,
  onSelectAgent,
  channelsByAgent,
  focusedAgent,
  allAgents,
  hasAnyAgents,
  gatewayStatus,
  gatewayModels,
  stopBusyAgentId,
  focusedAgentStopDisabledReason,
  focusedAgentSessions,
  focusedAgentSessionsLoading,
  pendingExecApprovals,
  onLoadMoreHistory,
  onOpenSettings,
  onRenameAgent,
  onNewSession,
  onSelectSession,
  onRefreshSessions,
  onModelChange,
  onThinkingChange,
  onToolCallingToggle,
  onThinkingTracesToggle,
  onHideSystemMessagesToggle,
  onDraftChange,
  onSend,
  onRemoveQueuedMessage,
  onStopRun,
  onAvatarShuffle,
  onResolveExecApproval,
}: AgentChatWorkspaceProps) => {
  const tp = useTranslations("page");

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
            selectedAgentId={focusedAgentId ?? selectedAgentId}
            filter={focusFilter}
            onFilterChange={onFilterChange}
            onCreateAgent={onCreateAgent}
            createDisabled={createDisabled}
            createBusy={createBusy}
            onSelectAgent={onSelectAgent}
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
                canSend={gatewayStatus === "connected"}
                models={gatewayModels}
                stopBusy={stopBusyAgentId === focusedAgent.agentId}
                stopDisabledReason={focusedAgentStopDisabledReason}
                onLoadMoreHistory={() =>
                  onLoadMoreHistory(focusedAgent.agentId)
                }
                onOpenSettings={() => onOpenSettings(focusedAgent.agentId)}
                onRename={async (name) =>
                  onRenameAgent(focusedAgent.agentId, name)
                }
                onNewSession={(channelId?: string) =>
                  onNewSession(focusedAgent.agentId, channelId)
                }
                sessions={focusedAgentSessions}
                sessionsLoading={focusedAgentSessionsLoading}
                onSelectSession={(sessionKey) => {
                  onSelectSession(focusedAgent.agentId, sessionKey);
                  onRefreshSessions();
                }}
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
                  onRemoveQueuedMessage(focusedAgent.agentId, index);
                  onSend(
                    focusedAgent.agentId,
                    focusedAgent.sessionKey,
                    msg,
                    undefined,
                    { force: true },
                  );
                }}
                onStopRun={() =>
                  onStopRun(focusedAgent.agentId, focusedAgent.sessionKey)
                }
                onAvatarShuffle={() => onAvatarShuffle(focusedAgent.agentId)}
                otherAgents={allAgents
                  .filter((a) => a.agentId !== focusedAgent.agentId)
                  .map((a) => ({ agentId: a.agentId, name: a.name }))}
                onForwardToAgent={(targetAgentId, message) => {
                  const target = allAgents.find(
                    (a) => a.agentId === targetAgentId,
                  );
                  if (!target) return;
                  onSend(target.agentId, target.sessionKey, message);
                }}
                pendingExecApprovals={pendingExecApprovals}
                onResolveExecApproval={(id, decision) => {
                  onResolveExecApproval(id, decision);
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
                : gatewayStatus === "connected"
                  ? tp("useNewAgent")
                  : tp("connectToGateway")
            }
            fillHeight
            className="items-center p-6 text-center text-sm"
          />
        )}
      </div>
    </div>
  );
};
