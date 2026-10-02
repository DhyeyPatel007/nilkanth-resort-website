import { PHONE, weddingFeatures } from "../data/resort";

export default function Weddings() {
  return (
    <section id="weddings" className="bg-cream">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-6 py-24 md:grid-cols-2">
        <img
          src="/images/wedding.jpg"
          alt="Celebration at Nilkanth Resort"
          className="h-[640px] w-full rounded-3xl object-cover"
        />
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.3em] text-gold">
            Weddings & Events
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.15] text-ink md:text-[52px]">
            Celebrations under open skies
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-muted">
            From intimate engagements to 500-guest weddings, our lawns and
            banquet hall have hosted Anand&rsquo;s happiest days for over a
            decade. In-house catering, décor partners and a dedicated events
            team.
          </p>
          <ul className="mt-6 space-y-3">
            {weddingFeatures.map((f) => (
              <li key={f} className="flex items-center gap-3">
                <span className="font-semibold text-gold">✓</span>
                <span className="text-[16px] font-medium text-ink">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={`tel:${PHONE.replace(/\s/g, "")}`}
            className="mt-8 inline-block rounded-full bg-gold px-8 py-4 text-[15px] font-semibold text-white transition hover:brightness-105"
          >
            Plan Your Event
          </a>
        </div>
      </div>
    </section>
  );
}
