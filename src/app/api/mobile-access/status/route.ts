import { NextResponse } from "next/server";
import { withErrorHandler } from "@/lib/api/error-handler";

export const runtime = "nodejs";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

async function options_handler() {
  return new NextResponse(null, { status: 204, headers: corsHeaders });
}

async function get_handler() {
  return NextResponse.json(
    {
      status: "ok",
      service: "openclaw-studio",
      timestamp: new Date().toISOString(),
    },
    { headers: corsHeaders },
  );
}

export const GET = withErrorHandler(get_handler);
export const OPTIONS = withErrorHandler(options_handler);