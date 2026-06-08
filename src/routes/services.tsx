import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Cog, Truck, Tag, Wrench, ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — OEM Spare Parts, Wholesale & Retail | National Agency" },
      {
        name: "description",
        content:
          "OEM quality spare parts, automotive components supply, wholesale distribution, retail sales, and expert parts consultation by National Agency, Bhilwara.",
      },
      { property: "og:title", content: "Our Services — National Agency" },
      {
        property: "og:description",
        content: "OEM spare parts supply, wholesale, retail, and consultation services.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: ShieldCheck,
    title: "OEM Quality Automobile Spare Parts",
    desc: "We supply genuine OEM-grade spare parts that match original equipment specifications for performance, fit, and longevity.",
    points: ["Verified manufacturer sources", "Quality-checked inventory", "Wide vehicle compatibility"],
  },
  {
    icon: Cog,
    title: "Automotive Components Supply",
    desc: "End-to-end supply of engine, transmission, electrical, suspension, braking, and body components for a wide range of vehicles.",
    points: ["Engine & transmission parts", "Electrical & ignition systems", "Suspension & braking components"],
  },
  {
    icon: Truck,
    title: "Wholesale Spare Parts Distribution",
    desc: "Bulk supply for dealers, distributors, and large workshops with competitive trade pricing and reliable dispatch timelines.",
    points: ["Competitive trade pricing", "Bulk order handling", "Pan-India delivery"],
  },
  {
    icon: Tag,
    title: "Retail Spare Parts Sales",
    desc: "Walk-in and remote retail customers get the same OEM quality with fair, transparent pricing and friendly assistance.",
    points: ["Walk-in welcome", "Transparent pricing", "Helpful in-store team"],
  },
  {
    icon: Wrench,
    title: "Automobile Parts Consultation",
    desc: "Not sure which part you need? Our experts help you identify the correct component by vehicle make, model, and application.",
    points: ["Make & model lookup", "Part compatibility checks", "Technical advice"],
  },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="bg-gradient-hero text-brand-foreground">
        <div className="container-x py-20 md:py-24 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Our Services</p>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold">
            Complete Spare Parts Solutions
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-white/80">
            From OEM-grade product supply to expert consultation — everything you need from one trusted source.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x grid gap-8 md:grid-cols-2">
          {services.map((s, i) => (
            <article
              key={s.title}
              className={`rounded-2xl border border-border bg-card p-7 md:p-8 shadow-card hover:shadow-elevated transition ${
                i === services.length - 1 && services.length % 2 === 1 ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex items-start gap-5">
                <div className="grid h-14 w-14 place-items-center rounded-xl bg-gradient-hero text-brand-foreground shrink-0">
                  <s.icon className="h-7 w-7" />
                </div>
                <div className="flex-1">
                  <h2 className="font-display text-xl md:text-2xl font-semibold text-brand">{s.title}</h2>
                  <p className="mt-2 text-muted-foreground leading-relaxed">{s.desc}</p>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary" /> {p}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-primary transition"
                  >
                    Enquire about this service <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gradient-hero text-brand-foreground">
        <div className="container-x text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Need a part we haven't listed?
          </h2>
          <p className="mt-3 text-white/80 max-w-xl mx-auto">
            Our sourcing network is wide. Share your requirement and we'll get back with availability.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-gradient-accent px-6 py-3 text-sm font-semibold text-primary-foreground"
          >
            Send Inquiry <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
