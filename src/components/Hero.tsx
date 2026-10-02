import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden">
      <img
        src="/images/hero.jpg"
        alt="Nilkanth Resort pool from above"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-ink/45" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink/40 to-transparent" />

      <div className="relative mx-auto w-full max-w-[1200px] px-6 pb-16 pt-36">
        <p className="text-[12px] font-semibold uppercase tracking-[0.3em] text-goldpale">
          Anand · Gujarat
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-5xl font-semibold leading-[1.1] text-white md:text-[76px]">
          A quiet escape in the heart of Gujarat.
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/90">
          80 garden rooms, a sparkling pool and lawns made for celebrations —
          minutes from Anand railway station.
        </p>

        <div className="mt-10 max-w-[1080px] rounded-[18px] bg-white p-4 shadow-xl md:p-5">
          <div className="grid gap-4 md:grid-cols-[1fr_1fr_1fr_auto] md:items-center">
            <div className="px-3 md:border-r md:border-line">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
                Check-in
              </p>
              <p className="mt-1 text-[19px] font-semibold text-ink">Fri, 10 Oct</p>
            </div>
            <div className="px-3 md:border-r md:border-line">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
                Check-out
              </p>
              <p className="mt-1 text-[19px] font-semibold text-ink">Sun, 12 Oct</p>
            </div>
            <div className="px-3">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
                Guests
              </p>
              <p className="mt-1 text-[19px] font-semibold text-ink">2 Adults</p>
            </div>
            <Link
              to="/book"
              className="rounded-full bg-gold px-8 py-4 text-center text-[15px] font-semibold text-white transition hover:brightness-105"
            >
              Check Availability
            </Link>
          </div>
        </div>

        <p className="mt-6 text-sm font-semibold text-white">
          <span className="text-goldpale">★</span> 4.2 · 1,400+ guest reviews
        </p>
      </div>
    </section>
  );
}
