import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { PageSEO } from "../../components/PageSEO";

export const Route = createFileRoute(
  "/journal/how-much-time-do-you-spend-on-youtube",
)({
  component: Article,
});

function Article() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-24">
      <PageSEO
        title="How much time do you spend on YouTube?"
        description="Regular users spend around 45 minutes a day on YouTube. Over 40 years that becomes two waking years. The recommendation algorithm drives 70 percent of total watch time."
      />
      <Breadcrumbs
        crumbs={[
          { label: "Hourglass", to: "/" },
          { label: "Journal", to: "/journal" },
          { label: "How much time do you spend on YouTube?" },
        ]}
      />

      <header className="mb-16">
        <div className="mb-6 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          <time dateTime="2026-03-13">March 13, 2026</time>
          <span>·</span>
          <span>3 min read</span>
        </div>
        <h1 className="font-serif text-4xl italic tracking-tight text-foreground md:text-5xl leading-tight">
          How much time do you spend on YouTube?
        </h1>
        <p className="mt-6 font-serif text-[17px] leading-relaxed text-muted-foreground">
          YouTube is the second most visited website on the internet. It is also
          the one where the gap between what you opened it for and how long you
          stayed tends to be the largest.
        </p>
      </header>

      <div className="text-[17px] leading-[1.85] text-foreground/85 space-y-6">
        <p>
          Google, which owns YouTube, reported in 2023 that users watch over a billion hours of
          video on the platform every day. Divided across its 2.7 billion monthly users, that
          works out to roughly 22 minutes per user per day. Independent research from Statista
          and app analytics firms consistently finds higher numbers for active users specifically,
          averaging around 45 to 48 minutes per day among people who open the app at least once.
          The discrepancy comes from the large portion of accounts that are registered but rarely
          used. For regular users, the figure sits close to 45 minutes daily.
        </p>

        <p>
          Forty-five minutes a day is 273 hours a year, just over 11 full days, or 17 waking
          days per year on YouTube. Over 40 years of regular use that accumulates to 10,920
          hours. In waking years, roughly two years of conscious life spent watching videos.
          That figure puts YouTube ahead of TikTok in lifetime totals for most users, despite
          TikTok's higher daily average, because YouTube has been in most people's lives for
          considerably longer.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          What makes YouTube different from other platforms.
        </h2>

        <p>
          YouTube occupies a category of its own because it contains a wider range of content
          types than any other platform. A single session might start with a tutorial someone
          genuinely needed, continue through several related videos served by the recommendation
          engine, and end somewhere completely unrelated to where it began. This is not an
          accident. YouTube's recommendation algorithm, which drives around 70 percent of total
          watch time according to the company's own figures, is specifically optimised to extend
          sessions by predicting what a user is likely to watch next rather than what they came
          to find.
        </p>

        <p>
          The result is that YouTube sessions frequently outlast the original intent. Research
          on YouTube usage patterns finds that a meaningful portion of watch time happens in
          what users themselves describe as unintended continuation: they finished what they
          came for but kept watching. The autoplay feature, which queues the next video
          automatically, was designed to reduce friction at exactly this moment. It works.
          Average session length on YouTube is around 40 minutes, which is notably longer than
          most users estimate their sessions to be when asked before checking.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          The case that exists on both sides.
        </h2>

        <p>
          YouTube is harder to dismiss than most platforms in this discussion because a
          genuine portion of what people watch on it is valuable by almost any measure.
          Courses, lectures, tutorials, documentaries, interviews with people who are actually
          worth listening to. The platform has become a primary educational resource for a
          large number of people in a way that Instagram and TikTok have not. Two hours spent
          learning something on YouTube is not the same expenditure as two hours of feed
          scrolling, and treating them as equivalent misses something important.
        </p>

        <p>
          What the two hours have in common is the algorithm that runs underneath them. Whether
          you came to learn something specific or to be entertained, the same recommendation
          engine is working to keep you there past the point where you would have stopped
          if you had to make an active decision each time. Two waking years is a number that
          applies regardless of the content. The question worth asking is what fraction of
          those two years was genuinely chosen, and what fraction was simply what played next.
        </p>

        <p className="text-muted-foreground">
          Two years is a long time. It matters what the algorithm filled it with.
        </p>
      </div>

      <div className="mt-14 border-t border-border pt-10">
        <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          Related
        </p>
        <div className="space-y-3">
          <Link
            to="/journal/how-much-time-does-the-average-person-spend-watching-netflix"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much time does the average person spend watching Netflix? →
          </Link>
          <Link
            to="/journal/how-much-of-your-life-do-you-spend-on-tiktok"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much of your life do you spend on TikTok? →
          </Link>
        </div>
      </div>

      <div className="mt-10 border-t border-border pt-8">
        <p className="font-serif text-[17px] italic text-foreground/75">
          Put your own numbers into the{" "}
          <Link to="/" className="underline underline-offset-2 hover:text-foreground transition">
            Hourglass calculator
          </Link>{" "}
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
