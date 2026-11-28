import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { StageTitle } from "./LifeFigure";
import { ShareCardButton } from "./ShareCardButton";
import { birthFromYear, isBirthYear, savedBirth } from "../lib/life";

/**
 * "How many hours do I have left?" for the hours-in-a-lifetime article.
 * Uses the article's own arithmetic: 79 years × 365 × 24 = 692,040 hours,
 * 16 waking hours a day, and the article's 150,000 to 175,000 genuinely free
 * hours spread over adult life from 18 to 79, about seven a day. Goes inside
 * a FigurePanel, which supplies the accent colour.
 */

const LIFESPAN = 79;
const TOTAL = LIFESPAN * 365 * 24;
/** Midpoint of 150,000–175,000 free hours over 61 adult years. */
const FREE_PER_DAY = 162_500 / (61 * 365);
const ADULT_FROM = 18;
const HOUR = 3_600_000;
const YEAR_HOURS = 365 * 24;

const fmt = (n: number) => Math.round(n).toLocaleString("en-US");

export function HoursLeftCalculator() {
  const defaultYear = new Date().getFullYear() - 30;
  const [yearInput, setYearInput] = useState(String(defaultYear));
  const [year, setYear] = useState(defaultYear);

  // Someone who has used /weeks before starts from their own year.
  useEffect(() => {
    const saved = savedBirth();
    const y = saved ? parseInt(saved.slice(0, 4), 10) : NaN;
    if (isBirthYear(y)) {
      setYearInput(String(y));
      setYear(y);
    }
  }, []);

  const onYear = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 4);
    setYearInput(digits);
    const y = parseInt(digits, 10);
    if (digits.length === 4 && isBirthYear(y)) setYear(y);
  };

  const lived = Math.max(
    0,
    Math.min(TOTAL, (Date.now() - new Date(birthFromYear(year)).getTime()) / HOUR),
  );
  const left = TOTAL - lived;
  const wakingLeft = (left * 16) / 24;
  const adultHoursPassed = Math.max(lived, ADULT_FROM * YEAR_HOURS);
  const freeLeft = Math.max(0, ((TOTAL - adultHoursPassed) / 24) * FREE_PER_DAY);
  const livedShare = (lived / TOTAL) * 100;

  return (
    <div>
      <StageTitle num="01" title="Your hours" />
      <label className="mt-3 flex flex-wrap items-baseline gap-3 font-serif text-lg italic text-muted-foreground">
        Born in
        <input
          type="text"
          inputMode="numeric"
          autoComplete="bday-year"
          maxLength={4}
          value={yearInput}
          onChange={(e) => onYear(e.target.value)}
          onBlur={() => setYearInput(String(year))}
          aria-label="Year of birth"
          className="w-[4.2ch] border-0 border-b border-foreground bg-transparent px-0 pt-0.5 pb-1 text-center font-mono text-2xl font-light not-italic text-foreground outline-none focus:border-b-2"
        />
      </label>

      <p className="mt-5 font-mono text-[40px] font-light leading-none tracking-[-0.03em] text-[var(--fa)]">
        {fmt(left)}
      </p>
      <p className="mt-2 text-[13px] text-muted-foreground">
        {left > 0
          ? `hours left of the ${fmt(TOTAL)} in a ${LIFESPAN}-year life`
          : `Past ${LIFESPAN}: every hour from here is beyond the average.`}
      </p>

      <div className="relative mt-5 h-2 bg-foreground/[0.06]" aria-hidden="true">
        <div
          className="absolute inset-y-0 left-0 bg-foreground/70"
          style={{ width: `${livedShare}%` }}
        />
        <div
          className="absolute inset-y-0 right-0 bg-[color-mix(in_srgb,var(--fa)_35%,transparent)]"
          style={{ width: `${100 - livedShare}%` }}
        />
      </div>
      <div className="mt-1.5 flex justify-between font-mono text-[10px] text-muted-foreground">
        <span>{Math.round(livedShare)}% lived</span>
        <span>age {LIFESPAN}</span>
      </div>

      <dl className="mt-5 grid grid-cols-3 gap-px border border-border bg-border">
        {[
          ["Lived", fmt(lived)],
          ["Waking left", fmt(wakingLeft)],
          ["Free left", `≈${fmt(Math.round(freeLeft / 1000) * 1000)}`],
        ].map(([k, v]) => (
          <div key={k} className="bg-background px-3 py-3">
            <dt className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
              {k}
            </dt>
            <dd className="mt-1 font-mono text-[15px] text-foreground">{v}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
        Waking hours are 16 a day. Free hours spread the article&apos;s 150,000 to 175,000 over
        adult life, about seven a day.{" "}
        <Link
          to="/weeks"
          search={{ born: year }}
          className="underline underline-offset-2 transition hover:text-foreground"
        >
          See them as weeks →
        </Link>
      </p>

      <ShareCardButton
        className="mt-4"
        filename="hourglass-hours-left"
        link="https://www.justhourglass.me/journal/how-many-hours-are-in-a-lifetime"
        card={{
          label: "hours",
          big: fmt(left),
          unit: "hours left",
          sentence: `Of the ${fmt(TOTAL)} in a ${LIFESPAN}-year life, born in ${year}.`,
          stats: [
            [`${Math.round(livedShare)}%`, "lived"],
            [fmt(wakingLeft), "waking left"],
            [`≈${fmt(Math.round(freeLeft / 1000) * 1000)}`, "free left"],
          ],
          dots: { filled: lived / YEAR_HOURS, total: LIFESPAN },
        }}
      />
    </div>
  );
}
