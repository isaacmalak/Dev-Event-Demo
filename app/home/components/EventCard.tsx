"use client";

import Image from "next/image";
import Link from "next/link";
import posthog from "posthog-js";
interface Props {
  id: string;
  title: string;
  image: string;
  location: string;
  date: string;
  time: string;
}

export function EventCard({ id, title, image, date, location, time }: Props) {
  return (
    <Link
      href={`/events/${id}`}
      id="event-card"
      onClick={() => {
        posthog.capture("my event", { property: "value" });
      }}
    >
      <Image
        src={image}
        alt="Event Poster"
        width={410}
        height={300}
        className="poster"
      />
      <div className="my-2 flex gap-2">
        <Image src="/icons/pin.svg" alt={title} width={14} height={14} />
        <p>{location}</p>
      </div>
      <p className="title">{title}</p>
      <div className="datetime">
        <div>
          <Image src="/icons/calendar.svg" alt="date" width={14} height={14} />
          <p>{date}</p>
        </div>
        <div>
          <Image src="/icons/clock.svg" alt="time" width={14} height={14} />
          <p>{time}</p>
        </div>
      </div>
    </Link>
  );
}
