import { useEffect, useRef } from "react";

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
  answer: { value: string; unit: string; text: string };
  day: {
    /** Hours a day the habit takes. */
    hours: number;
    /** Clock hour the arc starts at, for habits that happen at a set time. */
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

export function LifeFigure({ data, accent = ["#3d4fa3", "#93a4ee"] }: Props) {
  const inner = useRef<HTMLDivElement>(null);

  // The panel can be taller than the window. Then it scrolls with the article
  // until its bottom edge is in view, and sticks there, so nothing is cut off.
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

  const { answer, day, toYear, year, toLife, life, why } = data;

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

        <div className="border border-border bg-background px-5 py-5 sm:px-6">
          <Side num="01" title="One day" value={day.value} text={day.text}>
            <Dial hours={day.hours} start={day.start ?? 0} />
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

          <Side num="03" title="One life" value={life.value} text={life.text} accent>
            <Years filled={life.years} total={life.total} />
          </Side>

          {why && <Why {...why} />}
        </div>
      </div>
    </aside>
  );
}

function StageTitle({ num, title }: { num: string; title: string }) {
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

/** A 24-hour dial, midnight at the top, with the habit's share as an arc. */
function Dial({ hours, start }: { hours: number; start: number }) {
  const c = 100;
  const r = 74;
  const w = 20;
  const point = (h: number, rad: number) => {
    const a = ((h / 24) * 360 - 90) * (Math.PI / 180);
    return [c + rad * Math.cos(a), c + rad * Math.sin(a)];
  };
  const end = start + Math.min(hours, 23.99);
  const [x0, y0] = point(start, r);
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
      {[
        [0, "00"],
        [6, "06"],
        [12, "12"],
        [18, "18"],
      ].map(([h, label]) => {
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
        {Number.isInteger(hours) ? hours : hours.toFixed(1)}h
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
