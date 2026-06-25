# HOURGLASS — Writing Style Guide

## Voice

Editorial. Calm. Direct. Like a smart person explaining something to another smart person without trying to impress them. No filler words, no hype, no reassurance.

## Hard rules

- **No em dashes** — never, under any circumstances
- **No choppy sentences** — every sentence needs to go somewhere, not just land a punch and stop
- **No AI patterns** — no "it is worth noting", no "it is important to understand", no "in today's world", no "this raises an important question", no rhetorical questions as section openers
- **No bullet-point thinking inside prose** — if you are listing things, write them as a sentence, not as hidden bullets
- **No hedging stacks** — "it could potentially be argued that" → just say the thing
- **No inspirational closing lines** — the last paragraph does not deliver a lesson. It leaves the reader with a number or a fact that does the work

## Structure

Each article follows this pattern:

1. **Lead paragraph** — the number, the source, the scale. No preamble.
2. **Second paragraph** — what that number actually means in lifetime terms
3. **H2 subhead** — italic serif, starts a new angle on the same topic
4. **Body paragraphs** — deepen, complicate, or challenge the lead number
5. **Final paragraph** — muted-foreground class, closes without moralising
6. **FAQ section** — two questions, answered like a person, not a chatbot
7. **Related links** — two articles maximum
8. **Calculator CTA** — always links to `/#calculator`

## Sentence rhythm

Vary length. A long sentence followed by a shorter one is fine. Three long sentences in a row starts to feel academic. Two short sentences in a row starts to sound punchy and false. The test is: read it aloud. If it sounds like a person talking, it is probably right.

## Numbers

Always run the lifetime calculation. The format is:

> At X hours per day / week, over Y years, the total is Z hours — roughly N waking days / months / years.

Waking hours = 16 hours per day (assuming 8 hours sleep). A waking year = 365 × 16 = 5,840 hours.

## Dates

Articles are backdated naturally. Space them 5 to 10 days apart. Do not publish multiple articles on the same date.

## Article metadata

Every article needs:
- `<PageSEO title="..." description="..." />` — unique per article, under 160 chars for description
- `<ArticleSchema ... datePublished="YYYY-MM-DD" slug="..." />`
- `<FAQSection faqs={[...]} />` — two FAQs minimum
- Related articles section — two links
- Calculator CTA block
- Bottom nav (← Open the calculator / All articles →)

## What this site is not

Not a productivity blog. Not a self-help site. Not a wellness publication. HOURGLASS calculates time and presents the results without telling people what to do about them. The articles follow the same principle: here is the number, here is where it comes from, here is what it looks like at scale. The reader decides what to do with that.
