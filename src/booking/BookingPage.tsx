import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { rooms } from "../data/resort";
import { BookingNav, Stepper, SummaryCard } from "./components";
import { makeBookingId, type BookingState } from "./types";
import DatesRoomStep from "./steps/DatesRoomStep";
import GuestDetailsStep from "./steps/GuestDetailsStep";
import PaymentStep from "./steps/PaymentStep";
import ConfirmationStep from "./steps/ConfirmationStep";

function defaultDates(): { checkIn: string; checkOut: string } {
  const inD = new Date();
  inD.setDate(inD.getDate() + 7);
  const outD = new Date(inD);
  outD.setDate(outD.getDate() + 2);
  const iso = (d: Date) => d.toISOString().slice(0, 10);
  return { checkIn: iso(inD), checkOut: iso(outD) };
}

export default function BookingPage() {
  const [params] = useSearchParams();
  const initial = useMemo<BookingState>(() => {
    const { checkIn, checkOut } = defaultDates();
    const roomParam = params.get("room");
    return {
      checkIn,
      checkOut,
      guests: 2,
      roomId: rooms.some((r) => r.id === roomParam) ? (roomParam as string) : "family",
      name: "",
      phone: "",
      email: "",
      arrival: "",
      requests: "",
      payMethod: "upi-id",
      upiId: "",
    };
  }, [params]);

  const [state, setState] = useState<BookingState>(initial);
  const [step, setStep] = useState(1);
  const [bookingId] = useState(makeBookingId);

  const set = (patch: Partial<BookingState>) =>
    setState((s) => ({ ...s, ...patch }));

  return (
    <div className="min-h-screen bg-cream">
      <BookingNav />
      <main className="mx-auto max-w-[1200px] px-6 py-10">
        <Stepper step={step} />
        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_360px]">
          <div>
            {step === 1 && (
              <DatesRoomStep state={state} set={set} onNext={() => setStep(2)} />
            )}
            {step === 2 && (
              <GuestDetailsStep
                state={state}
                set={set}
                onNext={() => setStep(3)}
                onBack={() => setStep(1)}
              />
            )}
            {step === 3 && (
              <PaymentStep state={state} set={set} onPaid={() => setStep(4)} />
            )}
            {step === 4 && (
              <ConfirmationStep state={state} bookingId={bookingId} />
            )}
          </div>
          {step < 4 && (
            <div className="lg:sticky lg:top-8 lg:self-start">
              <SummaryCard state={state} />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
