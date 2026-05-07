import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Liferate — How many hours of your life?" },
      {
        name: "description",
        content:
          "An editorial calculator that turns the small hours of your day into the long weeks of your life.",
      },
    ],
  }),
});

function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
  }, [theme]);
  return { theme, setTheme };
}

function formatNumber(n: number, digits = 1) {
  if (!isFinite(n)) return "—";
  return n.toLocaleString("en-US", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
}

function Index() {
  const { theme, setTheme } = useTheme();
  const [activity, setActivity] = useState("Scrolling");
  const [hoursPerDay, setHoursPerDay] = useState(2.5);
  const [years, setYears] = useState(10);

  const totalHours = useMemo(() => hoursPerDay * 365 * years, [hoursPerDay, years]);
  const totalDays = totalHours / 24;
  const totalWeeks = totalDays / 7;
  const wakingYears = totalHours / (16 * 365);

  const shareText = `${formatNumber(totalDays, 1)} days of my life — spent ${activity.toLowerCase()}.`;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
        <a href="/" className="font-serif text-sm normal-case tracking-normal text-foreground italic">
          Liferate<span className="text-muted-foreground">.</span>
        </a>
        <nav className="hidden items-center gap-10 md:flex">
          <a href="#philosophy" className="transition hover:text-foreground">Philosophy</a>
          <a href="#about" className="transition hover:text-foreground">About</a>
          <a href="#journal" className="transition hover:text-foreground">Journal</a>
        </nav>
        <div className="flex items-center gap-1 border border-border">
          <button
            onClick={() => setTheme("light")}
            aria-label="Light mode"
            className={`px-3 py-1.5 text-[10px] tracking-[0.28em] transition ${
              theme === "light" ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Light
          </button>
          <button
            onClick={() => setTheme("dark")}
            aria-label="Dark mode"
            className={`px-3 py-1.5 text-[10px] tracking-[0.28em] transition ${
              theme === "dark" ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Dark
          </button>
        </div>
      </header>

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
          A quiet inventory of the minutes we surrender, and the years they
          quietly become. Measure a habit. Read its true weight.
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
                  className="liferate-range w-full"
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
                  className="liferate-range w-full"
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

            <ShareCard activity={activity} text={shareText} />
          </div>
        </div>
      </section>

      {/* Editorial body */}
      <section
        id="philosophy"
        className="mx-auto max-w-3xl border-t border-border px-6 py-24 font-serif text-[17px] leading-[1.85] text-foreground/85"
      >
        <p className="mb-10 text-center font-sans text-[10px] uppercase tracking-[0.36em] text-muted-foreground">
          An essay
        </p>
        <h2 className="mb-12 text-center font-serif text-4xl italic tracking-tight md:text-5xl">
          On the arithmetic of attention.
        </h2>
        <p className="mb-6">
          We rarely keep accounts of the hours. They arrive in small denominations —
          a glance at a notification, a scroll before sleep, a queue endured — and
          we spend them as if they were free. They are not. The ledger is kept,
          quietly, by the years.
        </p>
        <p className="mb-6">
          <span className="font-serif text-3xl italic leading-none mr-2 float-left mt-1">L</span>
          iferate is not a productivity tool. It is a mirror. It takes a single
          unremarkable habit, multiplies it by the patience of time, and returns
          the figure that was always there. The number is rarely flattering. It
          is, however, accurate.
        </p>
        <p className="mb-6">
          Two and a half hours a day, for ten years, is more than a year of waking
          life. A short commute, repeated, becomes a long voyage to nowhere. The
          point is not to be ashamed of these numbers — most are unavoidable, some
          are even beloved — but to know them. To choose them.
        </p>
        <p className="text-muted-foreground">
          Spend deliberately. The hours are non-refundable.
        </p>
      </section>

      <footer className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-border px-6 py-10 text-[10px] uppercase tracking-[0.32em] text-muted-foreground md:flex-row">
        <span>© {new Date().getFullYear()} Liferate</span>
        <span className="font-serif text-xs italic normal-case tracking-normal">
          Set in Playfair Display & JetBrains Mono.
        </span>
        <span>Edition I</span>
      </footer>

      <style>{`
        .liferate-range {
          -webkit-appearance: none;
          appearance: none;
          height: 1px;
          background: var(--color-border);
          outline: none;
        }
        .liferate-range::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 10px; height: 10px;
          border-radius: 9999px;
          background: var(--color-foreground);
          cursor: pointer;
          transition: transform 200ms ease, background 200ms ease;
        }
        .liferate-range::-webkit-slider-thumb:hover { background: var(--highlight); transform: scale(1.4); }
        .liferate-range::-moz-range-thumb {
          width: 10px; height: 10px; border: 0;
          border-radius: 9999px; background: var(--color-foreground); cursor: pointer;
        }
      `}</style>
    </div>
  );
}

function Field({
  label,
  suffix,
  children,
}: {
  label: string;
  suffix?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <div className="mb-3 flex items-baseline justify-between">
        <span className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">{label}</span>
        {suffix && (
          <span className="font-mono text-xs tracking-tight text-foreground">{suffix}</span>
        )}
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

function ShareCard({ activity, text }: { activity: string; text: string }) {
  return (
    <aside className="mt-16 border border-border p-8">
      <div className="mb-6 flex items-center justify-between">
        <span className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
          Share — a postcard
        </span>
        <span className="font-mono text-[10px] text-muted-foreground">№ 001</span>
      </div>
      <p className="font-serif text-2xl italic leading-snug tracking-tight text-foreground">
        “{text}”
      </p>
      <div className="mt-8 flex items-center justify-between border-t border-border pt-5">
        <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
          {activity || "—"}
        </span>
        <button
          onClick={() => navigator.clipboard?.writeText(text)}
          className="text-[10px] uppercase tracking-[0.32em] text-foreground transition hover:text-[color:var(--highlight)]"
        >
          Copy →
        </button>
      </div>
    </aside>
  );
}
