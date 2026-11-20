"use client";

export default function PageHero({ eyebrow, title, subtitle, image, children }) {
  return (
    <section className="relative flex min-h-[65vh] w-full items-center justify-center overflow-hidden bg-[#0a0a0a] sm:min-h-[65vh]">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center brightness-125 contrast-110 saturate-110"
        style={{ backgroundImage: `url('${image}')` }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[1] bg-black/30"
      />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-5 py-20 text-center sm:px-8">
        <div className="flex items-center justify-center gap-4 sm:gap-6">
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-white sm:w-20" />
          <p className="font-serif text-lg font-bold tracking-[0.18em] text-white sm:text-2xl md:text-3xl">
            {eyebrow}
          </p>
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-white sm:w-20" />
        </div>

        <h1 className="mt-4 font-serif text-4xl font-light italic leading-tight text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.9)] sm:text-6xl md:text-7xl">
          {title}
        </h1>

        <div className="mt-7 flex items-center justify-center gap-3">
          <span className="h-px w-16 bg-gradient-to-r from-transparent to-white/60 sm:w-24" />
          <span aria-hidden="true" className="text-sm text-white">
            ✦
          </span>
          <span className="h-px w-16 bg-gradient-to-l from-transparent to-white/60 sm:w-24" />
        </div>

        {subtitle && (
          <p className="mx-auto mt-6 max-w-3xl text-base font-light leading-relaxed text-white [text-shadow:0_2px_6px_rgba(0,0,0,0.9)] sm:text-lg md:text-xl">
            {subtitle}
          </p>
        )}

        {children}
      </div>
    </section>
  );
}
