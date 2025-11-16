import Image from "next/image";
import Link from "next/link";

export function NavBar() {
  return (
    <header>
      <nav className="flex w-full">
        <Link href="/" className="logo">
          <Image src="/icons/logo.png" alt="logo" width={20} height={20} />
          <p>Dev Events</p>
        </Link>
        <ul>
          <Link href="/"> Home</Link>
          <Link href="/events"> Events</Link>
          <Link href="/events-form"> Create Event </Link>
        </ul>
      </nav>
    </header>
  );
}
