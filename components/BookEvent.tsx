"use client";
import { BookingEvent } from "@/lib/actions/booking.actions";
import { useState } from "react";

export function BookEventForm({ eventId }: { eventId: string }) {
  const [email, setEmail] = useState("");
  const [isSubmitted, setSubmission] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    console.log("THIS IS THE EMAIL ===============================================>");
    console.log("THIS IS THE EVENT ID ===============================================>", eventId); 

    const {booking} = await BookingEvent({ userEmail: email, eventId: eventId });
    if(!booking) return;
    event.preventDefault();
    setTimeout(() => {
      setSubmission(true);
    }, 1000);
  };
  return (
    <div id="book-event">
      {isSubmitted ? (
        <p className="text-sm"> Thank you for signing up</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email Address </label>
            <input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email address"
            />
            <button type="submit" className="button-submit">
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
