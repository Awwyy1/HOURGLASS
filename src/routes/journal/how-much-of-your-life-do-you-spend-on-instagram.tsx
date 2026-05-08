import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "../../components/Breadcrumbs";

export const Route = createFileRoute(
  "/journal/how-much-of-your-life-do-you-spend-on-instagram",
)({
  component: Article,
});

function Article() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-24">
      <Breadcrumbs
        crumbs={[
          { label: "Hourglass", to: "/" },
          { label: "Journal", to: "/journal" },
          { label: "How much of your life do you spend on Instagram?" },
        ]}
      />

      <header className="mb-16">
        <div className="mb-6 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          <time dateTime="2026-05-07">May 7, 2026</time>
          <span>·</span>
          <span>6 min read</span>
        </div>
        <h1 className="font-serif text-4xl italic tracking-tight text-foreground md:text-5xl leading-tight">
          How much of your life do you spend on Instagram?
        </h1>
        <p className="mt-6 font-serif text-[17px] leading-relaxed text-muted-foreground">
          The number is bigger than you think. And once you run it, you cannot really unrun it.
        </p>
      </header>

      <div className="font-serif text-[17px] leading-[1.85] text-foreground/85 space-y-6">
        <p>
          The average person checks Instagram somewhere between 20 and 30 times a day. You probably
          already know this about yourself without needing a study to confirm it. There is the check
          in the morning before getting out of bed, the one while waiting for coffee, the one during
          lunch that somehow extends past the end of lunch, and then a handful of others that happen
          in the small gaps between things that actually need your attention.
        </p>

        <p>
          Each individual session feels short. A minute here, two minutes there. This is by design.
          The app is built around the idea that you will not notice how much time has passed because
          you are always mid-scroll, always one post away from putting it down. You never quite
          finish, which means you never quite stop.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          What the numbers actually look like.
        </h2>

        <p>
          Research from 2023 puts the average daily Instagram usage at around 30 minutes for most
          users, though a separate study from Statista found the real figure closer to 35 minutes
          when passive scrolling is included. Heavy users, meaning anyone who uses the app
          consistently across stories, reels, and direct messages, often land somewhere between 45
          minutes and an hour. For the sake of this calculation, take the conservative figure: half
          an hour a day.
        </p>

        <p>
          Thirty minutes a day is 182 hours a year. That is seven and a half full days, every single
          year, spent looking at a feed. Over ten years it becomes 75 days. Over the span of time
          most people actually use Instagram, from their mid-teens through their forties, the total
          approaches six months of continuous waking time. Not six months of mild background
          activity. Six months where that was the thing you were doing.
        </p>

        <p>
          If you are a heavier user, double those numbers. A lot of people are heavier users than
          they believe themselves to be.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          Why the daily number feels harmless.
        </h2>

        <p>
          Thirty minutes does not sound like a meaningful amount of time. It is half an episode of
          something. It is the length of a short run. It is the amount of time you spend waiting for
          things throughout the day anyway. The problem is not the thirty minutes in isolation. The
          problem is that thirty minutes, repeated every day for years, becomes something much larger
          than it ever appeared when it was just thirty minutes.
        </p>

        <p>
          This is the specific arithmetic that most people never do. They experience the habit at its
          smallest unit, the individual session, and never zoom out to see what it accumulates to. A
          bank charges you a small fee every month for years and you barely notice until someone
          points out you have paid them thousands. Instagram charges you in time and the receipt
          never arrives.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          The question this is not asking.
        </h2>

        <p>
          None of this is an argument that Instagram is bad or that you should use it less. Some
          people get real things from it: connection with people they would otherwise lose touch
          with, work, creative inspiration, a genuine sense of community. Those are not nothing. A
          large number is not automatically a problem.
        </p>

        <p>
          The question is whether you know the number. Whether you have ever looked at what this
          specific habit actually costs in the one currency that does not replenish. Most people
          have not done that calculation. They have a vague sense that they use their phone a lot,
          and a separate vague sense that they wish they used it less, and those two thoughts
          coexist without ever producing a concrete figure that makes the tradeoff legible.
        </p>

        <p>
          The concrete figure is what changes the conversation you have with yourself about it.
          Not the vague discomfort. The actual number, sitting there, refusing to be vague.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          Run it yourself.
        </h2>

        <p>
          The calculation takes about ten seconds. Put in your honest daily hours, put in how many
          years you have been using it or plan to keep using it, and see what comes back. The result
          is not meant to shame you into anything. It is just the arithmetic, applied to your
          actual life instead of someone else's average.
        </p>

        <p className="text-muted-foreground">
          Whatever you do with the number after that is entirely yours to decide.
        </p>
      </div>

      <div className="mt-20 border-t border-border pt-10 flex items-center justify-between">
        <Link
          to="/"
          className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground transition hover:text-foreground"
        >
          ← Open the calculator
        </Link>
        <Link
          to="/journal"
          className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground transition hover:text-foreground"
        >
          All articles →
        </Link>
      </div>
    </article>
  );
}
