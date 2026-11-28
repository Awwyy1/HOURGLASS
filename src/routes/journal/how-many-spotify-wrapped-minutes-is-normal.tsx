import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { PageSEO } from "../../components/PageSEO";
import { ArticleSchema } from "../../components/ArticleSchema";
import { FAQSection } from "../../components/FAQSection";
import { AnswerBlock } from "../../components/AnswerBlock";
import {
  FigureCard,
  FigurePanel,
  PeriodTable,
  type LifeFigureData,
} from "../../components/LifeFigure";
import { Compare } from "../../components/BreakdownFigures";
import { WrappedCalculator } from "../../components/WrappedCalculator";

export const Route = createFileRoute("/journal/how-many-spotify-wrapped-minutes-is-normal")({
  component: Article,
});

const TITLE = "How many Spotify Wrapped minutes is normal?";
const DESCRIPTION =
  "Spotify's own figures put the average listener near 16,000 minutes in a Wrapped year. Totals up to about 57,000 fit what people hear across every format.";

/** January 1 to mid-November, the window Wrapped counts. */
const WINDOW_DAYS = 320;
const BENCHMARKS = [
  { label: "Spotify average", minutes: 15_800 },
  { label: "all platforms", minutes: 20_200 },
  { label: "all music", minutes: 56_800 },
];

/**
 * Spotify's 25 hours a month as a daily habit, for the period table (and the
 * journal's summary page). 25 h × 12 / 365 = 0.82 h, about 49 minutes a day.
 */
const FIGURE: LifeFigureData = {
  answer: {
    value: "≈15,800",
    unit: "minutes",
    text: "for the average Spotify listener in a Wrapped year.",
  },
  day: {
    hours: 0.821918,
    value: "3.4%",
    text: "of every day: about 49 minutes of music, podcasts and video.",
  },
  toYear: {
    op: "× 365",
    text: "every day of the year",
  },
  year: {
    days: 12.5,
    value: "12.5 days",
    text: "300 hours a year",
  },
  toLife: {
    op: "× 60",
    text: "60 adult years",
  },
  life: {
    years: 3.1,
    total: 60,
    value: "3.1 yrs",
    text: "of your 60 waking years: about 18,000 hours.",
  },
};

function ArticleFigure() {
  return (
    <FigurePanel
      accent={["#1d7a4a", "#5fd391"]}
      answer={{
        value: "≈15,800",
        unit: "minutes",
        text: "for the average Spotify listener in a Wrapped year, from Spotify's own figures.",
      }}
    >
      <FigureCard>
        <WrappedCalculator
          windowDays={WINDOW_DAYS}
          average={15_800}
          benchmarks={BENCHMARKS}
          accent={["#1d7a4a", "#5fd391"]}
        />
      </FigureCard>
      <FigureCard>
        <Compare
          num="02"
          title="Minutes in a Wrapped window"
          rows={[
            {
              label: "Average Spotify user (Spotify)",
              value: 15_800,
              display: "15,800",
              accent: true,
            },
            { label: "Music on every platform (Nielsen)", value: 20_200, display: "20,200" },
            { label: "All music, every format (IFPI)", value: 56_800, display: "56,800" },
          ]}
          text="Each figure converted to the 320 days from January 1 to mid-November that Wrapped counts."
        />
      </FigureCard>
    </FigurePanel>
  );
}

const ROWS = [10_000, 20_000, 40_000, 60_000, 100_000].map((total) => {
  const perDay = total / WINDOW_DAYS;
  return {
    total,
    perDay,
    share: (perDay / 960) * 100,
    years: (perDay * 365 * 60) / 60 / 5840,
  };
});

function ScaleTable() {
  const fmt = (n: number) => Math.round(n).toLocaleString("en-US");
  const day = (m: number) =>
    m < 60 ? `${Math.round(m)} min` : `${Math.floor(m / 60)} h ${Math.round(m % 60)} min`;
  return (
    <table className="w-full border-collapse text-left">
      <caption className="mb-4 text-left font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
        Wrapped totals as a day and a lifetime
      </caption>
      <thead>
        <tr className="border-b border-border font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          <th scope="col" className="py-2 pr-3 font-normal">
            Wrapped
          </th>
          <th scope="col" className="py-2 pr-3 text-right font-normal">
            A day
          </th>
          <th scope="col" className="py-2 pr-3 text-right font-normal">
            Waking hours
          </th>
          <th scope="col" className="py-2 text-right font-normal">
            60 years
          </th>
        </tr>
      </thead>
      <tbody className="text-[15px]">
        {ROWS.map((r) => (
          <tr key={r.total} className="border-b border-border">
            <th
              scope="row"
              className="py-2.5 pr-3 font-mono text-sm font-normal tabular-nums text-foreground"
            >
              {fmt(r.total)}
            </th>
            <td className="py-2.5 pr-3 text-right font-mono text-sm tabular-nums text-foreground">
              {day(r.perDay)}
            </td>
            <td className="py-2.5 pr-3 text-right font-mono text-sm tabular-nums text-foreground">
              {r.share.toFixed(1)}%
            </td>
            <td className="py-2.5 text-right font-mono text-sm tabular-nums text-foreground">
              {r.years.toFixed(1)} yrs
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Article() {
  return (
    <article className="article-with-figure mx-auto max-w-2xl px-6 py-24">
      <PageSEO title={TITLE} description={DESCRIPTION} ogType="article" />
      <ArticleSchema
        title={TITLE}
        description={DESCRIPTION}
        datePublished="2026-08-28"
        slug="how-many-spotify-wrapped-minutes-is-normal"
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
          <time dateTime="2026-08-28">August 28, 2026</time>
          <span>·</span>
          <span>3 min read</span>
        </div>
        <h1 className="font-serif text-4xl italic tracking-tight text-foreground md:text-5xl leading-tight">
          {TITLE}
        </h1>
        <p className="mt-6 font-serif text-[17px] leading-relaxed text-muted-foreground">
          Wrapped gives everyone a single number and no way to tell whether it is large. The figures
          that would answer the question exist, but Spotify does not put them in the same place.
        </p>
      </header>

      <ArticleFigure />

      <AnswerBlock>
        Spotify does not publish an average Wrapped total, but its own filings put the average user
        at about 25 hours of listening a month. Over the Wrapped window, January 1 to mid-November,
        that comes to roughly 15,800 minutes. Totals up to about 57,000 minutes sit within what the
        average person hears across radio, streaming and every other format combined.
      </AnswerBlock>

      <PeriodTable data={FIGURE} />

      <div className="text-[17px] leading-[1.85] text-foreground/85 space-y-6">
        <p>
          The most solid figure comes from Spotify itself. In the prospectus it filed before listing
          its shares in 2018, the company reported that the average monthly active user streamed 25
          hours of content a month at the end of 2017, counting music, podcasts and video together.
          That is about 49 minutes a day. Spotify has not published a newer version of the same
          measure, and the average mixes free users who open the app now and then with subscribers
          who barely close it; the same filing noted that Premium subscribers streamed more than
          three times as much as listeners on the free tier.
        </p>

        <p>
          Wrapped does not cover a full year. Spotify counts listening from January 1 until around
          mid-November, about 320 days, and builds the summary from that window. At 49 minutes a day
          across 320 days, the average listener ends up near 15,800 minutes, or about 263 hours. A
          full calendar year at the same pace is 18,000 minutes, and 60 adult years of it comes to
          about 18,000 hours, roughly 3.1 waking years.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          What the other benchmarks say.
        </h2>

        <p>
          Spotify is only part of how people hear music. Nielsen&apos;s Music 360 research, which
          this journal uses for the lifetime total of music listening, puts Americans at about 32
          hours a month across every source, which over the Wrapped window is roughly 20,200
          minutes. The IFPI&apos;s Engaging with Music survey of 26 major markets found an average
          of 20.7 hours a week in 2023 across every format it counts, from radio to streaming, and
          over the same window that comes to about 57,000 minutes.
        </p>

        <p>
          Those three figures give the scale a shape. Below about 8,000 minutes, Spotify is a small
          part of someone&apos;s listening. Between roughly 8,000 and 25,000, a total is close to
          what the average listener produces. Above 57,000, a single app is carrying more music than
          the average person hears from every source combined, which is easy to reach for someone
          who listens through a working day and still uncommon.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          What the number looks like as a day.
        </h2>

        <p>
          Dividing by the 320 days of the Wrapped window turns the total into something easier to
          picture, and multiplying the daily figure out over 60 adult years shows what the habit
          adds up to if it holds.
        </p>

        <ScaleTable />

        <p>
          At the top of that range, 100,000 minutes is more than five hours a day, a third of every
          waking hour from January to November. Over 60 years at that pace it would come to about
          19.5 waking years, close to the lifetime total this journal finds for time spent on a
          laptop.
        </p>

        <p className="text-muted-foreground">
          The average Spotify listener lands near 15,800 minutes, the average person&apos;s music
          from every source near 57,000, and a total of 100,000 works out to more than five hours a
          day.
        </p>
      </div>

      <FAQSection
        faqs={[
          {
            q: "Is 30,000 minutes a lot on Spotify Wrapped?",
            a: "It is about twice the average Spotify listener's total of roughly 15,800 minutes, and works out to about 94 minutes a day across the Wrapped window. It is still well below the roughly 57,000 minutes the average person hears across every format in the same period, so it is high for one app without being unusual for someone who listens to most of their music there.",
          },
          {
            q: "When does Spotify Wrapped stop counting?",
            a: "Spotify counts listening from January 1 until around mid-November and does not publish an exact cut-off date. Whatever you play in the last six weeks or so of the year does not appear in that year's Wrapped, which is why the total covers about 320 days rather than 365.",
          },
        ]}
      />

      <div className="mt-14 border-t border-border pt-10">
        <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          Related
        </p>
        <div className="space-y-3">
          <Link
            to="/journal/how-much-time-do-you-spend-listening-to-music"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much time do you spend listening to music? →
          </Link>
          <Link
            to="/journal/how-much-time-do-you-spend-listening-to-podcasts"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much time do you spend listening to podcasts? →
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
