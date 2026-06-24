"use client";

import { useEffect, useState } from "react";

export default function WishlistPage() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const savedWishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    setWishlist(savedWishlist);
  }, []);

  const removeItem = (id) => {
    const updatedWishlist = wishlist.filter(
      (item) => item.id !== id
    );

    setWishlist(updatedWishlist);

    localStorage.setItem(
      "wishlist",
      JSON.stringify(updatedWishlist)
    );
  };

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
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        ❤️ My Wishlist
      </h1>

      {wishlist.length === 0 ? (
        <div
          style={{
            background: "white",
            padding: "30px",
            borderRadius: "15px",
            textAlign: "center",
          }}
        >
          <h3>No items in wishlist</h3>
          <p>Add products you love ❤️</p>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gap: "15px",
          }}
        >
          {wishlist.map((item) => (
            <div
              key={item.id}
              style={{
                background: "white",
                borderRadius: "15px",
                padding: "15px",
                display: "flex",
                gap: "15px",
                alignItems: "center",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "90px",
                  height: "90px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />

              <div style={{ flex: 1 }}>
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>
              </div>

              <button
                onClick={() => removeItem(item.id)}
                style={{
                  background: "#ff4444",
                  color: "white",
                  border: "none",
                  padding: "10px 12px",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}