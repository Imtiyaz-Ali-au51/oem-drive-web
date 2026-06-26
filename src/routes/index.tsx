import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  Truck,
  Wrench,
  Award,
  Users,
  Tag,
  ArrowRight,
  ArrowLeft,
  ArrowRight as ArrowRightIcon,
  Cog,
  CheckCircle2,
  Phone,
  MessageCircle,
  BadgeCheck,
  FileText,
  ShieldAlert,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { BrandMarquee } from "@/components/site/BrandMarquee";
import { StatCounter } from "@/components/site/StatCounter";
import { ContactForm } from "@/components/site/ContactForm";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { siteConfig, telLink, waLink } from "@/lib/site-config";
import ownerAndSon from "@/assets/owner-and-son.jpeg.asset.json";
import frontOfficeWithStockkeeper from "@/assets/front-office-with-stockkeeper.png.asset.json";
import godown1 from "@/assets/godown-1.png.asset.json";
import godown2 from "@/assets/godown-2.png.asset.json";
import godown3 from "@/assets/godown-3.png.asset.json";
import godown4 from "@/assets/godown-4.png.asset.json";
import hyraxTrademark from "@/assets/hyrax-trademark.pdf.asset.json";
import hyraxLogo from "@/assets/hyrax-logo.jpeg.asset.json";
import zarrocLogo from "@/assets/zarroc-logo.jpeg.asset.json";
import safilLogo from "@/assets/safil-logo.jpeg.asset.json";
import panbrosLogo from "@/assets/panbros-logo.jpeg.asset.json";
import hyraxCoolant from "@/assets/hyrax-coolant-product.jpeg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "National Agency — OEM Quality Automobile Spare Parts | Bhilwara" },
      {
        name: "description",
        content:
          "National Agency is a trusted trader and supplier of OEM quality automobile spare parts in Bhilwara, Rajasthan. Wholesale & retail distribution with expert consultation.",
      },
      { property: "og:title", content: "National Agency — OEM Automobile Spare Parts" },
      {
        property: "og:description",
        content: "Trusted OEM quality automobile spare parts supplier in Bhilwara, Rajasthan.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const services = [
  { icon: ShieldCheck, title: "OEM Quality Spare Parts", desc: "Genuine OEM-grade parts sourced from verified manufacturers for guaranteed performance." },
  { icon: Cog, title: "Automotive Components Supply", desc: "Wide range of engine, transmission, suspension, and electrical components." },
  { icon: Truck, title: "Wholesale Distribution", desc: "Bulk supply for dealers, distributors, and workshops with competitive trade pricing." },
  { icon: Tag, title: "Retail Parts Sales", desc: "Walk-in customers welcome — quality parts at fair retail prices." },
  { icon: Wrench, title: "Parts Consultation", desc: "Expert advice on the right part for your vehicle make, model, and application." },
];

const why = [
  { icon: ShieldCheck, title: "OEM Quality Assured", desc: "Every part meets original equipment specifications." },
  { icon: Award, title: "Trusted Suppliers", desc: "Decades-strong relationships with leading manufacturers." },
  { icon: Truck, title: "Fast Dispatch", desc: "Quick processing and reliable delivery across India." },
  { icon: Tag, title: "Competitive Pricing", desc: "Honest wholesale and retail rates with no hidden fees." },
  { icon: Wrench, title: "Expert Consultation", desc: "Skilled team to help identify and source the right part." },
  { icon: Users, title: "Customer First", desc: "Long-term relationships built on reliability and service." },
];

const brands = [
  {
    name: "Zarroc",
    focus: "Automotive Filters",
    desc: "Air filters, oil filters, fuel filters, cabin filters, and all types of automotive filter products.",
    logo: zarrocLogo.url,
  },
  {
    name: "Safil",
    focus: "Suspension Parts",
    desc: "National Agency supplies a complete range of Safil OEM suspension components designed for smooth performance, durability, ride comfort, and long service life.",
    logo: safilLogo.url,
    parts: [
      "Coil Pad",
      "Suspension Ball Joint",
      "Shocker Mount",
      "Suspension Bush",
      "Upper Ball Joint",
      "Retainer",
      "Lower Ball Joint",
      "Suspension Arm",
      "Jumping Rod Bush",
      "Tie Rod End",
      "Stabilizer Link",
      "Rack End",
    ],
  },
  {
    name: "Panbros",
    focus: "LED & Car Accessories",
    desc: "Automotive LED lighting products and car accessories for modern vehicle needs.",
    logo: panbrosLogo.url,
  },
];

const aboutGallery = [
  {
    src: frontOfficeWithStockkeeper.url,
    alt: "National Agency front office and stock counter with organized spare parts inventory",
    caption: "Front Office & Stock Counter",
    imageClassName: "object-cover object-center",
  },
  {
    src: godown1.url,
    alt: "Organized godown storage with clearly stocked automotive spare parts shelves",
    caption: "Organized Godown Storage",
    imageClassName: "object-cover object-center",
  },
  {
    src: godown2.url,
    alt: "Spare parts inventory arranged neatly on shelves for fast access and dispatch",
    caption: "Spare Parts Inventory",
    imageClassName: "object-cover object-center",
  },
  {
    src: godown3.url,
    alt: "Well-stocked product racks inside National Agency godown",
    caption: "Well-Stocked Product Racks",
    imageClassName: "object-cover object-center",
  },
  {
    src: godown4.url,
    alt: "Wholesale stock management area with boxed wiper blades and automotive accessories",
    caption: "Wholesale Stock Management",
    imageClassName: "object-cover object-center",
  },
];

const hyraxBadges = [
  "Registered Trademark",
  "Oil, Lubricants & Coolant",
  "Radiator Coolant Available",
  "Quality Focused",
  "Supplied by National Agency",
];

function HomePage() {
  const [aboutCarouselApi, setAboutCarouselApi] = useState<CarouselApi>();
  const [aboutCurrent, setAboutCurrent] = useState(0);

  useEffect(() => {
    if (!aboutCarouselApi) {
      return;
    }

    const updateCurrent = () => {
      setAboutCurrent(aboutCarouselApi.selectedScrollSnap());
    };

    updateCurrent();
    aboutCarouselApi.on("select", updateCurrent);
    aboutCarouselApi.on("reInit", updateCurrent);

    return () => {
      aboutCarouselApi.off("select", updateCurrent);
      aboutCarouselApi.off("reInit", updateCurrent);
    };
  }, [aboutCarouselApi]);

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-hero text-brand-foreground">
        <div
          aria-hidden
          className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,white,transparent_50%)]"
        />
        <div className="container-x relative grid gap-10 py-20 md:py-28 lg:grid-cols-2 lg:items-center">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur">
              <ShieldCheck className="h-3.5 w-3.5 text-primary" />
              OEM Quality · Bhilwara, Rajasthan
            </span>
            <h1 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Genuine OEM Spare Parts <span className="text-primary">You Can Trust.</span>
            </h1>
            <p className="mt-5 max-w-xl text-white/80 leading-relaxed">
              {siteConfig.name} supplies premium-grade automobile spare parts to wholesalers,
              retailers, and workshops across India. Reliability, quality, and service — every order.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-gradient-accent px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elevated hover:opacity-95 transition"
              >
                Get a Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={telLink}
                className="inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                <Phone className="h-4 w-4" /> Call {siteConfig.primaryPhone}
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/70">
              {["Verified Suppliers", "Pan-India Delivery", "Trade Pricing"].map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> {t}
                </span>
              ))}
            </div>
          </div>

          <div className="relative animate-in fade-in zoom-in-95 duration-700 mx-auto w-full max-w-lg lg:max-w-none">
            <div className="aspect-[5/4] rounded-2xl overflow-hidden shadow-elevated bg-secondary/30 lg:aspect-[6/5]">
              <img
                src={ownerAndSon.url}
                alt="National Agency owner and his son in branded polos at the Bhilwara showroom"
                className="h-full w-full object-cover object-[center_28%]"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 rounded-xl bg-white text-brand p-4 shadow-elevated hidden sm:block">
              <div className="text-2xl font-display font-bold">10+ Yrs</div>
              <div className="text-xs text-muted-foreground">Industry Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-20">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="rounded-2xl border border-border bg-card p-3 shadow-card">
            <Carousel setApi={setAboutCarouselApi} opts={{ loop: true }} className="w-full">
              <div className="relative overflow-hidden rounded-xl bg-secondary/40">
                <CarouselContent className="ml-0">
                  {aboutGallery.map((photo, index) => (
                    <CarouselItem key={photo.caption} className="pl-0">
                      <div className="group relative aspect-[4/5] overflow-hidden bg-secondary/20 md:aspect-[10/11] lg:aspect-[4/5]">
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          className={`h-full w-full ${photo.imageClassName} transition-transform duration-500 ease-out group-hover:scale-[1.02]`}
                          loading={index === 0 ? "eager" : "lazy"}
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand/85 via-brand/40 to-transparent px-5 py-4">
                          <p className="text-sm font-medium text-brand-foreground md:text-base">{photo.caption}</p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                <Button
                  type="button"
                  size="icon"
                  variant="secondary"
                  onClick={() => aboutCarouselApi?.scrollPrev()}
                  className="absolute left-3 top-1/2 z-10 h-10 w-10 -translate-y-1/2 rounded-full border border-white/20 bg-white/90 text-brand shadow-card hover:bg-white"
                  aria-label="Previous photo"
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <Button
                  type="button"
                  size="icon"
                  variant="secondary"
                  onClick={() => aboutCarouselApi?.scrollNext()}
                  className="absolute right-3 top-1/2 z-10 h-10 w-10 -translate-y-1/2 rounded-full border border-white/20 bg-white/90 text-brand shadow-card hover:bg-white"
                  aria-label="Next photo"
                >
                  <ArrowRightIcon className="h-4 w-4" />
                </Button>
              </div>
            </Carousel>

            <div className="mt-4 flex items-center justify-center gap-2">
              {aboutGallery.map((photo, index) => (
                <button
                  key={photo.caption}
                  type="button"
                  onClick={() => aboutCarouselApi?.scrollTo(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    aboutCurrent === index ? "w-8 bg-primary" : "w-2.5 bg-border hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to ${photo.caption}`}
                  aria-current={aboutCurrent === index}
                />
              ))}
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="About National Agency"
              title="A Trusted Name in Automotive Spare Parts Since 2012."
              subtitle="National Agency supplies genuine and OEM-quality automotive spare parts, lubricants, accessories, and replacement components to wholesalers, retailers, mechanics, and workshops. With a well-stocked inventory, organized godown, and customer-first service, we help buyers get the right parts at the right price."
            />
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "OEM-quality components",
                "Expert sourcing",
                "Wholesale & retail",
                "Fast dispatch",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> {t}
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-primary transition"
            >
              Learn more about us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* BRANDS WE DEAL IN */}
      <section className="py-20 bg-secondary/30">
        <div className="container-x">
          <SectionHeading
            center
            eyebrow="Our Brand Partners"
            title="Brands We Deal In"
            subtitle="We supply trusted automotive spare part brands known for quality, reliability, and value."
          />
          <div className="mt-10">
            <BrandMarquee
              brands={[
                { name: "Zarroc", logo: zarrocLogo.url },
                { name: "Safil", logo: safilLogo.url },
                { name: "Panbros", logo: panbrosLogo.url },
                { name: "Hyrax", logo: hyraxLogo.url },
              ]}
            />
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {brands.map((b) => (
              <div
                key={b.name}
                className="group flex flex-col rounded-2xl border border-border bg-white p-6 shadow-card hover:shadow-elevated hover:-translate-y-1 hover:border-primary/50 transition"
              >
                <div className="flex h-28 items-center justify-center overflow-hidden rounded-xl bg-white">
                  <img
                    src={b.logo}
                    alt={`${b.name} logo`}
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="mt-5 flex flex-1 flex-col text-center">
                  <h3 className="font-display text-xl font-bold text-brand tracking-tight">{b.name}</h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-primary">{b.focus}</p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                  {b.parts && (
                    <div className="mt-4 text-left">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-brand">Popular {b.name} Parts:</p>
                      <div className="flex flex-wrap gap-1.5">
                        {b.parts.map((part) => (
                          <span
                            key={part}
                            className="inline-flex items-center rounded-md border border-border bg-secondary/60 px-2 py-1 text-[11px] font-medium text-foreground hover:bg-primary/10 hover:border-primary/40 hover:text-primary transition"
                          >
                            {part}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  <span className="mt-auto inline-flex items-center justify-center gap-1 self-center rounded-full border border-border bg-secondary/60 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Brand We Supply
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HYRAX — REGISTERED BRAND */}
      <section className="py-20">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-8 md:p-14 text-brand-foreground shadow-elevated">
            <div aria-hidden className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/25 blur-3xl" />
            <div aria-hidden className="absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                  <BadgeCheck className="h-3.5 w-3.5" /> Our Registered Brand
                </span>
                <h2 className="mt-4 font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  Hyrax <span className="text-primary">— Our Registered Brand</span>
                </h2>
                <p className="mt-4 max-w-2xl text-white/80 leading-relaxed">
                  Hyrax is National Agency's own registered brand for automotive oil, lubricants, and coolant products.
                  Currently, Hyrax products include radiator coolant, developed with a focus on reliable quality,
                  vehicle protection, and everyday performance.
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {hyraxBadges.map((b) => (
                    <li
                      key={b}
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/90 backdrop-blur"
                    >
                      <ShieldAlert className="h-3.5 w-3.5 text-primary" /> {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={`${waLink}?text=${encodeURIComponent("Hi, I'd like to inquire about Hyrax products.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-gradient-accent px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elevated hover:opacity-95 transition"
                  >
                    <MessageCircle className="h-4 w-4" /> Ask for Hyrax Products
                  </a>
                  <a
                    href={hyraxTrademark.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
                  >
                    <FileText className="h-4 w-4" /> View Trademark Certificate
                  </a>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-2xl border border-white/15 bg-white p-6 backdrop-blur shadow-elevated">
                  <div className="flex h-20 items-center justify-center">
                    <img
                      src={hyraxLogo.url}
                      alt="Hyrax — National Agency's registered brand logo"
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div className="mt-4 overflow-hidden rounded-xl bg-secondary/40">
                    <img
                      src={hyraxCoolant.url}
                      alt="Hyrax Summer Cool radiator coolant 1L bottle"
                      className="mx-auto h-64 w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="mt-5 text-center">
                    <div className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                      Summer Cool · Radiator Coolant
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      Engineered for reliable cooling performance and long-term engine protection.
                    </p>
                  </div>
                  <div className="mt-5 flex items-center justify-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-3 py-2 text-xs font-semibold text-primary">
                    <BadgeCheck className="h-4 w-4" /> Registered Trademark
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-secondary/40">
        <div className="container-x">
          <SectionHeading
            center
            eyebrow="What We Offer"
            title="Comprehensive Spare Parts Solutions"
            subtitle="From single retail purchases to bulk wholesale orders, we serve every kind of automobile parts buyer."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="group rounded-2xl border border-border bg-card p-6 shadow-card hover:shadow-elevated hover:-translate-y-1 transition"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-hero text-brand-foreground">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-brand">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground hover:bg-brand-deep transition"
            >
              View all services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20">
        <div className="container-x">
          <SectionHeading
            center
            eyebrow="Why Choose Us"
            title="Built on Quality, Trust & Service"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {why.map((w) => (
              <div key={w.title} className="rounded-2xl border border-border p-6 hover:border-primary/40 transition">
                <w.icon className="h-7 w-7 text-primary" />
                <h3 className="mt-4 font-display text-base font-semibold text-brand">{w.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 bg-gradient-hero text-brand-foreground">
        <div className="container-x grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <StatCounter value={10} label="Years of Experience" />
          <StatCounter value={10000} label="Parts in Inventory" />
          <StatCounter value={850} label="Happy Customers" />
          <StatCounter value={40} label="Brands Served" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-10 md:p-14 text-brand-foreground shadow-elevated">
            <div aria-hidden className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />
            <div className="relative grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold">
                  Looking for a specific part? We'll source it for you.
                </h2>
                <p className="mt-3 text-white/80 max-w-xl">
                  Share your vehicle details and part requirement — our team will respond with availability and pricing.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-6 py-3 text-sm font-semibold text-white hover:opacity-95 transition"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp Us
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-md bg-gradient-accent px-6 py-3 text-sm font-semibold text-primary-foreground"
                >
                  Send Inquiry
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT PREVIEW */}
      <section className="py-20 bg-secondary/40">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Get in Touch"
              title="Quick Inquiry"
              subtitle="Tell us what you need. We typically respond within a few hours during business time."
            />
            <div className="mt-8 grid gap-4 text-sm">
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  {siteConfig.phones.map((p) => (
                    <a key={p} href={`tel:+91${p}`} className="block hover:text-primary transition">
                      +91 {p}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MessageCircle className="h-5 w-5 text-primary mt-0.5" />
                <a href={waLink} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                  WhatsApp: {siteConfig.whatsappDisplay}
                </a>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-card">
            <ContactForm />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

