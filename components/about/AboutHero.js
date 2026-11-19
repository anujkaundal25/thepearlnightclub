import PageHero from "../PageHero";

export default function AboutHero() {
  return (
    <PageHero
      eyebrow="ABOUT THE PEARL"
      title="Crafting Unforgettable Experiences"
      subtitle="Our journey began with a vision: to create a space where every visit is not just an event but a cherished memory."
      image="/about/hero.jpg"
    >
      <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
        <button className="w-full rounded-md border border-[#E5B664] px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto">
          Book Your Event
        </button>

        <button className="flex w-full items-center justify-center gap-2 rounded-md border border-white/40 bg-black/20 px-6 py-3 text-white transition-colors hover:bg-white/15 sm:w-auto">
          ▶ Watch Video
        </button>
      </div>
    </PageHero>
  );
}
