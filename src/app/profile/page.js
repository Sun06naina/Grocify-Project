"use client";

import { useEffect, useState } from "react";

export default function ProfilePage() {
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    if (savedEmail) {
      setEmail(savedEmail);
    }

    const savedAddress = localStorage.getItem("address");
    if (savedAddress) {
      const addr = JSON.parse(savedAddress);
      setAddress(addr.location || "");
    }
  }, []);

  return (
    <main
      style={{
        padding: "20px",
        background: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      <h1>👤 My Profile</h1>

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "20px",
        }}
      >
        <h3>User</h3>
        <p>📧 {email}</p>
        <p>📍 {address}</p>
      </div>

      <div
        style={{
          background: "white",
          padding: "15px",
          borderRadius: "10px",
          marginTop: "15px",
        }}
      >
        <a
          href="/orders"
          style={{
            textDecoration: "none",
            color: "black",
          }}
        >
          📦 My Orders
        </a>
      </div>

      <div
        style={{
          background: "white",
          padding: "15px",
          borderRadius: "10px",
          marginTop: "15px",
        }}
      >
        <a
          href="/final-home"
          style={{
            textDecoration: "none",
            color: "black",
          }}
        >
          🏠 Home
        </a>
      </div>

      <button
        onClick={() => {
          localStorage.clear();
          window.location.href = "/";
        }}
        style={{
          width: "100%",
          marginTop: "20px",
          background: "red",
          color: "white",
          border: "none",
          padding: "12px",
          borderRadius: "10px",
          fontSize: "16px",
        }}
      >
        Logout
      </button>
    </main>
  );
}