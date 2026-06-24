"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function OrderDetailsPage() {
  const params = useParams();
  const router = useRouter();

  const [order, setOrder] = useState(null);

  useEffect(() => {
    const orders =
      JSON.parse(localStorage.getItem("orders")) || [];

    const foundOrder = orders.find(
      (o) => o.id.toString() === params.id
    );

    if (foundOrder) {
      setOrder(foundOrder);
    }
  }, [params.id]);

  const cancelOrder = () => {
    const orders =
      JSON.parse(localStorage.getItem("orders")) || [];

    const updatedOrders = orders.map((o) =>
      o.id.toString() === params.id
        ? { ...o, status: "❌ Cancelled" }
        : o
    );

    localStorage.setItem(
      "orders",
      JSON.stringify(updatedOrders)
    );

    setOrder({
      ...order,
      status: "❌ Cancelled",
    });

    alert("Order Cancelled");
  };

  if (!order) {
    return (
      <div style={{ padding: "20px" }}>
        Loading...
      </div>
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        padding: "20px",
      }}
    >
      <button
        onClick={() => router.back()}
        style={{
          marginBottom: "20px",
          border: "none",
          background: "none",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        ← Back
      </button>

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "15px",
        }}
      >
        <h2>📦 Order #{order.id}</h2>

        <p>
          <strong>Status:</strong>{" "}
          {order.status}
        </p>

        <p>
          <strong>Date:</strong>{" "}
          {order.date}
        </p>

        <p>
          <strong>Payment:</strong>{" "}
          {order.paymentMethod}
        </p>

        <p>
          <strong>Total:</strong> ₹
          {order.total}
        </p>

        <hr
          style={{
            margin: "20px 0",
          }}
        />

        <h3>Items Ordered</h3>

        {order.items.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              justifyContent:
                "space-between",
              marginTop: "10px",
            }}
          >
            <span>
              {item.name} × {item.qty}
            </span>

            <span>
              ₹{item.price * item.qty}
            </span>
          </div>
        ))}

        {order.status !== "❌ Cancelled" && (
          <button
            onClick={cancelOrder}
            style={{
              width: "100%",
              marginTop: "25px",
              padding: "14px",
              background: "#ff4444",
              color: "white",
              border: "none",
              borderRadius: "12px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Cancel Order
          </button>
        )}
      </div>
    </main>
  );
}