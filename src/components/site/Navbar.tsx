import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Cog } from "lucide-react";
import { siteConfig, telLink } from "@/lib/site-config";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all ${
        scrolled
          ? "bg-background/95 backdrop-blur border-b border-border shadow-sm"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-md bg-gradient-hero text-brand-foreground shadow-card">
            <Cog className="h-5 w-5 transition-transform group-hover:rotate-90" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-base font-bold tracking-tight text-brand">
              {siteConfig.name}
            </span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              OEM Spare Parts
            </span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="px-3 py-2 text-sm font-medium text-foreground/80 rounded-md hover:text-brand hover:bg-secondary transition-colors"
              activeProps={{ className: "text-brand bg-secondary" }}
            >
              {n.label}
            </Link>
          ))}
          <a
            href={telLink}
            className="ml-3 inline-flex items-center rounded-md bg-gradient-accent px-4 py-2 text-sm font-semibold text-primary-foreground shadow-card hover:opacity-95 transition"
          >
            Call Now
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-secondary"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container-x py-3 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeOptions={{ exact: n.to === "/" }}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 text-sm font-medium rounded-md hover:bg-secondary"
                activeProps={{ className: "text-brand bg-secondary" }}
              >
                {n.label}
              </Link>
            ))}
            <a
              href={telLink}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-gradient-accent px-4 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              Call {siteConfig.primaryPhone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
