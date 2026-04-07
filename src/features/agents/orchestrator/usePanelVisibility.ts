import { useCallback, useState } from "react";

export type PanelKey =
  | "connection"
  | "providers"
  | "channels"
  | "routing"
  | "webhooks"
  | "skills"
  | "analytics"
  | "logViewer"
  | "canvas"
  | "intercom"
  | "voice"
  | "claudeCode"
  | "browserView"
  | "acpBridge";

export type PanelVisibility = Record<PanelKey, boolean>;

export type PanelVisibilityActions = {
  show: (key: PanelKey) => void;
  hide: (key: PanelKey) => void;
  toggle: (key: PanelKey) => void;
};

export function usePanelVisibility() {
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
  const [showClaudeCode, setShowClaudeCode] = useState(false);
  const [showBrowserView, setShowBrowserView] = useState(false);
  const [showAcpBridge, setShowAcpBridge] = useState(false);

  const panels: PanelVisibility = {
    connection: showConnectionPanel,
    providers: showProvidersPanel,
    channels: showChannelsPanel,
    routing: showRoutingPanel,
    webhooks: showWebhooksPanel,
    skills: showSkillsBrowser,
    analytics: showAnalytics,
    logViewer: showLogViewer,
    canvas: showCanvas,
    intercom: showIntercom,
    voice: showVoice,
    claudeCode: showClaudeCode,
    browserView: showBrowserView,
    acpBridge: showAcpBridge,
  };

  const setterMap: Record<
    PanelKey,
    React.Dispatch<React.SetStateAction<boolean>>
  > = {
    connection: setShowConnectionPanel,
    providers: setShowProvidersPanel,
    channels: setShowChannelsPanel,
    routing: setShowRoutingPanel,
    webhooks: setShowWebhooksPanel,
    skills: setShowSkillsBrowser,
    analytics: setShowAnalytics,
    logViewer: setShowLogViewer,
    canvas: setShowCanvas,
    intercom: setShowIntercom,
    voice: setShowVoice,
    claudeCode: setShowClaudeCode,
    browserView: setShowBrowserView,
    acpBridge: setShowAcpBridge,
  };

  const show = useCallback(
    (key: PanelKey) => {
      setterMap[key](true);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const hide = useCallback(
    (key: PanelKey) => {
      setterMap[key](false);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const toggle = useCallback(
    (key: PanelKey) => {
      setterMap[key]((prev) => !prev);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return {
    panels,
    panelActions: { show, hide, toggle } as PanelVisibilityActions,
  };
}
