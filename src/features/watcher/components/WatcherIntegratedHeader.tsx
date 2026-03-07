"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Radar,
  RefreshCw,
  Search,
  X,
  Database,
  Globe,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { useWatcherController } from "@/features/watcher/operations/useWatcherController";
import { useWatcherStore } from "@/features/watcher/state/store";
import { useState, useRef, useEffect, useCallback } from "react";
import type { WatchItem } from "@/features/watcher/types";

interface ClawHubSkill {
  slug: string;
  displayName: string;
  summary: string;
  version?: string;
  score: number;
}

const TABS = [
  { href: "/watcher", label: "Tableau de bord", exact: true },
  { href: "/watcher/review", label: "À traiter", badge: true },
  { href: "/watcher/history", label: "Historique" },
  { href: "/watcher/sources", label: "Sources" },
  { href: "/watcher/scoring", label: "Scores" },
  { href: "/watcher/reports", label: "Rapports" },
  { href: "/watcher/settings", label: "Réglages" },
];

export function WatcherIntegratedHeader() {
  const pathname = usePathname();
  const { triggerCheck, loadSources } = useWatcherController();
  const {
    state: { newItemsCount },
  } = useWatcherStore();
  const [checking, setChecking] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Search results state
  const [isSearching, setIsSearching] = useState(false);
  const [localResults, setLocalResults] = useState<WatchItem[]>([]);
  const [clawhubResults, setClawhubResults] = useState<ClawHubSkill[]>([]);
  const [clawhubError, setClawhubError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

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
    setLocalResults([]);
    setClawhubResults([]);
    setClawhubError(null);
    setHasSearched(false);
  };

  // Debounced search
  const performSearch = useCallback(async (q: string) => {
    if (!q.trim()) {
      setLocalResults([]);
      setClawhubResults([]);
      setClawhubError(null);
      setHasSearched(false);
      return;
    }

    setIsSearching(true);
    setClawhubError(null);
    setHasSearched(true);

    try {
      const localRes = await fetch(
        `/api/watcher/search?q=${encodeURIComponent(q)}&limit=5`,
      );
      const localData = await localRes.json();
      setLocalResults(localData.items || []);

      try {
        const clawhubRes = await fetch(
          `/api/watcher/search/clawhub?q=${encodeURIComponent(q)}&limit=5`,
        );
        const clawhubData = await clawhubRes.json();
        if (clawhubData.error) {
          setClawhubError(clawhubData.error);
          setClawhubResults([]);
        } else {
          setClawhubResults(clawhubData.items || []);
        }
      } catch (e) {
        setClawhubError(e instanceof Error ? e.message : "Erreur ClawHub");
        setClawhubResults([]);
      }
    } finally {
      setIsSearching(false);
    }
  }, []);

  // Debounce effect (300ms)
  useEffect(() => {
    if (!searchOpen) return;
    const timer = setTimeout(() => {
      performSearch(searchQuery);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery, searchOpen, performSearch]);

  // Close dropdown on click outside
  useEffect(() => {
    if (!searchOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        handleSearchClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [searchOpen]);

  const showDropdown = searchOpen && hasSearched;
  const hasResults = localResults.length > 0 || clawhubResults.length > 0;

  return (
    <header className="shrink-0 border-b border-border/50 backdrop-blur-sm bg-background/80">
      {/* Title row */}
      <div className="flex items-center justify-between px-5 py-3">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 border border-primary/20">
            <Radar className="h-4 w-4 text-primary" />
          </div>
          <div>
            <h1 className="console-title type-page-title text-foreground">
              Watcher
            </h1>
            <p className="text-[10px] text-muted-foreground leading-tight">
              Surveillance & scoring automatique
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {/* Inline search with dropdown */}
          {searchOpen ? (
            <div className="relative" ref={dropdownRef}>
              <div className="flex items-center gap-2 rounded-lg border border-border/50 bg-background/60 backdrop-blur-sm px-3 py-1.5">
                <Search className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Rechercher..."
                  className="w-64 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
                  onKeyDown={(e) => {
                    if (e.key === "Escape") handleSearchClose();
                  }}
                />
                {isSearching && (
                  <Loader2 className="h-3.5 w-3.5 text-muted-foreground animate-spin shrink-0" />
                )}
                <button
                  type="button"
                  onClick={handleSearchClose}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Fermer la recherche"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>

              {/* Search results dropdown */}
              {showDropdown && (
                <div className="absolute right-0 top-full mt-1 w-[540px] max-h-[420px] overflow-y-auto rounded-lg border border-border bg-background shadow-lg z-50">
                  {hasResults ? (
                    <div className="grid grid-cols-2 divide-x divide-border">
                      {/* Local results column */}
                      <div className="p-3">
                        <div className="flex items-center gap-1.5 mb-2">
                          <Database className="h-3.5 w-3.5 text-muted-foreground" />
                          <span className="text-xs font-semibold text-muted-foreground">
                            Local ({localResults.length})
                          </span>
                        </div>
                        {localResults.length > 0 ? (
                          <div className="space-y-1.5">
                            {localResults.map((item) => (
                              <div
                                key={item.id}
                                className="rounded-md px-2 py-1.5 hover:bg-accent/50 transition-colors cursor-pointer"
                              >
                                <p className="text-xs font-medium text-foreground truncate">
                                  {item.title}
                                </p>
                                <p className="text-[10px] text-muted-foreground truncate">
                                  {item.source} &middot; {item.category}
                                </p>
                              </div>
                            ))}
                            <Link
                              href={`/watcher/history?q=${encodeURIComponent(searchQuery)}`}
                              onClick={handleSearchClose}
                              className="block text-center text-[11px] text-primary hover:underline pt-1"
                            >
                              Voir tout &rarr;
                            </Link>
                          </div>
                        ) : (
                          <p className="text-[11px] text-muted-foreground py-2">
                            Aucun resultat local
                          </p>
                        )}
                      </div>

                      {/* ClawHub results column */}
                      <div className="p-3">
                        <div className="flex items-center gap-1.5 mb-2">
                          <Globe className="h-3.5 w-3.5 text-muted-foreground" />
                          <span className="text-xs font-semibold text-muted-foreground">
                            ClawHub ({clawhubResults.length})
                          </span>
                        </div>
                        {clawhubError ? (
                          <div className="flex items-center gap-1.5 text-[11px] text-amber-500 py-2">
                            <AlertCircle className="h-3 w-3 shrink-0" />
                            <span className="truncate">{clawhubError}</span>
                          </div>
                        ) : clawhubResults.length > 0 ? (
                          <div className="space-y-1.5">
                            {clawhubResults.map((skill) => (
                              <a
                                key={skill.slug}
                                href={`https://clawhub.com/skills/${skill.slug}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block rounded-md px-2 py-1.5 hover:bg-accent/50 transition-colors"
                              >
                                <p className="text-xs font-medium text-foreground truncate">
                                  {skill.displayName}
                                </p>
                                <p className="text-[10px] text-muted-foreground truncate">
                                  {skill.summary}
                                </p>
                                <div className="flex items-center gap-2 mt-0.5 text-[10px] text-muted-foreground">
                                  {skill.version && (
                                    <span>v{skill.version}</span>
                                  )}
                                  <span>score: {skill.score.toFixed(1)}</span>
                                </div>
                              </a>
                            ))}
                            <a
                              href={`https://clawhub.com/search?q=${encodeURIComponent(searchQuery)}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="block text-center text-[11px] text-primary hover:underline pt-1"
                            >
                              Voir tout &rarr;
                            </a>
                          </div>
                        ) : (
                          <p className="text-[11px] text-muted-foreground py-2">
                            Aucun resultat ClawHub
                          </p>
                        )}
                      </div>
                    </div>
                  ) : !isSearching ? (
                    <div className="px-4 py-6 text-center">
                      <p className="text-xs text-muted-foreground">
                        Aucun resultat pour &laquo;{searchQuery}&raquo;
                      </p>
                    </div>
                  ) : null}
                </div>
              )}
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
            <RefreshCw
              className={`h-3.5 w-3.5 ${checking ? "animate-spin" : ""}`}
            />
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
