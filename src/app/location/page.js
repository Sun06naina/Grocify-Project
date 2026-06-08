"use client";

import { useRouter } from "next/navigation";

export default function LocationPermission() {
  const router = useRouter();

  const next = () => {
    router.push("/permissions/notification");
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to bottom, #e8f5e9, #ffffff)",
      }}
    >
      <div
        style={{
          width: "90%",
          maxWidth: "380px",
          background: "white",
          borderRadius: "25px",
          padding: "25px",
          textAlign: "center",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        }}
      >
        {/* ICON */}
        <div style={{ fontSize: "50px", marginBottom: "10px" }}>
          📍
        </div>

        {/* TITLE */}
        <h2 style={{ color: "#00C853", marginBottom: "5px" }}>
          Enable Location
        </h2>

        <p style={{ fontSize: "13px", color: "#666" }}>
          Allow location access to show nearby stores, faster delivery & accurate address selection
        </p>

        {/* OPTIONS CARD */}
        <div style={{ marginTop: "20px", textAlign: "left" }}>
          
          <div style={boxStyle}>
            📍 Allow Location
          </div>

          <div style={boxStyle}>
            ⏱ Allow While Using App
          </div>

          <div style={boxStyle}>
            ❌ Don't Allow
          </div>
        </div>

        {/* BUTTON */}
        <button
          onClick={next}
          style={{
            marginTop: "20px",
            width: "100%",
            padding: "12px",
            background: "#00C853",
            color: "white",
            border: "none",
            borderRadius: "12px",
            fontWeight: "bold",
            fontSize: "14px",
          }}
        >
          Continue
        </button>

        <p style={{ fontSize: "11px", color: "#888", marginTop: "10px" }}>
          You can change this anytime in settings
        </p>
      </div>
    </div>
  );
}

const boxStyle = {
  padding: "12px",
  marginBottom: "10px",
  borderRadius: "12px",
  border: "1px solid #eee",
  fontSize: "14px",
  background: "#fafafa",
};