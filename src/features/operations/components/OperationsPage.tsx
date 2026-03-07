"use client";

import { Suspense, useRef, useState, useEffect, useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import {
  FileText,
  BarChart3,
  Clock,
  FileBarChart,
  MessageSquare,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const LogViewer = dynamic(
  () => import("@/features/logs/components/LogViewer").then((m) => m.LogViewer),
  { ssr: false },
);
const AnalyticsDashboard = dynamic(
  () =>
    import("@/features/analytics/components/AnalyticsDashboard").then(
      (m) => m.AnalyticsDashboard,
    ),
  { ssr: false },
);
const CronPanel = dynamic(
  () => import("@/features/cron/components/CronPanel").then((m) => m.CronPanel),
  { ssr: false },
);
const ReportsPanel = dynamic(
  () =>
    import("@/features/reports/components/ReportsPanel").then(
      (m) => m.ReportsPanel,
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

type Tab = "logs" | "analytics" | "cron" | "reports" | "intercom";

interface TabDef {
  id: Tab;
  icon: LucideIcon;
}

const TABS: TabDef[] = [
  { id: "logs", icon: FileText },
  { id: "analytics", icon: BarChart3 },
  { id: "cron", icon: Clock },
  { id: "reports", icon: FileBarChart },
  { id: "intercom", icon: MessageSquare },
];

function LoadingFallback() {
  return (
    <div className="flex h-full items-center justify-center text-muted-foreground text-sm">
      <span>...</span>
    </div>
  );
}

function OperationsPageInner() {
  const t = useTranslations("operations");
  const searchParams = useSearchParams();
  const router = useRouter();

  const rawTab = searchParams.get("tab") ?? "logs";
  const activeTab: Tab = TABS.some((td) => td.id === rawTab)
    ? (rawTab as Tab)
    : "logs";

  const setTab = (tab: Tab) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", tab);
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  // Sliding indicator
  const containerRef = useRef<HTMLDivElement>(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  const updateIndicator = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const btn = container.querySelector<HTMLButtonElement>(
      `[data-tab-id="${activeTab}"]`,
    );
    if (btn) {
      setIndicator({ left: btn.offsetLeft, width: btn.offsetWidth });
    }
  }, [activeTab]);

  useEffect(() => {
    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [updateIndicator]);

  return (
    <div className="flex h-full flex-col overflow-hidden">
      {/* Glass tab bar */}
      <div
        ref={containerRef}
        role="tablist"
        className={cn(
          "glass-panel relative flex shrink-0 gap-1 px-2",
          "!rounded-none !border-x-0 !border-t-0 border-b border-border/50",
        )}
      >
        {TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              data-tab-id={tab.id}
              onClick={() => setTab(tab.id)}
              className={cn(
                "relative z-10 flex items-center gap-2 rounded-lg px-4 py-2.5 text-xs font-medium",
                "transition-all duration-[var(--transition-base)]",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:rounded-lg",
                isActive
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-surface-1",
              )}
            >
              <Icon className="h-4 w-4" strokeWidth={1.75} />
              <span>{t(`tab_${tab.id}`)}</span>
            </button>
          );
        })}

        {/* Sliding active indicator */}
        <span
          aria-hidden="true"
          className="absolute bottom-0 h-0.5 rounded-full bg-primary transition-all duration-[var(--transition-base)]"
          style={{ left: indicator.left, width: indicator.width }}
        />
      </div>

      <div className="min-h-0 flex-1 overflow-hidden">
        <Suspense fallback={<LoadingFallback />}>
          {activeTab === "logs" && <LogViewer />}
          {activeTab === "analytics" && <AnalyticsDashboard />}
          {activeTab === "cron" && <CronPanel />}
          {activeTab === "reports" && <ReportsPanel />}
          {activeTab === "intercom" && <InterAgentFeed />}
        </Suspense>
      </div>
    </div>
  );
}

export function OperationsPage() {
  return (
    <Suspense
      fallback={
        <div className="flex h-full items-center justify-center text-muted-foreground text-sm">
          <span>...</span>
        </div>
      }
    >
      <OperationsPageInner />
    </Suspense>
  );
}
