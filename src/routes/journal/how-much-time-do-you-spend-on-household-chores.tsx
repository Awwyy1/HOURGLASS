import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { PageSEO } from "../../components/PageSEO";
import { ArticleSchema } from "../../components/ArticleSchema";
import { FAQSection } from "../../components/FAQSection";

export const Route = createFileRoute(
  "/journal/how-much-time-do-you-spend-on-household-chores",
)({
  component: Article,
});

function Article() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-24">
      <PageSEO
        title="How much time do you spend on household chores?"
        description="The Bureau of Labor Statistics puts household activities — cleaning, laundry, organizing — at around two hours a day for the average American. Over a lifetime that is more than six waking years, and the split between men and women remains wide."
        ogType="article"
      />
      <ArticleSchema
        title="How much time do you spend on household chores?"
        description="The Bureau of Labor Statistics puts household activities — cleaning, laundry, organizing — at around two hours a day for the average American. Over a lifetime that is more than six waking years, and the split between men and women remains wide."
        datePublished="2026-07-13"
        slug="how-much-time-do-you-spend-on-household-chores"
      />
      <Breadcrumbs
        crumbs={[
          { label: "Hourglass", to: "/" },
          { label: "Journal", to: "/journal" },
          { label: "How much time do you spend on household chores?" },
        ]}
      />

      <header className="mb-16">
        <div className="mb-6 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          <time dateTime="2026-07-13">July 13, 2026</time>
          <span>·</span>
          <span>3 min read</span>
        </div>
        <h1 className="font-serif text-4xl italic tracking-tight text-foreground md:text-5xl leading-tight">
          How much time do you spend on household chores?
        </h1>
        <p className="mt-6 font-serif text-[17px] leading-relaxed text-muted-foreground">
          Chores are the maintenance cost of having a home, and like most maintenance
          costs, they are easy to underestimate until someone runs the total.
        </p>
      </header>

      <div className="text-[17px] leading-[1.85] text-foreground/85 space-y-6">
        <p>
          The Bureau of Labor Statistics American Time Use Survey tracks a category
          called "household activities," which includes cleaning, laundry, lawn care,
          organizing, and general home maintenance, separate from food preparation and
          childcare. The most recent data puts the average American at around two hours
          per day in this category. That figure is an average across the entire adult
          population, including people who live alone in small apartments and people
          managing large households with children, so the individual range beneath it
          is considerable.
        </p>

        <p>
          At two hours per day across 60 years of adult life, the lifetime total is
          43,800 hours, or roughly 2,738 waking days. Just over seven and a half waking
          years spent cleaning, doing laundry, tidying, and maintaining the physical
          space a person lives in. That is a larger lifetime total than most screen-time
          categories examined in this project, including the combined total for every
          major social media platform. Chores do not generate the same cultural anxiety
          as scrolling, but they occupy comparable or greater hours across a life.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          The gender split that has narrowed but not closed.
        </h2>

        <p>
          BLS data has consistently found a gap between how much time men and women
          report spending on household activities, though the gap has narrowed over
          recent decades. Current figures put women at around 2.3 hours per day on
          household activities and men at around 1.6 hours, a difference of roughly
          42 minutes daily. Over a 60-year adult life that gap compounds to approximately
          15,330 hours, or about 4.2 waking years — a difference in lifetime chore time
          between men and women larger than the total lifetime hours most people spend
          on Instagram. The gap was considerably wider several decades ago, when time-use
          surveys from the 1960s and 1970s found women spending upward of four hours a day
          on housework compared to under an hour for men, so the trend has moved
          meaningfully in the direction of parity even though it has not reached it.
        </p>

        <p>
          The gap also shifts depending on household composition. Married couples with
          children show the widest disparity, while single adults living alone show the
          smallest, largely because there is only one person's chores to distribute in
          the second case. Dual-income households with children have narrowed the gap
          more than single-income households, though even in households where both
          partners work full time, survey data continues to show an uneven split in
          who handles which specific categories of household labor.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          What has and has not changed with household technology.
        </h2>

        <p>
          Washing machines, dishwashers, robot vacuums, and other household technology
          have existed in widespread use for decades, and the promise attached to most
          of them was time saved. The BLS time-use data tells a more complicated story.
          Total household activity time has declined only modestly since detailed
          tracking began in the mid-2000s, despite substantial improvements in the
          efficiency of individual appliances. Part of the explanation is that living
          standards around cleanliness and organization have risen alongside the tools
          available to meet them — homes are larger on average than they were decades
          ago, wardrobes are bigger, and the volume of possessions requiring organization
          has grown. The tools got better. The task also got bigger.
        </p>

        <p className="text-muted-foreground">
          Seven and a half years is what chores cost the average adult across a lifetime.
          Unlike screen time, almost nobody frames this as time they would like to
          reclaim, because the output is visible and immediate: a clean kitchen, folded
          laundry, a functioning home. Whether that output is worth the hours, and
          whether the hours are distributed fairly within a household, are separate
          questions worth asking even when the chores themselves are not in dispute.
        </p>
      </div>

      <FAQSection
        faqs={[
          {
            q: "How many hours a day does the average person spend on household chores?",
            a: "Around two hours per day, based on the Bureau of Labor Statistics American Time Use Survey category for household activities, which covers cleaning, laundry, organizing, and general home maintenance separate from cooking and childcare. Women average around 2.3 hours daily and men around 1.6 hours, a gap that has narrowed significantly since the 1960s and 1970s but has not closed. The figure varies considerably based on household size, whether children are present, and living arrangement."
          },
          {
            q: "Has household technology reduced the time spent on chores?",
            a: "Only modestly, according to BLS time-use data collected since the mid-2000s. Individual appliances like washing machines, dishwashers, and robot vacuums have become more efficient, but total household activity time has not fallen proportionally. Larger average home sizes, bigger wardrobes, and a general rise in the volume of possessions requiring organization appear to have offset much of the efficiency gained from better tools."
          },
        ]}
      />

      <div className="mt-14 border-t border-border pt-10">
        <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          Related
        </p>
        <div className="space-y-3">
          <Link
            to="/journal/how-much-of-your-life-do-you-spend-eating"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much of your life do you spend eating? →
          </Link>
          <Link
            to="/journal/how-much-time-do-you-spend-getting-ready"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much time do you spend getting ready in the morning? →
          </Link>
          <Link
            to="/journal/how-much-time-do-you-spend-looking-for-lost-things"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much time do you spend looking for lost things? →
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
