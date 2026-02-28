"use client";

import type { SourceState } from "@/features/watcher/types";
import { SourceCard } from "./SourceCard";

type SourceStatusGridProps = {
  sources: SourceState[];
  onCheckSource?: (source: string) => void;
};

export function SourceStatusGrid({
  sources,
  onCheckSource,
}: SourceStatusGridProps) {
  if (sources.length === 0) {
    return (
      <p className="py-8 text-center text-sm text-muted-foreground">
        No sources configured.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {sources.map((s) => (
        <SourceCard
          key={s.source}
          name={s.source}
          tier={1}
          lastCheck={s.last_check}
          lastSuccess={s.last_success}
          consecutiveErrors={s.consecutive_errors}
          lastError={s.last_error}
          itemsTotal={s.items_total}
          onCheck={onCheckSource ? () => onCheckSource(s.source) : undefined}
        />
      ))}
    </div>
  );
}
