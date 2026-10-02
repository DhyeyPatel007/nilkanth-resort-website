import { rooms, inr } from "../data/resort";

export interface BookingState {
  checkIn: string;
  checkOut: string;
  guests: number;
  roomId: string;
  name: string;
  phone: string;
  email: string;
  arrival: string;
  requests: string;
  payMethod: "upi-id" | "qr" | "apps";
  upiId: string;
}

export const STEPS = ["Dates & Room", "Guest Details", "Payment", "Confirmed"];

export function nightsBetween(a: string, b: string): number {
  if (!a || !b) return 0;
  const ms = new Date(b).getTime() - new Date(a).getTime();
  return Math.max(0, Math.round(ms / 86400000));
}

export function priceBreakup(s: BookingState) {
  const room = rooms.find((r) => r.id === s.roomId) ?? rooms[1];
  const nights = Math.max(1, nightsBetween(s.checkIn, s.checkOut));
  const base = room.price * nights;
  const taxes = Math.round(base * 0.18);
  return { room, nights, base, taxes, total: base + taxes };
}

export function fmtDate(iso: string): string {
  if (!iso) return "—";
  return new Date(iso + "T00:00:00").toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function makeBookingId(): string {
  return "NR-2026-" + Math.floor(10000 + Math.random() * 89999);
}

export { inr };
