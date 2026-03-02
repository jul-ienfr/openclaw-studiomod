"use client";

import { useEffect } from "react";
import { useWatcherController } from "@/features/watcher/operations/useWatcherController";
import { useWatcherStore } from "@/features/watcher/state/store";

export default function SourcesPage() {
  const { loadSources, triggerCheck } = useWatcherController();
  const { state } = useWatcherStore();

  useEffect(() => {
    loadSources();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sources = state.sources ?? [];

  async function handleCheck(source?: string) {
    await triggerCheck(source);
    await loadSources();
  }

  function formatDate(dateStr: string | null | undefined): string {
    if (!dateStr) return "—";
    try {
      return new Date(dateStr).toLocaleString("fr-FR", {
        day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit",
      });
    } catch {
      return dateStr;
    }
  }

  function circuitStatus(errors: number): { label: string; color: string } {
    if (errors === 0) return { label: "OK", color: "bg-green-500" };
    if (errors <= 2) return { label: "backoff", color: "bg-yellow-500" };
    return { label: "disabled", color: "bg-red-500" };
  }

  return (
    <div className="space-y-6">
      <div className="glass-panel overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/40">
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Source</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">État</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Dernière vérif.</th>
              <th className="px-4 py-3 text-center font-medium text-muted-foreground">Erreurs consécutives</th>
              <th className="px-4 py-3 text-center font-medium text-muted-foreground">Items total</th>
              <th className="px-4 py-3 text-right font-medium text-muted-foreground">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/20">
            {sources.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-muted-foreground">
                  Aucune source disponible
                </td>
              </tr>
            )}
            {sources.map((src) => {
              const cb = circuitStatus(src.consecutive_errors);
              return (
                <tr key={src.source} className="hover:bg-white/5 transition-colors">
                  <td className="px-4 py-3 font-medium text-foreground">{src.source}</td>
                  <td className="px-4 py-3">
                    <span className="flex items-center gap-1.5">
                      <span className={`h-2 w-2 rounded-full ${cb.color}`} />
                      <span className="text-xs text-muted-foreground">{cb.label}</span>
                    </span>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{formatDate(src.last_check)}</td>
                  <td className="px-4 py-3 text-center">{src.consecutive_errors}</td>
                  <td className="px-4 py-3 text-center">{src.items_total}</td>
                  <td className="px-4 py-3 text-right">
                    <button onClick={() => handleCheck(src.source)} className="ui-btn-primary px-3 py-1 text-xs">
                      Check
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
