/**
 * The only paths the Meta pixel and GA4 may run on. Shared by the browser
 * component and the /api/capi relay, so both enforce the same list.
 *
 * Nothing here may name a drug or a condition. /treatments/semaglutide or
 * /weight-loss with a pixel on it tells Meta an identifiable browser wants that
 * prescription, which is health information under Meta's Business Tools Terms.
 * Product pages stay untracked; paid traffic lands on /start.
 *
 * WellaraMD routes: "/" is the one-page storefront (all booking CTAs live here),
 * "/start" is reserved for the future paid landing page, "/faq" is neutral.
 * The legal pages (/privacy, /terms, /telehealth) are noindex and carry no
 * booking CTAs, so they stay off this list and load no tags.
 */
const TRACKED = [/^\/$/, /^\/start\/?$/, /^\/faq\/?$/];

export function isTrackedPath(path: string): boolean {
  return TRACKED.some((r) => r.test(path));
}

/** A MyDose booking or intake link, by the URL shapes clients use today. The
 *  portal login (app.mydose.ai/, /portal) is not one: a click there means an
 *  existing patient, and telling Meta that is a health disclosure. */
export function isBookingLink(href: string): boolean {
  try {
    const u = new URL(href);
    return (
      u.hostname === "app.mydose.ai" &&
      /^\/(patient\/book-consultation|book|s|intake)\//.test(u.pathname)
    );
  } catch {
    return false;
  }
}
