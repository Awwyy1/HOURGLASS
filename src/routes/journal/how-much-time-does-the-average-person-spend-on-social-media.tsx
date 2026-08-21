import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { PageSEO } from "../../components/PageSEO";
import { ArticleSchema } from "../../components/ArticleSchema";
import { FAQSection } from "../../components/FAQSection";

export const Route = createFileRoute(
  "/journal/how-much-time-does-the-average-person-spend-on-social-media",
)({
  component: Article,
});

function Article() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-24">
      <PageSEO
        title="How much time does the average person spend on social media?"
        description="The average user now spends about 2 hours and 23 minutes a day on social media across all platforms. Over 50 years of adult use that adds up to roughly seven and a half waking years."
        ogType="article"
      />
      <ArticleSchema
        title="How much time does the average person spend on social media?"
        description="The average user now spends about 2 hours and 23 minutes a day on social media across all platforms. Over 50 years of adult use that adds up to roughly seven and a half waking years."
        datePublished="2026-07-15"
        slug="how-much-time-does-the-average-person-spend-on-social-media"
      />
      <Breadcrumbs
        crumbs={[
          { label: "Hourglass", to: "/" },
          { label: "Journal", to: "/journal" },
          { label: "How much time does the average person spend on social media?" },
        ]}
      />

      <header className="mb-16">
        <div className="mb-6 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          <time dateTime="2026-07-15">July 15, 2026</time>
          <span>·</span>
          <span>3 min read</span>
        </div>
        <h1 className="font-serif text-4xl italic tracking-tight text-foreground md:text-5xl leading-tight">
          How much time does the average person spend on social media?
        </h1>
        <p className="mt-6 font-serif text-[17px] leading-relaxed text-muted-foreground">
          This journal has taken the platforms one at a time. This is the
          article where they all get added together, and the total is the
          largest number in the series so far.
        </p>
      </header>

      <div className="text-[17px] leading-[1.85] text-foreground/85 space-y-6">
        <p>
          The most widely cited figure comes from DataReportal's ongoing global
          survey work: the average social media user spends 2 hours and 23
          minutes per day across all platforms combined. The US average sits
          within a few minutes of that. The figure covers every service in the
          category at once, which matters, because almost nobody uses just one.
          The same research finds the average user maintains accounts on more
          than six platforms, rotating through them in the gaps of the day.
          Teenagers run far above the average: Gallup's survey of American
          teens found 4.8 hours per day, and that is self-reported, which
          usually undercounts.
        </p>

        <p>
          At 143 minutes per day, the annual total is about 870 hours, which
          is 54 waking days per year. Across 50 years of adult use, the
          lifetime total comes to roughly 43,500 hours, or about 2,700 waking
          days. That is seven and a half waking years given to feeds,
          notifications, stories, and comment threads. For someone at the
          teenage rate, the same 50-year horizon points toward fifteen waking
          years, which would make social media the single largest voluntary
          activity in their life, ahead of eating, exercising, reading, and
          every hobby combined.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          How the total splits across the platforms.
        </h2>

        <p>
          The aggregate is built from pieces this journal has already measured
          one by one.{" "}
          <Link
            to="/journal/how-much-of-your-life-do-you-spend-on-tiktok"
            className="underline underline-offset-2 hover:text-muted-foreground transition"
          >
            TikTok
          </Link>{" "}
          takes around 54 minutes a day from its average US user.{" "}
          <Link
            to="/journal/how-much-of-your-life-do-you-spend-on-instagram"
            className="underline underline-offset-2 hover:text-muted-foreground transition"
          >
            Instagram
          </Link>{" "}
          collects 20 to 30 short visits a day that add up to about half an
          hour.{" "}
          <Link
            to="/journal/how-much-of-your-life-do-you-spend-on-facebook"
            className="underline underline-offset-2 hover:text-muted-foreground transition"
          >
            Facebook
          </Link>{" "}
          still holds 33 minutes despite years of reported decline, and{" "}
          <Link
            to="/journal/how-much-time-do-you-spend-on-twitter-x"
            className="underline underline-offset-2 hover:text-muted-foreground transition"
          >
            Twitter / X
          </Link>{" "}
          takes about 30 from its active users. No single platform looks
          alarming on its own. That is precisely how the category works. The
          2 hours and 23 minutes is assembled from four or five individually
          reasonable habits that were never designed to be summed by the
          person holding the phone.
        </p>

        <p>
          The trend line matters as much as the level. In 2013 the global
          average was about 90 minutes per day. It has risen more or less
          every year since, through every wave of concern, every screen time
          feature, and every public conversation about digital wellbeing. The
          tools built to curb the habit have been running for years now, and
          the average has not bent. It is worth being honest about what that
          means: the feeds are winning the design contest against the
          dashboards, and there is no current reason to expect the line to
          turn on its own.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          The cohort that will find out the real number.
        </h2>

        <p>
          Nobody alive has yet spent a full life on social media. The
          platforms only became mainstream around 2007, so today's forty-year
          old picked them up as an adult, with attention habits already
          formed. Today's twenty-year-old did not. They are the first cohort
          that will run the entire experiment from childhood to old age, and
          if current averages simply hold flat, their lifetime total will land
          between ten and fifteen waking years. Every number in this article
          is, for them, a floor rather than an estimate.
        </p>

        <p className="text-muted-foreground">
          Seven and a half waking years at today's average, and the average is
          still climbing. The individual platforms each felt small enough to
          keep. The sum is the second largest item in most people's waking
          life after work, and it is the only one of the two that nobody is
          paid for.
        </p>
      </div>

      <FAQSection
        faqs={[
          {
            q: "How many hours a day does the average person spend on social media?",
            a: "About 2 hours and 23 minutes across all platforms combined, according to DataReportal's global survey data, with the US average within a few minutes of that. The figure has roughly doubled since 2013. Teenagers report far more: Gallup found US teens averaging 4.8 hours per day, with the heaviest users above seven. Because most of these figures are self-reported and people consistently underestimate their own usage, the true averages are likely somewhat higher."
          },
          {
            q: "What percentage of a lifetime is spent on social media?",
            a: "At the current adult average, social media takes about 15 percent of waking free time and roughly 4 to 5 percent of total waking life across 50 years of use, which works out to around seven and a half waking years. For someone using it at the teenage average of nearly five hours a day, the share of waking life climbs toward 10 percent. Those percentages exceed what most people spend on eating, exercising, or reading over the same span."
          },
        ]}
      />

      <div className="mt-14 border-t border-border pt-10">
        <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          Related
        </p>
        <div className="space-y-3">
          <Link
            to="/journal/how-much-of-your-life-do-you-spend-on-tiktok"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much of your life do you spend on TikTok? →
          </Link>
          <Link
            to="/journal/how-much-of-your-life-do-you-spend-on-instagram"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much of your life do you spend on Instagram? →
          </Link>
          <Link
            to="/journal/how-much-of-your-life-do-you-spend-on-facebook"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much of your life do you spend on Facebook? →
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
