"use client";

import { useRouter } from "next/navigation";

export default function Notification() {
  const router = useRouter();

  const next = () => {
    router.push("/delivery-location");
  };

  return (
    <div style={page}>
      <div style={card}>

        <div style={icon}>🔔</div>

        <h2 style={title}>Enable Notifications</h2>

        <p style={subtitle}>
          Get updates on order status, offers & delivery alerts
        </p>

        <div style={box}>
          📦 Order updates
        </div>

        <div style={box}>
          🎉 Special offers & discounts
        </div>

        <div style={box}>
          🚚 Delivery alerts
        </div>

        <button onClick={next} style={button}>
          Allow Notifications
        </button>

        <button onClick={next} style={secondary}>
          Not Now
        </button>

        <p style={smallText}>
          You can change this anytime in settings
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
  marginTop: "10px",
  background: "#00C853",
  color: "white",
  border: "none",
  borderRadius: "10px",
  fontWeight: "bold",
};

const secondary = {
  width: "100%",
  padding: "12px",
  marginTop: "10px",
  background: "white",
  color: "#00C853",
  border: "1px solid #00C853",
  borderRadius: "10px",
  fontWeight: "bold",
};

const smallText = {
  fontSize: "11px",
  color: "#888",
  marginTop: "10px",
};