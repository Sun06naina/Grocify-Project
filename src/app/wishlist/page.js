"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaHeart, FaTrash, FaShoppingCart } from "react-icons/fa";

export default function WishlistPage() {
  const router = useRouter();
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn !== "true") {
      alert("Please login first.");
      router.push("/auth/login");
      return;
    }

    const savedWishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    setWishlist(savedWishlist);
  }, [router]);

  const removeItem = (id) => {
    const updated = wishlist.filter((item) => item.id !== id);

    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  const addToCart = (item) => {
    const cart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const existing = cart.find((p) => p.id === item.id);

    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({
        id: item.id,
        name: item.name,
        image: item.image,
        price: item.price,
        qty: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Added to Cart");
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f7f7f7",
        padding: "18px",
      }}
    >
      <h1
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          color: "#00C853",
          marginBottom: "25px",
        }}
      >
        <FaHeart />
        My Wishlist
      </h1>

      {wishlist.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            marginTop: "90px",
          }}
        >
          <h2>Your wishlist is empty</h2>

          <p
            style={{
              color: "#777",
              marginTop: "10px",
            }}
          >
            Save your favourite products here.
          </p>

          <button
            onClick={() => router.push("/final-home")}
            style={{
              marginTop: "20px",
              background: "#00C853",
              color: "#fff",
              border: "none",
              padding: "14px 24px",
              borderRadius: "12px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        wishlist.map((item) => (
          <div
            key={item.id}
            style={{
              background: "#fff",
              borderRadius: "18px",
              padding: "15px",
              marginBottom: "18px",
              display: "flex",
              gap: "15px",
              alignItems: "center",
              boxShadow: "0 4px 12px rgba(0,0,0,.08)",
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{
                width: "95px",
                height: "95px",
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />

            <div style={{ flex: 1 }}>
              <h3>{item.name}</h3>

              <p
                style={{
                  color: "#00C853",
                  fontWeight: "bold",
                  fontSize: "18px",
                  marginTop: "5px",
                }}
              >
                ₹{item.price}
              </p>

              <button
                onClick={() => addToCart(item)}
                style={{
                  marginTop: "12px",
                  background: "#00C853",
                  color: "#fff",
                  border: "none",
                  padding: "10px 18px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <FaShoppingCart />
                Add to Cart
              </button>
            </div>

            <button
              onClick={() => removeItem(item.id)}
              style={{
                border: "none",
                background: "#ffeaea",
                color: "#ff3b30",
                padding: "12px",
                borderRadius: "12px",
                cursor: "pointer",
              }}
            >
              <FaTrash />
            </button>
          </div>
        ))
      )}
    </main>
  );
}