/**
 * Share cards: a reader's own number drawn as an image for Instagram and
 * the like, in the site's paper-and-ink style. Two formats (a 4:5 post and
 * a 9:16 story) and two themes. Everything is drawn on a canvas in the
 * browser; nothing leaves the reader's device until they share it.
 */

export type CardFormat = "post" | "story";
export type CardTheme = "light" | "dark";

export interface CardData {
  /** Short name of the habit, e.g. "phone". Shown as "MY PHONE". */
  label: string;
  /** The headline number, already formatted, e.g. "15.5". */
  big: string;
  /** Unit under the number, e.g. "waking years". */
  unit: string;
  /** One sentence that gives the number its context. */
  sentence: string;
  /** Up to three small figures along the bottom: [value, label]. */
  stats: [string, string][];
  /** Optional row of circles, one per year, the habit's share filled. */
  dots?: { filled: number; total: number };
  /** Accent for the dots: [light theme, dark theme]. */
  accent?: [string, string];
}

const SIZES: Record<CardFormat, [number, number]> = { post: [1080, 1350], story: [1080, 1920] };

const PALETTE = {
  light: { bg: "#f5f0eb", ink: "#0a0a0a", muted: "#7d7670", rule: "#cfc8c0", empty: "#cfc8c0" },
  dark: { bg: "#0b0b0b", ink: "#ececec", muted: "#8f8a85", rule: "#2c2c2c", empty: "#3a3a3a" },
};

let fontsReady: Promise<void> | null = null;

/** Make sure the web fonts are usable on a canvas before the first draw. */
function loadFonts() {
  if (!fontsReady) {
    fontsReady = (async () => {
      try {
        await Promise.race([
          Promise.all([
            document.fonts.load('italic 400 64px "Playfair Display"'),
            document.fonts.load('200 200px "JetBrains Mono"'),
            document.fonts.load('300 40px "JetBrains Mono"'),
            document.fonts.load('400 24px "JetBrains Mono"'),
            document.fonts.load('400 24px "Inter"'),
          ]),
          new Promise((r) => setTimeout(r, 2500)),
        ]);
      } catch {
        // fall back to whatever is loaded
      }
    })();
  }
  return fontsReady;
}

function tracked(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, gap: number) {
  let cx = x;
  for (const ch of text) {
    ctx.fillText(ch, cx, y);
    cx += ctx.measureText(ch).width + gap;
  }
  return cx - gap - x;
}

function trackedWidth(ctx: CanvasRenderingContext2D, text: string, gap: number) {
  let w = 0;
  for (const ch of text) w += ctx.measureText(ch).width + gap;
  return w - gap;
}

function wrap(ctx: CanvasRenderingContext2D, text: string, max: number) {
  const words = text.split(" ");
  const lines: string[] = [];
  let line = "";
  for (const w of words) {
    const next = line ? `${line} ${w}` : w;
    if (ctx.measureText(next).width > max && line) {
      lines.push(line);
      line = w;
    } else line = next;
  }
  if (line) lines.push(line);
  return lines;
}

export async function drawCard(
  data: CardData,
  format: CardFormat,
  theme: CardTheme,
): Promise<Blob> {
  await loadFonts();
  const [W, H] = SIZES[format];
  const P = PALETTE[theme];
  const accent = (data.accent ?? ["#3d4fa3", "#93a4ee"])[theme === "light" ? 0 : 1];
  const story = format === "story";
  const PAD = 96;
  const inner = W - PAD * 2;

  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d")!;
  ctx.textBaseline = "alphabetic";

  ctx.fillStyle = P.bg;
  ctx.fillRect(0, 0, W, H);

  // Masthead
  const top = story ? 150 : 110;
  ctx.fillStyle = P.ink;
  ctx.font = 'italic 400 40px "Playfair Display", Georgia, serif';
  ctx.textAlign = "left";
  ctx.fillText("HOURGLASS.", PAD, top);
  const now = new Date();
  const stamp = `${String(now.getDate()).padStart(2, "0")}.${String(now.getMonth() + 1).padStart(2, "0")}.${now.getFullYear()}`;
  ctx.font = '300 24px "JetBrains Mono", monospace';
  ctx.fillStyle = P.muted;
  ctx.textAlign = "right";
  ctx.fillText(stamp, W - PAD, top - 4);
  ctx.textAlign = "left";
  ctx.strokeStyle = P.rule;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(PAD, top + 40);
  ctx.lineTo(W - PAD, top + 40);
  ctx.stroke();

  // Eyebrow: a small accent square, then MY <LABEL>
  let y = top + (story ? 170 : 130);
  ctx.fillStyle = accent;
  ctx.fillRect(PAD, y - 18, 16, 16);
  ctx.font = '400 26px "JetBrains Mono", monospace';
  ctx.fillStyle = P.muted;
  tracked(ctx, `MY ${data.label.toUpperCase()}`, PAD + 34, y, 7);

  // The number, as large as the width allows
  let size = story ? 300 : 260;
  ctx.font = `200 ${size}px "JetBrains Mono", monospace`;
  while (ctx.measureText(data.big).width > inner && size > 90) {
    size -= 8;
    ctx.font = `200 ${size}px "JetBrains Mono", monospace`;
  }
  y += size * 0.86 + (story ? 50 : 30);
  ctx.fillStyle = P.ink;
  ctx.fillText(data.big, PAD - size * 0.04, y);

  // Leave room under the number for a comma's tail before the unit line.
  y += Math.max(story ? 92 : 80, size * 0.2 + 62);
  ctx.font = 'italic 400 64px "Playfair Display", Georgia, serif';
  ctx.fillStyle = P.ink;
  ctx.fillText(data.unit, PAD, y);

  y += story ? 78 : 66;
  ctx.font = 'italic 400 40px "Playfair Display", Georgia, serif';
  ctx.fillStyle = P.muted;
  for (const l of wrap(ctx, data.sentence, inner).slice(0, 2)) {
    ctx.fillText(l, PAD, y);
    y += 54;
  }

  // Bottom block, laid out from the bottom up: footer, then stats
  const footerY = H - (story ? 150 : 104);
  const ruleY = footerY - 64;
  const statsH = data.stats.length ? 150 : 0;
  const statsTop = ruleY - 40 - statsH;

  // Dots fill whatever room is left between the sentence and the stats
  if (data.dots && data.dots.total > 0) {
    const total = Math.min(120, Math.round(data.dots.total));
    const areaTop = y + (story ? 40 : 20);
    const areaH = statsTop - 40 - areaTop;
    // Pick the column count that gives the largest circles in the space left.
    let cols = 10;
    let cell = 0;
    for (let c = 8; c <= 20; c++) {
      const size = Math.min(inner / c, areaH / Math.ceil(total / c), story ? 84 : 80);
      if (size > cell) {
        cell = size;
        cols = c;
      }
    }
    const rows = Math.ceil(total / cols);
    if (cell > 14) {
      const r = cell * 0.36;
      const x0 = PAD + r;
      const y0 = areaTop + (areaH - cell * rows) / 2 + r;
      const filled = Math.max(0, Math.min(total, data.dots.filled));
      const whole = Math.floor(filled);
      const part = filled - whole;
      for (let i = 0; i < total; i++) {
        const cx = x0 + (i % cols) * cell;
        const cy = y0 + Math.floor(i / cols) * cell;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        if (i < whole) {
          ctx.fillStyle = accent;
          ctx.fill();
        } else {
          ctx.strokeStyle = P.empty;
          ctx.lineWidth = 2;
          ctx.stroke();
          if (i === whole && part > 0) {
            ctx.save();
            ctx.beginPath();
            ctx.rect(cx - r, cy - r, r * 2 * part, r * 2);
            ctx.clip();
            ctx.beginPath();
            ctx.arc(cx, cy, r, 0, Math.PI * 2);
            ctx.fillStyle = accent;
            ctx.fill();
            ctx.restore();
          }
        }
      }
    }
  }

  // Stats: up to three columns between hairlines
  if (data.stats.length) {
    const n = data.stats.length;
    const colW = inner / n;
    ctx.strokeStyle = P.rule;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(PAD, statsTop);
    ctx.lineTo(W - PAD, statsTop);
    ctx.stroke();
    data.stats.forEach(([value, label], i) => {
      const x = PAD + i * colW + (i ? 28 : 0);
      if (i) {
        ctx.beginPath();
        ctx.moveTo(PAD + i * colW, statsTop + 24);
        ctx.lineTo(PAD + i * colW, statsTop + statsH - 10);
        ctx.stroke();
      }
      let vs = 52;
      ctx.font = `300 ${vs}px "JetBrains Mono", monospace`;
      while (ctx.measureText(value).width > colW - 40 && vs > 26) {
        vs -= 2;
        ctx.font = `300 ${vs}px "JetBrains Mono", monospace`;
      }
      ctx.fillStyle = P.ink;
      ctx.fillText(value, x, statsTop + 86);
      ctx.font = '400 20px "JetBrains Mono", monospace';
      ctx.fillStyle = P.muted;
      let lab = label.toUpperCase();
      while (trackedWidth(ctx, lab, 4) > colW - 40 && lab.length > 4) lab = lab.slice(0, -2) + "…";
      tracked(ctx, lab, x, statsTop + 128, 4);
    });
  }

  // Footer
  ctx.strokeStyle = P.rule;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(PAD, ruleY);
  ctx.lineTo(W - PAD, ruleY);
  ctx.stroke();
  ctx.font = 'italic 400 36px "Playfair Display", Georgia, serif';
  ctx.fillStyle = P.ink;
  ctx.textAlign = "left";
  ctx.fillText("Work out yours", PAD, footerY);
  ctx.font = '400 26px "JetBrains Mono", monospace';
  ctx.fillStyle = P.muted;
  ctx.textAlign = "right";
  ctx.fillText("justhourglass.me", W - PAD, footerY - 2);
  ctx.textAlign = "left";

  return new Promise((resolve, reject) =>
    canvas.toBlob((b) => (b ? resolve(b) : reject(new Error("toBlob failed"))), "image/png"),
  );
}
