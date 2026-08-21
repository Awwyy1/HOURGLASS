import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { PageSEO } from "../../components/PageSEO";
import { ArticleSchema } from "../../components/ArticleSchema";
import { FAQSection } from "../../components/FAQSection";

export const Route = createFileRoute(
  "/journal/how-much-of-your-life-do-you-spend-sitting",
)({
  component: Article,
});

function Article() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-24">
      <PageSEO
        title="How much of your life do you spend sitting?"
        description="The average adult sits for around nine hours of every waking day. Over an adult lifetime that comes to more than 30 waking years spent in a chair, and the health research on that posture has grown hard to ignore."
        ogType="article"
      />
      <ArticleSchema
        title="How much of your life do you spend sitting?"
        description="The average adult sits for around nine hours of every waking day. Over an adult lifetime that comes to more than 30 waking years spent in a chair, and the health research on that posture has grown hard to ignore."
        datePublished="2026-07-21"
        slug="how-much-of-your-life-do-you-spend-sitting"
      />
      <Breadcrumbs
        crumbs={[
          { label: "Hourglass", to: "/" },
          { label: "Journal", to: "/journal" },
          { label: "How much of your life do you spend sitting?" },
        ]}
      />

      <header className="mb-16">
        <div className="mb-6 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          <time dateTime="2026-07-21">July 21, 2026</time>
          <span>·</span>
          <span>3 min read</span>
        </div>
        <h1 className="font-serif text-4xl italic tracking-tight text-foreground md:text-5xl leading-tight">
          How much of your life do you spend sitting?
        </h1>
        <p className="mt-6 font-serif text-[17px] leading-relaxed text-muted-foreground">
          Sitting is not an activity in the way the other entries in this
          journal are. It is a posture that runs underneath most of them, which
          is exactly why the total is so large and so easy to miss.
        </p>
      </header>

      <div className="text-[17px] leading-[1.85] text-foreground/85 space-y-6">
        <p>
          Research measuring sedentary behaviour with accelerometers rather than
          self-report consistently finds that adults in developed countries sit
          for somewhere between eight and ten hours of a typical waking day. A
          widely cited study using data from the US National Health and Nutrition
          Examination Survey put the figure at around 8.2 hours for the average
          adult, and higher for office workers, whose jobs remove almost all of
          the incidental movement that used to fill a working day. Nine hours is
          a reasonable working figure for someone with a desk job, a car commute,
          and an evening that ends in front of a screen.
        </p>

        <p>
          At nine hours a day across 60 years of adult life, the total is roughly
          197,000 hours, which is about 33 waking years spent seated. That number
          is larger than the lifetime total for work, larger than the total for
          sleep in waking terms, and larger than any other single figure in this
          series. The reason it climbs so high is that sitting overlaps almost
          everything else. The hours you spend working, eating, commuting,
          watching television, and scrolling a phone are, for most people, the
          same hours you spend sitting. You are not choosing to sit. You are
          choosing to do things that happen to be done in a chair.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          Why the posture became its own health category.
        </h2>

        <p>
          For most of the past decade, researchers have treated prolonged sitting
          as a health exposure in its own right, separate from the question of
          whether a person exercises. The phrase that circulated widely, that
          sitting is the new smoking, overstates the case, but the underlying
          finding is real. Large studies have associated long daily sitting time
          with elevated risk of cardiovascular disease, type 2 diabetes, and
          all-cause mortality, and several of them found that the association
          held even for people who met the recommended exercise guidelines. An
          hour at the gym does not fully undo nine hours in a chair, because the
          two are doing different things to the body.
        </p>

        <p>
          The mechanism appears to be that continuous sitting suppresses activity
          in the large postural muscles, which changes how the body handles blood
          sugar and fats over the course of a day. This is why the research on
          the subject tends to emphasise breaking up sitting time rather than
          simply sitting less in total. Standing or walking for a few minutes
          every half hour appears to interrupt the process in a way that a single
          long walk at the end of a fully seated day does not. The problem is not
          the chair. It is the uninterrupted duration.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          What changed, and how recently.
        </h2>

        <p>
          The scale of modern sitting is genuinely new. For most of human history
          the default working posture involved standing, walking, or physical
          effort, and sitting was what you did when the work was done. The office
          economy inverted that within a couple of generations, and the
          smartphone finished the job by making the seated evening as engaging as
          the seated workday. Someone born in 1950 accumulated far fewer lifetime
          sitting hours than someone born in 2000 will, not because they were more
          disciplined, but because the world offered them fewer reasons and fewer
          comfortable places to stay in a chair.
        </p>

        <p className="text-muted-foreground">
          Thirty-three waking years is the number, and it is the one figure in
          this journal that is almost impossible to reduce by choice alone,
          because it is welded to work, transport, meals, and rest. What the
          research suggests is worth reducing is not the total so much as the
          length of the individual stretches. The chair is not the problem. The
          hours without standing up are.
        </p>
      </div>

      <FAQSection
        faqs={[
          {
            q: "How many hours a day does the average person spend sitting?",
            a: "Around 8 to 10 hours for adults in developed countries, based on studies that measure movement directly with accelerometers rather than relying on self-report. Office workers tend to sit toward the top of that range, often nine or more hours once a desk job, a car commute, and an evening of screen time are combined. The figure has risen sharply over the past few decades as physical labour has given way to desk work and as home entertainment has become more sedentary."
          },
          {
            q: "Does exercising cancel out the effects of sitting all day?",
            a: "Not entirely. Several large studies have found that the health risks associated with prolonged daily sitting persist even among people who meet the recommended exercise guidelines. The current understanding is that continuous sitting affects how the body processes blood sugar and fats in a way that a single workout does not fully reverse. This is why research on the topic emphasises breaking up sitting time, standing or walking for a few minutes every half hour, rather than simply exercising more at the end of a seated day."
          },
        ]}
      />

      <div className="mt-14 border-t border-border pt-10">
        <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          Related
        </p>
        <div className="space-y-3">
          <Link
            to="/journal/how-much-of-your-life-do-you-spend-exercising"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much of your life do you spend exercising? →
          </Link>
          <Link
            to="/journal/how-much-of-your-life-do-you-spend-on-your-laptop"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much of your life do you spend on your laptop? →
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
