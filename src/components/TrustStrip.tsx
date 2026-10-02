const STATS: [string, string][] = [
  ["4.2 ★", "1,400+ guest reviews"],
  ["80", "Rooms & suites"],
  ["2012", "Welcoming guests since"],
  ["500+", "Weddings hosted"],
];

export default function TrustStrip() {
  return (
    <section className="border-b border-line bg-cream">
      <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4">
        {STATS.map(([num, label]) => (
          <div key={label}>
            <p className="font-display text-4xl font-semibold text-ink">{num}</p>
            <p className="mt-1 text-sm text-muted">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
