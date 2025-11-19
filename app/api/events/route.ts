import { connectToDatabase } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import { Event } from "../../../database/index";

export async function POST(req: NextRequest) {
  try {
    await connectToDatabase();
    const formData = await req.formData();
    let event;

    try {
      event = Object.fromEntries(formData.entries());
    } catch (e) {
      return NextResponse.json(
        { message: "invalid json data formate" },
        { status: 400 },
      );
    }

    const createdEvent = await Event.create(event);

    return NextResponse.json({
      message: "Event created successfully",
      event: createdEvent,

    }, {status: 201});
  } catch (e) {
    console.log("[EVENTS]", e);
    return NextResponse.json(
      {
        message: "Events Post request failed",
        error: e instanceof Error ? e.message : "Unknown",
      },
      { status: 500 },
    );
  }
}
