export const metadata = {
  title: "The Pearl - Overseas Events",
  description:
    "The Pearl goes worldwide. Explore overseas events in Ibiza, Mykonos, Dubai, Paris, London, Saranda, and Positano.",
};

import EventsHero from "../../components/events/EventsHero";
import OverseasEvents from "../../components/events/OverseasEvents";

export default function EventsPage() {
  return (
    <>
      <EventsHero />
      <OverseasEvents />
    </>
  );
}
