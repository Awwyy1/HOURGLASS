import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { PageSEO } from "../../components/PageSEO";

export const Route = createFileRoute(
  "/journal/how-much-time-do-you-spend-shopping-online",
)({
  component: Article,
});

function Article() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-24">
      <PageSEO
        title="How much time do you spend shopping online?"
        description="The average online shopper spends five hours a week browsing and buying. Over a lifetime that adds up to a year and a half of waking time — most sessions ending without a purchase."
      />
      <Breadcrumbs
        crumbs={[
          { label: "Hourglass", to: "/" },
          { label: "Journal", to: "/journal" },
          { label: "How much time do you spend shopping online?" },
        ]}
      />

      <header className="mb-16">
        <div className="mb-6 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          <time dateTime="2026-05-06">May 6, 2026</time>
          <span>·</span>
          <span>3 min read</span>
        </div>
        <h1 className="font-serif text-4xl italic tracking-tight text-foreground md:text-5xl leading-tight">
          How much time do you spend shopping online?
        </h1>
        <p className="mt-6 font-serif text-[17px] leading-relaxed text-muted-foreground">
          Most of it is not really shopping. It is browsing, comparing,
          adding to cart, and closing the tab. The clock runs the whole time.
        </p>
      </header>

      <div className="text-[17px] leading-[1.85] text-foreground/85 space-y-6">
        <p>
          A 2023 survey by Tidio found that the average online shopper in the United States spends
          around five hours per week browsing and buying online across all platforms. Amazon alone
          accounts for the largest share of that time: the same survey found that regular Amazon
          users spend an average of 74 minutes per week on the platform, which breaks down to just
          under 11 minutes per day. That is pure browsing time, not including the time spent
          reading reviews on other sites, comparing prices, or watching unboxing videos that
          influenced the decision.
        </p>

        <p>
          Five hours a week across all online shopping adds up to 260 hours a year. That is almost
          11 full days, or about 16 waking days per year spent in digital stores. Over 30 years of
          peak consumer activity, roughly age 25 to 55, the total comes to 7,800 hours. In waking
          years, that is just over a year and a half of conscious life spent browsing things to buy.
          A meaningful fraction of that time results in a purchase. Most of it does not.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          The browsing that never becomes buying.
        </h2>

        <p>
          What makes online shopping different from its offline predecessor is the near-zero cost
          of entry. Walking into a physical shop required intent. You went somewhere specifically
          to buy something. Online shopping has no equivalent of getting dressed and going out.
          It is available on the same device you use for everything else, reachable in two seconds
          from any other activity. The result is that a significant portion of what gets counted
          as shopping time is something closer to idle browsing: the same compulsive scrolling
          behaviour that governs social media use, just pointed at a product catalogue instead
          of a social feed.
        </p>

        <p>
          Amazon's design reinforces this. The recommendations engine, the deals countdown timers,
          the frequently bought together suggestions, and the lightning deals are all built around
          the same principle as TikTok's algorithm: keep the user engaged and moving through
          content long enough that a purchase becomes likely. The average Amazon session that
          results in a purchase lasts about 8 minutes. Sessions that do not result in a purchase
          average around 4 minutes. There are a lot more of the latter.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          What the number looks like alongside what you buy.
        </h2>

        <p>
          The interesting comparison is between time spent and value received. A year and a half
          of waking life is a significant investment. For some people the purchases it produces
          represent genuine improvements to their life, things that save time, enable hobbies, or
          solve real problems. For a large portion of online shopping, that case is harder to make.
          Research on post-purchase satisfaction with impulse buys consistently finds that regret
          outpaces satisfaction for unplanned purchases within a month of making them.
        </p>

        <p>
          None of this is an argument against buying things or against using Amazon. It is an
          observation that the time involved is larger than almost anyone estimates, that a
          significant fraction of it produces nothing at all, and that the platforms involved
          are specifically engineered to make the time as long as possible. A year and a half
          is enough time to learn something, build something, or read more books than most
          people manage in a decade. Whether that trade makes sense is a question only the
          individual can answer. Most people have never looked at what the trade actually is.
        </p>

        <p className="text-muted-foreground">
          The cart will still be there. The question is how long you want to spend filling it.
        </p>
      </div>

      <div className="mt-14 border-t border-border pt-10">
        <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          Related
        </p>
        <div className="space-y-3">
          <Link
            to="/journal/how-much-time-do-you-spend-on-your-phone"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much time do you spend on your phone per day? →
          </Link>
          <Link
            to="/journal/how-much-of-your-life-do-you-spend-on-instagram"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much of your life do you spend on Instagram? →
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
