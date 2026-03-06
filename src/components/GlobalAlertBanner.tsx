"use client";

import { useAlerts } from "@/features/dashboard/hooks/useAlerts";
import { AlertBanner } from "@/features/dashboard/components/AlertBanner";

export function GlobalAlertBanner() {
  const { alerts, loading } = useAlerts();

  if (loading || alerts.length === 0) return null;

  return (
    <div className="shrink-0 px-4 pt-3">
      <AlertBanner alerts={alerts} />
    </div>
  );
}
