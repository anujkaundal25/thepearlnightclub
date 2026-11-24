"use client";

import Link from "next/link";
import Image from "next/image";

const featured = [
  {
    title: "Ibiza Beach Party",
    details: [
      "Exclusive Beachside Celebration",
      "VIP Clubs",
      "Sunset DJ Sets",
    ],
    image: "/events/event1.webp",
  },
  {
    title: "Mykonos Nights",
    details: [
      "Cycladic Luxury Parties",
      "Rooftop Cocktails",
      "Island Nightlife",
    ],
    image: "/events/event2.webp",
  },
  {
    title: "Dubai Luxury Nights",
    details: [
      "Lavish Desert Coast Events",
      "Infinity Pool Soirees",
      "Skyline Views",
    ],
    image: "/events/event3.webp",
  },
];

const more = [
  {
    title: "Paris",
    details: [
      "Paris Fashion Week Afterparties",
      "Exclusive Fashion Week Events",
      "Luxury Venue Takeovers",
    ],
    image: "/events/event4.webp",
    position: "top",
  },
  {
    title: "London",
    details: [
      "London Rooftop Soirees",
      "Skyline Rooftop Parties",
      "Champagne & Canapés",
    ],
    image: "/events/event5.webp",
  },
  {
    title: "Saranda Albania",
    details: [
      "Ksamil Turquoise Beach Summer Beach Club",
      "July - August",
      "Turquoise Beach Club",
      "Summer Season",
    ],
    image: "/events/event6.webp",
  },
  {
    title: "Positano Italy",
    details: [
      "Amalfi Coast Beach Party",
      "Cliffside Cocktails",
      "Coastal Celebrations",
      "June - September",
    ],
    image: "/events/event7.webp",
  },
];

const additionalEvents = [
  { title: "MONACO - yachts", image: "/events/event8.webp" },
  { title: "ROME - Colosseum", image: "/events/event9.webp" },
  { title: "MELBOURNE - Yarra skyline", image: "/events/event10.webp" },
];

export default function OverseasEvents() {
  return (
    <section className="py-20 px-4 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        {/* Featured heading */}
        <h2
          className="text-center text-[#E5B664] text-sm sm:text-base font-semibold tracking-[0.3em] uppercase mb-10"
        >
          Featured Overseas Events
        </h2>

        {/* Featured cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((event, idx) => (
            <div
              key={idx}
              className="bg-[#111111] border border-[#E5B664]/40 rounded-lg overflow-hidden card-lift"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-[#E5B664] text-2xl font-serif font-semibold mb-3">
                  {event.title}
                </h3>
                <ul className="list-inside list-disc space-y-1.5 text-center text-sm leading-relaxed text-white/75">
                  {event.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* More destinations */}
        <h2
          className="text-center text-[#E5B664] text-sm sm:text-base font-semibold tracking-[0.3em] uppercase mt-16 mb-10"
        >
          Plus More Destinations
        </h2>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {more.map((event, idx) => (
            <div
              key={idx}
              className="bg-[#111111] border border-[#E5B664]/40 rounded-lg overflow-hidden card-lift"
            >
              <div className="relative h-32 overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-700"
                  style={{ objectPosition: event.position || "center" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
              </div>
              <div className="p-4 text-center">
                <h3 className="text-[#E5B664] text-lg font-serif font-semibold mb-2">
                  {event.title}
                </h3>
                <ul className="list-inside list-disc space-y-1 text-center text-xs leading-relaxed text-white/75">
                  {event.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <h2
          className="text-center text-[#E5B664] text-sm sm:text-base font-semibold tracking-[0.3em] uppercase mt-16 mb-10"
        >
          More Overseas Events
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {additionalEvents.map((event) => (
            <article
              key={event.title}
              className="card-lift group overflow-hidden rounded-lg border border-[#E5B664]/40 bg-[#111111]"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
              </div>
              <h3 className="p-6 text-center text-xl font-semibold text-[#E5B664]">
                {event.title}
              </h3>
            </article>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            href="/contact"
            className="btn-gold inline-block px-10 py-4 rounded-md text-base font-bold uppercase tracking-wider"
          >
            Book Your Overseas Event
          </Link>
        </div>
      </div>
    </section>
  );
}
