import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { PageSEO } from "../../components/PageSEO";
import { ArticleSchema } from "../../components/ArticleSchema";
import { FAQSection } from "../../components/FAQSection";

export const Route = createFileRoute(
  "/journal/how-much-time-do-you-spend-grocery-shopping",
)({
  component: Article,
});

function Article() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-24">
      <PageSEO
        title="How much time do you spend grocery shopping?"
        description="The average American spends about 43 minutes on a single grocery trip and shops roughly 1.5 times a week. Over a lifetime that adds up to more than two waking years spent walking store aisles."
      />
      <ArticleSchema
        title="How much time do you spend grocery shopping?"
        description="The average American spends about 43 minutes on a single grocery trip and shops roughly 1.5 times a week. Over a lifetime that adds up to more than two waking years spent walking store aisles."
        datePublished="2026-07-18"
        slug="how-much-time-do-you-spend-grocery-shopping"
      />
      <Breadcrumbs
        crumbs={[
          { label: "Hourglass", to: "/" },
          { label: "Journal", to: "/journal" },
          { label: "How much time do you spend grocery shopping?" },
        ]}
      />

      <header className="mb-16">
        <div className="mb-6 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          <time dateTime="2026-07-18">July 18, 2026</time>
          <span>·</span>
          <span>3 min read</span>
        </div>
        <h1 className="font-serif text-4xl italic tracking-tight text-foreground md:text-5xl leading-tight">
          How much time do you spend grocery shopping?
        </h1>
        <p className="mt-6 font-serif text-[17px] leading-relaxed text-muted-foreground">
          Grocery shopping is one of the few recurring errands most people do not
          resent, largely because the alternative — running out of food — is worse.
          That does not mean the hours are small.
        </p>
      </header>

      <div className="text-[17px] leading-[1.85] text-foreground/85 space-y-6">
        <p>
          Time and Date USA and several retail industry surveys have consistently
          found that the average American grocery trip takes around 41 to 43 minutes
          from arrival to checkout, including the drive into the parking lot but not
          the return trip home. Food Marketing Institute research has found that the
          average household makes a primary grocery run around 1.5 times per week,
          supplemented by smaller top-up trips for specific items. Combining a 43-minute
          primary trip with a shorter 15-minute supplementary trip, weekly grocery time
          for an average household comes to approximately 79 minutes.
        </p>

        <p>
          At roughly 80 minutes per week across 60 years of adult life, the lifetime
          total is around 4,160 hours, or approximately 260 waking days. That is
          just over two-thirds of a waking year spent specifically inside grocery
          stores, not counting the driving time to and from them, which for many
          people adds another 15 to 20 minutes round trip per visit. Including
          transit time, the lifetime total climbs closer to 6,000 hours, or about
          375 waking days — just over a full waking year across an adult life.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          Why grocery shopping resists the automation that changed other errands.
        </h2>

        <p>
          Grocery delivery and pickup services have existed at meaningful scale since
          the mid-2010s, and adoption accelerated sharply during the pandemic. Yet
          the shift away from in-person grocery shopping has been slower and shallower
          than the equivalent shift in general retail. FMI's ongoing US Grocery Shopper
          Trends research has found that online grocery spending, while growing, still
          represents a modest minority of total grocery spend for most households, and
          a large share of consumers who use delivery for routine staples still prefer
          shopping in person for fresh produce, meat, and items where visual selection
          matters. The trip persists because a meaningful portion of what people are
          actually doing at the grocery store is not efficiently replaceable by an
          algorithm picking substitutes on their behalf.
        </p>

        <p>
          There is also a browsing component that resembles other forms of leisure
          shopping more than it resembles pure errand-running. Consumer research on
          in-store behavior has found that a portion of grocery trips include
          unplanned exploration — walking aisles not on the list, discovering new
          products, and the low-stakes decision-making that some shoppers report
          finding genuinely relaxing rather than burdensome. This is part of why
          grocery shopping shows up less frequently than other chores on lists of
          tasks people want to eliminate from their week, even though the hours are
          comparable to activities people actively try to reduce.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          What the trip actually replaces.
        </h2>

        <p>
          The honest comparison for grocery shopping time is not zero. The alternative
          to shopping in person is either delivery, which carries its own time cost in
          selecting items on a screen and often a delivery fee, or eating out, which
          for most households costs considerably more per meal and typically more time
          per meal as well once ordering, waiting, and eating are included. Measured
          against those alternatives, two-thirds of a waking year in a grocery store is
          a comparatively efficient way to keep a household fed, which may explain why
          it generates less friction than other recurring time obligations of similar size.
        </p>

        <p className="text-muted-foreground">
          A year of waking time, give or take, is what grocery shopping costs across
          an adult life once the driving is included. It sits quietly among the larger
          totals in this project, neither resented nor celebrated, simply absorbed
          into the rhythm of keeping a kitchen stocked. Whether that absorption is
          appropriate is worth a moment's thought, even for a task this ordinary.
        </p>
      </div>

      <FAQSection
        faqs={[
          {
            q: "How long does the average grocery trip take?",
            a: "Around 41 to 43 minutes from arrival to checkout, based on retail industry time studies, not including the drive to and from the store. Combined with a typical pattern of 1.5 primary trips per week plus smaller top-up runs, weekly grocery shopping time for an average household comes to roughly 80 minutes, or just under an hour and a half."
          },
          {
            q: "Has online grocery delivery reduced how much time people spend shopping?",
            a: "Less than expected. Online grocery adoption grew substantially during the pandemic, but Food Marketing Institute research has consistently found that online grocery spend still represents a modest minority of total household grocery spending. Many consumers who use delivery for routine staples continue to prefer in-person shopping for fresh produce, meat, and items where visual selection matters, which has kept in-store grocery trips a persistent part of most households' weekly routine."
          },
        ]}
      />

      <div className="mt-14 border-t border-border pt-10">
        <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          Related
        </p>
        <div className="space-y-3">
          <Link
            to="/journal/how-much-of-your-life-do-you-spend-cooking"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much of your life do you spend cooking? →
          </Link>
          <Link
            to="/journal/how-much-time-do-you-spend-shopping-online"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much time do you spend shopping online? →
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
