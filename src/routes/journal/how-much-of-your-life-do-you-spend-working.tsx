import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "../../components/Breadcrumbs";

export const Route = createFileRoute(
  "/journal/how-much-of-your-life-do-you-spend-working",
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
          { label: "How much of your life do you spend working?" },
        ]}
      />

      <header className="mb-16">
        <div className="mb-6 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          <time dateTime="2026-05-08">May 8, 2026</time>
          <span>·</span>
          <span>7 min read</span>
        </div>
        <h1 className="font-serif text-4xl italic tracking-tight text-foreground md:text-5xl leading-tight">
          How much of your life do you spend working?
        </h1>
        <p className="mt-6 font-serif text-[17px] leading-relaxed text-muted-foreground">
          The standard answer is 40 hours a week. The real answer, once you
          count everything that actually counts, is considerably more than that.
        </p>
      </header>

      <div className="text-[17px] leading-[1.85] text-foreground/85 space-y-6">
        <p>
          If you started a full-time job at 22 and plan to retire somewhere around 65, you have
          roughly 43 years of working life in front of you from that point. The standard figure
          cited for full-time employment is 40 hours per week, though anyone who has held an office
          job in the past decade knows that number tends to expand once you include the emails
          answered on Sunday evening, the lunch breaks that quietly become working lunches, and the
          hour of mental unpacking that happens after you close the laptop but before you actually
          stop thinking about work.
        </p>

        <p>
          Start with the official number anyway. Forty hours a week, 50 working weeks a year after
          accounting for vacation, comes to 2,000 hours annually. Converted into days, that is 83
          full 24-hour days. In terms of waking time, assuming 16 hours of consciousness per day,
          it comes to roughly 125 days per year spent doing nothing but working. A third of your
          entire waking year, every year, for four decades.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          The number that already has a name.
        </h2>

        <p>
          Over a full career, 43 years at 2,000 hours each adds up to 86,000 hours. This is not
          an obscure figure. There is a career research organisation literally called 80,000 Hours,
          named after exactly this calculation, built on the observation that this is approximately
          how much professional time a typical person has available across their working life.
          Eighty thousand hours. That is a large number, and it is also a fixed one. You do not
          get more of it regardless of what you do with the rest of your time.
        </p>

        <p>
          What makes the number feel different when you actually look at it is the comparison. Most
          people spend more time at work than they spend sleeping, more than they spend with their
          children during the years their children are at home, and more than they will ever spend
          on the hobbies and relationships they describe as the important parts of their life. Work
          is not a part of life that runs alongside the real thing. For most people, it is the
          largest single category of how their life was actually spent.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          What you probably are not counting.
        </h2>

        <p>
          The 40-hour figure excludes commuting, which for the average worker in a mid-sized city
          adds another 200 to 400 hours per year. It excludes the time spent preparing for work,
          thinking about work problems during evenings, and the quiet low-grade attention that work
          holds in your mind even when you are technically off. Studies that attempt to measure
          total work-related cognitive load consistently find numbers 20 to 30 percent higher than
          the contracted hours.
        </p>

        <p>
          Run that version of the calculation and the career total crosses 100,000 hours without
          much effort. In waking years, where one year represents all your conscious hours for 365
          days, that is somewhere between 17 and 20 years of your life spent on work and everything
          that surrounds it.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          This is not an argument against working.
        </h2>

        <p>
          Work is where a lot of people find meaning, structure, and identity. Some people would
          choose to work this much even if they did not need the income. A number being large is not
          the same as a number being wrong. The point of running this calculation is not to produce
          regret or to suggest that 80,000 hours is too many.
        </p>

        <p>
          The point is that most people have never actually looked at the figure. They know they
          work a lot in the way you know a train journey is long without knowing how many hours it
          takes. Vaguely, uncomfortably, without any precise sense of what it adds up to. And
          something that takes up this much of a life probably deserves to be looked at precisely,
          at least once, before the bulk of the hours are already behind you.
        </p>

        <p>
          Whether that changes anything about what you do on Monday morning is a question only you
          can answer. But you are more likely to answer it well if you have seen the number first.
        </p>

        <p className="text-muted-foreground">
          The hours are already being spent. The question is whether you have chosen to spend them.
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
