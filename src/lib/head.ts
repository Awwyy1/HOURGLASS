/**
 * Head data for each page: title, description, social tags and structured
 * data.
 *
 * In the browser the components that own this data write it into
 * document.head from effects, as they always have. At build time, when every
 * page is rendered to static HTML (scripts/prerender.mjs), effects never run,
 * so the same components also report their data here during render and the
 * build writes it straight into each page's HTML. That way crawlers and link
 * previews that do not run JavaScript still see the right page.
 */

export const SITE = "https://www.justhourglass.me";

/** Non-article pages that have a share card of their own. */
const PAGE_IMAGES: Record<string, string> = {
  "/weeks": "/og-weeks.png",
};

/** Canonical URL and share image for a path, the same in the browser and at build time. */
export function socialFor(pathname: string) {
  const clean = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  const url = SITE + clean;
  const articleSlug = clean.startsWith("/journal/") ? clean.slice("/journal/".length) : null;
  const image =
    SITE + (articleSlug ? `/og/${articleSlug}.png` : (PAGE_IMAGES[clean] ?? "/og-default.png"));
  return { url, image };
}

export interface CollectedHead {
  title?: string;
  description?: string;
  ogType?: "website" | "article";
  /** Set by the not-found page so the build can mark it noindex. */
  notFound?: boolean;
  /** JSON-LD blocks keyed by the id of the script tag the browser uses. */
  jsonLd: Record<string, unknown>;
}

let collector: CollectedHead | null = null;

/** Build time only: start recording head data for one page render. */
export function startHeadCollection() {
  collector = { jsonLd: {} };
}

/** Build time only: stop recording and return what the page reported. */
export function finishHeadCollection(): CollectedHead {
  const result = collector ?? { jsonLd: {} };
  collector = null;
  return result;
}

/** Report head data during render. Does nothing in the browser. */
export function reportHead(data: Omit<CollectedHead, "jsonLd">) {
  if (collector) Object.assign(collector, data);
}

/** Report a JSON-LD block during render. Does nothing in the browser. */
export function reportJsonLd(id: string, data: unknown) {
  if (collector) collector.jsonLd[id] = data;
}

/**
 * Browser only: replace the JSON-LD script with this id. A prerendered page
 * already carries the script, so it is replaced rather than duplicated.
 */
export function injectJsonLd(id: string, data: unknown) {
  document.getElementById(id)?.remove();
  const script = document.createElement("script");
  script.id = id;
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
  return () => {
    document.getElementById(id)?.remove();
  };
}
