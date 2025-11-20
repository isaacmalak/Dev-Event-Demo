import { Schema, model, models, Document } from "mongoose";


/** Event document type for strong TS safety */
export interface EventDocument extends Document {
  title: string;
  
  description: string;
  overview: string;
  image: string;
  venue: string;
  location: string;
  date: string;
  time: string;
  mode: string;
  audience: string;
  agenda: string[];
  organizer: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

/** Event schema definition */
const EventSchema = new Schema<EventDocument>(
  {
    title: { type: String, required: true, trim: true },
    
    description: { type: String, required: true },
    overview: { type: String, required: true },
    image: { type: String, required: true },
    venue: { type: String, required: true },
    location: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    mode: { type: String, required: true },
    audience: { type: String, required: true },
    agenda: { type: [String], required: true },
    organizer: { type: String, required: true },
    tags: { type: [String], required: true },
  },
  { timestamps: true }
);

/**
 * Pre-save:
 * - Normalize date to ISO format.
 * - Normalize time to HH:MM format.
 */
EventSchema.pre("save", function (next) {
  const event = this as EventDocument;

  // Generate new slug when title changes
  
  // Validate required string fields are non-empty
  const requiredFields: Array<keyof EventDocument> = [
    "title",
    "description",
    "overview",
    "image",
    "venue",
    "location",
    "date",
    "time",
    "mode",
    "audience",
    "organizer",
  ];
  for (const field of requiredFields) {
    if (!event[field] || String(event[field]).trim().length === 0) {
      return next(new Error(`Field '${field}' is required and cannot be empty.`));
    }
  }

  // Normalize date to YYYY-MM-DD (ISO date only)
  const dateObj = new Date(event.date);
  if (isNaN(dateObj.getTime())) {
    return next(new Error("Invalid date format."));
  }
  event.date = dateObj.toISOString().split("T")[0];

  // Normalize time to HH:MM (24h)
  const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
  if (!timeRegex.test(event.time)) {
    return next(new Error("Time must be in HH:MM 24-hour format."));
  }

  next();
});

export const Event = models.Event || model<EventDocument>("Event", EventSchema);
