import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { PageSEO } from "../../components/PageSEO";
import { ArticleSchema } from "../../components/ArticleSchema";
import { FAQSection } from "../../components/FAQSection";
import { AnswerBlock } from "../../components/AnswerBlock";
import { LifeFigure, PeriodTable, type LifeFigureData } from "../../components/LifeFigure";

export const Route = createFileRoute("/journal/how-much-of-your-life-do-you-spend-at-red-lights")({
  component: Article,
});

const TITLE = "How much of your life do you spend at red lights?";
const DESCRIPTION =
  "At about six minutes a day, a driver spends roughly 137 waking days at red lights over 60 years. The popular six-month figure is the ceiling for city driving.";

const FIGURE: LifeFigureData = {
  answer: {
    value: "137",
    unit: "waking days",
    text: "over 60 years of driving, at about six minutes a day stopped at red lights.",
  },
  day: {
    hours: 0.1,
    value: "0.4%",
    text: "of every day: about six minutes stopped at signals, out of an hour behind the wheel.",
  },
  toYear: {
    op: "× 365",
    text: "every day of the year",
  },
  year: {
    days: 1.5,
    value: "1.5 days",
    text: "about 36 hours a year",
  },
  toLife: {
    op: "× 60",
    text: "years of driving",
  },
  life: {
    years: 0.375,
    total: 60,
    value: "137 days",
    text: "of your 60 waking years: about 2,200 hours at red lights.",
  },
  why: {
    title: "Why 6 minutes",
    max: 20,
    band: [6, 11],
    marker: 6,
    ticks: [0, 6, 11, 20],
    unit: "m",
    text: "About 61 minutes of driving a day (AAA). EPA's city test cycle idles 18% of the time; a mixed day, about 10%.",
  },
};

function Article() {
  return (
    <article className="article-with-figure mx-auto max-w-2xl px-6 py-24">
      <PageSEO title={TITLE} description={DESCRIPTION} ogType="article" />
      <ArticleSchema
        title={TITLE}
        description={DESCRIPTION}
        datePublished="2026-09-11"
        slug="how-much-of-your-life-do-you-spend-at-red-lights"
      />
      <Breadcrumbs
        crumbs={[
          { label: "Hourglass", to: "/" },
          { label: "Journal", to: "/journal" },
          { label: TITLE },
        ]}
      />

      <header className="mb-16">
        <div className="mb-6 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          <time dateTime="2026-09-11">September 11, 2026</time>
          <span>·</span>
          <span>3 min read</span>
        </div>
        <h1 className="font-serif text-4xl italic tracking-tight text-foreground md:text-5xl leading-tight">
          {TITLE}
        </h1>
        <p className="mt-6 font-serif text-[17px] leading-relaxed text-muted-foreground">
          Everyone has a red light that always seems to catch them. Added up over a driving life,
          the time spent at all of them is smaller than the folklore says and still larger than most
          people would guess.
        </p>
      </header>

      <LifeFigure data={FIGURE} />

      <AnswerBlock>
        At about six minutes a day stopped at signals, an average American driver spends roughly 36
        hours a year at red lights and about 2,200 hours over 60 years of driving, which is around
        137 waking days. For someone who drives mostly in city traffic the total approaches 250
        waking days, close to the popular claim of six months.
      </AnswerBlock>

      <PeriodTable data={FIGURE} />

      <div className="text-[17px] leading-[1.85] text-foreground/85 space-y-6">
        <p>
          The AAA Foundation for Traffic Safety&apos;s American Driving Survey found that the
          average driver spent 60.7 minutes behind the wheel each day in 2023, across 2.43 trips and
          about 29 miles, while earlier editions of the same survey put the figure closer to 51.
          Nobody publishes a national count of how much of that hour is spent at red lights. The
          nearest thing is the Environmental Protection Agency&apos;s city test cycle, built to
          imitate urban driving for fuel economy ratings, which spends 18 percent of its time idling
          across 23 stops. Its highway cycle spends none.
        </p>

        <p>
          A real day mixes both kinds of road. Taking about 10 percent of driving time as stopped at
          signals, and 18 percent as the ceiling for someone who drives mostly in town, gives
          roughly six to eleven minutes a day. At six minutes that is about 36 hours a year and
          close to 2,200 hours across 60 years behind the wheel, or 137 waking days. At eleven it is
          about 4,000 hours, around 250 waking days.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          Where the six months comes from.
        </h2>

        <p>
          The claim that people spend six months of their lives at red lights circulates widely and
          is almost never traced to a study. Versions of it credit a navigation company with a
          figure of twenty minutes a day, which over 80 years would come to more than 9,700 hours,
          about thirteen months of full days, so the claim does not agree with its own arithmetic.
          Six months of full 24-hour days is about 4,400 hours, which is close to what the city
          ceiling above produces over 60 years. As a description of an ordinary driver, it is
          roughly double.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          Why the wait feels longer than it is.
        </h2>

        <p>
          There are more than 330,000 traffic signals in the United States, according to the Federal
          Highway Administration, and each is timed for its junction as a whole rather than for any
          single driver. The agency notes that signals are typically retimed every three to five
          years, so a light that once suited the traffic around it can drift out of step as a
          neighbourhood changes and leave drivers waiting at an empty crossing.
        </p>

        <p>
          A red light also arrives at the moment a driver has nothing to do, which is the condition
          under which waiting is felt most sharply. David Maister&apos;s 1985 paper on the
          psychology of waiting lines, still used by people who design queues, set out the principle
          that unoccupied time feels longer than occupied time, and a stopped car with both hands on
          the wheel is about as unoccupied as an adult day gets.
        </p>

        <p className="text-muted-foreground">
          About six minutes a day, 36 hours a year and 137 waking days across a driving life, with a
          city ceiling near 250 and a popular figure of six months that describes the heaviest city
          driver rather than the average one.
        </p>
      </div>

      <FAQSection
        faqs={[
          {
            q: "How much time does the average person spend at red lights?",
            a: "About six minutes a day for an average American driver, based on roughly an hour of driving a day and about 10 percent of that time stopped at signals. That is around 36 hours a year and about 2,200 hours, or 137 waking days, over 60 years of driving. Drivers who spend most of their time in city traffic can reach nearly twice that.",
          },
          {
            q: "Is it true that we spend six months of our lives at red lights?",
            a: "Only for heavy city drivers, and only when the time is counted in full 24-hour days. The figure is widely repeated without a traceable study behind it. Using measured driving time and the share of urban driving spent idling, an average driver comes to about three months of full days over 60 years, and a city driver to around five and a half.",
          },
        ]}
      />

      <div className="mt-14 border-t border-border pt-10">
        <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          Related
        </p>
        <div className="space-y-3">
          <Link
            to="/journal/how-much-time-do-you-spend-waiting"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much time do you spend waiting in a lifetime? →
          </Link>
          <Link
            to="/journal/how-much-time-do-you-spend-stuck-in-traffic"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much time do you spend stuck in traffic? →
          </Link>
        </div>
      </div>

      <div className="mt-10 border-t border-border pt-8">
        <p className="font-serif text-[17px] italic text-foreground/75">
          Put your own numbers into the{" "}
          <a
            href="/#calculator"
            className="underline underline-offset-2 hover:text-foreground transition"
          >
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
