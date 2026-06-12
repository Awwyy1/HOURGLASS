import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { PageSEO } from "../../components/PageSEO";

export const Route = createFileRoute(
  "/journal/how-much-time-does-the-average-person-spend-on-email",
)({
  component: Article,
});

function Article() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-24">
      <PageSEO
        title="How much time does the average person spend on email?"
        description="McKinsey put it at 28 percent of the workweek. Across a full career the total approaches five waking years spent reading, writing, and managing an inbox."
      />
      <Breadcrumbs
        crumbs={[
          { label: "Hourglass", to: "/" },
          { label: "Journal", to: "/journal" },
          { label: "How much time does the average person spend on email?" },
        ]}
      />

      <header className="mb-16">
        <div className="mb-6 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          <time dateTime="2026-04-23">April 23, 2026</time>
          <span>·</span>
          <span>3 min read</span>
        </div>
        <h1 className="font-serif text-4xl italic tracking-tight text-foreground md:text-5xl leading-tight">
          How much time does the average person spend on email?
        </h1>
        <p className="mt-6 font-serif text-[17px] leading-relaxed text-muted-foreground">
          It starts before breakfast and ends after dinner. At some point email
          stopped being a tool you use and became a place you live.
        </p>
      </header>

      <div className="text-[17px] leading-[1.85] text-foreground/85 space-y-6">
        <p>
          A 2012 McKinsey study found that the average knowledge worker spends 28 percent of the
          workweek reading and responding to email. For a standard 40-hour week that works out to
          just over 11 hours. Adobe ran a survey a few years later and found people self-reporting
          closer to three hours a day on work email alone, with another hour and a half on personal
          inboxes. Different methodology, similar conclusion: a meaningful portion of every working
          day disappears into a stream of messages that mostly exist to generate more messages.
        </p>

        <p>
          Take the conservative figure. Three hours a day on work email, five days a week, 48 weeks
          a year accounting for vacation and public holidays. That comes to 720 hours annually. In
          days, that is 30 full 24-hour days. In waking hours, assuming you sleep eight of them,
          it is 45 days of your conscious year spent doing nothing but email. Not working. Not
          thinking through a hard problem. Reading and writing email.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          What a career looks like from this angle.
        </h2>

        <p>
          Stretch that over a 40-year career and the number becomes 28,800 hours. In waking years,
          where one year represents all your conscious hours across 365 days, that is just under
          five years of your working life spent on email. Five years is a long time to spend on
          anything. It is long enough to complete two university degrees, learn a language to
          fluency twice over, or write several books. Most people have not thought about their
          inbox in those terms.
        </p>

        <p>
          The heavier users, the people who treat the inbox as a second home and check it
          compulsively throughout evenings and weekends, will find their career total considerably
          higher. Some studies of senior professionals and executives find email consuming four to
          five hours of each working day. Run that version of the calculation and the career total
          crosses 50,000 hours, which is more than half of the famous 80,000-hour figure that
          represents an entire working life.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          The part that happens off the clock.
        </h2>

        <p>
          What makes email different from most other time-consuming habits is that it does not
          stay at work. A 2020 survey by Statista found that 59 percent of workers check their
          work email after business hours, and 40 percent check it on holidays. The inbox follows
          people into evenings, into weekends, into the moments that are supposed to be something
          else entirely. It rarely demands much from those moments individually. A quick check
          here, a short reply there. The individual interruptions are small. The accumulated drain
          on attention and rest is not.
        </p>

        <p>
          There is also the question of what email does to the time around it. Research on
          interrupted work consistently finds that after stopping to check email, it takes an
          average of 23 minutes to return to the same level of focus. If someone checks their
          inbox ten times during a working day, which is conservative by most measures, the
          recovery time alone accounts for nearly four hours of reduced concentration. The
          email itself is only part of the cost.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          Nobody chose this.
        </h2>

        <p>
          The strange thing about email is that almost nobody decided to spend this much time on
          it. It accumulated. One account became two. Work crept into personal. Notifications got
          turned on and never turned off. The inbox grew and the habit of checking it grew with it,
          and at no point did anyone sit down and decide that this was a reasonable way to allocate
          five years of a working life.
        </p>

        <p>
          That is not an argument for leaving emails unanswered or for pretending the inbox does
          not exist. It is just an observation that the amount of time involved is large enough
          to deserve a deliberate decision rather than a default one. Most people have never
          looked at the total. The total is worth looking at.
        </p>

        <p className="text-muted-foreground">
          The inbox will still be there tomorrow. The question is how much of tomorrow you want
          it to have.
        </p>
      </div>

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
            to="/journal/how-much-of-your-life-do-you-spend-working"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much of your life do you spend working? →
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
