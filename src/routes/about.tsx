import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-24">
      <header className="mb-16">
        <p className="mb-6 font-sans text-[10px] uppercase tracking-[0.36em] text-muted-foreground">
          About
        </p>
        <h1 className="font-serif text-4xl italic tracking-tight text-foreground md:text-5xl">
          What this is, and why.
        </h1>
      </header>

      <div className="font-serif text-[17px] leading-[1.85] text-foreground/85 space-y-6">
        <p>
          HOURGLASS started as a personal calculation. Not a complicated one —
          just trying to figure out, roughly, how much of the last few years
          had gone to things I hadn't consciously chosen.
        </p>

        <p>
          The math wasn't hard. Multiply daily hours by 365, then by years.
          The result was harder to look at than expected.
        </p>

        <p>
          That gap — between how a habit feels in the moment and what it
          actually accumulates into — is what this tool is for. One page,
          one calculation, one number. No advice attached.
        </p>

        <p>
          The design is intentional. No dashboard, no streaks, no score.
          An editorial aesthetic, because the question deserves to be taken
          seriously — not gamified, not optimised, not turned into a product
          that tries to change your behaviour.
        </p>

        <p>
          It shows you a number. That's the whole thing.
        </p>

        <p>
          What you do with it is yours to decide.
        </p>
      </div>

      <div className="mt-16 border-t border-border pt-10">
        <p className="font-sans text-[10px] uppercase tracking-[0.32em] text-muted-foreground mb-6">
          Also on this site
        </p>
        <div className="space-y-4">
          <div>
            <Link
              to="/philosophy"
              className="font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
            >
              On the arithmetic of attention →
            </Link>
            <p className="mt-1 font-sans text-sm text-muted-foreground">
              The essay behind the calculator.
            </p>
          </div>
          <div>
            <Link
              to="/journal"
              className="font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
            >
              The Journal →
            </Link>
            <p className="mt-1 font-sans text-sm text-muted-foreground">
              Articles on time, habit, and what the numbers mean.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
