import { NextRequest, NextResponse } from "next/server";
import { getNutritionEntries } from "@/lib/nutrition";

export async function GET(request: NextRequest) {
    const { searchParams } = request.nextUrl;

    const query = {
      id: searchParams.get("id") || "",
      start: searchParams.get("start") || "",
      end: searchParams.get("end") || "",
    };

    try {
        const nutritionData = await getNutritionEntries(
          query.id,
          query.start,
          query.end
        );
        return NextResponse.json(nutritionData);
    } catch (error) {
        return NextResponse.json(
        { error: "Failed to fetch nutrition data" },
        { status: 500 }
        );
    }
}
