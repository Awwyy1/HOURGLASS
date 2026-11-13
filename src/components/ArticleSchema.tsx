import { useEffect, useMemo } from "react";
import { SITE, injectJsonLd, reportJsonLd } from "../lib/head";

interface Props {
  title: string;
  description: string;
  datePublished: string;
  slug: string;
  /** Defaults to datePublished when the piece has not been revised. */
  dateModified?: string;
}

const ID = "article-schema-ld";

export function ArticleSchema({ title, description, datePublished, slug, dateModified }: Props) {
  const data = useMemo(() => {
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
    return {
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
    };
  }, [title, description, datePublished, dateModified, slug]);

  reportJsonLd(ID, data);
  useEffect(() => injectJsonLd(ID, data), [data]);

  return null;
}
