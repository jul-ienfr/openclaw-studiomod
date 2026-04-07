"use client";

import { useEffect, useState } from "react";
import { DollarSign, Bot, FolderOpen, TrendingUp, Pencil } from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { TextField } from "@/components/paperclip/FormField";
import { useCompanyStore } from "@/stores/company-store";
interface CostSummary {
  totalCents: number;
  budgetCents: number;
}
interface AgentCost {
  agentId: string;
  agentName: string;
  totalCents: number;
  inputTokens: number;
  outputTokens: number;
}
interface ProjectCost {
  projectId: string;
  projectName: string;
  totalCents: number;
}
interface DashboardData {
  costSummary?: CostSummary;
  agentStatusCounts?: Record<string, number>;
  failedRunsCount?: number;
  pendingApprovalsCount?: number;
}

function BudgetBar({ spent, budget }: { spent: number; budget: number }) {
  if (budget <= 0) return null;
  const pct = Math.min(100, Math.round((spent / budget) * 100));
  return (
    <div className="mt-2">
      <div className="flex justify-between text-xs text-muted-foreground mb-1">
        <span>${(spent / 100).toFixed(2)} spent</span>
        <span>
          {pct}% of ${(budget / 100).toFixed(2)}
        </span>
      </div>
      <div className="h-1.5 rounded-full bg-surface-2">
        <div
          className={`h-1.5 rounded-full ${pct >= 90 ? "bg-red-500" : pct >= 70 ? "bg-yellow-500" : "bg-primary"}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

function BudgetModal({
  open,
  onClose,
  companyId,
  currentBudget,
  onSave,
}: {
  open: boolean;
  onClose: () => void;
  companyId: string;
  currentBudget: number;
  onSave: () => void;
}) {
  const [budget, setBudget] = useState(
    String((currentBudget / 100).toFixed(2)),
  );
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!open) return;
    const timer = window.setTimeout(() => {
      setBudget(String((currentBudget / 100).toFixed(2)));
    }, 0);
    return () => {
      window.clearTimeout(timer);
    };
  }, [open, currentBudget]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    await fetch(`/api/paperclip/companies/${companyId}/budgets`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        budgetMonthlyCents: Math.round(parseFloat(budget) * 100),
      }),
    });
    setSaving(false);
    onSave();
    onClose();
  };

  return (
    <Modal open={open} onClose={onClose} title="Set Monthly Budget" size="sm">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <TextField
          label="Monthly Budget (USD)"
          id="budget-usd"
          value={budget}
          onChange={setBudget}
          type="number"
          hint="Set to 0 for unlimited"
        />
        <div className="flex justify-end gap-2">
          <Button type="button" variant="ghost" size="sm" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" size="sm" loading={saving}>
            Save
          </Button>
        </div>
      </form>
    </Modal>
  );
}

export default function CostsPage() {
  const { activeCompanyId, companies } = useCompanyStore();
  const [dashboard, setDashboard] = useState<DashboardData | null>(null);
  const [agentCosts, setAgentCosts] = useState<AgentCost[]>([]);
  const [projectCosts, setProjectCosts] = useState<ProjectCost[]>([]);
  const [loading, setLoading] = useState(false);
  const [budgetOpen, setBudgetOpen] = useState(false);

  const activeCompany = companies.find((c) => c.id === activeCompanyId);

  const load = () => {
    if (!activeCompanyId) return;
    setLoading(true);
    Promise.all([
      fetch(`/api/paperclip/companies/${activeCompanyId}/dashboard`).then((r) =>
        r.json(),
      ),
      fetch(`/api/paperclip/companies/${activeCompanyId}/costs/by-agent`).then(
        (r) => r.json(),
      ),
      fetch(
        `/api/paperclip/companies/${activeCompanyId}/costs/by-project`,
      ).then((r) => r.json()),
    ])
      .then(([dash, byAgent, byProject]) => {
        setDashboard(dash);
        setAgentCosts(Array.isArray(byAgent) ? byAgent : (byAgent?.data ?? []));
        setProjectCosts(
          Array.isArray(byProject) ? byProject : (byProject?.data ?? []),
        );
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
  }, [activeCompanyId]);

  const totalSpent = agentCosts.reduce((sum, a) => sum + a.totalCents, 0);
  const budget = activeCompany?.budgetMonthlyCents ?? 0;

  return (
    <div className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">
            Costs & Budget
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {activeCompany?.name}
          </p>
        </div>
        <Button variant="outline" size="sm" onClick={() => setBudgetOpen(true)}>
          <Pencil className="h-4 w-4" /> Set Budget
        </Button>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-6">
        <div className="rounded-xl border border-border bg-surface-1 p-4">
          <div className="flex items-center gap-2 mb-2">
            <DollarSign className="h-4 w-4 text-primary" />
            <p className="text-xs text-muted-foreground font-medium">
              Total Spent (this month)
            </p>
          </div>
          <p className="text-2xl font-semibold text-foreground">
            ${(totalSpent / 100).toFixed(4)}
          </p>
          {budget > 0 && <BudgetBar spent={totalSpent} budget={budget} />}
        </div>
        <div className="rounded-xl border border-border bg-surface-1 p-4">
          <div className="flex items-center gap-2 mb-2">
            <Bot className="h-4 w-4 text-blue-400" />
            <p className="text-xs text-muted-foreground font-medium">
              Monthly Budget
            </p>
          </div>
          <p className="text-2xl font-semibold text-foreground">
            {budget > 0 ? `$${(budget / 100).toFixed(2)}` : "Unlimited"}
          </p>
        </div>
        <div className="rounded-xl border border-border bg-surface-1 p-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="h-4 w-4 text-green-400" />
            <p className="text-xs text-muted-foreground font-medium">
              Active Agents
            </p>
          </div>
          <p className="text-2xl font-semibold text-foreground">
            {dashboard?.agentStatusCounts?.running ?? 0}{" "}
            <span className="text-sm text-muted-foreground font-normal">
              running
            </span>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* By Agent */}
        <section>
          <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
            <Bot className="h-4 w-4 text-primary" /> Cost by Agent
          </h2>
          <div className="space-y-2">
            {agentCosts.length > 0 ? (
              agentCosts
                .sort((a, b) => b.totalCents - a.totalCents)
                .map((item) => (
                  <div
                    key={item.agentId}
                    className="flex items-center gap-3 rounded-lg border border-border bg-surface-1 px-4 py-3"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">
                        {item.agentName ?? item.agentId.slice(0, 8)}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {(
                          item.inputTokens + item.outputTokens
                        ).toLocaleString()}{" "}
                        tokens
                      </p>
                    </div>
                    <span className="text-sm font-mono text-foreground shrink-0">
                      ${(item.totalCents / 100).toFixed(4)}
                    </span>
                  </div>
                ))
            ) : (
              <p className="text-xs text-muted-foreground text-center py-8">
                No cost data yet
              </p>
            )}
          </div>
        </section>

        {/* By Project */}
        <section>
          <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
            <FolderOpen className="h-4 w-4 text-primary" /> Cost by Project
          </h2>
          <div className="space-y-2">
            {projectCosts.length > 0 ? (
              projectCosts
                .sort((a, b) => b.totalCents - a.totalCents)
                .map((item) => (
                  <div
                    key={item.projectId ?? "unlinked"}
                    className="flex items-center gap-3 rounded-lg border border-border bg-surface-1 px-4 py-3"
                  >
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">
                        {item.projectName ?? "Unlinked"}
                      </p>
                    </div>
                    <span className="text-sm font-mono text-foreground shrink-0">
                      ${(item.totalCents / 100).toFixed(4)}
                    </span>
                  </div>
                ))
            ) : (
              <p className="text-xs text-muted-foreground text-center py-8">
                No cost data yet
              </p>
            )}
          </div>
        </section>
      </div>

      <BudgetModal
        open={budgetOpen}
        onClose={() => setBudgetOpen(false)}
        companyId={activeCompanyId ?? ""}
        currentBudget={budget}
        onSave={load}
      />
    </div>
  );
}
