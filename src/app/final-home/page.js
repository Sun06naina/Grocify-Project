"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function FinalHome() {
  const router = useRouter();

  const [products, setProducts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [address, setAddress] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/products");
        const data = await res.json();

        console.log("API RESPONSE:", data);

        const productsArray = data.data || data || [];
        setProducts(productsArray);
      } catch (err) {
        console.log("Fetch error:", err);
      }
    };

    fetchProducts();

    const login = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(login === "true");

    const savedAddress = localStorage.getItem("address");
    if (savedAddress) {
      setAddress(JSON.parse(savedAddress));
    }
  }, []);

  const addToCart = (item) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
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
      {/* HEADER */}
      <header
        style={{
          background: "#00C853",
          color: "white",
          padding: "15px",
          borderRadius: "12px",
          marginBottom: "15px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2>🛒 Grocify</h2>

          {isLoggedIn ? (
            <button
              onClick={() => router.push("/profile")}
              style={{
                background: "white",
                color: "#00C853",
                border: "none",
                padding: "8px 15px",
                borderRadius: "8px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              👤 Profile
            </button>
          ) : (
            <button
              onClick={() => router.push("/auth/login")}
              style={{
                background: "white",
                color: "#00C853",
                border: "none",
                padding: "8px 15px",
                borderRadius: "8px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Login
            </button>
          )}
        </div>
      </header>

      {/* ADDRESS */}
      {isLoggedIn && address && (
        <div
          style={{
            background: "white",
            padding: "10px",
            borderRadius: "10px",
            marginBottom: "15px",
          }}
        >
          📍 {address.flat}, {address.apartment}, {address.location}
        </div>
      )}

      {/* SEARCH */}
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

      {/* CATEGORIES */}
      <h3>Categories</h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <div
          style={{
            background: "white",
            padding: "15px",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          🥬 Grocery & Kitchen
        </div>

        <div
          style={{
            background: "white",
            padding: "15px",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          🍟 Snacks & Drinks
        </div>

        <div
          style={{
            background: "white",
            padding: "15px",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          💄 Beauty & Personal Care
        </div>

        <div
          style={{
            background: "white",
            padding: "15px",
            borderRadius: "10px",
            textAlign: "center",
          }}
        >
          🏠 Household Essentials
        </div>
      </div>

      {/* PRODUCTS */}
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
            <img
              src={item.image}
              alt={item.name}
              width="120"
              height="100"
              style={{
                objectFit: "contain",
                marginBottom: "10px",
              }}
            />

            <h4 style={{ fontSize: "14px" }}>{item.name}</h4>

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

      {/* BOTTOM NAV */}
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