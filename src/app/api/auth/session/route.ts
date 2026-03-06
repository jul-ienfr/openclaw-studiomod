import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

const COOKIE_NAME = "oc-studio-token";
const MAX_AGE = 30 * 24 * 60 * 60; // 30 days

export async function POST(req: NextRequest) {
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

export async function DELETE() {
  const response = NextResponse.json({ ok: true });
  response.cookies.delete(COOKIE_NAME);
  return response;
}

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  return NextResponse.json({ authenticated: !!token });
}
