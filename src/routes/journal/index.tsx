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
    slug: "how-much-time-does-the-average-person-spend-on-email",
    title: "How much time does the average person spend on email?",
    date: "2026-05-08",
    readingTime: "6 min",
    excerpt:
      "McKinsey put it at 28 percent of the workweek. Adobe found people self-reporting three hours a day. Either way, across a full career the total approaches five waking years spent in an inbox.",
  },
  {
    slug: "how-much-of-your-life-do-you-spend-working",
    title: "How much of your life do you spend working?",
    date: "2026-05-08",
    readingTime: "7 min",
    excerpt:
      "The standard answer is 40 hours a week. Over a full career that becomes 80,000 hours. In waking years, it is somewhere between 17 and 20 years of your life spent on work and everything that surrounds it.",
  },
  {
    slug: "how-much-of-your-life-do-you-spend-on-instagram",
    title: "How much of your life do you spend on Instagram?",
    date: "2026-05-07",
    readingTime: "6 min",
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
