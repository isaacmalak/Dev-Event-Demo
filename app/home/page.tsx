import { EventCard } from "./components/EventCard";
import { ExploreButton } from "./components/ExploreButton";

const events = [
  {
    title: "Web3 & Blockchain Summit",
    image: "/images/event3.png",
    location: "The GrEEK Campus, Downtown",
    date: "November 28, 2025",
    time: "10:00 AM - 5:00 PM",
  },
  {
    title: "Advanced React Patterns Workshop",
    image: "/images/event4.png",
    location: "Online - Zoom Webinar",
    date: "December 2, 2025",
    time: "7:00 PM - 9:00 PM EET",
  },
  {
    title: "AI in Practice: For Developers",
    image: "/images/event5.png",
    location: "AUC New Cairo, The HIVE",
    date: "December 10, 2025",
    time: "9:00 AM - 4:00 PM",
  },
  {
    title: "Startup Founders Pitch Night",
    image: "/images/event6.png",
    location: "Nile Ritz-Carlton, Cairo",
    date: "December 18, 2025",
    time: "6:30 PM - 10:00 PM",
  },
  {
    title: "The Future of FinTech",
    image: "/images/event7.png",
    location: "Virtual Conference",
    date: "January 15, 2026",
    time: "1:00 PM - 4:00 PM UTC",
  },
  {
    title: "UX/UI Design Principles",
    image: "/images/event8.png",
    location: "Bibliotheca Alexandrina",
    date: "January 22, 2026",
    time: "11:00 AM - 3:00 PM",
  },
  {
    title: "Cloud Native & DevOps Meetup",
    image: "/images/event9.png",
    location: "Online - Discord Server",
    date: "January 30, 2026",
    time: "8:00 PM - 9:30 PM",
  },
];
export default function Home() {
  return (
    <section>
      <h1 className="text-center">
        The Hub for every developing events <br />
        Event you can't miss
      </h1>
      <p className="mt-5 text-center">
        Hackathons, Meetups, and conferences. All in one place
      </p>
      <ExploreButton />
      <h3 className="mb-4">Featured Events</h3>
      <div className="events">
        {events.map((event) => (
          <EventCard {...event} key={event.title} />
        ))}
      </div>
    </section>
  );
}
