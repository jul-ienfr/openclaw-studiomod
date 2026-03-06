"use client";

import { useTranslations } from "next-intl";
import dynamic from "next/dynamic";
import type { GatewayModelChoice } from "@/lib/gateway/models";
import type { AgentCreateModalSubmitPayload } from "@/features/agents/creation/types";

const AgentCreateModal = dynamic(
  () =>
    import("@/features/agents/components/AgentCreateModal").then(
      (m) => m.AgentCreateModal,
    ),
  { ssr: false },
);

type CreateAgentBlock = {
  phase: "queued" | "creating";
  agentName: string;
};

type RestartingMutationBlock = {
  phase: "queued" | "mutating" | "awaiting-restart";
  agentName: string;
  kind: string;
  sawDisconnect?: boolean;
};

export type AgentStudioModalsProps = {
  // Create agent modal
  createAgentModalOpen: boolean;
  suggestedCreateAgentName: string | null;
  createAgentBusy: boolean;
  createAgentModalError: string | null;
  allModels: GatewayModelChoice[];
  onCloseCreateModal: () => void;
  onSubmitCreateAgent: (payload: AgentCreateModalSubmitPayload) => void;
  // Create agent block overlay
  createAgentBlock: CreateAgentBlock | null;
  createBlockStatusLine: string | null;
  // Restarting mutation block overlay
  restartingMutationBlock: RestartingMutationBlock | null;
  restartingMutationStatusLine: string | null;
  restartingMutationModalTestId: string | null;
  restartingMutationAriaLabel: string | null;
  restartingMutationHeading: string | null;
};

export const AgentStudioModals = ({
  createAgentModalOpen,
  suggestedCreateAgentName,
  createAgentBusy,
  createAgentModalError,
  allModels,
  onCloseCreateModal,
  onSubmitCreateAgent,
  createAgentBlock,
  createBlockStatusLine,
  restartingMutationBlock,
  restartingMutationStatusLine,
  restartingMutationModalTestId,
  restartingMutationAriaLabel,
  restartingMutationHeading,
}: AgentStudioModalsProps) => {
  const tp = useTranslations("page");

  return (
    <>
      {createAgentModalOpen ? (
        <AgentCreateModal
          open={createAgentModalOpen}
          suggestedName={suggestedCreateAgentName ?? ""}
          busy={createAgentBusy}
          submitError={createAgentModalError}
          models={allModels}
          onClose={onCloseCreateModal}
          onSubmit={onSubmitCreateAgent}
        />
      ) : null}
      {createAgentBlock && createAgentBlock.phase !== "queued" ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80"
          data-testid="agent-create-restart-modal"
          role="dialog"
          aria-modal="true"
          aria-label={tp("creatingAgent")}
        >
          <div className="ui-panel w-full max-w-md p-6">
            <div className="font-mono text-[10px] font-semibold tracking-[0.06em] text-muted-foreground">
              {tp("agentCreateInProgress")}
            </div>
            <div className="mt-2 text-base font-semibold text-foreground">
              {createAgentBlock.agentName}
            </div>
            <div className="mt-3 text-sm text-muted-foreground">
              {tp("studioLockedCreation")}
            </div>
            {createBlockStatusLine ? (
              <div className="ui-card mt-4 px-3 py-2 font-mono text-[11px] tracking-[0.06em] text-foreground">
                {createBlockStatusLine}
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
      {restartingMutationBlock && restartingMutationBlock.phase !== "queued" ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80"
          data-testid={restartingMutationModalTestId ?? undefined}
          role="dialog"
          aria-modal="true"
          aria-label={restartingMutationAriaLabel ?? undefined}
        >
          <div className="ui-panel w-full max-w-md p-6">
            <div className="font-mono text-[10px] font-semibold tracking-[0.06em] text-muted-foreground">
              {restartingMutationHeading}
            </div>
            <div className="mt-2 text-base font-semibold text-foreground">
              {restartingMutationBlock.agentName}
            </div>
            <div className="mt-3 text-sm text-muted-foreground">
              {tp("studioLockedRestart")}
            </div>
            {restartingMutationStatusLine ? (
              <div className="ui-card mt-4 px-3 py-2 font-mono text-[11px] tracking-[0.06em] text-foreground">
                {restartingMutationStatusLine}
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
};
