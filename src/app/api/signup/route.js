import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(req) {
  try {
    await connectDB();

    const { name, email, phone } = await req.json();

    const existing = await User.findOne({ email });

    if (existing) {
      return NextResponse.json({
        success: false,
        message: "User already exists",
      });
    }

    await User.create({
      name,
      email,
      phone,
    });

    return NextResponse.json({
      success: true,
      message: "Account Created Successfully",
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json({
      success: false,
      message: "Server Error",
    });
  }
}