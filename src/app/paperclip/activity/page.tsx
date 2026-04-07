"use client";

import { useEffect, useState } from "react";
import { Activity } from "lucide-react";
import { useCompanyStore } from "@/stores/company-store";
import type { PcActivityLog } from "@/types/paperclip";

export default function ActivityPage() {
  const { activeCompanyId, companies } = useCompanyStore();
  const [activity, setActivity] = useState<PcActivityLog[]>([]);
  const [loading, setLoading] = useState(false);

  const activeCompany = companies.find((c) => c.id === activeCompanyId);

  useEffect(() => {
    if (!activeCompanyId) return;
    const timer = window.setTimeout(() => {
      setLoading(true);
      fetch(`/api/paperclip/companies/${activeCompanyId}/activity`)
        .then((r) => r.json())
        .then((data) => {
          const items = Array.isArray(data) ? data : (data?.items ?? []);
          setActivity(items);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }, 0);
    return () => {
      window.clearTimeout(timer);
    };
  }, [activeCompanyId]);

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-foreground">Activity</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {activeCompany?.name} · recent events
        </p>
      </div>

      {loading && (
        <div className="flex items-center justify-center h-40 text-muted-foreground text-sm">
          Loading activity…
        </div>
      )}

      {!loading && (
        <div className="space-y-1">
          {activity.map((item) => (
            <div
              key={item.id}
              className="flex items-start gap-3 rounded-lg border border-border bg-surface-1 px-4 py-3"
            >
              <div className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-primary/60 mt-1.5" />
              <div className="flex-1 min-w-0">
                <span className="text-sm text-foreground">
                  <span className="font-medium">{item.actorType}</span>
                  {" · "}
                  <span className="text-muted-foreground">{item.action}</span>
                </span>
                {item.entityType && (
                  <span className="ml-1 text-xs text-muted-foreground/60">
                    ({item.entityType})
                  </span>
                )}
              </div>
              <span className="shrink-0 text-xs text-muted-foreground/60">
                {new Date(item.createdAt).toLocaleString()}
              </span>
            </div>
          ))}
          {activity.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
              <Activity className="h-10 w-10 mb-3 opacity-30" />
              <p className="text-sm">No activity yet</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
