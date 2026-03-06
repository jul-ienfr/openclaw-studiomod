import { NextResponse } from "next/server";
import { startTunnel, stopTunnel, getTunnelStatus } from "@/lib/tunnel/manager";
import { withErrorHandler } from "@/lib/api/error-handler";

export const runtime = "nodejs";

/** GET — current tunnel status */
async function get_handler() {
  try {
    return NextResponse.json(getTunnelStatus());
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ active: false, error: msg }, { status: 500 });
  }
}

/** POST — start the tunnel */
async function post_handler() {
  try {
    const status = await startTunnel();
    return NextResponse.json(status);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ active: false, error: msg }, { status: 500 });
  }
}

/** DELETE — stop the tunnel */
async function delete_handler() {
  try {
    return NextResponse.json(stopTunnel());
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ active: false, error: msg }, { status: 500 });
  }
}

export const GET = withErrorHandler(get_handler);
export const POST = withErrorHandler(post_handler);
export const DELETE = withErrorHandler(delete_handler);