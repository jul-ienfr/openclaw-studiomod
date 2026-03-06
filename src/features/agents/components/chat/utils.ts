/**
 * Formats an approval expiry timestamp as a human-readable date string.
 * Note: chatUtils.ts has a different formatApprovalExpiry that returns relative time.
 * This version formats the absolute date/time.
 */
export const formatApprovalExpiryDate = (timestampMs: number): string => {
  if (!Number.isFinite(timestampMs) || timestampMs <= 0) return "Unknown";
  return new Intl.DateTimeFormat(undefined, {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(timestampMs));
};
