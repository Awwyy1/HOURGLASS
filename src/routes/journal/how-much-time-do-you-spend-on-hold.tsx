import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { PageSEO } from "../../components/PageSEO";
import { ArticleSchema } from "../../components/ArticleSchema";
import { FAQSection } from "../../components/FAQSection";
import { AnswerBlock } from "../../components/AnswerBlock";
import { FigureCard, FigurePanel } from "../../components/LifeFigure";
import { Compare } from "../../components/BreakdownFigures";
import { RateCalculator } from "../../components/RateCalculator";

export const Route = createFileRoute("/journal/how-much-time-do-you-spend-on-hold")({
  component: Article,
});

const TITLE = "How much time do you spend on hold in a lifetime?";
const DESCRIPTION =
  "Call data put the average American adult at about 3.6 hours a year on hold, roughly 14 waking days over an adult life. The popular 43 days comes from a 2013 poll.";

function ArticleFigure() {
  return (
    <FigurePanel
      accent={["#8a5a1c", "#e2a65a"]}
      answer={{
        value: "≈14",
        unit: "waking days",
        text: "on hold over 60 adult years, at about 3.6 hours a year.",
      }}
    >
      <FigureCard>
        <RateCalculator
          num="01"
          title="Your hold time"
          countLabel="Calls a month"
          countDefault={2}
          minutesLabel="Minutes on hold each"
          minutesDefault={9}
          years={60}
          yearsLabel="60 adult years"
          share={{
            label: "time on hold",
            filename: "hourglass-on-hold",
            link: "https://www.justhourglass.me/journal/how-much-time-do-you-spend-on-hold",
            accent: ["#8a5a1c", "#e2a65a"],
          }}
        />
      </FigureCard>
      <FigureCard>
        <Compare
          num="02"
          title="Hours on hold a year, per adult"
          rows={[
            { label: "Call data, US (Marchex)", value: 3.6, display: "3.6 h", accent: true },
            { label: "National total, UK (ServiceNow)", value: 8.4, display: "8.4 h" },
            { label: "Self-reported, poll (TalkTo)", value: 13, display: "13 h" },
          ]}
          text="Over 60 adult years that is about 14, 32 and 49 waking days. Remembered waits run longest."
        />
      </FigureCard>
    </FigurePanel>
  );
}

function Article() {
  return (
    <article className="article-with-figure mx-auto max-w-2xl px-6 py-24">
      <PageSEO title={TITLE} description={DESCRIPTION} ogType="article" />
      <ArticleSchema
        title={TITLE}
        description={DESCRIPTION}
        datePublished="2026-09-18"
        slug="how-much-time-do-you-spend-on-hold"
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
          <time dateTime="2026-09-18">September 18, 2026</time>
          <span>·</span>
          <span>3 min read</span>
        </div>
        <h1 className="font-serif text-4xl italic tracking-tight text-foreground md:text-5xl leading-tight">
          {TITLE}
        </h1>
        <p className="mt-6 font-serif text-[17px] leading-relaxed text-muted-foreground">
          Hold music is designed to be forgettable, and so is the time spent listening to it. The
          figures usually quoted for a lifetime of it differ by a factor of three, and the gap says
          something about how waiting is remembered.
        </p>
      </header>

      <ArticleFigure />

      <AnswerBlock>
        Call data put the average American adult at about 3.6 hours a year on hold, which over 60
        adult years comes to about 216 hours, or 14 waking days. The widely quoted figure of 43 days
        comes from a 2013 poll in which people estimated their own weekly hold time, counted across
        an entire life from birth.
      </AnswerBlock>

      <div className="text-[17px] leading-[1.85] text-foreground/85 space-y-6">
        <p>
          In 2016 Marchex, an analytics firm that measures phone calls between businesses and their
          customers, estimated that Americans spend 900 million hours a year on hold. Spread across
          the roughly 249 million adults in the country at the time, that is about 3.6 hours each,
          or around 18 minutes a month. Over 60 adult years the total is about 216 hours, roughly 14
          waking days, the kind of number that disappears inside a life without anyone noticing it
          leave.
        </p>

        <p>
          Surveys produce much larger figures. A 2013 poll for TalkTo found that most people
          believed they spent about 15 minutes a week on hold, which is 13 hours a year. That weekly
          figure, multiplied across a 78-year life and counted in full 24-hour days, is the source
          of the often repeated claim that people spend 43 days of their lives on hold, a total that
          starts at birth, years before anyone makes a call to a bank. Counted over 60 adult years
          in waking days, the same estimate comes to about 49.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          Why the remembered number is bigger.
        </h2>

        <p>
          The gap between the measured and the remembered figure runs in the direction that research
          on waiting predicts. David Maister&apos;s 1985 paper on the psychology of waiting lines
          set out principles that service designers still use, among them that unoccupied time feels
          longer than occupied time and that uncertain waits feel longer than known ones. A hold
          queue is both, since there is nothing to do and the recorded voice insisting that the call
          is important gives no sense of when it will end. A weekly total estimated after the fact
          inherits that inflation.
        </p>

        <p>
          Collective measures from other countries sit between the two. A ServiceNow study of
          British consumers put the national total at more than 445 million hours a year, roughly
          8.4 hours for each adult, which over 60 years would come to about 32 waking days. Hold
          time also varies more from person to person than most habits in this journal, because a
          single dispute with an insurer or an airline can add more than an average year of it in
          one afternoon.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          Where it sits among the other waits.
        </h2>

        <p>
          This journal puts the total time Americans spend in passive waiting at about 37 minutes a
          day, counting lines, waiting rooms, traffic lights and hold queues together, which comes
          to just over two waking years across an adult life. Hold time is one of the smaller pieces
          of that, well behind the roughly 137 waking days a driver spends at red lights, and it is
          the only one that arrives with its own soundtrack.
        </p>

        <p className="text-muted-foreground">
          About 3.6 hours a year, 216 hours across an adult life and 14 waking days, against a
          remembered figure more than three times larger.
        </p>
      </div>

      <FAQSection
        faqs={[
          {
            q: "How much time does the average person spend on hold in a lifetime?",
            a: "Based on call data that put Americans at 900 million hours a year on hold, the average adult spends about 3.6 hours a year, or around 216 hours over 60 adult years. That is about 14 waking days. Survey-based estimates run three to four times higher, because people tend to remember hold time as longer than it was.",
          },
          {
            q: "Is it true that people spend 43 days on hold?",
            a: "That figure comes from a 2013 TalkTo poll in which people estimated about 15 minutes a week on hold, multiplied across a 78-year life and counted in full 24-hour days. It includes childhood, when nobody is calling customer service, and it relies on remembered rather than measured time. Over an adult life in waking days the same estimate gives about 49, and call data about 14.",
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
            to="/journal/how-much-of-your-life-do-you-spend-at-red-lights"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much of your life do you spend at red lights? →
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
