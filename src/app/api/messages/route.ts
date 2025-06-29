import { NextRequest, NextResponse } from "next/server";
import { getMessages } from "@/lib/messages";

export async function GET(request: NextRequest) {
    const { searchParams } = request.nextUrl;

    const group_id = searchParams.get("id") || "";

    try {
        const messages = await getMessages(group_id);
        return NextResponse.json(messages);
    } catch (error) {
        return NextResponse.json(
        { error: "Failed to fetch nutrition data" },
        { status: 500 }
        );
    }
}

export async function POST(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const group_id = searchParams.get("id") || "";

  try {
    const messages = await getMessages(group_id);
    return NextResponse.json(messages);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch nutrition data" },
      { status: 500 }
    );
  }
}
