import { rooms, inr } from "../../data/resort";
import { Field, inputCls } from "../components";
import type { BookingState } from "../types";

export default function DatesRoomStep({
  state,
  set,
  onNext,
}: {
  state: BookingState;
  set: (patch: Partial<BookingState>) => void;
  onNext: () => void;
}) {
  const today = new Date().toISOString().slice(0, 10);
  const valid = state.checkIn && state.checkOut && state.checkOut > state.checkIn;

  return (
    <div>
      <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-gold">
        Step 1 of 4
      </p>
      <h1 className="mt-2 font-display text-4xl font-semibold text-ink md:text-[44px]">
        Choose your dates & room
      </h1>

      <div className="mt-8 grid gap-5 sm:grid-cols-3">
        <Field label="Check-in">
          <input
            type="date"
            min={today}
            value={state.checkIn}
            onChange={(e) => set({ checkIn: e.target.value })}
            className={inputCls}
          />
        </Field>
        <Field label="Check-out">
          <input
            type="date"
            min={state.checkIn || today}
            value={state.checkOut}
            onChange={(e) => set({ checkOut: e.target.value })}
            className={inputCls}
          />
        </Field>
        <Field label="Guests">
          <select
            value={state.guests}
            onChange={(e) => set({ guests: Number(e.target.value) })}
            className={inputCls}
          >
            {[1, 2, 3, 4, 5, 6].map((g) => (
              <option key={g} value={g}>
                {g} {g === 1 ? "Adult" : "Adults"}
              </option>
            ))}
          </select>
        </Field>
      </div>
      {state.checkIn && state.checkOut && state.checkOut <= state.checkIn && (
        <p className="mt-2 text-sm text-red-700">
          Check-out must be after check-in.
        </p>
      )}

      <h2 className="mt-10 font-display text-2xl font-semibold text-ink">
        Select your room
      </h2>
      <div className="mt-4 space-y-4">
        {rooms.map((room) => {
          const selected = state.roomId === room.id;
          return (
            <button
              key={room.id}
              type="button"
              onClick={() => set({ roomId: room.id })}
              className={`w-full rounded-2xl border-2 bg-white p-3 text-left transition sm:flex sm:items-center sm:gap-5 sm:p-4 ${
                selected ? "border-gold" : "border-line hover:border-gold/50"
              }`}
            >
              <span className="flex items-center gap-3 sm:contents">
                <img
                  src={room.image}
                  alt={room.name}
                  className="h-16 w-20 shrink-0 rounded-[10px] object-cover sm:h-[92px] sm:w-[140px]"
                />
                <span
                  className={`flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full ${
                    selected ? "bg-gold" : "border-2 border-line bg-white"
                  }`}
                >
                  {selected && (
                    <span className="h-3 w-3 rounded-full bg-white" />
                  )}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="flex items-baseline justify-between gap-2">
                    <span className="block text-[16px] font-semibold text-ink sm:text-[17px]">
                      {room.name}
                    </span>
                    <span className="shrink-0 text-[16px] font-semibold text-sage sm:hidden">
                      {inr(room.price)}
                    </span>
                  </span>
                  <span className="block text-[12px] text-muted sm:text-[13px]">
                    {room.meta}
                  </span>
                  <span className="block text-[12px] text-muted sm:text-[13px]">
                    {room.amenities}
                  </span>
                </span>
                <span className="hidden shrink-0 text-right sm:block">
                  <span className="block text-[16px] font-semibold text-sage sm:text-[18px]">
                    {inr(room.price)}
                  </span>
                  <span className="block text-[11px] text-muted sm:text-[12px]">
                    / night
                  </span>
                </span>
              </span>
            </button>
          );
        })}
      </div>

      <button
        onClick={onNext}
        disabled={!valid}
        className="mt-8 w-full rounded-full bg-gold py-4 text-[17px] font-semibold text-white transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-40 sm:w-auto sm:px-12"
      >
        Continue →
      </button>
    </div>
  );
}
