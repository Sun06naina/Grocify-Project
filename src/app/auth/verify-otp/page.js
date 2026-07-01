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
    alert("Resend OTP functionality coming soon");
  };

  return (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
    <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">

      {/* Logo */}
      <div className="text-center">
        <div className="text-5xl">🔐</div>

        <h1 className="text-3xl font-bold text-green-600 mt-3">
          Verify OTP
        </h1>

        <p className="text-gray-500 mt-2">
          We've sent a verification code to
        </p>

        <p className="font-semibold text-gray-700 break-all mt-1">
          {email}
        </p>
      </div>

      {/* Timer */}
      <div className="mt-6 text-center">
        <span className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full font-semibold">
          Expires in {formatTime(timeLeft)}
        </span>
      </div>

      {/* OTP */}
      <input
        type="text"
        maxLength={6}
        placeholder="Enter 6-digit OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        className="w-full mt-6 border rounded-xl px-4 py-3 text-center text-xl tracking-[8px] focus:outline-none focus:ring-2 focus:ring-green-500"
      />

      {/* Verify */}
      <button
        onClick={handleVerify}
        className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition"
      >
        Verify OTP
      </button>

      {/* Resend */}
      <button
        onClick={handleResendOTP}
        className="w-full mt-3 border border-green-600 text-green-600 hover:bg-green-50 py-3 rounded-xl font-semibold transition"
      >
        Resend OTP
      </button>

      {/* Back */}
      <p className="text-center text-gray-600 mt-6">
        Wrong email?{" "}
        <span
          onClick={() => router.push("/auth/login")}
          className="text-green-600 font-semibold cursor-pointer"
        >
          Back to Login
        </span>
      </p>

    </div>
  </div>
);
}