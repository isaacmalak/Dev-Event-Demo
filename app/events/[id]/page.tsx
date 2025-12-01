import { Suspense } from "react";
import { EventDetails } from "../components/EventDetails";
import { EventDetailsSkeleton } from "../components/skeletons/EventDetailsSkeleton";

export default function Event({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <Suspense fallback={<EventDetailsSkeleton/>}>
      <EventDetails params={params} />
    </Suspense>
  );
}
