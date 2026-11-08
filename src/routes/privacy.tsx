import { createFileRoute, Link } from "@tanstack/react-router";
import { PageSEO } from "../components/PageSEO";

export const Route = createFileRoute("/privacy")({
  component: Privacy,
});

function Privacy() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-24">
      <PageSEO
        title="Privacy Policy"
        description="How HOURGLASS handles data. The calculator runs entirely in your browser and nothing you enter is sent anywhere."
      />
      <header className="mb-16">
        <p className="mb-6 font-sans text-[10px] uppercase tracking-[0.36em] text-muted-foreground">
          Legal
        </p>
        <h1 className="font-serif text-4xl italic tracking-tight text-foreground md:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 font-mono text-[10px] text-muted-foreground">
          Last updated: November 8, 2026
        </p>
      </header>

      <div className="space-y-10 text-[16px] leading-[1.85] text-foreground/80">

        <section className="space-y-4">
          <h2 className="font-serif text-xl italic text-foreground">Overview</h2>
          <p>
            HOURGLASS ("we", "us", or "our") operates the website located at
            www.justhourglass.me. This page explains what information is collected
            when you visit the site, how it is used, and what choices you have.
          </p>
          <p>
            We do not collect personal information directly. We do not require
            registration, we do not run email lists, and we do not store any data
            you enter into the calculator. All calculations happen locally in your
            browser and are never transmitted to any server.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-xl italic text-foreground">Analytics</h2>
          <p>
            We use Vercel Web Analytics to understand aggregate traffic: which
            pages are read, which sites send visitors here, and roughly where in
            the world and on what kind of device people read them. It does not
            use cookies and does not track you across other websites. Visits are
            counted using a short-lived anonymous identifier that is discarded
            within a day, so we cannot recognise you on a later visit or identify
            you as a person.
          </p>
          <p>
            The data collected is limited to the page address, the referring
            site, approximate country, and device, browser, and operating system
            type. Nothing you enter into the calculator is included. More detail
            is available in{" "}
            <a
              href="https://vercel.com/docs/analytics/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-foreground transition"
            >
              Vercel's analytics privacy documentation
            </a>
            .
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-xl italic text-foreground">Cookies</h2>
          <p>
            Cookies are small text files placed on your device by websites you visit.
            This site does not set any cookies, and neither does the analytics
            service described above. Your theme preference, if you choose light
            or dark mode, is kept in your browser's local storage and never leaves
            your device.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-xl italic text-foreground">Advertising</h2>
          <p>
            This site does not currently display advertising. If that changes,
            this section will be updated before any advertisements appear, to
            name the provider, describe the information it collects, and explain
            the choices available to you.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-xl italic text-foreground">External links</h2>
          <p>
            Articles on this site may contain links to external websites. We are not
            responsible for the privacy practices or content of those sites. We
            encourage you to read the privacy policy of any site you visit.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-xl italic text-foreground">Children</h2>
          <p>
            This site is not directed at children under the age of 13. We do not
            knowingly collect any information from children under 13. If you believe
            a child has provided information through this site, please contact us
            so we can take appropriate action.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-xl italic text-foreground">Changes to this policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be
            reflected on this page with an updated date at the top. Continued use
            of the site after changes are posted constitutes acceptance of the
            updated policy.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-xl italic text-foreground">Contact</h2>
          <p>
            If you have questions about this Privacy Policy, you can reach us at{" "}
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
          to="/"
          className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground transition hover:text-foreground"
        >
          ← Back to the calculator
        </Link>
        <Link
          to="/terms"
          className="text-[10px] uppercase tracking-[0.32em] text-muted-foreground transition hover:text-foreground"
        >
          Terms of Service →
        </Link>
      </div>
    </article>
  );
}
