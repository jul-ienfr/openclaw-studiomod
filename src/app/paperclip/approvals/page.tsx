"use client";

import { useEffect, useState } from "react";
import { CheckCircle, XCircle, Clock, RefreshCw } from "lucide-react";
import { useCompanyStore } from "@/stores/company-store";
import type { PcApproval } from "@/types/paperclip";

const STATUS_ICON: Record<string, React.ReactNode> = {
  pending: <Clock className="h-4 w-4 text-yellow-400" />,
  approved: <CheckCircle className="h-4 w-4 text-green-400" />,
  rejected: <XCircle className="h-4 w-4 text-red-400" />,
  revision_requested: <RefreshCw className="h-4 w-4 text-blue-400" />,
};

const STATUS_CLASSES: Record<string, string> = {
  pending: "bg-yellow-500/15 text-yellow-400",
  approved: "bg-green-500/15 text-green-400",
  rejected: "bg-red-500/15 text-red-400",
  revision_requested: "bg-blue-500/15 text-blue-400",
};

export default function ApprovalsPage() {
  const { activeCompanyId, companies } = useCompanyStore();
  const [approvals, setApprovals] = useState<PcApproval[]>([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("pending");

  const activeCompany = companies.find((c) => c.id === activeCompanyId);

  const loadApprovals = () => {
    if (!activeCompanyId) return;
    setLoading(true);
    const qs = filter !== "all" ? `?status=${filter}` : "";
    fetch(`/api/paperclip/companies/${activeCompanyId}/approvals${qs}`)
      .then((r) => r.json())
      .then((data) => {
        setApprovals(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  useEffect(() => {
    const timer = window.setTimeout(() => {
      loadApprovals();
    }, 0);
    return () => {
      window.clearTimeout(timer);
    };
  }, [activeCompanyId, filter]);

  const approve = async (id: string) => {
    await fetch(`/api/paperclip/approvals/${id}/approve`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: "{}",
    });
    loadApprovals();
  };

  const reject = async (id: string) => {
    await fetch(`/api/paperclip/approvals/${id}/reject`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ note: "Rejected via Studio" }),
    });
    loadApprovals();
  };

  return (
    <div className="p-6">
      <div className="mb-6 flex items-center justify-between flex-wrap gap-3">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Approvals</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {activeCompany?.name} · {approvals.length} approval
            {approvals.length !== 1 ? "s" : ""}
          </p>
        </div>
        <div className="flex gap-1.5">
          {["pending", "all", "approved", "rejected"].map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`rounded px-3 py-1 text-xs font-medium transition-colors ${
                filter === s
                  ? "bg-primary/15 text-primary"
                  : "border border-border text-muted-foreground hover:bg-surface-2 hover:text-foreground"
              }`}
            >
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {loading && (
        <div className="flex items-center justify-center h-40 text-muted-foreground text-sm">
          Loading approvals…
        </div>
      )}

      {!loading && (
        <div className="space-y-3">
          {approvals.map((approval) => (
            <div
              key={approval.id}
              className="rounded-xl border border-border bg-surface-1 p-4"
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5">{STATUS_ICON[approval.status]}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-medium text-sm text-foreground">
                      {approval.type.replace(/_/g, " ")}
                    </span>
                    <span
                      className={`rounded px-2 py-0.5 text-xs font-medium ${STATUS_CLASSES[approval.status] ?? ""}`}
                    >
                      {approval.status}
                    </span>
                  </div>
                  {approval.payload &&
                    Object.keys(approval.payload).length > 0 && (
                      <p className="mt-1 text-xs text-muted-foreground">
                        {JSON.stringify(approval.payload).slice(0, 100)}…
                      </p>
                    )}
                  <p className="mt-1 text-xs text-muted-foreground/60">
                    {new Date(approval.createdAt).toLocaleString()}
                  </p>
                </div>
                {approval.status === "pending" && (
                  <div className="flex gap-2 shrink-0">
                    <button
                      onClick={() => approve(approval.id)}
                      className="rounded-lg bg-green-600/20 border border-green-600/30 px-3 py-1 text-xs font-medium text-green-400 hover:bg-green-600/30 transition-colors"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => reject(approval.id)}
                      className="rounded-lg bg-red-600/20 border border-red-600/30 px-3 py-1 text-xs font-medium text-red-400 hover:bg-red-600/30 transition-colors"
                    >
                      Reject
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
          {approvals.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
              <CheckCircle className="h-10 w-10 mb-3 opacity-30" />
              <p className="text-sm">No approvals found</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
