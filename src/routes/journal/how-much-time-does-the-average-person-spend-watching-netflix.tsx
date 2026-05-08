import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "../../components/Breadcrumbs";

export const Route = createFileRoute(
  "/journal/how-much-time-does-the-average-person-spend-watching-netflix",
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
          { label: "How much time does the average person spend watching Netflix?" },
        ]}
      />

      <header className="mb-16">
        <div className="mb-6 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          <time dateTime="2026-05-08">May 8, 2026</time>
          <span>·</span>
          <span>3 min read</span>
        </div>
        <h1 className="font-serif text-4xl italic tracking-tight text-foreground md:text-5xl leading-tight">
          How much time does the average person spend watching Netflix?
        </h1>
        <p className="mt-6 font-serif text-[17px] leading-relaxed text-muted-foreground">
          One more episode is how it starts. The math of where that ends up
          is something most people have never bothered to run.
        </p>
      </header>

      <div className="text-[17px] leading-[1.85] text-foreground/85 space-y-6">
        <p>
          Netflix has disclosed on multiple occasions that its subscribers watch an average of
          around two hours per day on the platform. That figure comes from Netflix itself and
          covers all devices, so it includes the television in the living room, the laptop in
          bed, and the phone on the commute. Two hours is also roughly what independent surveys
          find when they ask people directly, which means it is one of the more reliable
          self-reported usage numbers in media consumption research. People seem to know,
          approximately, how much Netflix they watch.
        </p>

        <p>
          Two hours a day is 730 hours a year. That is just over 30 full days, or 45 waking days
          if you think in terms of conscious time. Every single year, a month and a half of your
          waking life given to a streaming service. It does not feel like that because it arrives
          in two-hour increments at the end of the day, each one reasonable, each one unremarkable.
          The monthly total is invisible. The annual total is something almost nobody thinks to
          calculate.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          The lifetime number.
        </h2>

        <p>
          Netflix launched its streaming service in 2007. Someone who was 20 that year and watches
          two hours a day for the rest of their life until 80 will spend 43,800 hours on the
          platform. In waking years, that is just over 7 and a half years of conscious life spent
          watching Netflix alone, not counting YouTube, Disney Plus, HBO, or anything else. The
          broader category of television and streaming, if you add those in, easily doubles or
          triples the figure.
        </p>

        <p>
          For context, 43,800 hours is longer than it takes to complete a medical degree and
          residency. It is enough time to become fluent in five languages, or to walk around the
          circumference of the Earth about seventeen times. None of this is meant as a judgment.
          It is just a way of making the scale of the number legible against something concrete,
          because 43,800 by itself does not mean very much to most people.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          Why Netflix specifically is worth thinking about.
        </h2>

        <p>
          There is a meaningful difference between watching television in the era before streaming
          and watching it now. Television used to have a natural stopping point. The episode ended,
          the credits rolled, the next one did not start automatically. Netflix introduced
          autoplay in 2012 and watched average viewing time per session increase. The friction of
          choosing to continue was replaced with the friction of choosing to stop, which turns out
          to be a much higher bar. A lot of the two hours is, in practice, the time between
          intending to stop and actually stopping.
        </p>

        <p>
          That is not an argument that watching Netflix is bad or that two hours is too many. Some
          of the most interesting storytelling being made right now lives on that platform. There
          is genuine value in it for a lot of people. The question worth asking is simply whether
          the two hours, repeated every day for decades, reflects a deliberate choice or a default
          that nobody formally made. Most people, if pressed, would say the latter. The autoplay
          made the decision before they did.
        </p>

        <p className="text-muted-foreground">
          Seven and a half years is a long time. It is worth deciding what you want
          those evenings to contain.
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
