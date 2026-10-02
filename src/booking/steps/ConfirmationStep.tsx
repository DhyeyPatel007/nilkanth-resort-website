import { Link } from "react-router-dom";
import { PHONE, WHATSAPP_LINK, inr } from "../../data/resort";
import { priceBreakup, fmtDate, type BookingState } from "../types";

export default function ConfirmationStep({
  state,
  bookingId,
}: {
  state: BookingState;
  bookingId: string;
}) {
  const { room, nights, total } = priceBreakup(state);
  const rows: [string, string][] = [
    ["Booking ID", bookingId],
    ["Room", `${room.name} · ${room.meta.split("·")[1]?.trim() ?? ""}`],
    ["Check-in", `${fmtDate(state.checkIn)} · 11:30 am`],
    ["Check-out", `${fmtDate(state.checkOut)} · 10:00 am`],
    ["Guests", `${state.guests} ${state.guests === 1 ? "Adult" : "Adults"}`],
    ["Amount paid", `${inr(total)} via UPI`],
  ];

  return (
    <div className="mx-auto max-w-[640px] text-center">
      <div className="mx-auto flex h-[120px] w-[120px] items-center justify-center rounded-full bg-sagepale">
        <span className="text-[56px] font-semibold text-sage">✓</span>
      </div>
      <h1 className="mt-6 font-display text-5xl font-semibold text-sage">
        Booking confirmed!
      </h1>
      <p className="mx-auto mt-3 max-w-[480px] text-[17px] text-muted">
        Thank you{state.name ? `, ${state.name.split(" ")[0]}` : ""}! Your stay
        at Nilkanth Resort is reserved. A confirmation has been sent to your
        phone{state.email ? " & email" : ""}.
      </p>

      <div className="mt-8 rounded-[20px] border border-line bg-white p-7 text-left">
        {rows.map(([k, v]) => (
          <div key={k} className="flex justify-between py-2 text-sm">
            <span className="text-muted">{k}</span>
            <span className="text-right font-semibold text-ink">{v}</span>
          </div>
        ))}
        <div className="mt-2 rounded-xl bg-cream p-4 text-[13px] text-muted">
          {nights} {nights === 1 ? "night" : "nights"} · Free cancellation till
          48 hrs before check-in · Show this booking ID at reception.
        </div>
      </div>

      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-sage px-8 py-4 text-[15px] font-semibold text-white transition hover:brightness-110"
        >
          WhatsApp Us
        </a>
        <Link
          to="/"
          className="rounded-full border border-line bg-white px-8 py-4 text-[15px] font-semibold text-ink transition hover:border-ink"
        >
          Back to Home
        </Link>
      </div>
      <p className="mt-6 text-sm text-muted">
        Need help? Call{" "}
        <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="font-semibold text-sage">
          {PHONE}
        </a>
      </p>
    </div>
  );
}
