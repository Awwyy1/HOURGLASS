import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { PageSEO } from "../../components/PageSEO";
import { ArticleSchema } from "../../components/ArticleSchema";
import { FAQSection } from "../../components/FAQSection";

export const Route = createFileRoute(
  "/journal/how-much-time-do-you-spend-watching-sports",
)({
  component: Article,
});

function Article() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-24">
      <PageSEO
        title="How much time do you spend watching sports?"
        description="Nielsen found Americans spend an average of around 3.5 hours a week watching live sports. For dedicated fans the number is much higher. Over 50 years, even the average adds up to well over a year of waking time."
      />
      <ArticleSchema
        title="How much time do you spend watching sports?"
        description="Nielsen found Americans spend an average of around 3.5 hours a week watching live sports. For dedicated fans the number is much higher. Over 50 years, even the average adds up to well over a year of waking time."
        datePublished="2026-06-25"
        slug="how-much-time-do-you-spend-watching-sports"
      />
      <Breadcrumbs
        crumbs={[
          { label: "Hourglass", to: "/" },
          { label: "Journal", to: "/journal" },
          { label: "How much time do you spend watching sports?" },
        ]}
      />

      <header className="mb-16">
        <div className="mb-6 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          <time dateTime="2026-06-25">June 25, 2026</time>
          <span>·</span>
          <span>3 min read</span>
        </div>
        <h1 className="font-serif text-4xl italic tracking-tight text-foreground md:text-5xl leading-tight">
          How much time do you spend watching sports?
        </h1>
        <p className="mt-6 font-serif text-[17px] leading-relaxed text-muted-foreground">
          Sports viewing is one of the few leisure categories where the social dimension
          is built directly into the activity. That makes it harder to audit honestly,
          because the hours spent watching are also hours spent in company.
        </p>
      </header>

      <div className="text-[17px] leading-[1.85] text-foreground/85 space-y-6">
        <p>
          Nielsen's sports viewing data has consistently found that American adults watch
          an average of around three to four hours of live sports per week. A 2023 Nielsen
          report put the figure at 3.5 hours per week for the average adult, with men
          averaging closer to five hours and women closer to two. Those averages include
          people who watch no sports at all, which pulls the number down considerably.
          Among self-identified sports fans, the weekly total is substantially higher:
          surveys conducted by Statista and Morning Consult regularly find dedicated fans
          reporting eight to ten hours per week during their primary sport's season.
        </p>

        <p>
          At 3.5 hours per week across 50 years of adult sports-watching life, the total
          is around 9,100 hours, or roughly 569 waking days. A year and a half of
          conscious time spent watching other people compete. For someone who follows
          multiple sports across their full calendars — American football from September
          through February, basketball from October through June, baseball from April
          through October — the seasons overlap enough that peak viewing periods run eight
          to ten months of the year. At eight hours per week for eight months and four
          hours per week for four months, the annual total is around 370 hours. Over 50
          years that is 18,500 hours, or about 3.2 waking years.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          What sports viewing actually contains beyond the game itself.
        </h2>

        <p>
          A three-hour NFL game contains around 11 minutes of actual ball-in-play time,
          according to a Wall Street Journal analysis that has been widely cited and
          subsequently updated. The remainder goes to replays, advertisements, huddles,
          timeouts, and the general administration of a live broadcast. An NBA game has
          more continuous action but is padded significantly in its final minutes, where
          intentional fouls and timeout strategies routinely stretch the last two minutes
          of regulation into 20 minutes of clock time. A Premier League match is the
          exception — 90 minutes of relatively continuous play — but still sits inside
          a broadcast that typically runs two hours with pre-match and post-match coverage.
        </p>

        <p>
          This is not an argument against watching sports. It is relevant to the time
          calculation because the three and a half hours of an NFL broadcast contain
          a different mix of attention than three and a half hours of film or reading.
          Fans who follow teams closely are also absorbing journalism, social media
          discussion, fantasy sports management, and the ambient conversation of a shared
          cultural event. The broadcast is often only one component of a significantly
          larger investment of attention.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          The social dimension that other screen categories lack.
        </h2>

        <p>
          Sports viewing is the only major passive screen category where a large share
          of the time is spent in the physical company of other people. Nielsen data has
          consistently shown that live sports have a higher co-viewing rate than any other
          television genre. Watching a game at a bar, at a friend's house, or in a stadium
          produces a categorically different experience from watching alone, and the social
          value of that shared attention is real in a way that is difficult to assign a
          number to. That does not change the hours, but it changes what kind of hours
          they are.
        </p>

        <p className="text-muted-foreground">
          A year and a half is the number for an average adult. Three years is a reasonable
          estimate for a dedicated multi-sport fan. Neither figure is obviously too much or
          too little — that depends entirely on what sport is giving back and what it is
          displacing. The number is worth knowing either way.
        </p>
      </div>

      <FAQSection
        faqs={[
          {
            q: "How many hours per week does the average American spend watching sports?",
            a: "Around 3.5 hours per week for the average adult, according to Nielsen. That figure includes non-fans and pulls the average down considerably. Among self-identified sports fans, surveys consistently return numbers between eight and ten hours per week during active seasons. Men average closer to five hours per week overall, women closer to two. The figure also varies substantially by sport: NFL viewership is concentrated on Sundays and Monday nights, while baseball and basketball fans spread their viewing across more days due to longer regular seasons."
          },
          {
            q: "How much of a sports broadcast is actually the game?",
            a: "Less than most people realise. A Wall Street Journal analysis found that an average NFL broadcast contains around 11 minutes of ball-in-play time within a three-hour window. NBA games have more continuous action but are heavily padded in closing minutes by intentional fouls and strategic timeouts. A Premier League match comes closest to continuous play at 90 minutes, but typically sits inside a two-hour broadcast. For most major American sports, the ratio of active play to total broadcast time is somewhere between 15 and 35 percent."
          },
        ]}
      />

      <div className="mt-14 border-t border-border pt-10">
        <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          Related
        </p>
        <div className="space-y-3">
          <Link
            to="/journal/how-much-time-does-the-average-person-spend-watching-netflix"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much time does the average person spend watching Netflix? →
          </Link>
          <Link
            to="/journal/how-much-time-do-you-spend-on-your-phone"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much time do you spend on your phone per day? →
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
