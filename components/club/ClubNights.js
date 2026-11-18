import Link from "next/link";

const nights = [
  {
    title: "Friday Nights",
    desc: "Resident DJs • Doors 9PM\nDress Code: Evening Wear",
    img: "/new-icon.png",
  },
  {
    title: "Saturday Nights",
    desc: "Guest DJs • Live Music • Doors 9PM\n• VIP Access",
    img: "/new-icon.png",
  },
  {
    title: "Special Guest Nights",
    desc: "Celebrity Performances • Bottle Service\n• Exclusive Events",
    img: "/new-icon.png",
  },
];

export default function ClubNights() {
  return (
    <section className="py-20 px-4 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {nights.map((night) => (
            <div
              key={night.title}
              className="relative flex aspect-[1.65] min-h-[190px] flex-col items-center justify-center overflow-hidden border border-[#bca66c]/70 bg-[#090909] px-5 py-6 text-center card-lift"
              style={{
                boxShadow: "inset 0 0 28px rgba(212,175,55,0.04)",
              }}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-[5px] border border-[#bca66c]/35"
              />
              <span aria-hidden="true" className="pointer-events-none absolute left-[8px] top-[8px] h-4 w-4 rounded-tl-md border-l border-t border-[#d7c18a]/80" />
              <span aria-hidden="true" className="pointer-events-none absolute right-[8px] top-[8px] h-4 w-4 rounded-tr-md border-r border-t border-[#d7c18a]/80" />
              <span aria-hidden="true" className="pointer-events-none absolute bottom-[8px] left-[8px] h-4 w-4 rounded-bl-md border-b border-l border-[#d7c18a]/80" />
              <span aria-hidden="true" className="pointer-events-none absolute bottom-[8px] right-[8px] h-4 w-4 rounded-br-md border-b border-r border-[#d7c18a]/80" />

              <img
                src={night.img}
                alt=""
                aria-hidden="true"
                className="relative z-10 h-20 w-20 object-contain"
              />
              <h3 className="relative z-10 mb-2 font-serif text-xl font-semibold tracking-wide text-[#e8d39e]">
                {night.title}
              </h3>
              <p className="relative z-10 whitespace-pre-line text-xs leading-5 text-white/80 sm:text-[13px]">
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
