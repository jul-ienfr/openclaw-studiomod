"use client";

import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";

const LogViewer = dynamic(
  () =>
    import("@/features/logs/components/LogViewer").then((m) => m.LogViewer),
  { ssr: false },
);
const AnalyticsDashboard = dynamic(
  () =>
    import("@/features/analytics/components/AnalyticsDashboard").then(
      (m) => m.AnalyticsDashboard,
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

type Tab = "logs" | "analytics" | "intercom";
const TABS: Tab[] = ["logs", "analytics", "intercom"];

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
  const activeTab: Tab = (TABS as string[]).includes(rawTab)
    ? (rawTab as Tab)
    : "logs";

  const setTab = (tab: Tab) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", tab);
    router.replace(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex h-full flex-col overflow-hidden">
      <div className="flex shrink-0 border-b border-border px-5">
        {TABS.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setTab(tab)}
            className={`border-b-2 px-4 py-2.5 text-xs font-medium transition-colors ${
              activeTab === tab
                ? "border-primary text-foreground"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            {t(`tab_${tab}`)}
          </button>
        ))}
      </div>

      <div className="min-h-0 flex-1 overflow-hidden">
        <Suspense fallback={<LoadingFallback />}>
          {activeTab === "logs" && <LogViewer />}
          {activeTab === "analytics" && <AnalyticsDashboard />}
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
