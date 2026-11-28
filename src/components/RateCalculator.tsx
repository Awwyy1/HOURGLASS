import { useState } from "react";
import { StageTitle } from "./LifeFigure";
import { ShareCardButton } from "./ShareCardButton";

/**
 * "How often, and how long each time": turns a count per month and minutes
 * per occasion into hours a year and a lifetime in waking and full days.
 * Goes inside a FigurePanel, which supplies the accent colour.
 */

interface Props {
  num: string;
  title: string;
  /** e.g. "Calls a month". */
  countLabel: string;
  countDefault: number;
  /** e.g. "Minutes on hold each". */
  minutesLabel: string;
  minutesDefault: number;
  /** Years the lifetime row counts over. */
  years: number;
  /** e.g. "60 adult years". */
  yearsLabel: string;
  /** Share card: what follows "MY", the file name, the article link and accent. */
  share: { label: string; filename: string; link: string; accent?: [string, string] };
}

const fmt = (n: number) => Math.round(n).toLocaleString("en-US");

function NumberField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[13px] text-muted-foreground">{label}</span>
      <input
        type="text"
        inputMode="decimal"
        autoComplete="off"
        value={value}
        onChange={(e) => onChange(e.target.value.replace(/[^\d.]/g, "").slice(0, 5))}
        className="w-full border-0 border-b border-foreground bg-transparent px-0 pt-0.5 pb-1.5 font-mono text-2xl font-light text-foreground outline-none focus:border-b-2"
      />
    </label>
  );
}

export function RateCalculator({
  num,
  title,
  countLabel,
  countDefault,
  minutesLabel,
  minutesDefault,
  years,
  yearsLabel,
  share,
}: Props) {
  const [count, setCount] = useState(String(countDefault));
  const [minutes, setMinutes] = useState(String(minutesDefault));
  const c = Number(count) || 0;
  const m = Number(minutes) || 0;
  const changed = c !== countDefault || m !== minutesDefault;

  const yearHours = (c * m * 12) / 60;
  const lifeHours = yearHours * years;

  return (
    <div>
      <StageTitle num={num} title={title} />
      <div className="mt-3 grid grid-cols-2 gap-5">
        <NumberField label={countLabel} value={count} onChange={setCount} />
        <NumberField label={minutesLabel} value={minutes} onChange={setMinutes} />
      </div>

      <p className="mt-6 font-mono text-[40px] font-light leading-none tracking-[-0.03em] text-[var(--fa)]">
        {yearHours < 10 ? yearHours.toFixed(1) : fmt(yearHours)} h
      </p>
      <p className="mt-2 text-[13px] text-muted-foreground">a year</p>

      <dl className="mt-5 grid grid-cols-3 gap-px border border-border bg-border">
        {[
          [`Over ${years} yrs`, `${fmt(lifeHours)} h`],
          ["Waking days", fmt(lifeHours / 16)],
          ["Full days", fmt(lifeHours / 24)],
        ].map(([k, v]) => (
          <div key={k} className="bg-background px-3 py-3">
            <dt className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
              {k}
            </dt>
            <dd className="mt-1 font-mono text-base text-foreground">{v}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
        {changed ? (
          <>
            Over {yearsLabel}.{" "}
            <button
              type="button"
              onClick={() => {
                setCount(String(countDefault));
                setMinutes(String(minutesDefault));
              }}
              className="underline underline-offset-2 transition hover:text-foreground"
            >
              Back to average
            </button>
          </>
        ) : (
          `The defaults match the average. Change them to your own and the totals follow, over ${yearsLabel}.`
        )}
      </p>

      <ShareCardButton
        className="mt-4"
        filename={share.filename}
        link={share.link}
        card={{
          label: share.label,
          big: yearHours < 10 ? yearHours.toFixed(1) : fmt(yearHours),
          unit: "hours a year",
          sentence: `${fmt(c)} ${c === 1 ? "time" : "times"} a month, ${fmt(m)} minutes each.`,
          stats: [
            [`${fmt(lifeHours)} h`, `over ${years} years`],
            [fmt(lifeHours / 16), "waking days"],
            [fmt(lifeHours / 24), "full days"],
          ],
          accent: share.accent,
        }}
      />
    </div>
  );
}
