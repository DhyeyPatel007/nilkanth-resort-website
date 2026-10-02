import { Field, inputCls } from "../components";
import type { BookingState } from "../types";

export default function GuestDetailsStep({
  state,
  set,
  onNext,
  onBack,
}: {
  state: BookingState;
  set: (patch: Partial<BookingState>) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  const phoneOk = /^[6-9]\d{9}$/.test(state.phone.replace(/\D/g, "").slice(-10));
  const emailOk = /.+@.+\..+/.test(state.email);
  const valid = state.name.trim().length >= 2 && phoneOk && emailOk;

  return (
    <div>
      <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-gold">
        Step 2 of 4
      </p>
      <h1 className="mt-2 font-display text-4xl font-semibold text-ink md:text-[44px]">
        Who&rsquo;s checking in?
      </h1>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <Field label="Full name">
          <input
            value={state.name}
            onChange={(e) => set({ name: e.target.value })}
            placeholder="e.g. Priya Shah"
            className={inputCls}
          />
        </Field>
        <Field label="Phone (for booking updates)">
          <input
            value={state.phone}
            onChange={(e) => set({ phone: e.target.value })}
            placeholder="+91 98765 43210"
            inputMode="tel"
            className={inputCls}
          />
        </Field>
        <Field label="Email">
          <input
            value={state.email}
            onChange={(e) => set({ email: e.target.value })}
            placeholder="you@example.com"
            inputMode="email"
            className={inputCls}
          />
        </Field>
        <Field label="Arriving by">
          <select
            value={state.arrival}
            onChange={(e) => set({ arrival: e.target.value })}
            className={inputCls}
          >
            <option value="">Select…</option>
            <option>Car</option>
            <option>Train</option>
            <option>Flight</option>
            <option>Bus</option>
          </select>
        </Field>
      </div>

      <div className="mt-5">
        <Field label="Special requests (optional)">
          <textarea
            value={state.requests}
            onChange={(e) => set({ requests: e.target.value })}
            placeholder="Early check-in, anniversary surprise, extra bed…"
            rows={3}
            className={inputCls + " resize-none"}
          />
        </Field>
      </div>

      {!valid && (state.name || state.phone || state.email) && (
        <p className="mt-2 text-sm text-red-700">
          Please enter a valid name, 10-digit mobile number and email.
        </p>
      )}

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button
          onClick={onBack}
          className="rounded-full border border-line bg-white px-10 py-4 text-[15px] font-semibold text-ink transition hover:border-ink"
        >
          ← Back
        </button>
        <button
          onClick={onNext}
          disabled={!valid}
          className="rounded-full bg-gold px-10 py-4 text-[15px] font-semibold text-white transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Continue to Payment →
        </button>
      </div>
    </div>
  );
}
