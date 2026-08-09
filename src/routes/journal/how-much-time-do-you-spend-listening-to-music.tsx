import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { PageSEO } from "../../components/PageSEO";
import { ArticleSchema } from "../../components/ArticleSchema";
import { FAQSection } from "../../components/FAQSection";

export const Route = createFileRoute(
  "/journal/how-much-time-do-you-spend-listening-to-music",
)({
  component: Article,
});

function Article() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-24">
      <PageSEO
        title="How much time do you spend listening to music?"
        description="Nielsen found Americans spend around 32 hours a month listening to music across all platforms. Over a lifetime that comes to roughly four waking years — more than most people spend on any single social media platform."
        ogType="article"
      />
      <ArticleSchema
        title="How much time do you spend listening to music?"
        description="Nielsen found Americans spend around 32 hours a month listening to music across all platforms. Over a lifetime that comes to roughly four waking years — more than most people spend on any single social media platform."
        datePublished="2026-06-12"
        slug="how-much-time-do-you-spend-listening-to-music"
      />
      <Breadcrumbs
        crumbs={[
          { label: "Hourglass", to: "/" },
          { label: "Journal", to: "/journal" },
          { label: "How much time do you spend listening to music?" },
        ]}
      />

      <header className="mb-16">
        <div className="mb-6 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          <time dateTime="2026-06-12">June 12, 2026</time>
          <span>·</span>
          <span>3 min read</span>
        </div>
        <h1 className="font-serif text-4xl italic tracking-tight text-foreground md:text-5xl leading-tight">
          How much time do you spend listening to music?
        </h1>
        <p className="mt-6 font-serif text-[17px] leading-relaxed text-muted-foreground">
          Music is the only major time category in this project where almost no one
          feels guilty about the hours. That makes it worth looking at carefully.
        </p>
      </header>

      <div className="text-[17px] leading-[1.85] text-foreground/85 space-y-6">
        <p>
          Nielsen's Music 360 report found that Americans spend an average of 32 hours
          per month listening to music across all sources — streaming services, radio,
          owned files, and video platforms. That works out to just over an hour a day.
          Spotify, which had 602 million monthly active users in 2023, reports that
          its subscribers average around 30 minutes of listening per day on the platform
          alone, with total music listening running considerably higher once offline
          and background listening are included. The IFPI's Global Music Report has
          consistently found similar figures across multiple markets.
        </p>

        <p>
          At 32 hours per month across a 60-year adult listening life, the cumulative
          total is 23,040 hours. In waking days, that is roughly 1,440 — just under
          four waking years. That figure is larger than the lifetime total for Instagram,
          larger than most estimates for TikTok, and comparable to the career total for
          email. Music listening accumulates more quietly than screen time because it
          is frequently a background activity. The hours are real even when the attention
          is divided.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          How streaming changed the relationship between people and listening time.
        </h2>

        <p>
          Before streaming, music required either a purchase decision or a radio. Both
          imposed a degree of intentionality: you bought the album, or you accepted what
          was playing. Streaming removed that friction entirely. The consequence has been
          a large increase in total listening hours — Spotify reported a 25 percent
          increase in listening time per user between 2017 and 2020 — but also a shift
          in how people listen. The playlist and algorithm model encourages passive,
          continuous listening rather than the more deliberate experience of sitting with
          a specific record from beginning to end. More hours, but a different relationship
          with what is filling them.
        </p>

        <p>
          Podcast listening now competes directly for the same hours. Edison Research
          found that weekly podcast listeners in the US spend an average of seven hours
          per week on podcasts, a figure that has roughly doubled since 2017. For people
          who listen to both music and podcasts during commutes, exercise, and household
          tasks, the combined audio category represents the largest single slice of
          discretionary time after screen use.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          What makes music different from every other category on this list.
        </h2>

        <p>
          Almost every other large time category in a modern life competes with something
          else. Time on your phone is time not spent in conversation. Time in meetings is
          time not available for focused work. Time on social media is time not reading,
          exercising, or sleeping. Music is one of the few categories that genuinely stacks
          with other activities rather than displacing them. The 32 hours per month is
          largely not 32 hours taken from something else. It accompanies commuting, cooking,
          exercise, and household tasks that would be happening anyway. The hours are still
          real, but their opportunity cost is structured differently.
        </p>

        <p className="text-muted-foreground">
          Four waking years is the lifetime number for an average listener. For someone
          who uses music as a constant companion through their working hours, the total
          is considerably higher. Whether that time is well spent is harder to argue
          against than most screen categories — which may be exactly why no one bothers
          to argue against it at all.
        </p>
      </div>

      <FAQSection
        faqs={[
          {
            q: "How many hours a day does the average person spend listening to music?",
            a: "Around one hour per day, based on Nielsen's Music 360 research putting average monthly listening at 32 hours across all platforms. Spotify's internal data suggests subscribers average about 30 minutes on the platform specifically, with additional listening happening elsewhere. The figure varies considerably by age group, with younger listeners generally spending more time, and by lifestyle — people with long commutes or physical jobs that permit background listening tend to run well above the average."
          },
          {
            q: "How much time do people spend on Spotify per day?",
            a: "Spotify's own data puts average daily listening time for subscribers at around 30 minutes on the platform. That figure is lower than total music listening time because it excludes radio, other streaming services, and any listening done outside the app. Regular Spotify users who use it as their primary music source tend to average higher — closer to 45 to 60 minutes per day — particularly when counting background listening during commutes or exercise that does not require active attention."
          },
        ]}
      />

      <div className="mt-14 border-t border-border pt-10">
        <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          Related
        </p>
        <div className="space-y-3">
          <Link
            to="/journal/how-much-time-do-you-spend-reading-books"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much time do you spend reading books in a lifetime? →
          </Link>
          <Link
            to="/journal/how-much-of-your-life-do-you-spend-driving"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much of your life do you spend driving? →
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
