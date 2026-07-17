import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { PageSEO } from "../../components/PageSEO";
import { ArticleSchema } from "../../components/ArticleSchema";
import { FAQSection } from "../../components/FAQSection";

export const Route = createFileRoute(
  "/journal/how-much-time-do-you-spend-texting",
)({
  component: Article,
});

function Article() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-24">
      <PageSEO
        title="How much time do you spend texting?"
        description="Americans send and receive an average of around 94 texts a day. At roughly 30 seconds of attention per message, that adds up to nearly an hour daily and more than four waking years across a lifetime."
      />
      <ArticleSchema
        title="How much time do you spend texting?"
        description="Americans send and receive an average of around 94 texts a day. At roughly 30 seconds of attention per message, that adds up to nearly an hour daily and more than four waking years across a lifetime."
        datePublished="2026-07-08"
        slug="how-much-time-do-you-spend-texting"
      />
      <Breadcrumbs
        crumbs={[
          { label: "Hourglass", to: "/" },
          { label: "Journal", to: "/journal" },
          { label: "How much time do you spend texting?" },
        ]}
      />

      <header className="mb-16">
        <div className="mb-6 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          <time dateTime="2026-07-08">July 8, 2026</time>
          <span>·</span>
          <span>3 min read</span>
        </div>
        <h1 className="font-serif text-4xl italic tracking-tight text-foreground md:text-5xl leading-tight">
          How much time do you spend texting?
        </h1>
        <p className="mt-6 font-serif text-[17px] leading-relaxed text-muted-foreground">
          Texting does not register as screen time in most people's minds the way
          scrolling does. It feels like a task, not a habit. The numbers suggest it
          is both.
        </p>
      </header>

      <div className="text-[17px] leading-[1.85] text-foreground/85 space-y-6">
        <p>
          Text Request, a business messaging platform that regularly surveys consumer
          texting behavior, found that the average American sends and receives around
          94 text messages per day when combining SMS and messaging apps like iMessage
          and WhatsApp. Younger adults run considerably higher — surveys of 18 to 24
          year olds have found daily message counts well over 100 — while the figure
          declines steadily with age. Deloitte's annual mobile consumer survey has
          found broadly consistent patterns across multiple years, with texting
          remaining the single most frequent activity performed on a smartphone,
          ahead of any single app or platform.
        </p>

        <p>
          Estimating time from message count requires an assumption about how long
          each text takes to read, consider, and respond to. A conservative estimate
          of 20 to 30 seconds per message, accounting for both received and sent
          texts, puts daily texting time somewhere between 30 and 47 minutes. At the
          midpoint of about 40 minutes per day across 60 years of adult life, the
          lifetime total is around 14,600 hours, or roughly 913 waking days. Just
          over two and a half waking years spent composing, reading, and responding
          to short messages.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          What makes texting different from other screen categories.
        </h2>

        <p>
          Unlike social media or video streaming, texting is fundamentally
          transactional. Each message typically exists because a specific person
          wants a specific piece of information or connection from you, and you from
          them. This is part of why texting rarely appears on lists of guilty
          pleasures or wasted time the way Instagram or TikTok does — the activity
          maps onto real relationships and real coordination needs in a way that
          feels justified even when the volume is high.
        </p>

        <p>
          The cost that does not show up in the message count is fragmentation. A
          Gloria Mark study on interruptions, mentioned in research on meetings and
          workplace focus, found that it takes an average of 23 minutes to fully
          return to a task after an interruption. Text messages are interruptions by
          design — they arrive with a notification, they imply an expectation of a
          timely response, and they rarely wait for a convenient moment. At 94
          messages a day, even if only a fraction interrupt focused work or
          attention, the fragmentation cost compounds beyond the roughly 40 minutes
          of direct attention the messages themselves require.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          The group chat problem.
        </h2>

        <p>
          A meaningful share of the daily message volume for most adults now comes
          from group conversations rather than one-to-one exchanges — family group
          chats, friend groups, parent coordination for school activities, work
          channels that have migrated to informal messaging. These conversations
          generate volume disproportionate to the value of any individual message,
          because a group of ten people each contributing a few messages a day
          produces dozens of notifications regardless of whether the content
          requires a response from you specifically. Surveys on messaging behavior
          have found that a large share of self-reported "wasted" texting time comes
          specifically from group conversations that participants describe as
          low-value but feel unable to mute or leave without social cost.
        </p>

        <p className="text-muted-foreground">
          Two and a half years is the lifetime estimate for an average texter, and it
          is likely conservative given how much daily volume has grown with group
          chats and messaging apps layered on top of standard SMS. Unlike a
          streaming platform, texting rarely produces regret. That does not mean the
          hours are free. It means the cost is distributed across relationships
          instead of concentrated in a single app, which makes it considerably
          harder to notice.
        </p>
      </div>

      <FAQSection
        faqs={[
          {
            q: "How many text messages does the average person send per day?",
            a: "Around 94 per day when combining sent and received messages across SMS and messaging apps, based on consumer surveys from Text Request and similar research. Younger adults, particularly those aged 18 to 24, often exceed 100 messages daily, while the figure declines with age. Texting remains the single most frequent smartphone activity across most age groups, ahead of any individual social media app."
          },
          {
            q: "How much time does texting take up over a lifetime?",
            a: "Estimating around 20 to 30 seconds of attention per message and roughly 94 messages a day, daily texting time lands somewhere between 30 and 47 minutes. Across 60 years of adult life, that comes to roughly 14,600 hours, or about two and a half waking years. The estimate does not include the additional time lost to task-switching and interruption recovery, which research on attention suggests adds a meaningful amount on top of the direct message-handling time."
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
