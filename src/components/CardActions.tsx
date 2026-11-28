import { useCallback, useMemo, useState } from "react";

/**
 * What a reader can do with a finished card: share it, save it to the
 * phone's photos, download it, or copy a link back to the calculation.
 *
 * Saving to Photos needs care on iPhone. A download always lands in Files,
 * and sharing an image together with a title makes iOS treat it as a
 * document. Sharing the image alone, with no title or text, puts "Save
 * Image" at the top of the share sheet, which saves straight to Photos.
 * On Android a download goes to the gallery's Downloads album, so a plain
 * download is the save there.
 */

const isIOS = () =>
  typeof navigator !== "undefined" &&
  (/iPhone|iPad|iPod/.test(navigator.userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1));
const isAndroid = () => typeof navigator !== "undefined" && /Android/i.test(navigator.userAgent);

function downloadUrl(url: string, name: string) {
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

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

function SaveIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="h-4 w-4"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M10 3v10M6 9l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 16h12" strokeLinecap="round" />
    </svg>
  );
}

interface Props {
  image: { url: string; blob: Blob } | null;
  /** File name without extension. */
  filename: string;
  format: "post" | "story";
  /** A link back to this calculation, offered as "Copy link". */
  link?: string | (() => string);
}

export function CardActions({ image, filename, format, link }: Props) {
  const [copied, setCopied] = useState(false);
  const name = `${filename}-${format}.png`;

  const file = useMemo(
    () => (image ? new File([image.blob], name, { type: "image/png" }) : null),
    [image, name],
  );
  const canShare =
    !!file &&
    typeof navigator !== "undefined" &&
    !!navigator.canShare &&
    navigator.canShare({ files: [file] });
  const ios = isIOS();
  const android = isAndroid();
  const touch = ios || android;

  const download = useCallback(() => {
    if (image) downloadUrl(image.url, name);
  }, [image, name]);

  const share = useCallback(async () => {
    if (!file) return;
    try {
      await navigator.share({ files: [file], title: "My time, on a card" });
    } catch (e) {
      if ((e as Error)?.name !== "AbortError") download();
    }
  }, [file, download]);

  const saveToPhotos = useCallback(async () => {
    if (!file) return;
    if (ios && canShare) {
      try {
        // The image on its own, so iOS offers "Save Image" (to Photos) first.
        await navigator.share({ files: [file] });
        return;
      } catch (e) {
        if ((e as Error)?.name === "AbortError") return;
      }
    }
    download();
  }, [file, ios, canShare, download]);

  const copy = useCallback(async () => {
    if (!link) return;
    try {
      await navigator.clipboard.writeText(typeof link === "function" ? link() : link);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard unavailable
    }
  }, [link]);

  const filled =
    "inline-flex w-full items-center justify-center gap-2 border border-foreground bg-foreground whitespace-nowrap px-3 py-4 text-[11px] uppercase tracking-[0.14em] text-background transition hover:opacity-90 disabled:opacity-40";
  const outline =
    "inline-flex w-full items-center justify-center gap-2 border border-foreground whitespace-nowrap px-3 py-4 text-[11px] uppercase tracking-[0.14em] text-foreground transition hover:bg-foreground hover:text-background disabled:opacity-40";

  return (
    <div>
      {canShare ? (
        <div className="grid grid-cols-2 gap-3">
          <button type="button" disabled={!image} onClick={share} className={filled}>
            <ShareIcon /> Share
          </button>
          <button type="button" disabled={!image} onClick={saveToPhotos} className={outline}>
            <SaveIcon /> {ios ? "Save to Photos" : android ? "Save to gallery" : "Save image"}
          </button>
        </div>
      ) : (
        <button type="button" disabled={!image} onClick={download} className={filled}>
          <SaveIcon /> {touch ? "Save image" : "Download image"}
        </button>
      )}

      {link && (
        <div className="mt-3 text-center">
          <button
            type="button"
            onClick={copy}
            className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground transition hover:text-foreground"
          >
            {copied ? "Link copied" : "Copy link"}
          </button>
        </div>
      )}

      <p className="mt-3 text-center text-[11px] leading-relaxed text-muted-foreground">
        {format === "story"
          ? "1080 × 1920, sized for Stories."
          : "1080 × 1350, sized for the feed."}{" "}
        {touch
          ? "You can also press and hold the card to save it."
          : "Drawn on your device; nothing is uploaded."}
      </p>
    </div>
  );
}
