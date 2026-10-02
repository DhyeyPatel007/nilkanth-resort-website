import { Link } from "react-router-dom";
import { PHONE, inr } from "../data/resort";
import { priceBreakup, fmtDate, type BookingState } from "./types";

export function Stepper({ step }: { step: number }) {
  const labels = ["Dates & Room", "Guest Details", "Payment", "Confirmed"];
  return (
    <div className="flex items-center gap-2 md:gap-3">
      {labels.map((label, i) => {
        const n = i + 1;
        const active = n === step;
        const done = n < step;
        return (
          <div key={label} className="flex items-center gap-2 md:gap-3">
            <div className="flex items-center gap-2">
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold ${
                  active
                    ? "bg-gold text-white"
                    : done
                      ? "bg-sage text-white"
                      : "border-2 border-line bg-white text-muted"
                }`}
              >
                {done ? "✓" : n}
              </span>
              <span
                className={`hidden text-sm font-semibold sm:block ${
                  active ? "text-ink" : "text-muted"
                }`}
              >
                {label}
              </span>
            </div>
            {i < labels.length - 1 && (
              <div className="h-0.5 w-8 bg-line md:w-20" />
            )}
          </div>
        );
      })}
    </div>
  );
}

export function BookingNav() {
  return (
    <header className="border-b border-line bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-[76px] max-w-[1200px] items-center justify-between px-6">
        <Link to="/" className="font-display text-[22px] font-semibold tracking-[0.2em] text-ink">
          NILKANTH
        </Link>
        <a
          href={`tel:${PHONE.replace(/\s/g, "")}`}
          className="text-sm font-semibold text-sage"
        >
          {PHONE}
        </a>
      </div>
    </header>
  );
}

export function SummaryCard({ state }: { state: BookingState }) {
  const { room, nights, base, taxes, total } = priceBreakup(state);
  return (
    <aside className="rounded-[18px] border border-line bg-white p-7">
      <h3 className="font-display text-[22px] font-semibold text-ink">Your Stay</h3>
      <p className="mt-3 text-[15px] font-medium text-ink">{room.name}</p>
      <p className="mt-1 text-[13px] text-muted">{room.meta}</p>
      <p className="mt-1 text-[13px] text-muted">
        {fmtDate(state.checkIn)} → {fmtDate(state.checkOut)} · {nights}{" "}
        {nights === 1 ? "night" : "nights"}
      </p>
      <p className="mt-1 text-[13px] text-muted">
        {state.guests} {state.guests === 1 ? "Adult" : "Adults"} · 1 Room
      </p>
      <div className="my-4 h-px bg-line" />
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-muted">
            {inr(room.price)} × {nights} {nights === 1 ? "night" : "nights"}
          </span>
          <span className="text-ink">{inr(base)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted">Taxes & fees (18% GST)</span>
          <span className="text-ink">{inr(taxes)}</span>
        </div>
        <div className="flex justify-between pt-1 text-base font-semibold">
          <span className="text-ink">Total</span>
          <span className="text-sage">{inr(total)}</span>
        </div>
      </div>
      <p className="mt-4 text-[12px] text-sage">Free cancellation till 48 hrs before check-in</p>
    </aside>
  );
}

export function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.15em] text-muted">
        {label}
      </span>
      {children}
    </label>
  );
}

export const inputCls =
  "w-full rounded-xl border border-line bg-white px-4 py-3.5 text-[15px] text-ink outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20 placeholder:text-muted/60";
