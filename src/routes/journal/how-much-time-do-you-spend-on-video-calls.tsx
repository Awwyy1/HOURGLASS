import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { PageSEO } from "../../components/PageSEO";
import { ArticleSchema } from "../../components/ArticleSchema";
import { FAQSection } from "../../components/FAQSection";

export const Route = createFileRoute(
  "/journal/how-much-time-do-you-spend-on-video-calls",
)({
  component: Article,
});

function Article() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-24">
      <PageSEO
        title="How much time do you spend on video calls?"
        description="Remote and hybrid workers average two to three hours a day on video calls, which comes to several waking years over a career. It is the newest large category here, and the only one with a fatigue mechanism named after the software."
        ogType="article"
      />
      <ArticleSchema
        title="How much time do you spend on video calls?"
        description="Remote and hybrid workers average two to three hours a day on video calls, which comes to several waking years over a career. It is the newest large category here, and the only one with a fatigue mechanism named after the software."
        datePublished="2026-08-19"
        slug="how-much-time-do-you-spend-on-video-calls"
      />
      <Breadcrumbs
        crumbs={[
          { label: "Hourglass", to: "/" },
          { label: "Journal", to: "/journal" },
          { label: "How much time do you spend on video calls?" },
        ]}
      />

      <header className="mb-16">
        <div className="mb-6 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          <time dateTime="2026-08-19">August 19, 2026</time>
          <span>·</span>
          <span>3 min read</span>
        </div>
        <h1 className="font-serif text-4xl italic tracking-tight text-foreground md:text-5xl leading-tight">
          How much time do you spend on video calls?
        </h1>
        <p className="mt-6 font-serif text-[17px] leading-relaxed text-muted-foreground">
          Every other total in this journal has been accumulating for decades.
          This one barely existed six years ago, and it is already large enough
          to sit among them.
        </p>
      </header>

      <div className="text-[17px] leading-[1.85] text-foreground/85 space-y-6">
        <p>
          Microsoft's Work Trend Index, which draws on aggregated usage data
          across its own tools rather than on self-report, recorded time spent in
          meetings more than doubling in the years following 2020, with the
          growth concentrated almost entirely in video rather than in rooms.
          Estimates for remote and hybrid knowledge workers now cluster between
          two and three hours a day on camera, with managers and anyone
          coordinating across time zones running well above that.
        </p>

        <p>
          Take two and a half hours a day across 230 working days a year and the
          annual total is 575 hours. Over a thirty-year stretch of a career spent
          in this working pattern, that comes to roughly 17,250 hours, or about
          three waking years spent looking at faces in rectangles. The figure
          overlaps heavily with the broader total for{" "}
          <Link
            to="/journal/how-much-of-your-life-do-you-spend-in-meetings"
            className="underline underline-offset-2 hover:text-muted-foreground transition"
          >
            meetings
          </Link>{" "}
          rather than adding to it, but the medium turns out to matter
          independently of the meeting.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          Why the same hour costs more on camera.
        </h2>

        <p>
          Jeremy Bailenson at Stanford published a paper in 2021 setting out four
          specific mechanisms behind what had already been nicknamed Zoom
          fatigue, and the value of the work is that it moved the complaint from
          folklore into something measurable. The first is sustained close-range
          eye contact: a grid of faces at conversational distance, all apparently
          looking at you, is a social situation the nervous system has no
          precedent for. The second is seeing yourself continuously, which no
          other form of conversation involves and which behaves like a mirror
          held up for the length of the working day.
        </p>

        <p>
          The third is reduced mobility, since a camera frame pins you to a
          small physical area for hours in a way an in-person meeting does not.
          The fourth is the higher cognitive load of producing and reading
          non-verbal signals through a compressed video feed, where the cues
          people rely on without thinking arrive degraded or slightly out of
          time. None of these appear in a calendar. All of them mean that three
          waking years on video is not equivalent to three waking years in a
          room.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          What the hours bought.
        </h2>

        <p>
          The honest accounting has to include the other side. Those same hours
          removed a commute for millions of people, which is a category this
          journal measures at{" "}
          <Link
            to="/journal/how-much-of-your-life-do-you-spend-commuting"
            className="underline underline-offset-2 hover:text-muted-foreground transition"
          >
            around a year and a half of waking time
          </Link>{" "}
          across a career. They also made it possible to work with people who
          are not in the same city, and to attend a funeral, a graduation, or a
          grandparent's birthday from another continent. Video calls did not
          simply arrive as a cost.
        </p>

        <p>
          What is worth watching is the direction. The meeting count did not fall
          when offices reopened; hybrid schedules mostly added video calls on top
          of the in-person ones rather than replacing them, which is how a
          category that did not exist in 2019 became one of the largest single
          blocks in a modern working day without anyone deciding it should.
        </p>

        <p className="text-muted-foreground">
          Around three waking years for someone spending a career in this
          pattern, and heavier per hour than the number suggests. The useful
          question is not whether to have video calls, which is settled, but how
          many of the ones in this week's calendar would have been an email in
          2019 and became a call only because calling got easy.
        </p>
      </div>

      <FAQSection
        faqs={[
          {
            q: "How many hours a day do people spend on video calls?",
            a: "Between two and three hours a day for typical remote and hybrid knowledge workers, with managers and people coordinating across time zones often exceeding that. Microsoft's Work Trend Index, which uses aggregated product data rather than surveys, recorded meeting time more than doubling after 2020, with almost all of the growth in video rather than in physical rooms. Over a thirty-year career in that working pattern, two and a half hours a day comes to roughly three waking years."
          },
          {
            q: "Why are video calls more tiring than in-person meetings?",
            a: "Stanford researcher Jeremy Bailenson identified four mechanisms in a 2021 paper: sustained close-range eye contact from a grid of faces, the unnatural experience of seeing yourself continuously throughout a conversation, reduced physical mobility because a camera frame pins you in place, and the higher cognitive load of sending and reading non-verbal cues through a compressed video feed where they arrive degraded or slightly delayed. None of these show up on a calendar, which is why the same scheduled hour costs more on video than it does in a room."
          },
        ]}
      />

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
            to="/journal/how-much-of-your-life-do-you-spend-on-your-laptop"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much of your life do you spend on your laptop? →
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
