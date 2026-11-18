import Link from "next/link";
import { FaMusic, FaMicrophone, FaStar } from "react-icons/fa";

const nights = [
  {
    title: "Friday Nights",
    desc: "Resident DJs • Doors 9PM\nDress Code: Evening Wear",
    icon: FaMusic,
  },
  {
    title: "Saturday Nights",
    desc: "Guest DJs • Live Music • Doors 9PM\n• VIP Access",
    icon: FaMicrophone,
  },
  {
    title: "Special Guest Nights",
    desc: "Celebrity Performances • Bottle Service\n• Exclusive Events",
    icon: FaStar,
  },
];

export default function ClubNights() {
  return (
    <section className="py-20 px-4 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {nights.map((night, idx) => (
            <div
              key={idx}
              className="relative bg-[#0d0d0d] border border-[#E5B664]/30 rounded-lg p-8 text-center card-lift"
              style={{
                boxShadow: "inset 0 0 30px rgba(212,175,55,0.05)",
              }}
            >
              {/* Corner decorations */}
              <span className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-[#E5B664] rounded-tl" />
              <span className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-[#E5B664] rounded-tr" />
              <span className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-[#E5B664] rounded-bl" />
              <span className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-[#E5B664] rounded-br" />

              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <night.icon
                  size={44}
                  className="text-[#E5B664]"
                  style={{ filter: "drop-shadow(0 0 8px rgba(212,175,55,0.4))" }}
                />
              </div>

              <h3 className="text-[#E5B664] text-2xl sm:text-3xl font-serif font-semibold mb-4">
                {night.title}
              </h3>
              <p className="text-white/75 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {night.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link
            href="/reserve"
            className="btn-gold inline-block px-10 py-4 rounded-md text-base font-bold uppercase tracking-wider"
          >
            Reserve Your Table
          </Link>
        </div>
      </div>
    </section>
  );
}
