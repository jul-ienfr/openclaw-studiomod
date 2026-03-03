"use client";

import { useState, useEffect, useCallback } from "react";
import { useTranslations } from "next-intl";
import { Plus, GitBranch, Pencil, Trash2, ToggleLeft, ToggleRight } from "lucide-react";
import { toast } from "sonner";
import type { RoutingConfig, RoutingRule } from "../types";
import {
  fetchRoutingConfig,
  persistRoutingConfig,
  addRoutingRule,
  updateRoutingRule,
  removeRoutingRule,
} from "../routingStore";
import { RoutingRuleEditor } from "./RoutingRuleEditor";

type Agent = { id: string; name: string };

const DEFAULT_AGENTS: Agent[] = [
  { id: "main", name: "main" },
  { id: "support", name: "support" },
  { id: "sales", name: "sales" },
  { id: "dev", name: "dev" },
];

export function RoutingPanel({ agents }: { agents?: Agent[] }) {
  const t = useTranslations("routing");
  const [config, setConfig] = useState<RoutingConfig>({ rules: [], defaultAgentId: "" });
  const [editingRule, setEditingRule] = useState<RoutingRule | null>(null);
  const [showEditor, setShowEditor] = useState(false);

  const availableAgents = agents ?? DEFAULT_AGENTS;

  useEffect(() => {
    void fetchRoutingConfig().then(setConfig);
  }, []);

  const handleAdd = useCallback(() => {
    setEditingRule(null);
    setShowEditor(true);
  }, []);

  const handleEdit = useCallback((rule: RoutingRule) => {
    setEditingRule(rule);
    setShowEditor(true);
  }, []);

  const handleSave = useCallback((rule: RoutingRule) => {
    let next: RoutingConfig;
    if (editingRule) {
      next = updateRoutingRule(config, rule.id, rule);
      toast.success(t("ruleUpdated"));
    } else {
      next = addRoutingRule(config, rule);
      toast.success(t("ruleCreated"));
    }
    setConfig(next);
    persistRoutingConfig(next);
    setShowEditor(false);
    setEditingRule(null);
  }, [editingRule, config]);

  const handleToggle = useCallback((rule: RoutingRule) => {
    const next = updateRoutingRule(config, rule.id, { enabled: !rule.enabled });
    setConfig(next);
    persistRoutingConfig(next);
  }, [config]);

  const handleDelete = useCallback((ruleId: string) => {
    const next = removeRoutingRule(config, ruleId);
    setConfig(next);
    persistRoutingConfig(next);
    toast.success(t("ruleRemoved"));
  }, [config]);

  const handleCloseEditor = useCallback(() => {
    setShowEditor(false);
    setEditingRule(null);
  }, []);

  const getAgentName = (id: string) =>
    availableAgents.find((a) => a.id === id)?.name ?? id;

  return (
    <div className="flex h-full flex-col overflow-y-auto">
      <header className="flex items-center justify-between border-b border-border px-6 py-4">
        <div>
          <h1 className="console-title type-page-title text-foreground flex items-center gap-2">
            {t("title")}
            <span className="ml-2 inline-flex h-5 items-center rounded-full bg-muted px-2 text-xs text-muted-foreground">
              {config.rules.length}
            </span>
          </h1>
          <p className="text-sm text-muted-foreground">{t("description")}</p>
        </div>
        <button
          onClick={handleAdd}
          className="ui-btn-primary flex items-center gap-2 px-3 py-2 text-sm"
        >
          <Plus className="h-4 w-4" />
          {t("addRule")}
        </button>
      </header>

      <main className="flex-1 p-6 space-y-2">
        {config.rules.length === 0 ? (
          <div className="flex flex-col items-center gap-3 py-16 text-muted-foreground">
            <GitBranch className="h-8 w-8" />
            <p className="text-sm">{t("noRules")}</p>
          </div>
        ) : (
          config.rules.map((rule) => (
            <div
              key={rule.id}
              className={`flex items-center gap-3 rounded-lg border border-border bg-surface-2 px-4 py-3 transition-opacity ${
                rule.enabled ? "opacity-100" : "opacity-50"
              }`}
            >
              <button
                onClick={() => handleToggle(rule)}
                aria-label={rule.enabled ? t("disable") : t("enable")}
                className={`shrink-0 ${rule.enabled ? "text-primary" : "text-muted-foreground"}`}
              >
                {rule.enabled ? (
                  <ToggleRight className="h-5 w-5" />
                ) : (
                  <ToggleLeft className="h-5 w-5" />
                )}
              </button>

              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-foreground">{rule.name}</p>
                <p className="truncate text-xs text-muted-foreground">
                  {t("priority")} {rule.priority} &middot; {rule.conditions.length} {t("conditionsLabel")} &middot; &rarr;{" "}
                  {getAgentName(rule.targetAgentId)}
                </p>
              </div>

              <button
                onClick={() => handleEdit(rule)}
                aria-label={t("editRule")}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                <Pencil className="h-4 w-4" />
              </button>
              <button
                onClick={() => handleDelete(rule.id)}
                aria-label={t("removeRule")}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          ))
        )}
      </main>

      {showEditor && (
        <RoutingRuleEditor
          rule={editingRule ?? undefined}
          agents={availableAgents}
          onSave={handleSave}
          onClose={handleCloseEditor}
        />
      )}
    </div>
  );
}
