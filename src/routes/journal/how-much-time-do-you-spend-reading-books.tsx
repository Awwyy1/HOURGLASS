import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { PageSEO } from "../../components/PageSEO";
import { ArticleSchema } from "../../components/ArticleSchema";
import { FAQSection } from "../../components/FAQSection";

export const Route = createFileRoute(
  "/journal/how-much-time-do-you-spend-reading-books",
)({
  component: Article,
});

function Article() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-24">
      <PageSEO
        title="How much time do you spend reading books in a lifetime?"
        description="The average American reads about 12 books a year and spends around 17 minutes a day reading for pleasure. Over a lifetime that adds up to just over a year of waking time — less than most people assume."
        ogType="article"
      />
      <ArticleSchema
        title="How much time do you spend reading books in a lifetime?"
        description="The average American reads about 12 books a year and spends around 17 minutes a day reading for pleasure. Over a lifetime that adds up to just over a year of waking time — less than most people assume."
        datePublished="2026-06-17"
        slug="how-much-time-do-you-spend-reading-books"
      />
      <Breadcrumbs
        crumbs={[
          { label: "Hourglass", to: "/" },
          { label: "Journal", to: "/journal" },
          { label: "How much time do you spend reading books in a lifetime?" },
        ]}
      />

      <header className="mb-16">
        <div className="mb-6 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          <time dateTime="2026-06-17">June 17, 2026</time>
          <span>·</span>
          <span>3 min read</span>
        </div>
        <h1 className="font-serif text-4xl italic tracking-tight text-foreground md:text-5xl leading-tight">
          How much time do you spend reading books in a lifetime?
        </h1>
        <p className="mt-6 font-serif text-[17px] leading-relaxed text-muted-foreground">
          Books occupy a particular place in how people think about their time. Almost
          everyone wishes they read more. Far fewer people know how much they actually read,
          or what the lifetime total looks like.
        </p>
      </header>

      <div className="text-[17px] leading-[1.85] text-foreground/85 space-y-6">
        <p>
          The Bureau of Labor Statistics American Time Use Survey found that Americans
          spend an average of 17 minutes per day reading for personal interest, a category
          that includes books, magazines, and long-form articles but excludes news and
          social media. Gallup's annual survey on reading habits found that the average
          American reads around 12 books per year, a figure that has remained relatively
          stable over the past decade. Pew Research put the share of American adults who
          read at least one book in the past year at 72 percent in 2021, which means that
          roughly a quarter of adults are pulling the average down to zero for a given year.
        </p>

        <p>
          At 17 minutes per day across 60 years of adult life, the total is around 6,205
          hours, or roughly 388 waking days. Just over a year of conscious time spent on
          books across an entire life. That number will surprise people in two opposite
          directions: those who read regularly will find it too low, and those who rarely
          read will find it unexpectedly high. Both reactions say something useful about
          how poorly we track this particular category.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          What the average conceals about the distribution of reading.
        </h2>

        <p>
          Reading, even more than most leisure categories, follows a heavily skewed
          distribution. The Pew data on book consumption shows that the most active
          readers — roughly the top 20 percent — account for the majority of all books
          read. Someone who reads for an hour a day, which is not an unusual figure for
          a dedicated reader, accumulates 21,900 hours over 60 years, or about 3.7 waking
          years. That is more than three times the average, and it compounds in ways that
          are difficult to measure but easy to observe: vocabulary, background knowledge,
          the ability to follow complex arguments, the capacity to sit with a difficult
          idea long enough to understand it.
        </p>

        <p>
          At the other end, the roughly 28 percent of adults who report reading no books
          in a given year are not replaced in the average by equally inactive readers in
          subsequent years. Many of them are the same people year after year. For a
          significant portion of the adult population, the lifetime book-reading total
          is not a year — it is closer to a few months, or less.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          How screen time has changed where reading time comes from.
        </h2>

        <p>
          The 17-minute average has held relatively steady in the BLS data over the past
          decade, which is somewhat surprising given the rise of smartphones and streaming.
          What appears to have happened is that the readers kept reading and the non-readers
          substituted screens. Reading time has not dramatically declined for the people
          who do it. It has become more concentrated among a smaller share of the population.
          The total national hours of book-reading have not collapsed, but they have
          become less evenly distributed than they were thirty years ago.
        </p>

        <p className="text-muted-foreground">
          A year of waking time is both a large number and a small one depending on
          what you compare it to. It is smaller than the lifetime total for social media,
          smaller than the career total for email, and smaller than most people's intuition
          about how much they read. Whether you want to change that number is a decision
          only the person holding it can make — but knowing it is the necessary first step.
        </p>
      </div>

      <FAQSection
        faqs={[
          {
            q: "How many books does the average person read in a lifetime?",
            a: "Based on Gallup's figure of 12 books per year and a reading life spanning roughly 60 adult years, the average comes to around 720 books over a lifetime. That figure is inflated by heavy readers at the top of the distribution. A more realistic median — accounting for the roughly 28 percent of adults who read no books in a given year — is probably somewhere between 400 and 500. For dedicated readers who average a book a week, the lifetime total can exceed 3,000."
          },
          {
            q: "How long does it take to read a book?",
            a: "At an average adult reading speed of around 250 words per minute and an average non-fiction book length of roughly 70,000 to 90,000 words, a typical book takes between five and six hours to read cover to cover. A novel of similar length runs slightly faster because narrative prose tends to flow more easily than expository text. At 17 minutes of daily reading, that translates to about one book every three weeks — which maps closely to the Gallup figure of 12 books per year for the average American adult."
          },
        ]}
      />

      <div className="mt-14 border-t border-border pt-10">
        <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          Related
        </p>
        <div className="space-y-3">
          <Link
            to="/journal/how-much-time-do-you-spend-listening-to-music"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much time do you spend listening to music? →
          </Link>
          <Link
            to="/journal/how-much-of-your-life-do-you-spend-reading-news"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much of your life do you spend reading news? →
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
