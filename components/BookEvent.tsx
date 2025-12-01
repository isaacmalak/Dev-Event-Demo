"use client";
import { BookingEvent } from "@/lib/actions/booking.actions";
import posthog from "posthog-js";
import { useState } from "react";

export function BookEventForm({ eventId }: { eventId: string }) {
  console.log("Event ID in BookEventForm:", eventId);

  const [email, setEmail] = useState("");
  const [isSubmitted, setSubmission] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const { success, message } = await BookingEvent({
      userEmail: email,
      eventId: eventId,
    });
    if (!success) {
      setSubmission(false);
      posthog.captureException("event_booking_failed", { eventId, email });
      console.error("Booking failed: =========>", message);
    } else {
      setSubmission(true);
      posthog.capture("event_booked", { eventId, email });
      console.log("Booking successful: ==========>", message);
    }
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
