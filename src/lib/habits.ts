import { LIFETIMES, type Lifetime } from "./lifetimes.gen";

/**
 * Names and groups for every habit the journal measures. The numbers come
 * from src/lib/lifetimes.gen.ts (built from each article's figure); this
 * file only says what to call each habit and where it belongs.
 */

export const GROUPS = [
  "Screens",
  "Work and school",
  "Upkeep",
  "On the move",
  "Body and rest",
  "People and culture",
] as const;
export type Group = (typeof GROUPS)[number];

interface Meta {
  /** Short id used in links, e.g. /calculator?habit=phone */
  id: string;
  /** Name in lists and rankings. */
  label: string;
  /** Follows "MY" on a share card, e.g. "phone" -> MY PHONE. */
  card: string;
  group: Group;
}

const META: Record<string, Meta> = {
  "how-much-time-do-you-spend-on-your-phone": {
    id: "phone",
    label: "A phone",
    card: "phone",
    group: "Screens",
  },
  "how-much-time-do-you-spend-on-your-phone-in-bed": {
    id: "phone-in-bed",
    label: "A phone in bed",
    card: "phone in bed",
    group: "Screens",
  },
  "how-much-time-does-the-average-person-spend-on-social-media": {
    id: "social-media",
    label: "Social media",
    card: "social media",
    group: "Screens",
  },
  "how-much-of-your-life-do-you-spend-on-tiktok": {
    id: "tiktok",
    label: "TikTok",
    card: "TikTok",
    group: "Screens",
  },
  "how-much-of-your-life-do-you-spend-on-instagram": {
    id: "instagram",
    label: "Instagram",
    card: "Instagram",
    group: "Screens",
  },
  "how-much-time-do-you-spend-on-youtube": {
    id: "youtube",
    label: "YouTube",
    card: "YouTube",
    group: "Screens",
  },
  "how-much-time-does-the-average-person-spend-watching-netflix": {
    id: "netflix",
    label: "Netflix",
    card: "Netflix",
    group: "Screens",
  },
  "how-much-of-your-life-do-you-spend-on-facebook": {
    id: "facebook",
    label: "Facebook",
    card: "Facebook",
    group: "Screens",
  },
  "how-much-time-do-you-spend-on-twitter-x": {
    id: "twitter",
    label: "Twitter / X",
    card: "Twitter / X",
    group: "Screens",
  },
  "how-much-time-do-you-spend-on-linkedin": {
    id: "linkedin",
    label: "LinkedIn",
    card: "LinkedIn",
    group: "Screens",
  },
  "how-much-of-your-life-do-you-spend-playing-video-games": {
    id: "gaming",
    label: "Video games",
    card: "gaming",
    group: "Screens",
  },
  "how-much-of-your-life-do-you-spend-on-your-laptop": {
    id: "computer",
    label: "A laptop or desktop",
    card: "computer time",
    group: "Screens",
  },
  "how-much-time-do-you-spend-using-ai": {
    id: "ai",
    label: "Using AI",
    card: "AI use",
    group: "Screens",
  },
  "how-much-time-do-you-spend-texting": {
    id: "texting",
    label: "Texting",
    card: "texting",
    group: "Screens",
  },
  "how-much-time-do-you-spend-on-video-calls": {
    id: "video-calls",
    label: "Video calls",
    card: "video calls",
    group: "Screens",
  },
  "how-much-time-do-you-spend-on-dating-apps": {
    id: "dating-apps",
    label: "Dating apps",
    card: "dating apps",
    group: "Screens",
  },
  "how-much-of-your-life-do-you-spend-reading-news": {
    id: "news",
    label: "Reading the news",
    card: "news reading",
    group: "Screens",
  },
  "how-much-of-your-life-do-you-spend-working": {
    id: "work",
    label: "Work",
    card: "work",
    group: "Work and school",
  },
  "how-much-of-your-life-do-you-spend-in-meetings": {
    id: "meetings",
    label: "Meetings",
    card: "meetings",
    group: "Work and school",
  },
  "how-much-time-does-the-average-person-spend-on-email": {
    id: "email",
    label: "Email",
    card: "email",
    group: "Work and school",
  },
  "how-much-of-your-life-do-you-spend-in-school": {
    id: "school",
    label: "School",
    card: "time in school",
    group: "Work and school",
  },
  "how-much-time-do-you-spend-on-household-chores": {
    id: "chores",
    label: "Household chores",
    card: "chores",
    group: "Upkeep",
  },
  "how-much-of-your-life-do-you-spend-cooking": {
    id: "cooking",
    label: "Cooking",
    card: "cooking",
    group: "Upkeep",
  },
  "how-much-of-your-life-do-you-spend-eating": {
    id: "eating",
    label: "Eating",
    card: "meals",
    group: "Upkeep",
  },
  "how-much-time-do-you-spend-grocery-shopping": {
    id: "groceries",
    label: "Grocery shopping",
    card: "grocery runs",
    group: "Upkeep",
  },
  "how-much-time-do-you-spend-getting-ready": {
    id: "getting-ready",
    label: "Getting ready",
    card: "morning routine",
    group: "Upkeep",
  },
  "how-much-of-your-life-do-you-spend-in-the-shower": {
    id: "shower",
    label: "Showering",
    card: "showers",
    group: "Upkeep",
  },
  "how-much-time-do-you-spend-looking-for-lost-things": {
    id: "lost-things",
    label: "Looking for lost things",
    card: "lost-keys hunts",
    group: "Upkeep",
  },
  "how-much-time-do-you-spend-shopping-online": {
    id: "shopping-online",
    label: "Shopping online",
    card: "online shopping",
    group: "Upkeep",
  },
  "how-much-time-do-you-spend-waiting": {
    id: "waiting",
    label: "Waiting",
    card: "time waiting",
    group: "On the move",
  },
  "how-much-of-your-life-do-you-spend-at-red-lights": {
    id: "red-lights",
    label: "Red lights",
    card: "red lights",
    group: "On the move",
  },
  "how-much-time-do-you-spend-stuck-in-traffic": {
    id: "traffic",
    label: "Stuck in traffic",
    card: "traffic jams",
    group: "On the move",
  },
  "how-much-of-your-life-do-you-spend-driving": {
    id: "driving",
    label: "Driving",
    card: "driving",
    group: "On the move",
  },
  "how-much-of-your-life-do-you-spend-commuting": {
    id: "commuting",
    label: "Commuting",
    card: "commute",
    group: "On the move",
  },
  "how-much-of-your-life-do-you-spend-sleeping": {
    id: "sleep",
    label: "Sleep",
    card: "sleep",
    group: "Body and rest",
  },
  "how-much-of-your-life-do-you-spend-sitting": {
    id: "sitting",
    label: "Sitting",
    card: "time sitting",
    group: "Body and rest",
  },
  "how-much-of-your-life-do-you-spend-exercising": {
    id: "exercise",
    label: "Exercise",
    card: "workouts",
    group: "Body and rest",
  },
  "how-much-time-do-you-spend-with-your-friends": {
    id: "friends",
    label: "Friends",
    card: "time with friends",
    group: "People and culture",
  },
  "how-much-time-do-you-spend-alone": {
    id: "alone",
    label: "Time alone",
    card: "time alone",
    group: "People and culture",
  },
  "how-much-time-do-you-have-left-with-your-parents": {
    id: "parents",
    label: "Visits with your parents",
    card: "visits home",
    group: "People and culture",
  },
  "how-much-time-do-you-spend-listening-to-music": {
    id: "music",
    label: "Music",
    card: "music",
    group: "People and culture",
  },
  "how-many-spotify-wrapped-minutes-is-normal": {
    id: "spotify",
    label: "Spotify",
    card: "streaming",
    group: "People and culture",
  },
  "how-much-time-do-you-spend-listening-to-podcasts": {
    id: "podcasts",
    label: "Podcasts",
    card: "podcasts",
    group: "People and culture",
  },
  "how-much-time-do-you-spend-reading-books": {
    id: "books",
    label: "Reading books",
    card: "reading",
    group: "People and culture",
  },
  "how-much-time-do-you-spend-watching-sports": {
    id: "sports",
    label: "Watching sports",
    card: "sports on TV",
    group: "People and culture",
  },
};

export interface Habit extends Lifetime, Meta {}

export const HABITS: Habit[] = LIFETIMES.map((r) => {
  const m = META[r.slug] ?? {
    id: r.slug,
    label: r.title,
    card: r.title.toLowerCase(),
    group: "People and culture" as Group,
  };
  return { ...r, ...m };
});

export const habitBySlug = (slug: string) => HABITS.find((h) => h.slug === slug);
export const habitById = (id: string) => HABITS.find((h) => h.id === id);
export const labelFor = (slug: string, fallback: string) => META[slug]?.label ?? fallback;
