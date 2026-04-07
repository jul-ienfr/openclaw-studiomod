/**
 * Transparent proxy: /api/paperclip/* → http://127.0.0.1:3100/api/*
 *
 * This catch-all handles all Paperclip API calls while native routes
 * are being built. Once a specific route module exists (e.g.
 * /api/paperclip/companies/route.ts), Next.js will prefer it over this
 * catch-all.
 *
 * Paperclip runs in local_trusted mode — no auth required upstream.
 */

import { NextRequest, NextResponse } from "next/server";

const PC_BASE = "http://127.0.0.1:3100";

async function proxyToPaperclip(
  req: NextRequest,
  params: { path: string[] },
): Promise<NextResponse> {
  const path = params.path.join("/");
  const search = req.nextUrl.search;
  const url = `${PC_BASE}/api/${path}${search}`;

  const headers: Record<string, string> = {
    accept: req.headers.get("accept") ?? "*/*",
  };
  const ct = req.headers.get("content-type");
  if (ct) headers["content-type"] = ct;

  let body: BodyInit | undefined;
  if (req.method !== "GET" && req.method !== "HEAD") {
    body = await req.arrayBuffer();
  }

  try {
    const upstream = await fetch(url, {
      method: req.method,
      headers,
      body,
    });
    const responseHeaders = new Headers();
    upstream.headers.forEach((v, k) => {
      if (!["content-encoding", "transfer-encoding"].includes(k)) {
        responseHeaders.set(k, v);
      }
    });
    return new NextResponse(upstream.body, {
      status: upstream.status,
      headers: responseHeaders,
    });
  } catch {
    return NextResponse.json(
      { error: "Paperclip unavailable" },
      { status: 502 },
    );
  }
}

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ path: string[] }> },
) {
  return proxyToPaperclip(req, await params);
}
export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ path: string[] }> },
) {
  return proxyToPaperclip(req, await params);
}
export async function PATCH(
  req: NextRequest,
  { params }: { params: Promise<{ path: string[] }> },
) {
  return proxyToPaperclip(req, await params);
}
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ path: string[] }> },
) {
  return proxyToPaperclip(req, await params);
}
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ path: string[] }> },
) {
  return proxyToPaperclip(req, await params);
}
