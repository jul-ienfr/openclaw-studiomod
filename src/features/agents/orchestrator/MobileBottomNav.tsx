import { useTranslations } from "next-intl";
import { Users, MessageSquare, BarChart3, Settings } from "lucide-react";
import type { InspectSidebarState } from "@/features/agents/operations/settingsRouteWorkflow";

type MobilePane = "fleet" | "chat";

export interface MobileBottomNavProps {
  mobilePane: MobilePane;
  inspectSidebar: InspectSidebarState;
  showAnalytics: boolean;
  focusedAgentId: string | null;
  onSetMobilePane: (pane: MobilePane) => void;
  onClearInspectSidebar: () => void;
  onToggleAnalytics: () => void;
  onOpenAgentSettings: (agentId: string) => void;
}

export function MobileBottomNav({
  mobilePane,
  inspectSidebar,
  showAnalytics,
  focusedAgentId,
  onSetMobilePane,
  onClearInspectSidebar,
  onToggleAnalytics,
  onOpenAgentSettings,
}: MobileBottomNavProps) {
  const tp = useTranslations("page");

  return (
    <nav className="mobile-bottom-nav" aria-label="Mobile navigation">
      <button
        type="button"
        className="mobile-bottom-nav-item"
        data-active={
          mobilePane === "fleet" && !inspectSidebar ? "true" : "false"
        }
        onClick={() => {
          onSetMobilePane("fleet");
          onClearInspectSidebar();
        }}
      >
        <Users />
        <span>{tp("fleet")}</span>
      </button>
      <button
        type="button"
        className="mobile-bottom-nav-item"
        data-active={
          mobilePane === "chat" && !inspectSidebar ? "true" : "false"
        }
        onClick={() => {
          onSetMobilePane("chat");
          onClearInspectSidebar();
        }}
      >
        <MessageSquare />
        <span>{tp("chat")}</span>
      </button>
      <button
        type="button"
        className="mobile-bottom-nav-item"
        data-active={showAnalytics ? "true" : "false"}
        onClick={onToggleAnalytics}
      >
        <BarChart3 />
        <span>{tp("analytics")}</span>
      </button>
      <button
        type="button"
        className="mobile-bottom-nav-item"
        data-active={!!inspectSidebar ? "true" : "false"}
        onClick={() => {
          if (focusedAgentId) {
            onOpenAgentSettings(focusedAgentId);
          }
        }}
      >
        <Settings />
        <span>{tp("settings")}</span>
      </button>
    </nav>
  );
}
