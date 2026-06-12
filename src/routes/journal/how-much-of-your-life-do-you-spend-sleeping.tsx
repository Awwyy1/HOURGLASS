import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { PageSEO } from "../../components/PageSEO";
import { ArticleSchema } from "../../components/ArticleSchema";
import { FAQSection } from "../../components/FAQSection";

export const Route = createFileRoute(
  "/journal/how-much-of-your-life-do-you-spend-sleeping",
)({
  component: Article,
});

function Article() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-24">
      <PageSEO
        title="How much of your life do you spend sleeping?"
        description="About a third of your life — 25 years out of 79 spent unconscious. The number is fixed. What you do with the other two-thirds is not."
      />
      <ArticleSchema
        title="How much of your life do you spend sleeping?"
        description="About a third of your life — 25 years out of 79 spent unconscious. The number is fixed. What you do with the other two-thirds is not."
        datePublished="2026-03-20"
        slug="how-much-of-your-life-do-you-spend-sleeping"
      />
      <Breadcrumbs
        crumbs={[
          { label: "Hourglass", to: "/" },
          { label: "Journal", to: "/journal" },
          { label: "How much of your life do you spend sleeping?" },
        ]}
      />

      <header className="mb-16">
        <div className="mb-6 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          <time dateTime="2026-03-20">March 20, 2026</time>
          <span>·</span>
          <span>3 min read</span>
        </div>
        <h1 className="font-serif text-4xl italic tracking-tight text-foreground md:text-5xl leading-tight">
          How much of your life do you spend sleeping?
        </h1>
        <p className="mt-6 font-serif text-[17px] leading-relaxed text-muted-foreground">
          About a third. That number makes people uncomfortable in a way that
          is worth sitting with for a moment, because the discomfort says
          something interesting.
        </p>
      </header>

      <div className="text-[17px] leading-[1.85] text-foreground/85 space-y-6">
        <p>
          The National Sleep Foundation recommends seven to nine hours of sleep per night for
          adults. The CDC puts the average actual sleep duration for American adults at around
          7 hours. Most sleep researchers consider anything below 7 hours per night to be
          associated with measurable cognitive and health deficits, so 7 to 8 hours represents
          both what most people get and roughly what most bodies need. Call it 7.5 hours as a
          working figure, which is almost exactly what large-scale studies of sleep duration
          across developed countries consistently find as the median.
        </p>

        <p>
          Seven and a half hours out of every 24 is 31.25 percent of total time. Over a year
          that is 2,737 hours, or 114 full days. Over a life expectancy of 79 years, the
          current US average, a person will spend approximately 216,000 hours asleep. That is
          just under 25 years. One quarter of a century, experienced as nothing at all, repeated
          every single night from the first to the last.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          Why the number bothers people.
        </h2>

        <p>
          Almost everyone who encounters the 25-year figure has the same initial reaction, which
          is something between unease and mild indignation. A quarter of a life spent unconscious
          feels like a lot to lose. This reaction is nearly universal and it is also almost
          entirely wrong, because sleep is not time lost. It is time spent on maintenance that
          makes all the other time possible.
        </p>

        <p>
          During sleep the brain consolidates memories from the day, clears metabolic waste
          through the glymphatic system, and runs the regulatory processes that govern mood,
          immune function, and hormonal balance. People who consistently sleep less than 7 hours
          perform measurably worse on cognitive tests, make worse decisions, retain less of what
          they learn, and have significantly elevated risk for a range of serious conditions over
          time. The 25 years is not subtracted from your life. It is what keeps the other 54
          years functional.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          The people who try to take it back.
        </h2>

        <p>
          There is a persistent cultural belief, particularly in professional environments, that
          sleeping less is a form of productivity. The 4am wake-up, the 5-hour night, the
          executive who sleeps less than everyone else and is proud of it. Research on this
          belief is fairly clear: most people who claim to function well on 5 or 6 hours of
          sleep are wrong about how well they are functioning. Sleep deprivation impairs the
          ability to accurately assess one's own impairment, which means the people most
          convinced they do not need much sleep are often the ones who need it most.
        </p>

        <p>
          A small percentage of the population, researchers estimate around 1 to 3 percent,
          genuinely carries a genetic variant that allows them to function on less sleep without
          deficit. The rest are simply tired and have normalised it. Cutting sleep to gain hours
          is largely a trade of quality for quantity: more waking hours, each one slightly worse
          than it would otherwise have been.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          The number worth tracking instead.
        </h2>

        <p>
          The interesting calculation is not how many years you spend sleeping but how many
          waking years you have. A life of 79 years contains roughly 54 waking years after sleep
          is accounted for. That is the real budget. Most people have never thought about their
          life in those terms: not how long they will live, but how many years of conscious
          experience they are likely to have, and what those years are currently being spent on.
        </p>

        <p className="text-muted-foreground">
          Twenty-five years asleep is not the problem. What matters is what happens in the 54.
        </p>
      </div>

      <FAQSection
        faqs={[
          { q: "Is sleeping 8 hours a night actually necessary?", a: "For most adults, 7 to 9 hours is where functioning is best — 8 is the median. There is genuine genetic variation: some people run well on 6 hours and others need 9. The problem is that people who think they are fine on 6 hours have usually adapted to feeling somewhat impaired without noticing it anymore. The test is whether you fall asleep within five minutes of lying down in a quiet room during the day. If you do, you are sleep-deprived." },
          { q: "What percentage of your life is spent sleeping?", a: "About 33 percent if you sleep 8 hours a night. Over a 79-year lifespan that is roughly 26 years spent unconscious. It is the single largest category of how humans spend time — larger than work, larger than any recreational activity. The reason most people find this surprising is that they have never added it up before." }
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
