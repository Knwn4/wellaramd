import { NextRequest, NextResponse } from "next/server";
import { isTrackedPath } from "@/lib/tracked-paths";

/**
 * Meta Conversions API relay for the storefront Lead. Copy to
 * app/api/capi/route.ts.
 *
 * The event name is fixed here, so the browser cannot choose another, and there
 * is no custom_data at all: no value, currency, content_name, content_category
 * or content_ids. The page URL is rebuilt from an allowlisted path with no query
 * string. Inert until both env vars are set:
 *   NEXT_PUBLIC_META_PIXEL_ID   (also used by the browser pixel)
 *   META_CAPI_TOKEN             (server only)
 */

const PIXEL = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const TOKEN = process.env.META_CAPI_TOKEN;
const GRAPH = "https://graph.facebook.com/v21.0";

const str = (v: unknown) => (typeof v === "string" && v.length > 0 ? v : undefined);

export async function POST(req: NextRequest) {
  if (!PIXEL || !TOKEN) return NextResponse.json({ ok: false, skipped: true });

  const body = (await req.json().catch(() => ({}))) as Record<string, unknown>;
  const path = str(body.path);
  if (!path || !isTrackedPath(path)) return NextResponse.json({ ok: false, skipped: true });

  const data = [
    {
      event_name: "Lead",
      event_time: Math.floor(Date.now() / 1000),
      event_id: str(body.eventId),
      action_source: "website",
      event_source_url: req.nextUrl.origin + path,
      user_data: {
        client_ip_address: req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || undefined,
        client_user_agent: req.headers.get("user-agent") || undefined,
        fbp: str(body.fbp),
        fbc: str(body.fbc),
      },
    },
  ];

  try {
    const res = await fetch(`${GRAPH}/${PIXEL}/events?access_token=${TOKEN}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data }),
    });
    return NextResponse.json({ ok: res.ok }, { status: res.ok ? 200 : 502 });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
