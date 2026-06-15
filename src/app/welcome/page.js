"use client";

import { useRouter } from "next/navigation";

export default function Welcome() {
  const router = useRouter();

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#f5f5f5",
    }}>
      <div style={{
        background: "white",
        padding: "30px",
        borderRadius: "20px",
        width: "80%",
        textAlign: "center",
        boxShadow: "0 5px 20px rgba(0,0,0,0.1)",
      }}>
        <h1 style={{ color: "#00C853" }}>Welcome to Grocify</h1>
        <p>Fastest grocery delivery at your door 🚀</p>

        <button
          onClick={() => router.push("/auth/login")}
          style={{
            marginTop: "20px",
            padding: "12px",
            background: "#00C853",
            color: "white",
            border: "none",
            borderRadius: "10px",
            width: "100%",
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}