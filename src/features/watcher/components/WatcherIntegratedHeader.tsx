"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Radar, RefreshCw } from "lucide-react";
import { useWatcherController } from "@/features/watcher/operations/useWatcherController";
import { useWatcherStore } from "@/features/watcher/state/store";
import { useState } from "react";

const TABS = [
  { href: "/watcher", label: "Tableau de bord", exact: true },
  { href: "/watcher/review", label: "À traiter", badge: true },
  { href: "/watcher/search", label: "Recherche" },
  { href: "/watcher/history", label: "Historique" },
  { href: "/watcher/sources", label: "Sources" },
  { href: "/watcher/scoring", label: "Scores" },
  { href: "/watcher/implementations", label: "Implémentations" },
  { href: "/watcher/reports", label: "Rapports" },
  { href: "/watcher/settings", label: "Réglages" },
];

export function WatcherIntegratedHeader() {
  const pathname = usePathname();
  const { triggerCheck, loadSources } = useWatcherController();
  const { state: { newItemsCount } } = useWatcherStore();
  const [checking, setChecking] = useState(false);

  const isActive = (href: string, exact = false) => {
    if (exact) return pathname === href;
    return pathname === href || pathname.startsWith(href + "/");
  };

  const handleCheck = async () => {
    setChecking(true);
    try {
      await triggerCheck();
      await loadSources();
    } finally {
      setChecking(false);
    }
  };

  return (
    <header className="shrink-0 border-b border-border bg-sidebar">
      {/* Title row */}
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-surface-2">
            <Radar className="h-4 w-4 text-muted-foreground" />
          </div>
          <div>
            <h1 className="console-title type-page-title text-foreground">Watcher</h1>
            <p className="text-xs text-muted-foreground">Surveillance & scoring automatique</p>
          </div>
        </div>
        <button
          onClick={() => void handleCheck()}
          disabled={checking}
          className="ui-btn-primary flex items-center gap-2 px-4 py-2 text-sm"
        >
          <RefreshCw className={`h-4 w-4 ${checking ? "animate-spin" : ""}`} />
          {checking ? "En cours..." : "Vérifier"}
        </button>
      </div>

      {/* Tab bar */}
      <nav className="flex items-center gap-0.5 px-4">
        {TABS.map(({ href, label, exact, badge }) => {
          const active = isActive(href, exact);
          return (
            <Link
              key={href}
              href={href}
              className={`relative inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium transition-colors ${
                active
                  ? "text-foreground after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-t"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {label}
              {badge && newItemsCount > 0 && (
                <span className="inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-semibold leading-none text-primary-foreground">
                  {newItemsCount > 99 ? "99+" : newItemsCount}
                </span>
              )}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
