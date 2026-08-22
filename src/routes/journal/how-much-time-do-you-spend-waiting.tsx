import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { PageSEO } from "../../components/PageSEO";
import { ArticleSchema } from "../../components/ArticleSchema";
import { FAQSection } from "../../components/FAQSection";
import { AnswerBlock } from "../../components/AnswerBlock";

export const Route = createFileRoute(
  "/journal/how-much-time-do-you-spend-waiting",
)({
  component: Article,
});

function Article() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-24">
      <PageSEO
        title="How much time do you spend waiting in a lifetime?"
        description="Americans spend an estimated 37 minutes a day waiting — in lines, on hold, at traffic lights, in waiting rooms. Over a lifetime that adds up to more than two waking years spent doing nothing by requirement."
        ogType="article"
      />
      <ArticleSchema
        title="How much time do you spend waiting in a lifetime?"
        description="Americans spend an estimated 37 minutes a day waiting — in lines, on hold, at traffic lights, in waiting rooms. Over a lifetime that adds up to more than two waking years spent doing nothing by requirement."
        datePublished="2026-06-26"
        slug="how-much-time-do-you-spend-waiting"
      />
      <Breadcrumbs
        crumbs={[
          { label: "Hourglass", to: "/" },
          { label: "Journal", to: "/journal" },
          { label: "How much time do you spend waiting in a lifetime?" },
        ]}
      />

      <header className="mb-16">
        <div className="mb-6 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          <time dateTime="2026-06-26">June 26, 2026</time>
          <span>·</span>
          <span>3 min read</span>
        </div>
        <h1 className="font-serif text-4xl italic tracking-tight text-foreground md:text-5xl leading-tight">
          How much time do you spend waiting in a lifetime?
        </h1>
        <p className="mt-6 font-serif text-[17px] leading-relaxed text-muted-foreground">
          Waiting is the one time category that nobody chose and nobody counts. It
          accumulates in fragments too small to notice and adds up to something large
          enough that most people would rather not know.
        </p>
      </header>

      <AnswerBlock>
        Americans spend an estimated 37 minutes a day in passive waiting, counting checkout lines, hold music, waiting rooms, and traffic lights. Across 60 years of adult life that comes to about 13,500 hours, or just over two waking years spent doing nothing by requirement rather than by choice.
      </AnswerBlock>

      <div className="text-[17px] leading-[1.85] text-foreground/85 space-y-6">
        <p>
          Research on daily time use has consistently found that Americans spend
          somewhere between 30 and 40 minutes per day in passive waiting — time
          physically held in place by a queue, a hold system, a traffic light, or
          an appointment that has not yet begun. A widely cited figure from time-use
          researchers is 37 minutes per day. That number includes checkout lines,
          waiting rooms, time on hold with customer service, and the dead time between
          arriving somewhere and actually being seen or served. It does not include
          the waiting embedded in commutes, which is a related but separate category.
        </p>

        <p>
          At 37 minutes per day across 60 years of adult life, the total is around
          13,505 hours, or roughly 844 waking days. Two and a third waking years spent
          in a state of enforced inactivity — not chosen leisure, not rest, not work,
          but the kind of time that belongs to you in theory and to the system in
          practice. The figure is comparable in size to the lifetime total for social
          media platforms that people actively worry about. Nobody worries about
          waiting because it arrives in pieces too small to register.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          Where the waiting actually goes.
        </h2>

        <p>
          The largest single category is healthcare. The average American visits a
          doctor or medical provider around four times per year. The Advisory Board
          found that the average patient wait time in a physician's office runs about
          18 to 24 minutes before being seen, not counting the time spent in the
          examination room waiting for the provider to arrive. Over a lifetime that
          is somewhere between 70 and 100 hours spent in waiting rooms alone, not
          counting specialist visits, urgent care, pharmacies, or the increasingly
          common 45-minute wait to speak with an insurance representative afterward.
        </p>

        <p>
          Customer service hold time is a second major category that has grown
          significantly. Americans collectively spend around 900 million hours per
          year on hold with customer service lines, according to estimates based on
          call center industry data. Per person, that works out to roughly three
          hours per year for an average adult — an hour and a half of waking days
          per year, or about 90 waking hours over a 60-year adult life, spent
          listening to hold music while waiting for a problem that should not have
          existed to be resolved by someone who did not create it.
        </p>

        <p>
          Traffic signals add another layer. A 2018 analysis of traffic light timing
          in major US cities found that the average driver spends about two weeks per
          year stopped at red lights. Over a 40-year driving life, that comes to
          roughly 80 weeks, or a year and a half of time stopped at intersections.
          That figure is for drivers only and sits on top of the general waiting total
          rather than inside it.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          What has changed about waiting in the past decade.
        </h2>

        <p>
          Smartphones have altered the experience of waiting without reducing the
          time. Before the phone was a constant companion, waiting produced a
          particular kind of unoccupied awareness: you noticed your surroundings,
          thought loosely about whatever was on your mind, or simply existed without
          a task. Now the same minutes are filled with the phone, which means the
          wait no longer feels like waiting in the way it once did. The cognitive
          experience has changed. The clock has not. Two and a third years of waiting
          is the same number regardless of whether those minutes were spent staring
          at a wall or refreshing a social feed. What has changed is that the
          discomfort of waiting has been dissolved by the phone, which also means
          that the pressure to reduce waiting — to design systems that waste less of
          people's time — has weakened in proportion.
        </p>

        <p className="text-muted-foreground">
          Two years is what the waiting adds up to. It is time that was never offered
          to you as a choice, which makes it different from the other large categories
          in this project. You can decide to use your phone less. You cannot decide
          to skip the queue. What you can do is know the number — and let it inform
          how much patience you extend to systems that could be better designed.
        </p>
      </div>

      <FAQSection
        faqs={[
          {
            q: "How much time does the average person spend waiting in their lifetime?",
            a: "Based on time-use research putting average daily waiting at around 37 minutes, the lifetime total across 60 adult years comes to approximately 13,500 hours, or just over two waking years. That figure covers waiting in checkout lines, waiting rooms, customer service hold times, and similar enforced pauses. It does not include waiting embedded in commutes or time spent waiting for deliveries at home, which would add further to the total."
          },
          {
            q: "How much time do Americans spend on hold with customer service?",
            a: "Estimates based on call center industry data put the collective US total at around 900 million hours per year. Per adult that works out to roughly three hours per year, or about 180 hours over a 60-year adult life. That figure has been relatively stable despite the expansion of self-service options and chat support, partly because the remaining calls tend to involve more complex problems that take longer to resolve, and partly because phone hold systems have proven difficult to eliminate despite decades of customer frustration with them."
          },
        ]}
      />

      <div className="mt-14 border-t border-border pt-10">
        <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          Related
        </p>
        <div className="space-y-3">
          <Link
            to="/journal/how-much-time-do-you-spend-stuck-in-traffic"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much time do you spend stuck in traffic? →
          </Link>
          <Link
            to="/journal/how-much-time-do-you-spend-grocery-shopping"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much time do you spend grocery shopping? →
          </Link>
          <Link
            to="/journal/how-much-time-do-you-spend-shopping-online"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much time do you spend shopping online? →
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
