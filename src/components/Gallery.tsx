const SHOTS = [
  { src: "/images/hero.jpg", alt: "Aerial view of the pool" },
  { src: "/images/welcome.jpg", alt: "Pool with sun loungers" },
  { src: "/images/room-deluxe.jpg", alt: "Deluxe AC Room" },
  { src: "/images/room-family.jpg", alt: "Family Room" },
  { src: "/images/room-honeymoon.jpg", alt: "Honeymoon Suite" },
  { src: "/images/wedding.jpg", alt: "Celebrations at the resort" },
  { src: "/images/balcony.jpg", alt: "Balcony overlooking the pool" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-24">
        <p className="text-[12px] font-semibold uppercase tracking-[0.3em] text-gold">
          Gallery
        </p>
        <h2 className="mt-4 font-display text-4xl font-semibold text-ink md:text-[52px]">
          Glimpses of Nilkanth
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {SHOTS.map((s, i) => (
            <img
              key={s.src}
              src={s.src}
              alt={s.alt}
              loading="lazy"
              className={`h-64 w-full rounded-2xl object-cover transition hover:scale-[1.02] ${
                i === 0 ? "col-span-2 row-span-2 h-[33rem]" : ""
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
