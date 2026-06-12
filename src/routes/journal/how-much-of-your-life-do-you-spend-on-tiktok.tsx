import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { PageSEO } from "../../components/PageSEO";
import { ArticleSchema } from "../../components/ArticleSchema";
import { FAQSection } from "../../components/FAQSection";

export const Route = createFileRoute(
  "/journal/how-much-of-your-life-do-you-spend-on-tiktok",
)({
  component: Article,
});

function Article() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-24">
      <PageSEO
        title="How much of your life do you spend on TikTok?"
        description="The average US user spends 54 minutes a day on TikTok. Over a lifetime of use that comes to roughly two waking years given to an algorithm you never chose to follow."
      />
      <ArticleSchema
        title="How much of your life do you spend on TikTok?"
        description="The average US user spends 54 minutes a day on TikTok. Over a lifetime of use that comes to roughly two waking years given to an algorithm you never chose to follow."
        datePublished="2026-04-03"
        slug="how-much-of-your-life-do-you-spend-on-tiktok"
      />
      <Breadcrumbs
        crumbs={[
          { label: "Hourglass", to: "/" },
          { label: "Journal", to: "/journal" },
          { label: "How much of your life do you spend on TikTok?" },
        ]}
      />

      <header className="mb-16">
        <div className="mb-6 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          <time dateTime="2026-04-03">April 3, 2026</time>
          <span>·</span>
          <span>3 min read</span>
        </div>
        <h1 className="font-serif text-4xl italic tracking-tight text-foreground md:text-5xl leading-tight">
          How much of your life do you spend on TikTok?
        </h1>
        <p className="mt-6 font-serif text-[17px] leading-relaxed text-muted-foreground">
          TikTok is the fastest app in history to reach one billion users. It is
          also, by most measures, the one that takes the most time per session.
          The two facts are related.
        </p>
      </header>

      <div className="text-[17px] leading-[1.85] text-foreground/85 space-y-6">
        <p>
          Data.ai, which tracks global app usage across hundreds of millions of devices, found that
          in 2023 the average TikTok user in the United States spent around 54 minutes on the app
          per day. Among users aged 18 to 34 the figure was closer to 80 minutes. These numbers
          are higher than any other single social platform, including Instagram and YouTube, and
          they have been climbing every year since the app reached mass adoption in 2020.
        </p>

        <p>
          Take the broader average. Fifty-four minutes a day is 329 hours a year. That is almost
          14 full days, or just under 21 waking days per year spent doing nothing but watching
          short videos. Over ten years it becomes 140 waking days. If someone starts using TikTok
          at 16 and continues through their mid-fifties, roughly 40 years of use, the lifetime
          total approaches 13,000 hours. In waking years that is a little over two years of
          conscious life given entirely to a feed of 30-second videos.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          Why TikTok is different from what came before.
        </h2>

        <p>
          Every social platform is designed to hold attention. TikTok is the first one that was
          built from the start around a recommendation algorithm rather than a social graph.
          Instagram and Facebook show you posts from people you chose to follow. TikTok shows you
          what its algorithm has learned you will watch, which turns out to be a more powerful
          retention mechanism than social connection. You do not need to know anyone on TikTok for
          it to keep you there. The feed generates its own reasons to stay.
        </p>

        <p>
          The short video format compounds this. Each clip ends in under a minute, which creates
          a natural prompt to watch just one more. There is no natural stopping point in the way
          there might be at the end of a long video or a full episode. The session ends when the
          user decides to stop, and the app is specifically designed to delay that decision as long
          as possible. Average session length on TikTok is around 11 minutes, meaning the typical
          user opens the app and stays for five or six videos before the session ends. They open
          it roughly five times a day.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          The number most users have never calculated.
        </h2>

        <p>
          Two years of waking life sounds abstract until you connect it to something concrete.
          Two years is long enough to learn a musical instrument to a competent level, run 5,000
          miles, read around 200 books, or build a meaningful professional skill from scratch.
          None of that is to say that TikTok cannot also provide something worth having. Some
          people learn genuinely useful things from it. Many find a kind of low-demand rest in
          it that they would otherwise struggle to access.
        </p>

        <p>
          The question is not whether the time has any value. The question is whether the amount
          of time involved is something you arrived at deliberately or something that happened
          to you while you were looking at your phone. Most TikTok users, if asked to estimate
          their daily usage, underestimate it significantly. The number the app would show them
          is not a number they have ever sat down and chosen to spend.
        </p>

        <p className="text-muted-foreground">
          Two years is a long time. It is worth knowing that is where it went.
        </p>
      </div>

      <FAQSection
        faqs={[
          { q: "How many minutes a day does the average person spend on TikTok?", a: "Around 54 minutes for US users, based on app analytics data from 2023. That puts it above Instagram and approaching YouTube for daily time spent. The gap has been growing since the recommendation algorithm was tuned specifically for retention rather than social connection — a different design goal from any platform that came before it." },
          { q: "Why does TikTok keep people on it longer than other apps?", a: "The algorithm does not rely on following people you know. It builds a model of what you engage with and serves content based purely on that, regardless of who made it. Within a few sessions it predicts your preferences more accurately than most people can predict their own. Combined with the short format — where stopping feels low-cost at every single point — the result is sessions that extend much further than intended." }
        ]}
      />

      <div className="mt-14 border-t border-border pt-10">
        <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          Related
        </p>
        <div className="space-y-3">
          <Link
            to="/journal/how-much-of-your-life-do-you-spend-on-instagram"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much of your life do you spend on Instagram? →
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
