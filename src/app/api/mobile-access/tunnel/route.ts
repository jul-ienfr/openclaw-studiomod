import { NextResponse } from "next/server";
import { startTunnel, stopTunnel, getTunnelStatus } from "@/lib/tunnel/manager";

export const runtime = "nodejs";

/** GET — current tunnel status */
export async function GET() {
  try {
    return NextResponse.json(getTunnelStatus());
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ active: false, error: msg }, { status: 500 });
  }
}

/** POST — start the tunnel */
export async function POST() {
  try {
    const status = await startTunnel();
    return NextResponse.json(status);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ active: false, error: msg }, { status: 500 });
  }
}

/** DELETE — stop the tunnel */
export async function DELETE() {
  try {
    return NextResponse.json(stopTunnel());
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ active: false, error: msg }, { status: 500 });
  }
}
