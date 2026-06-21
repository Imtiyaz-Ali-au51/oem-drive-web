import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Filter,
  Droplet,
  Disc,
  Wrench,
  Zap,
  Cog,
  Wind,
  Snowflake,
  Car,
  Settings,
  ArrowRight,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — OEM Automobile Spare Parts Catalogue | National Agency" },
      {
        name: "description",
        content:
          "Browse our range of OEM automobile spare parts — service parts, lubricants, braking, suspension, electrical, clutch, wipers, AC, body and engine parts.",
      },
      { property: "og:title", content: "Our Products — National Agency" },
      {
        property: "og:description",
        content:
          "Wide range of OEM quality automobile spare parts across 10+ categories for cars and commercial vehicles.",
      },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

const categories = [
  {
    icon: Filter,
    title: "Service Parts",
    desc: "Routine maintenance filters that keep air, fuel and oil clean for optimal engine health.",
    items: ["Air Filters", "Oil Filters", "Fuel Filters", "Cabin Filters"],
  },
  {
    icon: Droplet,
    title: "Lubricants & Fluids",
    desc: "Engine oils and essential fluids to protect, cool and ensure smooth vehicle operation.",
    items: ["Engine Oil", "Coolant", "Brake Fluid"],
  },
  {
    icon: Disc,
    title: "Braking System",
    desc: "Reliable braking components for safe, consistent stopping power across vehicle types.",
    items: ["Brake Pads", "Brake Discs", "Brake Drums"],
  },
  {
    icon: Wrench,
    title: "Suspension & Steering",
    desc: "Suspension and steering components for ride comfort, stability and precise handling.",
    items: [
      "Control Arms",
      "Ball Joint",
      "Stabilizer Link",
      "Bush Kit",
      "Rear Coil Pad",
      "Jumping Rod Bush",
      "Suspension Bush Kit",
      "Rack End Assembly",
      "Tie Rod Ends",
    ],
  },
  {
    icon: Zap,
    title: "Electrical Parts",
    desc: "Batteries, sensors and lighting components for dependable electrical performance.",
    items: ["Batteries", "Lighting Components", "All Kinds of Bulbs", "Sensors"],
  },
  {
    icon: Cog,
    title: "Clutch & Bearings",
    desc: "Clutch assemblies and a full range of bearings for smooth power transfer and motion.",
    items: ["Clutch & Pressure Assembly", "All Kinds of Bearings"],
  },
  {
    icon: Wind,
    title: "Wipers",
    desc: "Front and rear wiper blades, arms and motors for clear visibility in every season.",
    items: ["Front Wiper", "Rear Wiper", "Rear Wiper with Arm", "Wiper Motor & Accessories"],
  },
  {
    icon: Snowflake,
    title: "AC Parts",
    desc: "Air-conditioning components to keep your cabin cool and the AC system efficient.",
    items: ["AC Compressors", "AC Condensers"],
  },
  {
    icon: Car,
    title: "Body Parts",
    desc: "External body and lighting parts for repairs, replacements and restoration work.",
    items: ["Bumpers", "Mirrors", "Radiators", "Headlights", "Tail Lights"],
  },
  {
    icon: Settings,
    title: "Engine Parts",
    desc: "Core engine internals, belts and rubber components for performance and longevity.",
    items: ["Pistons", "Valves", "All Kinds of Belts & Rubber Parts"],
  },
];

function ProductsPage() {
  return (
    <SiteLayout>
      <section className="bg-gradient-hero text-brand-foreground">
        <div className="container-x py-20 md:py-24 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Our Products</p>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold">
            OEM Spare Parts Catalogue
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-white/80">
            We specialize in a wide range of automotive spare parts across 10+ categories — from
            service filters to engine internals — sourced from trusted OEM manufacturers.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x">
          <SectionHeading
            center
            eyebrow="Browse by Category"
            title="What We Stock"
            subtitle="Every category covers a wide selection of makes and models. Don't see what you need? Ask us — our sourcing network is extensive."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((c) => (
              <article
                key={c.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-card hover:shadow-elevated hover:-translate-y-1 transition"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-hero text-brand-foreground">
                  <c.icon className="h-6 w-6" />
                </div>
                <h2 className="mt-5 font-display text-lg font-semibold text-brand">{c.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {c.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-foreground/80"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-hero text-brand-foreground">
        <div className="container-x text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Looking for a specific part?
          </h2>
          <p className="mt-3 text-white/80 max-w-xl mx-auto">
            Share your vehicle make, model and requirement — we'll respond with availability and pricing.
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
