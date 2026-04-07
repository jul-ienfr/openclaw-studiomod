import { useEffect, useRef } from "react";

export function BrowserViewPanel({ onClose }: { onClose: () => void }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const clipRef = useRef<HTMLTextAreaElement>(null);

  const vncSrc =
    typeof window !== "undefined"
      ? `/browser-view/vnc_lite.html?host=${window.location.hostname}&port=6080&path=websockify&scale=true`
      : "/browser-view/vnc_lite.html?port=6080&path=websockify&scale=true";

  // Auto-copy remote clipboard to local when user Ctrl+C in remote desktop
  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (e.data?.type === "vnc-clipboard" && typeof e.data.text === "string") {
        const text = e.data.text;
        if (clipRef.current) {
          clipRef.current.value = text;
          clipRef.current.focus();
          clipRef.current.select();
          document.execCommand("copy");
          iframeRef.current?.focus();
        }
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  // Parent-level Ctrl+V: if focus is on parent (not inside iframe),
  // capture paste and forward to iframe via postMessage
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (!(e.ctrlKey || e.metaKey) || e.key !== "v" || e.shiftKey) return;
      // Only intercept if focus is NOT inside the iframe
      if (
        document.activeElement === iframeRef.current ||
        iframeRef.current?.contains(document.activeElement)
      )
        return;
      e.preventDefault();
      e.stopPropagation();
      // Focus hidden textarea so browser pastes into it
      if (clipRef.current) {
        clipRef.current.value = "";
        clipRef.current.focus();
      }
    };
    const onPaste = (e: ClipboardEvent) => {
      // Only handle pastes on our hidden textarea
      if (e.target !== clipRef.current) return;
      const text = e.clipboardData?.getData("text");
      if (text && iframeRef.current?.contentWindow) {
        iframeRef.current.contentWindow.postMessage(
          { type: "vnc-paste", text },
          "*",
        );
      }
      // Refocus iframe
      setTimeout(() => iframeRef.current?.focus(), 50);
    };
    window.addEventListener("keydown", onKeyDown, true);
    window.addEventListener("paste", onPaste, true);
    return () => {
      window.removeEventListener("keydown", onKeyDown, true);
      window.removeEventListener("paste", onPaste, true);
    };
  }, []);

  return (
    <div className="ui-panel ui-depth-workspace flex min-h-0 flex-1 flex-col overflow-hidden">
      <div className="flex items-center gap-3 border-b border-border/60 px-4 py-2">
        <button
          type="button"
          className="ui-btn-secondary px-3 py-1.5 font-mono text-[10px] font-semibold tracking-[0.06em]"
          onClick={onClose}
        >
          Back to chat
        </button>
        <span className="text-sm font-semibold text-foreground">
          Browser View
        </span>
      </div>
      {/* Hidden textarea for HTTP clipboard fallback (execCommand) */}
      <textarea
        ref={clipRef}
        className="sr-only"
        tabIndex={-1}
        aria-hidden="true"
      />
      <div className="min-h-0 flex-1">
        <iframe
          ref={iframeRef}
          src={vncSrc}
          className="h-full w-full border-none"
          title="Browser View"
          allow="clipboard-read; clipboard-write"
        />
      </div>
    </div>
  );
}
