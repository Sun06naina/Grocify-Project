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
<div style="font-family:Arial,sans-serif;padding:20px;">
  <h2 style="color:#16a34a;">🛒 Welcome to Grocify</h2>

  <p>Your verification code is:</p>

  <div style="
      font-size:32px;
      font-weight:bold;
      letter-spacing:6px;
      background:#f5f5f5;
      display:inline-block;
      padding:12px 20px;
      border-radius:8px;">
      ${otp}
  </div>

  <p style="margin-top:20px;">
    This OTP is valid for <b>5 minutes</b>.
  </p>

  <p>If you didn't request this OTP, you can ignore this email.</p>

  <br>

  <small>Team Grocify ❤️</small>
</div>
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