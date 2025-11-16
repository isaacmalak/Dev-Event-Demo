import { Timestamp } from "next/dist/server/lib/cache-handlers/types";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  image: string;
  location: string;
  date: string;
  time: string;
}
export function EventCard({ title, image, date, location, time }: Props) {
  return (
    <Link href="/events/">
      <Image
        src={`${image}`}
        alt="Event Poster"
        width={410}
        height={300}
        className="poster"
      />

      <p className="title"> ${title} </p>
    </Link>
  );
}
