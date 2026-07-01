import { useEffect, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Target,
  Eye,
  HeartHandshake,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  ArrowLeft,
  ArrowRight as ArrowRightIcon,
} from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import frontOfficeWithStockkeeper from "@/assets/front-office-with-stockkeeper.png.asset.json";
import godown1 from "@/assets/godown-1.png.asset.json";
import godown2 from "@/assets/godown-2.png.asset.json";
import godown3 from "@/assets/godown-3.png.asset.json";
import godown4 from "@/assets/godown-4.png.asset.json";
import hyraxCoolantRack from "@/assets/hyrax-coolant-rack.png.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — National Agency | OEM Spare Parts, Bhilwara" },
      {
        name: "description",
        content:
          "Learn about National Agency — a trusted trader and supplier of OEM quality automobile spare parts based in Bhilwara, Rajasthan.",
      },
      { property: "og:title", content: "About National Agency" },
      { property: "og:description", content: "Trusted OEM automobile spare parts supplier in Bhilwara, Rajasthan." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

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

function AboutPage() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    const updateCurrent = () => {
      setCurrent(carouselApi.selectedScrollSnap());
    };

    updateCurrent();
    carouselApi.on("select", updateCurrent);
    carouselApi.on("reInit", updateCurrent);

    return () => {
      carouselApi.off("select", updateCurrent);
      carouselApi.off("reInit", updateCurrent);
    };
  }, [carouselApi]);

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="bg-gradient-hero text-brand-foreground">
        <div className="container-x py-20 md:py-24 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">About Us</p>
          <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold">
            Driven by Quality. Trusted by Industry.
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-white/80">
            National Agency is a leading trader and supplier of OEM quality automobile spare parts,
            serving customers across India from our base in Bhilwara, Rajasthan.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="py-20">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="rounded-2xl border border-border bg-card p-3 shadow-card">
            <Carousel setApi={setCarouselApi} opts={{ loop: true }} className="w-full">
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
                  onClick={() => carouselApi?.scrollPrev()}
                  className="absolute left-3 top-1/2 z-10 h-10 w-10 -translate-y-1/2 rounded-full border border-white/20 bg-white/90 text-brand shadow-card hover:bg-white"
                  aria-label="Previous photo"
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <Button
                  type="button"
                  size="icon"
                  variant="secondary"
                  onClick={() => carouselApi?.scrollNext()}
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
                  onClick={() => carouselApi?.scrollTo(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    current === index ? "w-8 bg-primary" : "w-2.5 bg-border hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to ${photo.caption}`}
                  aria-current={current === index}
                />
              ))}
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Our Story" title="A Decade of Trust in Auto Spare Parts." />
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded with a single purpose — to make genuine OEM quality spare parts accessible to
                every workshop, dealer, and vehicle owner — National Agency has grown into a dependable
                name in the Rajasthan automobile parts trade.
              </p>
              <p>
                We work directly with reputed manufacturers and authorized suppliers to ensure every
                component we deliver matches original equipment standards. From engine and transmission
                parts to electrical and suspension components, our inventory covers a wide spectrum of
                vehicle makes and models.
              </p>
              <p>
                Beyond products, we believe in building long-term relationships. Our team brings deep
                technical knowledge, honest pricing, and consistent after-sale support to every order —
                whether you're a wholesaler placing a bulk order or a customer needing a single part.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION VISION VALUES */}
      <section className="py-20 bg-secondary/40">
        <div className="container-x">
          <SectionHeading center eyebrow="What Drives Us" title="Our Mission, Vision & Values" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Target,
                title: "Our Mission",
                desc: "To supply OEM quality automobile spare parts with unmatched reliability, fair pricing, and expert support.",
              },
              {
                icon: Eye,
                title: "Our Vision",
                desc: "To be India's most trusted name in automobile spare parts trading and distribution.",
              },
              {
                icon: HeartHandshake,
                title: "Our Values",
                desc: "Integrity, quality, customer-first service, and long-term relationships built on trust.",
              },
            ].map((c) => (
              <div key={c.title} className="rounded-2xl border border-border bg-card p-7 shadow-card">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-accent text-primary-foreground">
                  <c.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-brand">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROMISE */}
      <section className="py-20">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Our Promise"
              title="Genuine Parts. Honest Service. Every Time."
            />
            <ul className="mt-6 grid gap-3">
              {[
                "Only OEM and OEM-equivalent quality parts",
                "Transparent pricing with no hidden costs",
                "Expert advice for the right part match",
                "Fast dispatch and reliable delivery across India",
                "Long-standing supplier relationships you can trust",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm">
                  <ShieldCheck className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-gradient-hero px-6 py-3 text-sm font-semibold text-brand-foreground shadow-elevated"
            >
              Talk to our team <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="rounded-2xl border border-border bg-secondary/40 p-8">
            <div className="grid grid-cols-2 gap-6 text-center">
              {[
                ["10+", "Years"],
                ["10000+", "SKUs"],
                ["850+", "Customers"],
                ["40+", "Brands"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-3xl font-bold text-brand">{n}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{l}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-border text-sm text-muted-foreground flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
              Serving wholesalers, retailers and workshops across India.
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
