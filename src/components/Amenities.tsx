import { amenities } from "../data/resort";

export default function Amenities() {
  return (
    <section id="amenities" className="bg-sage">
      <div className="mx-auto max-w-[1200px] px-6 py-24">
        <p className="text-[12px] font-semibold uppercase tracking-[0.3em] text-goldpale">
          Amenities
        </p>
        <h2 className="mt-4 font-display text-4xl font-semibold text-white md:text-[52px]">
          Everything is taken care of
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {amenities.map((a) => (
            <div
              key={a.title}
              className="rounded-2xl bg-white/10 p-6 transition hover:bg-white/15"
            >
              <p className="text-[17px] font-semibold text-white">{a.title}</p>
              <p className="mt-1 text-sm text-white/75">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
