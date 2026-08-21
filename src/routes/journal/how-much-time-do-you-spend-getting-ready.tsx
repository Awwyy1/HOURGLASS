import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { PageSEO } from "../../components/PageSEO";
import { ArticleSchema } from "../../components/ArticleSchema";
import { FAQSection } from "../../components/FAQSection";

export const Route = createFileRoute(
  "/journal/how-much-time-do-you-spend-getting-ready",
)({
  component: Article,
});

function Article() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-24">
      <PageSEO
        title="How much time do you spend getting ready in the morning?"
        description="The Bureau of Labor Statistics found Americans spend about 45 minutes a day on grooming — showering, dressing, hair, and personal care. Over a lifetime that adds up to nearly three waking years spent getting ready to start the day."
        ogType="article"
      />
      <ArticleSchema
        title="How much time do you spend getting ready in the morning?"
        description="The Bureau of Labor Statistics found Americans spend about 45 minutes a day on grooming — showering, dressing, hair, and personal care. Over a lifetime that adds up to nearly three waking years spent getting ready to start the day."
        datePublished="2026-07-03"
        slug="how-much-time-do-you-spend-getting-ready"
      />
      <Breadcrumbs
        crumbs={[
          { label: "Hourglass", to: "/" },
          { label: "Journal", to: "/journal" },
          { label: "How much time do you spend getting ready in the morning?" },
        ]}
      />

      <header className="mb-16">
        <div className="mb-6 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          <time dateTime="2026-07-03">July 3, 2026</time>
          <span>·</span>
          <span>3 min read</span>
        </div>
        <h1 className="font-serif text-4xl italic tracking-tight text-foreground md:text-5xl leading-tight">
          How much time do you spend getting ready in the morning?
        </h1>
        <p className="mt-6 font-serif text-[17px] leading-relaxed text-muted-foreground">
          Grooming is a category nobody thinks to add up, because it does not feel like
          time spent doing anything. It feels like the thing that happens before the day starts.
        </p>
      </header>

      <div className="text-[17px] leading-[1.85] text-foreground/85 space-y-6">
        <p>
          The Bureau of Labor Statistics American Time Use Survey tracks a category
          called "grooming," which covers showering, bathing, dressing, hair care, and
          personal hygiene. The most recent data puts the average American at around
          45 minutes per day in this category. Women average somewhat higher, closer to
          55 minutes, while men average around 35 minutes. The figure has been fairly
          stable over the past decade, though it has crept up slightly as skincare
          routines and hair care have become more elaborate for a larger share of the
          population, particularly among younger adults.
        </p>

        <p>
          At 45 minutes per day across 79 years of life — grooming starts young and
          continues to the end — the lifetime total is around 21,655 hours, or roughly
          1,353 waking days. That is close to three and three-quarter waking years spent
          showering, dressing, brushing hair, applying skincare, and generally preparing
          the body to be seen in public. It is a larger number than the lifetime total
          for most individual social media platforms, and larger than the total most
          people spend on deliberate exercise.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          Where the extra minutes tend to come from.
        </h2>

        <p>
          The 45-minute average conceals a wide range depending on routine complexity.
          A basic routine — shower, brush teeth, get dressed — can run under 20 minutes.
          Add hair styling with tools, a multi-step skincare routine, and makeup, and the
          daily total can reach 60 to 90 minutes without anything about it feeling excessive
          or unusual. Market research on the beauty and personal care industry has tracked
          a steady rise in the average number of skincare products used per routine, from
          around three or four products a decade ago to six or more today among consumers
          who follow current trends. Every additional step adds a small, individually
          reasonable amount of time that compounds significantly across a year.
        </p>

        <p>
          At 90 minutes per day instead of 45, the lifetime total roughly doubles to
          around 43,300 hours, or about seven and a half waking years. That range —
          somewhere between three and a half and seven and a half years, depending on
          routine complexity — represents one of the widest swings of any category in
          this project for what looks, from the outside, like a fairly uniform daily
          activity.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          Why this category resists the usual time-audit reaction.
        </h2>

        <p>
          Most of the categories examined in this project provoke some version of
          reconsideration once the lifetime total becomes visible: people look at the
          hours spent on a phone or a streaming platform and ask whether that time could
          be better used. Grooming rarely produces the same reaction, because the activity
          is not experienced as leisure or as a choice in the same sense. Showering and
          dressing are treated as prerequisites for functioning in society rather than as
          discretionary time, even though the actual minutes spent on them vary enormously
          based on personal choices about routine complexity that have nothing to do with
          basic hygiene.
        </p>

        <p className="text-muted-foreground">
          Three and three-quarter years is the number for an average routine, run across
          a full life. It is not a category most people will try to shrink, and there is
          a reasonable argument that they should not: personal care contributes to how
          people feel about themselves in ways that are harder to quantify than an hour of
          television. But knowing the number changes how the minutes read, particularly on
          the mornings when the routine feels longer than it should.
        </p>
      </div>

      <FAQSection
        faqs={[
          {
            q: "How much time does the average person spend getting ready each day?",
            a: "Around 45 minutes, based on the Bureau of Labor Statistics grooming category, which covers showering, dressing, hair care, and personal hygiene. Women average closer to 55 minutes and men closer to 35 minutes. Routines with multiple skincare or hair styling steps commonly run 60 to 90 minutes without feeling unusual to the person doing them, since each additional step tends to feel small on its own."
          },
          {
            q: "How much time does grooming add up to over a lifetime?",
            a: "At the 45-minute average across a full life, the total comes to around 21,600 hours, or nearly four waking years. For someone with a more involved routine averaging 90 minutes a day, the lifetime total roughly doubles to about seven and a half waking years. The wide range reflects how much routine complexity varies between a basic hygiene routine and one that includes extensive skincare, styling, or makeup, even though both would be described by the person doing them as simply getting ready."
          },
        ]}
      />

      <div className="mt-14 border-t border-border pt-10">
        <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          Related
        </p>
        <div className="space-y-3">
          <Link
            to="/journal/how-much-of-your-life-do-you-spend-in-the-shower"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much of your life do you spend in the shower? →
          </Link>
          <Link
            to="/journal/how-much-time-do-you-spend-on-household-chores"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much time do you spend on household chores? →
          </Link>
          <Link
            to="/journal/how-much-time-do-you-spend-looking-for-lost-things"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much time do you spend looking for lost things? →
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
