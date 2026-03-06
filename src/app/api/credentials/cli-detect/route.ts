import { NextResponse } from "next/server";
import { withErrorHandler } from "@/lib/api/error-handler";

// eslint-disable-next-line @typescript-eslint/no-require-imports
const { detectCliCredentials } = require("../../../../../server/cli-detector");

export const runtime = "nodejs";

async function get_handler() {
  try {
    const detected = detectCliCredentials();
    return NextResponse.json({ detected });
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Failed to detect CLI credentials.";
    console.error(message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export const GET = withErrorHandler(get_handler);