import { NextRequest, NextResponse } from "next/server";
import { getGroupchats } from "@/lib/groupes";

export async function GET() {
    try {
        const messages = await getGroupchats();
        return NextResponse.json(messages);
    } catch (error) {
        return NextResponse.json(
        { error: "Failed to fetch nutrition data" },
        { status: 500 }
        );
    }
}