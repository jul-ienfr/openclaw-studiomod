import { memo, useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { CornerUpLeft, Forward } from "lucide-react";

/* ── Message action bar (reply / forward) ────────────────────────── */

export type MessageActionBarProps = {
  onReply?: () => void;
  onForward?: (targetAgentId: string) => void;
  otherAgents?: { agentId: string; name: string }[];
};

export const MessageActionBar = memo(function MessageActionBar({
  onReply,
  onForward,
  otherAgents = [],
}: MessageActionBarProps) {
  const tc = useTranslations("chat");
  const [forwardOpen, setForwardOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!forwardOpen) return;
    const handler = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setForwardOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [forwardOpen]);

  if (!onReply && !onForward) return null;

  return (
    <div className="absolute -top-3 right-2 z-10 flex items-center gap-0.5 rounded-md border border-border/60 bg-card px-1 py-0.5 opacity-0 shadow-sm transition-opacity group-hover/msg:opacity-100">
      {onReply ? (
        <button
          type="button"
          className="inline-flex h-6 w-6 items-center justify-center rounded-sm text-muted-foreground transition hover:bg-surface-2 hover:text-foreground"
          aria-label={tc("reply")}
          title={tc("reply")}
          onClick={onReply}
        >
          <CornerUpLeft className="h-3.5 w-3.5" />
        </button>
      ) : null}
      {onForward && otherAgents.length > 0 ? (
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            className="inline-flex h-6 w-6 items-center justify-center rounded-sm text-muted-foreground transition hover:bg-surface-2 hover:text-foreground"
            aria-label={tc("forwardTo")}
            title={tc("forwardTo")}
            onClick={() => setForwardOpen((v) => !v)}
          >
            <Forward className="h-3.5 w-3.5" />
          </button>
          {forwardOpen ? (
            <div className="absolute right-0 top-full z-20 mt-1 max-h-48 min-w-[140px] overflow-y-auto rounded-md border border-border bg-card py-1 shadow-md">
              {otherAgents.map((a) => (
                <button
                  key={a.agentId}
                  type="button"
                  className="flex w-full items-center gap-2 px-3 py-1.5 text-left text-[11px] text-foreground transition hover:bg-surface-2"
                  onClick={() => {
                    onForward(a.agentId);
                    setForwardOpen(false);
                  }}
                >
                  {a.name}
                </button>
              ))}
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
});
