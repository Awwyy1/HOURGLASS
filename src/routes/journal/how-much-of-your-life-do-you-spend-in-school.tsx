import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { PageSEO } from "../../components/PageSEO";
import { ArticleSchema } from "../../components/ArticleSchema";
import { FAQSection } from "../../components/FAQSection";

export const Route = createFileRoute(
  "/journal/how-much-of-your-life-do-you-spend-in-school",
)({
  component: Article,
});

function Article() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-24">
      <PageSEO
        title="How much of your life do you spend in school?"
        description="Thirteen years of American schooling comes to roughly 15,000 hours in the building, or about two and a half waking years. It is the only large block of a life that someone else chose in full."
      />
      <ArticleSchema
        title="How much of your life do you spend in school?"
        description="Thirteen years of American schooling comes to roughly 15,000 hours in the building, or about two and a half waking years. It is the only large block of a life that someone else chose in full."
        datePublished="2026-08-05"
        slug="how-much-of-your-life-do-you-spend-in-school"
      />
      <Breadcrumbs
        crumbs={[
          { label: "Hourglass", to: "/" },
          { label: "Journal", to: "/journal" },
          { label: "How much of your life do you spend in school?" },
        ]}
      />

      <header className="mb-16">
        <div className="mb-6 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          <time dateTime="2026-08-05">August 5, 2026</time>
          <span>·</span>
          <span>3 min read</span>
        </div>
        <h1 className="font-serif text-4xl italic tracking-tight text-foreground md:text-5xl leading-tight">
          How much of your life do you spend in school?
        </h1>
        <p className="mt-6 font-serif text-[17px] leading-relaxed text-muted-foreground">
          Every other total in this journal describes time an adult allocated,
          well or badly. This one describes the years that were allocated for
          you, before anyone asked, and it is smaller than most people expect.
        </p>
      </header>

      <div className="text-[17px] leading-[1.85] text-foreground/85 space-y-6">
        <p>
          The National Center for Education Statistics puts the typical American
          school year at around 180 days, with roughly six and a half hours in
          the building on each of them. That comes to about 1,170 hours a year.
          Run it across the thirteen years from kindergarten through the end of
          high school and the total is close to 15,200 hours. In waking terms,
          where a year holds 5,840 conscious hours, that is around 950 waking
          days, or just over two and a half waking years spent inside a school.
        </p>

        <p>
          Homework sits on top of that. Surveys of American high school students
          consistently find between six and seven hours of assigned work per
          week, which adds roughly 250 hours a year during the later grades and
          somewhat less earlier on. Counting it, the schooling total lands
          somewhere near 18,000 hours, or a little over three waking years. For
          anyone who then completes a four-year degree, the classroom and study
          hours add several thousand more, though the range there is wide enough
          that a single average would be misleading.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          How small the number is next to what it decides.
        </h2>

        <p>
          Two and a half waking years is a modest figure by the standards of this
          series. It is less than the lifetime total for{" "}
          <Link
            to="/journal/how-much-time-does-the-average-person-spend-on-social-media"
            className="underline underline-offset-2 hover:text-muted-foreground transition"
          >
            social media
          </Link>{" "}
          at current averages, less than the time spent{" "}
          <Link
            to="/journal/how-much-time-do-you-spend-on-household-chores"
            className="underline underline-offset-2 hover:text-muted-foreground transition"
          >
            on household chores
          </Link>
          , and roughly a seventh of what a full career consumes. Yet those
          fifteen thousand hours largely determine which careers are available,
          what the earning curve looks like, and how the eighty thousand working
          hours that follow will be spent. The ratio between how little time it
          takes and how much it settles is the genuinely striking part of the
          calculation.
        </p>

        <p>
          The figure also varies enormously by country in a way that complicates
          any simple reading of it. Finnish students start formal school at seven
          and spend among the fewest hours in class of any developed nation,
          while consistently placing near the top of international assessments.
          South Korean students, at the other extreme, commonly add several hours
          of private academy instruction after the regular school day, pushing
          their effective daily total past twelve hours. Both systems produce
          strong results on paper. The hours themselves clearly do not carry the
          whole explanation, which is worth remembering whenever the number gets
          used as an argument for lengthening or shortening a school day.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          The part of the total that was never instruction.
        </h2>

        <p>
          A further complication is that time in the building and time learning
          are not the same measurement. Studies of how classroom hours are
          actually used routinely find that a substantial share goes to
          transitions, attendance, announcements, discipline, and administrative
          tasks rather than instruction. Estimates vary by method and by school,
          but the direction is consistent enough that the honest version of the
          15,200 hours is meaningfully smaller when counted as teaching time. The
          rest was still spent, of course. It was simply spent on the logistics
          of holding several hundred children in one place for six hours a day,
          which is a real problem that has to be solved before anything can be
          taught.
        </p>

        <p className="text-muted-foreground">
          About two and a half waking years in the building, and a little over
          three once homework is included. It is the one large number in this
          journal that nobody chose for themselves, and the one whose
          consequences run furthest past the hours it contains. Whether it was
          time well spent is a judgment most people only start making about
          twenty years after it ended.
        </p>
      </div>

      <FAQSection
        faqs={[
          {
            q: "How many hours do you spend in school in a lifetime?",
            a: "Around 15,200 hours for a full kindergarten-through-high-school education in the United States, based on roughly 180 school days a year at about six and a half hours a day across thirteen years. In waking terms that is just over two and a half years. Adding homework, which surveys put at six to seven hours a week for high school students, brings the total closer to 18,000 hours, or a little over three waking years."
          },
          {
            q: "Which country's students spend the most time in school?",
            a: "By total instructional hours, countries including South Korea, Japan, and Mexico sit near the top, though the picture changes considerably once private tutoring is counted. South Korean students commonly attend private academies after the regular school day, which can push their effective daily total past twelve hours. Finland sits at the other end, starting formal schooling at age seven with comparatively few classroom hours, while still performing strongly on international assessments, which suggests that total hours are a weaker predictor of outcomes than they are often assumed to be."
          },
        ]}
      />

      <div className="mt-14 border-t border-border pt-10">
        <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          Related
        </p>
        <div className="space-y-3">
          <Link
            to="/journal/how-much-of-your-life-do-you-spend-working"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much of your life do you spend working? →
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
