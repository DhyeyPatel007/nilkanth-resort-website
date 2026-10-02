import { Link } from "react-router-dom";
import { ADDRESS, PHONE } from "../data/resort";

export default function Footer() {
  return (
    <footer className="bg-ink">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_auto]">
          <div>
            <p className="font-display text-[30px] font-semibold tracking-[0.18em] text-white">
              NILKANTH
            </p>
            <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-goldpale">
              Resort · Anand
            </p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
              A garden retreat in Anand, Gujarat. 80 rooms · pool · weddings &
              events.
            </p>
          </div>
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-goldpale">
              Explore
            </p>
            <ul className="mt-4 space-y-2.5">
              {[
                ["Rooms", "#rooms"],
                ["Amenities", "#amenities"],
                ["Weddings", "#weddings"],
                ["Gallery", "#gallery"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-[15px] text-white/80 transition hover:text-white"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-goldpale">
              Contact
            </p>
            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              className="mt-4 block text-[15px] text-white/80 hover:text-white"
            >
              {PHONE}
            </a>
            <address className="mt-2 text-[15px] not-italic leading-relaxed text-white/80">
              {ADDRESS.join(" ")}
            </address>
          </div>
          <div className="flex items-start">
            <Link
              to="/book"
              className="rounded-full bg-gold px-8 py-4 text-[15px] font-semibold text-white transition hover:brightness-105"
            >
              Book Now
            </Link>
          </div>
        </div>
        <div className="mt-12 flex flex-col justify-between gap-2 border-t border-white/15 pt-6 text-[13px] text-white/55 md:flex-row">
          <p>© 2026 Nilkanth Resort, Anand. All rights reserved.</p>
          <p>Crafted with care</p>
        </div>
      </div>
    </footer>
  );
}
