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
          Last updated: May 8, 2026
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
          <h2 className="font-serif text-xl italic text-foreground">Advertising</h2>
          <p>
            This site uses Google AdSense to display advertisements. Google AdSense
            is a service provided by Google LLC. To serve relevant ads, Google and
            its partners use cookies, web beacons, and similar technologies to
            collect information about your visits to this and other websites.
          </p>
          <p>
            This information is used to show you advertisements that may be relevant
            to your interests. It may include your approximate location, the pages
            you visit, and other browsing activity. Google's use of the DoubleClick
            cookie enables it and its partners to serve ads based on your prior
            visits to this site or other sites on the internet.
          </p>
          <p>
            You can opt out of personalised advertising by visiting{" "}
            <a
              href="https://www.google.com/settings/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-foreground transition"
            >
              Google Ads Settings
            </a>
            . You can also opt out of third-party vendor use of cookies for
            personalised advertising by visiting{" "}
            <a
              href="https://www.aboutads.info/choices/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-foreground transition"
            >
              aboutads.info
            </a>
            .
          </p>
          <p>
            For more information on how Google uses data when you use sites that
            use Google services, visit{" "}
            <a
              href="https://policies.google.com/technologies/partner-sites"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-foreground transition"
            >
              Google's Privacy & Terms
            </a>
            .
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-xl italic text-foreground">Cookies</h2>
          <p>
            Cookies are small text files placed on your device by websites you visit.
            We do not set any cookies ourselves. However, third-party services
            embedded in this site, including Google AdSense, may set their own
            cookies independently of us. You can control or delete cookies through
            your browser settings at any time.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-serif text-xl italic text-foreground">Analytics</h2>
          <p>
            We may use web analytics tools to understand aggregate traffic patterns
            on this site, such as which pages are visited most frequently. These
            tools collect anonymised data only and do not identify individual users.
            No personally identifiable information is collected through analytics.
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
