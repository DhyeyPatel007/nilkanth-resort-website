import { ADDRESS, PHONE } from "../data/resort";

export default function Location() {
  return (
    <section id="contact" className="bg-cream">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-6 py-24 md:grid-cols-2">
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.3em] text-gold">
            Find us
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.15] text-ink md:text-[52px]">
            In the green heart of Anand
          </h2>
          <address className="mt-6 text-[17px] not-italic leading-relaxed text-muted">
            {ADDRESS.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </address>
          <a
            href={`tel:${PHONE.replace(/\s/g, "")}`}
            className="mt-4 block text-[20px] font-semibold text-sage"
          >
            {PHONE}
          </a>
          <p className="mt-2 text-sm text-muted">
            Check-in 11:30 am · Check-out 10:00 am
          </p>
        </div>
        <div>
          <div className="flex h-[420px] items-center justify-center rounded-[20px] border border-line bg-sagepale">
            <div className="text-center">
              <div className="mx-auto h-11 w-11 rounded-full bg-gold" />
              <p className="mt-3 text-[13px] font-semibold text-ink">
                Nilkanth Resort
              </p>
            </div>
          </div>
          <p className="mt-3 text-center text-[13px] text-muted">
            6 km from Anand station · 46 km from Vadodara
          </p>
        </div>
      </div>
    </section>
  );
}
