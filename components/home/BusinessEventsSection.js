import Image from "next/image";
import Link from "next/link";

const schedule = [
  { time: "10AM", title: "Business Meeting" },
  { time: "2PM", title: "Presentations and Business Plans" },
  { time: "6PM", title: "Networking" },
  { time: "8PM", title: "Red Carpet After Party" },
];

export default function BusinessEventsSection() {
  return (
    <section
      id="business-events"
      className="bg-[#080706] px-4 py-16 text-[#f3d99e] sm:py-20"
    >
      <div className="mx-auto max-w-6xl text-center">
        <Image
          src="/new-icon.png"
          alt="The Pearl Bar Club Event"
          width={638}
          height={503}
          className="mx-auto h-auto w-36 sm:w-44"
        />
        <h3 className="text-2xl font-serif font-bold uppercase tracking-wide sm:text-6xl mb-10">
          THE PEARL
        </h3>

        <div className="relative grid grid-cols-2 border-y border-[#E5B664]/40 md:grid-cols-4">
          {schedule.map((item, index) => (
            <div
              key={item.time}
              className={`relative px-3 py-5 sm:px-6 ${
                index % 2 === 1 ? "border-l border-[#E5B664]/20" : ""
              } ${index > 1 ? "border-t border-[#E5B664]/20 md:border-t-0" : ""} ${
                index > 0 ? "md:border-l md:border-[#E5B664]/20" : ""
              }`}
            >
              <span className="absolute left-1/2 top-0 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f3d99e]" />
              <p className="text-xl font-semibold sm:text-2xl">{item.time}</p>
              <p className="mt-1 text-sm leading-snug text-[#f3d99e]/90 sm:text-base">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        <h2 className="gold-text mt-6 text-2xl font-serif font-semibold uppercase tracking-wide sm:text-4xl">
          Business Events + After Party
        </h2>
        <p className="mt-1 text-base sm:text-lg">One Venue - All Day</p>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          <div className="relative aspect-[16/9] overflow-hidden border border-[#E5B664]/60">
            <Image
              src="/home/offer1.png"
              alt="Guests networking at The Pearl"
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="relative aspect-[16/9] overflow-hidden border border-[#E5B664]/60">
            <Image
              src="/gallery/gallery3.webp"
              alt="Guests arriving along a red carpet"
              fill
              sizes="(max-width: 640px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

        <Link
          href="/contact"
          className="btn-gold mt-6 inline-block rounded-full px-8 py-3 text-sm font-bold uppercase tracking-wide sm:px-10 sm:py-4 sm:text-base"
        >
          Book Your Business Day to Night
        </Link>

        <p className="mt-5 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[#f3d99e]/75 sm:text-xs sm:tracking-[0.3em]">
          The Pearl Bar Club <span className="px-1">•</span> Premium Events Venue
          <span className="px-1">•</span> Luxury Experiences
        </p>
      </div>
    </section>
  );
}
