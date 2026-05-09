import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  component: Terms,
});

function Terms() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-24">
      <header className="mb-16">
        <p className="mb-6 font-sans text-[10px] uppercase tracking-[0.36em] text-muted-foreground">
          Legal
        </p>
        <h1 className="font-serif text-4xl italic tracking-tight text-foreground md:text-5xl">
          Terms of Service
        </h1>
        <p className="mt-4 font-mono text-[10px] text-muted-foreground">
          Last updated: May 8, 2026
        </p>
      </header>

      <div className="space-y-10 text-[16px] leading-[1.85] text-foreground/80">

        <section className="space-y-4">
          <h2 className="font-serif text-xl italic text-foreground">Agreement</h2>
          <p>
            By accessing or using www.justhourglass.me, you agree to be bound
            by these Terms of Service. If you do not agree, please do not use
            the site. We reserve the right to update these terms at any time.
            Continued use of the site after changes are posted constitutes
            acceptance of the updated terms.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-xl italic text-foreground">Use of the site</h2>
          <p>
            HOURGLASS provides a calculator and editorial content about time
            and habit. The site is intended for personal, non-commercial use.
            You may not use the site in any way that violates applicable laws,
            infringes on the rights of others, or interferes with the site's
            normal operation.
          </p>
          <p>
            The calculator results are provided for informational purposes only.
            All calculations are estimates based on inputs you provide. We make
            no representations about the accuracy of results for any specific
            individual.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-xl italic text-foreground">Intellectual property</h2>
          <p>
            All content on this site, including articles, design, code, and copy,
            is owned by HOURGLASS or its content providers and is protected by
            applicable intellectual property laws. You may not reproduce, distribute,
            or create derivative works from site content without prior written
            permission.
          </p>
          <p>
            Brief quotations with attribution and a link to the original article
            are permitted for editorial, journalistic, or educational purposes.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-xl italic text-foreground">Disclaimer</h2>
          <p>
            This site is provided on an "as is" and "as available" basis without
            warranties of any kind, either express or implied. We do not warrant
            that the site will be uninterrupted, error-free, or free of harmful
            components.
          </p>
          <p>
            The articles and editorial content on this site are for general
            informational purposes only and do not constitute professional advice
            of any kind. Statistics cited in articles are sourced from third-party
            research and may not reflect the most current data available.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-xl italic text-foreground">Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, HOURGLASS shall not be liable
            for any indirect, incidental, special, consequential, or punitive
            damages arising from your use of, or inability to use, this site or
            its content.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-xl italic text-foreground">Third-party links and ads</h2>
          <p>
            This site may contain links to third-party websites and advertisements
            served by third-party networks including Google AdSense. We have no
            control over the content or practices of third-party sites and are not
            responsible for any content, products, or services they offer. Links
            do not constitute endorsement.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-xl italic text-foreground">Governing law</h2>
          <p>
            These terms are governed by applicable law. Any disputes arising from
            these terms or your use of the site shall be resolved in accordance
            with the laws of the jurisdiction in which the site operator is based.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-xl italic text-foreground">Contact</h2>
          <p>
            Questions about these terms can be directed to{" "}
            <a
              href="mailto:hello@justhourglass.me"
              className="underline underline-offset-2 hover:text-foreground transition"
            >
              hello@justhourglass.me
            </a>
            .
          </p>
        </section>

      </div>

      <div className="mt-20 border-t border-border pt-10 flex items-center justify-between">
        <Link
          to="/privacy"
          className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground transition hover:text-foreground"
        >
          ← Privacy Policy
        </Link>
        <Link
          to="/"
          className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground transition hover:text-foreground"
        >
          Back to the calculator →
        </Link>
      </div>
    </article>
  );
}
