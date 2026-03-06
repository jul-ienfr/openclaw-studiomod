"use client";

import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import type { GatewayStatus } from "@/lib/gateway/GatewayClient";
import type { AgentState } from "@/features/agents/state/store";

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

type PanelOverlayProps = {
  visible: boolean;
  onClose: () => void;
  label: string;
  maxWidth?: string;
  children: React.ReactNode;
};

const PanelOverlay = ({
  visible,
  onClose,
  label,
  maxWidth = "max-w-3xl",
  children,
}: PanelOverlayProps) => {
  const tp = useTranslations("page");
  if (!visible) return null;
  return (
    <div className="pointer-events-none fixed inset-x-0 top-12 z-[140] flex justify-center px-3 sm:px-4 md:px-5">
      <div
        className={`glass-panel pointer-events-auto flex w-full ${maxWidth} flex-col overflow-hidden !bg-card`}
        style={{ maxHeight: "calc(100vh - 5rem)" }}
      >
        <ErrorBoundary fallbackLabel={label}>
          {children}
        </ErrorBoundary>
        <div className="flex justify-end border-t border-border px-4 py-2">
          <button
            type="button"
            className="ui-btn-ghost rounded-md px-3 py-1 text-xs font-medium"
            onClick={onClose}
          >
            {tp("close")}
          </button>
        </div>
      </div>
    </div>
  );
};

export type PanelVisibility = {
  showConnectionPanel: boolean;
  showProvidersPanel: boolean;
  showChannelsPanel: boolean;
  showRoutingPanel: boolean;
  showWebhooksPanel: boolean;
  showSkillsBrowser: boolean;
  showAnalytics: boolean;
  showLogViewer: boolean;
  showCanvas: boolean;
  showIntercom: boolean;
  showVoice: boolean;
};

export type PanelCallbacks = {
  onConnectionSettings: () => void;
  onProviders: () => void;
  onChannels: () => void;
  onRouting: () => void;
  onWebhooks: () => void;
  onSkills: () => void;
  onAnalytics: () => void;
  onLogs: () => void;
  onCanvas: () => void;
  onIntercom: () => void;
  onVoice: () => void;
};

export const usePanelOrchestrator = () => {
  const [showConnectionPanel, setShowConnectionPanel] = useState(false);
  const [showProvidersPanel, setShowProvidersPanel] = useState(false);
  const [showChannelsPanel, setShowChannelsPanel] = useState(false);
  const [showRoutingPanel, setShowRoutingPanel] = useState(false);
  const [showWebhooksPanel, setShowWebhooksPanel] = useState(false);
  const [showSkillsBrowser, setShowSkillsBrowser] = useState(false);
  const [showAnalytics, setShowAnalytics] = useState(false);
  const [showLogViewer, setShowLogViewer] = useState(false);
  const [showCanvas, setShowCanvas] = useState(false);
  const [showIntercom, setShowIntercom] = useState(false);
  const [showVoice, setShowVoice] = useState(false);

  const visibility: PanelVisibility = {
    showConnectionPanel,
    showProvidersPanel,
    showChannelsPanel,
    showRoutingPanel,
    showWebhooksPanel,
    showSkillsBrowser,
    showAnalytics,
    showLogViewer,
    showCanvas,
    showIntercom,
    showVoice,
  };

  const headerCallbacks: PanelCallbacks = {
    onConnectionSettings: () => setShowConnectionPanel(true),
    onProviders: () => setShowProvidersPanel((prev) => !prev),
    onChannels: () => setShowChannelsPanel((prev) => !prev),
    onRouting: () => setShowRoutingPanel((prev) => !prev),
    onWebhooks: () => setShowWebhooksPanel((prev) => !prev),
    onSkills: () => setShowSkillsBrowser((prev) => !prev),
    onAnalytics: () => setShowAnalytics((prev) => !prev),
    onLogs: () => setShowLogViewer((prev) => !prev),
    onCanvas: () => setShowCanvas((prev) => !prev),
    onIntercom: () => setShowIntercom((prev) => !prev),
    onVoice: () => setShowVoice((prev) => !prev),
  };

  /** For the disconnected screen, all on* open (not toggle) */
  const headerCallbacksOpen: PanelCallbacks = {
    onConnectionSettings: () => setShowConnectionPanel(true),
    onProviders: () => setShowProvidersPanel(true),
    onChannels: () => setShowChannelsPanel(true),
    onRouting: () => setShowRoutingPanel(true),
    onWebhooks: () => setShowWebhooksPanel(true),
    onSkills: () => setShowSkillsBrowser(true),
    onAnalytics: () => setShowAnalytics(true),
    onLogs: () => setShowLogViewer(true),
    onCanvas: () => setShowCanvas(true),
    onIntercom: () => setShowIntercom(true),
    onVoice: () => setShowVoice(true),
  };

  const closers = {
    closeConnectionPanel: () => setShowConnectionPanel(false),
    closeProvidersPanel: () => setShowProvidersPanel(false),
    closeChannelsPanel: () => setShowChannelsPanel(false),
    closeRoutingPanel: () => setShowRoutingPanel(false),
    closeWebhooksPanel: () => setShowWebhooksPanel(false),
    closeSkillsBrowser: () => setShowSkillsBrowser(false),
    closeAnalytics: () => setShowAnalytics(false),
    closeLogViewer: () => setShowLogViewer(false),
    closeCanvas: () => setShowCanvas(false),
    closeIntercom: () => setShowIntercom(false),
    closeVoice: () => setShowVoice(false),
  };

  return {
    visibility,
    headerCallbacks,
    headerCallbacksOpen,
    closers,
    // Expose individual setters for analytics (mobile nav)
    setShowAnalytics,
  };
};

export type AgentPanelOrchestratorProps = {
  visibility: PanelVisibility;
  closers: ReturnType<typeof usePanelOrchestrator>["closers"];
  /** Gateway connection props for connection panel */
  gatewayUrl: string;
  token: string;
  status: GatewayStatus;
  gatewayError: string | null;
  setGatewayUrl: (value: string) => void;
  setToken: (value: string) => void;
  connect: () => Promise<void>;
  disconnect: () => void;
  /** Agents for routing panel */
  agents: AgentState[];
};

export const AgentPanelOrchestrator = ({
  visibility,
  closers,
  gatewayUrl,
  token,
  status,
  gatewayError,
  setGatewayUrl,
  setToken,
  connect,
  disconnect,
  agents,
}: AgentPanelOrchestratorProps) => {
  const tp = useTranslations("page");

  return (
    <>
      <PanelOverlay
        visible={visibility.showProvidersPanel}
        onClose={closers.closeProvidersPanel}
        label={tp("providersError")}
      >
        <ProvidersPanel />
      </PanelOverlay>

      <PanelOverlay
        visible={visibility.showChannelsPanel}
        onClose={closers.closeChannelsPanel}
        label={tp("channelsError")}
      >
        <ChannelsPanel />
      </PanelOverlay>

      <PanelOverlay
        visible={visibility.showRoutingPanel}
        onClose={closers.closeRoutingPanel}
        label={tp("routingError")}
      >
        <RoutingPanel
          agents={agents.map((a) => ({
            id: a.agentId,
            name: a.name,
          }))}
        />
      </PanelOverlay>

      <PanelOverlay
        visible={visibility.showWebhooksPanel}
        onClose={closers.closeWebhooksPanel}
        label={tp("webhooksError")}
      >
        <WebhooksPanel />
      </PanelOverlay>

      <PanelOverlay
        visible={visibility.showSkillsBrowser}
        onClose={closers.closeSkillsBrowser}
        label={tp("skillsError")}
      >
        <SkillsBrowser />
      </PanelOverlay>

      <PanelOverlay
        visible={visibility.showAnalytics}
        onClose={closers.closeAnalytics}
        label={tp("analyticsError")}
        maxWidth="max-w-4xl"
      >
        <AnalyticsDashboard />
      </PanelOverlay>

      <PanelOverlay
        visible={visibility.showLogViewer}
        onClose={closers.closeLogViewer}
        label={tp("logViewerError")}
        maxWidth="max-w-4xl"
      >
        <LogViewer />
      </PanelOverlay>

      <PanelOverlay
        visible={visibility.showCanvas}
        onClose={closers.closeCanvas}
        label={tp("canvasPreviewError")}
      >
        <CanvasPreview />
      </PanelOverlay>

      <PanelOverlay
        visible={visibility.showIntercom}
        onClose={closers.closeIntercom}
        label={tp("interAgentFeedError")}
      >
        <InterAgentFeed />
      </PanelOverlay>

      <PanelOverlay
        visible={visibility.showVoice}
        onClose={closers.closeVoice}
        label={tp("voiceControlsError")}
      >
        <VoiceControls />
      </PanelOverlay>

      {visibility.showConnectionPanel ? (
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
              onGatewayUrlChange={setGatewayUrl}
              onTokenChange={setToken}
              onConnect={() => void connect()}
              onDisconnect={disconnect}
              onClose={closers.closeConnectionPanel}
            />
          </div>
        </div>
      ) : null}
    </>
  );
};
