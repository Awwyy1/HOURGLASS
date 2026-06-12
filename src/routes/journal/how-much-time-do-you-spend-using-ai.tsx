import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { PageSEO } from "../../components/PageSEO";

export const Route = createFileRoute(
  "/journal/how-much-time-do-you-spend-using-ai",
)({
  component: Article,
});

function Article() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-24">
      <PageSEO
        title="How much time do you spend using AI?"
        description="OpenAI reported 200 million weekly users in 2024, a figure that doubled in under a year. Regular users spend 30 to 90 minutes a day across AI tools — and the number keeps growing."
      />
      <Breadcrumbs
        crumbs={[
          { label: "Hourglass", to: "/" },
          { label: "Journal", to: "/journal" },
          { label: "How much time do you spend using AI?" },
        ]}
      />

      <header className="mb-16">
        <div className="mb-6 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          <time dateTime="2026-05-14">May 14, 2026</time>
          <span>·</span>
          <span>3 min read</span>
        </div>
        <h1 className="font-serif text-4xl italic tracking-tight text-foreground md:text-5xl leading-tight">
          How much time do you spend using AI?
        </h1>
        <p className="mt-6 font-serif text-[17px] leading-relaxed text-muted-foreground">
          The technology was introduced as a time-saving tool. For a growing
          number of people it has become a place where time goes, like every
          other screen before it.
        </p>
      </header>

      <div className="text-[17px] leading-[1.85] text-foreground/85 space-y-6">
        <p>
          OpenAI reported 200 million weekly active users in August 2024, a figure
          that had doubled in less than a year. Microsoft, which embeds Copilot
          across its Office suite, reported that workers using AI tools were spending
          an average of 11 minutes per day on them in early adoption phases, with heavy
          users running considerably higher. Independent usage surveys from 2024 found
          that people who described themselves as regular AI users were spending between
          30 and 90 minutes per day across various tools, with the upper end skewed
          toward knowledge workers and developers.
        </p>

        <p>
          At 45 minutes per day for a regular user across 48 working weeks, the annual
          total is 180 hours. Over a 10-year period, a reasonable estimate for how long
          AI assistants have been meaningfully available, that is 1,800 hours, or around
          75 waking days. The technology is new enough that lifetime totals are still
          small. The trajectory is not. If usage patterns follow those of every screen
          technology before them, the next decade will add substantially more.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          Why this one is different from the other numbers on this site.
        </h2>

        <p>
          Every other activity tracked here represents time spent on something with a
          clear category: entertainment, commuting, communication, sleep. AI use sits
          in a different position because it is routinely justified as a productivity
          tool. The hour spent drafting an email, summarising a document, or working
          through a problem with an AI assistant is time that is supposed to pay back
          more than it costs. Whether that is true depends on the task, the user, and
          how often the conversation extends past the point of usefulness into something
          closer to browsing.
        </p>

        <p>
          The distinction matters when you are trying to account for your time honestly.
          Two hours on Netflix is two hours on Netflix. Two hours with an AI assistant
          might be two hours of genuine work, two hours of procrastination with a
          productive veneer, or something in between that is hard to categorise even
          as you are doing it. The tool makes the accounting harder precisely because
          it spans so many different kinds of use.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          The expansion problem that every useful tool creates.
        </h2>

        <p>
          Research on technology adoption consistently finds that tools introduced to
          reduce a specific time cost tend to expand the scope of what people attempt,
          eventually consuming as much time as they saved. Email was meant to replace
          slower written communication. It created an entirely new class of communication
          that had not existed before, and the inbox became one of the largest time
          costs in the knowledge worker's day. The same pattern is already visible
          with AI: tasks that would previously have been abandoned as too time-consuming
          become feasible, which is genuinely useful, and also means more time spent
          on a broader set of tasks that would not have been attempted otherwise.
        </p>

        <p>
          There is also the learning curve that does not end. Each new model version,
          each new capability, each new integration into a tool you already use requires
          time to understand and adapt to. With most technologies that curve eventually
          flattens. With AI systems that are updated continuously, the curve stays
          active. Keeping up with the tool becomes part of using the tool.
        </p>

        <p className="text-muted-foreground">
          The honest answer to how much time you spend using AI is that most people
          do not know, and the tools do not tell you. What is measurable is the
          direction: more users, longer sessions, deeper integration into the working
          day. The number will be larger next year than it is now. Unlike most of the
          habits tracked on this site, this one is still at the beginning of its curve.
        </p>
      </div>

      <div className="mt-14 border-t border-border pt-10">
        <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          Related
        </p>
        <div className="space-y-3">
          <Link
            to="/journal/how-much-time-does-the-average-person-spend-on-email"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much time does the average person spend on email? →
          </Link>
          <Link
            to="/journal/how-much-of-your-life-do-you-spend-in-meetings"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much of your life do you spend in meetings? →
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
