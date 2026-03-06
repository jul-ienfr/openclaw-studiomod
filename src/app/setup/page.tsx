"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SetupPage() {
  const router = useRouter();
  const [displayName, setDisplayName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [checking, setChecking] = useState(true);

  // Check if setup is required; if not, redirect to login
  useEffect(() => {
    fetch("/api/auth/setup", { credentials: "include" })
      .then((r) => r.json())
      .then((data: { setup_required?: boolean }) => {
        if (!data.setup_required) {
          router.replace("/login");
        } else {
          setChecking(false);
        }
      })
      .catch(() => setChecking(false));
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/auth/setup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          username,
          password,
          displayName: displayName.trim() || undefined,
        }),
      });
      const data = await res.json().catch(() => ({})) as { error?: string; details?: Array<{ message: string }> };
      if (!res.ok) {
        if (data.details && Array.isArray(data.details)) {
          setError(data.details.map((d) => d.message).join(". "));
        } else {
          setError(data.error ?? "Setup failed");
        }
        return;
      }
      router.replace("/dashboard");
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (checking) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="font-display text-4xl tracking-wide text-foreground">
            OpenClaw Studio
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            First-run setup — create your admin account
          </p>
        </div>

        {/* Form card */}
        <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <label
                htmlFor="display-name"
                className="block text-sm font-medium text-foreground"
              >
                Display name{" "}
                <span className="text-muted-foreground font-normal">(optional)</span>
              </label>
              <input
                id="display-name"
                type="text"
                autoComplete="name"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                disabled={loading}
                className="block w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50"
                placeholder="Julien"
              />
            </div>

            <div className="space-y-1">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-foreground"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                autoComplete="username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                disabled={loading}
                className="block w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50"
                placeholder="admin"
              />
              <p className="text-xs text-muted-foreground">
                Min. 3 characters, letters/numbers/underscores only
              </p>
            </div>

            <div className="space-y-1">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-foreground"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                autoComplete="new-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
                className="block w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50"
                placeholder="••••••••"
              />
              <p className="text-xs text-muted-foreground">Min. 8 characters</p>
            </div>

            <div className="space-y-1">
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium text-foreground"
              >
                Confirm password
              </label>
              <input
                id="confirm-password"
                type="password"
                autoComplete="new-password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                disabled={loading}
                className="block w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50"
                placeholder="••••••••"
              />
            </div>

            {error && (
              <div className="rounded-md border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm text-destructive">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50 transition-colors"
            >
              {loading && (
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
              )}
              {loading ? "Creating account..." : "Create admin account"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
