"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Loader2 } from "lucide-react";

const MobileAccessClient = dynamic(
  () => import("@/app/mobile-access/MobileAccessClient"),
  { ssr: false },
);

interface TunnelStatus {
  active: boolean;
  url?: string;
  error?: string;
  downloading?: boolean;
}

export function MobilePanel() {
  const [tunnelStatus, setTunnelStatus] = useState<TunnelStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/mobile-access/tunnel");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = (await res.json()) as TunnelStatus;
        setTunnelStatus(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load");
        setTunnelStatus({ active: false });
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading) {
    return (
      <div className="flex h-full items-center justify-center">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (error && !tunnelStatus) {
    return (
      <div className="p-6">
        <div className="rounded-xl border border-red-500/20 bg-red-500/5 p-4">
          <p className="text-sm text-red-400">{error}</p>
        </div>
      </div>
    );
  }

  // Derive connection info from the current browser location
  const lanHost =
    typeof window !== "undefined" ? window.location.hostname : "localhost";
  const port =
    typeof window !== "undefined"
      ? parseInt(window.location.port || "3000", 10)
      : 3000;

  return (
    <MobileAccessClient
      connectionInfo={{ lan: lanHost, port }}
      initialTunnel={tunnelStatus ?? { active: false }}
    />
  );
}
