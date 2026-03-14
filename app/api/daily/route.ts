import { NextResponse } from "next/server";
import { getDailyVerse } from "@/app/data/verses";

export async function GET() {
  const verse = getDailyVerse();
  return NextResponse.json(verse, {
    headers: {
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
