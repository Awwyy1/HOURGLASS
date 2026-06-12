import { useEffect } from "react";

interface Props {
  title: string;
  description: string;
  datePublished: string;
  slug: string;
}

export function ArticleSchema({ title, description, datePublished, slug }: Props) {
  useEffect(() => {
    const existing = document.getElementById("article-schema-ld");
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.id = "article-schema-ld";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: title,
      description: description,
      datePublished: datePublished,
      author: { "@type": "Organization", name: "HOURGLASS", url: "https://www.justhourglass.me" },
      publisher: { "@type": "Organization", name: "HOURGLASS", url: "https://www.justhourglass.me" },
      url: `https://www.justhourglass.me/journal/${slug}`,
      mainEntityOfPage: { "@type": "WebPage", "@id": `https://www.justhourglass.me/journal/${slug}` },
    });
    document.head.appendChild(script);

    return () => { document.getElementById("article-schema-ld")?.remove(); };
  }, [title, description, datePublished, slug]);

  return null;
}
