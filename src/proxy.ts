import { NextRequest, NextResponse } from "next/server";

const MOBILE_UA =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile/i;

const SESSION_COOKIE = "studio_session";
const LEGACY_COOKIE = "studio_access";
const PUBLIC_PAGES = new Set(["/login", "/setup"]);

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Auth check: redirect unauthenticated users to /login
  if (!PUBLIC_PAGES.has(pathname)) {
    const hasSession = request.cookies.get(SESSION_COOKIE)?.value;
    const hasLegacy = request.cookies.get(LEGACY_COOKIE)?.value;
    if (!hasSession && !hasLegacy) {
      const loginUrl = request.nextUrl.clone();
      loginUrl.pathname = "/login";
      return NextResponse.redirect(loginUrl);
    }
  }

  // Layout detection (mobile vs desktop)
  const { searchParams } = request.nextUrl;
  const override = searchParams.get("layout");
  let layout: string;

  if (override === "mobile" || override === "desktop") {
    layout = override;
  } else {
    const ua = request.headers.get("user-agent") ?? "";
    layout = MOBILE_UA.test(ua) ? "mobile" : "desktop";
  }

  const headers = new Headers(request.headers);
  headers.set("x-oc-layout", layout);

  return NextResponse.next({ request: { headers } });
}

export const config = {
  // Run on all page routes, skip static assets and API
  matcher: ["/((?!_next/static|_next/image|favicon\\.ico|api/).*)"],
};
