"use client";

import { useEffect, useState } from "react";
import { useWatcherController } from "@/features/watcher/operations/useWatcherController";
import { useWatcherStore } from "@/features/watcher/state/store";
import { ImplementationTimeline } from "@/features/watcher/components/ImplementationTimeline";

type StatusFilter = "all" | "success" | "failed" | "rolled_back";

export default function ImplementationsPage() {
  const { loadImplementations, rollback } = useWatcherController();
  const { state } = useWatcherStore();

  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    loadImplementations();
  }, []);

  async function handleRollback(id: string) {
    await rollback(id);
    loadImplementations();
  }

  const STATUS_OPTIONS: { value: StatusFilter; label: string }[] = [
    { value: "all", label: "Tous" },
    { value: "success", label: "Succès" },
    { value: "failed", label: "Échecs" },
    { value: "rolled_back", label: "Rollback" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex gap-1 rounded-lg border border-border/40 bg-background/40 p-1">
          {STATUS_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setStatusFilter(opt.value)}
              className={`rounded-md px-3 py-1 text-sm transition-colors ${
                statusFilter === opt.value
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
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="rounded-lg border border-border/40 bg-background/40 px-3 py-1.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50"
        />
      </div>

      <ImplementationTimeline
        implementations={state.implementations}
        total={state.implementationsTotal}
        filterStatus={statusFilter === "all" ? undefined : statusFilter}
        filterSearch={searchText}
        onRollback={handleRollback}
      />
    </div>
  );
}
