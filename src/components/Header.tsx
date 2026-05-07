import { Link } from "@tanstack/react-router";
import { useTheme } from "../lib/theme";

export function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
      <Link
        to="/"
        className="font-serif text-sm normal-case tracking-normal text-foreground italic"
      >
        HOURGLASS<span className="text-muted-foreground">.</span>
      </Link>
      <nav className="hidden items-center gap-10 md:flex">
        <Link
          to="/philosophy"
          className="transition hover:text-foreground [&.active]:text-foreground"
        >
          Philosophy
        </Link>
        <Link
          to="/about"
          className="transition hover:text-foreground [&.active]:text-foreground"
        >
          About
        </Link>
        <Link
          to="/journal"
          className="transition hover:text-foreground [&.active]:text-foreground"
        >
          Journal
        </Link>
      </nav>
      <div className="flex items-center gap-1 border border-border">
        <button
          onClick={() => setTheme("light")}
          aria-label="Light mode"
          className={`px-3 py-1.5 text-[10px] tracking-[0.28em] transition ${
            theme === "light"
              ? "bg-foreground text-background"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Light
        </button>
        <button
          onClick={() => setTheme("dark")}
          aria-label="Dark mode"
          className={`px-3 py-1.5 text-[10px] tracking-[0.28em] transition ${
            theme === "dark"
              ? "bg-foreground text-background"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Dark
        </button>
      </div>
    </header>
  );
}
