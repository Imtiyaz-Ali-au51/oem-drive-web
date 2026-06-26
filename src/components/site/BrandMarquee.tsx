interface BrandItem {
  name: string;
  logo: string;
}

interface Props {
  brands: BrandItem[];
}

export function BrandMarquee({ brands }: Props) {
  // Duplicate the set for a seamless loop
  const loop = [...brands, ...brands];

  return (
    <div
      className="brand-marquee group relative overflow-hidden rounded-2xl border border-border bg-white py-6 shadow-card"
      aria-label="Brands we deal in"
    >
      {/* Edge fades */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent"
      />

      <div className="brand-marquee-track flex w-max items-center gap-12 px-6 md:gap-16 md:px-10">
        {loop.map((b, i) => (
          <div
            key={`${b.name}-${i}`}
            className="flex h-20 w-40 shrink-0 items-center justify-center md:h-24 md:w-52"
          >
            <img
              src={b.logo}
              alt={`${b.name} logo`}
              className="max-h-full max-w-full object-contain"
              loading="lazy"
              draggable={false}
            />
          </div>
        ))}
      </div>

      <style>{`
        .brand-marquee-track {
          animation: brand-marquee-scroll 40s linear infinite;
          will-change: transform;
        }
        .brand-marquee:hover .brand-marquee-track {
          animation-play-state: paused;
        }
        @keyframes brand-marquee-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .brand-marquee-track { animation: none; }
        }
      `}</style>
    </div>
  );
}
