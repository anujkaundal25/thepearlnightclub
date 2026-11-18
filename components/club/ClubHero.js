export default function ClubHero() {
  return (
    <section className="relative w-full min-h-[70vh] overflow-hidden flex items-end">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url('/hero-section/club-hero-bg.jpeg')` }}
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/25" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full text-center px-6 pb-16 pt-20">
        <div className="max-w-3xl mx-auto">
          {/* THE CLUB with side lines */}
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            <span className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-[#E5B664]" />
            <h1 className="gold-text font-serif text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.15em]">
              THE CLUB
            </h1>
            <span className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-[#E5B664]" />
          </div>

          <p className="text-white italic font-light text-4xl sm:text-6xl md:text-7xl mt-4 font-serif">
            Dance The Night
          </p>

          {/* Ornamental divider */}
          <div className="flex items-center justify-center gap-3 mt-7">
            <span className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-[#E5B664]/60" />
            <span className="text-[#E5B664] text-sm">✦</span>
            <span className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-[#E5B664]/60" />
          </div>

          <p className="text-white/80 text-base sm:text-lg mt-6 font-light tracking-wide">
            World Class DJs <span className="text-[#E5B664]">•</span> Live Music{" "}
            <span className="text-[#E5B664]">•</span> Unforgettable Nights
          </p>
        </div>
      </div>
    </section>
  );
}
