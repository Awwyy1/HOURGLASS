import { Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { COLS, birthFromYear, buildModel, fmt, isBirthYear, savedBirth } from "../lib/life";

/** The hero always draws an eighty-year life; /weeks lets people change it. */
const SPAN = 80;
const TOTAL = SPAN * COLS;

// Grid geometry in SVG units: a 10-unit pitch with 8-unit squares, and a
// gutter on the left for the decade labels.
const PITCH = 10;
const SIZE = 8;
const LABEL_W = 34;

let filledCells: string[] | null = null;
let outlinedCells: string[] | null = null;

/** One path command per week, built once and sliced as the count changes. */
function cells() {
  if (!filledCells || !outlinedCells) {
    filledCells = [];
    outlinedCells = [];
    for (let i = 0; i < TOTAL; i++) {
      const x = (i % COLS) * PITCH;
      const y = Math.floor(i / COLS) * PITCH;
      filledCells.push(`M${x} ${y}h${SIZE}v${SIZE}h-${SIZE}z`);
      outlinedCells.push(`M${x + 0.5} ${y + 0.5}h${SIZE - 1}v${SIZE - 1}h-${SIZE - 1}z`);
    }
  }
  return { filled: filledCells, outlined: outlinedCells };
}

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    !!window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
  );
}

/** Weeks already lived by someone born in the middle of the given year. */
function livedWeeks(year: number) {
  const birth = new Date(birthFromYear(year));
  const now = new Date();
  const model = buildModel(birth, now, SPAN, []);
  if (model) return model.lived;
  return birth >= now ? 0 : TOTAL;
}

/**
 * The homepage hero: a whole eighty-year life as a grid of weeks, with the
 * ones already lived filled in from a single birth year. The grid fills on
 * first sight and again whenever the year changes.
 */
export function LifeHero() {
  const defaultYear = new Date().getFullYear() - 30;
  const [yearInput, setYearInput] = useState(String(defaultYear));
  const [year, setYear] = useState(defaultYear);

  // A visitor who has used /weeks before starts from their own year.
  useEffect(() => {
    const saved = savedBirth();
    const y = saved ? parseInt(saved.slice(0, 4), 10) : NaN;
    if (isBirthYear(y)) {
      setYearInput(String(y));
      setYear(y);
    }
  }, []);

  const lived = useMemo(() => livedWeeks(year), [year]);
  const pastTheGrid = lived >= TOTAL;

  // Fill the grid once it is on screen, then follow the year.
  const svgRef = useRef<SVGSVGElement>(null);
  const [seen, setSeen] = useState(false);
  const [shown, setShown] = useState(0);
  const shownRef = useRef(0);
  const firstFill = useRef(true);

  useEffect(() => {
    const el = svgRef.current;
    if (!el || prefersReducedMotion() || !("IntersectionObserver" in window)) {
      setSeen(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setSeen(true);
          io.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!seen) return;
    const from = shownRef.current;
    const to = lived;
    if (from === to || prefersReducedMotion()) {
      shownRef.current = to;
      setShown(to);
      return;
    }
    const duration = firstFill.current ? 1500 : 650;
    firstFill.current = false;
    const start = performance.now();
    let frame = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      const v = Math.round(from + (to - from) * eased);
      shownRef.current = v;
      setShown(v);
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [seen, lived]);

  const paths = useMemo(() => {
    const { filled, outlined } = cells();
    return {
      lived: filled.slice(0, shown).join(""),
      ahead: outlined.slice(shown).join(""),
    };
  }, [shown]);

  const onYear = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 4);
    setYearInput(digits);
    const y = parseInt(digits, 10);
    if (digits.length === 4 && isBirthYear(y)) setYear(y);
  };

  const width = LABEL_W + COLS * PITCH + 6;
  const height = SPAN * PITCH + 8;

  return (
    <section className="mx-auto grid max-w-6xl grid-cols-1 px-6 pt-10 pb-24 md:pt-12 md:pb-32 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:gap-x-20">
      <div className="lg:col-start-1 lg:row-start-1">
        <p className="mb-8 text-[10px] uppercase tracking-[0.36em] text-muted-foreground">
          Volume I &nbsp;·&nbsp; A Life in Weeks
        </p>
        <h1 className="font-serif text-[clamp(40px,11vw,64px)] leading-[1.02] tracking-[-0.02em] lg:text-[clamp(52px,5vw,72px)]">
          A life is about four thousand weeks.{" "}
          <span className="italic text-muted-foreground">Here are yours.</span>
        </h1>
        <p className="mt-8 max-w-[34em] font-serif text-[17px] leading-[1.8] text-foreground/75">
          Every square is one week, and every row is one year of an eighty-year life. The filled
          ones are already behind you.
        </p>
        <label className="mt-10 flex flex-wrap items-baseline gap-4 font-serif text-[22px] italic text-muted-foreground">
          I was born in
          <input
            type="text"
            inputMode="numeric"
            autoComplete="bday-year"
            maxLength={4}
            value={yearInput}
            onChange={(e) => onYear(e.target.value)}
            onBlur={() => setYearInput(String(year))}
            aria-label="Year of birth"
            className="w-[4.2ch] border-0 border-b border-foreground bg-transparent px-0 pt-0.5 pb-1.5 text-center font-mono text-3xl font-light not-italic text-foreground outline-none transition-[border-width] focus:border-b-2"
          />
        </label>
      </div>

      <figure className="mx-auto mt-12 w-full max-w-[460px] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:mt-0 lg:max-w-none">
        <svg
          ref={svgRef}
          viewBox={`${-LABEL_W} -4 ${width} ${height}`}
          className="block h-auto w-full overflow-visible text-foreground"
          role="img"
          aria-label={`Eighty rows of 52 weeks, ${fmt(TOTAL)} in all, with the ${fmt(lived)} already lived filled in.`}
        >
          {Array.from({ length: SPAN / 10 }, (_, i) => (
            <text
              key={i}
              x={-10}
              y={i * 10 * PITCH + SIZE - 0.5}
              textAnchor="end"
              fontSize={11}
              className="fill-muted-foreground font-mono"
            >
              {i * 10}
            </text>
          ))}
          <path
            d={paths.ahead}
            fill="none"
            stroke="currentColor"
            strokeWidth={1}
            vectorEffect="non-scaling-stroke"
            className="[stroke-opacity:0.2] lg:[stroke-opacity:0.3] dark:[stroke-opacity:0.14] lg:dark:[stroke-opacity:0.2]"
          />
          <path d={paths.lived} fill="currentColor" />
          {shown < TOTAL && (
            <rect
              x={(shown % COLS) * PITCH - 3}
              y={Math.floor(shown / COLS) * PITCH - 3}
              width={SIZE + 6}
              height={SIZE + 6}
              rx={2}
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              vectorEffect="non-scaling-stroke"
              className="animate-pulse motion-reduce:animate-none"
            />
          )}
        </svg>
        <figcaption className="mt-4 flex flex-wrap justify-between gap-x-4 gap-y-2 font-mono text-[10px] uppercase tracking-[0.08em] text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <span aria-hidden="true" className="inline-block h-2 w-2 bg-foreground" />
            Behind you
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span aria-hidden="true" className="inline-block h-2 w-2 border border-foreground/45" />
            Still ahead
          </span>
          <span>1 square = 1 week</span>
        </figcaption>
      </figure>

      <div className="lg:col-start-1 lg:row-start-2">
        <dl className="mt-8 grid max-w-[440px] grid-cols-2 gap-px border border-border bg-border lg:mt-10">
          <div className="bg-background px-5 py-4">
            <dt className="text-[9px] uppercase tracking-[0.32em] text-muted-foreground">
              Weeks behind you
            </dt>
            <dd className="mt-2 font-mono text-[28px] font-extralight tabular-nums tracking-tight text-foreground">
              {seen ? fmt(shown) : "—"}
            </dd>
          </div>
          <div className="bg-background px-5 py-4">
            <dt className="text-[9px] uppercase tracking-[0.32em] text-muted-foreground">
              Weeks still ahead
            </dt>
            <dd className="mt-2 font-mono text-[28px] font-extralight tabular-nums tracking-tight text-foreground">
              {seen ? fmt(TOTAL - shown) : "—"}
            </dd>
          </div>
        </dl>
        <p className="mt-6 max-w-[30em] font-serif text-[17px] italic leading-[1.7] text-muted-foreground">
          {pastTheGrid
            ? "That runs past the end of an eighty-year grid, so every week from here is a bonus. The next page lets you set a longer life."
            : "Sleep, work and the phone have already claimed most of the weeks still ahead. The next page shows how many are left over once they have had their share."}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-5">
          <Link
            to="/weeks"
            search={{ born: year }}
            className="inline-flex items-center border border-foreground bg-foreground px-6 py-4 text-[10px] uppercase tracking-[0.32em] text-background transition hover:bg-transparent hover:text-foreground"
          >
            See where the rest go →
          </Link>
          <a
            href="#calculator"
            className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground transition hover:text-foreground"
          >
            Or measure one habit ↓
          </a>
        </div>
      </div>
    </section>
  );
}
