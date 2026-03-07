import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import type { AgentCreateModalSubmitPayload } from "@/features/agents/creation/types";
import type { GatewayModelChoice } from "@/lib/gateway/models";
import type {
  CreateAgentBlockState,
  MutationStatusBlock,
} from "@/features/agents/operations/mutationLifecycleWorkflow";
import { resolveConfigMutationStatusLine } from "@/features/agents/operations/mutationLifecycleWorkflow";
import type { GatewayStatus } from "@/lib/gateway/GatewayClient";

const AgentCreateModal = dynamic(
  () =>
    import("@/features/agents/components/AgentCreateModal").then(
      (m) => m.AgentCreateModal,
    ),
  { ssr: false },
);

export interface BlockingModalsProps {
  // Create agent modal
  createAgentModalOpen: boolean;
  suggestedCreateAgentName: string;
  createAgentBusy: boolean;
  createAgentModalError: string | null;
  allModels: GatewayModelChoice[];
  onCloseCreateModal: () => void;
  onCreateAgentSubmit: (payload: AgentCreateModalSubmitPayload) => void;
  // Create agent block overlay
  createAgentBlock: CreateAgentBlockState | null;
  createBlockStatusLine: string | null;
  // Restarting mutation block overlay
  restartingMutationBlock: {
    phase: string;
    kind: string;
    agentName: string;
    sawDisconnect: boolean;
  } | null;
  status: GatewayStatus;
}

export function BlockingModals({
  createAgentModalOpen,
  suggestedCreateAgentName,
  createAgentBusy,
  createAgentModalError,
  allModels,
  onCloseCreateModal,
  onCreateAgentSubmit,
  createAgentBlock,
  createBlockStatusLine,
  restartingMutationBlock,
  status,
}: BlockingModalsProps) {
  const tp = useTranslations("page");

  const restartingMutationStatusLine = resolveConfigMutationStatusLine({
    block: restartingMutationBlock
      ? {
          phase: restartingMutationBlock.phase as MutationStatusBlock["phase"],
          sawDisconnect: restartingMutationBlock.sawDisconnect,
        }
      : null,
    status,
  });
  const restartingMutationModalTestId = restartingMutationBlock
    ? restartingMutationBlock.kind === "delete-agent"
      ? "agent-delete-restart-modal"
      : "agent-rename-restart-modal"
    : null;
  const restartingMutationAriaLabel = restartingMutationBlock
    ? restartingMutationBlock.kind === "delete-agent"
      ? "Deleting agent and restarting gateway"
      : "Renaming agent and restarting gateway"
    : null;
  const restartingMutationHeading = restartingMutationBlock
    ? restartingMutationBlock.kind === "delete-agent"
      ? "Agent delete in progress"
      : "Agent rename in progress"
    : null;

  return (
    <>
      {createAgentModalOpen ? (
        <AgentCreateModal
          open={createAgentModalOpen}
          suggestedName={suggestedCreateAgentName}
          busy={createAgentBusy}
          submitError={createAgentModalError}
          models={allModels}
          onClose={onCloseCreateModal}
          onSubmit={onCreateAgentSubmit}
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
}
