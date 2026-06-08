"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function OTP() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const phone = searchParams.get("phone");
  const [otp, setOtp] = useState("");

  const handleVerify = () => {
    if (otp.length !== 4) {
      alert("Enter 4-digit OTP");
      return;
    }

    // fake verification
    if (otp === "1234") {
      router.push("/permissions/location");
    } else {
      alert("Invalid OTP (use 1234 for demo)");
    }
  };

  return (
    <div style={page}>
      <div style={card}>

        <div style={icon}>🔐</div>

        <h2 style={title}>OTP Verification</h2>

        <p style={subtitle}>
          Code sent to +91 {phone}
        </p>

        <input
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          maxLength={4}
          placeholder="Enter OTP"
          style={input}
        />

        <button onClick={handleVerify} style={button}>
          Verify OTP
        </button>

        <p style={resend}>
          Resend OTP
        </p>

      </div>
    </div>
  );
}

/* ---------- STYLES ---------- */

const page = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "linear-gradient(to bottom, #e8f5e9, #ffffff)",
};

const card = {
  width: "90%",
  maxWidth: "360px",
  background: "white",
  padding: "25px",
  borderRadius: "20px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  textAlign: "center",
};

const icon = {
  fontSize: "40px",
  marginBottom: "10px",
};

const title = {
  color: "#00C853",
  marginBottom: "5px",
};

const subtitle = {
  fontSize: "13px",
  color: "#777",
  marginBottom: "20px",
};

const input = {
  width: "100%",
  padding: "12px",
  borderRadius: "10px",
  border: "1px solid #ddd",
  textAlign: "center",
  fontSize: "18px",
  letterSpacing: "5px",
  outline: "none",
};

const button = {
  width: "100%",
  padding: "12px",
  background: "#00C853",
  color: "white",
  border: "none",
  borderRadius: "10px",
  fontWeight: "bold",
  marginTop: "15px",
};

const resend = {
  marginTop: "10px",
  fontSize: "12px",
  color: "#888",
  cursor: "pointer",
};