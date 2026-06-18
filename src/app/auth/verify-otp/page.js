"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function VerifyOTPPage() {
  const [otp, setOtp] = useState("");
  const [timeLeft, setTimeLeft] = useState(0);

  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email");

  useEffect(() => {
    const expiry = localStorage.getItem("otpExpiry");

    if (!expiry) return;

    const interval = setInterval(() => {
      const diff = Number(expiry) - Date.now();

      if (diff <= 0) {
        setTimeLeft(0);
        clearInterval(interval);
      } else {
        setTimeLeft(diff);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleVerify = () => {
    const savedOTP = localStorage.getItem("otp");
    const expiryTime = localStorage.getItem("otpExpiry");

    if (!savedOTP) {
      alert("No OTP found. Please request a new OTP.");
      return;
    }

    if (Date.now() > Number(expiryTime)) {
      alert("OTP Expired. Please resend OTP.");
      return;
    }

   if (otp === savedOTP) {
  alert("Login Successful!");

  localStorage.setItem("isLoggedIn", "true");

  localStorage.removeItem("otp");
  localStorage.removeItem("otpExpiry");

  router.push("/permissions/location");
} else {
  alert("Invalid OTP");
}
  };

  const handleResendOTP = () => {
    alert("Connect your Send OTP API here");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">

        <h1 className="text-3xl font-bold text-green-600 text-center mb-2">
          Verify OTP
        </h1>

        <p className="text-center text-gray-500 mb-2">
          OTP sent to {email}
        </p>git remote set-url origin https://github.com/Sun06naina/Groccifyy.git

        {/* ✅ LIVE TIMER */}
        <p className="text-center text-red-500 font-semibold mb-4">
          OTP expires in: {formatTime(timeLeft)}
        </p>

        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="w-full border p-3 rounded-lg mb-4"
        />

        <button
          onClick={handleVerify}
          className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold mb-3"
        >
          Verify OTP
        </button>

        <button
          onClick={handleResendOTP}
          className="w-full border border-green-600 text-green-600 py-3 rounded-lg font-semibold"
        >
          Resend OTP
        </button>
      </div>
    </main>
  );
}