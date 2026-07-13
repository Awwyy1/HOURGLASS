import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { PageSEO } from "../../components/PageSEO";
import { ArticleSchema } from "../../components/ArticleSchema";
import { FAQSection } from "../../components/FAQSection";

export const Route = createFileRoute(
  "/journal/how-much-of-your-life-do-you-spend-playing-video-games",
)({
  component: Article,
});

function Article() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-24">
      <PageSEO
        title="How much of your life do you spend playing video games?"
        description="The average gamer spends 7 to 8 hours a week playing — just under 10 waking years over a lifetime. For the top 10 percent of players, the total exceeds 30 years."
      />
      <ArticleSchema
        title="How much of your life do you spend playing video games?"
        description="The average gamer spends 7 to 8 hours a week playing — just under 10 waking years over a lifetime. For the top 10 percent of players, the total exceeds 30 years."
        datePublished="2026-06-03"
        slug="how-much-of-your-life-do-you-spend-playing-video-games"
      />
      <Breadcrumbs
        crumbs={[
          { label: "Hourglass", to: "/" },
          { label: "Journal", to: "/journal" },
          { label: "How much of your life do you spend playing video games?" },
        ]}
      />

      <header className="mb-16">
        <div className="mb-6 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          <time dateTime="2026-06-03">June 3, 2026</time>
          <span>·</span>
          <span>3 min read</span>
        </div>
        <h1 className="font-serif text-4xl italic tracking-tight text-foreground md:text-5xl leading-tight">
          How much of your life do you spend playing video games?
        </h1>
        <p className="mt-6 font-serif text-[17px] leading-relaxed text-muted-foreground">
          Gaming sits in an unusual position among the large categories of leisure time.
          It is one of the few activities where the hours are completely invisible to
          everyone except the person spending them.
        </p>
      </header>

      <div className="text-[17px] leading-[1.85] text-foreground/85 space-y-6">
        <p>
          There are over three billion active gamers worldwide as of 2024, according to
          Newzoo. The same research puts average weekly playtime at around seven to eight
          hours globally, with the United States coming in at roughly 7.7 hours per week.
          That figure covers all platforms: console, PC, and mobile. It includes the person
          who plays for an hour on their phone during a commute and the person who logs six
          hours on a Saturday afternoon. Both go into the same average.
        </p>

        <p>
          At seven hours a week across 52 weeks, the annual total is around 364 hours.
          Over 40 years of regular gaming from adolescence through middle age, that comes
          to roughly 14,560 hours, or about 3,500 waking days. In waking years: just under
          ten. That figure will surprise most people who describe themselves as casual
          gamers. It surprises them because seven hours a week feels like nothing — an
          hour here, a session there. The math only looks large when you run it all the
          way to the end.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          What the average conceals about how gaming actually distributes.
        </h2>

        <p>
          Gaming follows an extremely uneven distribution. Nielsen data consistently shows
          that roughly 10 percent of players account for the majority of total hours played.
          This top tier, often called core or hardcore gamers, typically logs 20 to 30 hours
          per week. At 25 hours per week over 40 years, the total is 52,000 hours, or about
          34 waking years. That is more time than most people spend working across their
          entire career. It is not a rare outcome. It describes tens of millions of people.
        </p>

        <p>
          On the other side of the distribution, around 45 percent of people who identify
          as gamers play primarily on mobile, spending under three hours a week. For them
          the lifetime total at the same rate comes to somewhere between 6,000 and 7,000
          hours, or about four waking years. The range between a mobile-only casual player
          and a core PC or console gamer is enormous, which is why averages in gaming are
          even less informative than averages in most other screen-time categories.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          The question of whether the time counts as wasted.
        </h2>

        <p>
          Gaming is the category where the wasted-time debate is loudest and least resolved.
          The research does not support a simple answer. Studies on cognitive outcomes show
          measurable benefits in spatial reasoning, reaction time, and problem-solving
          associated with certain types of games, particularly action and strategy genres.
          Studies on social outcomes find that multiplayer gaming maintains friendships and
          creates new ones at a rate that other solo leisure activities do not. Studies on
          compulsion find that a subset of players develop usage patterns that interfere with
          sleep, work, and in-person relationships. All three bodies of research are describing
          the same activity. They just happen to be describing different people doing it
          differently.
        </p>

        <p>
          The more honest framing is not whether gaming wastes time in general, but whether
          a specific person's relationship with it is producing something they value. An hour
          finishing a narrative game you find genuinely absorbing is not the same kind of hour
          as an hour grinding the same level because stopping feels uncomfortable. Both show
          up as one hour in your screen time data. The number alone tells you nothing about
          which one it was.
        </p>

        <p className="text-muted-foreground">
          Ten waking years is a large number. For most regular gamers it will land somewhere
          between uncomfortable and hard to believe. The honest response is not to dismiss it
          or to feel guilty about it, but to decide whether the hours are going somewhere you
          actually want them to go — and to make that decision before you have already spent them.
        </p>
      </div>

      <FAQSection
        faqs={[
          {
            q: "How many hours does the average gamer play per week?",
            a: "Around 7 to 8 hours globally, with the US sitting at roughly 7.7 hours per week across all platforms. That average covers an extremely wide range of players — from someone spending an hour a day on mobile to someone logging a full gaming weekend. The top 10 percent of players by hours account for the majority of total playtime across the industry, so the average is not a particularly reliable description of any individual player's habits."
          },
          {
            q: "Is playing video games a waste of time?",
            a: "The research does not support a blanket answer either way. Action and strategy games show measurable cognitive benefits. Multiplayer games maintain social connections in ways that solo leisure activities generally do not. A subset of heavy users develop compulsive patterns that affect sleep and relationships. The more useful question is whether the time you specifically spend gaming is producing something you value — improved skills, genuine entertainment, social connection — or whether you are playing past the point where you are getting anything from it. That distinction does not show up in the hours total."
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
            to="/journal/how-many-hours-are-in-a-lifetime"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How many hours are in a lifetime? →
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
