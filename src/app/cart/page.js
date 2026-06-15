"use client";

import { useEffect, useState } from "react";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <main
      style={{
        padding: "20px",
        background: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      <h1>🛒 My Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div
              key={index}
              style={{
                background: "white",
                padding: "15px",
                borderRadius: "10px",
                marginBottom: "10px",
              }}
            >
              <h3>{item.title}</h3>
              <p>₹{item.price}</p>
              <p>Quantity: {item.qty}</p>
            </div>
          ))}

          <div
            style={{
              background: "white",
              padding: "15px",
              borderRadius: "10px",
              marginTop: "20px",
            }}
          >
            <h2>Total: ₹{total}</h2>

            <button
              style={{
                width: "100%",
                background: "#00C853",
                color: "white",
                border: "none",
                padding: "12px",
                borderRadius: "10px",
                fontSize: "16px",
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </main>
  );
}