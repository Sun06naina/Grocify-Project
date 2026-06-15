"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    fetch("/api/products")
      .then(res => res.json())
      .then(setProducts);

    const login = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(login === "true");
  }, []);

  return (
    <main style={{ minHeight: "100vh", background: "#00C853", padding: "20px" }}>

     <header style={{
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "#00C853",
  padding: "15px",
  color: "white"
}}>
  
  <h2>Grocify</h2>

  <a href="/auth/login">
    <button style={{
      background: "white",
      color: "#00C853",
      padding: "8px 12px",
      borderRadius: "8px",
      border: "none",
      fontWeight: "bold"
    }}>
      Login
    </button>
  </a>

</header>

      {/* PRODUCTS */}
      <div style={{
        marginTop: "20px",
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "10px"
      }}>
        {products.map(item => (
          <div key={item.id} style={{
            background: "white",
            padding: "10px",
            borderRadius: "10px",
            textAlign: "center"
          }}>
            <Image
  src={item.thumbnail || "/placeholder.png"}
  width={120}
  height={100}
  alt={item.title || "Product"}
/>

<h4>{item.title}</h4>
            <p>₹{item.price}</p>
          </div>
        ))}
      </div>

    </main>
  );
}