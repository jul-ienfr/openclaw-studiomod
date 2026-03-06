import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { withErrorHandler } from "@/lib/api/error-handler";

export const dynamic = "force-dynamic";

const COOKIE_NAME = "oc-studio-token";
const MAX_AGE = 30 * 24 * 60 * 60; // 30 days

async function post_handler(req: NextRequest) {
  try {
    const { token } = (await req.json()) as { token: string };
    if (!token) {
      return NextResponse.json({ error: "Token required" }, { status: 400 });
    }

    const response = NextResponse.json({ ok: true });
    response.cookies.set(COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: MAX_AGE,
    });
    return response;
  } catch {
    return NextResponse.json(
      { error: "Failed to set session" },
      { status: 500 },
    );
  }
}

async function delete_handler() {
  const response = NextResponse.json({ ok: true });
  response.cookies.delete(COOKIE_NAME);
  return response;
}

async function get_handler() {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  return NextResponse.json({ authenticated: !!token });
}

export const GET = withErrorHandler(get_handler);
export const POST = withErrorHandler(post_handler);
export const DELETE = withErrorHandler(delete_handler);