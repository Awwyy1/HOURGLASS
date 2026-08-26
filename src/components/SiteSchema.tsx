import { useEffect } from "react";

const SITE = "https://www.justhourglass.me";

/**
 * Identifies the publisher and the calculator itself.
 *
 * Nothing on the site previously told a machine what HOURGLASS is. Answer
 * engines cite sources they can name, so an unidentified domain is a weaker
 * citation candidate than one with a declared publisher. Rendered once, on
 * the homepage.
 */
export function SiteSchema() {
  useEffect(() => {
    const id = "site-schema-ld";
    document.getElementById(id)?.remove();

    const organization = {
      "@type": "Organization",
      "@id": `${SITE}/#organization`,
      name: "HOURGLASS",
      url: SITE,
      logo: {
        "@type": "ImageObject",
        url: `${SITE}/favicon.svg`,
      },
      description:
        "An editorial calculator that converts daily habits into lifetime totals.",
    };

    const script = document.createElement("script");
    script.id = id;
    script.type = "application/ld+json";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        organization,
        {
          "@type": "WebSite",
          "@id": `${SITE}/#website`,
          name: "HOURGLASS",
          url: SITE,
          description:
            "An editorial calculator that converts daily habits into lifetime totals. Find out how many days, weeks, and waking years a single habit quietly consumes.",
          inLanguage: "en",
          publisher: { "@id": `${SITE}/#organization` },
        },
        {
          "@type": "WebApplication",
          "@id": `${SITE}/#calculator`,
          name: "HOURGLASS time calculator",
          url: SITE,
          applicationCategory: "UtilitiesApplication",
          operatingSystem: "Any",
          browserRequirements: "Requires JavaScript",
          description:
            "Enter an activity, the hours a day it takes, and the number of years, and the calculator returns the total in days, weeks, and waking years.",
          isAccessibleForFree: true,
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
          },
          publisher: { "@id": `${SITE}/#organization` },
        },
      ],
    });
    document.head.appendChild(script);

    return () => {
      document.getElementById(id)?.remove();
    };
  }, []);

  return null;
}
