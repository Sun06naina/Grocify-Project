"use client";

export default function OrdersPage() {
  return (
    <main
      style={{
        padding: "20px",
        background: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      <h1>📦 My Orders</h1>

      <div
        style={{
          background: "white",
          padding: "15px",
          borderRadius: "10px",
          marginTop: "20px",
        }}
      >
        <h3>Order #1001</h3>
        <p>Items: 3</p>
        <p>Status: Preparing 🛵</p>
      </div>
    </main>
  );
}