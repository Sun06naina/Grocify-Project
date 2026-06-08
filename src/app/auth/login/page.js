"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const [phone, setPhone] = useState("");

  const handleSendOTP = () => {
    if (phone.length !== 10) {
      alert("Enter valid 10-digit number");
      return;
    }

    router.push(`/auth/otp?phone=${phone}`);
  };

  return (
    <div style={page}>
      <div style={card}>
        
        <div style={logo}>🛒</div>

        <h2 style={title}>Login to Grocify</h2>

        <p style={subtitle}>
          Enter your mobile number to continue
        </p>

        <div style={inputBox}>
          <span style={{ marginRight: "5px" }}>+91</span>

          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Mobile number"
            style={input}
          />
        </div>

        <button onClick={handleSendOTP} style={button}>
          Send OTP
        </button>

        <p style={smallText}>
          We will send a verification code
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

const logo = {
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

const inputBox = {
  display: "flex",
  alignItems: "center",
  border: "1px solid #ddd",
  borderRadius: "10px",
  padding: "10px",
  marginBottom: "15px",
};

const input = {
  border: "none",
  outline: "none",
  width: "100%",
  fontSize: "16px",
};

const button = {
  width: "100%",
  padding: "12px",
  background: "#00C853",
  color: "white",
  border: "none",
  borderRadius: "10px",
  fontWeight: "bold",
};

const smallText = {
  fontSize: "11px",
  color: "#888",
  marginTop: "10px",
};