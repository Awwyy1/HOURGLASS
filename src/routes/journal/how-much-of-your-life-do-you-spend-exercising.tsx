import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { PageSEO } from "../../components/PageSEO";
import { ArticleSchema } from "../../components/ArticleSchema";
import { FAQSection } from "../../components/FAQSection";

export const Route = createFileRoute(
  "/journal/how-much-of-your-life-do-you-spend-exercising",
)({
  component: Article,
});

function Article() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-24">
      <PageSEO
        title="How much of your life do you spend exercising?"
        description="The Bureau of Labor Statistics found Americans average 17 minutes of intentional exercise per day. Over a lifetime that is just over a year of waking time — and only 23 percent of adults meet the minimum health guidelines."
        ogType="article"
      />
      <ArticleSchema
        title="How much of your life do you spend exercising?"
        description="The Bureau of Labor Statistics found Americans average 17 minutes of intentional exercise per day. Over a lifetime that is just over a year of waking time — and only 23 percent of adults meet the minimum health guidelines."
        datePublished="2026-06-27"
        slug="how-much-of-your-life-do-you-spend-exercising"
      />
      <Breadcrumbs
        crumbs={[
          { label: "Hourglass", to: "/" },
          { label: "Journal", to: "/journal" },
          { label: "How much of your life do you spend exercising?" },
        ]}
      />

      <header className="mb-16">
        <div className="mb-6 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          <time dateTime="2026-06-27">June 27, 2026</time>
          <span>·</span>
          <span>3 min read</span>
        </div>
        <h1 className="font-serif text-4xl italic tracking-tight text-foreground md:text-5xl leading-tight">
          How much of your life do you spend exercising?
        </h1>
        <p className="mt-6 font-serif text-[17px] leading-relaxed text-muted-foreground">
          Exercise is the category where the gap between what people do and what they
          intend to do is largest — and where the lifetime total, when you actually run it,
          tends to produce the most uncomfortable reaction.
        </p>
      </header>

      <div className="text-[17px] leading-[1.85] text-foreground/85 space-y-6">
        <p>
          The Bureau of Labor Statistics American Time Use Survey found that Americans
          spend an average of 17 minutes per day on sports, exercise, and recreational
          physical activity. That figure includes everyone — people who work out six days
          a week and people who have not deliberately exercised in years — which means the
          average is being pulled upward by a minority of consistent exercisers while
          reflecting something closer to zero for a large share of the adult population.
          The CDC's physical activity data confirms the distribution: only about 23 percent
          of American adults meet the federal guidelines for both aerobic activity and
          muscle-strengthening exercise. The majority of adults are below the minimum
          recommended threshold.
        </p>

        <p>
          At 17 minutes per day across 60 years of adult life, the total is around
          6,205 hours, or roughly 388 waking days. Just over a year of conscious time
          devoted to deliberate physical activity across an entire life. For context,
          that is less than the lifetime total for Netflix, less than the career total
          for email, and roughly comparable to the time spent waiting in lines and
          waiting rooms. The activity that has the clearest documented impact on
          longevity and quality of life gets about as much lifetime attention as
          enforced inactivity.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          What the numbers look like for people who actually meet the guidelines.
        </h2>

        <p>
          The WHO recommends 150 to 300 minutes of moderate aerobic activity per week
          for adults, plus muscle-strengthening activity on two or more days. At the
          lower end — 150 minutes per week, roughly 21 minutes per day — the annual
          total is about 130 hours. Over 40 years of adult life that comes to 5,200
          hours, or about 325 waking days. Meeting the minimum health guidelines
          produces a lifetime exercise total of less than a year. At 300 minutes per
          week, the upper recommended range, the lifetime total doubles to about
          650 waking days, approaching two years.
        </p>

        <p>
          For people who exercise at the level that appears in longitudinal health
          studies as producing the strongest outcomes — roughly 45 minutes a day,
          five days a week — the annual total is around 195 hours. Over 40 years that
          is 7,800 hours, or just under 488 waking days. One and a third waking years.
          That is the amount of time associated with significantly reduced risk of
          cardiovascular disease, type 2 diabetes, depression, and all-cause mortality.
          Framed as a return on investment, one and a third years of exercise over an
          adult life is associated with additional healthy years at the other end that
          tend to exceed the time put in.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          Why the hours feel harder to find than they are.
        </h2>

        <p>
          The standard explanation for not exercising is time: there is not enough of it.
          The time-use data complicates that explanation. The same surveys that find 17
          minutes of daily exercise also find Americans averaging close to four hours of
          daily television and around four hours of daily smartphone use. The hours exist.
          They are already allocated to something else. The honest version of the constraint
          is not that there is no time, but that the time required for exercise sits in
          direct competition with the most effective leisure delivery mechanisms ever
          built — devices and platforms specifically designed to win that competition.
        </p>

        <p className="text-muted-foreground">
          A year of waking time is what the average adds up to. One and a third years is
          what you get if you meet the recommended guidelines consistently. The difference
          between those two numbers — a few months of additional effort spread across a
          lifetime — is the gap between what most people intend to do and what most people
          actually do. It is also, by most available evidence, one of the more consequential
          gaps in how a life gets spent.
        </p>
      </div>

      <FAQSection
        faqs={[
          {
            q: "How much time does the average person spend exercising per day?",
            a: "About 17 minutes per day according to the Bureau of Labor Statistics American Time Use Survey. That average includes everyone, and is pulled up by a minority of regular exercisers — the CDC finds that only 23 percent of American adults meet the federal guidelines for aerobic and muscle-strengthening activity. For people who exercise consistently at a level that appears in health research as producing meaningful outcomes, the typical figure is closer to 30 to 45 minutes per day on four to five days per week."
          },
          {
            q: "How many hours of exercise does the average person get in a lifetime?",
            a: "Based on the 17-minute daily average across a 60-year adult life, the total is around 6,200 hours, or just over a year of waking time. For someone who meets the WHO's minimum recommendation of 150 minutes per week consistently across 40 adult years, the lifetime total comes to about 5,200 hours — slightly less, because the recommendations are calibrated to five days per week rather than daily. For someone exercising at the level associated with the strongest health outcomes in longitudinal studies, roughly 45 minutes five days a week, the 40-year total reaches about 7,800 hours."
          },
        ]}
      />

      <div className="mt-14 border-t border-border pt-10">
        <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          Related
        </p>
        <div className="space-y-3">
          <Link
            to="/journal/how-much-of-your-life-do-you-spend-sitting"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much of your life do you spend sitting? →
          </Link>
          <Link
            to="/journal/how-much-time-do-you-spend-watching-sports"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much time do you spend watching sports? →
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
