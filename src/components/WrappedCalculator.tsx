import { useState } from "react";
import { StageTitle } from "./LifeFigure";

/**
 * Turns a Spotify Wrapped total into a day, a share of waking time and a
 * lifetime, and places it against the article's benchmarks. Goes inside a
 * FigurePanel, which supplies the accent colour.
 */

export interface Benchmark {
  label: string;
  minutes: number;
}

interface Props {
  /** Days the Wrapped window covers (January 1 to mid-November). */
  windowDays: number;
  /** The average listener, used until the reader enters their own total. */
  average: number;
  benchmarks: Benchmark[];
}

const WAKING_MINUTES = 16 * 60;
const fmt = (n: number) => Math.round(n).toLocaleString("en-US");

function perDayLabel(mins: number) {
  if (mins < 60) return `${Math.round(mins)} min`;
  const h = Math.floor(mins / 60);
  const m = Math.round(mins % 60);
  return m ? `${h} h ${m} min` : `${h} h`;
}

export function WrappedCalculator({ windowDays, average, benchmarks }: Props) {
  const [input, setInput] = useState("");
  const typed = Number(input.replace(/[^\d]/g, ""));
  const own = input.trim() !== "" && Number.isFinite(typed) && typed > 0;
  const total = own ? Math.min(typed, 525_600) : average;

  const perDay = total / windowDays;
  const share = (perDay / WAKING_MINUTES) * 100;
  const times = total / average;
  const lifeYears = (perDay * 365 * 60) / 60 / 5840;
  const allMusic = Math.max(...benchmarks.map((b) => b.minutes));

  const verdict =
    total < average / 2
      ? "Lighter than the average Spotify listener."
      : total < 25_000
        ? "Close to normal for a Spotify listener."
        : total < allMusic
          ? "Well above the average Spotify listener, and still below what the average person hears across every format."
          : "More music than the average person hears from every source combined, all of it in one app.";

  const scaleMax = Math.max(100_000, total * 1.05);
  const pos = (m: number) => `${Math.min(100, (m / scaleMax) * 100)}%`;

  return (
    <div>
      <StageTitle num="01" title="Your Wrapped number" />
      <label className="mt-3 block">
        <span className="mb-2 block text-[13px] text-muted-foreground">Minutes listened</span>
        <input
          type="text"
          inputMode="numeric"
          autoComplete="off"
          placeholder={`e.g. ${fmt(24_500)}`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full border-0 border-b border-foreground bg-transparent px-0 pt-1 pb-2 font-mono text-2xl font-light text-foreground outline-none placeholder:text-muted-foreground/60 focus:border-b-2"
        />
      </label>
      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
        {own
          ? `${fmt(total)} minutes over the ${windowDays}-day Wrapped window.`
          : `Showing the average listener, ${fmt(average)} minutes. Type your own total.`}
      </p>

      <p className="mt-5 font-mono text-[40px] font-light leading-none tracking-[-0.03em] text-[var(--fa)]">
        {perDayLabel(perDay)}
      </p>
      <p className="mt-2 text-[13px] text-muted-foreground">a day, from January to mid-November</p>

      <dl className="mt-5 grid grid-cols-3 gap-px border border-border bg-border">
        {[
          ["Waking hours", `${share < 10 ? share.toFixed(1) : Math.round(share)}%`],
          ["Vs average", `${times < 10 ? times.toFixed(1) : Math.round(times)}×`],
          [
            "Over 60 years",
            lifeYears < 1 ? `${fmt(lifeYears * 365)} days` : `${lifeYears.toFixed(1)} yrs`,
          ],
        ].map(([k, v]) => (
          <div key={k} className="bg-background px-3 py-3">
            <dt className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
              {k}
            </dt>
            <dd className="mt-1 font-mono text-base text-foreground">{v}</dd>
          </div>
        ))}
      </dl>

      <div className="relative mt-8 mb-14 h-2 bg-foreground/[0.06]" aria-hidden="true">
        <div
          className="absolute inset-y-0 left-0 bg-[color-mix(in_srgb,var(--fa)_35%,transparent)]"
          style={{ width: pos(total) }}
        />
        {benchmarks.map((b, i) => (
          <div key={b.label} className="absolute top-0" style={{ left: pos(b.minutes) }}>
            <span className="absolute -top-1 h-4 w-px bg-foreground/50" />
            <span
              className={`absolute whitespace-nowrap font-mono text-[10px] text-muted-foreground ${i === benchmarks.length - 1 ? "-translate-x-1/2" : "-translate-x-1/2"} ${i % 2 ? "-top-6" : "top-4"}`}
            >
              {fmt(b.minutes / 1000)}k {b.label}
            </span>
          </div>
        ))}
        <div className="absolute top-0" style={{ left: pos(total) }}>
          <span className="absolute -top-1.5 -left-1.5 h-5 w-3 rounded-sm bg-[var(--fa)]" />
        </div>
      </div>

      <p className="text-[13px] leading-normal text-foreground/85">{verdict}</p>
    </div>
  );
}
