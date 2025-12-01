import { EventDocument } from "@/database/event.model";
import { EventCard } from "./EventCard";
import { cache } from "react";

export async function HomeEventList() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/events`,
    {
      cache: "no-store",
    },
  );
  const { events } = await response.json();
  return (
    <div className="m-auto flex flex-col">
      <h3 className="mb-4">Featured Events</h3>
      <div className="events">
        {events &&
          events.length > 0 &&
          events.map((event: EventDocument) => (
            <EventCard key={event.id} {...event} id={event.id} />
          ))}
      </div>
    </div>
  );
}
