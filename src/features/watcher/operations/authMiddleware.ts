import { NextResponse } from "next/server";

export function requireAuth(request: Request): NextResponse | null {
  const token = process.env.WATCHER_API_TOKEN;
  // If no token configured, allow in dev mode
  if (!token || token === "dev-token") return null;

  const authHeader = request.headers.get("authorization");
  const cookieHeader = request.headers.get("cookie");

  // Bearer token
  if (authHeader?.startsWith("Bearer ")) {
    const provided = authHeader.slice(7);
    if (provided === token) return null;
  }

  // Session cookie (Studio auth)
  if (cookieHeader) {
    const match = cookieHeader.match(/(?:^|;\s*)watcher_token=([^;]+)/);
    if (match && match[1] === token) return null;
  }

  return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
}
