"use client";

/**
 * The one conversion a storefront sends: someone clicked through to a MyDose
 * booking link. It goes to the Meta pixel, GA4 and the /api/capi relay under one
 * event id so Meta dedupes it.
 *
 * No parameters, ever. A product name, category, price or content id here is
 * health information under Meta's Business Tools Terms, and it is the pattern
 * the Jul 2026 FTC complaint against Hims is built on.
 *
 * Copy to lib/analytics.ts.
 */

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

function readCookie(name: string): string | undefined {
  const m = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return m ? decodeURIComponent(m[2]) : undefined;
}

function uuid(): string {
  try {
    return crypto.randomUUID();
  } catch {
    return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  }
}

export function trackLead(): void {
  if (typeof window === "undefined") return;
  const eventID = uuid();

  window.fbq?.("track", "Lead", {}, { eventID });
  window.gtag?.("event", "Lead");

  try {
    fetch("/api/capi", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        eventId: eventID,
        path: window.location.pathname,
        fbp: readCookie("_fbp"),
        fbc: readCookie("_fbc"),
      }),
      // keepalive: survives the navigation that an outbound click triggers.
      keepalive: true,
    }).catch(() => {});
  } catch {
    /* never block navigation on a tracking failure */
  }
}
