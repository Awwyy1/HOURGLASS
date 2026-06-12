import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { useTheme } from "../lib/theme";

export function Header() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8 text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="font-serif text-sm normal-case tracking-normal text-foreground italic"
        >
          HOURGLASS<span className="text-muted-foreground">.</span>
        </Link>

        {/* Desktop nav */}
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

        <div className="flex items-center gap-4">
          {/* Theme toggle */}
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

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex flex-col justify-center gap-[5px] md:hidden"
          >
            <span
              className={`block h-px w-5 bg-foreground transition-transform duration-200 origin-center ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-foreground transition-opacity duration-200 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-5 bg-foreground transition-transform duration-200 origin-center ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-border md:hidden">
          <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col gap-7">
            <Link
              to="/philosophy"
              onClick={() => setOpen(false)}
              className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground transition hover:text-foreground [&.active]:text-foreground"
            >
              Philosophy
            </Link>
            <Link
              to="/about"
              onClick={() => setOpen(false)}
              className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground transition hover:text-foreground [&.active]:text-foreground"
            >
              About
            </Link>
            <Link
              to="/journal"
              onClick={() => setOpen(false)}
              className="text-[11px] uppercase tracking-[0.28em] text-muted-foreground transition hover:text-foreground [&.active]:text-foreground"
            >
              Journal
            </Link>
          </div>
        </nav>
      )}
    </>
  );
}
