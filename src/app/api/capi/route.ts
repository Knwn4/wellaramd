import { NextRequest, NextResponse } from "next/server";

/**
 * Meta Conversions API relay. Forwards a marketing event server-side so it's
 * resilient to ad-blockers/iOS, and dedupes against the browser pixel via the
 * shared `event_id`. Inert until both env vars are set:
 *   NEXT_PUBLIC_META_PIXEL_ID   (also used by the browser pixel)
 *   META_CAPI_TOKEN             (server-only Conversions API access token)
 */

const PIXEL = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const TOKEN = process.env.META_CAPI_TOKEN;
const GRAPH = "https://graph.facebook.com/v21.0";

export async function POST(req: NextRequest) {
  if (!PIXEL || !TOKEN) {
    // Not configured yet — accept silently so the client never errors.
    return NextResponse.json({ ok: false, skipped: true });
  }

  let payload: {
    event?: string;
    eventId?: string;
    url?: string;
    params?: Record<string, unknown>;
    fbp?: string;
    fbc?: string;
  };
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "bad json" }, { status: 400 });
  }

  const { event, eventId, url, params, fbp, fbc } = payload;
  if (!event) return NextResponse.json({ ok: false, error: "missing event" }, { status: 400 });

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || undefined;
  const ua = req.headers.get("user-agent") || undefined;

  const data = [
    {
      event_name: event,
      event_time: Math.floor(Date.now() / 1000),
      event_id: eventId,
      action_source: "website",
      event_source_url: url,
      user_data: {
        client_ip_address: ip,
        client_user_agent: ua,
        fbp: fbp || undefined,
        fbc: fbc || undefined,
      },
      custom_data: params || {},
    },
  ];

  try {
    const res = await fetch(`${GRAPH}/${PIXEL}/events?access_token=${TOKEN}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data }),
    });
    const meta = await res.json().catch(() => ({}));
    return NextResponse.json({ ok: res.ok, meta }, { status: res.ok ? 200 : 502 });
  } catch (e) {
    return NextResponse.json({ ok: false, error: String(e) }, { status: 500 });
  }
}
