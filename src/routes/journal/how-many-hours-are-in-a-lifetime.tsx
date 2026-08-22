import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { PageSEO } from "../../components/PageSEO";
import { ArticleSchema } from "../../components/ArticleSchema";
import { FAQSection } from "../../components/FAQSection";
import { AnswerBlock } from "../../components/AnswerBlock";

export const Route = createFileRoute(
  "/journal/how-many-hours-are-in-a-lifetime",
)({
  component: Article,
});

function Article() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-24">
      <PageSEO
        title="How many hours are in a lifetime?"
        description="A human life contains around 692,000 hours in total. Subtract sleep and you have roughly 461,000 waking hours. The number sounds large until you see where it actually goes."
        ogType="article"
      />
      <ArticleSchema
        title="How many hours are in a lifetime?"
        description="A human life contains around 692,000 hours in total. Subtract sleep and you have roughly 461,000 waking hours. The number sounds large until you see where it actually goes."
        datePublished="2026-06-10"
        slug="how-many-hours-are-in-a-lifetime"
      />
      <Breadcrumbs
        crumbs={[
          { label: "Hourglass", to: "/" },
          { label: "Journal", to: "/journal" },
          { label: "How many hours are in a lifetime?" },
        ]}
      />

      <header className="mb-16">
        <div className="mb-6 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          <time dateTime="2026-06-10">June 10, 2026</time>
          <span>·</span>
          <span>3 min read</span>
        </div>
        <h1 className="font-serif text-4xl italic tracking-tight text-foreground md:text-5xl leading-tight">
          How many hours are in a lifetime?
        </h1>
        <p className="mt-6 font-serif text-[17px] leading-relaxed text-muted-foreground">
          The total is larger than most people expect and smaller than it feels.
          Both things are true at the same time, and understanding why requires
          looking at the number more carefully than most people ever do.
        </p>
      </header>

      <AnswerBlock>
        A human life of 79 years contains about 692,040 hours in total. Subtract sleep and roughly 461,000 waking hours remain. After childhood, work, and daily maintenance, the genuinely discretionary portion falls to somewhere between 150,000 and 175,000 hours, or about five hours a day across an adult life.
      </AnswerBlock>

      <div className="text-[17px] leading-[1.85] text-foreground/85 space-y-6">
        <p>
          The arithmetic starts with life expectancy. In the United States, average
          life expectancy sits at around 79 years. Multiply that by 365 days and
          24 hours and the gross total is 692,040 hours. That is the number that
          appears on the top line — the full allocation a statistically average
          American life contains. Most people, when they first encounter it, find it
          larger than they imagined. It becomes smaller very quickly once you start
          subtracting.
        </p>

        <p>
          Sleep comes off first. At eight hours a night, you lose one third of
          everything. Over 79 years that is around 230,680 hours, or roughly 26
          waking years, spent unconscious. What remains is approximately 461,000
          waking hours across an entire lifetime. That is the real budget: not
          692,000, but 461,000. Every decision about how you spend your time is a
          decision about how to allocate a portion of those 461,000 hours.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          Where the hours go before you get to choose.
        </h2>

        <p>
          Of those 461,000 waking hours, a substantial portion is already committed
          before you make a single active decision. Childhood and adolescence, roughly
          the first 18 years of life, account for about 105,000 waking hours. During
          that period, most of your time is structured by school, family, and circumstances
          you did not choose. That leaves around 356,000 waking hours of adult life —
          from 18 to 79 — during which you have something closer to genuine agency over
          where the time goes.
        </p>

        <p>
          Work takes the largest share. A standard full-time career running from 22 to
          65, at 40 hours per week across 48 working weeks per year, consumes around
          80,000 hours. That is roughly 22 percent of your adult waking hours handed
          to employment before accounting for commuting, thinking about work outside
          of it, or the preparation and decompression that surrounds every working day.
          Add those and the real figure is higher.
        </p>

        <p>
          Essential maintenance fills most of what is left. Cooking, eating, cleaning,
          errands, and the general administration of a household consume somewhere
          between one and two hours per day across a lifetime. At 90 minutes per day
          for 61 adult years, the total is around 33,000 hours. Add personal hygiene,
          medical appointments, and the ambient friction of daily life and you are
          looking at another 10,000 to 15,000 hours. These are not wasted hours exactly
          — they are the cost of being a functioning person — but they are not discretionary.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          What is actually left over.
        </h2>

        <p>
          After work, sleep, childhood, and essential maintenance, the remaining
          discretionary time in an average adult life is somewhere in the range of
          150,000 to 175,000 hours. That is the portion that goes to everything else:
          relationships, leisure, learning, travel, creative work, screen time, and
          whatever you consider personally meaningful. It sounds like a lot. It is
          roughly 20 years of waking time across an entire adult life, or about
          five hours per day from 18 to 79.
        </p>

        <p>
          The reason this number matters is that most people spend it without tracking
          it. Screen time alone — phones, televisions, computers used for entertainment
          — now averages somewhere between six and seven hours per day across American
          adults, according to Nielsen. That figure, if accurate, would exceed the
          available discretionary budget by one to two hours per day, which implies that
          screen time has been colonising time that was previously spent on sleep, meals,
          or in-person interaction rather than appearing from nowhere.
        </p>

        <p className="text-muted-foreground">
          692,040 hours is the number a statistician would give you. 461,000 is what
          you actually get after sleep. Somewhere between 150,000 and 175,000 is what
          you have left after the hours that were never really yours to spend freely.
          The question worth sitting with is not how large the total is, but how much
          of that last number you have actually directed toward something you chose.
        </p>
      </div>

      <FAQSection
        faqs={[
          {
            q: "How many hours are in a human lifetime?",
            a: "Based on a US average life expectancy of 79 years, the gross total is approximately 692,040 hours. Subtract sleep at eight hours per night and you have around 461,000 waking hours across a full lifetime. That is the more meaningful number — the hours when you are actually conscious and capable of doing something with the time. Of those, roughly 105,000 belong to childhood and adolescence, leaving around 356,000 waking hours of adult life with something approaching genuine choice about how they are spent."
          },
          {
            q: "How many hours of free time does the average person have in a lifetime?",
            a: "After accounting for sleep, work, childhood, and daily maintenance tasks like cooking and errands, the remaining discretionary time in an average adult life sits somewhere between 150,000 and 175,000 hours. That works out to roughly five hours per day across a 61-year adult lifespan. Screen time across phones, televisions, and computers already averages six to seven hours per day for many adults, which means that for a large share of people, genuinely free time — time not committed to obligation or passive consumption — is considerably smaller than that figure suggests."
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
            to="/journal/how-much-of-your-life-do-you-spend-sleeping"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much of your life do you spend sleeping? →
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
