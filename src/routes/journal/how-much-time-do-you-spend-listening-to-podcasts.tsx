import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { PageSEO } from "../../components/PageSEO";
import { ArticleSchema } from "../../components/ArticleSchema";
import { FAQSection } from "../../components/FAQSection";

export const Route = createFileRoute(
  "/journal/how-much-time-do-you-spend-listening-to-podcasts",
)({
  component: Article,
});

function Article() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-24">
      <PageSEO
        title="How much time do you spend listening to podcasts?"
        description="Weekly podcast listeners average around eight hours a week, which comes to nearly three waking years over an adult life. The medium is unusual because most of those hours were not taken from anything else."
        ogType="article"
      />
      <ArticleSchema
        title="How much time do you spend listening to podcasts?"
        description="Weekly podcast listeners average around eight hours a week, which comes to nearly three waking years over an adult life. The medium is unusual because most of those hours were not taken from anything else."
        datePublished="2026-08-18"
        slug="how-much-time-do-you-spend-listening-to-podcasts"
      />
      <Breadcrumbs
        crumbs={[
          { label: "Hourglass", to: "/" },
          { label: "Journal", to: "/journal" },
          { label: "How much time do you spend listening to podcasts?" },
        ]}
      />

      <header className="mb-16">
        <div className="mb-6 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          <time dateTime="2026-08-18">August 18, 2026</time>
          <span>·</span>
          <span>3 min read</span>
        </div>
        <h1 className="font-serif text-4xl italic tracking-tight text-foreground md:text-5xl leading-tight">
          How much time do you spend listening to podcasts?
        </h1>
        <p className="mt-6 font-serif text-[17px] leading-relaxed text-muted-foreground">
          Nearly every category in this journal took its hours from something
          else. Podcasts are the rare exception, and that is the most
          interesting thing about them.
        </p>
      </header>

      <div className="text-[17px] leading-[1.85] text-foreground/85 space-y-6">
        <p>
          Edison Research has tracked American podcast listening through its
          Infinite Dial series for years, and the trajectory has been one of the
          steadiest in media. Monthly listening has grown from a niche activity
          in the early 2010s to something close to half of Americans aged twelve
          and over. Among people who listen weekly, the figure that matters here,
          the average sits at roughly eight hours per week across all shows.
        </p>

        <p>
          Eight hours a week is 416 hours a year. Across forty years of adult
          listening, the total comes to around 16,600 hours, or about 2.8 waking
          years. That places podcasts close to the lifetime total for{" "}
          <Link
            to="/journal/how-much-time-do-you-spend-listening-to-music"
            className="underline underline-offset-2 hover:text-muted-foreground transition"
          >
            music
          </Link>{" "}
          and ahead of most individual social platforms, which surprises people
          who think of the medium as something they put on rather than something
          they spend time on.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          Where the hours came from.
        </h2>

        <p>
          This is the unusual part. Most of the large totals in this journal
          displaced something: streaming took hours from television, social
          media took them from idle conversation and boredom, phone use took
          them from almost everything. Podcast listening largely did not. The
          research on when people listen points consistently at{" "}
          <Link
            to="/journal/how-much-of-your-life-do-you-spend-driving"
            className="underline underline-offset-2 hover:text-muted-foreground transition"
          >
            driving
          </Link>
          , commuting, exercise, housework, and walking, which are hours that
          were already committed to something that occupies the body and leaves
          the ears free. The medium found genuinely unclaimed territory, which is
          rare enough to be worth noting.
        </p>

        <p>
          That is also the source of its appeal. Podcasts are widely described as
          turning dead time into useful time, and the framing is not wrong. An
          hour of commuting that also contains an interview with someone
          knowledgeable is doing more than an hour of commuting alone. The
          category deserves credit that most screen time does not.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          The part the framing leaves out.
        </h2>

        <p>
          Where the reclaimed-time story gets complicated is retention. Research
          on divided attention consistently finds that comprehension and recall
          drop when listening happens alongside a task that requires its own
          share of cognitive effort, and driving in traffic or navigating a
          supermarket both qualify. The hours are real. The learning that many
          listeners believe they are getting from them is, at least partly, not.
        </p>

        <p>
          There is also a quieter substitution that the usage data does not
          capture well. The hours podcasts occupy were not empty in the way the
          word suggests. Commutes and walks and chores were, for most of human
          history, the reliable places where the mind wandered without input, and
          wandering is where a particular kind of thinking happens. Filling every
          one of them with narration is not obviously a gain, in the same way
          that the last unfilled space described in the article on{" "}
          <Link
            to="/journal/how-much-of-your-life-do-you-spend-in-the-shower"
            className="underline underline-offset-2 hover:text-muted-foreground transition"
          >
            showers
          </Link>{" "}
          turned out to be worth more than its size.
        </p>

        <p className="text-muted-foreground">
          Nearly three waking years, most of them genuinely additional rather
          than taken from somewhere else. That makes podcasts the best-value
          entry in this journal by a clear margin. The only question worth
          holding onto is whether every walk needs one, and the answer is
          probably not the one the download queue implies.
        </p>
      </div>

      <FAQSection
        faqs={[
          {
            q: "How many hours a week does the average person listen to podcasts?",
            a: "Around eight hours a week for weekly listeners, according to Edison Research data. That figure covers people who already listen regularly rather than the whole population, since roughly half of Americans aged twelve and over listen in a given month and the rest listen rarely or not at all. Across forty years of adult listening, eight hours a week comes to about 16,600 hours, or roughly 2.8 waking years."
          },
          {
            q: "Do you actually retain what you hear in podcasts?",
            a: "Less than most listeners assume, at least when listening happens alongside another task. Research on divided attention consistently finds that comprehension and recall fall when the secondary task requires its own cognitive effort, and driving, shopping, or anything requiring navigation all qualify. Listening while doing something genuinely automatic, such as walking a familiar route or folding laundry, preserves considerably more. The hours are real either way; the learning depends heavily on what else is happening during them."
          },
        ]}
      />

      <div className="mt-14 border-t border-border pt-10">
        <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          Related
        </p>
        <div className="space-y-3">
          <Link
            to="/journal/how-much-time-do-you-spend-listening-to-music"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much time do you spend listening to music? →
          </Link>
          <Link
            to="/journal/how-much-of-your-life-do-you-spend-commuting"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much of your life do you spend commuting? →
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
