"use client";

import type { SourceState } from "@/features/watcher/types";
import { SourceCard } from "./SourceCard";

type SourceStatusGridProps = {
  sources: SourceState[];
  onCheckSource?: (source: string) => void;
};

export function SourceStatusGrid({ sources, onCheckSource }: SourceStatusGridProps) {
  if (sources.length === 0) {
    return (
      <p className="py-8 text-center text-sm text-muted-foreground">
        Aucune source configurée.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
      {sources.map((s) => (
        <SourceCard
          key={s.source}
          source={s}
          onCheck={onCheckSource ? () => onCheckSource(s.source) : undefined}
        />
      ))}
    </div>
  );
}
