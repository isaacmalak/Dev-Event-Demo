import { Html } from "next/document";
import Image from "next/image";
import { ExploreButton } from "./components/ExploreButton";

export default function Home() {
  return (
    <section className="flex flex-col justify-center items-center w-full h-full bg-transparent dark:bg-transparent">
      <h1 className="text-center">
        The Hub for every developing events <br />
        Event you can't miss
      </h1>
      <p className="text-center">
        Hackathons, Meetups, and conferences. All in one place
      </p>
      <ExploreButton />
    </section>
  );
}
