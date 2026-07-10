import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/journal/")({
  component: Journal,
});

type Article = {
  slug: string;
  title: string;
  date: string;
  readingTime: string;
  excerpt: string;
};

const articles: Article[] = [
  {
    slug: "how-much-time-do-you-spend-stuck-in-traffic",
    title: "How much time do you spend stuck in traffic?",
    date: "2026-06-30",
    readingTime: "3 min",
    excerpt:
      "INRIX found the average US driver lost 43 hours to congestion in 2023, on top of the baseline commute itself. In the worst cities, the figure exceeds 100 hours a year. Over a 40-year driving career, that is more than two-thirds of a waking year spent purely on delay.",
  },
  {
    slug: "how-much-of-your-life-do-you-spend-exercising",
    title: "How much of your life do you spend exercising?",
    date: "2026-06-27",
    readingTime: "3 min",
    excerpt:
      "Americans average 17 minutes of intentional exercise per day. Over a lifetime that adds up to just over a year of waking time — less than the hours spent waiting in lines, and about a quarter of what goes to television.",
  },
  {
    slug: "how-much-time-do-you-spend-waiting",
    title: "How much time do you spend waiting in a lifetime?",
    date: "2026-06-26",
    readingTime: "3 min",
    excerpt:
      "Americans spend an estimated 37 minutes a day in passive waiting — checkout lines, hold music, waiting rooms, traffic lights. Over 60 years of adult life that adds up to more than two waking years spent doing nothing by requirement.",
  },
  {
    slug: "how-much-time-do-you-spend-watching-sports",
    title: "How much time do you spend watching sports?",
    date: "2026-06-25",
    readingTime: "3 min",
    excerpt:
      "Nielsen found Americans spend an average of 3.5 hours a week watching live sports. For dedicated fans following multiple leagues the annual total can reach 370 hours. Over 50 years that comes to more than three waking years spent watching other people compete.",
  },
  {
    slug: "how-much-of-your-life-do-you-spend-on-your-laptop",
    title: "How much of your life do you spend on your laptop?",
    date: "2026-06-23",
    readingTime: "3 min",
    excerpt:
      "Between work and personal use, most adults spend five to six hours a day in front of a laptop screen. Over a 40-year career and adult life, the combined total approaches 40 waking years — making the laptop the primary location where most of adult life actually happens.",
  },
  {
    slug: "how-much-of-your-life-do-you-spend-on-facebook",
    title: "How much of your life do you spend on Facebook?",
    date: "2026-06-20",
    readingTime: "3 min",
    excerpt:
      "Facebook has 3 billion monthly active users and the average session runs around 33 minutes a day. Over 15 years of regular use the total approaches six months of waking time — accumulated in portions small enough that they never felt like a meaningful investment.",
  },
  {
    slug: "how-much-time-do-you-spend-reading-books",
    title: "How much time do you spend reading books in a lifetime?",
    date: "2026-06-17",
    readingTime: "3 min",
    excerpt:
      "The Bureau of Labor Statistics found Americans spend an average of 17 minutes a day reading for pleasure. Over 60 years of adult life that adds up to just over a year of waking time — less than most people assume, and far less than the hours that went to screens instead.",
  },
  {
    slug: "how-much-time-do-you-spend-on-twitter-x",
    title: "How much time do you spend on Twitter / X?",
    date: "2026-06-15",
    readingTime: "3 min",
    excerpt:
      "The average active user spends around 30 minutes a day on Twitter / X. Over a decade of use that adds up to more than 75 waking days spent reading posts that mostly disappear within hours of being written.",
  },
  {
    slug: "how-much-time-do-you-spend-listening-to-music",
    title: "How much time do you spend listening to music?",
    date: "2026-06-12",
    readingTime: "3 min",
    excerpt:
      "Nielsen found Americans spend around 32 hours a month listening to music across all platforms. Over a 60-year listening life that adds up to nearly four waking years — more than most people accumulate on any single social media platform.",
  },
  {
    slug: "how-many-hours-are-in-a-lifetime",
    title: "How many hours are in a lifetime?",
    date: "2026-06-10",
    readingTime: "3 min",
    excerpt:
      "A human life contains around 692,000 hours in total. Subtract sleep and you have roughly 461,000 waking hours. After work, childhood, and daily maintenance, the truly discretionary portion is somewhere between 150,000 and 175,000 hours — about five hours a day across an adult life.",
  },
  {
    slug: "how-much-of-your-life-do-you-spend-playing-video-games",
    title: "How much of your life do you spend playing video games?",
    date: "2026-06-03",
    readingTime: "3 min",
    excerpt:
      "There are over three billion active gamers worldwide. The average player logs 7 to 8 hours a week. Over 40 years of regular gaming that comes to just under ten waking years — a number most casual gamers find hard to believe until they run it.",
  },
  {
    slug: "how-much-time-do-you-spend-on-linkedin",
    title: "How much time do you spend on LinkedIn?",
    date: "2026-05-27",
    readingTime: "3 min",
    excerpt:
      "LinkedIn has over a billion members but most use it in short bursts — a few minutes a week when employed, hours a day when job hunting. The split between those two groups explains why the averages are so misleading.",
  },
  {
    slug: "how-much-time-do-you-spend-on-dating-apps",
    title: "How much time do you spend on dating apps?",
    date: "2026-05-20",
    readingTime: "3 min",
    excerpt:
      "Tinder has 75 million monthly active users. The average active user spends 30 to 90 minutes a day swiping and messaging. Over two to three years, the total reaches hundreds of hours — most of it spent on conversations that never leave the app.",
  },
  {
    slug: "how-much-time-do-you-spend-using-ai",
    title: "How much time do you spend using AI?",
    date: "2026-05-14",
    readingTime: "3 min",
    excerpt:
      "OpenAI reported 200 million weekly active users in 2024, a figure that doubled in under a year. Regular users spend between 30 and 90 minutes a day across AI tools. The technology was introduced as a time-saving tool. For many it has become a place where time goes.",
  },
  {
    slug: "how-much-of-your-life-do-you-spend-in-meetings",
    title: "How much of your life do you spend in meetings?",
    date: "2026-05-13",
    readingTime: "3 min",
    excerpt:
      "Microsoft's Work Trend Index put it at 57 percent of the working week spent in meetings and communication. At three hours per working day over a 40-year career, the total comes to just under two waking years spent in conference rooms and video calls.",
  },
  {
    slug: "how-much-of-your-life-do-you-spend-commuting",
    title: "How much of your life do you spend commuting?",
    date: "2026-05-12",
    readingTime: "3 min",
    excerpt:
      "The US Census puts the average one-way commute at 27.6 minutes. Round trip, five days a week, 48 weeks a year: that is 220 hours annually. Over a 40-year career, the total reaches one and a half waking years spent in transit.",
  },
  {
    slug: "how-much-of-your-life-do-you-spend-reading-news",
    title: "How much of your life do you spend reading news?",
    date: "2026-05-08",
    readingTime: "3 min",
    excerpt:
      "The average person spends an hour a day with the news. Over 40 years that is two and a half waking years. Studies find people remember about 20 percent of what they read. The math raises a question about what all that time is actually producing.",
  },
  {
    slug: "how-much-time-do-you-spend-shopping-online",
    title: "How much time do you spend shopping online?",
    date: "2026-05-06",
    readingTime: "3 min",
    excerpt:
      "The average online shopper spends five hours a week browsing and buying. Over a lifetime of peak consumer activity that adds up to a year and a half of waking time. Most sessions do not end in a purchase.",
  },
  {
    slug: "how-much-of-your-life-do-you-spend-cooking",
    title: "How much of your life do you spend cooking?",
    date: "2026-04-30",
    readingTime: "3 min",
    excerpt:
      "The average person spends about 40 minutes a day cooking. Over a lifetime that is two and a half waking years in the kitchen. It is one of the few large time categories that actually produces something.",
  },
  {
    slug: "how-much-time-does-the-average-person-spend-on-email",
    title: "How much time does the average person spend on email?",
    date: "2026-04-23",
    readingTime: "3 min",
    excerpt:
      "McKinsey put it at 28 percent of the workweek. Adobe found people self-reporting three hours a day. Either way, across a full career the total approaches five waking years spent in an inbox.",
  },
  {
    slug: "how-much-of-your-life-do-you-spend-working",
    title: "How much of your life do you spend working?",
    date: "2026-04-16",
    readingTime: "3 min",
    excerpt:
      "The standard answer is 40 hours a week. Over a full career that becomes 80,000 hours. In waking years, it is somewhere between 17 and 20 years of your life spent on work and everything that surrounds it.",
  },
  {
    slug: "how-much-time-does-the-average-person-spend-watching-netflix",
    title: "How much time does the average person spend watching Netflix?",
    date: "2026-04-10",
    readingTime: "3 min",
    excerpt:
      "Netflix subscribers watch an average of two hours a day. That is 45 waking days per year. Over a lifetime it becomes more than seven years of conscious time spent on a single streaming platform.",
  },
  {
    slug: "how-much-of-your-life-do-you-spend-on-tiktok",
    title: "How much of your life do you spend on TikTok?",
    date: "2026-04-03",
    readingTime: "3 min",
    excerpt:
      "The average US user spends 54 minutes a day on TikTok. Over a lifetime of use that comes to roughly two waking years. The app is the first major platform built around an algorithm rather than people you chose to follow.",
  },
  {
    slug: "how-much-time-do-you-spend-on-your-phone",
    title: "How much time do you spend on your phone per day?",
    date: "2026-03-27",
    readingTime: "3 min",
    excerpt:
      "The average is close to four hours a day. Most people guess around two. Across a lifetime of smartphone use, the total comes to roughly 15 waking years spent looking at a screen.",
  },
  {
    slug: "how-much-of-your-life-do-you-spend-sleeping",
    title: "How much of your life do you spend sleeping?",
    date: "2026-03-20",
    readingTime: "3 min",
    excerpt:
      "About a third. Over a 79-year life that comes to 25 years spent unconscious. The number bothers most people, and the reason it bothers them says something worth examining.",
  },
  {
    slug: "how-much-time-do-you-spend-on-youtube",
    title: "How much time do you spend on YouTube?",
    date: "2026-03-13",
    readingTime: "3 min",
    excerpt:
      "Regular users spend around 45 minutes a day on YouTube. Over 40 years that is two waking years. The recommendation algorithm drives 70 percent of total watch time, and it is optimised to extend sessions past the point where you would have stopped.",
  },
  {
    slug: "how-much-of-your-life-do-you-spend-on-instagram",
    title: "How much of your life do you spend on Instagram?",
    date: "2026-03-06",
    readingTime: "3 min",
    excerpt:
      "The average person checks Instagram 20 to 30 times a day. Each session feels short. Over ten years, the total approaches 75 days. Over a lifetime of use, it gets closer to six months.",
  },
];

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function Journal() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-24">
      <header className="mb-20">
        <p className="mb-6 font-sans text-[10px] uppercase tracking-[0.36em] text-muted-foreground">
          Journal
        </p>
        <h1 className="font-serif text-4xl italic tracking-tight text-foreground md:text-5xl">
          The long calculation.
        </h1>
        <p className="mt-6 max-w-lg font-serif text-[17px] leading-relaxed text-muted-foreground">
          Articles about time and habit. What the numbers mean in practice.
        </p>
      </header>

      {articles.length === 0 ? (
        <div className="border-t border-border pt-16">
          <p className="font-sans text-[10px] uppercase tracking-[0.32em] text-muted-foreground mb-8">
            Issue I &nbsp;·&nbsp; In preparation
          </p>
          <p className="font-serif text-[17px] leading-[1.85] text-foreground/75 max-w-md">
            The first articles are being written. Each one looks at a single
            habit and runs the numbers.
          </p>
          <p className="mt-4 font-serif text-[17px] leading-[1.85] text-muted-foreground max-w-md">
            Check back soon.
          </p>
          <Link
            to="/"
            className="mt-10 inline-block text-[10px] uppercase tracking-[0.32em] text-foreground transition hover:text-muted-foreground"
          >
            ← Open the calculator
          </Link>
        </div>
      ) : (
        <div className="divide-y divide-border">
          {articles.map((article) => (
            <article key={article.slug} className="py-10">
              <div className="mb-3 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                <time dateTime={article.date}>{formatDate(article.date)}</time>
                <span>·</span>
                <span>{article.readingTime} read</span>
              </div>
              <h2 className="font-serif text-xl italic text-foreground leading-snug">
                <Link
                  to={`/journal/${article.slug}`}
                  className="transition hover:text-muted-foreground"
                >
                  {article.title}
                </Link>
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {article.excerpt}
              </p>
              <Link
                to={`/journal/${article.slug}`}
                className="mt-4 inline-block text-[10px] uppercase tracking-[0.32em] text-foreground transition hover:text-muted-foreground"
              >
                Read →
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
