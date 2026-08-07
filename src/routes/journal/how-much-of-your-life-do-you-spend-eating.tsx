import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { PageSEO } from "../../components/PageSEO";
import { ArticleSchema } from "../../components/ArticleSchema";
import { FAQSection } from "../../components/FAQSection";

export const Route = createFileRoute(
  "/journal/how-much-of-your-life-do-you-spend-eating",
)({
  component: Article,
});

function Article() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-24">
      <PageSEO
        title="How much of your life do you spend eating?"
        description="The average person spends a little over an hour a day eating and drinking. Over a lifetime that comes to around four and a half waking years at the table, and the trend has been moving toward doing it faster and alone."
      />
      <ArticleSchema
        title="How much of your life do you spend eating?"
        description="The average person spends a little over an hour a day eating and drinking. Over a lifetime that comes to around four and a half waking years at the table, and the trend has been moving toward doing it faster and alone."
        datePublished="2026-07-24"
        slug="how-much-of-your-life-do-you-spend-eating"
      />
      <Breadcrumbs
        crumbs={[
          { label: "Hourglass", to: "/" },
          { label: "Journal", to: "/journal" },
          { label: "How much of your life do you spend eating?" },
        ]}
      />

      <header className="mb-16">
        <div className="mb-6 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          <time dateTime="2026-07-24">July 24, 2026</time>
          <span>·</span>
          <span>3 min read</span>
        </div>
        <h1 className="font-serif text-4xl italic tracking-tight text-foreground md:text-5xl leading-tight">
          How much of your life do you spend eating?
        </h1>
        <p className="mt-6 font-serif text-[17px] leading-relaxed text-muted-foreground">
          Eating is the rare large time category that a person cannot opt out of,
          which makes the interesting question not how much time it takes but what
          the time has quietly turned into.
        </p>
      </header>

      <div className="text-[17px] leading-[1.85] text-foreground/85 space-y-6">
        <p>
          The Bureau of Labor Statistics American Time Use Survey tracks eating
          and drinking as a primary activity, meaning the time when eating is the
          main thing a person is doing rather than something happening alongside
          work or television. The average American spends around 67 minutes per
          day in that category. Add the substantial amount of eating that happens
          as a secondary activity, at a desk or in front of a screen, and the
          total time with food in hand climbs considerably higher, but the
          hour-a-day figure for eating as its own act is the cleaner number to
          build on.
        </p>

        <p>
          At 67 minutes a day across 79 years of life, the total comes to roughly
          32,200 hours, or about 2,000 waking days. In waking years, that is
          around four and a half years spent eating and drinking. The figure is
          comparable to the lifetime total for social media at current averages,
          and larger than the total most people spend on deliberate exercise,
          which is a comparison worth sitting with given that one of the three is
          non-negotiable and the other two are not.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          What the number has been doing over time.
        </h2>

        <p>
          The striking thing about eating time is not its size but its direction.
          Time-use data across several decades shows the hours devoted to eating
          as a primary, focused activity slowly declining, while eating done
          alongside something else has grown. The shared, seated meal, which for
          most of human history was the default way food was consumed, has become
          one option among several, competing with the desk lunch, the commute
          snack, and the dinner eaten in front of a screen. The total time near
          food has not fallen much. What has changed is how much of it counts as
          a meal in any meaningful sense.
        </p>

        <p>
          France remains the standard counterexample. Time-use surveys there
          consistently find people spending well over two hours a day eating and
          drinking, more than double the American figure, and a large share of it
          seated with other people. The difference is not that the French are
          hungrier. It is that the meal has held its place as an event with a
          beginning and an end, rather than dissolving into the background of
          other activity. The same biological need produces very different
          lifetime numbers depending on whether a culture treats eating as
          something to get through or something to do.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          The one category where speed is not obviously a gain.
        </h2>

        <p>
          In most of the entries in this journal, spending less time on something
          reads as a straightforward efficiency, more hours freed for whatever
          matters more. Eating resists that framing. The research on eating pace
          and satiety suggests that faster meals are associated with eating more,
          not less, because the body's fullness signals take time to register.
          The social research points the same direction: shared meals correlate
          with a range of outcomes, from family stability to individual wellbeing,
          that the solo desk lunch does not. The four and a half years are not
          obviously worth trimming, and may be among the more defensible large
          totals a life contains.
        </p>

        <p className="text-muted-foreground">
          Four and a half waking years at the table, give or take, and falling
          for reasons that are not clearly to anyone's benefit. It is one of the
          few numbers in this series where the honest advice runs the other way
          from usual. This is probably not the hour of your day to optimise.
        </p>
      </div>

      <FAQSection
        faqs={[
          {
            q: "How many hours a day does the average person spend eating?",
            a: "About 67 minutes for eating and drinking as a primary activity, according to the Bureau of Labor Statistics American Time Use Survey. That figure counts the time when eating is the main thing a person is doing. Once you include eating done alongside work, television, or a commute, the total time with food in hand is meaningfully higher. The primary-activity number has been slowly declining for decades even as the amount of distracted, secondary eating has grown."
          },
          {
            q: "How many years of your life do you spend eating?",
            a: "Around four and a half waking years, based on the roughly one hour a day of eating as a focused activity across a 79-year life. The number varies significantly by country and culture: in France, where time-use surveys find people spending well over two hours a day eating and drinking, the lifetime total is roughly double the American figure. Whether that counts as time lost or time well spent depends on how much of it is a shared, unhurried meal rather than food consumed in the gaps of other activity."
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
            to="/journal/how-much-of-your-life-do-you-spend-in-the-shower"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much of your life do you spend in the shower? →
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
