# HOURGLASS

An editorial time calculator. Enter an activity, set how many hours a day you spend on it, and over how many years — HOURGLASS returns the true weight of that habit in days, weeks, and waking years of your life.

## What it does

- Interactive calculator with a single-page, editorial-magazine aesthetic
- Converts daily hours × years into days / weeks / waking years
- Dark / light mode toggle
- Share card — copy a one-line summary of your result to clipboard

## Stack

| Layer | Technology |
|---|---|
| Framework | [TanStack Start](https://tanstack.com/start) (React 19, SSR) |
| Router | TanStack Router (file-based) |
| Styling | Tailwind CSS v4 |
| UI primitives | shadcn/ui + Radix UI |
| Data / forms | TanStack Query · React Hook Form · Zod |
| Fonts | Playfair Display, Inter, JetBrains Mono |
| Build | Vite 7 + Bun |
| Deploy | Cloudflare Workers |

## Getting started

```bash
bun install
bun run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & deploy

```bash
bun run build
bunx wrangler deploy
```

## Scripts

| Command | Description |
|---|---|
| `bun run dev` | Start dev server |
| `bun run build` | Production build |
| `bun run preview` | Preview production build locally |
| `bun run lint` | Run ESLint |
| `bun run format` | Run Prettier |
