import Image from "next/image";
import { FiSearch, FiCalendar } from "react-icons/fi";
import { MdCategory } from "react-icons/md";

export default function HeroSection() {
  return (
    <section className="relative isolate w-full min-h-[90svh] overflow-hidden bg-[#0a0a0a]">
      <div aria-hidden="true" className="absolute inset-0">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url('/hero-section/home-hero-bg.jpeg')` }}
        />
      </div>

      <div className="relative z-10 flex min-h-[90svh] flex-col items-center justify-center px-4 py-12 text-center sm:px-6">
        <div className="mb-3">
          <Image
            src="/new-logo.png"
            alt="The Pearl Gold Shell Logo"
            width={350}
            height={220}
            className="mx-auto h-auto w-[min(58vw,220px)] object-contain sm:w-[300px]"
            style={{ filter: "drop-shadow(0 0 12px rgba(212,175,55,0.5))" }}
            priority
          />
        </div>

        <h1
          className="mt-1 max-w-5xl font-serif text-3xl font-bold leading-tight text-[#eed6af] sm:text-4xl lg:text-6xl"
          style={{ textShadow: "0 2px 5px rgba(0,0,0,0.95), 0 0 18px rgba(0,0,0,0.9)" }}
        >
          Join Us For An Exclusive Night
        </h1>

        <p
          className="mt-4 max-w-3xl text-base font-medium leading-relaxed text-white sm:text-[20px]"
          style={{ textShadow: "0 2px 5px rgba(0,0,0,0.95), 0 0 16px rgba(0,0,0,0.9)" }}
        >
          Experience luxury nightlife, curated cocktails, live DJ events, and unforgettable evenings
          at the city&apos;s most exclusive venue.
        </p>

        <div className="mt-7 w-full max-w-5xl sm:mt-9">
          <div className="overflow-hidden rounded-xl border border-[#E5B664]/60 bg-[#111111]/95 shadow-[0_12px_40px_rgba(0,0,0,0.6)] backdrop-blur-md">
            <div className="flex flex-col items-stretch md:flex-row">
              <div className="flex min-w-0 flex-1 items-center gap-3 border-b border-[#E5B664]/25 px-4 py-4 sm:px-5 md:border-b-0 md:border-r">
                <FiSearch className="text-[#E5B664] text-xl shrink-0" />
                <input
                  type="text"
                  placeholder="Enter name"
                  aria-label="Search by name"
                  className="w-full min-w-0 bg-transparent text-base text-white outline-none placeholder:text-white/60"
                />
              </div>

              <div className="relative flex min-w-0 flex-1 items-center gap-3 border-b border-[#E5B664]/25 px-4 py-4 sm:px-5 md:border-b-0 md:border-r">
                <MdCategory className="text-[#E5B664] text-xl shrink-0" />
                <select aria-label="Select event category" className="w-full min-w-0 cursor-pointer appearance-none bg-transparent text-base text-white outline-none">
                  <option className="bg-[#111]">Select Category</option>
                  <option className="bg-[#111]">Bar</option>
                  <option className="bg-[#111]">Club</option>
                  <option className="bg-[#111]">Events</option>
                  <option className="bg-[#111]">VIP</option>
                  <option className="bg-[#111]">Overseas Events</option>
                </select>
                <span aria-hidden="true" className="ml-auto text-sm text-[#E5B664]">▾</span>
              </div>

              <div className="flex min-w-0 flex-1 items-center gap-3 border-b border-[#E5B664]/25 px-4 py-4 sm:px-5 md:border-b-0 md:border-r">
                <FiCalendar className="text-[#E5B664] text-xl shrink-0" />
                <input
                  type="date"
                  aria-label="Event date"
                  className="w-full min-w-0 bg-transparent text-base text-white outline-none [color-scheme:dark]"
                />
              </div>

              <button className="btn-gold m-2 rounded-lg px-6 py-3.5 text-sm font-bold uppercase tracking-wider sm:px-8 sm:text-base">
                Search Events
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-20 mx-auto mb-5 mt-1 w-fit md:absolute md:bottom-6 md:right-8 md:mx-0 md:mb-0 md:mt-0">
        <div className="flex items-center gap-3 rounded-lg border border-[#E5B664]/60 bg-[#0a0a0a]/95 px-3 py-2.5 shadow-xl backdrop-blur-sm sm:px-4 sm:py-3">
          <div className="h-12 w-12 shrink-0 rounded bg-white p-1 sm:h-14 sm:w-14">
            <Image
              src="/qrcode.webp"
              alt="Scan to book VVIP"
              width={48}
              height={48}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="leading-tight">
            <p className="text-[#E5B664] text-xs font-bold tracking-widest uppercase">Scan To Book</p>
            <p className="text-white text-lg font-bold tracking-wide">VVIP</p>
            <p className="mt-0.5 text-[10px] text-white/70">Instant reservation</p>
          </div>
        </div>
      </div>
    </section>
  );
}
