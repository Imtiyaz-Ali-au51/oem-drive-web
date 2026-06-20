export function MapEmbed() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border shadow-card bg-secondary">
      {/* REPLACE: paste your Google Maps <iframe ... /> embed code below */}
      <iframe
        title="National Agency location"
        src="https://www.google.com/maps?q=25.339458157669313,74.65496477883939&output=embed"
        width="100%"
        height="420"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
