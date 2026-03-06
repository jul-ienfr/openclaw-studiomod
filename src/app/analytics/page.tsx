"use client";
import { useState } from "react";
import { AnalyticsDashboard } from "@/features/analytics/components/AnalyticsDashboard";
import { usePillars } from "@/features/dashboard/hooks/usePillars";

export default function AnalyticsPage() {
  const { pillars, loading } = usePillars();
  const [selectedPillar, setSelectedPillar] = useState<string>("all");

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      {!loading && pillars.length > 0 && (
        <div className="flex items-center gap-2 border-b border-border px-5 py-2">
          <label
            htmlFor="analytics-pillar-filter"
            className="text-xs font-medium text-muted-foreground"
          >
            Pillar
          </label>
          <select
            id="analytics-pillar-filter"
            value={selectedPillar}
            onChange={(e) => setSelectedPillar(e.target.value)}
            className="rounded-md border border-input bg-background px-2 py-1 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
          >
            <option value="all">All pillars</option>
            {pillars.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
        </div>
      )}
      <AnalyticsDashboard />
    </div>
  );
}
