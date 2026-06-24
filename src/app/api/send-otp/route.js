import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { email } = await req.json();

    // Generate 6-digit OTP
    const otp = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

console.log("Sending OTP to:", email);
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Grocify OTP Verification",
      html: `
        <h2>Welcome to Grocify</h2>
        <p>Your OTP is:</p>
        <h1>${otp}</h1>
        <p>This OTP is valid for login verification.</p>
      `,
    });
    console.log("OTP sent successfully");

    return Response.json({
      success: true,
      otp,
    });
  } catch (error) {
  console.error("OTP ERROR:", error);

  return Response.json({
    success: false,
    message: error.message,
  });
}
}