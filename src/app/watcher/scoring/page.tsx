"use client";

import { useEffect } from "react";
import { useWatcherController } from "@/features/watcher/operations/useWatcherController";
import { useWatcherStore } from "@/features/watcher/state/store";
import { ScoringTable } from "@/features/watcher/components/ScoringTable";

export default function ScoringPage() {
  const { loadScores } = useWatcherController();
  const { state } = useWatcherStore();

  useEffect(() => {
    loadScores(
      Object.fromEntries(
        Object.entries(state.filters ?? {})
          .filter(([, v]) => v != null)
          .map(([k, v]) => [k, String(v)]),
      ),
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadScores]);

  return (
    <div className="space-y-6">
      <ScoringTable scores={state.scores} showFilters={true} />
    </div>
  );
}
