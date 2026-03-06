import { NextResponse } from "next/server";
import { withErrorHandler } from "@/lib/api/error-handler";

export const runtime = "nodejs";

// eslint-disable-next-line @typescript-eslint/no-require-imports
const discovery = require("../../../../../server/tunnel-discovery") as {
  getConfig: () => {
    gistId?: string;
    githubPat?: string;
    redirectUrl?: string;
  };
};

/** GET — return the discovery redirect URL (if configured) */
async function get_handler() {
  try {
    const config = discovery.getConfig();
    if (!config.gistId || !config.redirectUrl) {
      return NextResponse.json({ configured: false });
    }
    return NextResponse.json({
      configured: true,
      redirectUrl: config.redirectUrl,
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

export const GET = withErrorHandler(get_handler);