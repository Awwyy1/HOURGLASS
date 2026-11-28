import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { PageSEO } from "../../components/PageSEO";
import { ArticleSchema } from "../../components/ArticleSchema";
import { FAQSection } from "../../components/FAQSection";
import { AnswerBlock } from "../../components/AnswerBlock";
import { LifeFigure, PeriodTable, type LifeFigureData } from "../../components/LifeFigure";

export const Route = createFileRoute("/journal/how-much-of-your-life-do-you-spend-waiting-in-line")({
  component: Article,
});

const TITLE = "How much of your life do you spend waiting in line?";
const DESCRIPTION =
  "At about 11 minutes a day, queues take around 4,000 hours, or 251 waking days, of an adult life. The five-year claim traces to a 1988 consultancy study.";

const FIGURE: LifeFigureData = {
  answer: {
    value: "251",
    unit: "waking days",
    text: "over 60 adult years, at about 11 minutes a day standing in lines.",
  },
  day: {
    hours: 0.18356,
    value: "0.8%",
    text: "of every day: about 11 minutes in queues at tills, counters, gates and doors.",
  },
  toYear: {
    op: "× 365",
    text: "every day of the year",
  },
  year: {
    days: 2.8,
    value: "2.8 days",
    text: "about 67 hours a year",
  },
  toLife: {
    op: "× 60",
    text: "60 adult years",
  },
  life: {
    years: 0.688,
    total: 60,
    value: "251 days",
    text: "of your 60 waking years: about 4,020 hours in lines.",
  },
  why: {
    title: "Why 11 minutes",
    max: 20,
    band: [4.5, 16],
    marker: 11,
    ticks: [0, 4.5, 11, 16, 20],
    unit: "m",
    text: "Three British polls put queuing at 27–96 hours a year, 4.5–16 min a day. The US 37 billion hours is about 18.",
  },
};

function Article() {
  return (
    <article className="article-with-figure mx-auto max-w-2xl px-6 py-24">
      <PageSEO title={TITLE} description={DESCRIPTION} ogType="article" />
      <ArticleSchema
        title={TITLE}
        description={DESCRIPTION}
        datePublished="2026-09-25"
        slug="how-much-of-your-life-do-you-spend-waiting-in-line"
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
          <time dateTime="2026-09-25">September 25, 2026</time>
          <span>·</span>
          <span>3 min read</span>
        </div>
        <h1 className="font-serif text-4xl italic tracking-tight text-foreground md:text-5xl leading-tight">
          {TITLE}
        </h1>
        <p className="mt-6 font-serif text-[17px] leading-relaxed text-muted-foreground">
          Queues are the most visible kind of waiting and among the least measured. The lifetime
          figures attached to them run from a few months to several years, and the largest of them
          trace back to sources that never showed their working.
        </p>
      </header>

      <LifeFigure data={FIGURE} />

      <AnswerBlock>
        A 2009 British poll of 3,000 adults put the time spent in queues at about 67 hours a year,
        roughly 11 minutes a day, which over 60 adult years comes to about 4,020 hours, or 251
        waking days. The American estimate of 37 billion hours a year works out to about 18 minutes a
        day per person, and the popular claim of five years traces to a 1988 consultancy study.
      </AnswerBlock>

      <PeriodTable data={FIGURE} />

      <div className="text-[17px] leading-[1.85] text-foreground/85 space-y-6">
        <p>
          The most direct estimates come from British polls, which ask people about their own
          queues. A 2009 survey of 3,000 adults for the auction site Madbid, reported by the
          Telegraph, found that the average Briton queued for more than 67 hours a year, about five
          hours and 35 minutes a month. Earlier polls bracket that figure: a 2003 TNS survey for
          Norwich Union put the national total at 1.3 billion hours a year, about 27 hours for each
          adult, and a 2006 ICM poll for KLM found 96 hours.
        </p>

        <p>
          At 67 hours a year, about 11 minutes a day, the total over 60 adult years is around 4,020
          hours, or 251 waking days. That is a little under a third of the 37 minutes a day this
          journal counts as passive waiting, leaving room for the six minutes a driver spends at red
          lights, about half a minute on hold and the time in waiting rooms.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          Where the bigger numbers come from.
        </h2>

        <p>
          The figure most often quoted for the United States is 37 billion hours a year, still
          repeated by queue-management companies, usually without a source. Its earliest traceable
          appearance is <em>On an Average Day</em>, a book of daily statistics by Tom Heymann, which
          the Washington Post quoted in 1999 as 101,369,863 hours spent in line every day. That is
          exactly 37 billion divided by 365, so the annual total came first, and nobody who repeats it
          gives a method. Spread across about 340 million Americans it comes to roughly 110 hours a
          year each, or 18 minutes a day, from a total that has not moved since the population was 60
          million smaller.
        </p>

        <p>
          The Madbid poll put the lifetime total at almost six months, which is what 67 hours a year
          over 60 years becomes when counted in full 24-hour days, since 4,020 hours is about 168
          days. In 2005 NPR introduced an interview with Richard Larson, the
          MIT researcher best known for his work on queues, by saying the average American spends two
          to three years of life in line, which over a 78-year life would take 37 to 55 minutes a
          day. The five years comes from a 1988 study by Priority Management, a Pittsburgh
          consultancy whose president, Michael Fortino, also put six months of a life at red lights.
          Five years of full days is 43,800 hours, about 92 minutes in line every day for 78 years.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          Why the line feels longer than it is.
        </h2>

        <p>
          Larson&apos;s view, quoted in Alex Stone&apos;s 2012 New York Times essay &ldquo;Why
          Waiting Is Torture&rdquo;, is that the psychology of queuing often matters more than the
          statistics of the wait. Stone opened with a Houston airport where passengers kept
          complaining about baggage claim after extra handlers had cut the average wait to eight
          minutes. The walk from the gate took one minute and the other seven were spent at the
          carousel, so the airport moved arrivals to distant gates and sent bags to the outermost
          carousel. The walk became six times longer and complaints fell almost to nothing.
        </p>

        <p>
          With three tills working at the same speed, the chance that yours is the fastest is one in
          three, and Stone noted that people fixate on the line they are losing to rather than the
          ones they are beating. Larson&apos;s 1987 paper on social justice in queues argued that
          being served in order of arrival matters to people as well as the length of the wait. A
          single serpentine line feeding several counters, of the kind used at banks and airport
          security, guarantees that order, because nobody who arrived later can be served first.
        </p>

        <p className="text-muted-foreground">
          About 11 minutes a day, 67 hours a year and 251 waking days across an adult life, against
          18 minutes a day in the American estimate and 92 minutes a day in the claim of five years.
        </p>
      </div>

      <FAQSection
        faqs={[
          {
            q: "How much of your life do you spend waiting in line?",
            a: "About 251 waking days, based on British polling that puts queuing at around 67 hours a year, or 11 minutes a day, which comes to roughly 4,020 hours over 60 adult years. The American estimate of 37 billion hours a year would make it about 18 minutes a day and a little over one waking year, though nobody has published how that number was worked out.",
          },
          {
            q: "Is it true that people spend five years of their lives waiting in line?",
            a: "No. The five years comes from a 1988 study by the Pittsburgh consultancy Priority Management and would mean about an hour and a half in line every day of a 78-year life. The two to three years quoted by NPR in 2005 has no stated source. The six months from a 2009 British poll is the closest, because it is about 67 hours a year counted in full 24-hour days.",
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
            to="/journal/how-much-time-do-you-spend-on-hold"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much time do you spend on hold in a lifetime? →
          </Link>
        </div>
      </div>

      <div className="mt-10 border-t border-border pt-8">
        <p className="font-serif text-[17px] italic text-foreground/75">
          Put your own numbers into the{" "}
          <a
            href="/calculator"
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
