"use client";

import { useEffect, useState } from "react";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  const updateCart = (updatedCart) => {
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const increaseQty = (index) => {
    const updated = [...cartItems];
    updated[index].qty += 1;
    updateCart(updated);
  };

  const decreaseQty = (index) => {
    const updated = [...cartItems];

    if (updated[index].qty > 1) {
      updated[index].qty -= 1;
      updateCart(updated);
    }
  };

  const removeItem = (index) => {
    const updated = cartItems.filter((_, i) => i !== index);
    updateCart(updated);
  };

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

              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <button onClick={() => decreaseQty(index)}>
                  ➖
                </button>

                <span>{item.qty}</span>

                <button onClick={() => increaseQty(index)}>
                  ➕
                </button>

                <button
                  onClick={() => removeItem(index)}
                  style={{
                    marginLeft: "auto",
                    background: "red",
                    color: "white",
                    border: "none",
                    padding: "5px 10px",
                    borderRadius: "5px",
                  }}
                >
                  Remove
                </button>
              </div>
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

            <a
              href="/payment"
              style={{
                display: "block",
                width: "100%",
                background: "#00C853",
                color: "white",
                padding: "12px",
                borderRadius: "10px",
                textAlign: "center",
                textDecoration: "none",
                boxSizing: "border-box",
              }}
            >
              Proceed to Checkout
            </a>
          </div>
        </>
      )}
    </main>
  );
}