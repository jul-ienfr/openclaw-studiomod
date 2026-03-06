import { headers } from "next/headers";

/** Server-side: check if the current request should use mobile layout */
export async function isMobileLayout(): Promise<boolean> {
  const h = await headers();
  return h.get("x-oc-layout") === "mobile";
}
