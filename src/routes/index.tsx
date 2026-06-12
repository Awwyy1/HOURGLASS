import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ShareButton } from "../components/ShareCard";

export const Route = createFileRoute("/")({
  component: Index,
});

function formatNumber(n: number, digits = 1) {
  if (!isFinite(n)) return "—";
  return n.toLocaleString("en-US", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
}

function Index() {
  const [activity, setActivity] = useState("Scrolling");
  const [hoursPerDay, setHoursPerDay] = useState(2.5);
  const [years, setYears] = useState(10);

  const totalHours = useMemo(() => hoursPerDay * 365 * years, [hoursPerDay, years]);
  const totalDays = totalHours / 24;
  const totalWeeks = totalDays / 7;
  const wakingYears = totalHours / (16 * 365);

  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 pt-16 pb-24 text-center md:pt-28 md:pb-32">
        <p className="mb-10 text-[10px] uppercase tracking-[0.36em] text-muted-foreground">
          Volume I &nbsp;·&nbsp; A Calculator of Hours
        </p>
        <h1 className="font-serif text-[12vw] leading-[0.95] tracking-[-0.02em] md:text-[112px]">
          How many hours
          <br />
          <span className="italic text-muted-foreground">of your life,</span>
          <br />
          have you spent?
        </h1>
        <p className="mx-auto mt-10 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Pick something you do every day. Put in the hours. See where your years actually go.
        </p>
      </section>

      {/* Calculator */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="grid grid-cols-1 gap-16 border-t border-border pt-16 md:grid-cols-12">
          {/* Inputs */}
          <div className="md:col-span-5 md:border-r md:border-border md:pr-12">
            <p className="mb-10 text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
              I.&nbsp; The measurement
            </p>
            <div className="space-y-10">
              <Field label="The activity">
                <input
                  type="text"
                  value={activity}
                  onChange={(e) => setActivity(e.target.value)}
                  className="hairline font-serif text-2xl italic"
                />
              </Field>
              <Field label="Hours per day" suffix={`${formatNumber(hoursPerDay, 1)} h`}>
                <input
                  type="range"
                  min={0}
                  max={16}
                  step={0.1}
                  value={hoursPerDay}
                  onChange={(e) => setHoursPerDay(parseFloat(e.target.value))}
                  className="hourglass-range w-full"
                />
              </Field>
              <Field label="Over the span of" suffix={`${years} years`}>
                <input
                  type="range"
                  min={1}
                  max={60}
                  step={1}
                  value={years}
                  onChange={(e) => setYears(parseInt(e.target.value))}
                  className="hourglass-range w-full"
                />
              </Field>
            </div>
          </div>

          {/* Result */}
          <div className="md:col-span-7 md:pl-4">
            <p className="mb-10 text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
              II.&nbsp; The reckoning
            </p>
            <div className="flex items-baseline gap-4">
              <span className="font-mono text-[18vw] font-extralight leading-none tracking-[-0.04em] text-foreground md:text-[180px]">
                {formatNumber(totalDays, 1)}
              </span>
              <span className="font-serif text-2xl italic text-muted-foreground">days</span>
            </div>
            <p className="mt-8 max-w-md font-serif text-lg italic leading-relaxed text-muted-foreground">
              of your life, given to{" "}
              <span className="not-italic text-foreground">{activity.toLowerCase() || "—"}</span>.
            </p>
            <dl className="mt-14 grid grid-cols-3 gap-px overflow-hidden border border-border bg-border">
              <Stat label="Hours" value={formatNumber(totalHours, 0)} />
              <Stat label="Weeks" value={formatNumber(totalWeeks, 1)} />
              <Stat label="Waking years" value={formatNumber(wakingYears, 2)} />
            </dl>
            <ShareButton
                activity={activity}
                totalDays={totalDays}
                totalHours={totalHours}
                totalWeeks={totalWeeks}
                wakingYears={wakingYears}
              />
          </div>
        </div>
      </section>

      {/* Philosophy teaser */}
      <section className="mx-auto max-w-3xl border-t border-border px-6 py-24 text-center">
        <p className="mb-6 font-sans text-[10px] uppercase tracking-[0.36em] text-muted-foreground">
          An essay
        </p>
        <h2 className="mb-8 font-serif text-3xl italic tracking-tight text-foreground md:text-4xl">
          On the arithmetic of attention.
        </h2>
        <p className="mx-auto max-w-lg font-serif text-[17px] leading-[1.85] text-foreground/75">
          Nobody tracks their hours the way they track their money.
          The math is simple once you do it. The number is usually surprising.
        </p>
        <Link
          to="/philosophy"
          className="mt-10 inline-block text-[10px] uppercase tracking-[0.32em] text-foreground transition hover:text-muted-foreground"
        >
          Read the essay →
        </Link>
      </section>

      {/* Journal teaser */}
      <section className="mx-auto max-w-3xl border-t border-border px-6 py-24">
        <div className="flex items-start justify-between gap-8 flex-col sm:flex-row sm:items-center mb-14">
          <div>
            <p className="mb-3 font-sans text-[10px] uppercase tracking-[0.36em] text-muted-foreground">
              Journal
            </p>
            <h2 className="font-serif text-3xl italic tracking-tight text-foreground md:text-4xl">
              The long calculation.
            </h2>
          </div>
          <Link
            to="/journal"
            className="shrink-0 text-[10px] uppercase tracking-[0.32em] text-muted-foreground transition hover:text-foreground"
          >
            All articles →
          </Link>
        </div>
        <div className="divide-y divide-border">
          <div className="pb-8">
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">May 20, 2026</p>
            <Link to="/journal/how-much-time-do-you-spend-on-dating-apps" className="font-serif text-lg italic text-foreground transition hover:text-muted-foreground">
              How much time do you spend on dating apps? →
            </Link>
          </div>
          <div className="py-8">
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">May 14, 2026</p>
            <Link to="/journal/how-much-time-do-you-spend-using-ai" className="font-serif text-lg italic text-foreground transition hover:text-muted-foreground">
              How much time do you spend using AI? →
            </Link>
          </div>
          <div className="pt-8">
            <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">May 13, 2026</p>
            <Link to="/journal/how-much-of-your-life-do-you-spend-in-meetings" className="font-serif text-lg italic text-foreground transition hover:text-muted-foreground">
              How much of your life do you spend in meetings? →
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .hourglass-range {
          -webkit-appearance: none;
          appearance: none;
          height: 1px;
          background: var(--color-border);
          outline: none;
        }
        .hourglass-range::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 10px; height: 10px;
          border-radius: 9999px;
          background: var(--color-foreground);
          cursor: pointer;
          transition: transform 200ms ease, background 200ms ease;
        }
        .hourglass-range::-webkit-slider-thumb:hover { transform: scale(1.4); }
        .hourglass-range::-moz-range-thumb {
          width: 10px; height: 10px; border: 0;
          border-radius: 9999px; background: var(--color-foreground); cursor: pointer;
        }
      `}</style>
    </>
  );
}

function Field({ label, suffix, children }: { label: string; suffix?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <div className="mb-3 flex items-baseline justify-between">
        <span className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">{label}</span>
        {suffix && <span className="font-mono text-xs tracking-tight text-foreground">{suffix}</span>}
      </div>
      {children}
    </label>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-background p-5">
      <dt className="text-[9px] uppercase tracking-[0.32em] text-muted-foreground">{label}</dt>
      <dd className="mt-2 font-mono text-xl font-extralight tracking-tight text-foreground">{value}</dd>
    </div>
  );
}

