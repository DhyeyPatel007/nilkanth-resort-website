import { useState } from "react";
import { Link } from "react-router-dom";
import { PHONE } from "../data/resort";

const LINKS = [
  { label: "Rooms", href: "#rooms" },
  { label: "Amenities", href: "#amenities" },
  { label: "Weddings", href: "#weddings" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-[76px] max-w-[1200px] items-center justify-between px-6">
        <Link to="/" className="leading-none">
          <span className="block font-display text-[24px] font-semibold tracking-[0.18em] text-ink">
            NILKANTH
          </span>
          <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.3em] text-muted">
            Resort · Anand
          </span>
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[15px] font-medium text-ink transition hover:text-gold"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-6 lg:flex">
          <a
            href={`tel:${PHONE.replace(/\s/g, "")}`}
            className="text-sm font-semibold text-sage"
          >
            {PHONE}
          </a>
          <Link
            to="/book"
            className="rounded-full bg-gold px-6 py-3 text-[15px] font-semibold text-white transition hover:brightness-105"
          >
            Book Now
          </Link>
        </div>
        <button
          className="p-2 lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
        >
          <span className="block h-0.5 w-6 bg-ink" />
          <span className="mt-1.5 block h-0.5 w-6 bg-ink" />
          <span className="mt-1.5 block h-0.5 w-6 bg-ink" />
        </button>
      </div>
      {open && (
        <nav className="border-t border-line bg-white px-6 py-4 lg:hidden">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-[15px] font-medium text-ink"
            >
              {l.label}
            </a>
          ))}
          <Link
            to="/book"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-full bg-gold px-6 py-3 text-center text-[15px] font-semibold text-white"
          >
            Book Now
          </Link>
        </nav>
      )}
    </header>
  );
}
