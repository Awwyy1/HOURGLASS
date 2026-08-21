import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { PageSEO } from "../../components/PageSEO";
import { ArticleSchema } from "../../components/ArticleSchema";
import { FAQSection } from "../../components/FAQSection";

export const Route = createFileRoute(
  "/journal/how-much-of-your-life-do-you-spend-on-facebook",
)({
  component: Article,
});

function Article() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-24">
      <PageSEO
        title="How much of your life do you spend on Facebook?"
        description="Facebook has 3 billion monthly active users and the average session runs around 33 minutes a day. Over 15 years of use, the total approaches six months of waking time."
        ogType="article"
      />
      <ArticleSchema
        title="How much of your life do you spend on Facebook?"
        description="Facebook has 3 billion monthly active users and the average session runs around 33 minutes a day. Over 15 years of use, the total approaches six months of waking time."
        datePublished="2026-06-20"
        slug="how-much-of-your-life-do-you-spend-on-facebook"
      />
      <Breadcrumbs
        crumbs={[
          { label: "Hourglass", to: "/" },
          { label: "Journal", to: "/journal" },
          { label: "How much of your life do you spend on Facebook?" },
        ]}
      />

      <header className="mb-16">
        <div className="mb-6 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          <time dateTime="2026-06-20">June 20, 2026</time>
          <span>·</span>
          <span>3 min read</span>
        </div>
        <h1 className="font-serif text-4xl italic tracking-tight text-foreground md:text-5xl leading-tight">
          How much of your life do you spend on Facebook?
        </h1>
        <p className="mt-6 font-serif text-[17px] leading-relaxed text-muted-foreground">
          Facebook is the platform that the largest number of people have quietly
          stopped talking about while continuing to use. The hours are still accumulating.
        </p>
      </header>

      <div className="text-[17px] leading-[1.85] text-foreground/85 space-y-6">
        <p>
          Meta reported 3.07 billion monthly active users for Facebook in 2023, making
          it the largest social platform by that measure. Daily active users sat at
          around 2.1 billion. The average time per session, according to Meta's own
          reporting and independent app analytics, is approximately 33 minutes per day.
          That figure has declined somewhat from the platform's peak engagement years
          around 2015 to 2018, but has stabilised rather than collapsed. Facebook
          still commands a third of an hour from the majority of people who open it.
        </p>

        <p>
          At 33 minutes per day across a year, the total is around 201 hours. Over
          fifteen years of regular use — which describes a large portion of people who
          joined the platform in its growth years and have remained on it — the total
          reaches approximately 3,015 hours, or just under 189 waking days. Six months
          of conscious time, spread across a decade and a half in portions small enough
          that they never registered as a meaningful investment of anything.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          How Facebook's purpose has changed and what that means for the time spent.
        </h2>

        <p>
          Facebook launched as a directory and communication tool. Its original value
          proposition was straightforward: stay in touch with people you already know.
          Over the following decade it became something closer to a media company. The
          News Feed, introduced in 2006, replaced a static profile-browsing experience
          with an algorithmically curated stream of content. Pages, Groups, Marketplace,
          video, Reels, and Stories were layered in over time, each designed to extend
          session length and increase the frequency of return visits.
        </p>

        <p>
          The result is that the original reason most people joined Facebook — to
          maintain contact with friends and family — now accounts for a relatively
          small fraction of what happens during a typical session. Research on Facebook
          usage patterns consistently finds that passive consumption of feed content
          dominates active communication. Most of the 33 minutes is not spent
          messaging people you care about. It is spent scrolling past content that
          the algorithm selected because it was likely to keep you there.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          The demographic shift and what it tells us about where the time comes from.
        </h2>

        <p>
          Facebook's user base has aged significantly. Pew Research data shows steep
          declines in usage among Americans under 30, with the platform now most
          heavily used by people aged 30 to 49 and holding relatively well among
          those over 50. This matters for the time calculation because older users
          tend to have more accumulated hours on the platform — they joined earlier
          and stayed longer — and because the alternatives they are not choosing
          instead of Facebook are different from the alternatives facing a 22-year-old.
          The opportunity cost of an hour on Facebook at 45 is different from the
          opportunity cost of that same hour at 22, though the hour itself is the same.
        </p>

        <p className="text-muted-foreground">
          Six months is what the numbers say for a fifteen-year user at average engagement.
          Most people who have been on Facebook since 2010 would not have predicted, at
          the time they joined, that they would hand six months of their waking life to it.
          Most of them still would not describe themselves as particularly heavy users.
          The gap between how it feels and what the hours add up to is the thing worth noticing.
        </p>
      </div>

      <FAQSection
        faqs={[
          {
            q: "How much time does the average person spend on Facebook per day?",
            a: "Around 33 minutes per day for active users, based on Meta's own data and independent analytics. That figure has declined from the platform's peak around 2016 to 2018 but has stabilised. Heavy users and those who participate actively in Groups can run considerably higher. The 33-minute average covers a wide range of behaviours, from someone who checks birthday notifications once a day to someone who spends extended time in community groups or Marketplace."
          },
          {
            q: "Is Facebook losing users?",
            a: "It depends on the age group. Among users under 30 in the US and Western Europe, Facebook has lost significant ground to Instagram, TikTok, and Snapchat. Among users over 30, and across much of the developing world, it has remained remarkably stable. Globally, the total monthly active user count has continued to grow, reaching over 3 billion. The platform is not dying — it is getting older, and concentrating more heavily in demographics and regions where alternatives are less established."
          },
        ]}
      />

      <div className="mt-14 border-t border-border pt-10">
        <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          Related
        </p>
        <div className="space-y-3">
          <Link
            to="/journal/how-much-time-do-you-spend-on-twitter-x"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much time do you spend on Twitter / X? →
          </Link>
          <Link
            to="/journal/how-much-time-does-the-average-person-spend-on-social-media"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much time does the average person spend on social media? →
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
