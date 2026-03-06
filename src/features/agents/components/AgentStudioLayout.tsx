"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Users, MessageSquare, BarChart3, Settings, X } from "lucide-react";

import type { GatewayStatus } from "@/lib/gateway/GatewayClient";
import type { InspectSidebarState } from "@/features/agents/operations/settingsRouteWorkflow";
import type { PanelCallbacks } from "./AgentPanelOrchestrator";
import { useLayout } from "@/lib/hooks/useLayout";

export type MobilePane = "fleet" | "chat";

export type AgentStudioLayoutProps = {
  /** Gateway status */
  status: GatewayStatus;
  /** Header bar callbacks */
  headerCallbacks: PanelCallbacks;
  /** Provider counts for header */
  configuredProviderCount: number;
  totalProviderCount: number;
  /** Mobile pane */
  mobilePane: MobilePane;
  setMobilePane: React.Dispatch<React.SetStateAction<MobilePane>>;
  /** Inspect sidebar (for mobile nav highlighting) */
  inspectSidebar: InspectSidebarState;
  setInspectSidebar: React.Dispatch<React.SetStateAction<InspectSidebarState>>;
  /** Analytics toggle for mobile nav */
  showAnalytics: boolean;
  setShowAnalytics: React.Dispatch<React.SetStateAction<boolean>>;
  /** Focused agent for settings mobile nav */
  focusedAgentId: string | null;
  handleOpenAgentSettingsRoute: (agentId: string) => void;
  /** Children slots */
  children: React.ReactNode;
  /** Fleet sidebar content for mobile bottom-sheet */
  fleetContent?: React.ReactNode;
  /** Inspect panel content for mobile overlay */
  inspectContent?: React.ReactNode;
};

export const AgentStudioLayout = ({
  status,
  headerCallbacks,
  configuredProviderCount,
  totalProviderCount,
  mobilePane,
  setMobilePane,
  inspectSidebar,
  setInspectSidebar,
  showAnalytics,
  setShowAnalytics,
  focusedAgentId,
  handleOpenAgentSettingsRoute,
  children,
  fleetContent,
  inspectContent,
}: AgentStudioLayoutProps) => {
  const tp = useTranslations("page");
  const { isMobile } = useLayout();

  // Chat-first on mobile: default to "chat" pane
  useEffect(() => {
    if (isMobile) setMobilePane("chat");
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-background">
      <div className="relative z-10 flex h-screen flex-col">
        {children}
      </div>

      {/* Mobile fleet bottom-sheet */}
      {isMobile && fleetContent && (
        <div
          className={`fixed inset-x-0 bottom-[56px] z-40 rounded-t-xl border-t border-border bg-background shadow-lg transition-transform duration-300 ${
            mobilePane === "fleet" ? "translate-y-0" : "translate-y-full"
          }`}
          style={{ maxHeight: "70vh", overflowY: "auto" }}
        >
          <div className="mx-auto mt-2 mb-1 h-1.5 w-12 rounded-full bg-muted" />
          {fleetContent}
        </div>
      )}

      {/* Mobile inspect fullscreen overlay */}
      {isMobile && inspectContent && inspectSidebar && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-background">
          <button
            type="button"
            onClick={() => setInspectSidebar(null)}
            className="absolute right-4 top-4 z-10 flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg hover:bg-surface-1"
          >
            <X className="h-5 w-5" />
          </button>
          {inspectContent}
        </div>
      )}
      <nav className="mobile-bottom-nav" aria-label="Mobile navigation">
        <button
          type="button"
          className="mobile-bottom-nav-item"
          data-active={
            mobilePane === "fleet" && !inspectSidebar ? "true" : "false"
          }
          onClick={() => {
            setMobilePane("fleet");
            setInspectSidebar(null);
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
            setMobilePane("chat");
            setInspectSidebar(null);
          }}
        >
          <MessageSquare />
          <span>{tp("chat")}</span>
        </button>
        <button
          type="button"
          className="mobile-bottom-nav-item"
          data-active={showAnalytics ? "true" : "false"}
          onClick={() => setShowAnalytics((v) => !v)}
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
              handleOpenAgentSettingsRoute(focusedAgentId);
            }
          }}
        >
          <Settings />
          <span>{tp("settings")}</span>
        </button>
      </nav>
    </div>
  );
};
