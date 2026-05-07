import { useState, useCallback, useRef } from "react";

// ── Helpers ────────────────────────────────────────────────────────────────

function fmt(n: number, d = 1): string {
  if (!isFinite(n)) return "—";
  return n.toLocaleString("en-US", { minimumFractionDigits: d, maximumFractionDigits: d });
}

function line(ctx: CanvasRenderingContext2D, x1: number, y1: number, x2: number, y2: number) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

function tracked(
  ctx: CanvasRenderingContext2D,
  text: string,
  cx: number,
  y: number,
  gap: number,
  font: string,
  color: string,
) {
  ctx.save();
  ctx.font = font;
  ctx.fillStyle = color;
  ctx.textAlign = "left";
  const chars = [...text];
  const widths = chars.map((c) => ctx.measureText(c).width);
  const total = widths.reduce((a, w) => a + w, 0) + gap * (chars.length - 1);
  let x = cx - total / 2;
  chars.forEach((c, i) => {
    ctx.fillText(c, x, y);
    x += widths[i] + gap;
  });
  ctx.restore();
}

// ── Card generation ────────────────────────────────────────────────────────

interface CardData {
  activity: string;
  totalDays: number;
  totalHours: number;
  totalWeeks: number;
  wakingYears: number;
}

async function generateCardBlob(data: CardData): Promise<Blob> {
  await document.fonts.ready;
  try {
    await Promise.all([
      document.fonts.load('italic 400 44px "Playfair Display"'),
      document.fonts.load('italic 400 56px "Playfair Display"'),
      document.fonts.load('italic 400 50px "Playfair Display"'),
      document.fonts.load('200 240px "JetBrains Mono"'),
      document.fonts.load('200 50px "JetBrains Mono"'),
      document.fonts.load('300 22px "Inter"'),
    ]);
  } catch {
    // continue if fonts already loaded
  }

  const W = 1080;
  const H = 1350;
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d")!;

  const CREAM = "#f5f0eb";
  const INK = "#0a0a0a";
  const MUTED = "#8a8480";
  const RULE = "#c8c2bb";
  const PAD = 80;

  // Background
  ctx.fillStyle = CREAM;
  ctx.fillRect(0, 0, W, H);

  // Outer border
  ctx.strokeStyle = INK;
  ctx.lineWidth = 2;
  ctx.strokeRect(36, 36, W - 72, H - 72);

  // ── HOURGLASS. ─────────────────────────────────────────────────────────
  ctx.save();
  ctx.font = 'italic 400 44px "Playfair Display"';
  ctx.fillStyle = INK;
  ctx.textAlign = "center";
  ctx.fillText("HOURGLASS.", W / 2, 116);
  ctx.restore();

  tracked(ctx, "A CALCULATOR OF HOURS", W / 2, 168, 9, '300 21px "Inter", sans-serif', MUTED);

  ctx.save();
  ctx.strokeStyle = RULE;
  ctx.lineWidth = 1;
  line(ctx, PAD, 196, W - PAD, 196);
  ctx.restore();

  // ── Big number ─────────────────────────────────────────────────────────
  const daysStr = fmt(data.totalDays, 1);
  const numSize = daysStr.length <= 4 ? 240 : daysStr.length <= 6 ? 200 : 165;
  const numY = 490 + Math.round((240 - numSize) * 0.25);

  ctx.save();
  ctx.font = `200 ${numSize}px "JetBrains Mono"`;
  ctx.fillStyle = INK;
  ctx.textAlign = "center";
  ctx.fillText(daysStr, W / 2, numY);
  ctx.restore();

  ctx.save();
  ctx.font = 'italic 400 56px "Playfair Display"';
  ctx.fillStyle = MUTED;
  ctx.textAlign = "center";
  ctx.fillText("days", W / 2, numY + 96);
  ctx.restore();

  // ── Divider ─────────────────────────────────────────────────────────────
  ctx.save();
  ctx.strokeStyle = RULE;
  ctx.lineWidth = 1;
  line(ctx, PAD, 640, W - PAD, 640);
  ctx.restore();

  // ── Quote ───────────────────────────────────────────────────────────────
  ctx.save();
  ctx.font = 'italic 400 50px "Playfair Display"';
  ctx.fillStyle = INK;
  ctx.textAlign = "center";
  ctx.fillText("of your life, given to", W / 2, 748);

  const act = (data.activity || "—").toLowerCase();
  const actSize = act.length > 22 ? 36 : act.length > 15 ? 42 : 50;
  ctx.font = `italic 400 ${actSize}px "Playfair Display"`;
  ctx.fillText(act + ".", W / 2, 840);
  ctx.restore();

  // ── Stats ───────────────────────────────────────────────────────────────
  ctx.save();
  ctx.strokeStyle = RULE;
  ctx.lineWidth = 1;
  line(ctx, PAD, 920, W - PAD, 920);
  ctx.restore();

  const stats = [
    { label: "HOURS", val: fmt(data.totalHours, 0) },
    { label: "WEEKS", val: fmt(data.totalWeeks, 1) },
    { label: "WAKING YRS", val: fmt(data.wakingYears, 2) },
  ];

  const colW = (W - PAD * 2) / 3;
  stats.forEach((s, i) => {
    const cx = PAD + colW * i + colW / 2;
    tracked(ctx, s.label, cx, 982, 6, '300 20px "Inter", sans-serif', MUTED);
    ctx.save();
    ctx.font = '200 50px "JetBrains Mono"';
    ctx.fillStyle = INK;
    ctx.textAlign = "center";
    ctx.fillText(s.val, cx, 1054);
    ctx.restore();
    if (i < 2) {
      ctx.save();
      ctx.strokeStyle = RULE;
      ctx.lineWidth = 1;
      line(ctx, PAD + colW * (i + 1), 940, PAD + colW * (i + 1), 1074);
      ctx.restore();
    }
  });

  ctx.save();
  ctx.strokeStyle = RULE;
  ctx.lineWidth = 1;
  line(ctx, PAD, 1094, W - PAD, 1094);
  ctx.restore();

  // ── Bottom branding ─────────────────────────────────────────────────────
  const now = new Date();
  const dd = String(now.getDate()).padStart(2, "0");
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const yyyy = now.getFullYear();
  const hh = String(now.getHours()).padStart(2, "0");
  const mi = String(now.getMinutes()).padStart(2, "0");

  ctx.save();
  ctx.font = 'italic 400 38px "Playfair Display"';
  ctx.fillStyle = INK;
  ctx.textAlign = "left";
  ctx.fillText("HOURGLASS.", PAD, 1192);
  ctx.restore();

  ctx.save();
  ctx.font = '300 24px "Inter", sans-serif';
  ctx.fillStyle = MUTED;
  ctx.textAlign = "left";
  ctx.fillText("hourglass.app", PAD, 1238);
  ctx.restore();

  ctx.save();
  ctx.font = '200 26px "JetBrains Mono"';
  ctx.fillStyle = MUTED;
  ctx.textAlign = "right";
  ctx.fillText(`${dd}.${mm}.${yyyy}`, W - PAD, 1196);
  ctx.fillText(`${hh}:${mi}`, W - PAD, 1238);
  ctx.restore();

  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (b) => (b ? resolve(b) : reject(new Error("canvas.toBlob returned null"))),
      "image/png",
    );
  });
}

// ── Component ──────────────────────────────────────────────────────────────

interface Props {
  activity: string;
  totalDays: number;
  totalHours: number;
  totalWeeks: number;
  wakingYears: number;
}

export function ShareButton({ activity, totalDays, totalHours, totalWeeks, wakingYears }: Props) {
  const [open, setOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [blob, setBlob] = useState<Blob | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const prevUrl = useRef<string | null>(null);

  const generate = useCallback(async () => {
    if (prevUrl.current) URL.revokeObjectURL(prevUrl.current);
    setStatus("loading");
    setImageUrl(null);
    setBlob(null);
    try {
      const b = await generateCardBlob({ activity, totalDays, totalHours, totalWeeks, wakingYears });
      const url = URL.createObjectURL(b);
      prevUrl.current = url;
      setBlob(b);
      setImageUrl(url);
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }, [activity, totalDays, totalHours, totalWeeks, wakingYears]);

  const handleOpen = () => {
    setOpen(true);
    generate();
  };

  const handleClose = () => setOpen(false);

  const download = () => {
    if (!imageUrl) return;
    const a = document.createElement("a");
    a.href = imageUrl;
    a.download = `hourglass-${(activity || "result").toLowerCase().replace(/[^a-z0-9]+/g, "-")}.png`;
    a.click();
  };

  const shareText = `${fmt(totalDays, 1)} days of my life spent ${(activity || "this").toLowerCase()}.`;

  const shareToX = () =>
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`, "_blank");

  const shareToWhatsApp = () =>
    window.open(`https://wa.me/?text=${encodeURIComponent(shareText)}`, "_blank");

  const canNativeShare = typeof navigator !== "undefined" && !!navigator.share;

  const nativeShare = async () => {
    if (!blob) return;
    const file = new File([blob], "hourglass.png", { type: "image/png" });
    try {
      if (navigator.canShare?.({ files: [file] })) {
        await navigator.share({ files: [file], title: "HOURGLASS", text: shareText });
      } else {
        await navigator.share({ title: "HOURGLASS", text: shareText });
      }
    } catch {
      // user cancelled
    }
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className="text-[10px] uppercase tracking-[0.32em] text-foreground transition hover:text-muted-foreground"
      >
        Share →
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 backdrop-blur-sm md:items-center"
          onClick={handleClose}
        >
          <div
            className="relative w-full max-w-sm bg-background border border-border p-8 md:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute top-5 right-6 text-[10px] uppercase tracking-[0.32em] text-muted-foreground hover:text-foreground transition"
            >
              Close
            </button>

            <p className="mb-5 text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
              Your card
            </p>

            {/* Preview */}
            <div className="mb-8 border border-border overflow-hidden bg-[#f5f0eb]">
              {status === "loading" && (
                <div className="aspect-[4/5] flex items-center justify-center">
                  <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#8a8480]">
                    Generating...
                  </span>
                </div>
              )}
              {status === "error" && (
                <div className="aspect-[4/5] flex flex-col items-center justify-center gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#8a8480]">
                    Could not generate card.
                  </span>
                  <button
                    onClick={generate}
                    className="text-[10px] uppercase tracking-[0.28em] text-[#0a0a0a] underline"
                  >
                    Try again
                  </button>
                </div>
              )}
              {status === "done" && imageUrl && (
                <img src={imageUrl} alt="HOURGLASS share card" className="w-full block" />
              )}
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <button
                onClick={download}
                disabled={status !== "done"}
                className="w-full border border-foreground bg-foreground text-background py-3 text-[10px] uppercase tracking-[0.32em] transition hover:bg-transparent hover:text-foreground disabled:opacity-25 disabled:cursor-not-allowed"
              >
                Download image
              </button>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={shareToX}
                  className="border border-border py-3 text-[10px] uppercase tracking-[0.28em] text-muted-foreground transition hover:border-foreground hover:text-foreground"
                >
                  Share on X
                </button>
                <button
                  onClick={shareToWhatsApp}
                  className="border border-border py-3 text-[10px] uppercase tracking-[0.28em] text-muted-foreground transition hover:border-foreground hover:text-foreground"
                >
                  WhatsApp
                </button>
              </div>

              {canNativeShare && (
                <button
                  onClick={nativeShare}
                  disabled={status !== "done"}
                  className="w-full border border-border py-3 text-[10px] uppercase tracking-[0.28em] text-muted-foreground transition hover:border-foreground hover:text-foreground disabled:opacity-25 disabled:cursor-not-allowed"
                >
                  Share via...
                </button>
              )}
            </div>

            <p className="mt-5 text-[9px] uppercase tracking-[0.24em] text-muted-foreground/50 leading-relaxed">
              X and WhatsApp share text. Download the image to post on Instagram.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
