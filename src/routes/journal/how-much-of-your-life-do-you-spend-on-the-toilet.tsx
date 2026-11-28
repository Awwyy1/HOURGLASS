import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { PageSEO } from "../../components/PageSEO";
import { ArticleSchema } from "../../components/ArticleSchema";
import { FAQSection } from "../../components/FAQSection";
import { AnswerBlock } from "../../components/AnswerBlock";
import { LifeFigure, PeriodTable, type LifeFigureData } from "../../components/LifeFigure";

export const Route = createFileRoute("/journal/how-much-of-your-life-do-you-spend-on-the-toilet")({
  component: Article,
});

const TITLE = "How much of your life do you spend on the toilet?";
const DESCRIPTION =
  "At about ten minutes a day, a person spends roughly 285 waking days on the toilet over 75 years. The popular year and a half counts half an hour a day.";

const FIGURE: LifeFigureData = {
  answer: {
    value: "285",
    unit: "waking days",
    text: "over 75 years, at about ten minutes a day on the toilet.",
  },
  day: {
    hours: 0.1667,
    value: "0.7%",
    text: "of every day: about seven short visits and one longer sitting, around ten minutes in all.",
  },
  toYear: {
    op: "× 365",
    text: "every day of the year",
  },
  year: {
    days: 2.5,
    value: "2.5 days",
    text: "about 61 hours a year",
  },
  toLife: {
    op: "× 75",
    text: "years, from about age four to 79",
  },
  life: {
    years: 0.78,
    total: 75,
    value: "285 days",
    text: "of your 75 waking years: about 4,560 hours on the toilet.",
  },
  why: {
    title: "Why 10 minutes",
    max: 30,
    band: [3, 10],
    marker: 10,
    ticks: [0, 3, 10, 30],
    unit: "m",
    text: "Seven 21-second visits and one 12-second passage take under 3 min; with the visit around them, about 10. Surveys report 15–30.",
  },
};

function Article() {
  return (
    <article className="article-with-figure mx-auto max-w-2xl px-6 py-24">
      <PageSEO title={TITLE} description={DESCRIPTION} ogType="article" />
      <ArticleSchema
        title={TITLE}
        description={DESCRIPTION}
        datePublished="2026-10-09"
        slug="how-much-of-your-life-do-you-spend-on-the-toilet"
      />
      <Breadcrumbs
        crumbs={[
          { label: "Hourglass", to: "/" },
          { label: "Journal", to: "/journal" },
          { label: TITLE },
        ]}
      />

      <header className="mb-16">
        <div className="mb-6 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          <time dateTime="2026-10-09">October 9, 2026</time>
          <span>·</span>
          <span>3 min read</span>
        </div>
        <h1 className="font-serif text-4xl italic tracking-tight text-foreground md:text-5xl leading-tight">
          {TITLE}
        </h1>
        <p className="mt-6 font-serif text-[17px] leading-relaxed text-muted-foreground">
          It is one of the few habits that nobody skips and almost nobody times. Most of the
          lifetime figures that circulate come from polls commissioned by retailers, and the
          body&apos;s own arithmetic gives a much smaller answer.
        </p>
      </header>

      <LifeFigure data={FIGURE} />

      <AnswerBlock>
        About ten minutes a day on the toilet, across six to eight short visits to urinate and one
        longer sitting, comes to roughly 61 hours a year and about 4,560 hours over 75 years, which
        is around 285 waking days. The popular figure of a year and a half comes from a 2021 survey
        that counted half an hour a day in full 24-hour days.
      </AnswerBlock>

      <PeriodTable data={FIGURE} />

      <div className="text-[17px] leading-[1.85] text-foreground/85 space-y-6">
        <p>
          The time the body actually needs is short. In a 2014 study in the Proceedings of the
          National Academy of Sciences, Patricia Yang and David Hu of Georgia Tech found that
          mammals heavier than about three kilograms empty a full bladder in about 21 seconds,
          whatever their size, and the Cleveland Clinic considers six to eight visits in 24 hours
          normal for an adult. The same group reported in Soft Matter in 2017 that defecation in
          mammals takes about 12 seconds. Once a day is the most common pattern, reported by 54
          percent of the 142,765 people in ZOE&apos;s 2023 Big Poo Review, and a 2018 analysis of
          American national health survey data found 95.9 percent of adults who considered their
          habits normal between three times a week and three times a day. Seven visits and one bowel movement come to under three minutes of the
          act itself, about 1,200 hours across 75 years.
        </p>

        <p>
          Time on the toilet runs longer, because each visit includes everything around the act.
          Respondents to the ZOE survey reported about three and a half minutes on the toilet for
          each bowel movement. Seven visits to urinate at under a minute each, door to door, and one
          sitting of three and a half minutes come to about ten minutes a day, or 61 hours a year.
          Counted over 75 years, from about age four to 79, the total is about 4,560 hours, roughly
          285 waking days or a little over three quarters of one waking year.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          Where the year and a half comes from.
        </h2>

        <p>
          The figure of a year and a half comes from a 2021 survey of 1,000 Britons for the retailer
          Topps Tiles, which found about five minutes a visit and four to seven visits a day, or 3.5
          hours a week. That is half an hour a day, eight full days a year, and a year and a half of
          24-hour days across a lifetime. Counted in waking time over 75 years, the same rate comes
          to about 13,700 hours, or 2.3 waking years. A 2017 ComRes poll for the health body ukactive
          put toilet time at three hours and nine minutes a week, more than twice the time the same
          adults said they spent exercising.
        </p>

        <p>
          The other popular figures hold up less well. A poll of about 2,500 people for the retailer
          Bathstore put toilet time at an hour and 42 minutes a week, about 15 minutes a day and the
          closest of the surveys to the estimate above, and described it as almost 92 days over a
          lifetime, although at that rate 92 full days pass in about 25 years. The claim of three
          years appears in lists of toilet facts without any survey behind it, and three years of
          full days over 75 years would take close to an hour on the toilet every day.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          Where the extra minutes go.
        </h2>

        <p>
          Part of the gap between ten minutes and half an hour is the generosity of estimates made
          from memory, and part is time spent sitting after the body has finished, which is where
          phones come in. In a study published in PLOS One in 2025, Trisha Pasricha and colleagues
          at Beth Israel Deaconess Medical Center surveyed 125 adults having screening colonoscopies
          and found that 37.3 percent of those who used a phone on the toilet stayed more than five
          minutes a visit, against 7.1 percent of those who did not. Phone use was linked to a 46
          percent higher risk of haemorrhoids after adjusting for age, fibre, straining and other
          factors, and
          Pasricha&apos;s advice is to leave the phone outside and take no more than a few minutes.
        </p>

        <p>
          The phone users in that study were younger on average, and the ZOE survey shows the same
          tilt by age, with respondents aged 18 to 32 reporting 5.41 minutes a sitting and those
          aged 58 and over reporting 3.68. Kept up for 75 years, the younger habit adds roughly 860 hours to
          the total above.
        </p>

        <p className="text-muted-foreground">
          About ten minutes a day, 61 hours a year and 285 waking days over 75 years, of which the
          act itself takes under three minutes a day, against survey figures of up to half an hour a
          day and a popular claim of a year and a half.
        </p>
      </div>

      <FAQSection
        faqs={[
          {
            q: "How much time does the average person spend on the toilet in a lifetime?",
            a: "About ten minutes a day, based on six to eight short visits to urinate and one longer sitting for a bowel movement. That is around 61 hours a year and about 4,560 hours over 75 years, from about age four to 79, which comes to roughly 285 waking days. Surveys that ask people to estimate their own time produce figures up to three times higher.",
          },
          {
            q: "Do people really spend a year and a half on the toilet?",
            a: "That figure comes from a 2021 Topps Tiles survey in which Britons reported about half an hour a day, counted across a lifetime in full 24-hour days. The time the body needs is much shorter, about 21 seconds to empty the bladder and around 12 seconds for a bowel movement, and with the rest of each visit included a typical day comes to about ten minutes. Over 75 years that is about 285 waking days, a little over three quarters of a waking year.",
          },
        ]}
      />

      <div className="mt-14 border-t border-border pt-10">
        <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          Related
        </p>
        <div className="space-y-3">
          <Link
            to="/journal/how-much-of-your-life-do-you-spend-in-the-shower"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much of your life do you spend in the shower? →
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
          <a
            href="/calculator"
            className="underline underline-offset-2 hover:text-foreground transition"
          >
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
