import type { ReactNode } from "react";

/**
 * A short, direct answer placed immediately after the article header.
 *
 * Search engines and answer engines weight the opening of a page heavily when
 * deciding what question it answers, and the editorial standfirst that opens
 * every article here is deliberately not a direct answer. This block gives the
 * figure plainly, high in the document, without changing how the essay itself
 * reads.
 */
export function AnswerBlock({ children }: { children: ReactNode }) {
  return (
    <div className="mb-14 border-l-2 border-border pl-5">
      <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
        The short answer
      </p>
      <p className="text-[17px] leading-[1.75] text-foreground/90">{children}</p>
    </div>
  );
}
