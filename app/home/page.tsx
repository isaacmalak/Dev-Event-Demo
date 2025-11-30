import { ExploreButton } from "./components/ExploreButton";
import { Suspense } from "react";
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
        <Suspense
          fallback={
            <div className="animate-in flex w-full flex-1 flex-col items-center justify-center rounded-3xl bg-gray-700 text-black"></div>
          }
        >
          <HomeEventList />
        </Suspense>
      </div>
    </section>
  );
}
