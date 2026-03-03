"use client";

import { Component, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  error: Error | null;
}

export class WatcherErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("[WatcherErrorBoundary]", error, info.componentStack);
  }

  render() {
    if (this.state.error) {
      return (
        <div className="flex min-h-[200px] flex-col items-center justify-center gap-4 rounded-lg border border-red-500/30 bg-red-500/10 p-8 text-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-500/20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-red-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-red-400">Une erreur est survenue</p>
            <p className="mt-1 max-w-xs text-xs text-muted-foreground">
              {this.state.error.message || "Erreur inattendue dans le Watcher"}
            </p>
          </div>
          <button
            type="button"
            className="rounded border border-red-500/30 bg-red-500/10 px-4 py-2 text-xs font-medium text-red-400 transition-colors hover:bg-red-500/20"
            onClick={() => window.location.reload()}
          >
            Réessayer
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
