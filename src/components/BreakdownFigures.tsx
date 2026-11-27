/**
 * Figures for the articles that are not about one daily habit: a funnel
 * from a whole life down to the part that is yours, a line of milestones,
 * and a grid of units (Saturdays, vacation days) split into parts. They go
 * inside a FigurePanel, which supplies the short answer and the layout.
 */
import { StageTitle } from "./LifeFigure";

export type Tone = "accent" | "mid" | "faint" | "outline";

const FILL: Record<Tone, string> = {
  accent: "var(--fa)",
  mid: "color-mix(in srgb, var(--fa) 40%, transparent)",
  faint: "color-mix(in srgb, currentColor 12%, transparent)",
  outline: "transparent",
};

function Swatch({ tone }: { tone: Tone }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block h-2.5 w-2.5 shrink-0 ${tone === "outline" ? "border border-foreground/40" : ""}`}
      style={{ background: FILL[tone] }}
    />
  );
}

/** Bars that shrink step by step, each labelled with what was taken off. */
export function Funnel({
  num,
  title,
  steps,
  text,
}: {
  num: string;
  title: string;
  steps: { value: number; display: string; label: string; minus?: string; accent?: boolean }[];
  text?: string;
}) {
  const top = steps[0].value;
  return (
    <div>
      <StageTitle num={num} title={title} />
      <ol className="mt-3 space-y-1">
        {steps.map((s, i) => (
          <li key={i}>
            {s.minus && (
              <p className="my-1.5 ml-3 border-l border-dashed border-[var(--fa)] pl-4 font-serif text-sm italic text-muted-foreground">
                {s.minus}
              </p>
            )}
            <div className="flex items-baseline justify-between gap-3">
              <span
                className={`font-mono text-xl tracking-tight ${s.accent ? "font-normal text-[var(--fa)]" : "font-light text-foreground"}`}
              >
                {s.display}
              </span>
              <span className="text-right text-[13px] leading-snug text-muted-foreground">
                {s.label}
              </span>
            </div>
            <div className="mt-1.5 h-3 bg-foreground/[0.06]" aria-hidden="true">
              <div
                className="h-full"
                style={{
                  width: `${(s.value / top) * 100}%`,
                  background: s.accent ? FILL.accent : FILL.mid,
                }}
              />
            </div>
          </li>
        ))}
      </ol>
      {text && <p className="mt-3 text-[13px] leading-normal text-muted-foreground">{text}</p>}
    </div>
  );
}

/** A horizontal line of a life with marked moments. */
export function Milestones({
  num,
  title,
  max,
  marks,
  text,
}: {
  num: string;
  title: string;
  max: number;
  marks: { at: number; top: string; bottom: string }[];
  text?: string;
}) {
  return (
    <div>
      <StageTitle num={num} title={title} />
      <div className="relative mx-2 mt-12 mb-12 h-0.5 bg-foreground/15" aria-hidden="true">
        {marks.map((m, i) => {
          const left = `${(m.at / max) * 100}%`;
          const align =
            i === 0
              ? "translate-x-0"
              : i === marks.length - 1
                ? "-translate-x-full"
                : "-translate-x-1/2";
          const up = i % 2 === 0;
          return (
            <div key={i} className="absolute top-0" style={{ left }}>
              <span className="absolute -top-[5px] -left-[5px] h-3 w-3 rounded-full border-2 border-background bg-[var(--fa)]" />
              <span
                className={`absolute whitespace-nowrap font-mono text-[11px] text-foreground ${align} ${up ? "-top-9" : "top-3"}`}
              >
                {m.top}
                <span className="block text-[10px] text-muted-foreground">{m.bottom}</span>
              </span>
            </div>
          );
        })}
      </div>
      <ul className="sr-only">
        {marks.map((m, i) => (
          <li key={i}>
            {m.top}: {m.bottom}
          </li>
        ))}
      </ul>
      {text && <p className="text-[13px] leading-normal text-muted-foreground">{text}</p>}
    </div>
  );
}

/**
 * A grid of units, rows by columns. In "sequence" mode the parts fill the
 * grid in reading order (Saturdays of a childhood). In "columns" mode every
 * row is split the same way by column; in "rows" mode every column is split
 * the same way by row (one column per year of a career, one row per day).
 */
export function UnitGrid({
  num,
  title,
  rows,
  cols,
  mode,
  parts,
  rowLabel,
  text,
}: {
  num: string;
  title: string;
  rows: number;
  cols: number;
  mode: "sequence" | "columns" | "rows";
  parts: { count: number; tone: Tone; label: string; display: string }[];
  /** Label every n-th row on the left, e.g. ages or career years. */
  rowLabel?: { every: number; first: number; suffix?: string };
  text?: string;
}) {
  const toneAt = (index: number) => {
    let n = index;
    for (const p of parts) {
      if (n < p.count) return p.tone;
      n -= p.count;
    }
    return "outline" as Tone;
  };
  const cell = 7;
  const gap = 2;
  const pitch = cell + gap;
  const labelW = rowLabel ? 22 : 0;
  return (
    <div>
      <StageTitle num={num} title={title} />
      <svg
        viewBox={`${-labelW} 0 ${cols * pitch + labelW} ${rows * pitch}`}
        className="mt-2 block h-auto w-full text-foreground"
        aria-hidden="true"
      >
        {Array.from({ length: rows }, (_, r) =>
          Array.from({ length: cols }, (_, c) => {
            const tone = toneAt(
              mode === "sequence" ? r * cols + c : mode === "columns" ? c : rows - 1 - r,
            );
            return (
              <rect
                key={`${r}-${c}`}
                x={c * pitch}
                y={r * pitch}
                width={cell}
                height={cell}
                rx={1}
                fill={FILL[tone]}
                stroke={tone === "outline" ? "currentColor" : "none"}
                strokeOpacity={0.3}
                strokeWidth={0.6}
              />
            );
          }),
        )}
        {rowLabel &&
          Array.from({ length: rows }, (_, r) =>
            r % rowLabel.every === 0 ? (
              <text
                key={r}
                x={-5}
                y={r * pitch + cell - 0.5}
                textAnchor="end"
                fontSize={7}
                className="fill-muted-foreground font-mono"
              >
                {rowLabel.first + r}
                {rowLabel.suffix ?? ""}
              </text>
            ) : null,
          )}
      </svg>
      <ul className="mt-4 space-y-2">
        {parts.map((p, i) => (
          <li key={i} className="flex items-center gap-2.5 text-[13px] text-muted-foreground">
            <Swatch tone={p.tone} />
            <span className="font-mono text-sm text-foreground">{p.display}</span>
            {p.label}
          </li>
        ))}
      </ul>
      {text && <p className="mt-3 text-[13px] leading-normal text-muted-foreground">{text}</p>}
    </div>
  );
}

/** Two or three numbers set against each other as bars. */
export function Compare({
  num,
  title,
  rows,
  text,
}: {
  num: string;
  title: string;
  rows: { label: string; value: number; display: string; accent?: boolean }[];
  text?: string;
}) {
  const max = Math.max(...rows.map((r) => r.value));
  return (
    <div>
      <StageTitle num={num} title={title} />
      <ul className="mt-3 space-y-3">
        {rows.map((r, i) => (
          <li key={i}>
            <div className="flex items-baseline justify-between gap-3">
              <span className="text-[13px] text-muted-foreground">{r.label}</span>
              <span
                className={`font-mono text-lg tracking-tight ${r.accent ? "text-[var(--fa)]" : "font-light text-foreground"}`}
              >
                {r.display}
              </span>
            </div>
            <div className="mt-1 h-2.5 bg-foreground/[0.06]" aria-hidden="true">
              <div
                className="h-full"
                style={{
                  width: `${(r.value / max) * 100}%`,
                  background: r.accent ? FILL.accent : FILL.mid,
                }}
              />
            </div>
          </li>
        ))}
      </ul>
      {text && <p className="mt-3 text-[13px] leading-normal text-muted-foreground">{text}</p>}
    </div>
  );
}
