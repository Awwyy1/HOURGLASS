import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useState } from "react";
import { PageSEO } from "../components/PageSEO";

export const Route = createFileRoute("/weeks")({
  component: Weeks,
});

// ── Model ──────────────────────────────────────────────────────────────────

/** One row of the grid is one year of life, drawn as 52 weeks. */
const COLS = 52;
const MAX_HABITS = 6;
const STORAGE_KEY = "hourglass-weeks-v1";

/** Opacity of each habit's shade, in order. Lived weeks are solid ink. */
const TONES = [0.6, 0.42, 0.29, 0.2, 0.13, 0.08];

interface Habit {
  label: string;
  hours: number;
  /** Age at which the habit stops. Null means it runs for the rest of life. */
  until: number | null;
}

const DEFAULT_HABITS: Habit[] = [
  { label: "Sleep", hours: 8, until: null },
  { label: "Work", hours: 5.5, until: 65 },
  { label: "Phone", hours: 4, until: null },
  { label: "Chores", hours: 2.5, until: null },
];

interface Row {
  lived: number;
  habits: number[];
  free: number;
}

interface LifeModel {
  rows: Row[];
  lived: number;
  ahead: number;
  habitTotals: number[];
  free: number;
  /** True when the habits add up to more than 24 hours and were scaled down. */
  scaled: boolean;
}

/**
 * Lays a life out as rows of 52 weeks. Rows before the current year are fully
 * lived. Every row after that is divided between the habits that are still
 * running in that year, in proportion to their hours, and whatever the habits
 * do not claim is left over. Rounding uses the largest remainder so each row
 * still adds up to exactly 52.
 */
function buildModel(birth: Date, now: Date, lifespan: number, habits: Habit[]): LifeModel | null {
  const ageMs = now.getTime() - birth.getTime();
  if (!Number.isFinite(ageMs) || ageMs <= 0) return null;
  const age = ageMs / (365.2425 * 86_400_000);
  if (age >= lifespan) return null;

  const currentRow = Math.floor(age);
  const livedInCurrentRow = Math.min(COLS - 1, Math.floor((age - currentRow) * COLS));

  const totalHours = habits.reduce((sum, h) => sum + Math.max(0, h.hours || 0), 0);
  const scale = totalHours > 24 ? 24 / totalHours : 1;

  const rows: Row[] = [];
  const habitTotals = habits.map(() => 0);
  let lived = 0;
  let free = 0;

  for (let r = 0; r < lifespan; r++) {
    if (r < currentRow) {
      rows.push({ lived: COLS, habits: habits.map(() => 0), free: 0 });
      lived += COLS;
      continue;
    }

    const livedHere = r === currentRow ? livedInCurrentRow : 0;
    lived += livedHere;
    const available = COLS - livedHere;

    const shares = habits.map((h) =>
      h.until === null || r < h.until ? (Math.max(0, h.hours || 0) / 24) * scale : 0,
    );
    const shareSum = shares.reduce((a, b) => a + b, 0);
    const target = Math.min(available, Math.round(available * shareSum));
    const raw = shares.map((s) => available * s);
    const counts = raw.map(Math.floor);
    let extra = target - counts.reduce((a, b) => a + b, 0);
    const byRemainder = raw
      .map((v, i) => ({ i, rem: v - Math.floor(v) }))
      .sort((a, b) => b.rem - a.rem);
    for (const { i } of byRemainder) {
      if (extra <= 0) break;
      if (shares[i] > 0) {
        counts[i]++;
        extra--;
      }
    }

    const freeHere = available - counts.reduce((a, b) => a + b, 0);
    counts.forEach((c, i) => (habitTotals[i] += c));
    free += freeHere;
    rows.push({ lived: livedHere, habits: counts, free: freeHere });
  }

  return {
    rows,
    lived,
    ahead: lifespan * COLS - lived,
    habitTotals,
    free,
    scaled: scale < 1,
  };
}

// ── Helpers ────────────────────────────────────────────────────────────────

const fmt = (n: number) => Math.round(n).toLocaleString("en-US");
const years = (weeks: number) =>
  (weeks / COLS).toLocaleString("en-US", { minimumFractionDigits: 1, maximumFractionDigits: 1 });

function isoDate(d: Date) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function defaultBirth() {
  const d = new Date();
  d.setFullYear(d.getFullYear() - 30);
  return isoDate(d);
}

interface Saved {
  name: string;
  birth: string;
  lifespan: number;
  habits: Habit[];
}

function loadSaved(): Saved | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const s = JSON.parse(raw) as Saved;
    if (!Array.isArray(s.habits) || typeof s.lifespan !== "number") return null;
    return s;
  } catch {
    return null;
  }
}

// ── Poster ─────────────────────────────────────────────────────────────────

const PAPER = "#f5f0eb";
const INK = "#0a0a0a";
const MUTED = "#8a8480";
const RULE = "#c8c2bb";

/**
 * Draws a print-ready 2:3 poster (2400 x 3600 px, 8 x 12 in at 300 dpi) on a
 * fixed paper palette, independent of the site's light or dark theme.
 */
async function drawPoster(model: LifeModel, habits: Habit[], name: string): Promise<Blob> {
  await document.fonts.ready;
  try {
    await Promise.all([
      document.fonts.load('italic 400 140px "Playfair Display"'),
      document.fonts.load('300 36px "Inter"'),
      document.fonts.load('300 30px "JetBrains Mono"'),
    ]);
  } catch {
    // fall back to whatever is loaded
  }

  const W = 2400;
  const H = 3600;
  const M = 180;
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d")!;

  ctx.fillStyle = PAPER;
  ctx.fillRect(0, 0, W, H);
  ctx.strokeStyle = INK;
  ctx.lineWidth = 3;
  ctx.strokeRect(60, 60, W - 120, H - 120);

  const text = (
    s: string,
    x: number,
    y: number,
    font: string,
    color: string,
    align: CanvasTextAlign = "left",
  ) => {
    ctx.font = font;
    ctx.fillStyle = color;
    ctx.textAlign = align;
    ctx.fillText(s, x, y);
  };
  const rule = (y: number) => {
    ctx.strokeStyle = RULE;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(M, y);
    ctx.lineTo(W - M, y);
    ctx.stroke();
  };

  // Masthead
  const now = new Date();
  const stamp = `${String(now.getDate()).padStart(2, "0")}.${String(now.getMonth() + 1).padStart(2, "0")}.${now.getFullYear()}`;
  text("HOURGLASS.", M, 220, 'italic 400 72px "Playfair Display"', INK);
  text(stamp, W - M, 216, '300 34px "JetBrains Mono"', MUTED, "right");
  rule(270);

  // Title
  const who = name.trim();
  const title = who ? `${who}'s life, in weeks.` : "A life, in weeks.";
  let size = 140;
  ctx.font = `italic 400 ${size}px "Playfair Display"`;
  while (ctx.measureText(title).width > W - 2 * M && size > 70) {
    size -= 6;
    ctx.font = `italic 400 ${size}px "Playfair Display"`;
  }
  text(title, W / 2, 470, `italic 400 ${size}px "Playfair Display"`, INK, "center");
  text(
    `Each box is one week. ${fmt(model.lived)} lived, ${fmt(model.ahead)} to come.`,
    W / 2,
    560,
    '300 38px "Inter", sans-serif',
    MUTED,
    "center",
  );

  // The legend is anchored to the footer, and the grid takes whatever height
  // is left, so a short legend gives the grid more room instead of a gap.
  const items: { label: string; weeks: number; kind: "lived" | "free" | number }[] = [
    { label: "Lived", weeks: model.lived, kind: "lived" },
    ...habits.map((h, i) => ({ label: h.label || "Untitled", weeks: model.habitTotals[i], kind: i })),
    { label: "Left over", weeks: model.free, kind: "free" },
  ];
  const perCol = Math.ceil(items.length / 2);
  const legendRowH = 78;
  const legendFirstY = H - 300 - (perCol - 1) * legendRowH;
  const legendRuleY = legendFirstY - 90;

  // Grid
  const labelW = 90;
  const gridTop = 660;
  const gridBottom = legendRuleY - 70;
  const pitch = Math.min((W - 2 * M - labelW) / COLS, (gridBottom - gridTop) / model.rows.length);
  const cell = pitch * 0.78;
  const gridW = COLS * pitch;
  const x0 = (W - (labelW + gridW)) / 2 + labelW;

  model.rows.forEach((row, r) => {
    const y = gridTop + r * pitch;
    if (r % 10 === 0) {
      ctx.textBaseline = "top";
      text(String(r), x0 - 22, y - 2, '300 24px "JetBrains Mono"', MUTED, "right");
      ctx.textBaseline = "alphabetic";
    }
    let c = 0;
    const fill = (n: number, alpha: number) => {
      ctx.globalAlpha = alpha;
      ctx.fillStyle = INK;
      for (let k = 0; k < n; k++, c++) ctx.fillRect(x0 + c * pitch, y, cell, cell);
      ctx.globalAlpha = 1;
    };
    fill(row.lived, 1);
    row.habits.forEach((n, i) => fill(n, TONES[i] ?? 0.08));
    ctx.strokeStyle = INK;
    ctx.globalAlpha = 0.4;
    ctx.lineWidth = 2;
    for (let k = 0; k < row.free; k++, c++) {
      ctx.strokeRect(x0 + c * pitch + 1, y + 1, cell - 2, cell - 2);
    }
    ctx.globalAlpha = 1;
  });

  // Legend
  rule(legendRuleY);
  const colW = (W - 2 * M) / 2;
  items.forEach((it, i) => {
    const col = i < perCol ? 0 : 1;
    const row = i % perCol;
    const x = M + col * colW;
    const y = legendFirstY + row * legendRowH;
    const sw = 36;
    if (it.kind === "free") {
      ctx.globalAlpha = 0.4;
      ctx.strokeStyle = INK;
      ctx.lineWidth = 2;
      ctx.strokeRect(x + 1, y - sw + 5, sw - 2, sw - 2);
      ctx.globalAlpha = 1;
    } else {
      ctx.globalAlpha = it.kind === "lived" ? 1 : (TONES[it.kind] ?? 0.08);
      ctx.fillStyle = INK;
      ctx.fillRect(x, y - sw + 4, sw, sw);
      ctx.globalAlpha = 1;
    }
    text(it.label, x + sw + 24, y, '300 36px "Inter", sans-serif', INK);
    text(
      `${fmt(it.weeks)} wk · ${years(it.weeks)} yr`,
      x + colW - 40,
      y,
      '300 30px "JetBrains Mono"',
      MUTED,
      "right",
    );
  });

  // Footer
  rule(H - 210);
  text("justhourglass.me/weeks", M, H - 130, '300 34px "Inter", sans-serif', MUTED);
  text("Where the weeks go.", W - M, H - 128, 'italic 400 42px "Playfair Display"', INK, "right");

  return new Promise((resolve, reject) => {
    canvas.toBlob((b) => (b ? resolve(b) : reject(new Error("toBlob failed"))), "image/png");
  });
}

// ── Page ───────────────────────────────────────────────────────────────────

function Weeks() {
  const [name, setName] = useState("");
  const [birth, setBirth] = useState(defaultBirth);
  // Kept as typed text so the field can be cleared and retyped; the model uses
  // the parsed, clamped value.
  const [lifespanInput, setLifespanInput] = useState("80");
  const parsedLifespan = parseInt(lifespanInput, 10);
  const lifespan = Number.isFinite(parsedLifespan) ? Math.min(110, Math.max(30, parsedLifespan)) : 80;
  const [habits, setHabits] = useState<Habit[]>(DEFAULT_HABITS);
  const [loaded, setLoaded] = useState(false);
  const [posterState, setPosterState] = useState<"idle" | "working" | "error">("idle");

  // Restore a previous visit's inputs. Browser storage can be unavailable,
  // in which case the defaults simply stay.
  useEffect(() => {
    const s = loadSaved();
    if (s) {
      setName(s.name ?? "");
      if (s.birth) setBirth(s.birth);
      setLifespanInput(String(s.lifespan));
      setHabits(s.habits.slice(0, MAX_HABITS));
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ name, birth, lifespan, habits }));
    } catch {
      // storage is a convenience only
    }
  }, [loaded, name, birth, lifespan, habits]);

  const model = useMemo(
    () => buildModel(new Date(birth), new Date(), lifespan, habits),
    [birth, lifespan, habits],
  );

  const totalHours = habits.reduce((s, h) => s + Math.max(0, h.hours || 0), 0);

  const updateHabit = (i: number, patch: Partial<Habit>) =>
    setHabits((hs) => hs.map((h, j) => (j === i ? { ...h, ...patch } : h)));
  const removeHabit = (i: number) => setHabits((hs) => hs.filter((_, j) => j !== i));
  const addHabit = () =>
    setHabits((hs) => (hs.length >= MAX_HABITS ? hs : [...hs, { label: "", hours: 1, until: null }]));

  const download = useCallback(async () => {
    if (!model) return;
    setPosterState("working");
    try {
      const blob = await drawPoster(model, habits, name);
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "hourglass-life-in-weeks.png";
      a.click();
      setTimeout(() => URL.revokeObjectURL(url), 2000);
      setPosterState("idle");
    } catch {
      setPosterState("error");
    }
  }, [model, habits, name]);

  return (
    <>
      <PageSEO
        title="Your life in weeks"
        description="See a whole life as a grid of weeks: the ones already lived, the ones your habits will take, and the ones left over. Free, private, and it runs in your browser."
      />

      <section className="mx-auto max-w-5xl px-6 pt-16 pb-20 text-center md:pt-24">
        <p className="mb-10 text-[10px] uppercase tracking-[0.36em] text-muted-foreground">
          Volume II &nbsp;·&nbsp; A Life in Weeks
        </p>
        <h1 className="font-serif text-[12vw] leading-[0.95] tracking-[-0.02em] md:text-[104px]">
          Your life,
          <br />
          <span className="italic text-muted-foreground">in weeks.</span>
        </h1>
        <p className="mx-auto mt-10 max-w-xl font-serif text-[17px] leading-relaxed text-muted-foreground">
          Every box is one week. The filled ones are behind you. The rest are shaded by
          the habits you already have, carried forward, and the empty ones are what is
          left over.
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-16">
        <div className="grid grid-cols-1 gap-16 border-t border-border pt-16 md:grid-cols-12">
          {/* Inputs */}
          <div className="md:col-span-6 md:border-r md:border-border md:pr-12">
            <p className="mb-10 text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
              I.&nbsp; The particulars
            </p>
            <div className="space-y-10">
              <div className="grid grid-cols-2 gap-8">
                <Field label="Born">
                  <input
                    type="date"
                    value={birth}
                    max={isoDate(new Date())}
                    onChange={(e) => setBirth(e.target.value)}
                    className="hairline font-mono text-base"
                  />
                </Field>
                <Field label="Expected lifespan">
                  <input
                    type="number"
                    inputMode="numeric"
                    min={30}
                    max={110}
                    value={lifespanInput}
                    onChange={(e) => setLifespanInput(e.target.value)}
                    className="hairline font-mono text-base"
                  />
                </Field>
              </div>

              <div>
                <div className="mb-4 grid grid-cols-[1fr_4.25rem_4.25rem_1.25rem] items-end gap-3 text-[9px] uppercase tracking-[0.24em] text-muted-foreground">
                  <span>Habit</span>
                  <span>Hours / day</span>
                  <span>Until age</span>
                  <span />
                </div>
                <div className="space-y-4">
                  {habits.map((h, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-[1fr_4.25rem_4.25rem_1.25rem] items-center gap-3"
                    >
                      <div className="flex items-center gap-3">
                        <span
                          aria-hidden="true"
                          className="inline-block h-3 w-3 shrink-0 bg-foreground"
                          style={{ opacity: TONES[i] ?? 0.08 }}
                        />
                        <input
                          type="text"
                          value={h.label}
                          maxLength={28}
                          placeholder="A habit"
                          aria-label={`Habit ${i + 1} name`}
                          onChange={(e) => updateHabit(i, { label: e.target.value })}
                          className="hairline font-serif text-lg italic"
                        />
                      </div>
                      <input
                        type="number"
                        inputMode="decimal"
                        min={0}
                        max={24}
                        step={0.5}
                        value={h.hours}
                        aria-label={`${h.label || "Habit"} hours per day`}
                        onChange={(e) => {
                          const v = parseFloat(e.target.value);
                          updateHabit(i, { hours: Number.isFinite(v) ? Math.min(24, Math.max(0, v)) : 0 });
                        }}
                        className="hairline font-mono text-base"
                      />
                      <input
                        type="number"
                        inputMode="numeric"
                        min={1}
                        max={110}
                        placeholder="life"
                        value={h.until ?? ""}
                        aria-label={`${h.label || "Habit"} continues until age`}
                        onChange={(e) => {
                          const v = parseInt(e.target.value, 10);
                          updateHabit(i, { until: Number.isFinite(v) ? v : null });
                        }}
                        className="hairline font-mono text-base"
                      />
                      <button
                        type="button"
                        onClick={() => removeHabit(i)}
                        aria-label={`Remove ${h.label || "habit"}`}
                        className="text-muted-foreground transition hover:text-foreground"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex items-baseline justify-between">
                  <button
                    type="button"
                    onClick={addHabit}
                    disabled={habits.length >= MAX_HABITS}
                    className="text-[10px] uppercase tracking-[0.32em] text-foreground transition hover:text-muted-foreground disabled:opacity-30"
                  >
                    + Add a habit
                  </button>
                  <span
                    className={`font-mono text-xs ${totalHours > 24 ? "text-foreground" : "text-muted-foreground"}`}
                  >
                    {totalHours.toLocaleString("en-US", { maximumFractionDigits: 1 })} of 24 h
                  </span>
                </div>
                {model?.scaled && (
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    These add up to more than a day, so each has been scaled down to fit 24 hours.
                  </p>
                )}
              </div>

              <Field label="Name on the poster (optional)">
                <input
                  type="text"
                  value={name}
                  maxLength={32}
                  placeholder="Anna"
                  onChange={(e) => setName(e.target.value)}
                  className="hairline font-serif text-lg italic"
                />
              </Field>

              <p className="text-xs leading-relaxed text-muted-foreground">
                Hours are averaged across the whole week. Nothing you enter leaves your browser.
              </p>
            </div>
          </div>

          {/* Result */}
          <div className="md:col-span-6 md:pl-4">
            <p className="mb-10 text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
              II.&nbsp; The reckoning
            </p>
            {model ? (
              <>
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-[18vw] font-extralight leading-none tracking-[-0.04em] text-foreground md:text-[128px]">
                    {fmt(model.free)}
                  </span>
                  <span className="font-serif text-2xl italic text-muted-foreground">weeks</span>
                </div>
                <p className="mt-6 max-w-md font-serif text-lg italic leading-relaxed text-muted-foreground">
                  left over, once the habits on the left have taken their share of what is ahead.
                  That is about{" "}
                  <span className="not-italic text-foreground">{years(model.free)} years</span>.
                </p>
                <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden border border-border bg-border">
                  <Stat label="Weeks lived" value={fmt(model.lived)} />
                  <Stat label="Weeks ahead" value={fmt(model.ahead)} />
                  <Stat label="Spoken for" value={fmt(model.ahead - model.free)} />
                  <Stat label="Left over" value={fmt(model.free)} />
                </dl>
              </>
            ) : (
              <p className="font-serif text-lg italic leading-relaxed text-muted-foreground">
                Enter a birth date in the past and a lifespan longer than your age so far.
              </p>
            )}
          </div>
        </div>
      </section>

      {model && (
        <section className="mx-auto max-w-5xl px-6 pb-24">
          <div className="border-t border-border pt-16">
            <p className="mb-10 text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
              III.&nbsp; The whole of it
            </p>
            <div className="mx-auto max-w-[680px]">
              <WeeksGrid model={model} />
              <Legend model={model} habits={habits} />
              <div className="mt-12 flex flex-col items-start gap-3 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="button"
                  onClick={download}
                  disabled={posterState === "working"}
                  className="border border-foreground bg-foreground px-6 py-3 text-[10px] uppercase tracking-[0.32em] text-background transition hover:bg-transparent hover:text-foreground disabled:opacity-40"
                >
                  {posterState === "working" ? "Preparing the poster..." : "Download the poster"}
                </button>
                <span className="text-xs text-muted-foreground">
                  {posterState === "error"
                    ? "The poster could not be drawn. Please try again."
                    : "Print-ready, 2400 × 3600 px. Free."}
                </span>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-3xl border-t border-border px-6 py-20 text-center">
        <p className="mx-auto max-w-lg font-serif text-[17px] leading-[1.85] text-foreground/75">
          The figures behind the default habits come from the journal, where each one is
          worked through with its sources.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          <Link
            to="/journal/how-much-of-your-life-do-you-spend-sleeping"
            className="text-[10px] uppercase tracking-[0.32em] text-foreground transition hover:text-muted-foreground"
          >
            Sleep →
          </Link>
          <Link
            to="/journal/how-much-of-your-life-do-you-spend-working"
            className="text-[10px] uppercase tracking-[0.32em] text-foreground transition hover:text-muted-foreground"
          >
            Work →
          </Link>
          <Link
            to="/journal/how-much-time-do-you-spend-on-your-phone"
            className="text-[10px] uppercase tracking-[0.32em] text-foreground transition hover:text-muted-foreground"
          >
            Phone →
          </Link>
          <Link
            to="/journal/how-much-time-do-you-spend-on-household-chores"
            className="text-[10px] uppercase tracking-[0.32em] text-foreground transition hover:text-muted-foreground"
          >
            Chores →
          </Link>
        </div>
      </section>
    </>
  );
}

// ── Grid ───────────────────────────────────────────────────────────────────

/**
 * The on-screen grid. Each category is a single SVG path rather than
 * thousands of separate rectangles, and colours come from currentColor so the
 * grid follows the site's light and dark themes.
 */
function WeeksGrid({ model }: { model: LifeModel }) {
  const pitch = 12;
  const size = 10;
  const labelW = 26;
  const width = labelW + COLS * pitch;
  const height = model.rows.length * pitch;

  const paths = useMemo(() => {
    let lived = "";
    let free = "";
    const habitPaths: string[] = [];
    model.rows.forEach((row, r) => {
      const y = r * pitch;
      let c = 0;
      for (let k = 0; k < row.lived; k++, c++) {
        lived += `M${labelW + c * pitch} ${y}h${size}v${size}h-${size}z`;
      }
      row.habits.forEach((n, i) => {
        for (let k = 0; k < n; k++, c++) {
          habitPaths[i] = (habitPaths[i] ?? "") + `M${labelW + c * pitch} ${y}h${size}v${size}h-${size}z`;
        }
      });
      for (let k = 0; k < row.free; k++, c++) {
        free += `M${labelW + c * pitch + 0.5} ${y + 0.5}h${size - 1}v${size - 1}h-${size - 1}z`;
      }
    });
    return { lived, free, habitPaths };
  }, [model]);

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="block h-auto w-full text-foreground"
      role="img"
      aria-label={`A grid of ${fmt(model.lived + model.ahead)} weeks: ${fmt(model.lived)} lived, ${fmt(model.ahead - model.free)} taken by habits, ${fmt(model.free)} left over.`}
    >
      {model.rows.map((_, r) =>
        r % 10 === 0 ? (
          <text
            key={r}
            x={labelW - 6}
            y={r * pitch + size - 1}
            textAnchor="end"
            className="fill-muted-foreground font-mono"
            fontSize={8}
          >
            {r}
          </text>
        ) : null,
      )}
      <path d={paths.lived} fill="currentColor" />
      {paths.habitPaths.map((d, i) =>
        d ? <path key={i} d={d} fill="currentColor" fillOpacity={TONES[i] ?? 0.08} /> : null,
      )}
      <path
        d={paths.free}
        fill="none"
        stroke="currentColor"
        strokeOpacity={0.4}
        strokeWidth={1}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

function Legend({ model, habits }: { model: LifeModel; habits: Habit[] }) {
  const rows = [
    { label: "Lived", weeks: model.lived, swatch: <span className="inline-block h-3 w-3 bg-foreground" /> },
    ...habits.map((h, i) => ({
      label: h.label || "Untitled",
      weeks: model.habitTotals[i],
      swatch: (
        <span className="inline-block h-3 w-3 bg-foreground" style={{ opacity: TONES[i] ?? 0.08 }} />
      ),
    })),
    {
      label: "Left over",
      weeks: model.free,
      swatch: <span className="inline-block h-3 w-3 border border-foreground/40" />,
    },
  ];
  return (
    <dl className="mt-10 grid grid-cols-1 gap-x-10 gap-y-3 sm:grid-cols-2">
      {rows.map((r) => (
        <div key={r.label} className="flex items-baseline justify-between gap-4 border-b border-border pb-2">
          <dt className="flex items-center gap-3 text-sm text-foreground">
            {r.swatch}
            {r.label}
          </dt>
          <dd className="font-mono text-xs tabular-nums text-muted-foreground">
            {fmt(r.weeks)} wk · {years(r.weeks)} yr
          </dd>
        </div>
      ))}
    </dl>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-3 block text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
        {label}
      </span>
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
