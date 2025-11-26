"use server";

import { Event } from "@/database";
import { connectToDatabase } from "../mongodb";

export async function getSimilarEventsByTitle(title: string) {
  try {
    await connectToDatabase();
    const event = await Event.findOne({ title });
    return JSON.parse(
      JSON.stringify(
        await Event.find({
          tags: { $in: event?.tags || [] },
          _id: { $ne: event?._id },
        })
          .limit(3)
          .exec(),
      ),
    );
  } catch {
    return [];
  }
}
