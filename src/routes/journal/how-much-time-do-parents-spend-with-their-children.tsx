import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { PageSEO } from "../../components/PageSEO";
import { ArticleSchema } from "../../components/ArticleSchema";
import { FAQSection } from "../../components/FAQSection";

export const Route = createFileRoute(
  "/journal/how-much-time-do-parents-spend-with-their-children",
)({
  component: Article,
});

function Article() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-24">
      <PageSEO
        title="How much time do parents spend with their children?"
        description="Parents today spend more hours with their children than parents did in the 1960s, despite working far more. There are 940 Saturdays between a child's birth and their eighteenth birthday, and most of the total is spent before either side notices."
      />
      <ArticleSchema
        title="How much time do parents spend with their children?"
        description="Parents today spend more hours with their children than parents did in the 1960s, despite working far more. There are 940 Saturdays between a child's birth and their eighteenth birthday, and most of the total is spent before either side notices."
        datePublished="2026-08-11"
        slug="how-much-time-do-parents-spend-with-their-children"
      />
      <Breadcrumbs
        crumbs={[
          { label: "Hourglass", to: "/" },
          { label: "Journal", to: "/journal" },
          { label: "How much time do parents spend with their children?" },
        ]}
      />

      <header className="mb-16">
        <div className="mb-6 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          <time dateTime="2026-08-11">August 11, 2026</time>
          <span>·</span>
          <span>3 min read</span>
        </div>
        <h1 className="font-serif text-4xl italic tracking-tight text-foreground md:text-5xl leading-tight">
          How much time do parents spend with their children?
        </h1>
        <p className="mt-6 font-serif text-[17px] leading-relaxed text-muted-foreground">
          Nearly every entry in this journal describes a number moving in the
          direction you would expect. This one moves the other way, and the
          reason it does is more interesting than the figure itself.
        </p>
      </header>

      <div className="text-[17px] leading-[1.85] text-foreground/85 space-y-6">
        <p>
          The finding that surprises people most comes from time-use research led
          by the sociologist Suzanne Bianchi, who compared American diaries from
          the mid 1960s with modern data. Mothers in 1965 spent around ten hours
          a week on direct childcare. Mothers today spend closer to fourteen.
          Fathers went from roughly two and a half hours a week to about eight.
          Both figures rose during exactly the decades when maternal employment
          climbed steeply, which is the opposite of what almost everyone assumes
          when they picture the past.
        </p>

        <p>
          The hours did not come out of paid work, since that went up. They came
          out of housework, which fell sharply as appliances and lower standards
          absorbed it, and out of the parents' own leisure and sleep. Set against
          the childhood window, current American Time Use Survey figures put
          parents of children under eighteen at somewhere between one and a half
          and two hours a day of childcare as a primary activity, with far more
          hours of shared presence on top of that. Across the eighteen years to
          adulthood, the direct-care total alone runs past ten thousand hours.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          The unit that makes the window legible.
        </h2>

        <p>
          Eighteen years sounds like a long stretch of a life, and in hours it
          genuinely is. The problem with the yearly framing is that it hides how
          the time is distributed, which is where the useful version of this
          calculation lives. Between a child's birth and their eighteenth
          birthday there are about 940 Saturdays. A parent of a five-year-old has
          already spent around 260 of them and has roughly 680 left. A parent of
          a twelve-year-old has about 310 remaining, and a meaningful share of
          those will be given to friends, sport, and the ordinary business of a
          teenager having their own life.
        </p>

        <p>
          The distribution matters because the hours are heavily front-loaded and
          then thin out well before the eighteenth birthday arrives. Time-use
          data shows shared parent-child time peaking in early childhood and
          declining steadily from roughly age ten onward, as school, peers, and
          independence take up more of the day. The window does not close at
          eighteen. It narrows continuously from about the halfway point, which
          is the part almost nobody plans around.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          Why more hours did not produce more ease.
        </h2>

        <p>
          The genuinely strange part of this data is what happened to how parents
          feel. Pew Research surveys consistently find large shares of parents
          reporting that they do not spend enough time with their children, and
          that share has not fallen as the measured hours have risen. Both things
          are true at once: parents are doing more of it than their own parents
          did, and feeling worse about the amount.
        </p>

        <p>
          The likeliest explanation is that the standard moved faster than the
          hours. What counted as adequate parenting in 1965 was largely
          supervision, and children spent much of the day unsupervised by modern
          norms. What counts now includes homework help, structured activities,
          and a quality of engaged attention that the earlier standard did not
          ask for. Fourteen hours measured against a demanding standard can feel
          thinner than ten hours measured against a relaxed one, which means the
          shortfall most parents describe is not really a shortfall of time.
        </p>

        <p className="text-muted-foreground">
          Around 940 Saturdays in total, most of them spent before a child turns
          ten, against a lifetime figure that has risen rather than fallen. The
          number is worth knowing mainly because it corrects the story people
          tell themselves about it. The hours are already higher than they used
          to be. Whatever is producing the feeling of not enough, the arithmetic
          says it is not the arithmetic.
        </p>
      </div>

      <FAQSection
        faqs={[
          {
            q: "How many hours a day do parents spend with their children?",
            a: "American Time Use Survey data puts parents of children under eighteen at roughly one and a half to two hours a day of childcare as a primary activity, meaning time when caring for the child is the main thing being done. Total shared presence, which includes meals, car journeys, and time in the same room while doing something else, runs considerably higher. Mothers still account for more of the total than fathers, though the gap has narrowed substantially since the 1960s."
          },
          {
            q: "Do parents spend more or less time with their children than in the past?",
            a: "More, which surprises most people. Research comparing time-use diaries from the mid 1960s with modern data found mothers' direct childcare rising from about ten hours a week to roughly fourteen, and fathers' from about two and a half hours to around eight. The increase happened during the same decades that maternal employment rose sharply. The additional hours came mainly out of housework, which fell steeply, and out of parents' own leisure and sleep rather than out of paid work."
          },
        ]}
      />

      <div className="mt-14 border-t border-border pt-10">
        <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          Related
        </p>
        <div className="space-y-3">
          <Link
            to="/journal/how-much-time-do-you-have-left-with-your-parents"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much time do you have left with your parents? →
          </Link>
          <Link
            to="/journal/how-much-of-your-life-do-you-spend-in-school"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much of your life do you spend in school? →
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
