import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { PageSEO } from "../../components/PageSEO";
import { ArticleSchema } from "../../components/ArticleSchema";
import { FAQSection } from "../../components/FAQSection";

export const Route = createFileRoute(
  "/journal/how-much-time-do-you-spend-with-your-friends",
)({
  component: Article,
});

function Article() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-24">
      <PageSEO
        title="How much time do you spend with your friends?"
        description="Time with friends peaks in the late teens and falls steeply through the thirties. Research puts the cost of a new close friendship at around 200 hours, which is why adult friendship is less about willingness than arithmetic."
      />
      <ArticleSchema
        title="How much time do you spend with your friends?"
        description="Time with friends peaks in the late teens and falls steeply through the thirties. Research puts the cost of a new close friendship at around 200 hours, which is why adult friendship is less about willingness than arithmetic."
        datePublished="2026-08-08"
        slug="how-much-time-do-you-spend-with-your-friends"
      />
      <Breadcrumbs
        crumbs={[
          { label: "Hourglass", to: "/" },
          { label: "Journal", to: "/journal" },
          { label: "How much time do you spend with your friends?" },
        ]}
      />

      <header className="mb-16">
        <div className="mb-6 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          <time dateTime="2026-08-08">August 8, 2026</time>
          <span>·</span>
          <span>3 min read</span>
        </div>
        <h1 className="font-serif text-4xl italic tracking-tight text-foreground md:text-5xl leading-tight">
          How much time do you spend with your friends?
        </h1>
        <p className="mt-6 font-serif text-[17px] leading-relaxed text-muted-foreground">
          Adults who say they have drifted from their friends usually explain it
          as a failure of effort. The time-use data suggests the explanation is
          simpler and less flattering to nobody in particular.
        </p>
      </header>

      <div className="text-[17px] leading-[1.85] text-foreground/85 space-y-6">
        <p>
          The American Time Use Survey records who people are with as well as
          what they are doing, and the curve it produces for friendship is one of
          the steepest in the whole dataset. Analyses of that data show time
          spent with friends peaking sharply in the late teens, at well over two
          hours a day, then declining through the twenties and falling to
          something closer to twenty or thirty minutes a day by the late thirties.
          It stays roughly flat at that level for the next several decades. Across
          the same span, the hours a person spends alone rise almost continuously
          from early adulthood onward.
        </p>

        <p>
          Averaged across a full adult life, socialising with friends works out to
          somewhere near forty minutes a day, which comes to around 14,600 hours
          over sixty years, or about two and a half waking years. That total is
          smaller than the lifetime figure for{" "}
          <Link
            to="/journal/how-much-time-does-the-average-person-spend-on-social-media"
            className="underline underline-offset-2 hover:text-muted-foreground transition"
          >
            social media
          </Link>
          , which is an uncomfortable comparison given that one of the two is a
          substitute for the other in name only. Most of that total, moreover, was
          front-loaded into a person's first twenty-five years and is not
          distributed evenly across the life the way the average implies.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          What a friendship costs in hours.
        </h2>

        <p>
          The most useful research on this comes from Jeffrey Hall at the
          University of Kansas, who attempted to measure how much time it takes
          for one person to become another person's friend. His findings put the
          move from acquaintance to casual friend at roughly fifty hours together,
          the step up to real friend at around ninety, and the threshold for close
          friendship somewhere near two hundred hours. Those figures are averages
          drawn from self-reported data and should be held loosely, but the order
          of magnitude is what matters, and the order of magnitude is high.
        </p>

        <p>
          Set that number against an adult schedule and the difficulty becomes
          arithmetic rather than character. A student sharing classes, meals, and
          a dormitory with the same people accumulates two hundred hours with
          someone in a matter of weeks without ever intending to. An adult who
          meets a promising new acquaintance for a drink once a month, for two
          hours, will reach the same threshold in about eight years. Nothing about
          the second person's willingness is different. The container that used to
          generate the hours automatically has simply been removed, and adult life
          offers very little that replaces it.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          Why the curve bends where it does.
        </h2>

        <p>
          The decline lines up almost exactly with the arrival of the other large
          totals in this journal. Careers, children, commutes, and the maintenance
          of a household all land in the same decade, and each of them has a claim
          on the hours that used to be unstructured. The United States Surgeon
          General issued a public advisory on loneliness and social isolation in
          2023, treating the decline in social connection as a health matter with
          consequences comparable to well-established physical risk factors. The
          advisory did not describe a failure of individual effort. It described a
          structural change in how adult time is organised.
        </p>

        <p className="text-muted-foreground">
          Roughly two and a half waking years across a life, most of it spent
          before thirty, and two hundred hours as the going rate for one new close
          friendship. The number is worth knowing mainly because it reframes the
          question. The useful thing to ask is not whether you have made enough
          effort, but whether anything in your week is still producing hours with
          the same person on a regular basis, because that is the only mechanism
          that has ever worked.
        </p>
      </div>

      <FAQSection
        faqs={[
          {
            q: "How many hours does it take to make a close friend?",
            a: "Research by Jeffrey Hall at the University of Kansas puts it at roughly 200 hours of time spent together, with about 50 hours marking the shift from acquaintance to casual friend and around 90 hours for a genuine friendship. The figures come from self-reported data and are averages rather than thresholds, but they explain why friendships form so easily at school or university, where 200 shared hours accumulate within weeks, and so slowly in adult life, where meeting someone monthly for a couple of hours would take years to reach the same total."
          },
          {
            q: "At what age do people spend the least time with friends?",
            a: "The late thirties through the fifties, according to American Time Use Survey data. Time with friends peaks in the late teens at over two hours a day, declines steeply through the twenties and thirties as careers and family obligations arrive, and settles at roughly twenty to thirty minutes a day for the middle decades. It ticks upward modestly in retirement, though by then it typically involves a much smaller circle than it did earlier in life."
          },
        ]}
      />

      <div className="mt-14 border-t border-border pt-10">
        <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          Related
        </p>
        <div className="space-y-3">
          <Link
            to="/journal/how-much-time-do-you-have-left-with-your-parents"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much time do you have left with your parents? →
          </Link>
          <Link
            to="/journal/how-much-time-does-the-average-person-spend-on-social-media"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much time does the average person spend on social media? →
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
