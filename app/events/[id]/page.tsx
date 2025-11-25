import { EventCard } from "@/app/home/components/EventCard";
import { BookEvent } from "@/components/BookEvent";
import { EventDocument } from "@/database/event.model";
import { getSimilarEventsByTitle } from "@/lib/actions/events.actions";
import Image from "next/image";
import { notFound } from "next/navigation";
function EventDetailItem({
  icon,
  label,
  alt,
}: {
  icon: string;
  label: string;
  alt: string;
}) {
  return (
    <div className="flex-row-gap-2">
      <Image alt={alt} src={icon} width={17} height={17} />
      <p> {label}</p>
    </div>
  );
}
function EventAgenda({ agendaItems }: { agendaItems: string[] }) {
  // try {
  //      if (typeof agendaItems === "string") {
  //           const parsed = JSON.parse(agendaItems);
  //           agendaItems = Array.isArray(parsed) ? parsed : [parsed];
  //      } else if (!Array.isArray(agendaItems)) {
  //           agendaItems = [agendaItems];
  //      }
  // } catch {
  //      // fallback for non-JSON strings like "[a, b]" or '["a","b"]'
  //      if (typeof agendaItems === "string") {
  //           const stripped = agendaItems.replace(/^\s*\[|\]\s*$/g, "").trim();
  //           agendaItems = stripped
  //                ? stripped.split(",").map((s) => s.trim().replace(/^"|"$/g, ""))
  //                : [];
  //      } else {
  //           agendaItems = [agendaItems];
  //      }
  // }
  return (
    <div className="agenda">
      <h2>Agenda</h2>
      {agendaItems.map((item) => (
        <p key={item}> {item}</p>
      ))}
    </div>
  );
}
function EventTags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-row flex-wrap gap-15">
      {tags.map((tag) => (
        <div key={tag} className="pill">
          {tag}
        </div>
      ))}
    </div>
  );
}

export default async function EventDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const url = process.env.NEXT_PUBLIC_BASE_URL;
  const { id } = await params;
  const result = await fetch(`${url}/api/events/${id}`);
  const {
    event: {
      title,
      description,
      image,
      overview,
      date,
      time,
      location,
      mode,
      agenda,
      audience,
      tags,
      organizer,
      _id,
    },
  } = await result.json();

  const bookings = 10;

  if (!_id) return notFound();

  const similarEvents: EventDocument[] = await getSimilarEventsByTitle(title);
  return (
    <section id="event">
      <div className="header">
        <h1> {title}</h1>
        <h2> Event Description</h2>
        <p> {description}</p>
      </div>

      <div className="details">
        {/* Left side - Event details*/}
        <div className="content">
          <Image
            src={image}
            alt="Event Image"
            width={800}
            height={800}
            className="banner"
          />
          <section className="flex-col">
            <h2>Overview</h2>
            <p>{overview}</p>
          </section>

          <section className="flex-col">
            <h2>Event Details</h2>
            <EventDetailItem
              icon="/icons/calendar.svg"
              alt="calendar"
              label={date}
            />
            <EventDetailItem icon="/icons/pin.svg" alt="pin" label={location} />
            <EventDetailItem icon="/icons/clock.svg" alt="clock" label={time} />
            <EventDetailItem icon="/icons/mode.svg" alt="mode" label={mode} />
            <EventDetailItem
              icon="/icons/audience.svg"
              alt="audience"
              label={audience}
            />
          </section>

          <EventAgenda agendaItems={JSON.parse(agenda[0])} />

          <section className="flex-col">
            <h2>About the organizer</h2>
            <p>{organizer}</p>
          </section>
          <EventTags tags={JSON.parse(tags)} />
        </div>
        {/* right side - Event booking */}
        <aside className="booking">
          <div className="signup-card">
            <h2>Book Your Spot</h2>

            <p className="text-sm">
              {bookings > 0
                ? `Join ${bookings} people who have already booked their spot!`
                : "Be the first to book this event"}
            </p>
            <BookEvent />
          </div>
        </aside>
      </div>
      <div className="flex w-full flex-col gap-4 pt-20">
        <h2 className="text-2xl font-bold">Similar Events</h2>
        <div className="events">
          {similarEvents.length > 0 &&
            similarEvents.map((event: EventDocument) => (
              <EventCard key={event.id}{...event} />
            ))}
        </div>
      </div>
    </section>
  );
}
