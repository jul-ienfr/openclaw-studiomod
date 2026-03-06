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
  Plus,
  Trash2,
  Pencil,
  X,
  Shield,
  Link,
} from "lucide-react";

interface ConnectionInfo {
  lan: string;
  port: number;
}

interface TunnelStatus {
  active: boolean;
  url?: string;
  error?: string;
  downloading?: boolean;
}

interface TokenListEntry {
  id: string;
  label: string;
  createdAt: string;
  lastUsedAt: string | null;
  tokenPrefix: string;
}

interface Props {
  connectionInfo: ConnectionInfo;
  initialTunnel: TunnelStatus;
}

export default function MobileAccessClient({
  connectionInfo,
  initialTunnel,
}: Props) {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);
  const [tunnel, setTunnel] = useState<TunnelStatus>(initialTunnel);
  const [tunnelLoading, setTunnelLoading] = useState(false);

  // Token management state
  const [tokens, setTokens] = useState<TokenListEntry[]>([]);
  const [newTokenLabel, setNewTokenLabel] = useState("");
  const [generatingToken, setGeneratingToken] = useState(false);
  const [activeToken, setActiveToken] = useState<{
    token: string;
    label: string;
  } | null>(null);
  const [activeQrDataUrl, setActiveQrDataUrl] = useState<string | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editLabel, setEditLabel] = useState("");
  const [confirmRevokeId, setConfirmRevokeId] = useState<string | null>(null);
  const [discoveryUrl, setDiscoveryUrl] = useState<string | null>(null);
  const [apkQrDataUrl, setApkQrDataUrl] = useState<string | null>(null);

  const copyToClipboard = async (text: string, key: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedItem(key);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const lanUrl = `http://${connectionInfo.lan}:${connectionInfo.port}`;

  // Load existing tokens
  const loadTokens = useCallback(async () => {
    try {
      const res = await fetch("/api/mobile-access/tokens");
      if (res.ok) {
        const data = await res.json();
        setTokens(data.tokens ?? []);
      }
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    loadTokens();
  }, [loadTokens]);

  // Load discovery redirect URL
  useEffect(() => {
    fetch("/api/mobile-access/discovery")
      .then((res) => res.json())
      .then((data) => {
        if (data.configured && data.redirectUrl) {
          setDiscoveryUrl(data.redirectUrl);
        }
      })
      .catch(() => {});
  }, []);

  // Generate APK download QR code
  useEffect(() => {
    const apkUrl = isTunnelMode
      ? `${tunnel.url}/openclaw-studio.apk`
      : `${lanUrl}/openclaw-studio.apk`;
    import("qrcode")
      .then((QRCode) =>
        QRCode.toDataURL(apkUrl, {
          width: 160,
          margin: 2,
          color: { dark: "#000000", light: "#ffffff" },
          errorCorrectionLevel: "M",
        }),
      )
      .then(setApkQrDataUrl)
      .catch(() => {});
  }, [tunnel, lanUrl]);

  // Generate QR code when activeToken or tunnel changes
  useEffect(() => {
    if (!activeToken) {
      setActiveQrDataUrl(null);
      return;
    }

    // Build JSON payload with ALL connection methods for the mobile app
    const qrPayload: Record<string, string | number> = {
      token: activeToken.token,
      lan: connectionInfo.lan,
      port: connectionInfo.port,
    };
    if (tunnel.active && tunnel.url) {
      qrPayload.tunnel = tunnel.url;
    }
    if (discoveryUrl) {
      qrPayload.discovery = discoveryUrl;
    }
    const data = JSON.stringify(qrPayload);

    import("qrcode")
      .then((QRCode) =>
        QRCode.toDataURL(data, {
          width: 280,
          margin: 2,
          color: { dark: "#000000", light: "#ffffff" },
          errorCorrectionLevel: "M",
        }),
      )
      .then(setActiveQrDataUrl)
      .catch(() => setActiveQrDataUrl(null));
  }, [activeToken, tunnel, lanUrl, connectionInfo, discoveryUrl]);

  // Generate a new token
  const generateAndShowQR = useCallback(async () => {
    setGeneratingToken(true);
    try {
      const res = await fetch("/api/mobile-access/tokens", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ label: newTokenLabel || "Mobile device" }),
      });
      if (res.ok) {
        const data = await res.json();
        setActiveToken({
          token: data.token.token,
          label: data.token.label,
        });
        setNewTokenLabel("");
        await loadTokens();
      }
    } finally {
      setGeneratingToken(false);
    }
  }, [newTokenLabel, loadTokens]);

  // Revoke a token
  const handleRevoke = useCallback(
    async (id: string) => {
      await fetch(`/api/mobile-access/tokens?id=${encodeURIComponent(id)}`, {
        method: "DELETE",
      });
      setConfirmRevokeId(null);
      if (activeToken) setActiveToken(null);
      await loadTokens();
    },
    [loadTokens, activeToken],
  );

  // Update label
  const handleUpdateLabel = useCallback(
    async (id: string) => {
      await fetch("/api/mobile-access/tokens", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, label: editLabel }),
      });
      setEditingId(null);
      setEditLabel("");
      await loadTokens();
    },
    [editLabel, loadTokens],
  );

  // Tunnel controls
  useEffect(() => {
    if (!tunnelLoading) return;
    const interval = setInterval(async () => {
      try {
        const res = await fetch("/api/mobile-access/tunnel");
        const status: TunnelStatus = await res.json();
        setTunnel(status);
        if (status.active && status.url) setTunnelLoading(false);
        if (!status.active && !status.downloading && status.error)
          setTunnelLoading(false);
      } catch {
        /* ignore */
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
      if (status.active && status.url) setTunnelLoading(false);
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
  }, []);

  const isTunnelMode = tunnel.active && tunnel.url;

  const getFullUrl = (tokenValue: string) => {
    const tokenSuffix = `?access_token=${encodeURIComponent(tokenValue)}`;
    return isTunnelMode
      ? `${tunnel.url}${tokenSuffix}`
      : `${lanUrl}${tokenSuffix}`;
  };

  const formatDate = (iso: string | null) => {
    if (!iso) return "—";
    const d = new Date(iso);
    return d.toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

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

        {/* Generate new token */}
        <div className="space-y-3 rounded-xl border border-border bg-surface-1 p-4">
          <div className="flex items-center gap-2">
            <Plus className="h-4 w-4 text-primary" />
            <h2 className="text-sm font-semibold text-foreground">
              Connect a new device
            </h2>
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              value={newTokenLabel}
              onChange={(e) => setNewTokenLabel(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !generatingToken) generateAndShowQR();
              }}
              placeholder="Device name (e.g. iPhone)"
              className="min-w-0 flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
            />
            <button
              onClick={generateAndShowQR}
              disabled={generatingToken}
              className="ui-btn-primary flex shrink-0 items-center gap-2 px-4 py-2 text-sm"
            >
              {generatingToken ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Shield className="h-4 w-4" />
              )}
              Generate
            </button>
          </div>
        </div>

        {/* QR Code — shown when a token is active */}
        {activeToken && activeQrDataUrl && (
          <div className="flex flex-col items-center rounded-xl border border-border bg-white p-6 shadow-sm">
            <div className="mb-2 flex items-center gap-2">
              <span className="rounded-full bg-green-500/10 px-2.5 py-0.5 text-xs font-semibold text-green-600">
                {activeToken.label}
              </span>
            </div>
            <Image
              src={activeQrDataUrl}
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
            {/* Copyable URL */}
            <div className="mt-3 flex w-full items-center gap-2 rounded-lg border border-border bg-surface-1 px-3 py-2">
              <span className="min-w-0 flex-1 truncate font-mono text-xs text-muted-foreground">
                {getFullUrl(activeToken.token)}
              </span>
              <button
                onClick={() =>
                  copyToClipboard(getFullUrl(activeToken.token), "active-url")
                }
                className="shrink-0 rounded p-1 hover:bg-surface-2"
                aria-label="Copy URL"
              >
                {copiedItem === "active-url" ? (
                  <Check className="h-3.5 w-3.5 text-green-500" />
                ) : (
                  <Copy className="h-3.5 w-3.5 text-muted-foreground" />
                )}
              </button>
            </div>
            <button
              onClick={() => setActiveToken(null)}
              className="mt-2 text-xs text-muted-foreground hover:text-foreground"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Placeholder when no token is active — no QR to avoid scanning a tokenless code */}
        {!activeToken && (
          <div className="flex flex-col items-center rounded-xl border border-dashed border-border bg-surface-1 px-6 py-10">
            <Smartphone className="mb-3 h-10 w-10 text-muted-foreground/30" />
            <p className="text-sm text-muted-foreground">
              Generate a token above to get a scannable QR code
            </p>
          </div>
        )}

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
                  onClick={() => copyToClipboard(tunnel.url!, "tunnel")}
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

          {discoveryUrl && (
            <div className="space-y-1.5 border-t border-border pt-3">
              <div className="flex items-center gap-1.5">
                <Link className="h-3.5 w-3.5 text-primary" />
                <span className="text-xs font-semibold text-foreground">
                  Permanent link
                </span>
              </div>
              <p className="text-[11px] text-muted-foreground">
                Bookmark this URL — it always redirects to the current tunnel,
                even after restarts.
              </p>
              <div className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2">
                <span className="min-w-0 flex-1 truncate font-mono text-xs text-muted-foreground">
                  {discoveryUrl}
                </span>
                <button
                  onClick={() => copyToClipboard(discoveryUrl, "discovery")}
                  className="shrink-0 rounded p-1 hover:bg-surface-2"
                  aria-label="Copy permanent link"
                >
                  {copiedItem === "discovery" ? (
                    <Check className="h-3.5 w-3.5 text-green-500" />
                  ) : (
                    <Copy className="h-3.5 w-3.5 text-muted-foreground" />
                  )}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Connected devices */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Connected devices ({tokens.length})
            </h2>
          </div>

          {tokens.length === 0 && (
            <p className="rounded-lg border border-dashed border-border px-4 py-6 text-center text-xs text-muted-foreground">
              No device tokens yet. Generate one above to connect a device.
            </p>
          )}

          {tokens.map((t) => (
            <div
              key={t.id}
              className="flex items-center gap-3 rounded-lg border border-border bg-surface-1 px-3 py-2.5"
            >
              <Smartphone className="h-4 w-4 shrink-0 text-muted-foreground" />
              <div className="min-w-0 flex-1">
                {editingId === t.id ? (
                  <div className="flex items-center gap-1">
                    <input
                      type="text"
                      value={editLabel}
                      onChange={(e) => setEditLabel(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") handleUpdateLabel(t.id);
                        if (e.key === "Escape") setEditingId(null);
                      }}
                      className="w-full rounded border border-border bg-background px-2 py-0.5 text-sm text-foreground focus:border-primary focus:outline-none"
                      autoFocus
                    />
                    <button
                      onClick={() => handleUpdateLabel(t.id)}
                      className="rounded p-1 hover:bg-surface-2"
                    >
                      <Check className="h-3.5 w-3.5 text-green-500" />
                    </button>
                    <button
                      onClick={() => setEditingId(null)}
                      className="rounded p-1 hover:bg-surface-2"
                    >
                      <X className="h-3.5 w-3.5 text-muted-foreground" />
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-foreground">
                        {t.label}
                      </span>
                      <button
                        onClick={() => {
                          setEditingId(t.id);
                          setEditLabel(t.label);
                        }}
                        className="rounded p-0.5 hover:bg-surface-2"
                        aria-label="Edit label"
                      >
                        <Pencil className="h-3 w-3 text-muted-foreground" />
                      </button>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                      <span className="font-mono">{t.tokenPrefix}...</span>
                      <span>Created {formatDate(t.createdAt)}</span>
                      {t.lastUsedAt && (
                        <span>Last used {formatDate(t.lastUsedAt)}</span>
                      )}
                    </div>
                  </>
                )}
              </div>
              {confirmRevokeId === t.id ? (
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleRevoke(t.id)}
                    className="rounded bg-red-500/10 px-2 py-1 text-[10px] font-semibold text-red-500 hover:bg-red-500/20"
                  >
                    Confirm
                  </button>
                  <button
                    onClick={() => setConfirmRevokeId(null)}
                    className="rounded px-2 py-1 text-[10px] text-muted-foreground hover:bg-surface-2"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setConfirmRevokeId(t.id)}
                  className="shrink-0 rounded p-1.5 text-muted-foreground hover:bg-red-500/10 hover:text-red-500"
                  aria-label="Revoke token"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Connection details */}
        <div className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Local network info
          </h2>
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
        </div>

        {/* Instructions */}
        <div className="space-y-3 rounded-xl border border-border bg-surface-1 p-4">
          <h2 className="text-sm font-semibold text-foreground">
            How to connect
          </h2>
          <ol className="list-none space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <span className="h-fit rounded bg-primary/10 px-1.5 py-0.5 font-mono text-xs font-bold text-primary">
                1
              </span>
              <span>
                <strong className="text-foreground">Generate a token:</strong>{" "}
                Enter a device name above and click Generate — a unique QR code
                appears
              </span>
            </li>
            <li className="flex gap-2">
              <span className="h-fit rounded bg-primary/10 px-1.5 py-0.5 font-mono text-xs font-bold text-primary">
                2
              </span>
              <span>
                <strong className="text-foreground">Scan the QR code:</strong>{" "}
                Use your phone&apos;s camera or the OpenClaw Studio mobile app
              </span>
            </li>
            <li className="flex gap-2">
              <span className="h-fit rounded bg-primary/10 px-1.5 py-0.5 font-mono text-xs font-bold text-primary">
                3
              </span>
              <span>
                <strong className="text-foreground">Remote access:</strong>{" "}
                Enable the tunnel above first if you&apos;re not on the same
                WiFi — the QR updates automatically
              </span>
            </li>
            <li className="flex gap-2">
              <span className="h-fit rounded bg-primary/10 px-1.5 py-0.5 font-mono text-xs font-bold text-primary">
                4
              </span>
              <span>
                <strong className="text-foreground">Revoke anytime:</strong>{" "}
                Each device has its own token — revoke one without affecting the
                others
              </span>
            </li>
          </ol>
        </div>

        {/* Download the app */}
        {apkQrDataUrl && (
          <div className="space-y-3 rounded-xl border border-border bg-surface-1 p-4">
            <div className="flex items-center gap-2">
              <Download className="h-4 w-4 text-primary" />
              <h2 className="text-sm font-semibold text-foreground">
                Get the app
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <Image
                src={apkQrDataUrl}
                alt="QR code to download the app"
                width={120}
                height={120}
                unoptimized
                className="rounded-lg"
              />
              <div className="space-y-1.5">
                <p className="text-xs text-muted-foreground">
                  Scan this QR code from your phone to download the OpenClaw
                  Studio app (Android APK).
                </p>
                <a
                  href="/openclaw-studio.apk"
                  download
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
                >
                  <Download className="h-3 w-3" />
                  Direct download
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
