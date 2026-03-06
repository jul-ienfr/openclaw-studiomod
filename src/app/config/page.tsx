"use client";

import { useSearchParams, useRouter } from "next/navigation";
import {
  Palette,
  Layers,
  Info,
  ChevronRight,
  Monitor,
  Clock,
} from "lucide-react";
import dynamic from "next/dynamic";

const ThemeEditorTab = dynamic(
  () =>
    import("@/features/config/components/ThemeEditorTab").then(
      (m) => m.ThemeEditorTab,
    ),
  {
    ssr: false,
    loading: () => (
      <div className="py-16 text-center text-sm text-muted-foreground">
        Chargement...
      </div>
    ),
  },
);

const PillarsTab = dynamic(
  () =>
    import("@/features/config/components/PillarsTab").then((m) => m.PillarsTab),
  {
    ssr: false,
    loading: () => (
      <div className="py-16 text-center text-sm text-muted-foreground">
        Chargement...
      </div>
    ),
  },
);

const SystemTab = dynamic(
  () =>
    import("@/features/config/components/SystemTab").then((m) => m.SystemTab),
  {
    ssr: false,
    loading: () => (
      <div className="py-16 text-center text-sm text-muted-foreground">
        Chargement...
      </div>
    ),
  },
);

const CronTab = dynamic(
  () => import("@/features/config/components/CronTab").then((m) => m.CronTab),
  {
    ssr: false,
    loading: () => (
      <div className="py-16 text-center text-sm text-muted-foreground">
        Chargement...
      </div>
    ),
  },
);

type TabId = "general" | "theme" | "pillars" | "system" | "cron";

const TABS: {
  id: TabId;
  label: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
}[] = [
  { id: "general", label: "Général", icon: Info },
  { id: "theme", label: "Thème", icon: Palette },
  { id: "pillars", label: "Piliers", icon: Layers },
  { id: "system", label: "Système", icon: Monitor },
  { id: "cron", label: "Cron", icon: Clock },
];

export default function ConfigPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const rawTab = searchParams.get("tab") as TabId | null;
  const activeTab: TabId =
    rawTab && TABS.some((t) => t.id === rawTab) ? rawTab : "general";

  const switchTab = (tab: TabId) => {
    router.replace(`/config?tab=${tab}`, { scroll: false });
  };

  return (
    <div className="flex h-screen flex-col overflow-hidden">
      {/* Header */}
      <header className="flex shrink-0 items-center gap-2 border-b border-border px-6 py-4">
        <h1 className="font-display text-2xl tracking-wide">Configuration</h1>
        <ChevronRight
          className="h-4 w-4 text-muted-foreground"
          strokeWidth={1.5}
        />
        <span className="text-sm text-muted-foreground capitalize">
          {activeTab}
        </span>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Tab sidebar */}
        <aside className="w-48 shrink-0 border-r border-border p-3 space-y-1">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => switchTab(tab.id)}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                  active
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-muted-foreground hover:bg-surface-2 hover:text-foreground"
                }`}
              >
                <Icon className="h-4 w-4" strokeWidth={1.75} />
                {tab.label}
              </button>
            );
          })}
        </aside>

        {/* Tab content */}
        <main className="flex-1 overflow-y-auto p-6">
          {activeTab === "general" && (
            <div className="max-w-2xl space-y-6">
              <h2 className="text-base font-semibold">Paramètres généraux</h2>
              <div className="rounded-xl border border-border bg-card p-4 space-y-3">
                <p className="text-sm text-muted-foreground">
                  Accédez aux onglets <strong>Thème</strong> et{" "}
                  <strong>Piliers</strong> pour personnaliser l&apos;apparence
                  et les unités métier de votre Studio.
                </p>
                <p className="text-sm text-muted-foreground">
                  Les paramètres opérationnels (gateway, auth, mobile) se
                  trouvent dans les sections dédiées de la navigation.
                </p>
              </div>
            </div>
          )}
          {activeTab === "theme" && <ThemeEditorTab />}
          {activeTab === "pillars" && <PillarsTab />}
          {activeTab === "system" && <SystemTab />}
          {activeTab === "cron" && <CronTab />}
        </main>
      </div>
    </div>
  );
}
