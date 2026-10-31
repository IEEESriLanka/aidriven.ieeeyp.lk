import EventGallery from "@/components/Events/EventGallery";
import EventNavCard from "@/components/Events/EventGallery/EventNavCard";
import { eventPhotos, pastEventsData } from "@/lib/data/upcoming-events";
import JsonLd from "@/components/common/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { ArrowLeft, Images } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface EventPageProps {
  params: Promise<{ slug: string }>;
}

const eventsWithPhotos = pastEventsData.filter((event) => event.photosLink && event.gallery);

const findEvent = (slug: string) => eventsWithPhotos.find((event) => event.gallery?.slug === slug);

export const dynamicParams = false;

export function generateStaticParams() {
  return eventsWithPhotos.map((event) => ({ slug: event.gallery?.slug }));
}

export async function generateMetadata({ params }: EventPageProps) {
  const event = findEvent((await params).slug);
  if (!event?.gallery) return {};

  const firstPhoto = eventPhotos[event.gallery.folder][0].photos[0];
  return pageMetadata({
    title: `${event.title.split(" - ")[0]} Photos`,
    description: event.description[0],
    path: event.photosLink as string,
    keywords: [event.title, "AI Driven Sri Lanka past events", "AI event photos Sri Lanka"],
    images: [firstPhoto.src],
  });
}

export default async function PastEventPage({ params }: EventPageProps) {
  const event = findEvent((await params).slug);
  if (!event?.gallery) notFound();

  const sections = eventPhotos[event.gallery.folder];
  const photoCount = sections.reduce((total, section) => total + section.photos.length, 0);
  const [name, tagline] = event.title.split(" - ");
  const position = eventsWithPhotos.indexOf(event);
  const previous = eventsWithPhotos[position - 1];
  const next = eventsWithPhotos[position + 1];

  return (
    <main className="container mx-auto flex min-h-screen flex-col gap-y-16 px-4 pt-32 pb-24 lg:gap-y-24 lg:pt-40">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Past Events", path: "/events/past-events" },
          { name, path: event.photosLink as string },
        ])}
      />
      <header className="grid items-center gap-x-16 gap-y-12 lg:grid-cols-[1.1fr_1fr]">
        <div className="flex flex-col gap-y-6">
          <Link
            href="/events/past-events"
            className="hover:text-primary flex w-fit items-center gap-2 text-sm text-white/70 transition-colors"
          >
            <ArrowLeft className="size-4" />
            All past events
          </Link>

          <div className="flex flex-col gap-y-3">
            <h1 className="font-elemental-end text-3xl leading-tight tracking-wide text-white capitalize lg:text-5xl">
              {name}
            </h1>
            {tagline && (
              <p className="font-elemental-end text-primary text-lg leading-snug capitalize lg:text-2xl">{tagline}</p>
            )}
          </div>

          {event.description.map((paragraph) => (
            <p key={paragraph} className="max-w-[60ch] text-base leading-relaxed text-white/75">
              {paragraph}
            </p>
          ))}

          {event.highlights && (
            <ul className="flex flex-wrap gap-2">
              {event.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="text-primary bg-[#191919] px-3 py-1.5 text-xs"
                  style={{ borderRadius: "12px 4px" }}
                >
                  {highlight}
                </li>
              ))}
            </ul>
          )}

          <a
            href="#gallery"
            className="flex w-fit items-center gap-2 text-sm font-semibold text-white"
          >
            <Images className="text-primary size-5" />
            {photoCount} photos from this event
          </a>
        </div>

        {/* Offset orange panel echoes the photo frames on the team page */}
        <div className="relative mr-3 mb-3">
          <div className="from-primary absolute inset-0 translate-x-3 translate-y-3 rounded-2xl bg-gradient-to-br to-[#991C00]" />
          <div className="relative aspect-[3/2] overflow-hidden rounded-2xl bg-[#1c1c1c]">
            <Image
              src={event.img.src}
              alt={event.img.alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </header>

      <section id="gallery" className="flex scroll-mt-28 flex-col gap-y-8">
        <div className="flex items-center gap-4">
          <h2 className="section-header shrink-0">
            <span>Event</span>
            <span className="text-primary"> Gallery</span>
          </h2>
          <div className="h-px grow bg-white/10" />
        </div>
        <EventGallery sections={sections} eventTitle={event.title} />
      </section>

      {(previous || next) && (
        <nav aria-label="More past events" className="grid gap-4 border-t border-white/10 pt-10 sm:grid-cols-2">
          {previous && <EventNavCard event={previous} direction="previous" />}
          {next && <EventNavCard event={next} direction="next" />}
        </nav>
      )}
    </main>
  );
}
