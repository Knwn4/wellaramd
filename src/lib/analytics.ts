"use client";

/**
 * Unified conversion tracking. One call fans out to:
 *  - Meta Pixel (browser)          → window.fbq
 *  - GA4 (browser)                 → window.gtag
 *  - Meta Conversions API (server) → /api/capi, deduped with the pixel via eventId
 *
 * No PHI/health data is ever passed here — only marketing events (page views,
 * "Get started" clicks). The actual intake happens off-site on app.mydose.ai.
 */

type Params = Record<string, unknown>;

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

function uuid(): string {
  try {
    return crypto.randomUUID();
  } catch {
    return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  }
}

function readCookie(name: string): string | undefined {
  const m = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return m ? decodeURIComponent(m[2]) : undefined;
}

export function track(event: string, params: Params = {}): void {
  if (typeof window === "undefined") return;
  const eventId = uuid();

  // Meta Pixel (browser)
  window.fbq?.("track", event, params, { eventID: eventId });

  // GA4 (browser)
  window.gtag?.("event", event, params);

  // Meta Conversions API (server) — same eventId lets Meta dedupe against the pixel.
  try {
    const body = JSON.stringify({
      event,
      eventId,
      url: window.location.href,
      params,
      fbp: readCookie("_fbp"),
      fbc: readCookie("_fbc"),
    });
    // keepalive: survives the navigation that an outbound click triggers.
    fetch("/api/capi", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body,
      keepalive: true,
    }).catch(() => {});
  } catch {
    /* never block navigation on a tracking failure */
  }
}
