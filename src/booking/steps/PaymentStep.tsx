import { useEffect, useRef, useState } from "react";
import QRCode from "qrcode";
import { inr } from "../../data/resort";
import { priceBreakup, type BookingState } from "../types";

type Phase = "idle" | "processing" | "done";

export default function PaymentStep({
  state,
  set,
  onPaid,
}: {
  state: BookingState;
  set: (patch: Partial<BookingState>) => void;
  onPaid: () => void;
}) {
  const { total } = priceBreakup(state);
  const [phase, setPhase] = useState<Phase>("idle");
  const [copied, setCopied] = useState(false);
  const qrRef = useRef<HTMLCanvasElement>(null);

  const upiUri = `upi://pay?pa=nilkanth@upi&pn=NilkanthResortAnand&am=${total}&cu=INR&tn=RoomBooking`;

  useEffect(() => {
    if (state.payMethod === "qr" && qrRef.current) {
      QRCode.toCanvas(qrRef.current, upiUri, { width: 220, margin: 2 }).catch(
        () => {},
      );
    }
  }, [state.payMethod, upiUri]);

  const methods = [
    { id: "upi-id", title: "UPI ID / VPA", desc: "Pay to nilkanth@upi" },
    { id: "qr", title: "QR Code", desc: "Scan with any UPI app" },
    { id: "apps", title: "GPay · PhonePe · Paytm", desc: "Approve in your UPI app" },
  ] as const;

  function pay() {
    if (phase !== "idle") return;
    setPhase("processing");
    // Frontend demo: simulate the UPI collect-request round trip.
    setTimeout(() => {
      setPhase("done");
      setTimeout(onPaid, 900);
    }, 2600);
  }

  function copyUpi() {
    navigator.clipboard?.writeText("nilkanth@upi").catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  }

  return (
    <div>
      <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-gold">
        Step 3 of 4
      </p>
      <h1 className="mt-2 font-display text-4xl font-semibold text-ink md:text-[44px]">
        Pay securely with UPI
      </h1>
      <p className="mt-2 text-[15px] text-muted">
        {state.name.split(" ")[0] || "Guest"} · {inr(total)} · No advance needed
        beyond this payment
      </p>

      <div className="mt-8 rounded-[18px] border border-line bg-white p-6">
        <h3 className="text-[17px] font-semibold text-ink">Choose payment method</h3>
        <div className="mt-4 space-y-3">
          {methods.map((m) => {
            const on = state.payMethod === m.id;
            return (
              <button
                key={m.id}
                type="button"
                onClick={() => set({ payMethod: m.id })}
                className={`flex w-full items-center gap-4 rounded-2xl p-4 text-left transition ${
                  on ? "bg-goldsoft" : "border border-line bg-white hover:border-gold/50"
                }`}
              >
                <span
                  className={`flex h-[22px] w-[22px] items-center justify-center rounded-full ${
                    on ? "bg-gold" : "border-2 border-line bg-white"
                  }`}
                >
                  {on && <span className="h-3 w-3 rounded-full bg-white" />}
                </span>
                <span>
                  <span className="block text-[16px] font-semibold text-ink">
                    {m.title}
                  </span>
                  <span className="block text-[13px] text-muted">{m.desc}</span>
                </span>
              </button>
            );
          })}
        </div>

        {state.payMethod === "upi-id" && (
          <div className="mt-5 rounded-xl bg-cream p-4">
            <p className="text-[13px] text-muted">
              Send {inr(total)} to our UPI ID, then tap Pay below:
            </p>
            <div className="mt-2 flex items-center justify-between rounded-lg border border-line bg-white px-4 py-3">
              <span className="font-mono text-[16px] font-semibold text-ink">
                nilkanth@upi
              </span>
              <button
                onClick={copyUpi}
                className="rounded-full bg-sage px-4 py-1.5 text-[13px] font-semibold text-white"
              >
                {copied ? "Copied ✓" : "Copy"}
              </button>
            </div>
          </div>
        )}

        {state.payMethod === "qr" && (
          <div className="mt-5 flex flex-col items-center rounded-xl bg-cream p-6">
            <canvas ref={qrRef} className="rounded-lg bg-white p-2" />
            <p className="mt-3 text-[13px] text-muted">
              Scan to pay {inr(total)} to Nilkanth Resort
            </p>
          </div>
        )}

        {state.payMethod === "apps" && (
          <div className="mt-5 rounded-xl bg-cream p-4">
            <p className="text-[13px] text-muted">
              After tapping Pay, approve the collect request of {inr(total)} in
              your GPay / PhonePe / Paytm app.
            </p>
            <div className="mt-3">
              <label className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.15em] text-muted">
                Your UPI ID (optional)
              </label>
              <input
                value={state.upiId}
                onChange={(e) => set({ upiId: e.target.value })}
                placeholder="yourname@okhdfc"
                className="w-full rounded-xl border border-line bg-white px-4 py-3 text-[15px] text-ink outline-none focus:border-gold"
              />
            </div>
          </div>
        )}
      </div>

      <div className="mt-5 flex items-center gap-3 rounded-2xl bg-sagepale p-4">
        <span className="text-xl">🔒</span>
        <p className="text-sm font-medium text-sage">
          256-bit encrypted · Powered by UPI · Money goes directly to the resort
        </p>
      </div>

      <button
        onClick={pay}
        disabled={phase !== "idle"}
        className="mt-6 w-full rounded-full bg-gold py-4 text-[17px] font-semibold text-white transition hover:brightness-105 disabled:opacity-70"
      >
        {phase === "idle" && `Pay ${inr(total)}`}
        {phase === "processing" && (
          <span className="inline-flex items-center gap-3">
            <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
            Waiting for UPI approval…
          </span>
        )}
        {phase === "done" && "Payment received ✓"}
      </button>
      <p className="mt-3 text-center text-[13px] text-muted">
        {phase === "processing"
          ? "Approve the collect request in your UPI app to complete."
          : "You will receive a collect request on your UPI app."}
      </p>
    </div>
  );
}
