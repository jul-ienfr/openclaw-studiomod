"use client";

import { useState, useEffect } from "react";
import { useWatcherController } from "@/features/watcher/operations/useWatcherController";
import { useWatcherStore } from "@/features/watcher/state/store";
import { ReviewList } from "@/features/watcher/components/ReviewList";
import { Filter } from "lucide-react";

// Catégories implémentables uniquement
const ACTIONABLE_CATEGORIES = "release,npm_version,npm_dist_tag,clawhub_skill";

type FilterState = {
  status: string;
  minScore: string;
  category: string;
};

export default function WatcherReviewPage() {
  const { loadItems } = useWatcherController();
  const { state } = useWatcherStore();
  const [filters, setFilters] = useState<FilterState>({
    status: "scored",
    minScore: "65",
    category: ACTIONABLE_CATEGORIES,
  });

  useEffect(() => {
    const statusFilter =
      filters.status === "all" ? "scored,ignored" : filters.status;
    loadItems({
      status: statusFilter,
      category: filters.category || undefined,
      min_score: filters.minScore || undefined,
      limit: "50",
    });
  }, [filters, loadItems]);

  const refresh = () => {
    const statusFilter =
      filters.status === "all" ? "scored,ignored" : filters.status;
    loadItems({
      status: statusFilter,
      category: filters.category || undefined,
      min_score: filters.minScore || undefined,
      limit: "50",
    });
  };

  const statusLabels: Record<string, string> = {
    scored: "Nouveaux",
    ignored: "Ignorés",
    all: "Tous",
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-base font-semibold text-foreground">
            Items à traiter
          </h2>
          <p className="text-sm text-muted-foreground">
            {state.itemsTotal} item{state.itemsTotal !== 1 ? "s" : ""} affiché
            {state.itemsTotal !== 1 ? "s" : ""}
          </p>
        </div>
        <button
          onClick={refresh}
          className="rounded-md border border-border bg-sidebar px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
        >
          Rafraîchir
        </button>
      </div>

      {/* Panneau de filtres */}
      <div className="rounded-lg border border-border bg-sidebar/50 p-3">
        <div className="flex items-center gap-2 mb-2">
          <Filter className="h-3.5 w-3.5 text-muted-foreground" />
          <span className="text-xs font-medium text-muted-foreground">
            Filtres
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Status */}
          <div>
            <label className="text-[10px] text-muted-foreground block mb-1">
              Statut
            </label>
            <select
              value={filters.status}
              onChange={(e) =>
                setFilters({ ...filters, status: e.target.value })
              }
              className="w-full rounded-md border border-border bg-background px-2 py-1.5 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            >
              {Object.entries(statusLabels).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>

          {/* Catégorie */}
          <div>
            <label className="text-[10px] text-muted-foreground block mb-1">
              Catégorie
            </label>
            <select
              value={filters.category}
              onChange={(e) =>
                setFilters({ ...filters, category: e.target.value })
              }
              className="w-full rounded-md border border-border bg-background px-2 py-1.5 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            >
              <option value={ACTIONABLE_CATEGORIES}>Implémentables</option>
              <option value="">Toutes</option>
              <option value="release">Releases</option>
              <option value="npm_version">Versions npm</option>
              <option value="clawhub_skill">Skills ClawHub</option>
            </select>
          </div>

          {/* Score minimum */}
          <div>
            <label className="text-[10px] text-muted-foreground block mb-1">
              Score min. (%)
            </label>
            <input
              type="number"
              min="0"
              max="100"
              value={filters.minScore}
              onChange={(e) =>
                setFilters({ ...filters, minScore: e.target.value })
              }
              className="w-full rounded-md border border-border bg-background px-2 py-1.5 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>
      </div>

      <ReviewList items={state.items} onRefresh={refresh} />
    </div>
  );
}
