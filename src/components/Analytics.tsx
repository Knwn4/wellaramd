"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
import { trackLead } from "@/lib/analytics";
import { isBookingLink, isTrackedPath } from "@/lib/tracked-paths";

const PIXEL = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const GA = process.env.NEXT_PUBLIC_GA_ID;

/**
 * Site-wide tracking, rendered once in the root layout. Copy to
 * components/Analytics.tsx.
 *
 * Vercel Analytics is first party and runs on every page. The Meta pixel and GA4
 * load only when their env ids are set, only once the visitor reaches a tracked
 * path, and never for a browser sending Global Privacy Control (the privacy
 * policy promises that). Once loaded they stay loaded across client-side route
 * changes, so nothing fires on its own: page views and the Lead are sent from
 * here, and only while the current path is tracked.
 */

function gpc(): boolean {
  return (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true;
}

function addScript(src: string) {
  const s = document.createElement("script");
  s.async = true;
  s.src = src;
  document.head.appendChild(s);
}

function loadMeta(id: string) {
  const w = window as unknown as Record<string, unknown>;
  if (w.fbq) return;
  // Meta's base code, without its PageView line.
  const n = function (...args: unknown[]) {
    if (n.callMethod) n.callMethod(...args);
    else n.queue.push(args);
  } as ((...args: unknown[]) => void) & {
    callMethod?: (...args: unknown[]) => void;
    queue: unknown[];
    push: unknown;
    loaded: boolean;
    version: string;
    disablePushState: boolean;
  };
  n.push = n;
  n.loaded = true;
  n.version = "2.0";
  n.queue = [];
  // Without this the pixel fires its own PageView, with the new URL, on every
  // client-side route change, including into untracked product pages.
  n.disablePushState = true;
  w.fbq = n;
  w._fbq = n;
  addScript("https://connect.facebook.net/en_US/fbevents.js");
  // Without this it sends button text and page metadata (titles, JSON-LD).
  n("set", "autoConfig", false, id);
  n("init", id);
}

function loadGa(id: string) {
  const w = window as unknown as { dataLayer?: unknown[]; gtag?: (...a: unknown[]) => void };
  if (w.gtag) return;
  w.dataLayer = w.dataLayer || [];
  w.gtag = function () {
    // gtag.js expects the arguments object itself, not an array.
    // eslint-disable-next-line prefer-rest-params
    w.dataLayer!.push(arguments);
  };
  addScript(`https://www.googletagmanager.com/gtag/js?id=${id}`);
  w.gtag("js", new Date());
  w.gtag("config", id, {
    send_page_view: false,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });
}

export default function Analytics() {
  const pathname = usePathname();

  useEffect(() => {
    if (!isTrackedPath(pathname) || gpc()) return;
    if (PIXEL) loadMeta(PIXEL);
    if (GA) loadGa(GA);
    window.fbq?.("track", "PageView");
    window.gtag?.("event", "page_view");
  }, [pathname]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.("a");
      if (!a || !isBookingLink(a.href)) return;
      // The listener reads the link's address and nothing else on it.
      if (isTrackedPath(window.location.pathname) && !gpc()) trackLead();
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return <VercelAnalytics />;
}
