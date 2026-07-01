"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import productsData from "../data/product";

import {
  FiHeart,
  FiShoppingCart,
  FiUser,
  FiSearch,
  FiMapPin,
} from "react-icons/fi";

export default function FinalHome() {
  const router = useRouter();

  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [maxPrice, setMaxPrice] = useState(1000);

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

  const categories = [
    "All",
    ...new Set(productsData.map((p) => p.category)),
  ];

  const filteredProducts = products.filter((item) => {
    const matchesCategory =
      selectedCategory === "All" ||
      item.category === selectedCategory;

    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesPrice = item.price <= maxPrice;

    return (
      matchesCategory &&
      matchesSearch &&
      matchesPrice
    );
  });

  const addToCart = (item) => {
    const login = localStorage.getItem("isLoggedIn");

    if (login !== "true") {
      const go = confirm(
        "Login is required to add products to Cart.\n\nLogin now?"
      );

      if (go) router.push("/auth/login");

      return;
    }

    const cart =
      JSON.parse(localStorage.getItem("cart")) || [];

    const existing = cart.find(
      (p) => p.id === item.id
    );

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

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

    alert("Added to Cart");
  };

  const addToWishlist = (item) => {
    const login = localStorage.getItem("isLoggedIn");

    if (login !== "true") {
      const go = confirm(
        "Please login to save products in Wishlist.\n\nLogin now?"
      );

      if (go) router.push("/auth/login");

      return;
    }

    const wishlist =
      JSON.parse(localStorage.getItem("wishlist")) ||
      [];

    const exists = wishlist.find(
      (p) => p.id === item.id
    );

    if (!exists) {
      wishlist.push(item);

      localStorage.setItem(
        "wishlist",
        JSON.stringify(wishlist)
      );

      alert("Added to Wishlist");
    } else {
      alert("Already in Wishlist");
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
        borderRadius: "18px",
        padding: "18px",
        color: "white",
        marginBottom: "18px",
        boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h2 style={{ margin: 0 }}>Grocify</h2>
          <p style={{ margin: "4px 0 0", opacity: 0.9 }}>
            Fresh Groceries Delivered
          </p>
        </div>

        <button
          onClick={() =>
            router.push(isLoggedIn ? "/profile" : "/auth/login")
          }
          style={{
            width: "45px",
            height: "45px",
            borderRadius: "50%",
            border: "none",
            background: "white",
            cursor: "pointer",
          }}
        >
          <FiUser size={22} color="#00C853" />
        </button>
      </div>
    </header>

    {/* ADDRESS */}

    {isLoggedIn && address && (
      <div
        style={{
          background: "white",
          borderRadius: "15px",
          padding: "15px",
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "18px",
          boxShadow: "0 2px 8px rgba(0,0,0,.08)",
        }}
      >
        <FiMapPin color="#00C853" size={22} />

        <div>
          <strong>Deliver To</strong>

          <div style={{ color: "#666" }}>
            {address.flat}, {address.apartment},{" "}
            {address.location}
          </div>
        </div>
      </div>
    )}

    {/* SEARCH */}

    <div
      style={{
        background: "white",
        display: "flex",
        alignItems: "center",
        padding: "12px 15px",
        borderRadius: "15px",
        marginBottom: "20px",
        boxShadow: "0 2px 8px rgba(0,0,0,.08)",
      }}
    >
      <FiSearch color="#666" />

      <input
        type="text"
        placeholder="Search groceries..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          border: "none",
          outline: "none",
          marginLeft: "10px",
          width: "100%",
          fontSize: "15px",
        }}
      />
    </div>

    {/* CATEGORIES */}

    <h3 style={{ marginBottom: "12px" }}>
      Shop by Category
    </h3>

    <div
      style={{
        display: "flex",
        overflowX: "auto",
        gap: "10px",
        marginBottom: "20px",
      }}
    >
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setSelectedCategory(cat)}
          style={{
            whiteSpace: "nowrap",
            padding: "10px 20px",
            borderRadius: "30px",
            border:
              selectedCategory === cat
                ? "2px solid #00C853"
                : "1px solid #ddd",
            background:
              selectedCategory === cat
                ? "#00C853"
                : "white",
            color:
              selectedCategory === cat
                ? "white"
                : "#333",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          {cat}
        </button>
      ))}
    </div>

    {/* PRICE */}

    <div
      style={{
        background: "white",
        borderRadius: "15px",
        padding: "15px",
        marginBottom: "22px",
        boxShadow: "0 2px 8px rgba(0,0,0,.08)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <strong>Price Range</strong>

        <span
          style={{
            color: "#00C853",
            fontWeight: "bold",
          }}
        >
          ₹0 - ₹{maxPrice}
        </span>
      </div>

      <input
        type="range"
        min="0"
        max="1000"
        step="50"
        value={maxPrice}
        onChange={(e) =>
          setMaxPrice(Number(e.target.value))
        }
        style={{
          width: "100%",
          accentColor: "#00C853",
        }}
      />
    </div>

    {/* PRODUCTS */}

    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "15px",
      }}
    >
      <h3>Products</h3>

      <span style={{ color: "#666" }}>
        {filteredProducts.length} Items
      </span>
    </div>

    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fill,minmax(180px,1fr))",
        gap: "16px",
      }}
    >
      {filteredProducts.map((item) => (
        <div
          key={item.id}
          style={{
            background: "white",
            borderRadius: "18px",
            padding: "15px",
            position: "relative",
            boxShadow:
              "0 3px 12px rgba(0,0,0,.08)",
          }}
        >
          <button
            onClick={() => addToWishlist(item)}
            style={{
              position: "absolute",
              right: "12px",
              top: "12px",
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              border: "none",
              background: "#f6f6f6",
              cursor: "pointer",
            }}
          >
            <FiHeart color="#ff4d6d" />
          </button>

          <img
            src={item.image}
            alt={item.name}
            loading="lazy"
            decoding="async"
            onClick={() =>
              router.push(`/product/${item.id}`)
            }
            style={{
              width: "100%",
              height: "150px",
              objectFit: "cover",
              borderRadius: "12px",
              cursor: "pointer",
            }}
          />

          <h4 style={{ marginTop: "12px" }}>
            {item.name}
          </h4>

          <p
            style={{
              color: "#00C853",
              fontWeight: "bold",
              fontSize: "18px",
            }}
          >
            ₹{item.price}
          </p>

          <button
            onClick={() => addToCart(item)}
            style={{
              width: "100%",
              marginTop: "10px",
              padding: "11px",
              background: "#00C853",
              color: "white",
              border: "none",
              borderRadius: "10px",
              fontWeight: "600",
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
        right: 0,
        background: "white",
        display: "flex",
        justifyContent: "space-around",
        padding: "15px",
        borderTop: "1px solid #ddd",
        boxShadow: "0 -2px 10px rgba(0,0,0,.08)",
      }}
    >
      <button
        onClick={() => router.push("/final-home")}
        style={{ border: "none", background: "white", cursor: "pointer" }}
      >
        Home
      </button>

      <button
        onClick={() => router.push("/orders")}
        style={{ border: "none", background: "white", cursor: "pointer" }}
      >
        Orders
      </button>

      <button
        onClick={() => router.push("/cart")}
        style={{ border: "none", background: "white", cursor: "pointer" }}
      >
        <FiShoppingCart size={20} />
      </button>

      <button
        onClick={() => router.push("/wishlist")}
        style={{ border: "none", background: "white", cursor: "pointer" }}
      >
        <FiHeart size={20} />
      </button>

      <button
        onClick={() => router.push("/profile")}
        style={{ border: "none", background: "white", cursor: "pointer" }}
      >
        <FiUser size={20} />
      </button>
    </div>
  </main>
);
}