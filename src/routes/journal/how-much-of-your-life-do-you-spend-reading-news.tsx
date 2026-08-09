import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { PageSEO } from "../../components/PageSEO";
import { ArticleSchema } from "../../components/ArticleSchema";
import { FAQSection } from "../../components/FAQSection";

export const Route = createFileRoute(
  "/journal/how-much-of-your-life-do-you-spend-reading-news",
)({
  component: Article,
});

function Article() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-24">
      <PageSEO
        title="How much of your life do you spend reading news?"
        description="The average person spends an hour a day with the news. Over 40 years that is two and a half waking years. Studies find people remember about 20 percent of what they read."
        ogType="article"
      />
      <ArticleSchema
        title="How much of your life do you spend reading news?"
        description="The average person spends an hour a day with the news. Over 40 years that is two and a half waking years. Studies find people remember about 20 percent of what they read."
        datePublished="2026-05-08"
        slug="how-much-of-your-life-do-you-spend-reading-news"
      />
      <Breadcrumbs
        crumbs={[
          { label: "Hourglass", to: "/" },
          { label: "Journal", to: "/journal" },
          { label: "How much of your life do you spend reading news?" },
        ]}
      />

      <header className="mb-16">
        <div className="mb-6 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          <time dateTime="2026-05-08">May 8, 2026</time>
          <span>·</span>
          <span>3 min read</span>
        </div>
        <h1 className="font-serif text-4xl italic tracking-tight text-foreground md:text-5xl leading-tight">
          How much of your life do you spend reading news?
        </h1>
        <p className="mt-6 font-serif text-[17px] leading-relaxed text-muted-foreground">
          Staying informed is easy to justify. The question is how much of
          that time actually informs you, and how much of it just keeps you
          in the loop of things you cannot change.
        </p>
      </header>

      <div className="text-[17px] leading-[1.85] text-foreground/85 space-y-6">
        <p>
          The Reuters Institute Digital News Report, which surveys news consumption habits across
          more than 40 countries annually, consistently finds that the average person spends
          between 45 minutes and an hour per day consuming news across all formats. That includes
          reading articles, watching news video, listening to news podcasts, and scrolling through
          news in social feeds. When news-adjacent content is included, meaning opinion pieces,
          political commentary, and current affairs discussions, the figure for regularly engaged
          news consumers tends to be closer to 90 minutes.
        </p>

        <p>
          Take the middle figure: one hour a day. That is 365 hours a year, or just over 15 full
          days. In waking time it becomes 22 days per year spent with the news. Over 40 years of
          adult life it accumulates to 14,600 hours, which in waking years comes to about two and
          a half years of conscious time given to following current events. For the more engaged
          readers, the ones who check headlines in the morning, listen to a news podcast on the
          commute, and scroll through one more feed before bed, the total is considerably higher.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          What changed when news moved to a feed.
        </h2>

        <p>
          For most of the 20th century, news consumption had natural boundaries. The morning
          paper, the evening broadcast, maybe a weekly magazine. The day had a beginning and an
          end, and so did the news within it. When news moved online and then into social feeds,
          those boundaries disappeared. The news is now available continuously, updated constantly,
          and delivered through the same apps designed to hold attention as long as possible.
          The result is that news consumption for many people is no longer a deliberate activity
          with a start and finish. It is a background state that can be re-entered at any moment.
        </p>

        <p>
          Research on news consumption patterns finds that heavy news users check for updates an
          average of once every 30 minutes during waking hours. Not because something significant
          is happening every 30 minutes, but because the habit of checking has decoupled itself
          from the expectation of finding something new. The check happens regardless. This is the
          same structural pattern as social media use, which is not a coincidence: most people now
          encounter news through social platforms, where the delivery mechanism is identical.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          The retention problem.
        </h2>

        <p>
          There is a reasonable argument that time spent staying informed is time well spent. A
          functioning democracy depends on citizens who know what is happening. Professional life
          in almost any field requires awareness of relevant developments. News is not a frivolous
          category in the way that passive scrolling might be.
        </p>

        <p>
          What complicates that argument is the retention research. Studies on news recall
          consistently find that people remember very little of what they read on a given day.
          A 2022 study found that readers could accurately recall only about 20 percent of the
          news stories they had consumed in the previous 24 hours, and that number dropped sharply
          for stories encountered in a feed rather than sought out directly. Two and a half waking
          years is a meaningful amount of time to spend on something. The question worth asking is
          not whether news matters but whether the specific way most people consume it, in small
          fragments, continuously, through feeds optimised for engagement rather than understanding,
          is actually producing the informed awareness they are spending those years to achieve.
        </p>

        <p className="text-muted-foreground">
          Being informed is worth something. Being in a permanent state of checking is a
          different thing entirely.
        </p>
      </div>

      <FAQSection
        faqs={[
          { q: "How much time should you spend reading the news each day?", a: "There is no agreed answer, but the research suggests diminishing returns start earlier than most people expect. Above around 30 minutes of news per day, additional consumption does not consistently improve understanding of events and often increases anxiety. Two long sessions do not seem to produce twice the understanding of one. The relationship between time spent and knowledge gained is not linear." },
          { q: "Does reading more news make you better informed?", a: "More complicated than yes. People who read more news are better at recognising major events, but not consistently better at understanding causes and context. A Reuters Institute study found that heavy news consumers and selective readers had similar levels of comprehension on most topics, while heavy consumers reported significantly higher fatigue and pessimism. Knowing more headlines is not the same as knowing more." }
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
            to="/journal/how-much-time-do-you-spend-on-twitter-x"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much time do you spend on Twitter / X? →
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
