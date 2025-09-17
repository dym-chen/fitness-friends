import { NextRequest, NextResponse } from "next/server";
import { getExercises } from "@/lib/exercises";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const keywords = searchParams.get("keywords") || "";
  const limit = parseInt(searchParams.get("limit") || "20");

  try {
    const exercises = await getExercises(keywords, limit);
    return NextResponse.json(exercises);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch exercise data" },
      { status: 500 }
    );
  }
}
