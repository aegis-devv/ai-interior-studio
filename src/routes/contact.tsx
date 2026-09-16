import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Phone } from "lucide-react";
import { PageIntro } from "@/components/site-shell";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Direct Line & Studio — Atelier Verve" },
      {
        name: "description",
        content:
          "Connect directly with Atelier Verve for residential, hospitality or commercial interior commissions in Lisbon and internationally.",
      },
      { property: "og:title", content: "Direct Line & Studio — Atelier Verve" },
      {
        property: "og:description",
        content:
          "Begin a focused conversation about your site, timing and the way you want to live.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="New commissions"
        title={
          <>
            Begin with<br />
            <span className="italic text-primary">the site.</span>
          </>
        }
      >
        Send us the plan, the problem or simply the feeling that something is not working. We reply personally within two studio days.
      </PageIntro>

      <section className="px-5 pb-28 sm:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            {/* Left Context Column */}
            <div className="space-y-6 lg:col-span-5">
              <div className="border-t border-border pt-6">
                <p className="text-label text-primary">Direct dialogue</p>
                <h2 className="mt-4 font-display text-3xl font-light sm:text-4xl">
                  Every commission begins with a conversation.
                </h2>
                <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                  We work closely with clients on residential transformations, boutique hospitality, and architectural interventions. Reach out through our direct studio line or message us directly on WhatsApp to discuss your space.
                </p>
              </div>

              <div className="border-t border-border pt-6">
                <p className="text-label text-muted-foreground">Response time</p>
                <p className="mt-2 text-sm leading-6 text-foreground">
                  Direct inquiries are answered personally by our partners within 48 studio hours.
                </p>
              </div>
            </div>

            {/* Right Contact Card Panel */}
            <div className="lg:col-span-7">
              <div className="glass-panel p-7 sm:p-10 lg:p-12">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/80 pb-6">
                  <div>
                    <p className="text-label text-primary">Direct line</p>
                    <p className="mt-1 font-display text-2xl font-light sm:text-3xl">Atelier Verve Studio</p>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs text-primary">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Lisbon · 09:30—17:30 WET
                  </span>
                </div>

                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Button asChild variant="solid" size="wide" className="w-full sm:flex-1">
                    <a
                      href="https://wa.me/351910000000?text=Hello%20Atelier%20Verve%2C%20I%27d%20like%20to%20discuss%20an%20interior%20project."
                      target="_blank"
                      rel="noreferrer"
                    >
                      <MessageCircle aria-hidden="true" className="mr-2 h-4 w-4" />
                      WhatsApp inquiry
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="wide" className="w-full sm:flex-1">
                    <a href="tel:+351910000000">
                      <Phone aria-hidden="true" className="mr-2 h-4 w-4" />
                      Call the studio
                    </a>
                  </Button>
                </div>

                <dl className="mt-10 grid gap-8 border-t border-border/80 pt-8 sm:grid-cols-3">
                  <div>
                    <dt className="text-label text-muted-foreground">Studio</dt>
                    <dd className="mt-2 text-sm leading-6 text-foreground">
                      Rua do Alecrim 48<br />
                      1200-018 Lisbon, Portugal
                    </dd>
                  </div>

                  <div>
                    <dt className="text-label text-muted-foreground">Hours</dt>
                    <dd className="mt-2 text-sm leading-6 text-foreground">
                      Monday—Friday<br />
                      09:30—17:30 WET
                    </dd>
                  </div>

                  <div>
                    <dt className="text-label text-muted-foreground">Email</dt>
                    <dd className="mt-2 text-sm leading-6">
                      <a
                        href="mailto:studio@atelierverve.com"
                        className="text-foreground underline decoration-primary underline-offset-4 transition-colors hover:text-primary"
                      >
                        studio@atelierverve.com
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>

              <p className="mt-5 text-xs leading-5 text-muted-foreground">
                Demo contact details are illustrative and should be replaced before launch.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}