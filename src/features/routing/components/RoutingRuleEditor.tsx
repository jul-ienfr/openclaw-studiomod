"use client";

import { useState, useCallback } from "react";
import { useTranslations } from "next-intl";
import { X, Plus, Trash2 } from "lucide-react";
import { randomUUID } from "@/lib/uuid";
import type {
  RoutingRule,
  RoutingCondition,
  RoutingConditionType,
} from "../types";

type Agent = { id: string; name: string };

type Props = {
  rule?: RoutingRule;
  agents: Agent[];
  onSave: (rule: RoutingRule) => void;
  onClose: () => void;
};

const CONDITION_TYPES: RoutingConditionType[] = [
  "channel",
  "keyword",
  "language",
  "sentiment",
  "time-range",
  "custom",
];

const OPERATORS = ["equals", "contains", "matches", "gt", "lt"] as const;

const emptyCondition = (): RoutingCondition => ({
  type: "keyword",
  operator: "contains",
  value: "",
});

export function RoutingRuleEditor({ rule, agents, onSave, onClose }: Props) {
  const t = useTranslations("routing");
  const [name, setName] = useState(rule?.name ?? "");
  const [priority, setPriority] = useState(rule?.priority ?? 50);
  const [targetAgentId, setTargetAgentId] = useState(rule?.targetAgentId ?? "");
  const [fallbackAgentId, setFallbackAgentId] = useState(
    rule?.fallbackAgentId ?? "",
  );
  const [conditions, setConditions] = useState<RoutingCondition[]>(
    rule?.conditions.length ? rule.conditions : [emptyCondition()],
  );

  const isValid =
    name.trim() !== "" &&
    targetAgentId !== "" &&
    conditions.some((c) => c.value.trim() !== "");

  const handleSave = useCallback(() => {
    if (!isValid) return;
    const filteredConditions = conditions.filter((c) => c.value.trim() !== "");
    onSave({
      id: rule?.id ?? randomUUID(),
      name: name.trim(),
      enabled: rule?.enabled ?? true,
      priority,
      conditions: filteredConditions,
      targetAgentId,
      fallbackAgentId: fallbackAgentId || undefined,
    });
  }, [
    isValid,
    conditions,
    rule,
    name,
    priority,
    targetAgentId,
    fallbackAgentId,
    onSave,
  ]);

  const updateCondition = useCallback(
    (index: number, patch: Partial<RoutingCondition>) => {
      setConditions((prev) =>
        prev.map((c, i) => (i === index ? { ...c, ...patch } : c)),
      );
    },
    [],
  );

  const addCondition = useCallback(() => {
    setConditions((prev) => [...prev, emptyCondition()]);
  }, []);

  const removeCondition = useCallback((index: number) => {
    setConditions((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const title = rule ? t("editRule") : t("addRule");

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      aria-modal="true"
      role="dialog"
      aria-label={title}
    >
      <div className="w-full max-w-lg rounded-xl border border-border bg-background shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border px-6 py-4">
          <h2 className="text-base font-semibold text-foreground">{title}</h2>
          <button
            onClick={onClose}
            aria-label={t("close")}
            className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Body */}
        <div
          className="space-y-4 overflow-y-auto px-6 py-4"
          style={{ maxHeight: "60vh" }}
        >
          {/* Name */}
          <div className="space-y-1">
            <label className="text-xs text-muted-foreground">
              {t("ruleName")}
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t("ruleNamePlaceholder")}
              className="w-full rounded-md border border-border bg-surface-2 px-3 py-1.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Priority */}
          <div className="space-y-1">
            <label className="text-xs text-muted-foreground">
              {t("priority")} (0–100)
            </label>
            <input
              type="number"
              min={0}
              max={100}
              value={priority}
              onChange={(e) => setPriority(Number(e.target.value))}
              className="w-full rounded-md border border-border bg-surface-2 px-3 py-1.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* Target agent */}
          <div className="space-y-1">
            <label className="text-xs text-muted-foreground">
              {t("targetAgent")}
            </label>
            <select
              value={targetAgentId}
              onChange={(e) => setTargetAgentId(e.target.value)}
              className="w-full rounded-md border border-border bg-surface-2 px-3 py-1.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">{t("selectAgent")}</option>
              {agents.map((a) => (
                <option key={a.id} value={a.id}>
                  {a.name}
                </option>
              ))}
            </select>
          </div>

          {/* Fallback agent */}
          <div className="space-y-1">
            <label className="text-xs text-muted-foreground">
              {t("fallbackAgent")}
            </label>
            <select
              value={fallbackAgentId}
              onChange={(e) => setFallbackAgentId(e.target.value)}
              className="w-full rounded-md border border-border bg-surface-2 px-3 py-1.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">{t("none")}</option>
              {agents.map((a) => (
                <option key={a.id} value={a.id}>
                  {a.name}
                </option>
              ))}
            </select>
          </div>

          {/* Conditions */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs text-muted-foreground">
                {t("conditions")}
              </label>
              <button
                onClick={addCondition}
                className="flex items-center gap-1 text-xs text-primary hover:underline"
              >
                <Plus className="h-3 w-3" />
                {t("addCondition")}
              </button>
            </div>
            {conditions.map((cond, i) => (
              <div key={i} className="flex items-center gap-2">
                <select
                  value={cond.type}
                  onChange={(e) =>
                    updateCondition(i, {
                      type: e.target.value as RoutingConditionType,
                    })
                  }
                  className="rounded-md border border-border bg-surface-2 px-2 py-1 text-xs text-foreground focus:outline-none"
                >
                  {CONDITION_TYPES.map((ct) => (
                    <option key={ct} value={ct}>
                      {ct}
                    </option>
                  ))}
                </select>
                <select
                  value={cond.operator}
                  onChange={(e) =>
                    updateCondition(i, {
                      operator: e.target.value as RoutingCondition["operator"],
                    })
                  }
                  className="rounded-md border border-border bg-surface-2 px-2 py-1 text-xs text-foreground focus:outline-none"
                >
                  {OPERATORS.map((op) => (
                    <option key={op} value={op}>
                      {op}
                    </option>
                  ))}
                </select>
                <input
                  type="text"
                  value={cond.value}
                  onChange={(e) =>
                    updateCondition(i, { value: e.target.value })
                  }
                  placeholder={t("conditionValue")}
                  className="min-w-0 flex-1 rounded-md border border-border bg-surface-2 px-2 py-1 text-xs text-foreground focus:outline-none"
                />
                <button
                  onClick={() => removeCondition(i)}
                  aria-label="Remove condition"
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
                >
                  <Trash2 className="h-3 w-3" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-2 border-t border-border px-6 py-4">
          <button
            onClick={onClose}
            className="ui-btn-secondary px-4 py-2 text-sm"
          >
            {t("cancel")}
          </button>
          <button
            onClick={handleSave}
            disabled={!isValid}
            className="ui-btn-primary px-4 py-2 text-sm disabled:opacity-50"
          >
            {t("save")}
          </button>
        </div>
      </div>
    </div>
  );
}
