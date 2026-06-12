import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { PageSEO } from "../../components/PageSEO";
import { ArticleSchema } from "../../components/ArticleSchema";
import { FAQSection } from "../../components/FAQSection";

export const Route = createFileRoute(
  "/journal/how-much-of-your-life-do-you-spend-commuting",
)({
  component: Article,
});

function Article() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-24">
      <PageSEO
        title="How much of your life do you spend commuting?"
        description="The US Census puts the average one-way commute at 27.6 minutes. Over a 40-year career the total reaches 8,800 hours — one and a half waking years spent in transit."
      />
      <ArticleSchema
        title="How much of your life do you spend commuting?"
        description="The US Census puts the average one-way commute at 27.6 minutes. Over a 40-year career the total reaches 8,800 hours — one and a half waking years spent in transit."
        datePublished="2026-05-12"
        slug="how-much-of-your-life-do-you-spend-commuting"
      />
      <Breadcrumbs
        crumbs={[
          { label: "Hourglass", to: "/" },
          { label: "Journal", to: "/journal" },
          { label: "How much of your life do you spend commuting?" },
        ]}
      />

      <header className="mb-16">
        <div className="mb-6 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          <time dateTime="2026-05-12">May 12, 2026</time>
          <span>·</span>
          <span>3 min read</span>
        </div>
        <h1 className="font-serif text-4xl italic tracking-tight text-foreground md:text-5xl leading-tight">
          How much of your life do you spend commuting?
        </h1>
        <p className="mt-6 font-serif text-[17px] leading-relaxed text-muted-foreground">
          The commute is the part of the working day that nobody counts as the
          working day. The clock does not agree.
        </p>
      </header>

      <div className="text-[17px] leading-[1.85] text-foreground/85 space-y-6">
        <p>
          The US Census Bureau puts the average one-way commute at 27.6 minutes, a figure that
          has been climbing steadily for three decades. Round trip, that is 55 minutes per working
          day. The UK's Office for National Statistics finds a similar figure for British workers,
          with the average commute sitting at around 59 minutes return. For workers in major cities
          the numbers are considerably higher: the average London commuter spends 74 minutes in
          transit each day, New York closer to 80 minutes, and in cities like Chicago and Los
          Angeles the figure regularly exceeds an hour each way for people living outside the
          urban core.
        </p>

        <p>
          Using the US average of 55 minutes per day, five days a week, 48 working weeks per year:
          that comes to 220 hours annually, just over 9 full days. In waking time it is about 14
          days per year spent in transit. Over a 40-year career the total reaches 8,800 hours.
          In waking years, that is just over one and a half years of conscious life spent getting
          to and from work. For city commuters on the longer end of the distribution, the career
          total comfortably exceeds two waking years.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          What commuting actually costs beyond the time.
        </h2>

        <p>
          The direct time cost is only part of the picture. Research published in the journal
          Stress and Health found that commute length is one of the strongest predictors of
          self-reported wellbeing among working adults, more reliably than income above a
          certain threshold or job satisfaction score. A University of the West of England study
          found that each additional minute of commute time correlates with reduced job
          satisfaction, reduced leisure time satisfaction, and increased strain. The commute
          does not stay in the commute. It arrives home with the person doing it.
        </p>

        <p>
          There is also the financial cost, which compounds the time cost into something larger.
          The American Automobile Association estimates that the average American spends around
          10,000 dollars per year operating a car. For commuters who drive, a meaningful fraction
          of that cost is attributable directly to the commute. One and a half waking years of
          time plus tens of thousands of dollars over a career is a significant total for an
          activity most people treat as a fixed and unavoidable feature of working life.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          What the pandemic briefly revealed.
        </h2>

        <p>
          Between 2020 and 2022, a large portion of office workers discovered what their working
          life looked like without a commute. Surveys conducted during that period consistently
          found that eliminated commute time was among the most valued aspects of remote work,
          rated higher than flexibility in hours or location independence by many respondents.
          People used the recovered time for sleep, exercise, time with family, and personal
          projects. The time did not disappear into nothing. It went somewhere, and most people
          found the somewhere preferable to the commute.
        </p>

        <p>
          The return to office mandates that followed have largely restored pre-pandemic commute
          patterns for many workers. The calculation has not changed. One and a half years is
          still the career total. Whether that is time well spent, time that produces something,
          or simply a cost of employment that nobody thought to add up before the lockdowns
          made it briefly visible is a question each person has to answer for themselves. Most
          people had not done the arithmetic before 2020. Some of them still have not.
        </p>

        <p className="text-muted-foreground">
          One and a half years on a train or in traffic. It is worth knowing that is part
          of the deal before you sign the lease.
        </p>
      </div>

      <FAQSection
        faqs={[
          { q: "What is the average commute time in the US?", a: "27.6 minutes one way, according to the most recent US Census Bureau data — just under an hour round trip. That figure has been rising slowly for three decades. In major cities the number is higher: the average New York commuter spends about 80 minutes in transit per day, London is around 74 minutes, and in cities like Chicago and LA the figure regularly exceeds an hour each way for people who live outside the urban core." },
          { q: "Does commuting affect your health?", a: "The research is consistent here. Commute length is one of the strongest predictors of self-reported wellbeing among working adults, more reliably than income above a certain threshold or job satisfaction score. Longer commutes correlate with lower satisfaction, more stress, and reduced time for sleep and exercise. The commute does not stay in the commute — it arrives home with the person doing it." }
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
            to="/journal/how-much-of-your-life-do-you-spend-in-meetings"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much of your life do you spend in meetings? →
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
