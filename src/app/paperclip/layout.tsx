"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useCompanyStore } from "@/stores/company-store";
import type { PcCompany } from "@/types/paperclip";

const SUBNAV = [
  { href: "/paperclip/companies", label: "Companies" },
  { href: "/paperclip/projects", label: "Projects" },
  { href: "/paperclip/issues", label: "Issues" },
  { href: "/paperclip/agents", label: "Agents" },
  { href: "/paperclip/approvals", label: "Approvals" },
  { href: "/paperclip/goals", label: "Goals" },
  { href: "/paperclip/costs", label: "Costs" },
  { href: "/paperclip/activity", label: "Activity" },
] as const;

export default function PaperclipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { companies, activeCompanyId, setCompanies, setActiveCompany } =
    useCompanyStore();

  useEffect(() => {
    fetch("/api/paperclip/companies")
      .then((r) => r.json())
      .then((data: PcCompany[]) => {
        if (Array.isArray(data))
          setCompanies(data.filter((c) => c.status === "active"));
      })
      .catch(() => {});
  }, [setCompanies]);

  return (
    <div className="flex flex-col h-full">
      {/* Top bar */}
      <div className="flex items-center gap-4 border-b border-border/50 bg-surface-1 px-4 py-2 shrink-0">
        {/* Company selector */}
        <select
          className="rounded border border-border bg-surface-2 px-2 py-1 text-xs text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
          value={activeCompanyId ?? ""}
          onChange={(e) => setActiveCompany(e.target.value)}
        >
          {companies.length === 0 && (
            <option value="" disabled>
              Loading...
            </option>
          )}
          {companies.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>

        {/* Sub-navigation */}
        <nav className="flex gap-1">
          {SUBNAV.map(({ href, label }) => {
            const active = pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                key={href}
                href={href}
                className={`rounded px-3 py-1 text-xs font-medium transition-colors ${
                  active
                    ? "bg-primary/15 text-primary"
                    : "text-muted-foreground hover:bg-surface-2 hover:text-foreground"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto">{children}</div>
    </div>
  );
}
