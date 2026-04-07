"use client";

import { useEffect, useState, use } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Bot,
  Circle,
  Key,
  Trash2,
  Save,
  RefreshCw,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { TextField, SelectField } from "@/components/paperclip/FormField";
import { Modal } from "@/components/ui/Modal";
import type { PcAgent } from "@/types/paperclip";

const STATUS_COLOR: Record<string, string> = {
  idle: "text-green-500",
  running: "text-blue-500",
  error: "text-red-500",
};

interface ApiKey {
  id: string;
  name: string;
  lastUsedAt: string | null;
  revokedAt: string | null;
  createdAt: string;
}

export default function AgentDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [agent, setAgent] = useState<PcAgent | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [apiKeys, setApiKeys] = useState<ApiKey[]>([]);
  const [newKeyName, setNewKeyName] = useState("");
  const [newKeyOpen, setNewKeyOpen] = useState(false);
  const [createdKey, setCreatedKey] = useState<string | null>(null);

  // Editable fields
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");
  const [adapterConfigStr, setAdapterConfigStr] = useState("");
  const [runtimeConfigStr, setRuntimeConfigStr] = useState("");
  const [adapterConfigError, setAdapterConfigError] = useState("");
  const [runtimeConfigError, setRuntimeConfigError] = useState("");

  const load = () => {
    setLoading(true);
    Promise.all([
      fetch(`/api/paperclip/agents/${id}`).then((r) => r.json()),
      fetch(`/api/paperclip/agents/${id}/api-keys`).then((r) => r.json()),
    ])
      .then(([a, keys]) => {
        setAgent(a);
        setName(a.name ?? "");
        setTitle(a.title ?? "");
        setRole(a.role ?? "general");
        setStatus(a.status ?? "idle");
        setAdapterConfigStr(JSON.stringify(a.adapterConfig ?? {}, null, 2));
        setRuntimeConfigStr(JSON.stringify(a.runtimeConfig ?? {}, null, 2));
        setApiKeys(Array.isArray(keys) ? keys : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    const timer = window.setTimeout(() => {
      load();
    }, 0);
    return () => {
      window.clearTimeout(timer);
    };
  }, [id]);

  const save = async () => {
    let adapterConfig: Record<string, unknown> | undefined;
    let runtimeConfig: Record<string, unknown> | undefined;
    try {
      adapterConfig = JSON.parse(adapterConfigStr);
      setAdapterConfigError("");
    } catch {
      setAdapterConfigError("Invalid JSON");
      return;
    }
    try {
      runtimeConfig = JSON.parse(runtimeConfigStr);
      setRuntimeConfigError("");
    } catch {
      setRuntimeConfigError("Invalid JSON");
      return;
    }
    setSaving(true);
    try {
      const res = await fetch(`/api/paperclip/agents/${id}`, {
        method: "PATCH",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name,
          title: title || null,
          role,
          status,
          adapterConfig,
          runtimeConfig,
        }),
      });
      if (!res.ok) throw new Error(await res.text());
      load();
    } catch (e) {
      alert(String(e));
    } finally {
      setSaving(false);
    }
  };

  const wake = async () => {
    await fetch(`/api/paperclip/agents/${id}/wake`, { method: "POST" });
    load();
  };

  const createApiKey = async () => {
    const res = await fetch(`/api/paperclip/agents/${id}/api-keys`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ name: newKeyName || "Default key" }),
    });
    const data = await res.json();
    setCreatedKey(data.key ?? data.apiKey ?? JSON.stringify(data));
    setNewKeyName("");
    load();
  };

  const revokeApiKey = async (keyId: string) => {
    if (!confirm("Revoke this API key?")) return;
    await fetch(`/api/paperclip/agents/${id}/api-keys/${keyId}`, {
      method: "DELETE",
    });
    load();
  };

  if (loading)
    return (
      <div className="flex items-center justify-center h-64 text-muted-foreground text-sm">
        Loading agent…
      </div>
    );
  if (!agent)
    return (
      <div className="flex items-center justify-center h-64 text-muted-foreground text-sm">
        Agent not found.
      </div>
    );

  return (
    <div className="p-6 max-w-4xl">
      <Link
        href="/paperclip/agents"
        className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground mb-4 w-fit"
      >
        <ArrowLeft className="h-3 w-3" /> Agents
      </Link>

      <div className="flex items-center gap-4 mb-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Bot className="h-6 w-6" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-semibold text-foreground">
              {agent.name}
            </h1>
            <span
              className={`flex items-center gap-1 text-xs ${STATUS_COLOR[agent.status] ?? "text-gray-400"}`}
            >
              <Circle className="h-2 w-2 fill-current" /> {agent.status}
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            {agent.title ?? agent.role} · {agent.adapterType}
          </p>
        </div>
        <div className="ml-auto flex gap-2">
          <Button variant="outline" size="sm" onClick={wake}>
            <RefreshCw className="h-4 w-4" /> Wake
          </Button>
          <Button size="sm" onClick={save} loading={saving}>
            <Save className="h-4 w-4" /> Save
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Identity */}
        <section className="rounded-xl border border-border bg-surface-1 p-4">
          <h2 className="mb-4 text-sm font-semibold text-foreground">
            Identity
          </h2>
          <div className="flex flex-col gap-3">
            <TextField
              label="Name"
              id="ag-name"
              value={name}
              onChange={setName}
              required
            />
            <TextField
              label="Title"
              id="ag-title"
              value={title}
              onChange={setTitle}
              placeholder="e.g. Chief Executive Officer"
            />
            <TextField
              label="Role"
              id="ag-role"
              value={role}
              onChange={setRole}
            />
            <SelectField
              label="Status"
              id="ag-status"
              value={status}
              onChange={setStatus}
              options={[
                { value: "idle", label: "Idle" },
                { value: "running", label: "Running" },
                { value: "error", label: "Error" },
              ]}
            />
          </div>
        </section>

        {/* Stats */}
        <section className="rounded-xl border border-border bg-surface-1 p-4">
          <h2 className="mb-4 text-sm font-semibold text-foreground">
            Stats & Info
          </h2>
          <dl className="space-y-2 text-sm">
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Adapter type</dt>
              <dd className="text-foreground font-mono text-xs">
                {agent.adapterType}
              </dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Budget (monthly)</dt>
              <dd className="text-foreground">
                {agent.budgetMonthlyCents
                  ? `$${(agent.budgetMonthlyCents / 100).toFixed(2)}`
                  : "Unlimited"}
              </dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Spent (this month)</dt>
              <dd className="text-foreground">
                {agent.spentMonthlyCents
                  ? `$${(agent.spentMonthlyCents / 100).toFixed(2)}`
                  : "$0.00"}
              </dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Last heartbeat</dt>
              <dd className="text-foreground text-xs">
                {agent.lastHeartbeatAt
                  ? new Date(agent.lastHeartbeatAt).toLocaleString()
                  : "Never"}
              </dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Created</dt>
              <dd className="text-foreground text-xs">
                {new Date(agent.createdAt).toLocaleDateString()}
              </dd>
            </div>
          </dl>
        </section>

        {/* Adapter Config */}
        <section className="rounded-xl border border-border bg-surface-1 p-4 lg:col-span-2">
          <h2 className="mb-4 text-sm font-semibold text-foreground">
            Adapter Configuration
          </h2>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-foreground">
                adapterConfig{" "}
                <span className="text-muted-foreground">(JSON)</span>
              </label>
              <textarea
                value={adapterConfigStr}
                onChange={(e) => {
                  setAdapterConfigStr(e.target.value);
                  setAdapterConfigError("");
                }}
                rows={12}
                className="rounded-lg border border-border bg-surface-2 px-3 py-2 text-xs font-mono placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-y"
                spellCheck={false}
              />
              {adapterConfigError && (
                <p className="text-xs text-destructive">{adapterConfigError}</p>
              )}
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-medium text-foreground">
                runtimeConfig{" "}
                <span className="text-muted-foreground">(JSON)</span>
              </label>
              <textarea
                value={runtimeConfigStr}
                onChange={(e) => {
                  setRuntimeConfigStr(e.target.value);
                  setRuntimeConfigError("");
                }}
                rows={12}
                className="rounded-lg border border-border bg-surface-2 px-3 py-2 text-xs font-mono placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-y"
                spellCheck={false}
              />
              {runtimeConfigError && (
                <p className="text-xs text-destructive">{runtimeConfigError}</p>
              )}
            </div>
          </div>
        </section>

        {/* API Keys */}
        <section className="rounded-xl border border-border bg-surface-1 p-4 lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-sm font-semibold text-foreground">API Keys</h2>
            <Button
              size="sm"
              variant="outline"
              onClick={() => setNewKeyOpen(true)}
            >
              <Key className="h-3.5 w-3.5" /> New Key
            </Button>
          </div>
          <div className="space-y-2">
            {apiKeys
              .filter((k) => !k.revokedAt)
              .map((key) => (
                <div
                  key={key.id}
                  className="flex items-center justify-between rounded-lg border border-border px-4 py-3 bg-surface-2"
                >
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {key.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Created {new Date(key.createdAt).toLocaleDateString()}
                      {key.lastUsedAt &&
                        ` · Last used ${new Date(key.lastUsedAt).toLocaleDateString()}`}
                    </p>
                  </div>
                  <button
                    onClick={() => revokeApiKey(key.id)}
                    className="text-xs text-muted-foreground hover:text-destructive flex items-center gap-1"
                  >
                    <Trash2 className="h-3.5 w-3.5" /> Revoke
                  </button>
                </div>
              ))}
            {apiKeys.filter((k) => !k.revokedAt).length === 0 && (
              <p className="text-xs text-muted-foreground text-center py-4">
                No active API keys
              </p>
            )}
          </div>
        </section>
      </div>

      {/* New Key Modal */}
      <Modal
        open={newKeyOpen}
        onClose={() => setNewKeyOpen(false)}
        title="Create API Key"
        size="sm"
      >
        {createdKey ? (
          <div className="flex flex-col gap-4">
            <p className="text-sm text-muted-foreground">
              Copy this key now — it won&apos;t be shown again.
            </p>
            <div className="rounded-lg bg-surface-2 border border-border p-3">
              <code className="text-xs font-mono break-all text-foreground">
                {createdKey}
              </code>
            </div>
            <Button
              onClick={() => {
                setCreatedKey(null);
                setNewKeyOpen(false);
              }}
            >
              Done
            </Button>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <TextField
              label="Key name"
              id="key-name"
              value={newKeyName}
              onChange={setNewKeyName}
              placeholder="e.g. Production key"
            />
            <div className="flex justify-end gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setNewKeyOpen(false)}
              >
                Cancel
              </Button>
              <Button size="sm" onClick={createApiKey}>
                Create
              </Button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
