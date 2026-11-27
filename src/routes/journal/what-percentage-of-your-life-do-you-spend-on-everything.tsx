import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { PageSEO } from "../../components/PageSEO";
import { ArticleSchema } from "../../components/ArticleSchema";
import { FAQSection } from "../../components/FAQSection";
import { AnswerBlock } from "../../components/AnswerBlock";
import { FigureCard, FigurePanel } from "../../components/LifeFigure";
import { Compare } from "../../components/BreakdownFigures";
import { LIFETIMES, type Lifetime } from "../../lib/lifetimes.gen";

export const Route = createFileRoute(
  "/journal/what-percentage-of-your-life-do-you-spend-on-everything",
)({
  component: Article,
});

const TITLE = "What percentage of your life do you spend on everything?";
const DESCRIPTION =
  "Sleep takes 31% of a life. A laptop, work and a phone each take a fifth or more of the waking rest. Every habit in this journal, ranked by its share.";

/** Short names for the ranking; the full question is each article's title. */
const LABELS: Record<string, string> = {
  "how-much-of-your-life-do-you-spend-sitting": "Sitting",
  "how-much-of-your-life-do-you-spend-sleeping": "Sleep",
  "how-much-time-do-you-spend-alone": "Time alone",
  "how-much-of-your-life-do-you-spend-on-your-laptop": "A laptop or desktop",
  "how-much-of-your-life-do-you-spend-working": "Work",
  "how-much-time-do-you-spend-on-your-phone": "A phone",
  "how-much-time-do-you-spend-on-household-chores": "Household chores",
  "how-much-time-does-the-average-person-spend-watching-netflix": "Netflix",
  "how-much-time-does-the-average-person-spend-on-social-media": "Social media",
  "how-much-of-your-life-do-you-spend-eating": "Eating",
  "how-much-of-your-life-do-you-spend-in-meetings": "Meetings",
  "how-much-time-does-the-average-person-spend-on-email": "Email",
  "how-much-time-do-you-spend-listening-to-music": "Music",
  "how-many-spotify-wrapped-minutes-is-normal": "Spotify",
  "how-much-time-do-you-spend-getting-ready": "Getting ready",
  "how-much-of-your-life-do-you-spend-driving": "Driving",
  "how-much-time-do-you-spend-on-video-calls": "Video calls",
  "how-much-time-do-you-spend-listening-to-podcasts": "Podcasts",
  "how-much-time-do-you-spend-on-your-phone-in-bed": "A phone in bed",
  "how-much-of-your-life-do-you-spend-in-school": "School",
  "how-much-of-your-life-do-you-spend-cooking": "Cooking",
  "how-much-of-your-life-do-you-spend-playing-video-games": "Video games",
  "how-much-of-your-life-do-you-spend-reading-news": "Reading the news",
  "how-much-time-do-you-spend-texting": "Texting",
  "how-much-time-do-you-spend-with-your-friends": "Friends",
  "how-much-of-your-life-do-you-spend-on-tiktok": "TikTok",
  "how-much-time-do-you-spend-waiting": "Waiting",
  "how-much-of-your-life-do-you-spend-at-red-lights": "Red lights",
  "how-much-time-do-you-spend-on-youtube": "YouTube",
  "how-much-time-do-you-spend-watching-sports": "Watching sports",
  "how-much-of-your-life-do-you-spend-commuting": "Commuting",
  "how-much-time-do-you-spend-shopping-online": "Shopping online",
  "how-much-of-your-life-do-you-spend-exercising": "Exercise",
  "how-much-time-do-you-spend-reading-books": "Reading books",
  "how-much-of-your-life-do-you-spend-on-instagram": "Instagram",
  "how-much-time-do-you-spend-grocery-shopping": "Grocery shopping",
  "how-much-of-your-life-do-you-spend-in-the-shower": "Showering",
  "how-much-time-do-you-spend-looking-for-lost-things": "Looking for lost things",
  "how-much-of-your-life-do-you-spend-on-facebook": "Facebook",
  "how-much-time-do-you-spend-on-twitter-x": "Twitter / X",
  "how-much-time-do-you-spend-using-ai": "Using AI",
  "how-much-time-do-you-spend-stuck-in-traffic": "Stuck in traffic",
  "how-much-time-do-you-have-left-with-your-parents": "Visits with your parents",
  "how-much-time-do-you-spend-on-linkedin": "LinkedIn",
  "how-much-time-do-you-spend-on-dating-apps": "Dating apps",
};

/** States that run underneath most activities rather than competing with them. */
const STATES = new Set([
  "how-much-of-your-life-do-you-spend-sitting",
  "how-much-time-do-you-spend-alone",
]);

const label = (r: Lifetime) => LABELS[r.slug] ?? r.title;
const perDay = (h: number) =>
  h < 1 ? `${Math.round(h * 60)} min` : `${h.toFixed(1).replace(/\.0$/, "")} h`;
const overLife = (y: number) => (y < 1 ? `${Math.round(y * 365)} days` : `${y} yrs`);

const activities = LIFETIMES.filter((r) => !r.sleep && !STATES.has(r.slug));
const states = LIFETIMES.filter((r) => STATES.has(r.slug));

function ArticleFigure() {
  return (
    <FigurePanel
      answer={{
        value: "31%",
        unit: "of a life, asleep",
        text: "and of the waking rest, a phone alone takes about a fifth.",
      }}
    >
      <FigureCard>
        <Compare
          num="01"
          title="Largest activities, share of waking life"
          rows={activities.slice(0, 8).map((r, i) => ({
            label: label(r),
            value: r.share,
            display: `${r.share}%`,
            accent: i < 3,
          }))}
          text="The top three overlap heavily: most laptop time is work, and most phone time is everything else."
        />
      </FigureCard>
      <FigureCard>
        <Compare
          num="02"
          title="States that run under everything"
          rows={states.map((r) => ({ label: label(r), value: r.share, display: `${r.share}%` }))}
          text="Sitting and time alone sit underneath most of the activities above rather than beside them."
        />
      </FigureCard>
    </FigurePanel>
  );
}

function Ranking() {
  return (
    <table className="w-full border-collapse text-left">
      <caption className="mb-4 text-left font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
        Every habit in the journal, by share of a 79-year life
      </caption>
      <thead>
        <tr className="border-b border-border font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          <th scope="col" className="py-2 pr-3 font-normal">
            Habit
          </th>
          <th scope="col" className="hidden py-2 pr-3 text-right font-normal sm:table-cell">
            A day
          </th>
          <th scope="col" className="py-2 pr-3 text-right font-normal">
            Over a life
          </th>
          <th scope="col" className="py-2 text-right font-normal">
            Share
          </th>
        </tr>
      </thead>
      <tbody className="text-[15px]">
        {LIFETIMES.map((r) => (
          <tr key={r.slug} className="border-b border-border">
            <th scope="row" className="py-2.5 pr-3 font-normal">
              <Link
                to={`/journal/${r.slug}` as "/journal"}
                className="text-foreground underline decoration-border underline-offset-4 transition hover:decoration-foreground"
              >
                {label(r)}
              </Link>
              {(r.sleep || STATES.has(r.slug)) && (
                <span className="ml-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  {r.sleep ? "of all time" : "overlaps"}
                </span>
              )}
            </th>
            <td className="hidden py-2.5 pr-3 text-right font-mono text-sm tabular-nums text-foreground sm:table-cell">
              {perDay(r.hoursPerDay)}
            </td>
            <td className="py-2.5 pr-3 text-right font-mono text-sm tabular-nums text-foreground">
              {overLife(r.years)}
            </td>
            <td className="py-2.5 text-right font-mono text-sm tabular-nums text-foreground">
              {r.share}%
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const WHOLE_LIFE = [
  { to: "/journal/how-many-days-are-in-a-lifetime", text: "How many days are in a lifetime?" },
  { to: "/journal/how-many-hours-are-in-a-lifetime", text: "How many hours are in a lifetime?" },
  {
    to: "/journal/how-much-vacation-time-do-you-get-in-a-lifetime",
    text: "How much vacation time do you get in a lifetime?",
  },
  {
    to: "/journal/how-much-time-do-parents-spend-with-their-children",
    text: "How much time do parents spend with their children?",
  },
] as const;

function Article() {
  return (
    <article className="article-with-figure mx-auto max-w-2xl px-6 py-24">
      <PageSEO title={TITLE} description={DESCRIPTION} ogType="article" />
      <ArticleSchema
        title={TITLE}
        description={DESCRIPTION}
        datePublished="2026-09-04"
        slug="what-percentage-of-your-life-do-you-spend-on-everything"
      />
      <Breadcrumbs
        crumbs={[
          { label: "Hourglass", to: "/" },
          { label: "Journal", to: "/journal" },
          { label: TITLE },
        ]}
      />

      <header className="mb-16">
        <div className="mb-6 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          <time dateTime="2026-09-04">September 4, 2026</time>
          <span>·</span>
          <span>4 min read</span>
        </div>
        <h1 className="font-serif text-4xl italic tracking-tight text-foreground md:text-5xl leading-tight">
          {TITLE}
        </h1>
        <p className="mt-6 font-serif text-[17px] leading-relaxed text-muted-foreground">
          Each article in this journal measures one habit. Set side by side, they show where a life
          actually goes, and how much of it is claimed twice.
        </p>
      </header>

      <ArticleFigure />

      <AnswerBlock>
        Sleep takes about 31 percent of all your time, roughly 25 years of a 79-year life. Of the
        waking rest, the largest single activities are a laptop or desktop at about 25 percent, work
        at about 22 and a phone at about 20, and the three overlap heavily. Sitting covers about 43
        percent of waking life, because it runs underneath most of the others.
      </AnswerBlock>

      <div className="text-[17px] leading-[1.85] text-foreground/85 space-y-6">
        <p>
          A 79-year life holds about 692,000 hours. Sleep removes roughly a third of them, which
          leaves 79 waking years of 5,840 hours each, about 461,000 hours to divide between
          everything else. The ranking below takes the lifetime total from each article in this
          journal and expresses it as a share of that waking budget, so a habit that fills 7.9
          waking years takes 10 percent of a life&apos;s conscious time. Sleep is the one exception,
          and its share is of all time, awake or not.
        </p>

        <p>
          The shares do not add up to 100 percent, and they are not meant to. Most of these
          categories sit on top of one another: time on a laptop includes most of a working day, a
          phone includes social media, TikTok and Instagram, and sitting runs underneath work,
          driving, eating and nearly every screen. Each row answers its own question over the span
          of life its article uses, from three years on dating apps to a whole life of eating.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">Every habit, ranked.</h2>

        <Ranking />

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">What the ranking shows.</h2>

        <p>
          Screens and work occupy the top of the list together. A laptop at eight hours a day over a
          career comes to 20 waking years, work to a little over 17, and a phone at four hours a day
          from 18 to 80 to 15.5. They overlap so much that the more useful reading is a single block
          of roughly a quarter of waking life spent looking at a screen, either on a desk or in a
          hand depending on the hour.
        </p>

        <p>
          Further down the numbers shrink and stop overlapping. Household chores take about 7.5
          waking years, eating 5.5, getting ready 3.7, driving 3.2 and waiting 2.3. These are the
          running costs of being a person, and together they come to roughly 22 waking years, more
          than a laptop, work or a phone on its own.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          The numbers that cover a whole life.
        </h2>

        <p>
          Four articles measure a whole life rather than one habit: the 28,900 days in a 79-year
          life, the 692,040 hours it contains, the roughly 645 days of paid vacation in an American
          career, and the 940 Saturdays between a child&apos;s birth and their eighteenth birthday.
        </p>

        <ul className="space-y-2">
          {WHOLE_LIFE.map((a) => (
            <li key={a.to}>
              <Link
                to={a.to}
                className="font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
              >
                {a.text} →
              </Link>
            </li>
          ))}
        </ul>

        <p className="text-muted-foreground">
          Sleep takes 31 percent of a life, screens about a quarter of the waking rest, and the
          upkeep of a life more than another quarter. Everything else on the list shares what
          remains.
        </p>
      </div>

      <FAQSection
        faqs={[
          {
            q: "What do people spend most of their life doing?",
            a: "Sleeping, at about a third of all time, which is roughly 25 years of a 79-year life. Among waking activities, screens and work are the largest: a laptop or desktop accounts for about 20 waking years over a career, work for a little over 17 and a phone for about 15, with heavy overlap between the three. Sitting, which runs underneath most of these, covers about 34 waking years.",
          },
          {
            q: "What percentage of your life do you spend on your phone?",
            a: "At four hours a day from 18 to 80, about 15.5 waking years, which is roughly 20 percent of the waking hours in a 79-year life. While the habit lasts, four hours is about 17 percent of every day, or a quarter of the 16 hours you are awake.",
          },
        ]}
      />

      <div className="mt-14 border-t border-border pt-10">
        <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          Related
        </p>
        <div className="space-y-3">
          <Link
            to="/journal/how-many-hours-are-in-a-lifetime"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How many hours are in a lifetime? →
          </Link>
          <Link
            to="/journal/how-much-of-your-life-do-you-spend-sleeping"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much of your life do you spend sleeping? →
          </Link>
        </div>
      </div>

      <div className="mt-10 border-t border-border pt-8">
        <p className="font-serif text-[17px] italic text-foreground/75">
          Put your own numbers into the{" "}
          <a
            href="/#calculator"
            className="underline underline-offset-2 hover:text-foreground transition"
          >
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
