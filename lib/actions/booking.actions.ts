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
    const response = await Booking.create({ eventId, event: userEmail });
    return { success: true, booking: response };
  } catch (error) {
    console.error("Error booking event:", error);
    return { success: false, message: "Booking failed due to an error." };
  }
}
