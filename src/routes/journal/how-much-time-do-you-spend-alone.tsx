import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { PageSEO } from "../../components/PageSEO";
import { ArticleSchema } from "../../components/ArticleSchema";
import { FAQSection } from "../../components/FAQSection";

export const Route = createFileRoute(
  "/journal/how-much-time-do-you-spend-alone",
)({
  component: Article,
});

function Article() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-24">
      <PageSEO
        title="How much time do you spend alone?"
        description="Americans spend around five and a half waking hours a day alone, and the figure has been climbing for two decades. Over an adult life that comes to roughly twenty waking years, though the data cannot tell you which of them were lonely."
      />
      <ArticleSchema
        title="How much time do you spend alone?"
        description="Americans spend around five and a half waking hours a day alone, and the figure has been climbing for two decades. Over an adult life that comes to roughly twenty waking years, though the data cannot tell you which of them were lonely."
        datePublished="2026-08-17"
        slug="how-much-time-do-you-spend-alone"
      />
      <Breadcrumbs
        crumbs={[
          { label: "Hourglass", to: "/" },
          { label: "Journal", to: "/journal" },
          { label: "How much time do you spend alone?" },
        ]}
      />

      <header className="mb-16">
        <div className="mb-6 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          <time dateTime="2026-08-17">August 17, 2026</time>
          <span>·</span>
          <span>3 min read</span>
        </div>
        <h1 className="font-serif text-4xl italic tracking-tight text-foreground md:text-5xl leading-tight">
          How much time do you spend alone?
        </h1>
        <p className="mt-6 font-serif text-[17px] leading-relaxed text-muted-foreground">
          This is the largest number in the journal that nobody thinks of as an
          activity, and the only one where the figure itself refuses to tell you
          whether it is good news.
        </p>
      </header>

      <div className="text-[17px] leading-[1.85] text-foreground/85 space-y-6">
        <p>
          The American Time Use Survey records who a person is with during every
          reported activity, which makes solitude measurable in a way it rarely
          is. The figure that emerges for the average American adult is somewhere
          around five and a half waking hours a day spent alone, and analyses
          tracking it across the two decades the survey has run find it moving
          steadily upward rather than holding flat. The rise predates the
          pandemic, though the pandemic accelerated it.
        </p>

        <p>
          At five and a half hours a day across sixty adult years, the total
          comes to roughly 120,000 hours. In waking terms that is about twenty
          waking years, which places solitude ahead of work as the largest single
          category of conscious adult experience. The number climbs with age. Time
          alone is lowest in early adulthood, rises through middle age as the
          household empties and colleagues fall away, and reaches its highest
          point after sixty-five, when adults in many surveys report spending the
          majority of their waking hours by themselves.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          The distinction the measurement cannot make.
        </h2>

        <p>
          Twenty waking years alone reads as an alarming figure, and it is worth
          being careful about why that reading may be wrong. Time-use surveys
          record physical presence. They do not record how the hours felt, and
          the research on solitude consistently finds that being alone and being
          lonely are separate things that happen to share a number. Chosen
          solitude, the kind people use for reading, walking, thinking, or
          recovering from company, shows up in the data identically to the
          isolation someone would end tomorrow if they knew how.
        </p>

        <p>
          The distinction matters because the interventions run in opposite
          directions. A person whose twenty years are largely chosen does not
          need more company; filling those hours would take something from them.
          A person whose twenty years accumulated by default, through a move, a
          job change, a divorce, or the slow attrition described in the article
          on{" "}
          <Link
            to="/journal/how-much-time-do-you-spend-with-your-friends"
            className="underline underline-offset-2 hover:text-muted-foreground transition"
          >
            adult friendship
          </Link>
          , has a genuine problem that the same figure describes equally well.
          The number alone cannot tell you which person you are, which is why it
          is one of the few in this journal that requires an honest answer from
          the reader before it means anything.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          Where the additional hours came from.
        </h2>

        <p>
          Several structural changes point the same way. Single-person households
          have grown from a small minority of American homes in the middle of the
          last century to somewhere near a third today. Household sizes have
          fallen. Remote and hybrid work removed the incidental company of an
          office from millions of days. Entertainment, which was once collective
          by necessity because there was one screen in the house, became
          individual, and a great deal of what fills the alone hours now is the
          screen time measured elsewhere in this journal.
        </p>

        <p>
          The United States Surgeon General issued a public advisory on loneliness
          and social isolation in 2023 that treated the trend as a health matter
          rather than a lifestyle one. The advisory is careful in the same way
          this article is trying to be: it describes a structural change in how
          adult time is organised, not a collective failure of effort. The hours
          did not go missing because people stopped valuing company.
        </p>

        <p className="text-muted-foreground">
          Around twenty waking years, rising with age, and larger than the total
          for work. Whether that is the best number in this journal or the worst
          one is genuinely not something the data can settle. It depends entirely
          on how many of those hours you would keep if someone offered to take
          them back.
        </p>
      </div>

      <FAQSection
        faqs={[
          {
            q: "How many hours a day does the average person spend alone?",
            a: "Around five and a half waking hours for the average American adult, based on American Time Use Survey data, which records who a person is with during each activity. The figure varies sharply by age: it is lowest in early adulthood, rises through middle age, and is highest after sixty-five, when many adults report spending the majority of their waking hours by themselves. It has also been trending upward across the two decades the survey has run."
          },
          {
            q: "Is spending a lot of time alone bad for you?",
            a: "The research distinguishes between solitude and loneliness, and they are not the same thing despite producing the same number in time-use data. Chosen solitude used for rest, reading, or thinking is generally associated with neutral or positive outcomes. Involuntary isolation is associated with measurable health risks, which is why the US Surgeon General issued a public advisory on loneliness in 2023. Since surveys record presence rather than feeling, the hours alone cannot tell you which situation you are in. That distinction has to come from the person living them."
          },
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
            to="/journal/how-much-time-do-you-have-left-with-your-parents"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much time do you have left with your parents? →
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
