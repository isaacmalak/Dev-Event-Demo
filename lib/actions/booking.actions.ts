"use server";
import { Booking } from "@/database";
import { connectToDatabase } from "../mongodb";

export async function BookingEvent({
  eventId,
  userEmail,
}: {
  eventId: string;
  userEmail: string;
}) {
  try {
    await connectToDatabase();
    const response = JSON.parse(
      JSON.stringify(await Booking.create({ eventId, email: userEmail })),
    );
    return { success: true, booking: response , message: "You have successfully booked the event."};
  } catch (error) {
    console.log("BOOKING EVENT ERROR:", error);
    return { success: false, message: "Booking failed due to an error." };
  }
}
