import { Link } from "react-router-dom";
import { rooms, inr } from "../data/resort";

export default function Rooms() {
  return (
    <section id="rooms" className="bg-white">
      <div className="mx-auto max-w-[1200px] px-6 py-24">
        <p className="text-[12px] font-semibold uppercase tracking-[0.3em] text-gold">
          Stay with us
        </p>
        <h2 className="mt-4 font-display text-4xl font-semibold text-ink md:text-[52px]">
          Rooms & suites
        </h2>
        <p className="mt-4 max-w-xl text-[16px] text-muted">
          Thoughtful comfort in every category — crisp linen, fast Wi-Fi and
          garden or pool views.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {rooms.map((room) => (
            <article
              key={room.id}
              className="overflow-hidden rounded-[20px] border border-line bg-white transition hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={room.image}
                alt={room.name}
                className="h-56 w-full object-cover"
              />
              <div className="p-7">
                <h3 className="font-display text-[26px] font-semibold text-ink">
                  {room.name}
                </h3>
                <p className="mt-1 text-[13px] text-muted">{room.meta}</p>
                <p className="mt-1 text-[13px] text-muted">{room.amenities}</p>
                <div className="mt-5 flex items-end justify-between">
                  <div>
                    <p className="text-[22px] font-semibold text-sage">
                      {inr(room.price)}
                    </p>
                    <p className="text-[12px] text-muted">per night + taxes</p>
                  </div>
                  <Link
                    to={`/book?room=${room.id}`}
                    className="text-[15px] font-semibold text-gold transition hover:brightness-75"
                  >
                    Book →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
