import { Link } from "@tanstack/react-router";
import { MapPin, Phone, MessageCircle, Mail } from "lucide-react";
import { siteConfig, waLink } from "@/lib/site-config";
import logo from "@/assets/national-agency-logo.jpeg.asset.json";

export function Footer() {
  return (
    <footer className="bg-brand-deep text-brand-foreground mt-20">
      <div className="container-x py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <img src={logo.url} alt="National Agency logo" className="h-12 w-12 rounded-md object-cover" />
            <span className="font-display text-lg font-bold">{siteConfig.name}</span>
          </div>
          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            Trusted supplier and trader of OEM quality automobile spare parts. Serving wholesalers,
            retailers, and workshops with reliable products and expert support.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/services", label: "Services" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-white/70 hover:text-primary transition">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Our Services
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li>OEM Spare Parts</li>
            <li>Automotive Components</li>
            <li>Wholesale Distribution</li>
            <li>Retail Sales</li>
            <li>Parts Consultation</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Get in Touch
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
              <span>{siteConfig.address.full}</span>
            </li>
            {siteConfig.phones.map((p) => (
              <li key={p} className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <a href={`tel:+91${p}`} className="hover:text-primary transition">
                  +91 {p}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-primary shrink-0" />
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
                WhatsApp: {siteConfig.whatsappDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-primary shrink-0" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-primary transition">
                {siteConfig.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/60">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>OEM Quality Automobile Spare Parts · Bhilwara, Rajasthan</p>
        </div>
      </div>
    </footer>
  );
}
