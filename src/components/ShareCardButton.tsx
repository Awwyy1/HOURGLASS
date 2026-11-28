import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { drawCard, type CardData, type CardFormat, type CardTheme } from "../lib/card";

/**
 * "Share my card": opens a sheet with the reader's card, ready for
 * Instagram. On phones that can share files the main button hands the
 * image straight to the system share sheet (Instagram, Messages, saving to
 * Photos); elsewhere it downloads the PNG. Both formats are drawn as soon
 * as the sheet opens, so switching between them is instant.
 */

interface Props {
  card: CardData;
  /** File name without extension, e.g. "hourglass-phone". */
  filename: string;
  /** A link that reopens this calculation, offered as "Copy link". */
  link?: string;
  className?: string;
}

type Drawn = { blob: Blob; url: string };

function ShareIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="h-4 w-4"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M10 13V3M6 7l4-4 4 4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 11v5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-5" strokeLinecap="round" />
    </svg>
  );
}

export function ShareCardButton({ card, filename, link, className = "" }: Props) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`group inline-flex w-full items-center justify-center gap-2.5 border border-foreground bg-foreground px-5 py-3.5 text-[10px] uppercase tracking-[0.28em] text-background transition hover:bg-transparent hover:text-foreground ${className}`}
      >
        <ShareIcon />
        Share my card
      </button>
      {open && (
        <ShareSheet card={card} filename={filename} link={link} onClose={() => setOpen(false)} />
      )}
    </>
  );
}

function ShareSheet({
  card,
  filename,
  link,
  onClose,
}: {
  card: CardData;
  filename: string;
  link?: string;
  onClose: () => void;
}) {
  const [format, setFormat] = useState<CardFormat>("post");
  const [theme, setTheme] = useState<CardTheme>(() =>
    typeof document !== "undefined" && document.documentElement.classList.contains("dark")
      ? "dark"
      : "light",
  );
  const [drawn, setDrawn] = useState<Record<string, Drawn>>({});
  const [error, setError] = useState(false);
  const [copied, setCopied] = useState(false);
  const panel = useRef<HTMLDivElement>(null);
  const urls = useRef<string[]>([]);
  const drawnRef = useRef<Record<string, Drawn>>({});
  // Callers build the card object on every render; key the cache on its content.
  const cardKey = JSON.stringify(card);
  const cardRef = useRef(card);
  cardRef.current = card;

  const key = `${cardKey}|${format}-${theme}`;
  const current = drawn[key];

  // Draw the chosen version first, then the others in the background.
  useEffect(() => {
    let cancelled = false;
    const order: [CardFormat, CardTheme][] = [
      [format, theme],
      [format === "post" ? "story" : "post", theme],
      [format, theme === "light" ? "dark" : "light"],
      [format === "post" ? "story" : "post", theme === "light" ? "dark" : "light"],
    ];
    (async () => {
      for (const [f, t] of order) {
        const k = `${cardKey}|${f}-${t}`;
        if (cancelled) return;
        if (drawnRef.current[k]) continue;
        try {
          const blob = await drawCard(cardRef.current, f, t);
          if (cancelled) return;
          const url = URL.createObjectURL(blob);
          urls.current.push(url);
          drawnRef.current = { ...drawnRef.current, [k]: { blob, url } };
          setDrawn(drawnRef.current);
        } catch {
          if (!cancelled) setError(true);
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [format, theme, cardKey]);

  // Free the image URLs when the sheet closes.
  useEffect(() => () => urls.current.forEach((u) => URL.revokeObjectURL(u)), []);

  // Escape closes; the page behind does not scroll; focus moves into the sheet and back.
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panel.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
      previous?.focus();
    };
  }, [onClose]);

  const file = useMemo(
    () =>
      current ? new File([current.blob], `${filename}-${format}.png`, { type: "image/png" }) : null,
    [current, filename, format],
  );
  const canShare =
    !!file &&
    typeof navigator !== "undefined" &&
    !!navigator.canShare &&
    navigator.canShare({ files: [file] });

  const download = useCallback(() => {
    if (!current) return;
    const a = document.createElement("a");
    a.href = current.url;
    a.download = `${filename}-${format}.png`;
    a.click();
  }, [current, filename, format]);

  const share = useCallback(async () => {
    if (!file) return;
    try {
      await navigator.share({ files: [file], title: "My time, on a card" });
    } catch (e) {
      // Cancelling the share sheet is not an error; anything else falls back to a download.
      if ((e as Error)?.name !== "AbortError") download();
    }
  }, [file, download]);

  const copy = useCallback(async () => {
    if (!link) return;
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard unavailable: nothing to do
    }
  }, [link]);

  const seg = (active: boolean) =>
    `flex-1 px-3 py-2 text-[10px] uppercase tracking-[0.24em] transition ${
      active ? "bg-foreground text-background" : "text-muted-foreground hover:text-foreground"
    }`;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center"
      role="presentation"
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-black/55 backdrop-blur-[2px] animate-[fadeIn_160ms_ease-out]"
      />
      <div
        ref={panel}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label="Your card"
        className="relative z-10 flex max-h-[94vh] w-full flex-col overflow-y-auto rounded-t-2xl bg-background p-5 outline-none shadow-2xl animate-[sheetUp_220ms_cubic-bezier(.2,.8,.2,1)] sm:max-w-[460px] sm:rounded-2xl sm:p-6"
      >
        <div className="mb-4 flex items-center justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
            Your card
          </p>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="-mr-2 grid h-9 w-9 place-items-center text-xl leading-none text-muted-foreground transition hover:text-foreground"
          >
            ×
          </button>
        </div>

        <div
          className={`relative mx-auto w-full overflow-hidden border border-border bg-muted ${
            format === "post" ? "aspect-[4/5] max-w-[340px]" : "aspect-[9/16] max-w-[250px]"
          }`}
        >
          {current ? (
            <img
              src={current.url}
              alt="Preview of your card"
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 grid place-items-center">
              <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                {error ? "Could not draw the card" : "Drawing…"}
              </span>
            </div>
          )}
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="flex border border-border" role="group" aria-label="Format">
            <button
              type="button"
              className={seg(format === "post")}
              onClick={() => setFormat("post")}
              aria-pressed={format === "post"}
            >
              Post
            </button>
            <button
              type="button"
              className={seg(format === "story")}
              onClick={() => setFormat("story")}
              aria-pressed={format === "story"}
            >
              Story
            </button>
          </div>
          <div className="flex border border-border" role="group" aria-label="Theme">
            <button
              type="button"
              className={seg(theme === "light")}
              onClick={() => setTheme("light")}
              aria-pressed={theme === "light"}
            >
              Light
            </button>
            <button
              type="button"
              className={seg(theme === "dark")}
              onClick={() => setTheme("dark")}
              aria-pressed={theme === "dark"}
            >
              Dark
            </button>
          </div>
        </div>

        <button
          type="button"
          disabled={!current}
          onClick={canShare ? share : download}
          className="mt-4 inline-flex w-full items-center justify-center gap-2.5 bg-foreground px-5 py-4 text-[11px] uppercase tracking-[0.28em] text-background transition hover:opacity-90 disabled:opacity-40"
        >
          {canShare ? (
            <>
              <ShareIcon /> Share
            </>
          ) : (
            "Download image"
          )}
        </button>

        <div className="mt-3 flex items-center justify-center gap-6 text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
          {canShare && (
            <button type="button" onClick={download} className="transition hover:text-foreground">
              Save image
            </button>
          )}
          {link && (
            <button type="button" onClick={copy} className="transition hover:text-foreground">
              {copied ? "Link copied" : "Copy link"}
            </button>
          )}
        </div>
        <p className="mt-3 text-center text-[11px] leading-relaxed text-muted-foreground">
          {format === "story"
            ? "1080 × 1920, sized for Stories."
            : "1080 × 1350, sized for the feed."}{" "}
          Drawn on your device; nothing is uploaded.
        </p>
      </div>
    </div>,
    document.body,
  );
}
