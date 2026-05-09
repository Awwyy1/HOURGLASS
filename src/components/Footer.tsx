import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mx-auto flex max-w-6xl flex-col gap-6 border-t border-border px-6 py-10 md:flex-row md:items-center md:justify-between">
      <span className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
        © {new Date().getFullYear()} HOURGLASS
      </span>
      <span className="font-serif text-xs italic normal-case tracking-normal text-muted-foreground">
        Set in Playfair Display & JetBrains Mono.
      </span>
      <div className="flex items-center gap-6 text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
        <Link to="/privacy" className="transition hover:text-foreground">
          Privacy
        </Link>
        <Link to="/terms" className="transition hover:text-foreground">
          Terms
        </Link>
        <span>Edition I</span>
      </div>
    </footer>
  );
}
