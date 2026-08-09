import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { PageSEO } from "../../components/PageSEO";
import { ArticleSchema } from "../../components/ArticleSchema";
import { FAQSection } from "../../components/FAQSection";

export const Route = createFileRoute(
  "/journal/how-many-days-are-in-a-lifetime",
)({
  component: Article,
});

function Article() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-24">
      <PageSEO
        title="How many days are in a lifetime?"
        description="An average human life contains about 28,900 days. Around 6,600 of them belong to childhood, a third of the rest goes to sleep, and the discretionary remainder is smaller than almost anyone expects."
        ogType="article"
      />
      <ArticleSchema
        title="How many days are in a lifetime?"
        description="An average human life contains about 28,900 days. Around 6,600 of them belong to childhood, a third of the rest goes to sleep, and the discretionary remainder is smaller than almost anyone expects."
        datePublished="2026-07-10"
        slug="how-many-days-are-in-a-lifetime"
      />
      <Breadcrumbs
        crumbs={[
          { label: "Hourglass", to: "/" },
          { label: "Journal", to: "/journal" },
          { label: "How many days are in a lifetime?" },
        ]}
      />

      <header className="mb-16">
        <div className="mb-6 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          <time dateTime="2026-07-10">July 10, 2026</time>
          <span>·</span>
          <span>3 min read</span>
        </div>
        <h1 className="font-serif text-4xl italic tracking-tight text-foreground md:text-5xl leading-tight">
          How many days are in a lifetime?
        </h1>
        <p className="mt-6 font-serif text-[17px] leading-relaxed text-muted-foreground">
          Measured in years, a life sounds long. Measured in days, it becomes
          a number you could almost hold in your head, and that changes how
          it reads.
        </p>
      </header>

      <div className="text-[17px] leading-[1.85] text-foreground/85 space-y-6">
        <p>
          Start with the standard figure. US life expectancy sits at around 79
          years, and 79 years multiplied by 365.25 days comes to roughly 28,900
          days. That is the entire allocation for a statistically average life:
          every birthday, every commute, every ordinary Tuesday you will ever
          have, all drawn from the same pool of about twenty-nine thousand.
          People tend to expect the number to be in the hundreds of thousands.
          It is not. It is small enough that a fast reader could count it aloud
          in a week.
        </p>

        <p>
          The number gets more interesting once you mark where you currently
          stand inside it. By your 18th birthday you have used about 6,600 days.
          You cross 10,000 days at around age 27, and 20,000 days at around 55.
          Someone who is 40 today has roughly 14,600 days behind them and, if
          they land on the average, about 14,300 ahead. The midpoint of a life
          in days arrives at 39 and a half, quietly, on an unmarked afternoon
          that almost nobody notices at the time.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          What the 28,900 days actually contain.
        </h2>

        <p>
          A third of every day belongs to sleep, which removes the equivalent
          of about 9,600 full days from the total. What remains is roughly
          19,300 days of waking time, and that figure still includes childhood,
          school, work, chores, and everything else this journal has been
          adding up one habit at a time. A full-time career consumes the
          equivalent of about 5,000 waking days on its own. Commuting, email,
          and meetings claim their share on top of that. Run the whole
          subtraction and the genuinely discretionary portion of a life comes
          to somewhere near 9,000 to 10,000 days, which is close to what the
          hours-based version of this calculation produces from the other
          direction.
        </p>

        <p>
          The weekend arithmetic lands harder than the total for most people.
          A 79-year life contains about 4,100 Saturdays. Someone who is 35 has
          already spent around 1,800 of theirs and has roughly 2,300 left. If
          your parents are in their late sixties and you see them twice a year,
          the number of days you will spend in the same room with them again
          may be under thirty. None of these numbers are hidden. They are just
          the same life expectancy statistic, divided differently, and division
          turns out to be the operation that makes time legible.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          Why days work on the mind in a way years do not.
        </h2>

        <p>
          Years are too large to feel. Nobody experiences a year; they
          experience today, roughly twenty-nine thousand times. Research on
          how people reason about time consistently finds that smaller units
          change behaviour more than large ones. One well-known set of studies
          found that people asked to think about their remaining life in days
          rather than years reported more urgency about relationships and
          long-delayed plans, because a countable number resists the vague
          sense of endlessness that years permit. A thousand-something
          Saturdays is a budget. Decades are a fog.
        </p>

        <p className="text-muted-foreground">
          About 28,900 days in total. Around 19,300 of them awake, and
          somewhere near 10,000 genuinely yours to direct. The number is not
          morbid, and it is not a motivational poster either. It is just the
          honest size of the thing, and most people go their whole life
          without ever seeing it written down.
        </p>
      </div>

      <FAQSection
        faqs={[
          {
            q: "How many days does the average person live?",
            a: "About 28,900 days, based on a US life expectancy of 79 years multiplied by 365.25. Women land slightly higher and men slightly lower, and the figure varies by country: Japan's average works out to around 30,700 days, while the global average sits closer to 26,700. Whichever baseline you use, the total stays inside the same narrow band of roughly 26,000 to 31,000 days, which is why the number surprises people who expected something in the hundreds of thousands."
          },
          {
            q: "How many weekends are in a lifetime?",
            a: "Around 4,100, using 52 Saturdays per year across a 79-year life. The more useful version of that number is the remaining count: at 30 you have roughly 2,500 weekends left, at 50 about 1,500. Since a large share of weekend time goes to errands, chores, and recovery from the working week, the number of genuinely free weekends is meaningfully smaller than the raw count suggests."
          },
        ]}
      />

      <div className="mt-14 border-t border-border pt-10">
        <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          Related
        </p>
        <div className="space-y-3">
          <Link
            to="/journal/how-many-hours-are-in-a-lifetime"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How many hours are in a lifetime? →
          </Link>
          <Link
            to="/journal/how-much-time-do-you-have-left-with-your-parents"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much time do you have left with your parents? →
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
