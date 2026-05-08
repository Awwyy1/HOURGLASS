import { Link } from "@tanstack/react-router";

interface Crumb {
  label: string;
  to?: string;
}

export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav className="mb-12 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
      {crumbs.map((crumb, i) => (
        <span key={i} className="flex items-center gap-2">
          {i > 0 && <span className="opacity-40">/</span>}
          {crumb.to ? (
            <Link to={crumb.to} className="transition hover:text-foreground">
              {crumb.label}
            </Link>
          ) : (
            <span className="text-foreground truncate max-w-[200px]">{crumb.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
