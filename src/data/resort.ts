export interface Room {
  id: string;
  name: string;
  meta: string;
  amenities: string;
  price: number;
  image: string;
}

export interface Amenity {
  title: string;
  desc: string;
}

export const PHONE = "+91 96013 98129";
export const PHONE_LINK = "tel:+919601398129";
export const WHATSAPP_LINK = "https://wa.me/919601398129";
export const ADDRESS = [
  "Near Lambhel Hanuman Temple,",
  "Lambhvel–Kanjri Road, Anand,",
  "Gujarat 388310",
];

export const rooms: Room[] = [
  {
    id: "deluxe",
    name: "Deluxe AC Room",
    meta: "400 sq ft · Garden view",
    amenities: "Double bed · 32″ TV · Work desk",
    price: 1799,
    image: "/images/room-deluxe.jpg",
  },
  {
    id: "family",
    name: "Family Room",
    meta: "400 sq ft · Pool view",
    amenities: "Two doubles · Seating area · Balcony",
    price: 2499,
    image: "/images/room-family.jpg",
  },
  {
    id: "honeymoon",
    name: "Honeymoon Suite",
    meta: "440 sq ft · Pool view",
    amenities: "King bed · Bathtub · Private deck",
    price: 3499,
    image: "/images/room-honeymoon.jpg",
  },
];

export const amenities: Amenity[] = [
  { title: "Outdoor Pool", desc: "Sun deck & loungers" },
  { title: "Restaurant", desc: "Multi-cuisine dining" },
  { title: "Fitness Centre", desc: "Open mornings" },
  { title: "Banquet Hall", desc: "500-guest capacity" },
  { title: "Free Wi-Fi", desc: "50+ Mbps in rooms" },
  { title: "Free Parking", desc: "Secured on-site" },
  { title: "Room Service", desc: "7 am – 11 pm" },
  { title: "Party Plot", desc: "Open-air celebrations" },
];

export const testimonials = [
  {
    quote:
      "Perfect for our family function — the lawn, the food, the staff. Everything was handled beautifully.",
    author: "Priya Shah · Ahmedabad",
  },
  {
    quote:
      "Clean rooms, great pool for the kids and quick check-in. Best value stay near Anand.",
    author: "Rahul Mehta · Vadodara",
  },
  {
    quote:
      "We hosted 300 guests for our wedding. The team managed every detail. Truly memorable.",
    author: "The Desai Family · Nadiad",
  },
];

export const weddingFeatures = [
  "5,000 sq ft party lawn",
  "AC banquet for 500 guests",
  "In-house veg catering",
  "Décor & sound partners",
];

export function inr(n: number): string {
  return "₹" + n.toLocaleString("en-IN");
}
