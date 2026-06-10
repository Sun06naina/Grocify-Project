"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSendOTP = async () => {
    // ✅ Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      alert("Please enter your email");
      return;
    }

    if (!emailRegex.test(email)) {
      alert("Enter a valid email");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (data.success) {
        // ✅ Store OTP + expiry (5 min)
        localStorage.setItem("otp", data.otp);
        localStorage.setItem("otpExpiry", Date.now() + 5 * 60 * 1000);
        localStorage.setItem("otpEmail", email);

        alert("OTP sent successfully!");

        router.push(`/auth/verify-otp?email=${email}`);
      } else {
        alert("Failed to send OTP");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-green-600 text-center mb-2">
          Login
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Enter your email to receive OTP
        </p>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4"
        />

        <button
          onClick={handleSendOTP}
          disabled={loading}
          className={`w-full py-3 rounded-lg font-semibold text-white transition 
            ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"}`}
        >
          {loading ? "Sending OTP..." : "Send OTP"}
        </button>
      </div>
    </main>
  );
}