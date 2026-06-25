import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { PageSEO } from "../../components/PageSEO";
import { ArticleSchema } from "../../components/ArticleSchema";
import { FAQSection } from "../../components/FAQSection";

export const Route = createFileRoute(
  "/journal/how-much-of-your-life-do-you-spend-on-your-laptop",
)({
  component: Article,
});

function Article() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-24">
      <PageSEO
        title="How much of your life do you spend on your laptop?"
        description="Between work and personal use, most adults spend five to seven hours a day in front of a laptop or desktop screen. Over a career and adult life, that total reaches decades — making it the single largest category of waking time for many people."
      />
      <ArticleSchema
        title="How much of your life do you spend on your laptop?"
        description="Between work and personal use, most adults spend five to seven hours a day in front of a laptop or desktop screen. Over a career and adult life, that total reaches decades — making it the single largest category of waking time for many people."
        datePublished="2026-07-15"
        slug="how-much-of-your-life-do-you-spend-on-your-laptop"
      />
      <Breadcrumbs
        crumbs={[
          { label: "Hourglass", to: "/" },
          { label: "Journal", to: "/journal" },
          { label: "How much of your life do you spend on your laptop?" },
        ]}
      />

      <header className="mb-16">
        <div className="mb-6 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          <time dateTime="2026-07-15">July 15, 2026</time>
          <span>·</span>
          <span>3 min read</span>
        </div>
        <h1 className="font-serif text-4xl italic tracking-tight text-foreground md:text-5xl leading-tight">
          How much of your life do you spend on your laptop?
        </h1>
        <p className="mt-6 font-serif text-[17px] leading-relaxed text-muted-foreground">
          The laptop is the one screen that nobody tracks. Screen time features exist
          for phones. Nobody has built one for the device most people spend the most
          time on.
        </p>
      </header>

      <div className="text-[17px] leading-[1.85] text-foreground/85 space-y-6">
        <p>
          Nielsen's Total Audience Report found that American adults spend an average
          of around five hours per day on computers and laptops when combining work and
          personal use. For office workers and people whose jobs are primarily
          computer-based, the figure is higher. A survey by Rescue Time, which analysed
          anonymised data from its time-tracking software across millions of users, found
          that the average knowledge worker spends six hours and 27 minutes per day
          in front of a screen on a computer, with productive work accounting for around
          two hours and 48 minutes of that total. The remaining three and a half hours go
          to email, communication tools, news, and browsing that is not directly tied
          to a work output.
        </p>

        <p>
          At six hours per day across a 40-year career, the work-hours total alone is
          87,600 hours — roughly 30 waking years in front of a screen. Add personal
          laptop use outside of working hours at two hours per day across the same period
          and the combined total approaches 117,000 hours, or about 40 waking years.
          For someone who starts a desk job at 22 and retires at 65, the laptop is not
          a tool they use during their life. It is, in terms of raw hours, the primary
          location where their adult life happens.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          Why laptop time is different from phone time in ways that matter.
        </h2>

        <p>
          Phone screen time and laptop screen time are often discussed as though they
          belong to the same category, and in some respects they do — both involve
          looking at a screen, both involve digital content, both accumulate to large
          lifetime totals. But the nature of the attention is different. Phone use is
          characterised by frequent short sessions: the average person picks up their
          phone around 58 times per day, with sessions averaging under three minutes.
          Laptop sessions are longer, more sustained, and frequently involve genuine
          work output. The same number of hours on a laptop contains meaningfully
          different cognitive activity than the same number of hours on a phone, even
          if both show up identically in a time audit.
        </p>

        <p>
          The problem is that six-plus hours of sustained screen time also contains
          a large volume of low-value activity that is hard to separate from the
          productive portion. Switching between tabs, checking messages, reading content
          that arrived via notification — these fill the gaps between genuine work in
          ways that are difficult to observe from the inside. Rescue Time's data found
          that the average worker switches between applications or websites about 566
          times per day. At that rate of interruption, the laptop's function as a
          productivity tool and its function as a distraction delivery mechanism are
          deeply entangled.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          What the no-visibility problem costs.
        </h2>

        <p>
          Phones have Screen Time on iOS and Digital Wellbeing on Android. Laptops have
          nothing comparable built in by default. The result is that the largest screen
          in most adults' lives — the one associated with both their most productive and
          their most distracted hours — is also the least observed. People who are
          genuinely surprised by their phone screen time data have no equivalent moment
          of reckoning for the laptop, even though the hours there often run higher.
        </p>

        <p className="text-muted-foreground">
          Forty waking years is a number that becomes easier to understand when you
          think of it the other way: if you are 30 now and you follow average patterns,
          you have roughly 28 of those years still ahead of you. What happens inside
          them — how much of it is work you find meaningful, how much is friction, how
          much is distraction you would not choose if you could see it clearly — is
          a question the laptop itself will never raise on your behalf.
        </p>
      </div>

      <FAQSection
        faqs={[
          {
            q: "How many hours a day does the average person spend on their laptop?",
            a: "Around five to six hours when combining work and personal use, based on Nielsen audience data and time-tracking software analysis from Rescue Time. For office workers and knowledge workers whose jobs are primarily computer-based, the figure is often higher — Rescue Time's data on its own users found an average of six hours and 27 minutes of computer screen time per day. Personal laptop use outside working hours adds another one to two hours on top of that for many people."
          },
          {
            q: "How much of a knowledge worker's computer time is actually productive?",
            a: "Rescue Time's analysis of anonymised data from millions of users found that the average knowledge worker spends about two hours and 48 minutes per day on work they consider productive, out of a total of over six hours of computer screen time. The remainder goes to email, communication tools, news, and browsing. The same data showed users switching between applications or websites around 566 times per day, which gives a sense of how fragmented the remaining hours tend to be."
          },
        ]}
      />

      <div className="mt-14 border-t border-border pt-10">
        <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          Related
        </p>
        <div className="space-y-3">
          <Link
            to="/journal/how-much-time-do-you-spend-on-your-phone"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much time do you spend on your phone per day? →
          </Link>
          <Link
            to="/journal/how-much-time-does-the-average-person-spend-on-email"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much time does the average person spend on email? →
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
