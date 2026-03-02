"use client";

import { useMemo } from "react";
import { MonitorPlay } from "lucide-react";
import type { CanvasLayout } from "../types";
import { renderLayoutToHtml } from "../canvasRenderer";

type CanvasPreviewProps = {
  layout?: CanvasLayout | null;
};

export const CanvasPreview = ({ layout = null }: CanvasPreviewProps) => {
  const renderedHtml = useMemo(
    () => (layout ? renderLayoutToHtml(layout.elements) : ""),
    [layout],
  );

  return (
    <div className="flex min-h-0 flex-1 flex-col" data-testid="canvas-preview">
      <div className="flex items-center gap-2 border-b border-border px-5 py-3">
        <MonitorPlay className="h-4 w-4 text-primary" aria-hidden="true" />
        <h2 className="text-sm font-semibold text-foreground">Canvas</h2>
        <span className="rounded-full bg-amber-500/10 px-2 py-0.5 text-[10px] font-semibold text-amber-600">
          Experimental
        </span>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-4">
        <p className="mb-3 text-xs text-muted-foreground">Agent canvas layout preview</p>

        {layout ? (
          <>
            <div
              className="space-y-3"
              dangerouslySetInnerHTML={{ __html: renderedHtml }}
            />
            <div className="mt-3 text-[10px] text-muted-foreground">
              Agent: {layout.agentId} &middot; Last update:{" "}
              {new Date(layout.timestamp).toLocaleTimeString()}
            </div>
          </>
        ) : (
          <p className="py-8 text-center text-xs text-muted-foreground">
            No layout available
          </p>
        )}
      </div>
    </div>
  );
};
