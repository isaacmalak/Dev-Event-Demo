import { Suspense } from "react";
import { ExploreButton } from "./home/components/ExploreButton";
import { HomeEventList } from "./home/components/HomeEventList";
import { EventListSkeleton } from "./home/components/skeletons/EventListSkeleton";

export default async function Home() {
  return (
    <section className="flex flex-1 flex-col">
      <h1 className="text-center">
        The Hub for every developing events <br />
        Event you can&apos;t miss
      </h1>
      <p className="mt-5 text-center">
        Hackathons, Meetups, and conferences. All in one place
      </p>
      <ExploreButton />

      <div className="flex flex-1">
        <Suspense fallback={<EventListSkeleton />}>
          <HomeEventList />
        </Suspense>
      </div>
    </section>
  );
}
