"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  Copy,
  Check,
  Smartphone,
  Wifi,
  Globe,
  Radio,
  Loader2,
  Power,
  Download,
} from "lucide-react";

interface ConnectionInfo {
  lan: string;
  port: number;
  token: string;
}

interface TunnelStatus {
  active: boolean;
  url?: string;
  error?: string;
  downloading?: boolean;
}

interface Props {
  qrDataUrl: string;
  connectionInfo: ConnectionInfo;
  initialTunnel: TunnelStatus;
}

export default function MobileAccessClient({
  qrDataUrl,
  connectionInfo,
  initialTunnel,
}: Props) {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [tunnel, setTunnel] = useState<TunnelStatus>(initialTunnel);
  const [tunnelLoading, setTunnelLoading] = useState(false);
  const [tunnelQrDataUrl, setTunnelQrDataUrl] = useState<string | null>(null);

  const copyToClipboard = async (text: string, key: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedItem(key);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const lanUrl = `http://${connectionInfo.lan}:${connectionInfo.port}`;
  const tokenSuffix = connectionInfo.token
    ? `?access_token=${encodeURIComponent(connectionInfo.token)}`
    : "";
  const tunnelFullUrl = tunnel.url ? `${tunnel.url}${tokenSuffix}` : undefined;
  const jsonStr = JSON.stringify({
    lan: connectionInfo.lan,
    port: connectionInfo.port,
    token: connectionInfo.token,
  });

  // Generate QR code for tunnel URL client-side
  useEffect(() => {
    if (!tunnelFullUrl) {
      setTunnelQrDataUrl(null);
      return;
    }
    const data = JSON.stringify({
      host: tunnel.url?.replace(/^https?:\/\//, ""),
      port: 443,
      token: connectionInfo.token,
      tunnel: tunnelFullUrl,
    });
    // Use dynamic import to avoid bundling qrcode in client
    import("qrcode")
      .then((QRCode) =>
        QRCode.toDataURL(data, {
          width: 280,
          margin: 2,
          color: { dark: "#000000", light: "#ffffff" },
          errorCorrectionLevel: "M",
        }),
      )
      .then(setTunnelQrDataUrl)
      .catch(() => setTunnelQrDataUrl(null));
  }, [tunnelFullUrl, tunnel.url, connectionInfo.token]);

  // Poll tunnel status while loading
  useEffect(() => {
    if (!tunnelLoading) return;
    const interval = setInterval(async () => {
      try {
        const res = await fetch("/api/mobile-access/tunnel");
        const status: TunnelStatus = await res.json();
        setTunnel(status);
        if (status.active && status.url) {
          setTunnelLoading(false);
        }
        if (!status.active && !status.downloading && status.error) {
          setTunnelLoading(false);
        }
      } catch {
        /* ignore transient fetch errors */
      }
    }, 2000);
    return () => clearInterval(interval);
  }, [tunnelLoading]);

  const startTunnel = useCallback(async () => {
    setTunnelLoading(true);
    setTunnel({ active: false });
    try {
      const res = await fetch("/api/mobile-access/tunnel", { method: "POST" });
      const status: TunnelStatus = await res.json();
      setTunnel(status);
      if (status.active && status.url) {
        setTunnelLoading(false);
      }
    } catch {
      setTunnel({ active: false, error: "Failed to start tunnel" });
      setTunnelLoading(false);
    }
  }, []);

  const stopTunnel = useCallback(async () => {
    try {
      const res = await fetch("/api/mobile-access/tunnel", {
        method: "DELETE",
      });
      const status: TunnelStatus = await res.json();
      setTunnel(status);
    } catch {
      setTunnel({ active: false });
    }
    setTunnelLoading(false);
    setTunnelQrDataUrl(null);
  }, []);

  const activeQr = tunnelQrDataUrl ?? qrDataUrl;
  const isTunnelMode = tunnel.active && tunnel.url;

  return (
    <div className="flex h-full flex-col items-center justify-start overflow-y-auto bg-background p-8">
      <div className="w-full max-w-lg space-y-6">
        {/* Header */}
        <div className="flex items-center gap-3">
          <Smartphone className="h-7 w-7 text-primary" strokeWidth={1.75} />
          <div>
            <h1 className="font-display text-2xl font-bold tracking-wide text-foreground">
              Mobile Access
            </h1>
            <p className="text-sm text-muted-foreground">
              Connect to OpenClaw Studio from your phone or another device
            </p>
          </div>
        </div>

        {/* QR Code */}
        <div className="flex flex-col items-center rounded-xl border border-border bg-white p-6 shadow-sm">
          <Image
            src={activeQr}
            alt="QR code for mobile access"
            width={280}
            height={280}
            unoptimized
          />
          <p className="mt-3 text-xs text-muted-foreground">
            {isTunnelMode
              ? "Scan from anywhere — tunnel active"
              : "Scan from the same WiFi network"}
          </p>
          {isTunnelMode && (
            <span className="mt-1 inline-flex items-center gap-1 rounded-full bg-green-500/10 px-2.5 py-0.5 text-[10px] font-semibold text-green-500">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
              Tunnel active
            </span>
          )}
        </div>

        {/* Remote tunnel section */}
        <div className="space-y-3 rounded-xl border border-border bg-surface-1 p-4">
          <div className="flex items-center gap-2">
            <Radio className="h-4 w-4 text-primary" />
            <h2 className="text-sm font-semibold text-foreground">
              Remote access (4G / other network)
            </h2>
          </div>

          {!tunnel.active && !tunnelLoading && (
            <>
              <p className="text-xs text-muted-foreground">
                Enable a secure tunnel to access Studio from anywhere — no
                account or extra app needed on your phone.
              </p>
              <button
                onClick={startTunnel}
                className="ui-btn-primary flex w-full items-center justify-center gap-2 py-2 text-sm"
              >
                <Globe className="h-4 w-4" />
                Enable remote tunnel
              </button>
            </>
          )}

          {tunnelLoading && (
            <div className="flex flex-col items-center gap-2 py-3">
              <Loader2 className="h-5 w-5 animate-spin text-primary" />
              <p className="text-xs text-muted-foreground">
                {tunnel.downloading ? (
                  <>
                    <Download className="mr-1 inline h-3 w-3" />
                    Downloading tunnel binary (first time only)...
                  </>
                ) : (
                  "Starting tunnel..."
                )}
              </p>
            </div>
          )}

          {tunnel.active && tunnel.url && (
            <>
              <div className="flex items-center gap-2 rounded-lg border border-green-500/20 bg-green-500/5 px-3 py-2.5">
                <Globe className="h-4 w-4 shrink-0 text-green-500" />
                <span className="min-w-0 flex-1 truncate font-mono text-sm text-foreground">
                  {tunnel.url}
                </span>
                <button
                  onClick={() => copyToClipboard(tunnelFullUrl!, "tunnel")}
                  className="shrink-0 rounded p-1 hover:bg-surface-2"
                  aria-label="Copy tunnel URL"
                >
                  {copiedItem === "tunnel" ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <Copy className="h-4 w-4 text-muted-foreground" />
                  )}
                </button>
              </div>
              <button
                onClick={stopTunnel}
                className="ui-btn-secondary flex w-full items-center justify-center gap-2 py-1.5 text-xs"
              >
                <Power className="h-3.5 w-3.5" />
                Disable tunnel
              </button>
            </>
          )}

          {tunnel.error && !tunnelLoading && (
            <p className="rounded-lg bg-red-500/10 px-3 py-2 text-xs text-red-400">
              {tunnel.error}
            </p>
          )}
        </div>

        {/* Connection details */}
        <div className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Local connection details
          </h2>

          {/* LAN URL */}
          <div className="flex items-center gap-2 rounded-lg border border-border bg-surface-1 px-3 py-2.5">
            <Wifi className="h-4 w-4 shrink-0 text-muted-foreground" />
            <span className="min-w-0 flex-1 truncate font-mono text-sm text-foreground">
              {lanUrl}
            </span>
            <button
              onClick={() => copyToClipboard(lanUrl, "lan")}
              className="shrink-0 rounded p-1 hover:bg-surface-2"
              aria-label="Copy LAN URL"
            >
              {copiedItem === "lan" ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4 text-muted-foreground" />
              )}
            </button>
          </div>

          {/* Token */}
          {connectionInfo.token && (
            <div className="flex items-center gap-2 rounded-lg border border-border bg-surface-1 px-3 py-2.5">
              <Globe className="h-4 w-4 shrink-0 text-muted-foreground" />
              <span className="min-w-0 flex-1 truncate font-mono text-sm text-foreground">
                token: {connectionInfo.token}
              </span>
              <button
                onClick={() => copyToClipboard(connectionInfo.token, "token")}
                className="shrink-0 rounded p-1 hover:bg-surface-2"
                aria-label="Copy token"
              >
                {copiedItem === "token" ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <Copy className="h-4 w-4 text-muted-foreground" />
                )}
              </button>
            </div>
          )}

          {/* JSON for desktop app */}
          <div className="flex items-start gap-2 rounded-lg border border-border bg-surface-1 px-3 py-2.5">
            <Smartphone className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
            <span className="min-w-0 flex-1 break-all font-mono text-xs text-muted-foreground">
              {jsonStr}
            </span>
            <button
              onClick={() => copyToClipboard(jsonStr, "json")}
              className="shrink-0 rounded p-1 hover:bg-surface-2"
              aria-label="Copy connection JSON"
            >
              {copiedItem === "json" ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4 text-muted-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Instructions */}
        <div className="rounded-xl border border-border bg-surface-1 space-y-3 p-4">
          <h2 className="text-sm font-semibold text-foreground">
            How to connect
          </h2>
          <ol className="list-none space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <span className="h-fit rounded bg-primary/10 px-1.5 py-0.5 font-mono text-xs font-bold text-primary">
                1
              </span>
              <span>
                <strong className="text-foreground">Same WiFi:</strong> Scan the
                QR code above with the OpenClaw Studio mobile app or your camera
              </span>
            </li>
            <li className="flex gap-2">
              <span className="h-fit rounded bg-primary/10 px-1.5 py-0.5 font-mono text-xs font-bold text-primary">
                2
              </span>
              <span>
                <strong className="text-foreground">Remote (4G/LTE):</strong>{" "}
                Click &ldquo;Enable remote tunnel&rdquo; above — the QR code
                updates automatically with a public HTTPS URL. No extra app or
                account needed.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="h-fit rounded bg-primary/10 px-1.5 py-0.5 font-mono text-xs font-bold text-primary">
                3
              </span>
              <span>
                <strong className="text-foreground">Desktop app:</strong> Copy
                the JSON above and paste it in the OpenClaw Studio desktop app
              </span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
