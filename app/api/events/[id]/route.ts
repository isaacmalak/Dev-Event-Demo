import { Event } from "@/database";
import { connectToDatabase } from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";

type RouteParams = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(req: NextRequest, { params }: RouteParams) {
  try {
    await connectToDatabase();
    const event = await Event.findById((await params).id);
    if (!event)
      return NextResponse.json(
        { message: "Couldn`t find this event" },
        { status: 404 },
      );
    return NextResponse.json({ event }, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      { message: "Failed to fetch event details" },
      { status: 500 },
    );
  }
}
