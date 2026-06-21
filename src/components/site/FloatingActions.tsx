import { Phone, MessageCircle, Instagram } from "lucide-react";
import { siteConfig, telLink, waLink } from "@/lib/site-config";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-elevated hover:scale-105 transition-transform"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="sr-only">WhatsApp {siteConfig.whatsappDisplay}</span>
      </a>
      <a
        href={siteConfig.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow on Instagram"
        className="group grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-[#feda75] via-[#d62976] to-[#4f5bd5] text-white shadow-elevated hover:scale-105 transition-transform"
      >
        <Instagram className="h-6 w-6" />
        <span className="sr-only">Instagram {siteConfig.instagramHandle}</span>
      </a>
      <a
        href={telLink}
        aria-label="Call us"
        className="group grid h-14 w-14 place-items-center rounded-full bg-gradient-accent text-primary-foreground shadow-elevated hover:scale-105 transition-transform"
      >
        <Phone className="h-6 w-6" />
        <span className="sr-only">Call {siteConfig.primaryPhone}</span>
      </a>
    </div>
  );
}
