import { NextRequest, NextResponse } from "next/server";

const MOBILE_UA =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile/i;

export function middleware(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  // Explicit override via ?layout=mobile|desktop
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
