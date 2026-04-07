"use client";

import Link from "next/link";
import { AlertTriangle, Settings } from "lucide-react";
import { useAgentStore } from "@/features/agents/state/store";
import { useDashboardSnapshot } from "@/features/dashboard/hooks/useDashboardSnapshot";
import { usePillars } from "@/features/dashboard/hooks/usePillars";
import { InfraStatusBar } from "./InfraStatusBar";
import { PillarSection } from "./PillarSection";
import { MetricsRow } from "./MetricsRow";
import { ActivityTimeline } from "./ActivityTimeline";

// ---------------------------------------------------------------------------
// Gateway down banner
// ---------------------------------------------------------------------------

function GatewayDownBanner() {
  return (
    <div
      role="alert"
      className="flex items-center gap-3 rounded-lg border border-yellow-500/20 bg-yellow-500/10 px-4 py-3 text-sm text-yellow-400"
    >
      <AlertTriangle className="h-4 w-4 shrink-0" strokeWidth={1.75} />
      <span className="flex-1">
        Gateway is not connected. Live agent status may be unavailable.
      </span>
    </div>
  );
}

// ---------------------------------------------------------------------------
// No pillars CTA
// ---------------------------------------------------------------------------

function NoPillarsCTA() {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-card py-16 text-center">
      <Settings
        className="mb-3 h-10 w-10 text-muted-foreground/30"
        strokeWidth={1.25}
      />
      <h2 className="mb-1 text-sm font-semibold text-foreground">
        No pillars configured
      </h2>
      <p className="mb-4 max-w-xs text-xs text-muted-foreground">
        Pillars organize your agents into logical groups. Configure them to get
        a structured view of your AI workforce.
      </p>
      <Link
        href="/settings?section=organisation"
        className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <Settings className="h-4 w-4" strokeWidth={1.75} />
        Configure pillars
      </Link>
    </div>
  );
}

// ---------------------------------------------------------------------------
// DashboardPage
// ---------------------------------------------------------------------------

export function DashboardPage() {
  const { state } = useAgentStore();
  const { pillars, loading: pillarsLoading } = usePillars();
  const {
    snapshot,
    loading: snapshotLoading,
    error: snapshotError,
  } = useDashboardSnapshot(12);

  const activeAgentCount = state.agents.filter(
    (a) => a.status === "running",
  ).length;

  const isGatewayDown =
    snapshot.gatewayStatus === "disconnected" ||
    snapshot.gatewayStatus === "connecting";

  return (
    <div className="flex flex-col gap-4 p-4 md:p-6">
      {/* Gateway down banner */}
      {isGatewayDown && <GatewayDownBanner />}
      {snapshotError && !snapshotLoading && (
        <div
          role="status"
          className="rounded-lg border border-border bg-card px-4 py-3 text-xs text-muted-foreground"
        >
          Dashboard snapshot refresh failed. Showing the latest cached values.
        </div>
      )}

      {/* Zone 1 — Infrastructure status bar */}
      <InfraStatusBar
        gatewayStatus={snapshot.gatewayStatus}
        activeAgentCount={activeAgentCount}
        diskUsagePercent={snapshot.diskUsagePercent}
        cronCounts={snapshot.cronCounts}
      />

      {/* Zone 2 — Pillars grid */}
      {pillarsLoading ? (
        <div className="grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {/* Skeleton placeholders */}
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="h-40 animate-pulse rounded-xl border border-border bg-card"
              aria-hidden
            />
          ))}
        </div>
      ) : pillars.length === 0 ? (
        <NoPillarsCTA />
      ) : (
        <div className="grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {pillars.map((pillar) => (
            <PillarSection key={pillar.id} pillar={pillar} />
          ))}
        </div>
      )}

      {/* Zone 3 — Metrics + Activity */}
      <div className="flex flex-col gap-4 lg:flex-row">
        {/* Metrics row (takes available width) */}
        <div className="flex-1">
          <MetricsRow
            activeAgentCount={activeAgentCount}
            metrics={snapshot.metrics}
          />
        </div>
      </div>

      {/* Activity timeline (full width below) */}
      <ActivityTimeline
        entries={snapshot.recentActivity}
        loading={snapshotLoading}
      />
    </div>
  );
}
