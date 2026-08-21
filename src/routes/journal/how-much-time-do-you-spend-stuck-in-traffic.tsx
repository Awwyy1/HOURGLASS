import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { PageSEO } from "../../components/PageSEO";
import { ArticleSchema } from "../../components/ArticleSchema";
import { FAQSection } from "../../components/FAQSection";

export const Route = createFileRoute(
  "/journal/how-much-time-do-you-spend-stuck-in-traffic",
)({
  component: Article,
});

function Article() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-24">
      <PageSEO
        title="How much time do you spend stuck in traffic?"
        description="INRIX found the average US driver lost 43 hours to congestion in 2023. In the worst cities, the figure exceeds 60 hours a year. Over a driving lifetime, that is more than two waking years spent not moving."
        ogType="article"
      />
      <ArticleSchema
        title="How much time do you spend stuck in traffic?"
        description="INRIX found the average US driver lost 43 hours to congestion in 2023. In the worst cities, the figure exceeds 60 hours a year. Over a driving lifetime, that is more than two waking years spent not moving."
        datePublished="2026-06-30"
        slug="how-much-time-do-you-spend-stuck-in-traffic"
      />
      <Breadcrumbs
        crumbs={[
          { label: "Hourglass", to: "/" },
          { label: "Journal", to: "/journal" },
          { label: "How much time do you spend stuck in traffic?" },
        ]}
      />

      <header className="mb-16">
        <div className="mb-6 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          <time dateTime="2026-06-30">June 30, 2026</time>
          <span>·</span>
          <span>3 min read</span>
        </div>
        <h1 className="font-serif text-4xl italic tracking-tight text-foreground md:text-5xl leading-tight">
          How much time do you spend stuck in traffic?
        </h1>
        <p className="mt-6 font-serif text-[17px] leading-relaxed text-muted-foreground">
          This is a different number from your commute. Commuting is the time your
          trip is supposed to take. Traffic is the time added on top of that by
          everyone else on the road at the same moment you are.
        </p>
      </header>

      <div className="text-[17px] leading-[1.85] text-foreground/85 space-y-6">
        <p>
          INRIX, which tracks traffic congestion across major metro areas using GPS
          data from millions of vehicles, found that the average American driver lost
          43 hours to congestion in 2023, up from 42 hours the year before as commuting
          patterns continued recovering after the pandemic. That figure specifically
          measures delay: the extra time a trip takes because of traffic, compared to
          how long it would take on an open road. It sits on top of, not inside, the
          baseline commute time that most people already track mentally.
        </p>

        <p>
          At 43 hours per year across a 40-year driving career, the total is 1,720
          hours, or roughly 108 waking days. In the worst American cities the number
          is considerably higher. INRIX's 2023 report found drivers in New York City
          losing 101 hours to congestion, and Chicago drivers losing 96. At 100 hours
          per year across the same 40-year period, the lifetime total climbs to 4,000
          hours, or about 250 waking days. Just over two-thirds of a waking year spent
          specifically on delay, not on the trip itself, in a single major city.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          Why traffic delay is a different problem from a long commute.
        </h2>

        <p>
          A long commute is at least predictable. If you live 40 minutes from work,
          you can plan around 40 minutes, leave at a consistent time, and structure
          your day accordingly. Congestion delay is the opposite: it is the variable
          part of the trip; some days it adds ten minutes, other days it adds an hour,
          and the unpredictability itself carries a cost that is separate from the raw
          time. Research on commuting stress consistently finds that unpredictable
          delays produce measurably higher stress responses than predictable ones of
          equal average length. Two commutes that average the same total time do not
          produce the same experience if one of them is reliable and the other is not.
        </p>

        <p>
          The economic framing of this problem has been studied extensively. The Texas
          A&M Transportation Institute's Urban Mobility Report has tracked congestion
          costs for decades and consistently finds that the value of time lost to traffic,
          combined with wasted fuel, runs into the hundreds of billions of dollars annually
          for the US as a whole. Individual estimates put the average driver's personal
          cost of congestion, valuing their time at a standard commuting rate, at
          somewhere around 900 to 1,000 dollars per year in the most congested metro areas.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          What remote work changed and what it did not.
        </h2>

        <p>
          The pandemic produced a sharp, if temporary, drop in congestion as remote
          work reduced the number of cars on the road during peak hours. INRIX data
          showed 2020 congestion levels well below pre-pandemic baselines in nearly
          every major US city. That reduction did not hold. By 2023, congestion in
          most metro areas had returned to within a few percentage points of 2019
          levels, even in cities with meaningfully higher rates of remote and hybrid
          work. The likely explanation is that hybrid schedules concentrated in-office
          days around similar mid-week patterns, meaning fewer total commuting days
          but similar peak-hour density on the days people did drive in.
        </p>

        <p className="text-muted-foreground">
          The 43-hour national average is a number most drivers absorb without ever
          calculating what it costs across a career. Over 250 waking days is what the
          worst American commutes actually cost when you isolate the delay from the
          drive itself. It is not a small number, and unlike most items on this list,
          almost none of it was time anyone chose to spend.
        </p>
      </div>

      <FAQSection
        faqs={[
          {
            q: "How many hours a year does the average American driver lose to traffic?",
            a: "INRIX found the average US driver lost 43 hours to congestion in 2023, a figure that measures delay specifically — the extra time added to a trip beyond what it would take on an open road. That number sits on top of the baseline commute time itself. In the most congested cities, including New York and Chicago, the figure runs well over 90 hours per year, more than double the national average."
          },
          {
            q: "Which US cities have the worst traffic congestion?",
            a: "INRIX's 2023 Global Traffic Scorecard placed New York City at the top of major US metros, with drivers losing around 101 hours annually to congestion. Chicago followed closely at 96 hours. Boston, Philadelphia, and Miami have consistently ranked in the top tier of congested cities across recent years. Congestion levels dropped sharply in 2020 due to the pandemic but had largely returned to pre-pandemic levels in most metro areas by 2023, despite continued hybrid work arrangements."
          },
        ]}
      />

      <div className="mt-14 border-t border-border pt-10">
        <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          Related
        </p>
        <div className="space-y-3">
          <Link
            to="/journal/how-much-of-your-life-do-you-spend-driving"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much of your life do you spend driving? →
          </Link>
          <Link
            to="/journal/how-much-of-your-life-do-you-spend-commuting"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much of your life do you spend commuting? →
          </Link>
          <Link
            to="/journal/how-much-time-do-you-spend-waiting"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much time do you spend waiting in a lifetime? →
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
