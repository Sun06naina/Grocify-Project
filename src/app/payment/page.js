"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function PaymentPage() {
  const router = useRouter();

  const [total, setTotal] = useState(0);
  const [paymentMethod, setPaymentMethod] =
    useState("COD");

  useEffect(() => {
    const cart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const amount = cart.reduce(
      (sum, item) => sum + item.price * item.qty,
      0
    );

    setTotal(amount);
  }, []);

  const placeOrder = () => {
    const cart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const orders =
      JSON.parse(localStorage.getItem("orders")) || [];

    const newOrder = {
  id: Date.now(),
  items: cart,
  total,
  paymentMethod,
  status: "🟢 Order Placed",
  date: new Date().toLocaleString(),
};

    orders.unshift(newOrder);

    localStorage.setItem(
      "orders",
      JSON.stringify(orders)
    );

    localStorage.removeItem("cart");

    alert("Order Placed Successfully 🎉");

    router.push("/orders");
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        padding: "20px",
      }}
    >
      <h1 style={{ color: "#00C853" }}>
        💳 Payment
      </h1>

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "15px",
          marginTop: "20px",
        }}
      >
        <h3>Select Payment Method</h3>

        <label
          style={{
            display: "block",
            marginTop: "15px",
          }}
        >
          <input
            type="radio"
            checked={paymentMethod === "COD"}
            onChange={() =>
              setPaymentMethod("COD")
            }
          />
          Cash on Delivery
        </label>

        <label
          style={{
            display: "block",
            marginTop: "10px",
          }}
        >
          <input
            type="radio"
            checked={paymentMethod === "UPI"}
            onChange={() =>
              setPaymentMethod("UPI")
            }
          />
          UPI
        </label>

        <label
          style={{
            display: "block",
            marginTop: "10px",
          }}
        >
          <input
            type="radio"
            checked={paymentMethod === "Card"}
            onChange={() =>
              setPaymentMethod("Card")
            }
          />
          Debit / Credit Card
        </label>
      </div>

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "15px",
          marginTop: "20px",
        }}
      >
        <h2>Total Amount</h2>

        <h1 style={{ color: "#00C853" }}>
          ₹{total}
        </h1>
      </div>

      <button
        onClick={placeOrder}
        style={{
          width: "100%",
          padding: "15px",
          background: "#00C853",
          color: "white",
          border: "none",
          borderRadius: "12px",
          marginTop: "20px",
          fontWeight: "bold",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Place Order
      </button>
    </main>
  );
}