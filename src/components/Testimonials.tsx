import { testimonials } from "../data/resort";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-24">
        <p className="text-[12px] font-semibold uppercase tracking-[0.3em] text-gold">
          Guest stories
        </p>
        <h2 className="mt-4 font-display text-4xl font-semibold text-ink md:text-[52px]">
          Loved by our guests
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.author}
              className="rounded-[20px] bg-goldsoft p-8"
            >
              <div className="text-[15px] font-semibold tracking-widest text-gold">
                ★★★★★
              </div>
              <blockquote className="mt-4 font-display text-[19px] leading-relaxed text-ink">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-[13px] font-semibold text-muted">
                {t.author}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
