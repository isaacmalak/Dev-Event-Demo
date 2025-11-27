import { EventCard } from "./components/EventCard";
import { ExploreButton } from "./components/ExploreButton";
import { EventDocument } from "../../database/event.model";

export default async function Home() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/events`,
  );
  const { events } = await response.json();
  console.log("Events fetched on home page:", events);

  return (
    <section>
      <h1 className="text-center">
        The Hub for every developing events <br />
        Event you can't miss
      </h1>
      <p className="mt-5 text-center">
        Hackathons, Meetups, and conferences. All in one place
      </p>
      <ExploreButton />
      <h3 className="mb-4">Featured Events</h3>
      <div className="events">
        {events &&
          events.length > 0 &&
          events.map((event: EventDocument) => (
            <EventCard key={event.id} {...event} id={event.id} />
          ))}
      </div>
    </section>
  );
}
