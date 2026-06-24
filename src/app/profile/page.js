"use client";

import { useEffect, useState } from "react";

export default function ProfilePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    const savedName = localStorage.getItem("name");
    if (savedName) setName(savedName);

    const savedEmail = localStorage.getItem("email");
    if (savedEmail) setEmail(savedEmail);

    const savedAddress = localStorage.getItem("address");

    if (savedAddress) {
      const addr = JSON.parse(savedAddress);

      setAddress(
        `${addr.flat || ""}, ${addr.apartment || ""}, ${addr.location || ""}`
      );
    }
  }, []);

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        padding: "20px",
      }}
    >
      <div
        style={{
          background: "#00C853",
          color: "white",
          padding: "30px",
          borderRadius: "20px",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: "70px" }}>👤</div>

        <h2>{name || "User"}</h2>

        <p>{email}</p>
      </div>

      <div
        style={{
          background: "white",
          marginTop: "20px",
          borderRadius: "15px",
          padding: "20px",
        }}
      >
        <h3>Personal Information</h3>

        <p>
          <strong>👤 Name:</strong> {name}
        </p>

        <p>
          <strong>📧 Email:</strong> {email}
        </p>

        <p>
          <strong>📍 Address:</strong> {address}
        </p>
      </div>

      <div
        style={{
          background: "white",
          marginTop: "15px",
          borderRadius: "15px",
          overflow: "hidden",
        }}
      >
        <a href="/orders" style={menuStyle}>
          📦 My Orders
        </a>

        <a href="/wishlist" style={menuStyle}>
          ❤️ Wishlist
        </a>

        <a href="/cart" style={menuStyle}>
          🛒 Cart
        </a>

        <a href="/final-home" style={menuStyle}>
          🏠 Home
        </a>
      </div>

      <button
        onClick={logout}
        style={{
          width: "100%",
          marginTop: "20px",
          padding: "14px",
          background: "#ff4444",
          color: "white",
          border: "none",
          borderRadius: "12px",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Logout
      </button>
    </main>
  );
}

const menuStyle = {
  display: "block",
  padding: "16px",
  textDecoration: "none",
  color: "#333",
  borderBottom: "1px solid #eee",
};