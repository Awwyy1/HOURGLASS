import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { PageSEO } from "../../components/PageSEO";
import { ArticleSchema } from "../../components/ArticleSchema";
import { FAQSection } from "../../components/FAQSection";

export const Route = createFileRoute(
  "/journal/how-much-vacation-time-do-you-get-in-a-lifetime",
)({
  component: Article,
});

function Article() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-24">
      <PageSEO
        title="How much vacation time do you get in a lifetime?"
        description="An American career yields roughly 645 days of paid vacation, against 80,000 hours of work. It is the one large category in this journal that most people consume less of than they are owed."
        ogType="article"
      />
      <ArticleSchema
        title="How much vacation time do you get in a lifetime?"
        description="An American career yields roughly 645 days of paid vacation, against 80,000 hours of work. It is the one large category in this journal that most people consume less of than they are owed."
        datePublished="2026-08-14"
        slug="how-much-vacation-time-do-you-get-in-a-lifetime"
      />
      <Breadcrumbs
        crumbs={[
          { label: "Hourglass", to: "/" },
          { label: "Journal", to: "/journal" },
          { label: "How much vacation time do you get in a lifetime?" },
        ]}
      />

      <header className="mb-16">
        <div className="mb-6 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          <time dateTime="2026-08-14">August 14, 2026</time>
          <span>·</span>
          <span>3 min read</span>
        </div>
        <h1 className="font-serif text-4xl italic tracking-tight text-foreground md:text-5xl leading-tight">
          How much vacation time do you get in a lifetime?
        </h1>
        <p className="mt-6 font-serif text-[17px] leading-relaxed text-muted-foreground">
          Every other calculation in this journal describes time being spent
          faster than anyone realises. This one describes time being left
          untouched, which turns out to be the harder thing to explain.
        </p>
      </header>

      <div className="text-[17px] leading-[1.85] text-foreground/85 space-y-6">
        <p>
          The Bureau of Labor Statistics tracks paid leave as part of its
          employee benefits survey, and the American numbers are modest by any
          international comparison. Private industry workers average around
          eleven days of paid vacation after a year of service, roughly fifteen
          after five years, and about twenty after twenty years. Average those
          across a full working life and fifteen days a year is a fair figure for
          someone with a stable career. Over the forty-three years from
          twenty-two to sixty-five, that comes to about 645 days.
        </p>

        <p>
          Six hundred and forty-five days is a little under two calendar years,
          or roughly 1.8 waking years once sleep is removed. Set it beside the
          80,000 hours the same career consumes and the ratio is stark: vacation
          amounts to something near a tenth of the time spent working to earn it.
          The comparison is not quite fair, since weekends and public holidays
          sit outside both figures, but it is the ratio most people carry in
          their head incorrectly, and it usually runs in the optimistic
          direction.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          The part of the total that is simply not taken.
        </h2>

        <p>
          Here the category stops behaving like the others in this series.
          Research by the US Travel Association found Americans leaving hundreds
          of millions of paid vacation days unused in a single year, with
          roughly half of workers finishing the year without having taken
          everything they were entitled to. This is time that was earned,
          already paid for, and legally available, and it was returned to the
          employer at no charge.
        </p>

        <p>
          The surveys that ask why produce a consistent set of answers. People
          report fearing the volume of work waiting on their return, worrying
          about appearing replaceable, and finding nobody able to cover for them.
          None of those is a preference for working. Each describes a situation
          where taking the leave feels more expensive than skipping it, which is
          a different problem from not wanting a holiday, and a harder one to fix
          with an individual decision.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          Why the number is a policy figure rather than a personal one.
        </h2>

        <p>
          The United States is the only advanced economy with no statutory
          minimum paid leave. European Union rules require member states to
          guarantee at least twenty paid days, and several countries sit at
          twenty-five or thirty before public holidays are counted. A German
          worker at thirty days a year accumulates about 1,290 days across the
          same forty-three-year career, which is roughly double the American
          total, and takes nearly all of it because the norms and the coverage
          arrangements assume they will.
        </p>

        <p>
          That difference of six hundred days is not a difference in how much two
          people wanted to rest. It is a difference in what the law required and
          what the workplace treated as normal. Almost every other number in this
          journal responds to individual choice, however constrained. This one
          barely does, which is worth naming plainly rather than dressing up as
          a matter of personal discipline.
        </p>

        <p className="text-muted-foreground">
          About 645 days across an American career, roughly 1,290 across a German
          one, and a meaningful share of the first figure never claimed at all.
          The useful thing here is not a resolution to relax more. It is
          noticing that this is the rare category where the time is already
          yours, already paid for, and the only thing standing between you and
          it is a set of assumptions about what happens if you go.
        </p>
      </div>

      <FAQSection
        faqs={[
          {
            q: "How many vacation days does the average American get per year?",
            a: "Around eleven paid days after a year of service, rising to roughly fifteen after five years and about twenty after twenty years, according to Bureau of Labor Statistics benefits data for private industry workers. Public holidays are counted separately and typically add another eight to ten days. The United States remains the only advanced economy with no legally mandated minimum, so these figures reflect what employers choose to offer rather than any floor set in law."
          },
          {
            q: "How much vacation time do you get over a whole career?",
            a: "At an average of fifteen days a year across a forty-three-year career, an American worker accumulates roughly 645 days, which is a little under two calendar years. A worker in a country with a thirty-day statutory entitlement reaches about 1,290 days over the same span. The American figure is further reduced in practice because survey data consistently finds around half of workers ending the year without having used everything they were entitled to."
          },
        ]}
      />

      <div className="mt-14 border-t border-border pt-10">
        <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          Related
        </p>
        <div className="space-y-3">
          <Link
            to="/journal/how-much-of-your-life-do-you-spend-working"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much of your life do you spend working? →
          </Link>
          <Link
            to="/journal/how-many-days-are-in-a-lifetime"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How many days are in a lifetime? →
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
