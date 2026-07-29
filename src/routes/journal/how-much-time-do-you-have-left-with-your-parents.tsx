import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { PageSEO } from "../../components/PageSEO";
import { ArticleSchema } from "../../components/ArticleSchema";
import { FAQSection } from "../../components/FAQSection";

export const Route = createFileRoute(
  "/journal/how-much-time-do-you-have-left-with-your-parents",
)({
  component: Article,
});

function Article() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-24">
      <PageSEO
        title="How much time do you have left with your parents?"
        description="Time-use data shows that most of the hours you will ever spend with your parents were already spent before you turned eighteen. For an adult who visits twice a year, what remains is measured in weeks, not years."
      />
      <ArticleSchema
        title="How much time do you have left with your parents?"
        description="Time-use data shows that most of the hours you will ever spend with your parents were already spent before you turned eighteen. For an adult who visits twice a year, what remains is measured in weeks, not years."
        datePublished="2026-07-30"
        slug="how-much-time-do-you-have-left-with-your-parents"
      />
      <Breadcrumbs
        crumbs={[
          { label: "Hourglass", to: "/" },
          { label: "Journal", to: "/journal" },
          { label: "How much time do you have left with your parents?" },
        ]}
      />

      <header className="mb-16">
        <div className="mb-6 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          <time dateTime="2026-07-30">July 30, 2026</time>
          <span>·</span>
          <span>3 min read</span>
        </div>
        <h1 className="font-serif text-4xl italic tracking-tight text-foreground md:text-5xl leading-tight">
          How much time do you have left with your parents?
        </h1>
        <p className="mt-6 font-serif text-[17px] leading-relaxed text-muted-foreground">
          Most of the calculations in this journal describe a habit you could
          change if you wanted to. This one describes a total that was mostly
          settled a long time ago, which is what makes it the hardest number
          here to look at directly.
        </p>
      </header>

      <div className="text-[17px] leading-[1.85] text-foreground/85 space-y-6">
        <p>
          The American Time Use Survey tracks not only what people do but who
          they are with, and the pattern it produces across a lifespan is
          unusually stark. Time spent with parents is highest in early
          childhood, stays high through the school years, and then falls off
          sharply somewhere around age twenty. It does not taper. It collapses,
          in the space of a year or two, and it never returns to anything close
          to the earlier level. Analyses of that data by Our World in Data show
          the same shape in every cohort: the years spent living in the same
          house account for the overwhelming majority of the total, and
          everything after them is a long thin tail.
        </p>

        <p>
          Put rough numbers on the two halves. A child living at home who shares
          four waking hours a day with a parent, which is a conservative figure
          once meals, mornings, evenings, and weekends are counted, accumulates
          around 26,000 hours before turning eighteen. Now take an adult who
          lives in another city and visits twice a year for four days, spending
          perhaps eight waking hours a day in the same room. That comes to about
          64 hours annually. If a parent is 65 today and lands near the current
          life expectancy, there are roughly seventeen years left, which works
          out to around 1,100 hours in total. Just under 70 waking days. Set the
          two figures side by side and the arithmetic is blunt: by the time you
          moved out, you had already used somewhere above 95 percent of the
          hours you will ever spend with them.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          Why the shape of this number surprises people more than the size.
        </h2>

        <p>
          The reason the figure lands so hard is that nobody experiences the
          decline as a decline. Leaving home does not feel like spending down
          the last few percent of something. It feels like the beginning of
          everything, and the relationship continues, in phone calls and
          messages and holidays, in a way that makes the underlying hours easy
          to stop counting. The writer Tim Urban made this point in an essay
          that circulated widely, observing that the time with parents was
          largely finished at high school graduation and that almost nobody
          notices the threshold as they cross it. The relationship has decades
          left. The hours in the same room do not.
        </p>

        <p>
          Distance is the variable that does most of the work. Someone who
          settles twenty minutes away and stops by on Sundays will accumulate
          several thousand more hours than someone who moves across an ocean and
          flies home at Christmas, and neither of them chose their number as a
          number. They chose a job, a partner, a city. The hours followed from
          decisions that were made about something else, which is true of most
          of the totals in this journal, and more consequential here than
          anywhere else in the series.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          What the calculation is actually good for.
        </h2>

        <p>
          The honest use of this number is not guilt, which changes nothing and
          tends to make people avoid the person they feel guilty about. It is
          resolution. Seventy waking days spread across seventeen years is
          abstract enough to ignore. Two visits a year, at four days each, is
          concrete enough to act on, because it can be changed by one decision:
          a third visit, or a longer one, or a standing phone call that is
          actually kept. Adding a single four-day visit per year to the example
          above raises the remaining total by roughly fifty percent. That is a
          larger proportional gain than almost any other intervention described
          anywhere in this journal, and it comes from four days.
        </p>

        <p className="text-muted-foreground">
          Around 70 waking days, in the scenario above, and wildly different
          depending on distance, health, and how the next years happen to go.
          The point of running it is not to produce a feeling. It is that the
          number responds to attention in a way most of the other numbers here
          do not, and it responds soon.
        </p>
      </div>

      <FAQSection
        faqs={[
          {
            q: "How much time do adults actually spend with their parents?",
            a: "Far less than most people assume. American Time Use Survey data shows time spent with parents peaking in childhood and dropping sharply around the age people leave home, typically to a few dozen hours a year for adults who live in a different city. The exact figure depends almost entirely on geography: adults living within driving distance often accumulate several thousand more hours over the remaining years than those who moved far away and visit once or twice annually."
          },
          {
            q: "How do you calculate how much time you have left with your parents?",
            a: "Multiply three things: the number of visits per year, the waking hours you actually spend together per visit, and the number of years remaining based on current life expectancy. Someone visiting twice a year for four days, at roughly eight shared waking hours a day, spends about 64 hours annually. Against a parent with seventeen years left, that comes to about 1,100 hours, or just under 70 waking days. The useful part of the exercise is that the first number in the multiplication is the one you control, and increasing it by one visit changes the total substantially."
          },
        ]}
      />

      <div className="mt-14 border-t border-border pt-10">
        <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          Related
        </p>
        <div className="space-y-3">
          <Link
            to="/journal/how-many-days-are-in-a-lifetime"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How many days are in a lifetime? →
          </Link>
          <Link
            to="/journal/how-much-of-your-life-do-you-spend-working"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much of your life do you spend working? →
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
