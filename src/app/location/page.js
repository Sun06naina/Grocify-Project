"use client";

import { useRouter } from "next/navigation";

export default function LocationPermission() {
  const router = useRouter();

 const handleContinue = () => {
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
        <div style={{ fontSize: "70px", marginBottom: "15px" }}>
          📍
        </div>

        {/* TITLE */}
        <h2 style={{ color: "#00C853", marginBottom: "5px" }}>
          Enable Location
        </h2>

        <p style={{ fontSize: "13px", color: "#666" }}>
          Enable location to discover nearby stores, faster delivery and a smoother shopping experience.
        </p>

        {/* OPTIONS CARD */}
        <div
  style={{
    marginTop: "20px",
    background: "#F1F8E9",
    padding: "15px",
    borderRadius: "12px",
    textAlign: "left",
    color: "#2E7D32",
    fontSize: "14px",
  }}
>
  📍 Your location helps us find nearby stores, show
  accurate delivery times and auto-fill your address.
</div>


        {/* BUTTON */}
        <button
          onClick={handleContinue}
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
          Allow Location Access
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