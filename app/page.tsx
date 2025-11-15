import { Html } from "next/document";
import Image from "next/image";

export default function Home() {
  return (
    <section className="flex justify-center items-center min-w-screen min-h-screen bg-transparent dark:bg-transparent">
      <h1 className="text-center">
        The Hub for every developing events <br />
        Event you can't miss
      </h1>
      <p className="text-center">
        Hackathons, Meetups, and conferences. All in one place
      </p>
    </section>
  );
}
