export function MapEmbed() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border shadow-card bg-secondary">
      {/* REPLACE: paste your Google Maps <iframe ... /> embed code below */}
      <iframe
        title="National Agency location"
        src="https://www.google.com/maps?q=Tilak+Nagar+Bhilwara+Rajasthan&output=embed"
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
