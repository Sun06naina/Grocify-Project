"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import productsData from "../data/product.js";

export default function FinalHome() {
  const router = useRouter();

  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [address, setAddress] = useState(null);

  useEffect(() => {
    setProducts(productsData);

    const login = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(login === "true");

    const savedAddress = localStorage.getItem("address");
    if (savedAddress) {
      setAddress(JSON.parse(savedAddress));
    }
  }, []);

  const categories = ["All", ...new Set(productsData.map((p) => p.category))];

  const filteredProducts = products.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" ||
      item.category === selectedCategory;

    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const addToCart = (item) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existing = cart.find((p) => p.id === item.id);

    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image,
        qty: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to Cart ✅");
  };

  const addToWishlist = (item) => {
    const wishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    const exists = wishlist.find((p) => p.id === item.id);

    if (!exists) {
      wishlist.push(item);

      localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
      );

      alert("Added to Wishlist ❤️");
    }
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f5f5f5",
        padding: "15px",
        paddingBottom: "90px",
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
            padding: "12px",
            borderRadius: "10px",
            marginBottom: "15px",
          }}
        >
          📍 {address.flat}, {address.apartment},{" "}
          {address.location}
        </div>
      )}

      {/* SEARCH */}
      <input
        type="text"
        placeholder="🔍 Search groceries..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "10px",
          border: "1px solid #ddd",
          marginBottom: "15px",
        }}
      />

      {/* CATEGORY */}
      <h3>📂 Categories</h3>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              padding: "10px 15px",
              borderRadius: "25px",
              border: "none",
              cursor: "pointer",
              background:
                selectedCategory === cat
                  ? "#00C853"
                  : "white",
              color:
                selectedCategory === cat
                  ? "white"
                  : "black",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* PRODUCTS */}
      <h3>🛍️ Products</h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fill,minmax(180px,1fr))",
          gap: "15px",
        }}
      >
        {filteredProducts.map((item) => (
          <div
            key={item.id}
            style={{
              background: "white",
              borderRadius: "12px",
              padding: "12px",
              position: "relative",
              boxShadow:
                "0 2px 8px rgba(0,0,0,0.08)",
            }}
          >
            {/* Wishlist */}
            <button
              onClick={() => addToWishlist(item)}
              style={{
                position: "absolute",
                right: "10px",
                top: "10px",
                border: "none",
                background: "none",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              ❤️
            </button>

            {/* Product Image */}
            <img
              src={item.image}
              alt={item.name}
              onClick={() =>
                router.push(`/product/${item.id}`)
              }
              style={{
                width: "100%",
                height: "140px",
                objectFit: "cover",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            />

            <h4
              style={{
                marginTop: "10px",
                fontSize: "15px",
              }}
            >
              {item.name}
            </h4>

            <p
              style={{
                fontWeight: "bold",
              }}
            >
              ₹{item.price}
            </p>

            <button
              onClick={() => addToCart(item)}
              style={{
                width: "100%",
                background: "#00C853",
                color: "white",
                border: "none",
                padding: "10px",
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
        <a href="/wishlist">❤️ Wishlist</a>
        <a href="/profile">👤 Profile</a>
      </div>
    </main>
  );
}