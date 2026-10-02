import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

const BookingPage = lazy(() => import("./booking/BookingPage"));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="flex min-h-screen items-center justify-center bg-cream">
            <p className="font-display text-2xl text-ink">Loading…</p>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<BookingPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
