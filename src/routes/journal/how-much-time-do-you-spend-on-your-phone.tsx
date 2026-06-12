import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { PageSEO } from "../../components/PageSEO";

export const Route = createFileRoute(
  "/journal/how-much-time-do-you-spend-on-your-phone",
)({
  component: Article,
});

function Article() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-24">
      <PageSEO
        title="How much time do you spend on your phone per day?"
        description="The average is close to four hours a day — most people guess two. Over a lifetime of smartphone use, the total comes to roughly 15 waking years spent looking at a screen."
      />
      <Breadcrumbs
        crumbs={[
          { label: "Hourglass", to: "/" },
          { label: "Journal", to: "/journal" },
          { label: "How much time do you spend on your phone per day?" },
        ]}
      />

      <header className="mb-16">
        <div className="mb-6 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          <time dateTime="2026-03-27">March 27, 2026</time>
          <span>·</span>
          <span>3 min read</span>
        </div>
        <h1 className="font-serif text-4xl italic tracking-tight text-foreground md:text-5xl leading-tight">
          How much time do you spend on your phone per day?
        </h1>
        <p className="mt-6 font-serif text-[17px] leading-relaxed text-muted-foreground">
          The screen time report appears every Sunday and most people glance at
          it and put the phone back down. The number is worth looking at longer
          than that.
        </p>
      </header>

      <div className="text-[17px] leading-[1.85] text-foreground/85 space-y-6">
        <p>
          Research firm App Annie tracked global smartphone usage across millions of devices and
          found that by 2022 the average user was spending close to five hours a day on their
          phone. RescueTime, which pulls data directly from devices with user consent, puts the
          figure slightly lower at around three and a half hours for its user base, which skews
          toward people already interested in managing their time. The real population average
          probably sits somewhere between those two numbers, closer to four hours for adults in
          most developed countries.
        </p>

        <p>
          Four hours a day is 1,460 hours a year. That is 60 full days, or about 91 waking days
          if you subtract sleep. One quarter of every waking year spent holding a rectangle and
          looking at it. Most people, if asked to estimate their usage before seeing the data,
          guess somewhere around two hours. The gap between the estimate and the reality is
          consistent enough across studies that researchers have a name for it: screen time
          underestimation bias. We are systematically wrong about this particular number,
          always in the same direction.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          What a lifetime of smartphone use looks like.
        </h2>

        <p>
          Smartphones became genuinely ubiquitous around 2012. Someone who was 18 that year and
          plans to live to 80 has roughly 62 years of smartphone use ahead of them, assuming the
          device or something like it persists. At four hours a day that is 90,520 hours across
          a lifetime. In waking years it comes to about 15 and a half years of conscious life
          spent on a phone screen.
        </p>

        <p>
          That figure exceeds the time most people will spend eating, exercising, and socialising
          in person combined. It is roughly comparable to the total hours of formal education from
          primary school through a university degree, counted about twelve times over. Nobody
          designed this outcome. The devices arrived, the apps improved, and the hours followed.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          Where the time actually goes.
        </h2>

        <p>
          The four hours are not distributed evenly across a single type of activity. They are
          composed of dozens of micro-sessions spread across the day, each one short enough to
          feel incidental. A 2023 analysis of anonymised usage data found that the average
          smartphone user unlocks their device 96 times per day, which works out to roughly
          once every ten minutes during waking hours. Many of those sessions last under a minute.
          Enough of them extend further that the daily total reaches four hours without any
          single session feeling particularly long.
        </p>

        <p>
          The majority of screen time across all age groups falls into three categories: social
          media and short video, messaging, and passive browsing of news and feeds with no
          specific destination. Entertainment with a defined endpoint, things like a film or a
          podcast, accounts for a smaller share than most people assume. The bulk of the time
          is spent in open-ended environments specifically designed to have no natural stopping
          point.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          The question the number raises.
        </h2>

        <p>
          There is a version of this discussion that treats all phone use as equivalent and
          therefore equally problematic. That version is not very useful. A video call with
          someone you care about, a navigation app on an unfamiliar road, a long piece of writing
          you have been meaning to read and finally finished on the commute, all of these show up
          in the four hours and none of them represent the same kind of expenditure as reflexive
          feed scrolling at 11pm.
        </p>

        <p>
          What is useful is the total, because the total is what most people have never actually
          seen in a form that makes it legible. Fifteen waking years is a number that changes the
          frame. It turns the phone from a neutral object that you happen to use a lot into
          something more like a major life commitment, one that deserves the same deliberate
          thought you would give to anything else that claimed that much of your time.
        </p>

        <p>
          The screen time report is already there every Sunday. The question is whether the
          number it shows represents what you would actually choose, if you had sat down and
          chosen it in advance.
        </p>

        <p className="text-muted-foreground">
          Fifteen years is a long time to spend on anything. It is worth deciding what it
          should contain.
        </p>
      </div>

      <div className="mt-14 border-t border-border pt-10">
        <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          Related
        </p>
        <div className="space-y-3">
          <Link
            to="/journal/how-much-of-your-life-do-you-spend-on-tiktok"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much of your life do you spend on TikTok? →
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
          <Link to="/" className="underline underline-offset-2 hover:text-foreground transition">
            Hourglass calculator
          </Link>{" "}
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
