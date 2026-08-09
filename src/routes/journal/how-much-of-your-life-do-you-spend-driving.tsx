import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { PageSEO } from "../../components/PageSEO";
import { ArticleSchema } from "../../components/ArticleSchema";
import { FAQSection } from "../../components/FAQSection";

export const Route = createFileRoute(
  "/journal/how-much-of-your-life-do-you-spend-driving",
)({
  component: Article,
});

function Article() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-24">
      <PageSEO
        title="How much of your life do you spend driving?"
        description="The AAA Foundation found the average American driver spends about 51 minutes a day behind the wheel. Over a driving life that comes to more than three waking years, and it is the one large category a technology shift could plausibly erase."
        ogType="article"
      />
      <ArticleSchema
        title="How much of your life do you spend driving?"
        description="The AAA Foundation found the average American driver spends about 51 minutes a day behind the wheel. Over a driving life that comes to more than three waking years, and it is the one large category a technology shift could plausibly erase."
        datePublished="2026-08-02"
        slug="how-much-of-your-life-do-you-spend-driving"
      />
      <Breadcrumbs
        crumbs={[
          { label: "Hourglass", to: "/" },
          { label: "Journal", to: "/journal" },
          { label: "How much of your life do you spend driving?" },
        ]}
      />

      <header className="mb-16">
        <div className="mb-6 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          <time dateTime="2026-08-02">August 2, 2026</time>
          <span>·</span>
          <span>3 min read</span>
        </div>
        <h1 className="font-serif text-4xl italic tracking-tight text-foreground md:text-5xl leading-tight">
          How much of your life do you spend driving?
        </h1>
        <p className="mt-6 font-serif text-[17px] leading-relaxed text-muted-foreground">
          This is the full figure, not the commute. It includes the errands, the
          school runs, the road trips, and every short trip that was too far to
          walk, and it adds up to more than most drivers would guess.
        </p>
      </header>

      <div className="text-[17px] leading-[1.85] text-foreground/85 space-y-6">
        <p>
          The AAA Foundation for Traffic Safety runs an ongoing study called the
          American Driving Survey, which measures how much people actually drive
          rather than how much they say they do. Its findings have been
          consistent across several waves: the average American driver spends
          around 51 minutes per day behind the wheel and covers roughly 31 miles,
          which works out to about 11,500 miles a year. Those numbers cover all
          driving, not just the trip to work, which is why the total runs well
          above what the commuting figures alone would suggest.
        </p>

        <p>
          At 51 minutes a day across a driving life that starts around 16 and
          continues into the mid seventies, the total comes to roughly 18,600
          hours. In waking terms that is about 1,160 days, or a little over three
          waking years spent operating a vehicle. Drivers in rural areas and
          those with long rural commutes can run double that. Someone who drives
          for a living crosses the same total in a decade and a half. The
          three-year figure is the ordinary case, not the extreme one, and it
          sits alongside{" "}
          <Link
            to="/journal/how-much-of-your-life-do-you-spend-commuting"
            className="underline underline-offset-2 hover:text-muted-foreground transition"
          >
            commuting
          </Link>{" "}
          and{" "}
          <Link
            to="/journal/how-much-time-do-you-spend-stuck-in-traffic"
            className="underline underline-offset-2 hover:text-muted-foreground transition"
          >
            congestion delay
          </Link>{" "}
          as overlapping slices of the same broader total.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          The attention this particular category demands.
        </h2>

        <p>
          What separates driving from the other large blocks in this journal is
          the quality of attention it requires. Watching television or scrolling
          a feed occupies attention loosely, and the mind is free to drift
          without consequence. Driving does not permit that, or at least it
          punishes it severely when people try. The National Highway Traffic
          Safety Administration attributes thousands of deaths a year in the
          United States to distracted driving alone, and motor vehicle crashes
          remain among the leading causes of death for Americans under forty.
          Three waking years of an activity where a few seconds of inattention
          can end the remaining decades is a genuinely unusual entry on a list of
          how a life gets spent.
        </p>

        <p>
          The countervailing point is that many drivers describe the time as
          among the more tolerable hours of their day. The car is private, it is
          quiet if you want it to be, and it is one of the few remaining places
          where an adult is unreachable in person. A great deal of the audio
          consumption measured in the{" "}
          <Link
            to="/journal/how-much-time-do-you-spend-listening-to-music"
            className="underline underline-offset-2 hover:text-muted-foreground transition"
          >
            music and podcast figures
          </Link>{" "}
          happens inside these same hours, which means the driving total overlaps
          heavily with a category most people report enjoying. The hours are not
          empty. They are just spoken for in two ways at once.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          The one large total that might not survive the century.
        </h2>

        <p>
          Almost every figure in this journal is stable in the sense that no
          plausible technology removes it. People will keep sleeping, eating,
          working, and maintaining a home. Driving is the exception. If
          autonomous vehicles arrive at scale within the next few decades, the
          three waking years do not disappear from a life, but they change
          category entirely, from active operation to passive transit, which is
          the same shift that turned the train journey into reading time. Whether
          that reclassification counts as reclaiming three years or simply moving
          them into the screen-time column is an open question, and the answer
          will probably differ by person in the same way it did for the train.
        </p>

        <p className="text-muted-foreground">
          A little over three waking years at the wheel, for the average driver,
          and double that for plenty of ordinary lives. It is the only large
          number here with a plausible expiry date, which makes it worth knowing
          now, while it still describes something you are actually doing rather
          than something your parents used to do.
        </p>
      </div>

      <FAQSection
        faqs={[
          {
            q: "How many hours a day does the average person spend driving?",
            a: "About 51 minutes, according to the AAA Foundation for Traffic Safety's American Driving Survey, which measures actual driving rather than self-reported estimates. That covers roughly 31 miles a day and around 11,500 miles a year across all trips, not just commuting. Rural drivers and people who drive for work run considerably higher, while residents of dense cities with good transit often fall well below the average."
          },
          {
            q: "How many years of your life do you spend driving?",
            a: "Around three waking years for an average driver, based on 51 minutes a day across a driving life running from roughly 16 into the mid seventies, which totals about 18,600 hours. The figure doubles for drivers with long rural commutes and is reached far sooner by anyone who drives professionally. It overlaps with commuting and traffic delay, which measure narrower slices of the same broader total rather than adding to it."
          },
        ]}
      />

      <div className="mt-14 border-t border-border pt-10">
        <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          Related
        </p>
        <div className="space-y-3">
          <Link
            to="/journal/how-much-of-your-life-do-you-spend-commuting"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much of your life do you spend commuting? →
          </Link>
          <Link
            to="/journal/how-much-time-do-you-spend-listening-to-music"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much time do you spend listening to music? →
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
