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
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f5f5",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          background: "white",
          padding: "30px",
          borderRadius: "20px",
          boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
        }}
      >
        <div
          style={{
            textAlign: "center",
            fontSize: "60px",
            marginBottom: "10px",
          }}
        >
          🔐
        </div>

        <h2
          style={{
            textAlign: "center",
            color: "#00C853",
            marginBottom: "10px",
          }}
        >
          Verify OTP
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#666",
            marginBottom: "10px",
          }}
        >
          OTP sent to
        </p>

        <p
          style={{
            textAlign: "center",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          {email}
        </p>

        <p
          style={{
            textAlign: "center",
            color: "red",
            fontWeight: "bold",
            marginBottom: "15px",
          }}
        >
          OTP expires in: {formatTime(timeLeft)}
        </p>

        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          style={{
            width: "100%",
            padding: "14px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            marginBottom: "15px",
            boxSizing: "border-box",
          }}
        />

        <button
          onClick={handleVerify}
          style={{
            width: "100%",
            padding: "14px",
            background: "#00C853",
            color: "white",
            border: "none",
            borderRadius: "10px",
            fontWeight: "bold",
            cursor: "pointer",
            marginBottom: "10px",
          }}
        >
          Verify OTP
        </button>

        <button
          onClick={handleResendOTP}
          style={{
            width: "100%",
            padding: "14px",
            background: "white",
            color: "#00C853",
            border: "2px solid #00C853",
            borderRadius: "10px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Resend OTP
        </button>
      </div>
    </main>
  );
}