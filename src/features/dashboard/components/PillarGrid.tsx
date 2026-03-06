"use client";

import { usePillars } from "../hooks/usePillars";
import { PillarCard } from "./PillarCard";
import { Plus, Loader2 } from "lucide-react";
import Link from "next/link";

type PillarGridProps = {
  onPillarClick?: (pillarId: string) => void;
};

export function PillarGrid({ onPillarClick }: PillarGridProps) {
  const { pillars, loading, error } = usePillars();

  if (loading) {
    return (
      <div className="flex items-center justify-center py-16">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-xl border border-destructive/30 bg-destructive/10 p-4 text-sm text-destructive">
        Erreur: {error}
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div
        className="grid gap-3"
        style={{
          gridTemplateColumns: `repeat(auto-fill, minmax(min(100%, 220px), 1fr))`,
        }}
      >
        {pillars.map((pillar) => (
          <PillarCard
            key={pillar.id}
            pillar={pillar}
            agentCount={pillar.agents.length}
            onClick={() => onPillarClick?.(pillar.id)}
          />
        ))}

        {/* Add pillar card */}
        <Link
          href="/config?tab=pillars"
          className="flex min-h-[140px] flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
        >
          <Plus className="h-5 w-5" strokeWidth={1.75} />
          <span className="text-xs font-medium">Ajouter un pilier</span>
        </Link>
      </div>

      {pillars.length === 0 && (
        <p className="text-center text-sm text-muted-foreground">
          Aucun pilier configuré.{" "}
          <Link
            href="/config?tab=pillars"
            className="text-primary hover:underline"
          >
            Ajouter un pilier
          </Link>
        </p>
      )}
    </div>
  );
}
