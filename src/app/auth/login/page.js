"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email) return alert("Enter email");

    try {
      setLoading(true);

      // ✅ CALL YOUR OTP API
      const res = await fetch("/api/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!data.success) {
        alert("Failed to send OTP");
        return;
      }

      // (TEMP for testing only)
      localStorage.setItem("otp", data.otp);
      localStorage.setItem("otpExpiry", Date.now() + 5 * 60 * 1000);

      alert("OTP sent to email ✔");

      // 👉 go to verify page
      router.push(`/auth/verify-otp?email=${email}`);

    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#f5f5f5"
    }}>
      
      <div style={{
        width: "90%",
        maxWidth: "400px",
        background: "white",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0 5px 20px rgba(0,0,0,0.1)"
      }}>

        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Login to Grocify
        </h2>

        <input
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            border: "1px solid #ccc",
            borderRadius: "8px"
          }}
        />

        <button
          onClick={handleLogin}
          disabled={loading}
          style={{
            width: "100%",
            padding: "12px",
            background: "#00C853",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontWeight: "bold"
          }}
        >
          {loading ? "Sending OTP..." : "Send OTP"}
        </button>

      </div>
    </div>
  );
}