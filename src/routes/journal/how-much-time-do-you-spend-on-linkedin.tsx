import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { PageSEO } from "../../components/PageSEO";
import { ArticleSchema } from "../../components/ArticleSchema";
import { FAQSection } from "../../components/FAQSection";

export const Route = createFileRoute(
  "/journal/how-much-time-do-you-spend-on-linkedin",
)({
  component: Article,
});

function Article() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-24">
      <PageSEO
        title="How much time do you spend on LinkedIn?"
        description="LinkedIn has over a billion members but most use it in short bursts — a few minutes a week when employed, hours a day when job hunting. The split between those two groups explains why the averages are so misleading."
        ogType="article"
      />
      <ArticleSchema
        title="How much time do you spend on LinkedIn?"
        description="LinkedIn has over a billion members but most use it in short bursts — a few minutes a week when employed, hours a day when job hunting. The split between those two groups explains why the averages are so misleading."
        datePublished="2026-05-27"
        slug="how-much-time-do-you-spend-on-linkedin"
      />
      <Breadcrumbs
        crumbs={[
          { label: "Hourglass", to: "/" },
          { label: "Journal", to: "/journal" },
          { label: "How much time do you spend on LinkedIn?" },
        ]}
      />

      <header className="mb-16">
        <div className="mb-6 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          <time dateTime="2026-05-27">May 27, 2026</time>
          <span>·</span>
          <span>3 min read</span>
        </div>
        <h1 className="font-serif text-4xl italic tracking-tight text-foreground md:text-5xl leading-tight">
          How much time do you spend on LinkedIn?
        </h1>
        <p className="mt-6 font-serif text-[17px] leading-relaxed text-muted-foreground">
          LinkedIn is the only major platform where the average usage figure is almost
          meaningless, because the user base is split between two completely different
          kinds of people doing two completely different things.
        </p>
      </header>

      <div className="text-[17px] leading-[1.85] text-foreground/85 space-y-6">
        <p>
          LinkedIn crossed one billion members in 2023. Microsoft, which acquired the platform
          in 2016, reported 134 million daily active users in 2022. The official figure for
          average session length is around seven to ten minutes, with most casual users opening
          the app a few times per week. Do the math and you get somewhere between 20 and 30
          minutes per week for the average professional who is employed and not actively looking
          for a new job. Over a 40-year career, at that rate, the total is around 900 hours
          — a little over 37 waking days.
        </p>

        <p>
          That figure, though, describes only one type of LinkedIn user. Job seekers are a
          different category entirely. Surveys of active job hunters consistently find them
          spending between 30 and 90 minutes per day on the platform — researching companies,
          messaging recruiters, checking who viewed their profile, reading posts in their
          target industry. At 60 minutes per day for a six-month job search, the total is
          around 180 hours. That is a second job's worth of hours, compressed into evenings
          and weekends, for work that produces no income until and unless it results in an offer.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          What has changed about how LinkedIn actually works.
        </h2>

        <p>
          The platform has changed significantly since its early years. It was originally
          a relatively static directory — you built a profile and waited for recruiters to
          find you. Over the past decade it has become more feed-like, with an algorithm
          that promotes content and generates reasons to scroll. Posts about career lessons,
          personal struggles, and professional victories now sit alongside job listings and
          company updates. The feed is designed to increase time spent on the platform, which
          means that even casual users who intended to check messages for five minutes can
          find themselves ten minutes into reading someone else's career story.
        </p>

        <p>
          Recruiters and salespeople using LinkedIn as a primary work tool represent a third
          usage pattern. For them it functions less like a social media platform and more like
          a work application — open for hours per day, used to search, message, and track
          pipeline. LinkedIn Premium subscriptions, which give access to additional outreach
          and analytics tools, had over 60 million subscribers as of 2022. For that group,
          daily usage is not measured in minutes.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          The platform where anxiety about time varies by situation.
        </h2>

        <p>
          What makes LinkedIn different from other platforms in the context of time is that
          the same action — spending an hour on it — carries very different weight depending
          on why you are there. An hour of job searching on LinkedIn is an hour doing something
          with a concrete objective. An hour of browsing the feed because a notification drew
          you in is something else. Both show up identically in your screen time data.
        </p>

        <p className="text-muted-foreground">
          The honest version of the LinkedIn time calculation is not a single number.
          It is two numbers: how much time you spend on it when you have a reason to,
          and how much you spend on it when you do not. The second number is the one
          worth knowing.
        </p>
      </div>

      <FAQSection
        faqs={[
          {
            q: "How many minutes per day does the average person spend on LinkedIn?",
            a: "Around 20 to 30 minutes per week for a passive professional user — someone employed and not actively job searching. That works out to under five minutes per day. Active job seekers are a completely different story: surveys consistently find them spending 30 to 90 minutes per day on the platform while searching, which is closer to an hour of work on top of their actual job."
          },
          {
            q: "Is LinkedIn worth the time you put into it?",
            a: "That depends on what you are doing there. Maintaining a profile and checking messages occasionally costs almost nothing and keeps you discoverable to recruiters. Using it actively for a job search is time-intensive but has a clear potential return. Using it the way you use Instagram — scrolling the feed without a specific goal — is probably the least efficient use of the time. The platform has become more optimised for feed engagement over the past few years, which means it is easier to spend time there without getting anything from it."
          },
        ]}
      />

      <div className="mt-14 border-t border-border pt-10">
        <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          Related
        </p>
        <div className="space-y-3">
          <Link
            to="/journal/how-much-of-your-life-do-you-spend-in-meetings"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much of your life do you spend in meetings? →
          </Link>
          <Link
            to="/journal/how-much-time-do-you-spend-on-dating-apps"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much time do you spend on dating apps? →
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
