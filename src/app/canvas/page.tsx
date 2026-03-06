"use client";

import { useState } from "react";
import { Workflow, MonitorPlay } from "lucide-react";
import { CanvasPreview } from "@/features/canvas/components/CanvasPreview";
import { WorkflowCanvas } from "@/features/canvas/components/WorkflowCanvas";

type TabId = "workflows" | "canvas";

export default function CanvasPage() {
  const [tab, setTab] = useState<TabId>("workflows");

  return (
    <div className="flex h-screen flex-col overflow-hidden">
      {/* Header */}
      <header className="flex shrink-0 items-center gap-3 border-b border-border px-6 py-4">
        <Workflow
          className="h-5 w-5 text-muted-foreground"
          strokeWidth={1.75}
        />
        <div className="mr-auto">
          <h1 className="font-display text-2xl tracking-wide leading-none">
            Workflows
          </h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            Chaines d&apos;automatisation du plan Zero Human
          </p>
        </div>

        {/* View toggle */}
        <div className="flex items-center gap-1 rounded-lg border border-border bg-card p-1">
          <button
            type="button"
            onClick={() => setTab("workflows")}
            className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
              tab === "workflows"
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Workflow className="h-3.5 w-3.5" />
            Workflows
          </button>
          <button
            type="button"
            onClick={() => setTab("canvas")}
            className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
              tab === "canvas"
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <MonitorPlay className="h-3.5 w-3.5" />
            Canvas brut
          </button>
        </div>
      </header>

      {/* Content */}
      {tab === "workflows" ? <WorkflowCanvas /> : <CanvasPreview />}
    </div>
  );
}
