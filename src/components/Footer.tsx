export function Footer() {
  return (
    <footer className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-border px-6 py-10 text-[10px] uppercase tracking-[0.32em] text-muted-foreground md:flex-row">
      <span>© {new Date().getFullYear()} HOURGLASS</span>
      <span className="font-serif text-xs italic normal-case tracking-normal">
        Set in Playfair Display & JetBrains Mono.
      </span>
      <span>Edition I</span>
    </footer>
  );
}
