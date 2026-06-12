import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { PageSEO } from "../../components/PageSEO";

export const Route = createFileRoute(
  "/journal/how-much-of-your-life-do-you-spend-cooking",
)({
  component: Article,
});

function Article() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-24">
      <PageSEO
        title="How much of your life do you spend cooking?"
        description="The average person spends about 40 minutes a day cooking. Over a lifetime that is two and a half waking years in the kitchen — one of the few large time categories that produces something."
      />
      <Breadcrumbs
        crumbs={[
          { label: "Hourglass", to: "/" },
          { label: "Journal", to: "/journal" },
          { label: "How much of your life do you spend cooking?" },
        ]}
      />

      <header className="mb-16">
        <div className="mb-6 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          <time dateTime="2026-04-30">April 30, 2026</time>
          <span>·</span>
          <span>3 min read</span>
        </div>
        <h1 className="font-serif text-4xl italic tracking-tight text-foreground md:text-5xl leading-tight">
          How much of your life do you spend cooking?
        </h1>
        <p className="mt-6 font-serif text-[17px] leading-relaxed text-muted-foreground">
          Cooking is one of the few large categories of time that most people
          feel entirely neutral about. The numbers are worth looking at anyway.
        </p>
      </header>

      <div className="text-[17px] leading-[1.85] text-foreground/85 space-y-6">
        <p>
          The American Time Use Survey, which the Bureau of Labor Statistics has run annually
          since 2003, consistently finds that Americans who cook on a given day spend an average
          of 53 minutes doing it. Across the full population, including people who do not cook
          on a given day, the daily average works out to around 37 minutes. In the UK, the Office
          for National Statistics puts the figure at 41 minutes per day. European averages cluster
          in a similar range, with France and Italy running slightly higher due to longer meal
          preparation traditions.
        </p>

        <p>
          Taking 40 minutes a day as a reasonable working figure: that is 243 hours a year, or
          just over 10 full days. In waking time, roughly 15 days per year in the kitchen. Over
          an adult lifetime of 60 years, starting around age 18, the total comes to 14,580 hours.
          In waking years that is just under two and a half years of conscious life spent
          preparing food. Add cleanup and the number grows by another 30 to 40 percent.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          Why cooking is different from most other large time categories.
        </h2>

        <p>
          Almost everything else in this journal lands somewhere in the category of consumption:
          things people receive or absorb passively. Cooking is different. It is one of the few
          large time commitments in modern life that is genuinely productive, in the direct sense
          that something exists at the end of it that did not exist before. The time is not
          recovered, but it produces a concrete outcome, multiple times a day, every day. That
          puts it in a different class from social media hours or inbox time, where the output
          is harder to define.
        </p>

        <p>
          It is also one of the most variable categories by household. A single person eating
          simply might spend 20 minutes a day cooking. A parent preparing meals for a family
          might spend two hours. The lifetime gap between those two figures is significant:
          the 20-minute cook accumulates about 730 hours per decade, while the two-hour cook
          accumulates over 7,000. Over 30 years that is the difference between one year and
          ten years of waking time. The same activity, the same category, a tenfold difference
          in time cost depending on circumstance.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          The direction this number has been moving.
        </h2>

        <p>
          Time spent cooking has been declining steadily since the 1960s. The American Time Use
          Survey shows a clear downward trend over decades, driven by the growth of processed
          food, meal delivery, and the gradual erosion of cooking as a daily expectation
          particularly among younger adults. The average 25-year-old today spends significantly
          less time cooking than their counterpart did in 1980.
        </p>

        <p>
          Whether that is a gain or a loss depends entirely on what the recovered time goes toward.
          Time not spent cooking does not disappear. It gets reallocated to something else. The
          question worth asking is not whether convenience food saves time, because it clearly
          does, but whether the hours that cooking used to occupy are being spent on something
          that matters more to the person spending them. For some people the answer is yes.
          For a large number, the time went to the phone.
        </p>

        <p className="text-muted-foreground">
          Two and a half years in the kitchen is not a problem or a virtue. It is just the number.
          What you make of it depends on what cooking means to you.
        </p>
      </div>

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
