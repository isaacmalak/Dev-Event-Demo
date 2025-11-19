import { Schema, model, models, Document, Types } from "mongoose";
import { Event } from "./event.model";

/** Booking document type */
export interface BookingDocument extends Document {
  eventId: Types.ObjectId;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

/** Booking schema definition */
const BookingSchema = new Schema<BookingDocument>(
  {
    eventId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Event",
      index: true, // faster queries by event
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

/**
 * Pre-save:
 * - Validate email format.
 * - Ensure eventId references an existing Event.
 */
BookingSchema.pre("save", async function (next) {
  const booking = this as BookingDocument;

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(booking.email)) {
    return next(new Error("Invalid email format."));
  }

  // Validate referenced event exists
  const eventExists = await Event.exists({ _id: booking.eventId });
  if (!eventExists) {
    return next(new Error("Referenced event does not exist."));
  }

  next();
});

export const Booking =
  models.Booking || model<BookingDocument>("Booking", BookingSchema);
