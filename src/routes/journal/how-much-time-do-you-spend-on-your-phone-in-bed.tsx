import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { PageSEO } from "../../components/PageSEO";
import { ArticleSchema } from "../../components/ArticleSchema";
import { FAQSection } from "../../components/FAQSection";

export const Route = createFileRoute(
  "/journal/how-much-time-do-you-spend-on-your-phone-in-bed",
)({
  component: Article,
});

function Article() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-24">
      <PageSEO
        title="How much time do you spend on your phone in bed?"
        description="Most adults spend between thirty and sixty minutes on a phone after getting into bed. Over a lifetime that is nearly three waking years, and it is the only category in this journal that charges you twice for the same hour."
        ogType="article"
      />
      <ArticleSchema
        title="How much time do you spend on your phone in bed?"
        description="Most adults spend between thirty and sixty minutes on a phone after getting into bed. Over a lifetime that is nearly three waking years, and it is the only category in this journal that charges you twice for the same hour."
        datePublished="2026-08-20"
        slug="how-much-time-do-you-spend-on-your-phone-in-bed"
      />
      <Breadcrumbs
        crumbs={[
          { label: "Hourglass", to: "/" },
          { label: "Journal", to: "/journal" },
          { label: "How much time do you spend on your phone in bed?" },
        ]}
      />

      <header className="mb-16">
        <div className="mb-6 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          <time dateTime="2026-08-20">August 20, 2026</time>
          <span>·</span>
          <span>3 min read</span>
        </div>
        <h1 className="font-serif text-4xl italic tracking-tight text-foreground md:text-5xl leading-tight">
          How much time do you spend on your phone in bed?
        </h1>
        <p className="mt-6 font-serif text-[17px] leading-relaxed text-muted-foreground">
          Every other total in this journal costs you exactly the hours it
          contains. This one takes the hour, and then takes a second one from
          the night that follows it.
        </p>
      </header>

      <div className="text-[17px] leading-[1.85] text-foreground/85 space-y-6">
        <p>
          Sleep foundation surveys and consumer research have converged on a
          broadly consistent picture for years: the large majority of adults keep
          a phone within reach of the bed, and most use it after getting in.
          Estimates of how long vary by method and by age group, but they cluster
          between thirty minutes and an hour of screen use in bed before sleep,
          with younger adults sitting at the upper end and a meaningful minority
          reporting considerably more.
        </p>

        <p>
          Take forty-five minutes as a working figure. Across sixty adult years
          that comes to around 16,400 hours, or roughly 2.8 waking years spent
          lying in bed looking at a phone. On its own that would place the habit
          somewhere in the middle of this journal's rankings, well behind{" "}
          <Link
            to="/journal/how-much-time-do-you-spend-on-your-phone"
            className="underline underline-offset-2 hover:text-muted-foreground transition"
          >
            total phone use
          </Link>{" "}
          and comparable to the lifetime figure for eating. The reason it
          deserves separating out is that the hour does not stay a single hour.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          Why this hour is charged twice.
        </h2>

        <p>
          The forty-five minutes are taken from the front of the night, so they
          come directly out of sleep rather than out of some pool of free
          evening. Research on screen use before bed also finds that it delays
          sleep onset beyond the time the screen is actually on, through a
          combination of light exposure and the simple fact that engaging content
          leaves the mind active. The practical result is that a forty-five
          minute session frequently costs more than forty-five minutes of sleep,
          and the deficit lands on{" "}
          <Link
            to="/journal/how-much-of-your-life-do-you-spend-sleeping"
            className="underline underline-offset-2 hover:text-muted-foreground transition"
          >
            the one category
          </Link>{" "}
          that cannot be made up elsewhere. You can cook less, drive less, or
          skip a chore. Sleep debt compounds instead of clearing.
        </p>

        <p>
          This is what separates the habit from ordinary screen time. An hour on
          a phone at seven in the evening costs an hour. The same hour at
          midnight costs the hour, some part of the following night, and a
          measurable share of the next day's attention. It is the only entry in
          this series where the arithmetic understates the price rather than
          overstating it.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          What the research says people are actually doing.
        </h2>

        <p>
          The most useful framing comes from a group of Dutch researchers led by
          Floor Kroese, who in 2014 named the behaviour bedtime procrastination:
          going to bed later than intended without any external reason to.
          Their finding was that the people most prone to it were not people who
          particularly wanted to be awake. They were people whose days had
          contained very little time of their own, and who were reclaiming it
          from the only unguarded hours left.
        </p>

        <p>
          That reframing explains why the usual advice performs so poorly.
          Leaving the phone in another room addresses the mechanism and ignores
          the motive, which is why it tends to work for a week. If the night is
          being raided because the day contained no unclaimed time, the
          durable fix is somewhere in the daytime column, among the totals for
          work, commuting, chores, and everything else that arrived without being
          chosen.
        </p>

        <p className="text-muted-foreground">
          Nearly three waking years, plus whatever the disrupted nights cost on
          top, which the surveys are not equipped to count. The number is worth
          knowing less as a reason to stop than as a piece of evidence about the
          rest of the day. Almost nobody scrolls at midnight because midnight is
          when the content is best.
        </p>
      </div>

      <FAQSection
        faqs={[
          {
            q: "How long does the average person spend on their phone in bed?",
            a: "Estimates cluster between thirty minutes and an hour of screen use after getting into bed, with younger adults typically at the higher end. Survey work also consistently finds that the large majority of adults keep a phone within reach of the bed overnight. Over sixty adult years, forty-five minutes a night comes to roughly 16,400 hours, or about 2.8 waking years."
          },
          {
            q: "What is bedtime procrastination?",
            a: "A term introduced by Dutch researchers led by Floor Kroese in 2014, describing the act of going to bed later than intended without any external reason preventing sleep. Their research found it was associated less with a desire to stay awake than with days that had contained little discretionary time, making the late evening the only unguarded hours available to reclaim. That is why advice focused purely on removing the phone often works briefly and then stops working."
          },
        ]}
      />

      <div className="mt-14 border-t border-border pt-10">
        <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          Related
        </p>
        <div className="space-y-3">
          <Link
            to="/journal/how-much-of-your-life-do-you-spend-sleeping"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much of your life do you spend sleeping? →
          </Link>
          <Link
            to="/journal/how-much-time-do-you-spend-on-your-phone"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much time do you spend on your phone per day? →
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
