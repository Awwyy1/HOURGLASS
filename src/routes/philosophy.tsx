import { createFileRoute, Link } from "@tanstack/react-router";
import { PageSEO } from "../components/PageSEO";

export const Route = createFileRoute("/philosophy")({
  component: Philosophy,
});

function Philosophy() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-24">
      <PageSEO
        title="Philosophy"
        description="On the arithmetic of attention: why a small daily habit becomes a large share of a life, and what the numbers are and are not good for."
      />
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
          Money gets tracked. Every cent spent is recorded somewhere: a bank statement,
          a receipt, a notification on your phone. We built entire industries around
          the management of money because the cost of not knowing is obvious.
        </p>

        <p>
          Time gets nothing like that. There is no monthly statement of hours.
          No alert when you have spent half your attention for the week already.
          The ledger stays empty, and at the end of the year you are left
          trying to reconstruct where it went.
        </p>

        <p>
          This is not an accident. Money is scarce in a way that is easy to see.
          Time feels different. It arrives every morning regardless of what you did
          yesterday. It costs nothing to spend. The first casualty of anything
          that feels unlimited is accounting.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          Small numbers, large consequences.
        </h2>

        <p>
          Two hours a day sounds like nothing. Run the calculation and it becomes
          30 full days per year. Over a decade, more than 10 months. Over a lifetime,
          it approaches two years of continuous waking attention.
        </p>

        <p>
          Nobody experiences it as two years. They experience it as two hours,
          every day, each one unremarkable. That is exactly how the number builds
          without being seen.
        </p>

        <p>
          <span className="font-serif text-3xl italic leading-none mr-2 float-left mt-1">T</span>
          he compounding of small habits into large outcomes is not a new idea.
          But there is a difference between knowing it in theory and running
          the specific number on the specific thing you actually do.
          HOURGLASS is that second step. Not inspiration. Just arithmetic.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          This is not about productivity.
        </h2>

        <p>
          Some of the largest numbers you will ever see in this calculator will be
          things you would choose again without hesitation. Time with people you
          love. Work that means something. Sleep. A large number is not the problem.
        </p>

        <p>
          Not knowing the number is the problem. Choosing something you have never
          measured is not really choosing it. The difference matters, even if the
          outcome looks the same from the outside.
        </p>

        <p>
          What this tool asks is simpler than productivity. It asks that you know.
          That before the decade closes, you have at least looked at what it contained.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          The question worth asking.
        </h2>

        <p>
          There is a version of this that judges. Apps that show your screen time
          with a red badge. Services that shame you into using your phone less.
          HOURGLASS is not that.
        </p>

        <p>
          It is a mirror. Mirrors do not advise. They show. What you do after
          looking is a question only you can answer. It is a better question
          once you have seen the number.
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
