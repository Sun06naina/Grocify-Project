import { NextResponse } from "next/server";

export async function POST(req) {
  const { email } = await req.json();

  // temporary localStorage replacement
  // later connect database here

  const existingUsers = [
    "test@gmail.com",
    "user@gmail.com"
  ];

  const exists = existingUsers.includes(email);

  return NextResponse.json({
    exists
  });
}