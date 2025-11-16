import Image from "next/image";
import Link from "next/link";

export function HomeNavBar() {
  return (
    <header>
      <nav>
        <Link href="/" className="logo">
          <Image src="/icons/logo.png" alt="logo" />
          <p>Dev Events</p>
          <ul>
            <Link href="/"> Home</Link>
            <Link href="/events"> Events</Link>
            <Link href="/events-form"> Create Event </Link>
          </ul>
        </Link>
      </nav>
    </header>
  );
}
