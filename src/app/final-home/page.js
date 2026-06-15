"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function FinalHome() {
  const [products, setProducts] = useState([]);
  const [address, setAddress] = useState(null);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));

    const saved = localStorage.getItem("address");
    if (saved) {
      setAddress(JSON.parse(saved));
    }
  }, []);

  const addToCart = (item) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
      id: item.id,
      title: item.title,
      price: item.price,
      thumbnail: item.thumbnail,
      qty: 1,
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Added to Cart ✅");
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        padding: "15px",
        paddingBottom: "80px",
      }}
    >
      <header
        style={{
          background: "#00C853",
          color: "white",
          padding: "15px",
          borderRadius: "12px",
          marginBottom: "15px",
        }}
      >
        <h2>🛒 Grocify</h2>

        <div
          style={{
            background: "white",
            color: "black",
            padding: "8px",
            borderRadius: "10px",
            marginTop: "10px",
          }}
        >
          📍 {address?.location || "Select Location"}
        </div>
      </header>

      <input
        type="text"
        placeholder="🔍 Search groceries..."
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "10px",
          border: "1px solid #ddd",
          marginBottom: "15px",
        }}
      />

      <h3>Categories</h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <div style={{ background: "white", padding: "15px", borderRadius: "10px", textAlign: "center" }}>
          🥬 Grocery & Kitchen
        </div>

        <div style={{ background: "white", padding: "15px", borderRadius: "10px", textAlign: "center" }}>
          🍟 Snacks & Drinks
        </div>

        <div style={{ background: "white", padding: "15px", borderRadius: "10px", textAlign: "center" }}>
          💄 Beauty & Personal Care
        </div>

        <div style={{ background: "white", padding: "15px", borderRadius: "10px", textAlign: "center" }}>
          🏠 Household Essentials
        </div>
      </div>

      <h3>🔥 Best Sellers</h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "10px",
        }}
      >
        {products.map((item) => (
          <div
            key={item.id}
            style={{
              background: "white",
              padding: "10px",
              borderRadius: "10px",
              textAlign: "center",
            }}
          >
            <Image
              src={item.thumbnail || "/placeholder.png"}
              width={120}
              height={100}
              alt={item.title || "Product"}
            />

            <h4>{item.title}</h4>

            <p>₹{item.price}</p>

            <button
              onClick={() => addToCart(item)}
              style={{
                background: "#00C853",
                color: "white",
                border: "none",
                padding: "8px 15px",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100%",
          background: "white",
          display: "flex",
          justifyContent: "space-around",
          padding: "12px",
          borderTop: "1px solid #ddd",
        }}
      >
        <a href="/final-home">🏠 Home</a>
        <a href="/orders">📦 Orders</a>
        <a href="/cart">🛒 Cart</a>
        <a href="/profile">👤 Profile</a>
      </div>
    </main>
  );
}