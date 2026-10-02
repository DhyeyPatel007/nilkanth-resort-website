import { Link } from "react-router-dom";

const FEATURES = [
  "Outdoor pool & sun deck",
  "Multi-cuisine restaurant",
  "24-hr front desk & room service",
];

export default function Welcome() {
  return (
    <section className="bg-cream">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-6 py-24 md:grid-cols-2">
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.3em] text-gold">
            Welcome to Nilkanth
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.15] text-ink md:text-[52px]">
            Gujarat&rsquo;s garden retreat, minutes from Anand
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-muted">
            Tucked into coconut groves on the Lambhvel–Kanjri road, Nilkanth
            Resort blends relaxed garden living with warm Gujarati hospitality.
            Spend slow afternoons by the pool, dine under the trees, and
            celebrate big moments on our sprawling party lawns.
          </p>
          <ul className="mt-6 space-y-3">
            {FEATURES.map((f) => (
              <li key={f} className="flex items-center gap-3">
                <span className="font-semibold text-gold">✓</span>
                <span className="text-[16px] font-medium text-ink">{f}</span>
              </li>
            ))}
          </ul>
          <Link
            to="/book"
            className="mt-8 inline-block rounded-full bg-ink px-8 py-4 text-[15px] font-semibold text-white transition hover:brightness-125"
          >
            Explore Rooms
          </Link>
        </div>
        <div className="relative">
          <div className="absolute -right-4 -top-4 h-full w-full rounded-3xl bg-goldsoft" />
          <img
            src="/images/welcome.jpg"
            alt="Resort pool with loungers"
            className="relative h-[560px] w-full rounded-3xl object-cover"
          />
          <div className="absolute -left-4 bottom-10 rounded-[18px] border border-line bg-white px-6 py-5 shadow-lg md:-left-10">
            <p className="text-[16px] font-semibold text-ink">4.2 ★★★★★</p>
            <p className="mt-1 text-[13px] text-muted">Loved by 1,400+ guests</p>
          </div>
        </div>
      </div>
    </section>
  );
}
