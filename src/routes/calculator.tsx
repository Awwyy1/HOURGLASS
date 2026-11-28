import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { PageSEO } from "../components/PageSEO";
import { FAQSection } from "../components/FAQSection";
import { duration } from "../components/LifeFigure";
import { GROUPS, HABITS, habitById, type Habit } from "../lib/habits";
import { drawCard, type CardData, type CardFormat, type CardTheme } from "../lib/card";
import { SITE, injectJsonLd, reportJsonLd } from "../lib/head";

export const Route = createFileRoute("/calculator")({
  validateSearch: (search: Record<string, unknown>): { habit?: string; t?: number } => {
    const habit = typeof search.habit === "string" ? search.habit : undefined;
    const t = Number(search.t);
    return {
      ...(habit ? { habit } : {}),
      ...(Number.isFinite(t) && t >= 0 && t <= 960 ? { t } : {}),
    };
  },
  component: Calculator,
});

const TITLE = "Habit calculator: how much of your life does it take?";
const DESCRIPTION =
  "Pick a habit, set your own daily time and see what it adds up to over a lifetime, from screen time to sleep. Share it as a card for Instagram in one tap.";

const CUSTOM = "custom";
const POPULAR = [
  "phone",
  "social-media",
  "tiktok",
  "netflix",
  "gaming",
  "work",
  "sleep",
  "music",
  "exercise",
  "waiting",
];
const DEFAULT_ID = "phone";
const fmtInt = (n: number) => Math.round(n).toLocaleString("en-US");

interface Choice {
  id: string;
  /** Name for the card: follows "MY". */
  card: string;
  /** Average hours a day, across every day of the year. */
  average: number;
  /** Lifetime years per hour a day, from the article's own figures. */
  yearsPerHour: number;
  span: number;
  sleep: boolean;
  habit?: Habit;
}

function choiceOf(h: Habit): Choice {
  return {
    id: h.id,
    card: h.card,
    average: h.hoursPerDay,
    yearsPerHour: h.years / h.hoursPerDay,
    span: h.span,
    sleep: h.sleep,
    habit: h,
  };
}

/** Slider bounds that suit the habit: fine steps for small ones, room above the average. */
function boundsFor(average: number) {
  const step = average < 1 ? 1 / 60 : 5 / 60;
  const max = Math.min(16, Math.max(average * 3, average + 1.5, 1));
  return { step, max: Math.ceil(max / step) * step };
}

function cardOf(c: Choice, hours: number, accent?: [string, string]): CardData {
  const years = c.yearsPerHour * hours;
  const days = (hours * 365) / 24;
  const share = (hours / 24) * 100;
  return {
    label: c.card,
    big: years >= 1 ? years.toFixed(1).replace(/\.0$/, "") : fmtInt(years * 365),
    unit: years >= 1 ? (c.sleep ? "years asleep" : "waking years") : "waking days",
    sentence: `At ${duration(hours)} a day, over ${c.span} years.`,
    stats: [
      [duration(hours), "a day"],
      [`${days < 10 ? days.toFixed(1) : fmtInt(days)} days`, "a year"],
      [`${share < 10 ? share.toFixed(1).replace(/\.0$/, "") : Math.round(share)}%`, "of the day"],
    ],
    dots: { filled: Math.min(years, c.span), total: c.span },
    accent,
  };
}

function Calculator() {
  const search = Route.useSearch();
  const initial = habitById(search.habit ?? "") ?? habitById(DEFAULT_ID)!;

  const [id, setId] = useState(initial.id);
  const [customName, setCustomName] = useState("");
  const [customSpan, setCustomSpan] = useState("60");
  const [query, setQuery] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [hours, setHours] = useState(search.t !== undefined ? search.t / 60 : initial.hoursPerDay);

  const choice: Choice = useMemo(() => {
    if (id === CUSTOM) {
      const span = Math.min(90, Math.max(1, parseInt(customSpan, 10) || 60));
      return {
        id: CUSTOM,
        card: customName.trim() || "habit",
        average: 1,
        yearsPerHour: (365 * span) / 5840,
        span,
        sleep: false,
      };
    }
    return choiceOf(habitById(id) ?? initial);
  }, [id, customName, customSpan, initial]);

  const { step, max } = boundsFor(choice.average);
  const isAverage = id !== CUSTOM && Math.abs(hours - choice.average) < 1e-9;

  const pick = (next: string) => {
    setId(next);
    if (next === CUSTOM) setHours(1);
    else setHours(habitById(next)!.hoursPerDay);
  };

  // Keep the address in step, so the page can be shared exactly as it is.
  useEffect(() => {
    const t = Math.round(hours * 60);
    const qs = id === CUSTOM ? `?t=${t}` : `?habit=${id}&t=${t}`;
    window.history.replaceState(window.history.state, "", `/calculator${qs}`);
  }, [id, hours]);

  const card = cardOf(choice, hours);
  const years = choice.yearsPerHour * hours;

  // The habits most people look for first; the chosen one always stays in view.
  const popular = POPULAR.map((p) => habitById(p)!).filter(Boolean);
  if (id !== CUSTOM && !POPULAR.includes(id)) popular.push(habitById(id)!);

  const filtered = (g: string) =>
    HABITS.filter(
      (h) => h.group === g && h.label.toLowerCase().includes(query.trim().toLowerCase()),
    );

  return (
    <>
      <PageSEO title={TITLE} description={DESCRIPTION} exactTitle />
      <CalculatorSchema />

      <section className="mx-auto max-w-6xl px-6 pt-12 pb-10 md:pt-16">
        <p className="mb-8 text-[10px] uppercase tracking-[0.36em] text-muted-foreground">
          The calculator &nbsp;·&nbsp; Your time, on a card
        </p>
        <h1 className="max-w-3xl font-serif text-[clamp(38px,8vw,72px)] leading-[1.02] tracking-[-0.02em]">
          How much of your life <span className="italic text-muted-foreground">does it take?</span>
        </h1>
        <p className="mt-6 max-w-xl font-serif text-[17px] leading-[1.8] text-foreground/75">
          Pick a habit, set your own daily time and see what it adds up to over a lifetime. Then
          take it with you as a card.
        </p>
      </section>

      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-x-16 gap-y-12 px-6 pb-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)]">
        {/* On phones the card follows the time slider; on wide screens it sits on the right. */}
        <div className="min-w-0 lg:col-start-1 lg:row-start-1">
          <Step num="01" title="Pick a habit" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={`Search ${HABITS.length} habits`}
            aria-label="Search habits"
            className="mb-6 w-full border-0 border-b border-border bg-transparent px-0 py-2 text-base text-foreground outline-none transition placeholder:text-muted-foreground/70 focus:border-foreground"
          />
          {query.trim() || showAll ? (
            <div className="space-y-5">
              {GROUPS.map((g) => {
                const list = filtered(g);
                if (!list.length) return null;
                return (
                  <div key={g}>
                    <p className="mb-2.5 font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                      {g}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {list.map((h) => (
                        <Chip key={h.id} active={h.id === id} onClick={() => pick(h.id)}>
                          {h.label}
                        </Chip>
                      ))}
                    </div>
                  </div>
                );
              })}
              <div className="flex flex-wrap items-center gap-2">
                <Chip active={id === CUSTOM} onClick={() => pick(CUSTOM)}>
                  Something else…
                </Chip>
                {!query.trim() && (
                  <button
                    type="button"
                    onClick={() => setShowAll(false)}
                    className="px-2 py-1.5 text-[10px] uppercase tracking-[0.24em] text-muted-foreground transition hover:text-foreground"
                  >
                    Fewer ↑
                  </button>
                )}
              </div>
            </div>
          ) : (
            <div className="flex flex-wrap items-center gap-2">
              {popular.map((h) => (
                <Chip key={h.id} active={h.id === id} onClick={() => pick(h.id)}>
                  {h.label}
                </Chip>
              ))}
              <Chip active={id === CUSTOM} onClick={() => pick(CUSTOM)}>
                Something else…
              </Chip>
              <button
                type="button"
                onClick={() => setShowAll(true)}
                className="px-2 py-1.5 text-[10px] uppercase tracking-[0.24em] text-foreground underline decoration-border underline-offset-4 transition hover:decoration-foreground"
              >
                All {HABITS.length} habits ↓
              </button>
            </div>
          )}

          {id === CUSTOM && (
            <div className="mt-6 grid grid-cols-[minmax(0,1fr)_7rem] gap-5">
              <label className="block">
                <span className="mb-1.5 block text-[13px] text-muted-foreground">What is it?</span>
                <input
                  type="text"
                  value={customName}
                  maxLength={24}
                  autoFocus
                  placeholder="e.g. guitar"
                  onChange={(e) => setCustomName(e.target.value)}
                  className="w-full border-0 border-b border-foreground bg-transparent px-0 pb-1.5 font-serif text-xl italic text-foreground outline-none"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-[13px] text-muted-foreground">
                  For how many years
                </span>
                <input
                  type="text"
                  inputMode="numeric"
                  value={customSpan}
                  maxLength={2}
                  onChange={(e) => setCustomSpan(e.target.value.replace(/\D/g, ""))}
                  className="w-full border-0 border-b border-foreground bg-transparent px-0 pb-1.5 font-mono text-xl text-foreground outline-none"
                />
              </label>
            </div>
          )}
        </div>

        <div className="min-w-0 lg:col-start-1 lg:row-start-2">
          <div>
            <Step num="02" title="Your time a day" />
            <div className="flex items-center gap-4">
              <StepButton
                label="Less"
                onClick={() => setHours((h) => Math.max(0, +(h - step).toFixed(4)))}
              >
                −
              </StepButton>
              <p className="flex-1 text-center font-mono text-[44px] font-extralight leading-none tracking-[-0.03em] text-foreground">
                {duration(hours)}
              </p>
              <StepButton
                label="More"
                onClick={() => setHours((h) => Math.min(max, +(h + step).toFixed(4)))}
              >
                +
              </StepButton>
            </div>
            <input
              type="range"
              min={0}
              max={max}
              step={step}
              value={hours}
              onChange={(e) => setHours(Number(e.target.value))}
              aria-label="Time a day"
              aria-valuetext={`${duration(hours)} a day`}
              className="figure-range mt-6 w-full"
              style={{ "--fa": "var(--color-foreground)" } as React.CSSProperties}
            />
            <p className="mt-3 text-xs text-muted-foreground">
              {id === CUSTOM ? (
                "Averaged across every day of the week."
              ) : isAverage ? (
                <>Set to the average from the journal, {duration(choice.average)} a day.</>
              ) : (
                <>
                  Average: {duration(choice.average)} a day.{" "}
                  <button
                    type="button"
                    onClick={() => setHours(choice.average)}
                    className="underline underline-offset-2 transition hover:text-foreground"
                  >
                    Back to average
                  </button>
                </>
              )}
            </p>
          </div>
        </div>

        <div className="lg:col-start-2 lg:row-span-3 lg:row-start-1">
          <div className="lg:sticky lg:top-8">
            <Studio card={card} filename={`hourglass-${choice.id}`} />
          </div>
        </div>

        <div className="min-w-0 lg:col-start-1 lg:row-start-3">
          <div className="border-t border-border pt-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
              Over {choice.span} years
            </p>
            <p className="mt-3 flex flex-wrap items-baseline gap-x-3">
              <span className="font-mono text-[56px] font-extralight leading-none tracking-[-0.04em] text-foreground">
                {card.big}
              </span>
              <span className="font-serif text-2xl italic text-muted-foreground">{card.unit}</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {fmtInt(hours * 365 * choice.span)} hours in all
              {choice.habit && (
                <>
                  {" "}
                  ·{" "}
                  <Link
                    to={`/journal/${choice.habit.slug}` as "/journal"}
                    className="text-foreground underline underline-offset-4 decoration-border transition hover:decoration-foreground"
                  >
                    Where the {choice.habit.label.toLowerCase()} average comes from →
                  </Link>
                </>
              )}
            </p>
            {years >= choice.span && (
              <p className="mt-2 text-xs text-muted-foreground">
                That fills every waking year of the span.
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl border-t border-border px-6 py-20">
        <h2 className="mb-6 font-serif text-3xl italic tracking-tight text-foreground">
          How the numbers work.
        </h2>
        <div className="space-y-5 font-serif text-[17px] leading-[1.85] text-foreground/80">
          <p>
            Each habit starts at the average its article in the journal works out, from named
            sources, and counts over the span of life that article uses: 60 adult years for most
            habits, a 79-year life for sleep and eating, a career for work. Moving the time a day
            scales the total in proportion, so at the average the calculator gives exactly the
            article&apos;s figure.
          </p>
          <p>
            Totals are in waking years of 5,840 hours, sixteen waking hours a day for a year, which
            is the unit this journal uses throughout. Sleep is the exception and is counted in
            ordinary years, since it is the part of the day the other habits do not get.
          </p>
        </div>
        <FAQSection
          faqs={[
            {
              q: "How do I work out how much of my life I spend on my phone?",
              a: "Multiply your daily screen time by 365 and by the number of years you expect the habit to last, then divide by 5,840 to get waking years. At four hours a day from 18 to 80 that is about 90,500 hours, or roughly 15.5 waking years. The calculator does the arithmetic for any daily time and draws the result as a card you can share.",
            },
            {
              q: "What is a waking year?",
              a: "A year of the hours you are awake: 16 hours a day for 365 days, which is 5,840 hours. Counting in waking years shows a habit's share of conscious life, which is the time it actually competes for, rather than diluting it across the hours spent asleep.",
            },
          ]}
        />
      </section>
    </>
  );
}

function Step({ num, title }: { num: string; title: string }) {
  return (
    <p className="mb-5 flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
      <span className="inline-grid h-5 min-w-[26px] place-items-center border border-border px-1.5 tracking-[0.05em] text-foreground">
        {num}
      </span>
      {title}
    </p>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`border px-3 py-1.5 text-sm transition ${
        active
          ? "border-foreground bg-foreground text-background"
          : "border-border text-foreground/85 hover:border-foreground"
      }`}
    >
      {children}
    </button>
  );
}

function StepButton({
  label,
  onClick,
  children,
}: {
  label: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="grid h-11 w-11 shrink-0 place-items-center border border-border text-xl text-foreground transition hover:border-foreground"
    >
      {children}
    </button>
  );
}

/**
 * The card, drawn live as the reader changes things, with the format and
 * theme switches and one main action: share on phones that can share
 * files, download elsewhere.
 */
function Studio({ card, filename }: { card: CardData; filename: string }) {
  const [format, setFormat] = useState<CardFormat>("post");
  const [theme, setTheme] = useState<CardTheme>("light");
  const [image, setImage] = useState<{ url: string; blob: Blob } | null>(null);
  const [copied, setCopied] = useState(false);
  const last = useRef<string | null>(null);
  const cardKey = JSON.stringify(card);

  useEffect(() => {
    let cancelled = false;
    const timer = setTimeout(async () => {
      try {
        const blob = await drawCard(JSON.parse(cardKey) as CardData, format, theme);
        if (cancelled) return;
        const url = URL.createObjectURL(blob);
        if (last.current) URL.revokeObjectURL(last.current);
        last.current = url;
        setImage({ url, blob });
      } catch {
        // keep the previous image
      }
    }, 120);
    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [cardKey, format, theme]);

  useEffect(() => () => void (last.current && URL.revokeObjectURL(last.current)), []);

  const file = useMemo(
    () =>
      image ? new File([image.blob], `${filename}-${format}.png`, { type: "image/png" }) : null,
    [image, filename, format],
  );
  const canShare =
    !!file &&
    typeof navigator !== "undefined" &&
    !!navigator.canShare &&
    navigator.canShare({ files: [file] });

  const download = useCallback(() => {
    if (!image) return;
    const a = document.createElement("a");
    a.href = image.url;
    a.download = `${filename}-${format}.png`;
    a.click();
  }, [image, filename, format]);

  const share = useCallback(async () => {
    if (!file) return;
    try {
      await navigator.share({ files: [file], title: "My time, on a card" });
    } catch (e) {
      if ((e as Error)?.name !== "AbortError") download();
    }
  }, [file, download]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard unavailable
    }
  };

  const seg = (active: boolean) =>
    `flex-1 px-3 py-2 text-[10px] uppercase tracking-[0.24em] transition ${
      active ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
    }`;

  return (
    <div>
      <div
        className={`relative mx-auto w-full overflow-hidden border border-border bg-muted shadow-[0_24px_60px_-30px_rgba(0,0,0,0.35)] transition-[max-width] ${
          format === "post" ? "aspect-[4/5] max-w-[420px]" : "aspect-[9/16] max-w-[300px]"
        }`}
      >
        {image ? (
          <img src={image.url} alt="Your card" className="h-full w-full object-cover" />
        ) : (
          <div className="absolute inset-0 grid place-items-center font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
            Drawing…
          </div>
        )}
      </div>

      <div className="mx-auto mt-4 grid max-w-[420px] grid-cols-2 gap-3">
        <div className="flex border border-border" role="group" aria-label="Format">
          <button
            type="button"
            className={seg(format === "post")}
            aria-pressed={format === "post"}
            onClick={() => setFormat("post")}
          >
            Post
          </button>
          <button
            type="button"
            className={seg(format === "story")}
            aria-pressed={format === "story"}
            onClick={() => setFormat("story")}
          >
            Story
          </button>
        </div>
        <div className="flex border border-border" role="group" aria-label="Theme">
          <button
            type="button"
            className={seg(theme === "light")}
            aria-pressed={theme === "light"}
            onClick={() => setTheme("light")}
          >
            Light
          </button>
          <button
            type="button"
            className={seg(theme === "dark")}
            aria-pressed={theme === "dark"}
            onClick={() => setTheme("dark")}
          >
            Dark
          </button>
        </div>
      </div>

      <div className="mx-auto mt-4 max-w-[420px]">
        <button
          type="button"
          disabled={!image}
          onClick={canShare ? share : download}
          className="inline-flex w-full items-center justify-center gap-2.5 border border-foreground bg-foreground px-5 py-4 text-[11px] uppercase tracking-[0.28em] text-background transition hover:bg-transparent hover:text-foreground disabled:opacity-40"
        >
          {canShare ? "Share my card" : "Download my card"}
        </button>
        <div className="mt-3 flex items-center justify-center gap-6 text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
          {canShare && (
            <button type="button" onClick={download} className="transition hover:text-foreground">
              Save image
            </button>
          )}
          <button type="button" onClick={copy} className="transition hover:text-foreground">
            {copied ? "Link copied" : "Copy link"}
          </button>
        </div>
        <p className="mt-3 text-center text-[11px] leading-relaxed text-muted-foreground">
          {format === "story" ? "1080 × 1920 for Stories." : "1080 × 1350 for the feed."} Drawn on
          your device; nothing is uploaded.
        </p>
      </div>
    </div>
  );
}

const SCHEMA_ID = "calculator-schema-ld";
const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "HOURGLASS habit calculator",
  url: `${SITE}/calculator`,
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "Any",
  browserRequirements: "Requires JavaScript",
  description:
    "Pick a habit, set your daily time and see the lifetime total in waking years, then download it as a card sized for Instagram.",
  isAccessibleForFree: true,
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  publisher: { "@type": "Organization", name: "HOURGLASS", url: SITE },
};

function CalculatorSchema() {
  reportJsonLd(SCHEMA_ID, SCHEMA);
  useEffect(() => injectJsonLd(SCHEMA_ID, SCHEMA), []);
  return null;
}
