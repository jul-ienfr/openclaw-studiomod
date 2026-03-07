"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useWatcherController } from "@/features/watcher/operations/useWatcherController";
import { useWatcherStore } from "@/features/watcher/state/store";
import { ReviewList } from "@/features/watcher/components/ReviewList";
import { ImplementationTimeline } from "@/features/watcher/components/ImplementationTimeline";
import { Filter } from "lucide-react";

// Catégories implémentables uniquement
const ACTIONABLE_CATEGORIES = "release,npm_version,npm_dist_tag,clawhub_skill";

type FilterState = {
  status: string;
  minScore: string;
  category: string;
};

type SubTab = "review" | "implementations";
type ImplStatusFilter = "all" | "success" | "failed" | "rolled_back";

function deriveInitialTab(params: ReturnType<typeof useSearchParams>): SubTab {
  return params.get("tab") === "implementations" ? "implementations" : "review";
}

export default function WatcherReviewPage() {
  const searchParams = useSearchParams();
  const { loadItems, loadImplementations, rollback } = useWatcherController();
  const { state } = useWatcherStore();

  const [activeTab, setActiveTab] = useState<SubTab>(() =>
    deriveInitialTab(searchParams),
  );

  // Review filters
  const [filters, setFilters] = useState<FilterState>({
    status: "scored",
    minScore: "65",
    category: ACTIONABLE_CATEGORIES,
  });

  // Implementations filters
  const [implStatusFilter, setImplStatusFilter] =
    useState<ImplStatusFilter>("all");
  const [implSearchText, setImplSearchText] = useState("");

  // Load review items
  useEffect(() => {
    if (activeTab !== "review") return;
    const statusFilter =
      filters.status === "all" ? "scored,ignored" : filters.status;
    loadItems({
      status: statusFilter,
      category: filters.category || undefined,
      min_score: filters.minScore || undefined,
      limit: "50",
    });
  }, [filters, loadItems, activeTab]);

  // Load implementations
  useEffect(() => {
    if (activeTab !== "implementations") return;
    loadImplementations();
  }, [loadImplementations, activeTab]);

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

  async function handleRollback(id: string) {
    await rollback(id);
    loadImplementations();
  }

  const statusLabels: Record<string, string> = {
    scored: "Nouveaux",
    ignored: "Ignorés",
    all: "Tous",
  };

  const IMPL_STATUS_OPTIONS: { value: ImplStatusFilter; label: string }[] = [
    { value: "all", label: "Tous" },
    { value: "success", label: "Succès" },
    { value: "failed", label: "Échecs" },
    { value: "rolled_back", label: "Annulé" },
  ];

  return (
    <div className="space-y-4">
      {/* Sub-tab buttons */}
      <div className="flex gap-1 rounded-lg border border-border/40 bg-background/40 p-1 w-fit">
        <button
          onClick={() => setActiveTab("review")}
          className={`rounded-md px-4 py-1.5 text-sm transition-colors ${
            activeTab === "review"
              ? "bg-primary text-primary-foreground font-medium"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          À traiter
        </button>
        <button
          onClick={() => setActiveTab("implementations")}
          className={`rounded-md px-4 py-1.5 text-sm transition-colors ${
            activeTab === "implementations"
              ? "bg-primary text-primary-foreground font-medium"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Historique implémentations
        </button>
      </div>

      {/* Review sub-tab content */}
      {activeTab === "review" && (
        <>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-semibold text-foreground">
                Items à traiter
              </h2>
              <p className="text-sm text-muted-foreground">
                {state.itemsTotal} item{state.itemsTotal !== 1 ? "s" : ""}{" "}
                affiché
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
        </>
      )}

      {/* Implementations sub-tab content */}
      {activeTab === "implementations" && (
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex gap-1 rounded-lg border border-border/40 bg-background/40 p-1">
              {IMPL_STATUS_OPTIONS.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setImplStatusFilter(opt.value)}
                  className={`rounded-md px-3 py-1 text-sm transition-colors ${
                    implStatusFilter === opt.value
                      ? "bg-primary text-primary-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            <input
              type="text"
              placeholder="Rechercher..."
              value={implSearchText}
              onChange={(e) => setImplSearchText(e.target.value)}
              className="rounded-lg border border-border/40 bg-background/40 px-3 py-1.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50"
            />
          </div>

          <ImplementationTimeline
            implementations={state.implementations}
            total={state.implementationsTotal}
            filterStatus={
              implStatusFilter === "all" ? undefined : implStatusFilter
            }
            filterSearch={implSearchText}
            onRollback={handleRollback}
          />
        </div>
      )}
    </div>
  );
}
