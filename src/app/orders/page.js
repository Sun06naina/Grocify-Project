"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function OrdersPage() {
  const router = useRouter();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders =
      JSON.parse(localStorage.getItem("orders")) || [];

    setOrders(savedOrders);
  }, []);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        padding: "20px",
      }}
    >
      <h1
        style={{
          color: "#00C853",
          marginBottom: "20px",
        }}
      >
        📦 My Orders
      </h1>

      {orders.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            marginTop: "80px",
          }}
        >
          <h2>No Orders Yet 😔</h2>

          <button
            onClick={() => router.push("/final-home")}
            style={{
              marginTop: "15px",
              background: "#00C853",
              color: "white",
              border: "none",
              padding: "12px 20px",
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        orders.map((order) => (
          <div
            key={order.id}
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "15px",
              marginBottom: "15px",
              boxShadow:
                "0 2px 10px rgba(0,0,0,0.08)",
            }}
          >
            <h3>Order #{order.id}</h3>

            <p>📅 {order.date}</p>

            <p>
              <strong>Status:</strong>{" "}
              {order.status}
            </p>

            <p>
              <strong>Total:</strong> ₹
              {order.total}
            </p>

            <button
              onClick={() =>
                router.push(`/orders/${order.id}`)
              }
              style={{
                marginTop: "10px",
                background: "#00C853",
                color: "white",
                border: "none",
                padding: "10px 15px",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              View Details
            </button>
          </div>
        ))
      )}
    </main>
  );
}