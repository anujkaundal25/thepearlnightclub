import PageHero from "../PageHero";

export default function EventHero({
  title,
  subtitle,
  image,
}) {
  return (
    <PageHero
      eyebrow="THE PEARL EVENTS"
      title={title}
      subtitle={subtitle}
      image={image}
    />
  );
}
