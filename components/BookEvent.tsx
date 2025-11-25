"use client";
import { useState } from "react";

export function BookEvent() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setSubmission] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
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
