import Image from "next/image";
import Link from "next/link";

export function EventCard({ title, image }: { title: string; image: string }) {
  return (
    <Link href="/events/">
      <Image src="" alt="" width={410} height={300} className="poster" />

      <p className="title"> ${title} </p>
    </Link>
  );
}
