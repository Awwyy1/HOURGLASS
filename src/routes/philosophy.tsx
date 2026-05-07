import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/philosophy")({
  component: Philosophy,
});

function Philosophy() {
  return (
    <article className="mx-auto max-w-3xl px-6 py-24">
      <header className="mb-16 text-center">
        <p className="mb-6 font-sans text-[10px] uppercase tracking-[0.36em] text-muted-foreground">
          An essay
        </p>
        <h1 className="font-serif text-4xl italic tracking-tight text-foreground md:text-5xl">
          On the arithmetic of attention.
        </h1>
        <p className="mt-6 font-serif text-sm italic text-muted-foreground">
          Volume I
        </p>
      </header>

      <div className="font-serif text-[17px] leading-[1.85] text-foreground/85 space-y-6">
        <p>
          Money gets tracked. Every cent spent is recorded somewhere — a bank statement,
          a receipt, a notification at 3am. Entire industries exist around the management
          of money, because we decided, collectively, that it matters.
        </p>

        <p>
          Time got no such industry. There is no monthly statement of hours. No alert
          when you've spent 40% of your attention budget for the week. The ledger stays
          empty, and at the end of the year — the end of the decade — you're left
          trying to reconstruct where it went.
        </p>

        <p>
          This is not an accident. Money is scarce in a way that's easy to see: someone
          else has it when you don't. Time feels different. It arrives every morning
          regardless. It costs nothing to spend. The first casualty of anything that
          feels unlimited is accounting.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          Small numbers, large consequences.
        </h2>

        <p>
          Two hours a day sounds like nothing. Run the calculation and it becomes
          30 full 24-hour days per year. Over a decade, more than 10 months. Over
          a lifetime, it approaches two years of continuous waking attention.
        </p>

        <p>
          Nobody experiences it as two years. They experience it as two hours —
          every day, each one unremarkable, each one forgettable. That's precisely
          how the number builds without being seen.
        </p>

        <p>
          <span className="font-serif text-3xl italic leading-none mr-2 float-left mt-1">T</span>
          he compounding of small habits into large outcomes is not a new observation.
          But there's a difference between knowing it abstractly and running the specific
          number on the specific thing you actually do. HOURGLASS is that second step.
          Not inspiration. Arithmetic.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          This is not about productivity.
        </h2>

        <p>
          The point is not to optimise. Some of the largest numbers you'll ever see in
          this calculator will be things you'd choose again without hesitation — time
          with people you love, work that means something, sleep. The number being large
          isn't the problem.
        </p>

        <p>
          The problem is not knowing the number at all. Choosing something you've never
          measured is not choosing it — it's just doing it. The difference matters,
          even if the outcome looks the same.
        </p>

        <p>
          What this tool asks is simpler than productivity: it asks that you know.
          That before the decade closes, you've at least looked at what it contained.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          The question worth asking.
        </h2>

        <p>
          There's a version of this tool that judges. It exists — there are apps that
          will tell you your screen time with a red badge, that will shame you into
          using your phone less. HOURGLASS is not that.
        </p>

        <p>
          It's a mirror. Mirrors don't advise. They show. What you do after looking
          is a question only you can answer, and it's a better question once you've
          seen the number.
        </p>

        <p className="text-muted-foreground">
          Spend deliberately. The hours are non-refundable.
        </p>
      </div>

      <div className="mt-20 border-t border-border pt-10 flex items-center justify-between">
        <Link
          to="/"
          className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground transition hover:text-foreground"
        >
          ← Back to the calculator
        </Link>
        <Link
          to="/journal"
          className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground transition hover:text-foreground"
        >
          Read the journal →
        </Link>
      </div>
    </article>
  );
}
