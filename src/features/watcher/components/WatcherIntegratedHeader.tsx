"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Radar, RefreshCw, Search, X } from "lucide-react";
import { useWatcherController } from "@/features/watcher/operations/useWatcherController";
import { useWatcherStore } from "@/features/watcher/state/store";
import { useState, useRef } from "react";

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
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement | null>(null);

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

  const handleSearchOpen = () => {
    setSearchOpen(true);
    requestAnimationFrame(() => searchInputRef.current?.focus());
  };

  const handleSearchClose = () => {
    setSearchOpen(false);
    setSearchQuery("");
  };

  return (
    <header className="shrink-0 border-b border-border/50 backdrop-blur-sm bg-background/80">
      {/* Title row */}
      <div className="flex items-center justify-between px-5 py-3">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
            <Radar className="h-4 w-4 text-primary" />
          </div>
          <div>
            <h1 className="console-title type-page-title text-foreground">Watcher</h1>
            <p className="text-[10px] text-muted-foreground leading-tight">Surveillance & scoring automatique</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {/* Inline search */}
          {searchOpen ? (
            <div className="flex items-center gap-2 rounded-lg border border-border/50 bg-background/60 backdrop-blur-sm px-3 py-1.5">
              <Search className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Rechercher..."
                className="w-48 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
                onKeyDown={(e) => {
                  if (e.key === "Escape") handleSearchClose();
                }}
              />
              <button
                type="button"
                onClick={handleSearchClose}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Fermer la recherche"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={handleSearchOpen}
              className="flex items-center gap-1.5 rounded-lg border border-border/50 bg-background/40 px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:border-border transition-colors"
              aria-label="Rechercher"
            >
              <Search className="h-3.5 w-3.5" />
              <span className="text-xs">Rechercher</span>
            </button>
          )}
          <button
            onClick={() => void handleCheck()}
            disabled={checking}
            className="ui-btn-primary flex items-center gap-2 px-3 py-1.5 text-sm"
          >
            <RefreshCw className={`h-3.5 w-3.5 ${checking ? "animate-spin" : ""}`} />
            {checking ? "En cours..." : "Vérifier"}
          </button>
        </div>
      </div>

      {/* Tab bar with sliding underline */}
      <nav className="relative flex items-center gap-0 px-4 overflow-x-auto">
        {TABS.map(({ href, label, exact, badge }) => {
          const active = isActive(href, exact);
          return (
            <Link
              key={href}
              href={href}
              className={`relative inline-flex shrink-0 items-center gap-1.5 px-3.5 py-2.5 text-[13px] font-medium transition-colors ${
                active
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {label}
              {badge && newItemsCount > 0 && (
                <span className="inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-semibold leading-none text-primary-foreground">
                  {newItemsCount > 99 ? "99+" : newItemsCount}
                </span>
              )}
              {/* Sliding underline indicator */}
              {active && (
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 right-0 h-0.5 rounded-t bg-primary"
                />
              )}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
