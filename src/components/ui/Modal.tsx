"use client";
import { useEffect, useRef, useCallback, type ReactNode } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

type ModalSize = "sm" | "md" | "lg";
const SIZE_CLASSES: Record<ModalSize, string> = {
  sm: "max-w-sm",
  md: "max-w-lg",
  lg: "max-w-2xl",
};

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  size?: ModalSize;
  children: ReactNode;
}

export function Modal({ open, onClose, title, size = "md", children }: ModalProps) {
  const ref = useRef<HTMLDialogElement>(null);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    else if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onKeyDown={handleKeyDown}
      aria-modal="true"
      aria-label={title}
      className={cn(
        "w-full rounded-xl border border-border bg-card p-0 text-foreground",
        "shadow-[var(--shadow-xl)]",
        "backdrop:bg-black/50 backdrop:backdrop-blur-sm",
        "animate-[scaleIn_var(--transition-base)_ease-out]",
        SIZE_CLASSES[size],
      )}
    >
      {title && (
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <h2 className="text-sm font-semibold">{title}</h2>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="rounded p-1 text-muted-foreground transition-colors duration-[var(--transition-fast)] hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      )}
      <div className="p-4">{children}</div>
    </dialog>
  );
}

export default Modal;
