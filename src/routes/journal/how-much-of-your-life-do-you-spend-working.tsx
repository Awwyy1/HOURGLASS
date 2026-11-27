import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { PageSEO } from "../../components/PageSEO";
import { ArticleSchema } from "../../components/ArticleSchema";
import { FAQSection } from "../../components/FAQSection";
import { LifeFigure, PeriodTable, type LifeFigureData } from "../../components/LifeFigure";
import { AnswerBlock } from "../../components/AnswerBlock";

export const Route = createFileRoute(
  "/journal/how-much-of-your-life-do-you-spend-working",
)({
  component: Article,
});

const FIGURE: LifeFigureData = {
  answer: {
    value: "≈17",
    unit: "waking years",
    text: "of a 43-year career, once commuting and after-hours work are counted.",
  },
  day: {
    hours: 6.37,
    value: "27%",
    text: "of every day on average: 100,000 career hours spread over 43 years.",
  },
  toYear: {
    op: "× 365",
    text: "every day of the year",
  },
  year: {
    days: 97,
    value: "97 days",
    text: "2,326 hours a year",
  },
  toLife: {
    op: "× 43",
    text: "a career from 22 to 65",
  },
  life: {
    years: 17.1,
    total: 43,
    value: "17.1 yrs",
    text: "of your 43 waking years: 100,000 hours. The rest is everything else.",
  },
  why: {
    title: "Why 6.4 hours",
    max: 10,
    marker: 6.37,
    ticks: [0, 5.5, 10],
    unit: "h",
    text: "Contract: 40 h a week for 50 weeks, 5.5 h a day. Commuting and work-related load push it higher.",
  },
};

function Article() {
  return (
    <article className="article-with-figure mx-auto max-w-2xl px-6 py-24">
      <PageSEO
        title="How much of your life do you spend working?"
        description="The standard answer is 40 hours a week. Counting commuting, a full career comes to about 100,000 hours, a little over 17 waking years of your life."
        ogType="article"
      />
      <ArticleSchema
        title="How much of your life do you spend working?"
        description="The standard answer is 40 hours a week. Counting commuting, a full career comes to about 100,000 hours, a little over 17 waking years of your life."
        datePublished="2026-04-16"
        dateModified="2026-11-20"
        slug="how-much-of-your-life-do-you-spend-working"
      />
      <Breadcrumbs
        crumbs={[
          { label: "Hourglass", to: "/" },
          { label: "Journal", to: "/journal" },
          { label: "How much of your life do you spend working?" },
        ]}
      />

      <header className="mb-16">
        <div className="mb-6 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          <time dateTime="2026-04-16">April 16, 2026</time>
          <span>·</span>
          <span>3 min read</span>
        </div>
        <h1 className="font-serif text-4xl italic tracking-tight text-foreground md:text-5xl leading-tight">
          How much of your life do you spend working?
        </h1>
        <p className="mt-6 font-serif text-[17px] leading-relaxed text-muted-foreground">
          The standard answer is 40 hours a week. The real answer, once you
          count everything that actually counts, is considerably more than that.
        </p>
      </header>

      <LifeFigure data={FIGURE} />

      <AnswerBlock>
        A standard career of 40 hours a week across 43 years comes to around 86,000 contracted hours, or about 14.7 waking years. Counting commuting, email outside hours, and the mental load that follows you home, the realistic total is at least 100,000 hours, which is a little over 17 waking years of a life.
      </AnswerBlock>

      <PeriodTable data={FIGURE} />


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
          named after a rounder version of the same calculation over 40 years instead of 43, built on the observation that this is approximately
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
          Run that version of the calculation and the career total reaches about 100,000 hours. A
          typical commute of around 300 hours a year lifts the annual figure from 2,000 to roughly
          2,300, which over 43 years comes to about 99,000 hours before any of the after-hours load
          is counted. In waking years, where one year represents all your conscious hours for 365
          days, 100,000 hours is a little over 17 years of your life spent on work and everything
          that surrounds it, against about 14.7 years for the contracted hours alone.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          This is not an argument against working.
        </h2>

        <p>
          Work is where a lot of people find meaning, structure, and identity. Some people would
          choose to work this much even if they did not need the income. A number being large is not
          the same as a number being wrong. The point of running this calculation is not to produce
          regret or to suggest that 100,000 hours is too many.
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

      <FAQSection
        faqs={[
          { q: "How many hours does the average person work in a lifetime?", a: "The standard figure is 80,000 hours, which assumes 40 years at 40 hours per week. A career from 22 to 65 is closer to 86,000 contracted hours, and in practice the number is higher still. Overtime, work-adjacent tasks like commuting and email outside hours, and the unpaid time many knowledge workers spend thinking about work all add to the total. A more honest career figure for most professionals is around 100,000 hours, or a little over 17 waking years." },
          { q: "What percentage of your life do you spend working?", a: "About 40 percent of your waking hours during the working years themselves, and around 20 percent of all the waking hours in an 80-year life, depending on actual hours per week and how long you work. That makes it the second largest category of time use after sleep, and the largest category of conscious directed activity. Most people have never added it up. The number is usually larger than expected when they do." }
        ]}
      />

      <div className="mt-14 border-t border-border pt-10">
        <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          Related
        </p>
        <div className="space-y-3">
          <Link
            to="/journal/how-much-of-your-life-do-you-spend-in-school"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much of your life do you spend in school? →
          </Link>
          <Link
            to="/journal/how-much-vacation-time-do-you-get-in-a-lifetime"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much vacation time do you get in a lifetime? →
          </Link>
        </div>
      </div>

      <div className="mt-10 border-t border-border pt-8">
        <p className="font-serif text-[17px] italic text-foreground/75">
          Put your own numbers into the{" "}
          <a href="/#calculator" className="underline underline-offset-2 hover:text-foreground transition">
            Hourglass calculator
          </a>{" "}
          and see where your years actually go.
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
