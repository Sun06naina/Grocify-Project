import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);

    const searchTerm = searchParams.get("search_term");

    if (!searchTerm) {
      return NextResponse.json(
        { error: "Missing search_term" },
        { status: 400 }
      );
    }

    const apiUrl =
      `${process.env.XBYTE_BASE_URL}/search` +
      `?api_key=${process.env.XBYTE_API_KEY}` +
      `&domain=blinkit` +
      `&country=ind` +
      `&platform=web` +
      `&endpoint_type=gt8514_search_by_keyword` +
      `&search_term=${encodeURIComponent(searchTerm)}`;

    const response = await fetch(apiUrl);
    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}