import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import type { AgentState } from "@/features/agents/state/store";
import type {
  PanelVisibility,
  PanelVisibilityActions,
} from "./usePanelVisibility";
import type { GatewayStatus } from "@/lib/gateway/GatewayClient";

const ConnectionPanel = dynamic(
  () =>
    import("@/features/agents/components/ConnectionPanel").then(
      (m) => m.ConnectionPanel,
    ),
  { ssr: false },
);
const ProvidersPanel = dynamic(
  () =>
    import("@/features/providers/components/ProvidersPanel").then(
      (m) => m.ProvidersPanel,
    ),
  { ssr: false },
);
const ChannelsPanel = dynamic(
  () =>
    import("@/features/channels/components/ChannelsPanel").then(
      (m) => m.ChannelsPanel,
    ),
  { ssr: false },
);
const RoutingPanel = dynamic(
  () =>
    import("@/features/routing/components/RoutingPanel").then(
      (m) => m.RoutingPanel,
    ),
  { ssr: false },
);
const WebhooksPanel = dynamic(
  () =>
    import("@/features/webhooks/components/WebhooksPanel").then(
      (m) => m.WebhooksPanel,
    ),
  { ssr: false },
);
const SkillsBrowser = dynamic(
  () =>
    import("@/features/skills/components/SkillsBrowser").then(
      (m) => m.SkillsBrowser,
    ),
  { ssr: false },
);
const AnalyticsDashboard = dynamic(
  () =>
    import("@/features/analytics/components/AnalyticsDashboard").then(
      (m) => m.AnalyticsDashboard,
    ),
  { ssr: false },
);
const LogViewer = dynamic(
  () => import("@/features/logs/components/LogViewer").then((m) => m.LogViewer),
  { ssr: false },
);
const CanvasPreview = dynamic(
  () =>
    import("@/features/canvas/components/CanvasPreview").then(
      (m) => m.CanvasPreview,
    ),
  { ssr: false },
);
const InterAgentFeed = dynamic(
  () =>
    import("@/features/intercom/components/InterAgentFeed").then(
      (m) => m.InterAgentFeed,
    ),
  { ssr: false },
);
const VoiceControls = dynamic(
  () =>
    import("@/features/voice/components/VoiceControls").then(
      (m) => m.VoiceControls,
    ),
  { ssr: false },
);

function OverlayWrapper({
  children,
  maxWidth = "max-w-3xl",
}: {
  children: React.ReactNode;
  maxWidth?: string;
}) {
  return (
    <div className="pointer-events-none fixed inset-x-0 top-12 z-[140] flex justify-center px-3 sm:px-4 md:px-5">
      <div
        className={`glass-panel pointer-events-auto flex w-full ${maxWidth} flex-col overflow-hidden !bg-card`}
        style={{ maxHeight: "calc(100vh - 5rem)" }}
      >
        {children}
      </div>
    </div>
  );
}

function CloseButton({
  onClick,
  label,
}: {
  onClick: () => void;
  label: string;
}) {
  return (
    <div className="flex justify-end border-t border-border px-4 py-2">
      <button
        type="button"
        className="ui-btn-ghost rounded-md px-3 py-1 text-xs font-medium"
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
}

export interface OverlayPanelsProps {
  panels: PanelVisibility;
  panelActions: PanelVisibilityActions;
  agents: AgentState[];
  gatewayUrl: string;
  token: string;
  status: GatewayStatus;
  gatewayError: string | null;
  onGatewayUrlChange: (url: string) => void;
  onTokenChange: (token: string) => void;
  onConnect: () => void;
  onDisconnect: () => void;
}

export function OverlayPanels({
  panels,
  panelActions,
  agents,
  gatewayUrl,
  token,
  status,
  gatewayError,
  onGatewayUrlChange,
  onTokenChange,
  onConnect,
  onDisconnect,
}: OverlayPanelsProps) {
  const tp = useTranslations("page");

  return (
    <>
      {panels.providers ? (
        <OverlayWrapper>
          <ErrorBoundary fallbackLabel={tp("providersError")}>
            <ProvidersPanel />
          </ErrorBoundary>
          <CloseButton
            onClick={() => panelActions.hide("providers")}
            label={tp("close")}
          />
        </OverlayWrapper>
      ) : null}
      {panels.channels ? (
        <OverlayWrapper>
          <ErrorBoundary fallbackLabel={tp("channelsError")}>
            <ChannelsPanel />
          </ErrorBoundary>
          <CloseButton
            onClick={() => panelActions.hide("channels")}
            label={tp("close")}
          />
        </OverlayWrapper>
      ) : null}
      {panels.routing ? (
        <OverlayWrapper>
          <ErrorBoundary fallbackLabel={tp("routingError")}>
            <RoutingPanel
              agents={agents.map((a) => ({
                id: a.agentId,
                name: a.name,
              }))}
            />
          </ErrorBoundary>
          <CloseButton
            onClick={() => panelActions.hide("routing")}
            label={tp("close")}
          />
        </OverlayWrapper>
      ) : null}
      {panels.webhooks ? (
        <OverlayWrapper>
          <ErrorBoundary fallbackLabel={tp("webhooksError")}>
            <WebhooksPanel />
          </ErrorBoundary>
          <CloseButton
            onClick={() => panelActions.hide("webhooks")}
            label={tp("close")}
          />
        </OverlayWrapper>
      ) : null}
      {panels.skills ? (
        <OverlayWrapper>
          <ErrorBoundary fallbackLabel={tp("skillsError")}>
            <SkillsBrowser />
          </ErrorBoundary>
          <CloseButton
            onClick={() => panelActions.hide("skills")}
            label={tp("close")}
          />
        </OverlayWrapper>
      ) : null}
      {panels.analytics ? (
        <OverlayWrapper maxWidth="max-w-4xl">
          <ErrorBoundary fallbackLabel={tp("analyticsError")}>
            <AnalyticsDashboard />
          </ErrorBoundary>
          <CloseButton
            onClick={() => panelActions.hide("analytics")}
            label={tp("close")}
          />
        </OverlayWrapper>
      ) : null}
      {panels.logViewer ? (
        <OverlayWrapper maxWidth="max-w-4xl">
          <ErrorBoundary fallbackLabel={tp("logViewerError")}>
            <LogViewer />
          </ErrorBoundary>
          <CloseButton
            onClick={() => panelActions.hide("logViewer")}
            label={tp("close")}
          />
        </OverlayWrapper>
      ) : null}
      {panels.canvas ? (
        <OverlayWrapper>
          <ErrorBoundary fallbackLabel={tp("canvasPreviewError")}>
            <CanvasPreview />
          </ErrorBoundary>
          <CloseButton
            onClick={() => panelActions.hide("canvas")}
            label={tp("close")}
          />
        </OverlayWrapper>
      ) : null}
      {panels.intercom ? (
        <OverlayWrapper>
          <ErrorBoundary fallbackLabel={tp("interAgentFeedError")}>
            <InterAgentFeed />
          </ErrorBoundary>
          <CloseButton
            onClick={() => panelActions.hide("intercom")}
            label={tp("close")}
          />
        </OverlayWrapper>
      ) : null}
      {panels.voice ? (
        <OverlayWrapper>
          <ErrorBoundary fallbackLabel={tp("voiceControlsError")}>
            <VoiceControls />
          </ErrorBoundary>
          <CloseButton
            onClick={() => panelActions.hide("voice")}
            label={tp("close")}
          />
        </OverlayWrapper>
      ) : null}
      {panels.connection ? (
        <div className="pointer-events-none fixed inset-x-0 top-12 z-[140] flex justify-center px-3 sm:px-4 md:px-5">
          <div
            className="glass-panel pointer-events-auto flex w-full max-w-4xl flex-col overflow-hidden !bg-card px-4 py-4 sm:px-6 sm:py-6"
            style={{ maxHeight: "calc(100vh - 5rem)" }}
          >
            <ConnectionPanel
              gatewayUrl={gatewayUrl}
              token={token}
              status={status}
              error={gatewayError}
              onGatewayUrlChange={onGatewayUrlChange}
              onTokenChange={onTokenChange}
              onConnect={onConnect}
              onDisconnect={onDisconnect}
              onClose={() => panelActions.hide("connection")}
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
