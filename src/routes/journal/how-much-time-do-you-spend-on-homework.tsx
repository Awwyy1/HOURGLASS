import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { PageSEO } from "../../components/PageSEO";
import { ArticleSchema } from "../../components/ArticleSchema";
import { FAQSection } from "../../components/FAQSection";
import { AnswerBlock } from "../../components/AnswerBlock";
import { LifeFigure, PeriodTable, type LifeFigureData } from "../../components/LifeFigure";

export const Route = createFileRoute("/journal/how-much-time-do-you-spend-on-homework")({
  component: Article,
});

const TITLE = "How much time do you spend on homework in a lifetime?";
const DESCRIPTION =
  "About four hours of homework a week adds up to roughly 1,730 hours from first grade to graduation, or 108 waking days. The 10-minute rule would make it 2,340.";

const FIGURE: LifeFigureData = {
  answer: {
    value: "108",
    unit: "waking days",
    text: "of homework from first grade to graduation, at just under four hours a week.",
  },
  day: {
    hours: 0.8,
    value: "3.3%",
    text: "of every school day: about 48 minutes of homework, averaged across grades 1 to 12.",
  },
  toYear: {
    op: "× 180",
    text: "school days a year",
  },
  year: {
    days: 6,
    value: "6 days",
    text: "about 144 hours a year",
  },
  toLife: {
    op: "× 12",
    text: "school years, grades 1 to 12",
  },
  life: {
    years: 0.296,
    total: 12,
    value: "108 days",
    text: "of the 12 waking years those school years hold: about 1,730 hours of homework.",
  },
  why: {
    title: "Why 48 minutes",
    max: 120,
    band: [48, 84],
    marker: 48,
    ticks: [0, 48, 84, 120],
    unit: "m",
    text: "Diaries of children aged 6–17 found about 4 h of homework a week (U. Michigan). High schoolers now do about 7 h, 84 min a school day.",
  },
};

function Article() {
  return (
    <article className="article-with-figure mx-auto max-w-2xl px-6 py-24">
      <PageSEO title={TITLE} description={DESCRIPTION} ogType="article" />
      <ArticleSchema
        title={TITLE}
        description={DESCRIPTION}
        datePublished="2026-10-02"
        slug="how-much-time-do-you-spend-on-homework"
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
          <time dateTime="2026-10-02">October 2, 2026</time>
          <span>·</span>
          <span>3 min read</span>
        </div>
        <h1 className="font-serif text-4xl italic tracking-tight text-foreground md:text-5xl leading-tight">
          {TITLE}
        </h1>
        <p className="mt-6 font-serif text-[17px] leading-relaxed text-muted-foreground">
          Homework is the part of school that comes home, so it is the part families see and argue
          about. Measured across twelve years, the total is smaller than the guideline most schools
          cite, and small next to the hours spent in the building.
        </p>
      </header>

      <LifeFigure data={FIGURE} />

      <AnswerBlock>
        Time diaries put American children aged 6 to 17 at just under four hours of homework a week,
        about 48 minutes a school day or 144 hours a year. Over twelve years, from first grade to
        the end of high school, that comes to about 1,730 hours, or 108 waking days. Following the
        10-minute rule exactly would add up to about 2,340 hours, or 146 waking days.
      </AnswerBlock>

      <PeriodTable data={FIGURE} />

      <div className="text-[17px] leading-[1.85] text-foreground/85 space-y-6">
        <p>
          In 2002 and 2003 researchers at the University of Michigan&apos;s Institute for Social
          Research collected time diaries from nearly 2,900 American children aged 6 to 17, each
          covering one weekday and one weekend day. Homework came to just under four hours a week,
          up from 2 hours 38 minutes in 1981. Spread over the five days of a school week, four hours
          is about 48 minutes a school day, and across a school year of about 36 weeks it comes to
          roughly 144 hours.
        </p>

        <p>
          Twelve years of that, from first grade to the end of high school, comes to about 1,730
          hours, or 108 waking days. Kindergarten is left out because the diary figure starts at
          age six and because the National PTA and the National Education Association do not
          endorse homework for kindergarten, although it is often set anyway: a 2015 survey of 1,173
          Rhode Island parents, published in the American Journal of Family Therapy, found
          kindergartners spending about 25 minutes a night on it. Set beside the roughly 15,200
          hours this journal counts inside the school building, the homework total is about a ninth
          as large.
        </p>

        <p>
          The average conceals a steep climb with age. Pew Research Center&apos;s 2019 analysis of
          the American Time Use Survey found that teenagers aged 15 to 17 spent an hour on homework
          on an average day of the school year in diaries kept between 2014 and 2017, up from 44
          minutes a decade earlier and 30 minutes in the mid-1990s. That is about seven hours a
          week, the figure parents of high school students also gave the National Center for
          Education Statistics in 2007, and roughly 250 hours a year, so the four high school years
          alone account for about 1,000 hours. Taking that teenage rate for grades 9 to 12 and the
          diary average for the eight years before them gives about 2,160 hours, around 135 waking
          days, a generous upper bound since the diary average already includes teenagers.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          What the 10-minute rule would add up to.
        </h2>

        <p>
          The guideline most American schools cite is the 10-minute rule, ten minutes a night for
          each grade, which the National PTA and the National Education Association endorse and
          which is usually credited to the Duke University psychologist Harris Cooper. Summed over
          grades 1 to 12 it comes to 780 minutes, an average of 65 minutes a night, and across 180
          school nights a year for twelve years that is about 2,340 hours, or 146 waking days,
          about a third more than measured homework. The Brookings Institution&apos;s Brown Center
          Report found loads light for most students in 2014, using national assessment data from
          2012 in which only 5 percent of nine-year-olds, 7 percent of thirteen-year-olds and 13
          percent of seventeen-year-olds reported more than two hours of homework the night before.
        </p>

        <p>
          The heavy loads that dominate the argument are real but concentrated. A 2013 study by
          Mollie Galloway, Jerusha Conner and Stanford&apos;s Denise Pope surveyed 4,317 students
          at ten high-performing high schools in affluent California communities and found an
          average of about 3.1 hours of homework a night. Counted on school nights alone, four years
          at that pace comes to about 2,230 hours, more than the average American student does from
          first grade to graduation.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          How American homework compares abroad.
        </h2>

        <p>
          The OECD&apos;s PISA survey asks 15-year-olds in every participating country how much
          homework they do. In 2012 the OECD average was almost five hours a week and American
          students reported about six. Students in Shanghai reported 14 hours, while those in
          Finland and South Korea reported fewer than three, a figure that for Korea leaves out the
          private tutoring PISA records separately. At Shanghai&apos;s pace a single year of
          homework at fifteen would come to about 500 hours, more than a quarter of the American
          twelve-year total, although the OECD&apos;s own analysis of its 2009 survey found that
          beyond about four hours a week, extra homework made little difference to scores.
        </p>

        <p className="text-muted-foreground">
          About four hours a week, 48 minutes a school day and 144 hours a year, which over twelve
          school years is about 1,730 hours and 108 waking days, against 2,340 hours under the
          10-minute rule and about 2,230 for four years at the most demanding high schools.
        </p>
      </div>

      <FAQSection
        faqs={[
          {
            q: "How many hours of homework do you do from first grade to graduation?",
            a: "About 1,730 hours for an average American student, based on time diaries that put children aged 6 to 17 at just under four hours of homework a week, across about 36 school weeks a year for twelve years. That is about 108 waking days. High school students do more than the average, around seven hours a week, and children in the early grades do less.",
          },
          {
            q: "How much homework should a child have each night?",
            a: "The usual guideline is the 10-minute rule, endorsed by the National PTA and the National Education Association: ten minutes a night for each grade, so ten minutes in first grade and two hours by twelfth. Followed from first grade to graduation it averages 65 minutes a night and comes to about 2,340 hours. Most American students do less than that, although students at some high-performing high schools report about three hours a night.",
          },
        ]}
      />

      <div className="mt-14 border-t border-border pt-10">
        <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          Related
        </p>
        <div className="space-y-3">
          <Link
            to="/journal/how-much-of-your-life-do-you-spend-in-school"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much of your life do you spend in school? →
          </Link>
          <Link
            to="/journal/how-much-time-do-parents-spend-with-their-children"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much time do parents spend with their children? →
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
