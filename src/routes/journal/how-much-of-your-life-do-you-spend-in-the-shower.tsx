import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { PageSEO } from "../../components/PageSEO";
import { ArticleSchema } from "../../components/ArticleSchema";
import { FAQSection } from "../../components/FAQSection";

export const Route = createFileRoute(
  "/journal/how-much-of-your-life-do-you-spend-in-the-shower",
)({
  component: Article,
});

function Article() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-24">
      <PageSEO
        title="How much of your life do you spend in the shower?"
        description="The average shower runs about eight minutes, once a day. Over a lifetime that comes to roughly seven months of waking time and hundreds of thousands of gallons of water — spent in what may be the last unstimulated space most people have left."
      />
      <ArticleSchema
        title="How much of your life do you spend in the shower?"
        description="The average shower runs about eight minutes, once a day. Over a lifetime that comes to roughly seven months of waking time and hundreds of thousands of gallons of water — spent in what may be the last unstimulated space most people have left."
        datePublished="2026-07-27"
        slug="how-much-of-your-life-do-you-spend-in-the-shower"
      />
      <Breadcrumbs
        crumbs={[
          { label: "Hourglass", to: "/" },
          { label: "Journal", to: "/journal" },
          { label: "How much of your life do you spend in the shower?" },
        ]}
      />

      <header className="mb-16">
        <div className="mb-6 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          <time dateTime="2026-07-27">July 27, 2026</time>
          <span>·</span>
          <span>3 min read</span>
        </div>
        <h1 className="font-serif text-4xl italic tracking-tight text-foreground md:text-5xl leading-tight">
          How much of your life do you spend in the shower?
        </h1>
        <p className="mt-6 font-serif text-[17px] leading-relaxed text-muted-foreground">
          The shower is a small number that turns out to be interesting for a
          reason that has nothing to do with hygiene and everything to do with
          what it has become the last of.
        </p>
      </header>

      <div className="text-[17px] leading-[1.85] text-foreground/85 space-y-6">
        <p>
          Studies of household water use, including data compiled by utilities
          and by researchers at organisations like the Water Research Foundation,
          consistently put the average shower at around eight minutes. Most adults
          shower roughly once a day, though the real distribution runs from people
          who shower twice daily to those who go every other day, so once a day is
          a fair working average. Eight minutes a day is not a figure that alarms
          anyone, which is the usual reason a number in this journal turns out to
          be larger than expected once it is carried all the way out.
        </p>

        <p>
          At eight minutes a day across 70 years of a showering life, the total
          comes to roughly 3,400 hours. In waking time that is about 210 days, or
          close to seven months spent standing under running water. It is one of
          the smaller totals in this series, which is worth stating plainly, but
          seven months is still seven months, and it is time almost nobody has
          ever counted. The water figure lands harder than the time. At a standard
          flow rate, an eight-minute daily shower uses somewhere around 400,000
          gallons over a lifetime, which is enough to fill a small backyard swimming
          pool many times over.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          Why this particular seven months matters more than its size.
        </h2>

        <p>
          The shower has quietly become something unusual in a modern day. It is,
          for a growing number of people, the only remaining stretch of time that
          is not accompanied by a screen. You cannot bring a phone into the water,
          or at least most people still do not, and so the shower has ended up as a
          protected pocket of unstimulated attention in a life that has very few
          of them left. This is not a small thing. It maps onto a well-documented
          pattern: people report having a disproportionate share of their good
          ideas in the shower, and the leading explanation is not the water but the
          absence of input. The mind, given nothing to consume, begins to wander,
          and wandering is where a certain kind of thinking happens.
        </p>

        <p>
          Research on creativity and mind-wandering supports the general shape of
          this. Insight tends to arrive during moderately absorbing tasks that do
          not demand full attention, when the mind is free to make connections in
          the background rather than being fed a continuous stream of external
          content. The shower fits that description almost perfectly, and until
          recently so did the commute, the walk, and the wait in a line. Those have
          largely been colonised by the phone. The shower is one of the last
          holdouts, which turns its seven months into something closer to a
          resource than a cost.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          The version of the number worth watching.
        </h2>

        <p>
          The interesting trend is not how long showers are getting but whether the
          last screen-free space survives at all. Waterproof phones, shower phone
          mounts, and the general expectation of constant connection have begun to
          push against the one activity that reliably resisted them. If the shower
          becomes another place to watch and scroll, the seven months does not
          change on the clock, but it changes in kind, joining the long list of
          hours that used to belong to your own thoughts and now belong to a feed.
          That would be a quiet loss, and the kind that is difficult to notice
          while it happens.
        </p>

        <p className="text-muted-foreground">
          Seven months is the raw number, and it is one of the modest ones. What
          makes it worth a second look is not the total but the character of the
          time. It may be the last part of the day that is genuinely yours, in the
          sense of being unaccompanied. That is a strange thing for a shower to
          have become, and a good argument for leaving the phone on the other side
          of the door.
        </p>
      </div>

      <FAQSection
        faqs={[
          {
            q: "How long does the average person spend in the shower?",
            a: "About eight minutes per shower, based on household water-use studies, with most adults showering roughly once a day. The real range is wide, from people who take quick three-minute showers to those who regularly run fifteen or twenty minutes. Over 70 years of a showering life, the eight-minute daily average adds up to around 3,400 hours, or close to seven months of waking time."
          },
          {
            q: "Why do people get their best ideas in the shower?",
            a: "The leading explanation is not the water itself but the absence of external input. The shower is one of the few remaining daily activities that occupies the body lightly while leaving the mind free to wander, and research on creativity consistently finds that insight tends to surface during exactly that kind of moderately absorbing, low-demand task. It is the same mechanism that used to make commutes and walks productive for thinking, before phones filled those gaps. The shower resists the phone better than almost any other part of the day, which is part of why it still works."
          },
        ]}
      />

      <div className="mt-14 border-t border-border pt-10">
        <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          Related
        </p>
        <div className="space-y-3">
          <Link
            to="/journal/how-much-time-do-you-spend-getting-ready"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much time do you spend getting ready in the morning? →
          </Link>
          <Link
            to="/journal/how-much-time-do-you-spend-on-your-phone"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much time do you spend on your phone per day? →
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
