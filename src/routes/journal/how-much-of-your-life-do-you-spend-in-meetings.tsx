import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "../../components/Breadcrumbs";

export const Route = createFileRoute(
  "/journal/how-much-of-your-life-do-you-spend-in-meetings",
)({
  component: Article,
});

function Article() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-24">
      <Breadcrumbs
        crumbs={[
          { label: "Hourglass", to: "/" },
          { label: "Journal", to: "/journal" },
          { label: "How much of your life do you spend in meetings?" },
        ]}
      />

      <header className="mb-16">
        <div className="mb-6 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          <time dateTime="2026-05-13">May 13, 2026</time>
          <span>·</span>
          <span>3 min read</span>
        </div>
        <h1 className="font-serif text-4xl italic tracking-tight text-foreground md:text-5xl leading-tight">
          How much of your life do you spend in meetings?
        </h1>
        <p className="mt-6 font-serif text-[17px] leading-relaxed text-muted-foreground">
          The meeting is the part of the working day that feels like work without
          necessarily producing any. The hours are real either way.
        </p>
      </header>

      <div className="text-[17px] leading-[1.85] text-foreground/85 space-y-6">
        <p>
          Microsoft's Work Trend Index put it at 57 percent of the working week spent
          in meetings and written communication. That figure, published in 2022, reflected
          a doubling of meeting time since 2020. Earlier surveys had found the average
          knowledge worker attending around 62 meetings per month, roughly three per
          working day. A Harvard Business Review study found that senior managers spent
          an average of 23 hours per week in meetings, up from less than 10 hours in
          the 1960s. The trend has moved in one direction for six decades.
        </p>

        <p>
          At three hours per working day across 48 working weeks, the annual total is
          720 hours. Over a 40-year career that is 28,800 hours, or roughly 6,900
          waking days. In waking years: just under two years of your life spent in
          meetings. For executives on the high end of the distribution the career total
          doubles. Three waking years in conference rooms, video calls, and status updates
          is not an unusual number for someone who spent their career in a large organisation.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          What the meeting actually costs beyond the time on the calendar.
        </h2>

        <p>
          The direct time cost understates the problem because meetings do not only consume
          the hours they occupy. Research by Gloria Mark at UC Irvine found that it takes
          an average of 23 minutes to return to deep focus after an interruption. A one-hour
          meeting in the middle of a working day can effectively cost two hours once the
          recovery time is included. Back-to-back meeting schedules eliminate the recovery
          period entirely, leaving no window for concentrated work. The calendar looks full.
          The output reflects it.
        </p>

        <p>
          Atlassian estimated the annual cost of unnecessary meetings in the United States
          at 37 billion dollars. Doodle's research put the global figure at over 500 billion
          dollars when accounting for all poorly organised meeting time. Both are estimates
          built on averages, but the direction is consistent. The problem is large enough
          to have generated an entire industry of scheduling software, asynchronous
          communication tools, and meeting frameworks, none of which have meaningfully
          reduced the total time spent in them.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          Why the numbers have not improved.
        </h2>

        <p>
          Part of the reason meetings persist at high volume is that attendance functions
          as a proxy for contribution. Being in the room, or on the call, signals engagement
          in a way that a written document does not, regardless of whether anything useful
          is produced. Organisations that reward visible participation over measurable output
          tend to accumulate meetings rather than reduce them. The return-to-office mandates
          of 2023 and 2024 reinforced this pattern: physical presence made meeting attendance
          more automatic, not more selective.
        </p>

        <p>
          There is also the coordination problem. Each person who schedules a meeting is
          solving a problem for themselves: they need a decision, a status update, or
          alignment from a group. The cost of that solution is distributed across everyone
          in the room. The person who called the meeting experiences the benefit directly.
          The ten people who attended experience only the hour. The incentives favour
          scheduling more meetings, not fewer.
        </p>

        <p className="text-muted-foreground">
          The one-hour meeting you are required to attend today cost someone else the
          same hour. Multiply that across an organisation and a career and the total
          becomes large enough to notice. Most people have not done the calculation.
          The ones who have tend to treat meeting invitations differently afterward.
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
