import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const MessageSchema = z
  .object({
    type: z.string().max(64),
    id: z.string().max(128).optional(),
    method: z.string().max(64).optional(),
    params: z.record(z.string(), z.unknown()).optional(),
    payload: z.record(z.string(), z.unknown()).optional(),
  })
  .passthrough()
  .superRefine((val, ctx) => {
    const str = JSON.stringify(val);
    if (str.length > 1_000_000) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Message too large (max 1MB)",
      });
    }
  });

declare global {
  var __studioGatewayClient:
    | {
        send: (message: unknown) => boolean;
        isConnected: boolean;
        getStatus: () => { connected: boolean; url: string };
      }
    | undefined;
}

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET() {
  const client = globalThis.__studioGatewayClient;
  if (!client) {
    return NextResponse.json(
      { connected: false, error: "client not initialized" },
      { status: 503, headers: { "Retry-After": "1" } },
    );
  }
  return NextResponse.json(client.getStatus());
}

export async function POST(req: NextRequest) {
  const client = globalThis.__studioGatewayClient;

  if (!client) {
    return NextResponse.json(
      { ok: false, error: "Gateway client not initialized" },
      { status: 503, headers: { "Retry-After": "1" } },
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON" },
      { status: 400 },
    );
  }

  // Ignore keepalive pings — no need to forward to gateway
  if (
    body &&
    typeof body === "object" &&
    (body as { type?: string }).type === "ping"
  ) {
    return NextResponse.json({ ok: true });
  }

  // Validate message structure
  const parsed = MessageSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: parsed.error.issues[0]?.message ?? "Invalid message",
      },
      { status: 400 },
    );
  }

  if (!client.isConnected) {
    return NextResponse.json(
      { ok: false, error: "Gateway not connected" },
      { status: 503, headers: { "Retry-After": "1" } },
    );
  }

  const sent = client.send(body);
  if (!sent) {
    return NextResponse.json(
      { ok: false, error: "Failed to send to gateway" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
