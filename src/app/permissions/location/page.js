"use client";

import { useRouter } from "next/navigation";

export default function LocationPermission() {
  const router = useRouter();

  const goNext = () => {
    router.push("/permissions/notification");
  };

  return (
    <div style={page}>
      <div style={card}>

        <div style={icon}>📍</div>

        <h2 style={title}>Enable Location</h2>

        <p style={subtitle}>
          We use your location to show nearby stores and deliver groceries faster
        </p>

        <div style={box}>
          <p>📌 Allow Location</p>
        </div>

        <div style={box}>
          <p>⏱ Allow While Using App</p>
        </div>

        <div style={box}>
          <p>❌ Don't Allow</p>
        </div>

        <button onClick={goNext} style={button}>
          Continue
        </button>

        <p style={smallText}>
          You can change this later in settings
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
};

const button = {
  width: "100%",
  padding: "12px",
  marginTop: "10px",
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