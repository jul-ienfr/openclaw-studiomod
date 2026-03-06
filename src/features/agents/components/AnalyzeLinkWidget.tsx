"use client";

import { useCallback, useState, type FormEvent } from "react";
import { Link2, Loader2, Send } from "lucide-react";
import { toast } from "sonner";

type AnalyzeLinkWidgetProps = {
  agentId: string;
  onSend?: (message: string) => void | Promise<void>;
};

const isValidUrl = (value: string): boolean => {
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
};

export const AnalyzeLinkWidget = ({
  agentId,
  onSend,
}: AnalyzeLinkWidgetProps) => {
  const [url, setUrl] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();
      const trimmed = url.trim();
      if (!trimmed || !onSend) return;

      if (!isValidUrl(trimmed)) {
        toast.error("URL invalide", {
          description:
            "Entrez une URL valide commençant par http:// ou https://",
        });
        return;
      }

      const message = `Analyse ce lien en profondeur : ${trimmed}`;

      setSending(true);
      try {
        await Promise.resolve(onSend(message));
        toast.success("Analyse lancée", {
          description: trimmed,
        });
        setUrl("");
      } catch {
        toast.error("Erreur d'envoi", {
          description: "Impossible d'envoyer le message à l'agent.",
        });
      } finally {
        setSending(false);
      }
    },
    [url, onSend],
  );

  if (agentId !== "veille-strategique") return null;

  return (
    <div className="rounded-xl border border-primary/20 bg-primary/5 p-3">
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <div className="flex items-center gap-1.5 text-primary">
          <Link2 className="h-4 w-4 flex-none" />
          <span className="hidden text-xs font-medium sm:inline">
            Analyser un lien
          </span>
        </div>

        <input
          type="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="https://exemple.com/article..."
          disabled={sending}
          className="min-w-0 flex-1 rounded-lg border border-border bg-card px-3 py-1.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/30 disabled:opacity-50"
        />

        <button
          type="submit"
          disabled={sending || !url.trim()}
          className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {sending ? (
            <Loader2 className="h-3.5 w-3.5 animate-spin" />
          ) : (
            <Send className="h-3.5 w-3.5" />
          )}
          <span className="hidden sm:inline">Analyser</span>
        </button>
      </form>
    </div>
  );
};
