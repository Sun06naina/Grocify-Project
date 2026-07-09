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

  const handleVerify = async () => {
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

    if (otp !== savedOTP) {
      alert("Invalid OTP");
      return;
    }

    try {
      // Save new user to MongoDB
      if (localStorage.getItem("newUser") === "true") {
        const res = await fetch("/api/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: localStorage.getItem("name"),
            email: localStorage.getItem("email"),
            phone: localStorage.getItem("phone"),
          }),
        });

        const data = await res.json();

console.log(data);

if (!res.ok) {
  alert(data.message || "Server Error");
  return;
}
        localStorage.removeItem("newUser");
        localStorage.removeItem("name");
localStorage.removeItem("phone");
      }

      localStorage.setItem("isLoggedIn", "true");

      localStorage.removeItem("otp");
localStorage.removeItem("otpExpiry");
localStorage.removeItem("newUser");

      alert("Login Successful!");

      router.push("/permissions/location");
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    }
  };

  const handleResendOTP = async () => {
  try {
    const res = await fetch("/api/send-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (!data.success) {
      alert(data.message);
      return;
    }

    localStorage.setItem("otp", data.otp);
    localStorage.setItem(
      "otpExpiry",
      Date.now() + 5 * 60 * 1000
    );

    alert("OTP Resent Successfully!");
  } catch (err) {
    console.log(err);
    alert("Unable to resend OTP");
  }
};

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">

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

        <div className="mt-6 text-center">
          <span className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full font-semibold">
            Expires in {formatTime(timeLeft)}
          </span>
        </div>

        <input
          type="text"
          maxLength={6}
          placeholder="Enter 6-digit OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="w-full mt-6 border rounded-xl px-4 py-3 text-center text-xl tracking-[8px] focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <button
          onClick={handleVerify}
          className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold"
        >
          Verify OTP
        </button>

        <button
          onClick={handleResendOTP}
          className="w-full mt-3 border border-green-600 text-green-600 hover:bg-green-50 py-3 rounded-xl font-semibold"
        >
          Resend OTP
        </button>

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