import { useEffect, useRef, useState } from "react";

/**
 * The infographic beside an article: the short answer first, then how one
 * day becomes a year and a year becomes a life, with the line of arithmetic
 * for each step under its picture. Everything is drawn from the numbers
 * passed in, so the same figure serves any "how much of your life" article.
 *
 * On wide screens it sits in a column to the right of the text and stays in
 * view while the article scrolls (see .article-with-figure in styles.css).
 * On narrow screens it sits between the article's header and its text.
 */

export interface LifeFigureData {
  answer: FigureAnswer;
  day: {
    /** Hours a day the habit takes. */
    hours: number;
    /**
     * Clock hour the arc starts at, for habits that happen at a set time, such
     * as sleep. Leave it out for habits spread across the day: the dial then
     * shows only the share of 24 hours, with no clock labels.
     */
    start?: number;
    value: string;
    text: string;
  };
  /** The step from one day to one year, e.g. "× 365" and its caption. */
  toYear: { op: string; text: string };
  year: { days: number; value: string; text: string };
  toLife: { op: string; text: string };
  life: { years: number; total: number; value: string; text: string };
  /** Optional scale explaining where the daily figure comes from. */
  why?: {
    title: string;
    max: number;
    /** Range marked as recommended or typical. */
    band?: [number, number];
    /** Values below this are hatched, e.g. a level linked to harm. */
    hatchBelow?: number;
    marker: number;
    ticks: number[];
    unit: string;
    text: string;
  };
}

interface Props {
  data: LifeFigureData;
  /** Accent for the habit, light and dark theme. Defaults to night blue. */
  accent?: [string, string];
}

const COLS = 10;

export interface FigureAnswer {
  value: string;
  unit: string;
  text: string;
}

/**
 * The frame every article figure shares: the short answer on top, then the
 * figure's own cards. It sits beside the text on wide screens and stays in
 * view; when it is taller than the window it scrolls with the article until
 * its bottom edge is in view and sticks there, so nothing is cut off.
 */
export function FigurePanel({
  answer,
  accent = ["#3d4fa3", "#93a4ee"],
  children,
}: {
  answer: FigureAnswer;
  accent?: [string, string];
  children: React.ReactNode;
}) {
  const inner = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = inner.current;
    if (!el) return;
    const fit = () => {
      el.style.top = `${Math.min(32, window.innerHeight - el.offsetHeight - 16)}px`;
    };
    fit();
    window.addEventListener("resize", fit);
    const ro = typeof ResizeObserver !== "undefined" ? new ResizeObserver(fit) : null;
    ro?.observe(el);
    return () => {
      window.removeEventListener("resize", fit);
      ro?.disconnect();
    };
  }, []);

  return (
    <aside
      className="article-figure life-figure"
      style={{ "--fa-light": accent[0], "--fa-dark": accent[1] } as React.CSSProperties}
      aria-label={`${answer.value} ${answer.unit}: ${answer.text}`}
    >
      <div ref={inner} className="article-figure-inner flex flex-col gap-3">
        <div className="border border-border bg-background px-5 py-5 sm:px-6">
          <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
            The short answer
          </p>
          <p className="flex flex-wrap items-baseline gap-x-3">
            <span className="font-mono text-[64px] font-extralight leading-none tracking-[-0.04em] text-foreground">
              {answer.value}
            </span>
            <span className="font-serif text-2xl italic text-muted-foreground">{answer.unit}</span>
          </p>
          <p className="mt-3 font-serif text-[17px] italic leading-relaxed text-muted-foreground">
            {answer.text}
          </p>
        </div>
        {children}
      </div>
    </aside>
  );
}

/** A plain card inside a FigurePanel. */
export function FigureCard({ children }: { children: React.ReactNode }) {
  return <div className="border border-border bg-background px-5 py-5 sm:px-6">{children}</div>;
}

// ── Arithmetic shared by the figure, the slider and the period table ───────

const fmtInt = (n: number) => Math.round(n).toLocaleString("en-US");

/** Days a year and years in the span, read from the figure's own steps ("× 365", "× 60"). */
export function spanOf(data: LifeFigureData) {
  const num = (s: string) => Number(s.replace(/[^\d.]/g, ""));
  return { perYear: num(data.toYear.op) || 365, years: num(data.toLife.op) || 0 };
}

/** "45 min", "2 h", "2 h 30 min". */
export function duration(hours: number) {
  const mins = Math.round(hours * 60);
  if (mins < 60) return `${mins} min`;
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return m ? `${h} h ${m} min` : `${h} h`;
}

function share(hours: number) {
  const p = (hours / 24) * 100;
  return `${p < 10 ? p.toFixed(1).replace(/\.0$/, "") : Math.round(p)}%`;
}

/**
 * The figure redrawn for someone else's daily time. Every total scales in
 * proportion to the hours a day, using the article's own ratios, so at the
 * article's figure it reproduces the article's numbers exactly.
 */
function personalise(data: LifeFigureData, hours: number): LifeFigureData {
  const base = data.day.hours;
  const { perYear, years } = spanOf(data);
  const days = (data.year.days / base) * hours;
  const lifeYears = (data.life.years / base) * hours;
  const yearHours = hours * perYear;
  return {
    ...data,
    day: {
      ...data.day,
      hours,
      value: share(hours),
      text: `of every day, at ${duration(hours)} a day.`,
    },
    year: {
      days: Math.min(365, Math.round(days)),
      value: `${days < 10 ? days.toFixed(1) : fmtInt(days)} days`,
      text: `${fmtInt(yearHours)} hours a year`,
    },
    life: {
      ...data.life,
      years: Math.min(lifeYears, data.life.total),
      value: lifeYears < 1 ? `${fmtInt(lifeYears * 365)} days` : `${lifeYears.toFixed(1)} yrs`,
      text: `${fmtInt(yearHours * years)} hours over ${years} years.`,
    },
  };
}

export function LifeFigure({ data, accent }: Props) {
  const base = data.day.hours;
  const [hours, setHours] = useState(base);
  const mine = hours !== base;
  const { answer, day, toYear, year, toLife, life, why } = mine ? personalise(data, hours) : data;

  // Habits with a set time (sleep) only make sense within a band around the
  // average; the rest can go from nothing to well past it.
  const timed = data.day.start !== undefined;
  const step = base < 1 ? 1 / 12 : 0.25;
  const min = timed ? Math.floor(base / 2) : 0;
  const max = Math.min(
    16,
    Math.ceil((timed ? base * 1.6 : Math.max(base * 2.5, base + 1)) / step) * step,
  );

  return (
    <FigurePanel answer={answer} accent={accent}>
      <div className="border border-border bg-background px-5 py-4 sm:px-6">
        <label className="block">
          <span className="flex items-baseline justify-between gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
              Make it yours
            </span>
            <span className="font-mono text-lg font-light tracking-tight text-foreground">
              {duration(hours)} a day
            </span>
          </span>
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={hours}
            onChange={(e) => setHours(Number(e.target.value))}
            aria-valuetext={`${duration(hours)} a day`}
            className="figure-range mt-3 w-full"
          />
        </label>
        <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
          {mine ? (
            <>
              Average: {duration(base)} a day.{" "}
              <button
                type="button"
                onClick={() => setHours(base)}
                className="underline underline-offset-2 transition hover:text-foreground"
              >
                Back to average
              </button>
            </>
          ) : (
            "Move it to your own daily time and the year and lifetime below follow."
          )}
        </p>
      </div>

      <div className="border border-border bg-background px-5 py-5 sm:px-6">
        <Side num="01" title="One day" value={day.value} text={day.text}>
          <Dial hours={day.hours} start={day.start} />
        </Side>

        <Connector op={toYear.op} text={toYear.text} />

        <StageTitle num="02" title="One year" />
        <Calendar days={year.days} />
        <p className="mt-3 flex items-baseline gap-3 border-t border-border pt-3">
          <span className="font-mono text-xl font-light tracking-tight text-foreground">
            {year.value}
          </span>
          <span className="text-[13px] leading-snug text-muted-foreground">{year.text}</span>
        </p>

        <Connector op={toLife.op} text={toLife.text} />

        <Side
          num="03"
          title={mine ? "Your life" : "One life"}
          value={life.value}
          text={life.text}
          accent
        >
          <Years filled={life.years} total={life.total} />
        </Side>

        {why && <Why {...why} />}
      </div>
    </FigurePanel>
  );
}

export function StageTitle({ num, title }: { num: string; title: string }) {
  return (
    <p className="mb-2 flex items-center gap-2.5 font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
      <span className="inline-grid h-5 min-w-[26px] place-items-center border border-border px-1.5 tracking-[0.05em] text-foreground">
        {num}
      </span>
      {title}
    </p>
  );
}

function Side({
  num,
  title,
  value,
  text,
  accent = false,
  children,
}: {
  num: string;
  title: string;
  value: string;
  text: string;
  accent?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[112px_minmax(0,1fr)] items-center gap-4 sm:grid-cols-[150px_minmax(0,1fr)] sm:gap-5">
      <div aria-hidden="true">{children}</div>
      <div>
        <StageTitle num={num} title={title} />
        <p
          className={`whitespace-nowrap font-mono text-[32px] sm:text-[40px] leading-none tracking-[-0.03em] ${accent ? "font-light text-[var(--fa)]" : "font-extralight text-foreground"}`}
        >
          {value}
        </p>
        <p className="mt-2 text-[13px] leading-normal text-muted-foreground">{text}</p>
      </div>
    </div>
  );
}

function Connector({ op, text }: { op: string; text: string }) {
  return (
    <div className="my-3.5 ml-3 flex h-[34px] items-center gap-2.5 border-l border-dashed border-[var(--fa)] pl-4">
      <span className="bg-[color-mix(in_srgb,var(--fa)_12%,transparent)] px-2 py-1 font-mono text-xs font-medium text-[var(--fa)]">
        {op}
      </span>
      <span className="font-serif text-sm italic text-muted-foreground">{text}</span>
    </div>
  );
}

/** A 24-hour dial with the habit's share as an arc; a clock face only when the habit has a set time. */
function Dial({ hours, start }: { hours: number; start?: number }) {
  const c = 100;
  const r = 74;
  const w = 20;
  const point = (h: number, rad: number) => {
    const a = ((h / 24) * 360 - 90) * (Math.PI / 180);
    return [c + rad * Math.cos(a), c + rad * Math.sin(a)];
  };
  const from = start ?? 0;
  const end = from + Math.min(hours, 23.99);
  const [x0, y0] = point(from, r);
  const [x1, y1] = point(end, r);
  const large = hours > 12 ? 1 : 0;
  return (
    <svg viewBox="0 0 200 200" className="block h-auto w-full">
      <circle
        cx={c}
        cy={c}
        r={r}
        fill="none"
        stroke="currentColor"
        strokeWidth={w}
        className="text-foreground/15"
      />
      <path
        d={`M${x0.toFixed(2)} ${y0.toFixed(2)} A${r} ${r} 0 ${large} 1 ${x1.toFixed(2)} ${y1.toFixed(2)}`}
        fill="none"
        stroke="var(--fa)"
        strokeWidth={w}
      />
      {(start === undefined
        ? []
        : [
            [0, "00"],
            [6, "06"],
            [12, "12"],
            [18, "18"],
          ]
      ).map(([h, label]) => {
        const [x, y] = point(h as number, r - w / 2 - 12);
        return (
          <text
            key={label}
            x={x}
            y={y + 3}
            textAnchor="middle"
            fontSize={8}
            className="fill-muted-foreground font-mono"
          >
            {label}
          </text>
        );
      })}
      <text
        x={c}
        y={c + 10}
        textAnchor="middle"
        fontSize={30}
        className="fill-foreground font-mono font-extralight"
      >
        {hours < 1
          ? `${Math.round(hours * 60)}m`
          : `${Number.isInteger(hours) ? hours : hours.toFixed(1)}h`}
      </text>
    </svg>
  );
}

/** 365 days as 53 columns of weeks, the habit's days filled. */
function Calendar({ days }: { days: number }) {
  const cell = 6.2;
  const gap = 1.4;
  const pitch = cell + gap;
  return (
    <svg
      viewBox={`0 0 ${(53 * pitch).toFixed(1)} ${(7 * pitch).toFixed(1)}`}
      className="block h-auto w-full"
      aria-hidden="true"
    >
      {Array.from({ length: 365 }, (_, d) => (
        <rect
          key={d}
          x={Math.floor(d / 7) * pitch}
          y={(d % 7) * pitch}
          width={cell}
          height={cell}
          rx={1}
          fill={d < days ? "var(--fa)" : "currentColor"}
          className={d < days ? undefined : "text-foreground/10"}
        />
      ))}
    </svg>
  );
}

/** One circle per year of life; the habit's years filled, the last one partly. */
function Years({ filled, total }: { filled: number; total: number }) {
  const gap = 30;
  const rad = 10;
  const whole = Math.floor(filled);
  const part = filled - whole;
  const rows = Math.ceil(total / COLS);
  return (
    <svg viewBox={`0 0 ${COLS * gap + 10} ${rows * gap + 10}`} className="block h-auto w-full">
      <defs>
        <clipPath id="life-figure-part">
          <rect
            x={20 + (whole % COLS) * gap - rad}
            y={20 + Math.floor(whole / COLS) * gap - rad}
            width={2 * rad * part}
            height={2 * rad}
          />
        </clipPath>
      </defs>
      {Array.from({ length: total }, (_, i) => {
        const x = 20 + (i % COLS) * gap;
        const y = 20 + Math.floor(i / COLS) * gap;
        if (i < whole) return <circle key={i} cx={x} cy={y} r={rad} fill="var(--fa)" />;
        return (
          <g key={i}>
            <circle
              cx={x}
              cy={y}
              r={rad - 0.5}
              fill="none"
              stroke="currentColor"
              className="text-foreground/40"
            />
            {i === whole && part > 0 && (
              <circle cx={x} cy={y} r={rad} fill="var(--fa)" clipPath="url(#life-figure-part)" />
            )}
          </g>
        );
      })}
    </svg>
  );
}

function Why({
  title,
  max,
  band,
  hatchBelow,
  marker,
  ticks,
  unit,
  text,
}: NonNullable<LifeFigureData["why"]>) {
  const pct = (v: number) => `${(v / max) * 100}%`;
  return (
    <div className="mt-5 border-t border-border pt-4">
      <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
        {title}
      </p>
      <div className="relative h-2 bg-foreground/[0.06]" aria-hidden="true">
        {hatchBelow !== undefined && (
          <span
            className="absolute inset-y-0 left-0 bg-[repeating-linear-gradient(135deg,currentColor_0_1px,transparent_1px_5px)] text-foreground/35"
            style={{ width: pct(hatchBelow) }}
          />
        )}
        {band && (
          <span
            className="absolute inset-y-0 bg-[color-mix(in_srgb,var(--fa)_30%,transparent)]"
            style={{ left: pct(band[0]), width: pct(band[1] - band[0]) }}
          />
        )}
        <span
          className="absolute -inset-y-1.5 w-0.5 bg-[var(--fa)]"
          style={{ left: pct(marker) }}
        />
      </div>
      <div
        className="relative mt-1.5 h-4 font-mono text-[10px] text-muted-foreground"
        aria-hidden="true"
      >
        {ticks.map((t, i) => (
          <span
            key={t}
            className="absolute"
            style={
              i === ticks.length - 1
                ? { right: 0 }
                : { left: pct(t), transform: i === 0 ? undefined : "translateX(-50%)" }
            }
          >
            {t}
            {unit}
          </span>
        ))}
      </div>
      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{text}</p>
    </div>
  );
}

/**
 * The same daily time in every unit people search for: a day, a week, a
 * month, a year and the whole span, in hours and minutes. It sits in the
 * text column, right before the article body.
 */
export function PeriodTable({ data }: { data: LifeFigureData }) {
  const { perYear, years } = spanOf(data);
  const h = data.day.hours;
  const dayLabel = perYear === 365 ? "a day" : perYear === 180 ? "a school day" : "a working day";
  const hoursOf = (x: number) => (x < 10 ? x.toFixed(1).replace(/\.0$/, "") : fmtInt(x));
  const rows: [string, number][] = [
    [`Per ${dayLabel.replace(/^a /, "")}`, h],
    ["Per week", (h * perYear) / 52],
    ["Per month", (h * perYear) / 12],
    ["Per year", h * perYear],
  ];
  const total = h * perYear * years;
  return (
    <div className="mb-14">
      <table className="w-full border-collapse text-left">
        <caption className="mb-4 text-left font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          The same time, in every unit
        </caption>
        <thead>
          <tr className="border-b border-border font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            <th scope="col" className="py-2 pr-4 font-normal">
              Period
            </th>
            <th scope="col" className="py-2 pr-4 text-right font-normal">
              Hours
            </th>
            <th scope="col" className="py-2 text-right font-normal">
              Minutes
            </th>
          </tr>
        </thead>
        <tbody className="text-[15px]">
          {rows.map(([label, value]) => (
            <tr key={label} className="border-b border-border">
              <th scope="row" className="py-2.5 pr-4 font-normal text-foreground/85">
                {label}
              </th>
              <td className="py-2.5 pr-4 text-right font-mono text-sm tabular-nums text-foreground">
                {hoursOf(value)}
              </td>
              <td className="py-2.5 text-right font-mono text-sm tabular-nums text-foreground">
                {fmtInt(value * 60)}
              </td>
            </tr>
          ))}
          {years > 0 && (
            <tr className="border-b border-border">
              <th scope="row" className="py-2.5 pr-4 font-normal text-foreground/85">
                Over {years} years
              </th>
              <td
                colSpan={2}
                className="py-2.5 text-right font-mono text-sm tabular-nums text-foreground"
              >
                {total >= 10000 ? `≈${fmtInt(Math.round(total / 100) * 100)}` : fmtInt(total)} h ·{" "}
                {data.life.value}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
