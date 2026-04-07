"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Bot, Circle, RefreshCw, Plus, ExternalLink } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import {
  TextField,
  TextareaField,
  SelectField,
} from "@/components/paperclip/FormField";
import { useCompanyStore } from "@/stores/company-store";
import type { PcAgent } from "@/types/paperclip";

const STATUS_COLOR: Record<string, string> = {
  idle: "text-green-500",
  running: "text-blue-500",
  error: "text-red-500",
};

const STATUS_LABEL: Record<string, string> = {
  idle: "Idle",
  running: "Running",
  error: "Error",
};

function HireAgentModal({
  open,
  onClose,
  companyId,
  onSave,
}: {
  open: boolean;
  onClose: () => void;
  companyId: string;
  onSave: (data: Record<string, unknown>) => Promise<void>;
}) {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [role, setRole] = useState("general");
  const [adapterType, setAdapterType] = useState("openclaw_gateway");
  const [gatewayUrl, setGatewayUrl] = useState("ws://127.0.0.1:18789");
  const [authToken, setAuthToken] = useState("");
  const [instructions, setInstructions] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (open) {
      setName("");
      setTitle("");
      setRole("general");
      setAdapterType("openclaw_gateway");
      setGatewayUrl("ws://127.0.0.1:18789");
      setAuthToken("");
      setInstructions("");
    }
  }, [open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const adapterConfig: Record<string, unknown> = { url: gatewayUrl };
      if (authToken) adapterConfig.authToken = authToken;
      await onSave({
        name,
        title: title || undefined,
        role,
        adapterType,
        adapterConfig,
        instructions: instructions || undefined,
      });
      onClose();
    } finally {
      setSaving(false);
    }
  };

  return (
    <Modal open={open} onClose={onClose} title="Hire Agent" size="lg">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-3">
          <TextField
            label="Name"
            id="hire-name"
            value={name}
            onChange={setName}
            required
            placeholder="Agent name"
          />
          <TextField
            label="Title"
            id="hire-title"
            value={title}
            onChange={setTitle}
            placeholder="e.g. CEO"
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <TextField
            label="Role"
            id="hire-role"
            value={role}
            onChange={setRole}
            placeholder="general"
          />
          <SelectField
            label="Adapter Type"
            id="hire-adapter"
            value={adapterType}
            onChange={setAdapterType}
            options={[
              { value: "openclaw_gateway", label: "openclaw_gateway" },
              { value: "process", label: "process" },
              { value: "http", label: "http" },
            ]}
          />
        </div>
        {adapterType === "openclaw_gateway" && (
          <div className="grid grid-cols-2 gap-3">
            <TextField
              label="Gateway URL"
              id="hire-url"
              value={gatewayUrl}
              onChange={setGatewayUrl}
              placeholder="ws://127.0.0.1:18789"
            />
            <TextField
              label="Auth Token"
              id="hire-token"
              value={authToken}
              onChange={setAuthToken}
              placeholder="Optional"
            />
          </div>
        )}
        <TextareaField
          label="Instructions"
          id="hire-inst"
          value={instructions}
          onChange={setInstructions}
          placeholder="Agent instructions / system prompt…"
          rows={3}
        />
        <div className="flex justify-end gap-2 pt-2">
          <Button type="button" variant="ghost" size="sm" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" size="sm" loading={saving}>
            Hire
          </Button>
        </div>
      </form>
    </Modal>
  );
}

export default function AgentsPage() {
  const { activeCompanyId, companies } = useCompanyStore();
  const [agents, setAgents] = useState<PcAgent[]>([]);
  const [loading, setLoading] = useState(false);
  const [hireOpen, setHireOpen] = useState(false);

  const activeCompany = companies.find((c) => c.id === activeCompanyId);

  const loadAgents = (companyId: string) => {
    setLoading(true);
    fetch(`/api/paperclip/companies/${companyId}/agents`)
      .then((r) => r.json())
      .then((data) => {
        setAgents(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    if (!activeCompanyId) return;
    const timer = window.setTimeout(() => {
      loadAgents(activeCompanyId);
    }, 0);
    return () => {
      window.clearTimeout(timer);
    };
  }, [activeCompanyId]);

  const hireAgent = async (data: Record<string, unknown>) => {
    const res = await fetch(
      `/api/paperclip/companies/${activeCompanyId}/agent-hires`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      },
    );
    if (!res.ok) throw new Error(await res.text());
    if (activeCompanyId) loadAgents(activeCompanyId);
  };

  const wakeAgent = async (agentId: string) => {
    await fetch(`/api/paperclip/agents/${agentId}/wake`, { method: "POST" });
    if (activeCompanyId) loadAgents(activeCompanyId);
  };

  return (
    <div className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Agents</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {activeCompany?.name} · {agents.length} agent
            {agents.length !== 1 ? "s" : ""}
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => activeCompanyId && loadAgents(activeCompanyId)}
          >
            <RefreshCw className="h-4 w-4" /> Refresh
          </Button>
          <Button size="sm" onClick={() => setHireOpen(true)}>
            <Plus className="h-4 w-4" /> Hire Agent
          </Button>
        </div>
      </div>

      {loading && (
        <div className="flex items-center justify-center h-40 text-muted-foreground text-sm">
          Loading agents…
        </div>
      )}

      {!loading && (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {agents.map((agent) => (
            <div
              key={agent.id}
              className="rounded-xl border border-border bg-surface-1 p-4"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Bot className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium text-foreground truncate">
                      {agent.name}
                    </h3>
                    <span
                      className={`flex items-center gap-1 text-xs shrink-0 ${STATUS_COLOR[agent.status] ?? "text-gray-400"}`}
                    >
                      <Circle className="h-1.5 w-1.5 fill-current" />{" "}
                      {STATUS_LABEL[agent.status] ?? agent.status}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {agent.title ?? agent.role}
                  </p>
                  <p className="text-xs text-muted-foreground/60 mt-1">
                    {agent.adapterType}
                  </p>
                </div>
              </div>
              {agent.lastHeartbeatAt && (
                <p className="mt-3 text-xs text-muted-foreground/60 border-t border-border pt-2">
                  Last heartbeat:{" "}
                  {new Date(agent.lastHeartbeatAt).toLocaleString()}
                </p>
              )}
              <div className="mt-3 flex gap-2">
                <button
                  onClick={() => wakeAgent(agent.id)}
                  className="flex-1 rounded-lg border border-border px-2 py-1 text-xs text-muted-foreground hover:bg-surface-2 hover:text-foreground transition-colors"
                >
                  Wake
                </button>
                <Link
                  href={`/paperclip/agents/${agent.id}`}
                  className="flex items-center gap-1 rounded-lg border border-border px-2 py-1 text-xs text-muted-foreground hover:bg-surface-2 hover:text-foreground transition-colors"
                >
                  <ExternalLink className="h-3 w-3" /> Config
                </Link>
              </div>
            </div>
          ))}
          {agents.length === 0 && !loading && (
            <div className="col-span-full flex flex-col items-center justify-center py-20 text-muted-foreground">
              <Bot className="h-10 w-10 mb-3 opacity-30" />
              <p className="text-sm">No agents in this company</p>
            </div>
          )}
        </div>
      )}

      <HireAgentModal
        open={hireOpen}
        onClose={() => setHireOpen(false)}
        companyId={activeCompanyId ?? ""}
        onSave={hireAgent}
      />
    </div>
  );
}
