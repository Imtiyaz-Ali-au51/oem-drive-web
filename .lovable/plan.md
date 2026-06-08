
# National Agency — Website Plan

## Stack note (important)

Your brief asks for static HTML + Bootstrap 5. This project is already scaffolded as **TanStack Start (React 19) + Tailwind v4**, which is what Lovable supports. Swapping to raw HTML/Bootstrap would mean tearing down the working app shell and losing Lovable's preview, routing, and SEO tooling.

I'll build the exact same site — same pages, sections, content, behavior, and premium look — using the existing stack. Every Bootstrap feature you listed has a direct equivalent here (responsive grid, sticky navbar, cards, form validation, smooth scroll, animations). If you'd rather have literal `.html` files in `/public`, say the word and I'll switch approaches.

## Pages (each a TanStack route with unique SEO head tags)

- `/` — Home
- `/about` — About Us
- `/services` — Services
- `/contact` — Contact

## Design direction

- **Palette**: industrial premium — deep navy (`#0B1E3F`), steel gray, white, with a bold amber/orange accent (`#F59E0B`) for CTAs and highlights. Suited to automotive/industrial trust.
- **Typography**: Inter for body, Space Grotesk for headings (modern, technical, premium).
- **Visual language**: large hero with gradient overlay + automotive imagery placeholder, gear/cog motifs, OEM-quality badges, stat counters, card grid with subtle hover lift, smooth scroll, fade-in on scroll.
- Mobile-first responsive across all breakpoints.

## Page sections

**Home**
1. Sticky transparent → solid navbar
2. Hero banner: headline "Genuine OEM Quality Spare Parts You Can Trust", subhead, dual CTA (Get Quote / Call Now), placeholder hero image
3. About preview (2-col with image placeholder)
4. Services overview (5 cards)
5. Why Choose Us (6 feature tiles with icons: OEM Quality, Wide Inventory, Fast Delivery, Trusted Suppliers, Expert Consultation, Competitive Pricing)
6. Business statistics (animated counters: years, parts SKUs, happy customers, brands served)
7. Trust strip (brand/logo placeholders)
8. CTA banner ("Need a specific part? We'll source it.")
9. Contact preview + inquiry form snippet

**About**
- Hero, company story, mission/vision, values, team placeholder, CTA

**Services** (each with icon, description, "Enquire" button)
1. OEM Quality Automobile Spare Parts
2. Automotive Components Supply
3. Wholesale Spare Parts Distribution
4. Retail Spare Parts Sales
5. Automobile Parts Consultation

**Contact**
- Contact form (Name, Phone, Email, Message) with zod validation + toast confirmation
- Contact info cards (3 phones, WhatsApp, address, hours)
- Google Maps placeholder `<iframe>` section with a clearly marked `REPLACE_ME` comment

## Global components

- `Navbar` (sticky, mobile hamburger, active route highlight)
- `Footer` (address, 3 phone numbers, WhatsApp, quick links to all pages, services list, copyright "© 2026 National Agency. All rights reserved.")
- `FloatingWhatsApp` — fixed bottom-right, links to `https://wa.me/919309039990`
- `FloatingCall` — fixed bottom-right (stacked), links to `tel:+919309039990`
- `ScrollToTop` on route change

## SEO (per-route `head()`)

- Unique `title`, `description`, `og:title`, `og:description`, `og:url`, `og:type` per page
- Canonical link on each leaf route
- JSON-LD: `LocalBusiness` (AutoPartsStore) on home with address, phones, geo placeholder; `Organization` sitewide in `__root.tsx`
- Semantic HTML (single H1 per page), descriptive alt text on placeholders
- `public/robots.txt` allows all; `public/sitemap.xml` with 4 routes (relative — no domain set yet)

## Validation

- Contact form uses `react-hook-form` + `zod`:
  - Name: 2–100 chars
  - Phone: 10-digit Indian format
  - Email: valid email, ≤255
  - Message: 10–1000 chars
- On submit: client-side validation, success toast (no backend wired — purely a UI form; Lovable Cloud not enabled per your brief). I can wire it to send email later if you want.

## Image placeholders

Every image slot uses a clearly labeled placeholder div with comment markers like `{/* REPLACE: hero photo of warehouse */}` so you can swap in real photos later.

## File structure (TanStack equivalent of your tree)

```text
src/
├── routes/
│   ├── __root.tsx           # sitewide head, Org JSON-LD, navbar/footer shell
│   ├── index.tsx            # Home
│   ├── about.tsx
│   ├── services.tsx
│   └── contact.tsx
├── components/
│   ├── site/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── FloatingActions.tsx   # WhatsApp + Call
│   │   ├── Hero.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── StatCounter.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── ContactForm.tsx
│   │   └── MapEmbed.tsx          # iframe placeholder
│   └── ui/ (existing shadcn)
├── lib/
│   └── site-config.ts       # phones, address, links — single source of truth
└── styles.css               # design tokens (navy/amber palette)

public/
├── robots.txt
└── sitemap.xml
```

## Technical details

- Tailwind v4 design tokens added to `src/styles.css` (navy/amber + gradients + shadows).
- Icons via `lucide-react` (already in shadcn stack) — equivalent to Font Awesome, no extra CDN needed.
- Smooth scroll via CSS `scroll-behavior: smooth`.
- Subtle reveal animations via `tw-animate-css` (already imported).
- All phone/WhatsApp/address strings centralized in `src/lib/site-config.ts`.
- No Bootstrap CDN — using Tailwind for smaller bundle, faster load, and consistency with the existing component library.

## Out of scope (ask if you want them)

- Real backend for the contact form (would need Lovable Cloud)
- Real logo (you said you'll add later — I'll use a clean text wordmark "NATIONAL AGENCY" with a small gear mark until then)
- Real product/warehouse photos
