import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { PageSEO } from "../../components/PageSEO";
import { ArticleSchema } from "../../components/ArticleSchema";
import { FAQSection } from "../../components/FAQSection";

export const Route = createFileRoute(
  "/journal/how-much-time-do-you-spend-on-twitter-x",
)({
  component: Article,
});

function Article() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-24">
      <PageSEO
        title="How much time do you spend on Twitter / X?"
        description="The average active user spends around 30 minutes a day on Twitter / X. Over a decade of use that adds up to more than 75 waking days spent reading posts that mostly disappear within hours."
      />
      <ArticleSchema
        title="How much time do you spend on Twitter / X?"
        description="The average active user spends around 30 minutes a day on Twitter / X. Over a decade of use that adds up to more than 75 waking days spent reading posts that mostly disappear within hours."
        datePublished="2026-06-15"
        slug="how-much-time-do-you-spend-on-twitter-x"
      />
      <Breadcrumbs
        crumbs={[
          { label: "Hourglass", to: "/" },
          { label: "Journal", to: "/journal" },
          { label: "How much time do you spend on Twitter / X?" },
        ]}
      />

      <header className="mb-16">
        <div className="mb-6 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          <time dateTime="2026-06-15">June 15, 2026</time>
          <span>·</span>
          <span>3 min read</span>
        </div>
        <h1 className="font-serif text-4xl italic tracking-tight text-foreground md:text-5xl leading-tight">
          How much time do you spend on Twitter / X?
        </h1>
        <p className="mt-6 font-serif text-[17px] leading-relaxed text-muted-foreground">
          Twitter became X in 2023, but the usage pattern stayed the same: short
          bursts of reading that stack into something much larger over months and years.
        </p>
      </header>

      <div className="text-[17px] leading-[1.85] text-foreground/85 space-y-6">
        <p>
          X reported approximately 250 million monetizable daily active users in 2023,
          a figure that has remained roughly stable through the platform's ownership
          change and rebranding. Independent app analytics consistently put average
          daily session time at around 30 to 31 minutes for active users. That number
          covers the person who checks in twice a day for 15 minutes each time and the
          person who has the feed open in a browser tab most of the afternoon. Both land
          in the same average.
        </p>

        <p>
          At 30 minutes per day across 365 days, the annual total is around 182 hours.
          Over ten years of regular use that comes to 1,820 hours, or roughly 114
          waking days. Twenty years brings it to 228 waking days, approaching eight
          months of conscious time spent on a platform where most individual posts
          have a functional half-life of a few hours before they disappear into the
          feed. The content is ephemeral. The hours are not.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          What makes Twitter different from other platforms in how it uses time.
        </h2>

        <p>
          Twitter was designed around short-form text from the start, and that format
          creates a particular kind of consumption. Each post takes a few seconds to
          read. The response to it — agreement, irritation, curiosity, the urge to reply
          or share — resolves in roughly the same amount of time. The cycle repeats
          hundreds of times in a session. This produces a usage pattern that feels
          substantially lighter than it is, because no single interaction seems to cost
          very much. You are not watching a two-hour film or reading a long article.
          You are just checking in. But 30 minutes of checking in every day is the same
          number of hours as 30 minutes of anything else.
        </p>

        <p>
          The platform's composition has shifted considerably over the past few years.
          Researchers who tracked Twitter's active user base found that a relatively small
          proportion of accounts produce the overwhelming majority of content. A Pew
          Research study found that the top 25 percent of US adult users by tweet volume
          account for 97 percent of all tweets. For most users the platform functions
          primarily as a reading experience, not a publishing one. The time is spent
          consuming content produced by a small and unrepresentative slice of the user base.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          The attention cost that goes beyond the session timer.
        </h2>

        <p>
          Twitter's particular version of the attention problem is not session length
          but carry-over. The platform traffics heavily in conflict, breaking news, and
          strong opinions. Research on how people process emotionally charged content
          online finds that it occupies working memory after the session ends in ways
          that neutral content does not. A 30-minute session that includes three
          arguments, one piece of distressing news, and a controversy in your professional
          field does not resolve cleanly when you close the app. The thinking continues.
          The session timer stopped. The attention cost did not.
        </p>

        <p className="text-muted-foreground">
          114 waking days over a decade is a number that most regular users of the
          platform will find uncomfortable to look at directly. The discomfort is
          not really about the hours — it is about what kind of attention those hours
          contain, and whether that attention leaves you in a better state than it
          found you.
        </p>
      </div>

      <FAQSection
        faqs={[
          {
            q: "How much time does the average person spend on Twitter / X per day?",
            a: "Around 30 minutes per day for active users, based on app analytics data. That figure has been relatively consistent across the platform's ownership change and rebranding. Heavy users, particularly those who follow news and commentary closely or work in media and politics, report considerably higher daily times. The 30-minute average also understates the carry-over cost — Twitter's emotionally charged content tends to continue occupying attention after the session ends."
          },
          {
            q: "Is Twitter / X worth the time it takes?",
            a: "That depends almost entirely on why you are there. For journalists, researchers, and people in industries where real-time information has direct professional value, the platform still provides something that is difficult to get elsewhere. For passive news consumption and entertainment, the same hours could go to sources with better signal-to-noise ratios. The platform is highly optimised for engagement rather than informational value, which means it is easy to spend a lot of time there without coming away with much that is useful."
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
            to="/journal/how-much-of-your-life-do-you-spend-reading-news"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much of your life do you spend reading news? →
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
