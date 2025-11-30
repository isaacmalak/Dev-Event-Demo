import { ExploreButton } from "./components/ExploreButton";
import { Suspense } from "react";
import { EventListSkeleton } from "./components/EventListSkeleton";
import { HomeEventList } from "./components/HomeEventList";

export default async function Home() {
  return (
    <section className="flex flex-1 flex-col">
      <h1 className="text-center">
        The Hub for every developing events <br />
        Event you can't miss
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
