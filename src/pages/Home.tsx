import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustStrip from "../components/TrustStrip";
import Welcome from "../components/Welcome";
import Rooms from "../components/Rooms";
import Amenities from "../components/Amenities";
import Weddings from "../components/Weddings";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import Location from "../components/Location";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";

export default function Home() {
  return (
    <div className="bg-cream">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Welcome />
        <Rooms />
        <Amenities />
        <Weddings />
        <Gallery />
        <Testimonials />
        <Location />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
