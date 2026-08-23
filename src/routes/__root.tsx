import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
} from "@tanstack/react-router";
import { ThemeProvider } from "../lib/theme";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const SITE = "https://www.justhourglass.me";

/** Create the meta/link tag if it is missing, then set the attribute. */
function setHeadTag(
  selector: string,
  attr: string,
  value: string,
  make: () => Element,
) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = make();
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

/**
 * Keeps the canonical link, og:url, and the social share image pointing at the
 * page actually being viewed. This lives at the root rather than in PageSEO so
 * that routes without a PageSEO call still get correct values instead of
 * inheriting the previous page's during client-side navigation.
 *
 * Every article has a pre-rendered card at /og/<slug>.png; everything else
 * falls back to the site card.
 */
function useSocialTags() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const clean = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
    const url = SITE + clean;

    const articleSlug = clean.startsWith("/journal/")
      ? clean.slice("/journal/".length)
      : null;
    const image =
      SITE + (articleSlug ? `/og/${articleSlug}.png` : "/og-default.png");

    setHeadTag('link[rel="canonical"]', "href", url, () => {
      const l = document.createElement("link");
      l.setAttribute("rel", "canonical");
      return l;
    });

    const ogTags: [string, string][] = [
      ["og:url", url],
      ["og:image", image],
    ];
    ogTags.forEach(([property, value]) =>
      setHeadTag(`meta[property="${property}"]`, "content", value, () => {
        const meta = document.createElement("meta");
        meta.setAttribute("property", property);
        return meta;
      }),
    );

    setHeadTag('meta[name="twitter:image"]', "content", image, () => {
      const meta = document.createElement("meta");
      meta.setAttribute("name", "twitter:image");
      return meta;
    });
  }, [pathname]);
}

function NotFoundComponent() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-32">
      <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.36em] text-muted-foreground">
        404 &nbsp;·&nbsp; Not found
      </p>
      <h1 className="font-serif text-4xl italic tracking-tight text-foreground md:text-5xl leading-tight">
        This page does not exist.
      </h1>
      <p className="mt-6 max-w-lg font-serif text-[17px] leading-relaxed text-muted-foreground">
        The link may be old, or the address mistyped. Either way, the seconds
        you just spent here were real ones, drawn from the same budget as all
        the rest. We would suggest spending the next few somewhere that exists.
      </p>
      <div className="mt-16 border-t border-border pt-10 flex items-center justify-between">
        <Link
          to="/"
          className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground transition hover:text-foreground"
        >
          ← Open the calculator
        </Link>
        <Link
          to="/journal"
          className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground transition hover:text-foreground"
        >
          All articles →
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong. Try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  useSocialTags();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <div className="min-h-screen bg-background text-foreground">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
