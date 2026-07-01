"use client";

import { useRouter } from "next/navigation";

export default function SupportPage() {
  const router = useRouter();

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f7f7f7",
        padding: "20px",
      }}
    >
      <h1
        style={{
          color: "#00C853",
          marginBottom: "20px",
        }}
      >
        Support
      </h1>

      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "16px",
          boxShadow: "0 4px 12px rgba(0,0,0,.08)",
        }}
      >
        <h3>Need Help?</h3>

        <p>Email: support@grocify.com</p>

        <p>Phone: +91 9876543210</p>

        <button
          onClick={() => router.push("/final-home")}
          style={{
            marginTop: "20px",
            background: "#00C853",
            color: "#fff",
            border: "none",
            padding: "12px 20px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Back to Home
        </button>
      </div>
    </main>
  );
}