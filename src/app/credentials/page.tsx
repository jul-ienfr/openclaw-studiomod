"use client";

import { useEffect, useState, useCallback } from "react";
import { Lock, Plus, Trash2, Eye, EyeOff, ChevronDown } from "lucide-react";

type Credential = { key: string; value: string };
type AgentCredentials = { agentId: string; credentials: Credential[] };

const TEMPLATES: Record<string, Credential[]> = {
  GitHub: [{ key: "GITHUB_TOKEN", value: "" }, { key: "GITHUB_USERNAME", value: "" }],
  Slack: [{ key: "SLACK_BOT_TOKEN", value: "" }, { key: "SLACK_CHANNEL", value: "" }],
  SMTP: [{ key: "SMTP_HOST", value: "" }, { key: "SMTP_PORT", value: "587" }, { key: "SMTP_USER", value: "" }, { key: "SMTP_PASS", value: "" }],
  Twitter: [{ key: "TWITTER_API_KEY", value: "" }, { key: "TWITTER_API_SECRET", value: "" }],
  Custom: [{ key: "MY_KEY", value: "" }],
};

export default function CredentialsPage() {
  const [agents, setAgents] = useState<string[]>([]);
  const [selectedAgent, setSelectedAgent] = useState("");
  const [credentials, setCredentials] = useState<Credential[]>([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showValues, setShowValues] = useState(false);
  const [template, setTemplate] = useState("");

  // Load agents list
  useEffect(() => {
    fetch("/api/analytics")
      .then((r) => r.json())
      .then((d: { agents?: Array<{ agentId: string }> }) => {
        const ids = (d.agents ?? []).map((a) => a.agentId);
        setAgents(ids);
        if (ids.length > 0) setSelectedAgent(ids[0]);
      })
      .catch(() => {});
  }, []);

  const load = useCallback(async () => {
    if (!selectedAgent) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/credentials?agentId=${encodeURIComponent(selectedAgent)}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json() as { credentials: Credential[] };
      setCredentials(data.credentials ?? []);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Erreur");
    } finally {
      setLoading(false);
    }
  }, [selectedAgent]);

  useEffect(() => { void load(); }, [load]);

  const save = async () => {
    setSaving(true);
    setError(null);
    try {
      const res = await fetch("/api/credentials", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ agentId: selectedAgent, credentials }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Erreur sauvegarde");
    } finally {
      setSaving(false);
    }
  };

  const applyTemplate = () => {
    if (!template || !TEMPLATES[template]) return;
    setCredentials((prev) => {
      const existing = new Set(prev.map((c) => c.key));
      const toAdd = TEMPLATES[template].filter((c) => !existing.has(c.key));
      return [...prev, ...toAdd];
    });
    setTemplate("");
  };

  return (
    <div className="flex h-full flex-col overflow-y-auto">
      <header className="flex items-center justify-between border-b border-border px-6 py-4">
        <div>
          <h1 className="console-title type-page-title text-foreground">Credentials</h1>
          <p className="text-sm text-muted-foreground">Vault chiffré AES-256 par agent</p>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setShowValues((v) => !v)} className="ui-btn-secondary flex items-center gap-2 px-3 py-2 text-sm">
            {showValues ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            {showValues ? "Masquer" : "Afficher"}
          </button>
          <button onClick={save} disabled={saving || !selectedAgent} className="ui-btn-primary px-4 py-2 text-sm">
            {saving ? "Sauvegarde..." : "Sauvegarder"}
          </button>
        </div>
      </header>

      <main className="flex-1 p-6 space-y-4">
        {error && (
          <div className="ui-card border border-destructive/30 bg-destructive/10 p-3 text-sm text-destructive">{error}</div>
        )}

        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-2">
            <label className="text-sm text-muted-foreground">Agent :</label>
            <select
              value={selectedAgent}
              onChange={(e) => setSelectedAgent(e.target.value)}
              className="h-8 rounded-md border border-border bg-surface-2 px-2 text-sm text-foreground focus:outline-none"
            >
              {agents.map((a) => <option key={a} value={a}>{a}</option>)}
            </select>
          </div>
          <div className="flex items-center gap-2">
            <label className="text-sm text-muted-foreground">Template :</label>
            <select
              value={template}
              onChange={(e) => setTemplate(e.target.value)}
              className="h-8 rounded-md border border-border bg-surface-2 px-2 text-sm text-foreground focus:outline-none"
            >
              <option value="">— Choisir —</option>
              {Object.keys(TEMPLATES).map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
            <button onClick={applyTemplate} disabled={!template} className="ui-btn-secondary px-3 py-1.5 text-sm">
              Appliquer
            </button>
          </div>
        </div>

        <div className="space-y-2">
          {credentials.map((cred, i) => (
            <div key={i} className="flex items-center gap-2">
              <input
                type="text"
                value={cred.key}
                onChange={(e) => setCredentials((prev) => prev.map((c, j) => j === i ? { ...c, key: e.target.value } : c))}
                placeholder="CLE"
                className="h-8 w-48 rounded-md border border-border bg-surface-2 px-3 font-mono text-sm text-foreground focus:outline-none"
              />
              <input
                type={showValues ? "text" : "password"}
                value={cred.value}
                onChange={(e) => setCredentials((prev) => prev.map((c, j) => j === i ? { ...c, value: e.target.value } : c))}
                placeholder="Valeur"
                className="h-8 flex-1 rounded-md border border-border bg-surface-2 px-3 font-mono text-sm text-foreground focus:outline-none"
              />
              <button
                onClick={() => setCredentials((prev) => prev.filter((_, j) => j !== i))}
                className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          ))}
          <button
            onClick={() => setCredentials((prev) => [...prev, { key: "", value: "" }])}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <Plus className="h-4 w-4" />
            Ajouter une clé
          </button>
        </div>

        {credentials.length === 0 && !loading && (
          <div className="flex flex-col items-center gap-3 py-12 text-muted-foreground">
            <Lock className="h-8 w-8" />
            <p className="text-sm">Aucun credential pour cet agent.</p>
          </div>
        )}
      </main>
    </div>
  );
}
