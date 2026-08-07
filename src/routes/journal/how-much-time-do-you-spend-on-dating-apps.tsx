import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { PageSEO } from "../../components/PageSEO";
import { ArticleSchema } from "../../components/ArticleSchema";
import { FAQSection } from "../../components/FAQSection";

export const Route = createFileRoute(
  "/journal/how-much-time-do-you-spend-on-dating-apps",
)({
  component: Article,
});

function Article() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-24">
      <PageSEO
        title="How much time do you spend on dating apps?"
        description="The average active user spends 30 to 90 minutes a day on dating apps. Over two to three years of use, the total reaches hundreds of hours spent swiping and messaging."
      />
      <ArticleSchema
        title="How much time do you spend on dating apps?"
        description="The average active user spends 30 to 90 minutes a day on dating apps. Over two to three years of use, the total reaches hundreds of hours spent swiping and messaging."
        datePublished="2026-05-20"
        slug="how-much-time-do-you-spend-on-dating-apps"
      />
      <Breadcrumbs
        crumbs={[
          { label: "Hourglass", to: "/" },
          { label: "Journal", to: "/journal" },
          { label: "How much time do you spend on dating apps?" },
        ]}
      />

      <header className="mb-16">
        <div className="mb-6 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          <time dateTime="2026-05-20">May 20, 2026</time>
          <span>·</span>
          <span>3 min read</span>
        </div>
        <h1 className="font-serif text-4xl italic tracking-tight text-foreground md:text-5xl leading-tight">
          How much time do you spend on dating apps?
        </h1>
        <p className="mt-6 font-serif text-[17px] leading-relaxed text-muted-foreground">
          The apps were designed as a shortcut to meeting people. For most users
          they become something closer to a part-time job with unclear hours and
          uncertain pay.
        </p>
      </header>

      <div className="text-[17px] leading-[1.85] text-foreground/85 space-y-6">
        <p>
          Tinder reported 75 million monthly active users in 2023. Match Group, which owns
          Tinder, Hinge, OkCupid, and several smaller platforms, does not publish average
          session lengths. Independent app-usage research has consistently put daily dating-app
          time at between 30 and 90 minutes per active user. Hinge's own data puts the figure
          at around 30 minutes per day. For Tinder, surveys have returned numbers closer to
          an hour. Neither figure accounts for the time spent thinking about the app between
          sessions, composing messages in your head, or doing the low-grade processing that
          follows an interesting match or a conversation that went nowhere.
        </p>

        <p>
          At 45 minutes per day across two to three years of active use, the cumulative total
          lands somewhere between 550 and 820 hours. In waking days, that is between 23 and
          34 full days given to swiping, messaging, and exchanges that mostly do not leave the
          app. Three years is a reasonable figure: Pew Research found that 30 percent of US
          adults have used a dating app, but only 12 percent say they found a committed
          relationship through one. The median user stays active considerably longer than
          they expected when they started.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          What actually happens inside that time.
        </h2>

        <p>
          A 2018 study published in Computers in Human Behavior found that only 56 percent of
          app matches ever exchange a single message. Of the conversations that do start, most
          last fewer than five exchanges. Hinge published data showing roughly one in five
          conversations leads to a phone number swap. The numbers narrow further from there.
          A large share of dating-app time is therefore spent on interactions that will not
          progress beyond the screen you are looking at. This is not an accident. The apps
          are designed around intermittent reward, the same mechanism that makes slot machines
          and social media feeds hard to put down: unpredictable results, delivered at irregular
          intervals, keep sessions running past the point where they would otherwise stop.
        </p>

        <p>
          The average Tinder user swipes right on about one in ten profiles, generating a match
          every few sessions. The anticipation of the notification, the brief back-and-forth,
          the quiet question of whether this one will be different from the last hundred — the
          loop keeps you in the app without actually moving you toward anything. You are not
          actively dating for most of that 45 minutes. You are engaging with a system that
          benefits from keeping you engaged, regardless of whether you are making progress.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          The math nobody does before downloading.
        </h2>

        <p>
          Most people approach dating apps with the implicit assumption that they will use them
          for a few months and then stop because something worked out. For many that is not
          what happens. Multiple apps running simultaneously — which is common, since each
          platform draws from a different user pool — doubles or triples the daily time.
          Someone running Tinder, Hinge, and Bumble at 30 minutes each is already at 90
          minutes a day before accounting for the carry-over attention that bleeds into
          the rest of the day.
        </p>

        <p className="text-muted-foreground">
          820 hours over three years is 34 waking days. For an activity most people describe
          as something they do casually in spare moments, the total is larger than most would
          guess before they run it. Whether the time produces something worth that investment
          is a question each person answers differently. But knowing the number before you
          start, rather than after, is the more useful version of the calculation.
        </p>
      </div>

      <FAQSection
        faqs={[
          { q: "Which dating app takes the most time per day?", a: "Tinder generally shows the highest session times in independent analytics, often around an hour per day for active users. Hinge markets a lower figure — around 30 minutes — which reflects its different design. Bumble sits in the middle. Running multiple apps at once, which many users do because each platform pulls from a different user pool, compounds the daily total significantly." },
          { q: "How long does the average person use dating apps before finding a relationship?", a: "The data on this is thin because apps do not track what happens after you delete them. Survey data suggests the median active period is somewhere between six months and two years, with wide variance. Most people cycle — active for a few months, worn out and pausing, restarting later. The total time of engagement often ends up longer than any single active period would suggest." }
        ]}
      />

      <div className="mt-14 border-t border-border pt-10">
        <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          Related
        </p>
        <div className="space-y-3">
          <Link
            to="/journal/how-much-time-do-you-spend-with-your-friends"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much time do you spend with your friends? →
          </Link>
          <Link
            to="/journal/how-much-of-your-life-do-you-spend-on-instagram"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much of your life do you spend on Instagram? →
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
