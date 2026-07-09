import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(req) {
  try {
    await connectDB();

    const { email } = await req.json();

    const user = await User.findOne({ email });

    return NextResponse.json({
      exists: !!user,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json({
      exists: false,
    });
  }
}