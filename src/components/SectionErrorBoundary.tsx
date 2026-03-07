"use client";

import { Component, type ReactNode } from "react";
import { AlertTriangle, RotateCcw } from "lucide-react";
import { toast } from "sonner";

type SectionErrorBoundaryProps = {
  children: ReactNode;
  sectionName: string;
};

type SectionErrorBoundaryState = {
  hasError: boolean;
  error: Error | null;
};

/**
 * Section-level error boundary that isolates failures to a single UI section.
 * Other sections continue rendering normally even if one section crashes.
 */
export class SectionErrorBoundary extends Component<
  SectionErrorBoundaryProps,
  SectionErrorBoundaryState
> {
  constructor(props: SectionErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): SectionErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    const section = this.props.sectionName;

    // Log to console with section context
    console.error(
      `[SectionErrorBoundary] Error in section "${section}":`,
      error,
      errorInfo.componentStack,
    );

    // Push error notification via sonner
    toast.error(`Erreur dans la section "${section}"`, {
      description: error.message,
    });
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-[200px] flex-col items-center justify-center gap-4 p-6">
          <div className="ui-card flex max-w-sm flex-col items-center gap-3 p-6 text-center">
            <AlertTriangle
              className="h-8 w-8 text-destructive"
              aria-hidden="true"
            />
            <div>
              <p className="text-sm font-semibold text-foreground">
                Une erreur est survenue dans cette section
              </p>
              {this.state.error ? (
                <p className="mt-1 max-w-xs text-xs text-muted-foreground">
                  {this.state.error.message}
                </p>
              ) : null}
            </div>
            <button
              type="button"
              className="ui-btn-ghost inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-medium"
              onClick={this.handleRetry}
            >
              <RotateCcw className="h-3 w-3" aria-hidden="true" />
              Réessayer
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
