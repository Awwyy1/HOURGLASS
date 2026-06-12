import { useEffect } from "react";

interface FAQ {
  q: string;
  a: string;
}

export function FAQSection({ faqs }: { faqs: FAQ[] }) {
  useEffect(() => {
    const existing = document.getElementById("faq-schema-ld");
    if (existing) existing.remove();

    const script = document.createElement("script");
    script.id = "faq-schema-ld";
    script.type = "application/ld+json";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    });
    document.head.appendChild(script);

    return () => { document.getElementById("faq-schema-ld")?.remove(); };
  }, [faqs]);

  return (
    <div className="mt-14 border-t border-border pt-10">
      <p className="mb-8 font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
        Questions
      </p>
      <div className="space-y-8">
        {faqs.map((faq, i) => (
          <div key={i}>
            <h3 className="font-serif text-lg italic text-foreground mb-3">{faq.q}</h3>
            <p className="text-[16px] leading-[1.8] text-foreground/75">{faq.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
