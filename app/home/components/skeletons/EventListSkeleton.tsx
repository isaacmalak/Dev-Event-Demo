import { EventSkeleton } from "./EventCardSkeleton";

export function EventListSkeleton() {
  return (
    <div className="events m-auto gap-4">
      {Array.from({ length: 3 }).map((_, index) => (
        <EventSkeleton key={index} />
      ))}
    </div>
  );
}
