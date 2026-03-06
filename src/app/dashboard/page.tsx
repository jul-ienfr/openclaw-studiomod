"use client";

import Link from "next/link";
import { LayoutDashboard, Loader2 } from "lucide-react";
import { PillarGrid } from "@/features/dashboard/components/PillarGrid";
import { AlertBanner } from "@/features/dashboard/components/AlertBanner";
import { CeoPersoPanel } from "@/features/dashboard/components/CeoPersoPanel";
import { CeoBusinessPanel } from "@/features/dashboard/components/CeoBusinessPanel";
import { InfraBar } from "@/features/dashboard/components/InfraBar";
import { useAlerts } from "@/features/dashboard/hooks/useAlerts";
import { useCeoStatus } from "@/features/dashboard/hooks/useCeoStatus";

export default function DashboardPage() {
  const { alerts } = useAlerts();
  const { data: status, loading } = useCeoStatus();

  return (
    <div className="flex h-full flex-col overflow-hidden">
      {/* Header */}
      <header className="flex shrink-0 items-center gap-3 border-b border-border px-6 py-4">
        <LayoutDashboard
          className="h-5 w-5 text-muted-foreground"
          strokeWidth={1.75}
        />
        <div>
          <h1 className="font-display text-2xl tracking-wide leading-none">
            Dashboard
          </h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            Vue CEO — piliers actifs
          </p>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {alerts.length > 0 && <AlertBanner alerts={alerts} />}

        {/* Infra bar */}
        {loading ? (
          <div className="flex items-center justify-center py-4">
            <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
          </div>
        ) : (
          <InfraBar
            disk={status.disk}
            gateway={status.gateway}
            daemon={status.daemon}
            crons={status.crons}
          />
        )}

        {/* Pillar panels */}
        <section>
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Organisation
          </h2>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <CeoPersoPanel />
            <CeoBusinessPanel />
          </div>
        </section>

        {/* Pillar grid */}
        <section>
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Piliers
            </h2>
            <Link
              href="/config?tab=pillars"
              className="text-xs text-muted-foreground hover:text-primary transition-colors"
            >
              Gerer →
            </Link>
          </div>
          <PillarGrid />
        </section>

        {/* Quick access */}
        <section>
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Acces rapide
          </h2>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
            {[
              { label: "Agents", href: "/", desc: "Gerer les agents" },
              {
                label: "Analytics",
                href: "/analytics",
                desc: "Metriques & performance",
              },
              { label: "Logs", href: "/logs", desc: "Journaux systeme" },
              { label: "Config", href: "/config", desc: "Parametres Studio" },
              { label: "Rapports", href: "/reports", desc: "Rapports generes" },
              { label: "Watcher", href: "/watcher", desc: "Veille & alertes" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex flex-col gap-1 rounded-xl border border-border bg-card p-4 hover:border-primary/50 transition-colors"
              >
                <span className="text-sm font-medium">{item.label}</span>
                <span className="text-xs text-muted-foreground">
                  {item.desc}
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
