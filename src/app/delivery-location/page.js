"use client";

import { useRouter } from "next/navigation";

export default function DeliveryLocation() {
  const router = useRouter();

  return (
    <div style={page}>
      <div style={card}>

        <div style={icon}>🏠</div>

        <h2 style={title}>Set Delivery Location</h2>

        <p style={subtitle}>
          Choose how you want to receive your groceries
        </p>

        <div style={box}>
          📍 Use Current Location
        </div>

        <div style={box}>
          🏡 Select Saved Address
        </div>

        <div style={box}>
          ➕ Add New Address
        </div>

        <button
          onClick={() => router.push("/")}
          style={button}
        >
          Continue to Home
        </button>

        <p style={smallText}>
          You can update your address anytime in profile
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
  maxWidth: "380px",
  background: "white",
  padding: "25px",
  borderRadius: "20px",
  textAlign: "center",
  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
};

const icon = {
  fontSize: "45px",
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

const box = {
  padding: "12px",
  marginBottom: "10px",
  borderRadius: "10px",
  border: "1px solid #eee",
  background: "#fafafa",
  textAlign: "left",
  fontSize: "14px",
};

const button = {
  width: "100%",
  padding: "12px",
  marginTop: "15px",
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