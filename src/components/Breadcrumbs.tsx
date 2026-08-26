import { useEffect } from "react";
import { Link } from "@tanstack/react-router";

const SITE = "https://www.justhourglass.me";

interface Crumb {
  label: string;
  to?: string;
}

export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  // Callers pass an inline array, so depend on the contents rather than the
  // array identity, which changes on every render.
  const key = JSON.stringify(crumbs);

  // Emit BreadcrumbList alongside the visible trail, so results can show
  // Hourglass › Journal › Article instead of a bare URL.
  useEffect(() => {
    const id = "breadcrumb-schema-ld";
    document.getElementById(id)?.remove();

    const items: Crumb[] = JSON.parse(key);
    const script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((crumb, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: crumb.label,
        // The final crumb is the current page and carries no item, per spec.
        ...(crumb.to
          ? { item: SITE + (crumb.to === "/" ? "" : crumb.to) }
          : {}),
      })),
    });
    document.head.appendChild(script);

    return () => {
      document.getElementById(id)?.remove();
    };
  }, [key]);

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
