import { useEffect } from "react";

const SITE = "https://www.justhourglass.me";

interface Props {
  title: string;
  description: string;
  datePublished: string;
  slug: string;
  /** Defaults to datePublished when the piece has not been revised. */
  dateModified?: string;
}

export function ArticleSchema({
  title,
  description,
  datePublished,
  slug,
  dateModified,
}: Props) {
  useEffect(() => {
    const id = "article-schema-ld";
    document.getElementById(id)?.remove();

    const url = `${SITE}/journal/${slug}`;
    const publisher = {
      "@type": "Organization",
      name: "HOURGLASS",
      url: SITE,
      logo: {
        "@type": "ImageObject",
        url: `${SITE}/favicon.svg`,
      },
    };

    const script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: title,
      description,
      datePublished,
      dateModified: dateModified ?? datePublished,
      articleSection: "Journal",
      inLanguage: "en",
      isAccessibleForFree: true,
      image: {
        "@type": "ImageObject",
        url: `${SITE}/og/${slug}.png`,
        width: 1200,
        height: 630,
      },
      author: publisher,
      publisher,
      url,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
    });
    document.head.appendChild(script);

    return () => {
      document.getElementById(id)?.remove();
    };
  }, [title, description, datePublished, dateModified, slug]);

  return null;
}
