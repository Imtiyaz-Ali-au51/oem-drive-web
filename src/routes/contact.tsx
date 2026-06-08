import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, MessageCircle, Mail, Clock } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ContactForm } from "@/components/site/ContactForm";
import { MapEmbed } from "@/components/site/MapEmbed";
import { siteConfig, waLink } from "@/lib/site-config";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — National Agency | OEM Spare Parts, Bhilwara" },
      {
        name: "description",
        content:
          "Contact National Agency for OEM quality automobile spare parts in Bhilwara, Rajasthan. Call, WhatsApp, or send an inquiry — we respond fast.",
      },
      { property: "og:title", content: "Contact National Agency" },
      { property: "og:description", content: "Reach our team for spare parts inquiries and quotes." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <section className="bg-gradient-hero text-brand-foreground">
        <div className="container-x py-20 md:py-24 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Contact</p>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold">
            Let's Talk Spare Parts.
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-white/80">
            Call us, WhatsApp us, or fill the form — our team will respond promptly with availability and pricing.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          {/* Info cards */}
          <div className="grid gap-5 content-start">
            <SectionHeading eyebrow="Reach Us" title="Multiple Ways to Connect" />
            <div className="grid gap-4">
              <InfoCard icon={MapPin} title="Visit Our Office">
                {siteConfig.address.full}
              </InfoCard>
              <InfoCard icon={Phone} title="Phone">
                <div className="grid gap-1">
                  {siteConfig.phones.map((p) => (
                    <a key={p} href={`tel:+91${p}`} className="hover:text-primary transition">
                      +91 {p}
                    </a>
                  ))}
                </div>
              </InfoCard>
              <InfoCard icon={MessageCircle} title="WhatsApp">
                <a href={waLink} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                  {siteConfig.whatsappDisplay}
                </a>
              </InfoCard>
              <InfoCard icon={Mail} title="Email">
                <a href={`mailto:${siteConfig.email}`} className="hover:text-primary">
                  {siteConfig.email}
                </a>
              </InfoCard>
              <InfoCard icon={Clock} title="Business Hours">
                {siteConfig.hours}
              </InfoCard>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-card">
            <SectionHeading
              eyebrow="Send an Inquiry"
              title="Tell us what you need"
              subtitle="Share your part requirement and vehicle details. We'll reply with availability and a quote."
            />
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="pb-20">
        <div className="container-x">
          <SectionHeading center eyebrow="Find Us" title="Our Location in Bhilwara" />
          <div className="mt-10">
            <MapEmbed />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function InfoCard({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 hover:border-primary/40 transition">
      <div className="grid h-11 w-11 place-items-center rounded-lg bg-gradient-accent text-primary-foreground shrink-0">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h3 className="font-display text-sm font-semibold text-brand">{title}</h3>
        <div className="mt-1 text-sm text-muted-foreground">{children}</div>
      </div>
    </div>
  );
}
