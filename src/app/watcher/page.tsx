"use client";

import { useEffect } from "react";
import { useWatcherController } from "@/features/watcher/operations/useWatcherController";
import { useWatcherStore } from "@/features/watcher/state/store";
import { SourceStatusGrid } from "@/features/watcher/components/SourceStatusGrid";
import { ScoringTable } from "@/features/watcher/components/ScoringTable";

export default function WatcherDashboardPage() {
  const { loadSources, loadScores } = useWatcherController();
  const { state } = useWatcherStore();

  useEffect(() => {
    loadSources();
    loadScores({ limit: "10" });
  }, []);

  return (
    <div className="space-y-6">
      <section className="space-y-3">
        <h2 className="text-base font-semibold text-foreground">Sources</h2>
        <SourceStatusGrid sources={state.sources} />
      </section>

      <section className="space-y-3">
        <h2 className="text-base font-semibold text-foreground">Top 10 — Scoring récent</h2>
        <ScoringTable scores={state.scores} showFilters={false} />
      </section>
    </div>
  );
}
