/**
 * The life-in-weeks model shared by the homepage hero and the /weeks page, so
 * both count a life the same way.
 */

/** One row of the grid is one year of life, drawn as 52 weeks. */
export const COLS = 52;

/** Opacity of each habit's shade, in order. Lived weeks are solid ink. */
export const TONES = [0.6, 0.42, 0.29, 0.2, 0.13, 0.08];

/** Where /weeks keeps a visitor's inputs between visits. */
export const STORAGE_KEY = "hourglass-weeks-v1";

export interface Habit {
  label: string;
  hours: number;
  /** Age at which the habit stops. Null means it runs for the rest of life. */
  until: number | null;
}

export interface Row {
  lived: number;
  habits: number[];
  free: number;
}

export interface LifeModel {
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
export function buildModel(
  birth: Date,
  now: Date,
  lifespan: number,
  habits: Habit[],
): LifeModel | null {
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

export const fmt = (n: number) => Math.round(n).toLocaleString("en-US");

export const years = (weeks: number) =>
  (weeks / COLS).toLocaleString("en-US", { minimumFractionDigits: 1, maximumFractionDigits: 1 });

export function isoDate(d: Date) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

/** The earliest birth year either page accepts. */
export const MIN_BIRTH_YEAR = 1900;

export function isBirthYear(y: number) {
  return Number.isInteger(y) && y >= MIN_BIRTH_YEAR && y <= new Date().getFullYear();
}

/**
 * When only a year is known, assume the middle of it, which is never more
 * than half a year out. Early in the current year, when July is still ahead,
 * fall back to January 1.
 */
export function birthFromYear(y: number) {
  const mid = `${y}-07-01`;
  return new Date(mid) <= new Date() ? mid : `${y}-01-01`;
}

/** The birth date saved on /weeks, if a visitor has been there before. */
export function savedBirth(): string | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const s = JSON.parse(raw) as { birth?: unknown };
    return typeof s.birth === "string" && /^\d{4}-\d{2}-\d{2}$/.test(s.birth) ? s.birth : null;
  } catch {
    return null;
  }
}
