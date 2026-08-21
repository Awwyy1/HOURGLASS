import { createFileRoute, Link } from "@tanstack/react-router";
import { Breadcrumbs } from "../../components/Breadcrumbs";
import { PageSEO } from "../../components/PageSEO";
import { ArticleSchema } from "../../components/ArticleSchema";
import { FAQSection } from "../../components/FAQSection";

export const Route = createFileRoute(
  "/journal/how-much-time-do-you-spend-looking-for-lost-things",
)({
  component: Article,
});

function Article() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-24">
      <PageSEO
        title="How much time do you spend looking for lost things?"
        description="Surveys put the average American at around two and a half days a year hunting for misplaced keys, phones, and wallets. Over a lifetime that is roughly seven months, and it is the only total here that returns nothing at all."
        ogType="article"
      />
      <ArticleSchema
        title="How much time do you spend looking for lost things?"
        description="Surveys put the average American at around two and a half days a year hunting for misplaced keys, phones, and wallets. Over a lifetime that is roughly seven months, and it is the only total here that returns nothing at all."
        datePublished="2026-08-21"
        slug="how-much-time-do-you-spend-looking-for-lost-things"
      />
      <Breadcrumbs
        crumbs={[
          { label: "Hourglass", to: "/" },
          { label: "Journal", to: "/journal" },
          { label: "How much time do you spend looking for lost things?" },
        ]}
      />

      <header className="mb-16">
        <div className="mb-6 flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          <time dateTime="2026-08-21">August 21, 2026</time>
          <span>·</span>
          <span>3 min read</span>
        </div>
        <h1 className="font-serif text-4xl italic tracking-tight text-foreground md:text-5xl leading-tight">
          How much time do you spend looking for lost things?
        </h1>
        <p className="mt-6 font-serif text-[17px] leading-relaxed text-muted-foreground">
          This is the smallest number in the journal, and the only one that
          produces nothing whatsoever in exchange for the hours it takes.
        </p>
      </header>

      <div className="text-[17px] leading-[1.85] text-foreground/85 space-y-6">
        <p>
          Consumer surveys on misplaced possessions converge on a figure of
          roughly two and a half days per year spent searching for things that
          are somewhere in the house. Phones, keys, wallets, glasses, and remote
          controls account for most of it, in approximately that order. Two and a
          half days works out to about sixty hours a year, which is a little over
          nine minutes a day averaged out, arriving in bursts of three minutes
          and occasional bursts of forty.
        </p>

        <p>
          Sixty hours a year across sixty adult years comes to 3,600 hours, or
          roughly 225 waking days. Around seven months of a life spent looking
          for objects that were never actually lost, only temporarily unlocated.
          Set beside the twenty waking years this journal attributes to solitude
          or the thirty-three to sitting, seven months is genuinely small. It
          earns a place here for a different reason.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          The only category with no return at all.
        </h2>

        <p>
          Almost everything measured in this journal gives something back, even
          the entries people feel worst about. Sleep maintains the body. Chores
          produce a functioning home. Commuting delivers you to work. Scrolling
          at least offers diversion, however thin. Even{" "}
          <Link
            to="/journal/how-much-time-do-you-spend-waiting"
            className="underline underline-offset-2 hover:text-muted-foreground transition"
          >
            waiting in a queue
          </Link>{" "}
          ends with the thing you were queueing for.
        </p>

        <p>
          Searching for your keys returns you precisely to the state you were in
          before you lost them. It creates nothing, maintains nothing, and
          delivers nothing. It is pure friction, and it is also the category most
          reliably accompanied by irritation, which makes the real cost somewhat
          higher than the clock suggests. Nine minutes of calm is not the same
          as nine minutes of increasingly annoyed searching before leaving the
          house.
        </p>

        <h2 className="pt-8 font-serif text-2xl italic text-foreground">
          Why it happens, and why it is unusually fixable.
        </h2>

        <p>
          Memory research offers a straightforward explanation. Objects put down
          during an automatic action are rarely encoded into memory at all,
          because attention was elsewhere. You did not forget where you put the
          keys. You never registered it, which is why the harder you try to
          recall the moment, the less there is to find. This is also why
          searching often ends with the object somewhere you have already looked.
        </p>

        <p>
          The consequence is that willpower is the wrong tool. Trying to
          concentrate harder on where you are putting things fails, because the
          failure happens precisely when concentration is absent. What works is
          removing the decision entirely: one designated place for each of the
          five or six items that account for nearly all the searching, used
          without exception. It is among the very few totals in this journal that
          a person can cut by most of its size, with a hook by the door, in an
          afternoon.
        </p>

        <p className="text-muted-foreground">
          Seven months, give or take, spent finding things that were already in
          the house. It is the smallest figure here and the only one where the
          honest recommendation is simply to reduce it, because unlike sleep or
          chores or even scrolling, there is nothing on the other side of the
          ledger to weigh against it.
        </p>
      </div>

      <FAQSection
        faqs={[
          {
            q: "How much time does the average person spend looking for lost items?",
            a: "Consumer surveys put it at around two and a half days a year, which is about sixty hours, or a little over nine minutes a day when averaged out. Phones, keys, wallets, glasses, and remote controls account for the large majority of searches. Across sixty adult years the total comes to roughly 3,600 hours, or about seven months of waking time."
          },
          {
            q: "Why do we forget where we put things?",
            a: "Because the moment was usually never recorded. Objects set down during an automatic action, while talking, thinking about something else, or walking through a door, tend not to be encoded into memory at all, since attention was elsewhere. That is why straining to recall the moment rarely helps and why the item frequently turns up somewhere already searched. It also explains why trying harder to pay attention does not work as a fix: the lapse happens exactly when attention is unavailable. Designating one fixed place for the handful of items involved removes the need for memory entirely."
          },
        ]}
      />

      <div className="mt-14 border-t border-border pt-10">
        <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
          Related
        </p>
        <div className="space-y-3">
          <Link
            to="/journal/how-much-time-do-you-spend-waiting"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much time do you spend waiting in a lifetime? →
          </Link>
          <Link
            to="/journal/how-much-time-do-you-spend-on-household-chores"
            className="block font-serif text-lg italic text-foreground transition hover:text-muted-foreground"
          >
            How much time do you spend on household chores? →
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
