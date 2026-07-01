"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  FaTrash,
  FaMinus,
  FaPlus,
  FaShoppingCart,
} from "react-icons/fa";

export default function CartPage() {
  const router = useRouter();

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn !== "true") {
      alert("Please login first.");
      router.push("/auth/login");
      return;
    }

    const savedCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    setCart(savedCart);
  }, [router]);

  const updateQty = (id, type) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          qty:
            type === "inc"
              ? item.qty + 1
              : Math.max(1, item.qty - 1),
        };
      }
      return item;
    });

    setCart(updatedCart);
    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );
  };

  const removeItem = (id) => {
    const updatedCart = cart.filter(
      (item) => item.id !== id
    );

    setCart(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );
  };

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f7f7f7",
        padding: "18px",
        paddingBottom: "130px",
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
        <FaShoppingCart />
        My Cart
      </h1>

      {cart.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            marginTop: "90px",
          }}
        >
          <h2>Your cart is empty 🛒</h2>

          <p
            style={{
              color: "#777",
              marginTop: "10px",
            }}
          >
            Looks like you haven't added anything yet.
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
        <>
          {cart.map((item) => (
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
                boxShadow:
                  "0 4px 12px rgba(0,0,0,0.08)",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                decoding="async"
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

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginTop: "12px",
                    width: "120px",
                    border: "1px solid #ddd",
                    borderRadius: "10px",
                    overflow: "hidden",
                  }}
                >
                  <button
                    onClick={() =>
                      updateQty(item.id, "dec")
                    }
                    style={{
                      flex: 1,
                      border: "none",
                      background: "#f3f3f3",
                      padding: "10px",
                      cursor: "pointer",
                    }}
                  >
                    <FaMinus />
                  </button>

                  <span
                    style={{
                      flex: 1,
                      textAlign: "center",
                      fontWeight: "bold",
                    }}
                  >
                    {item.qty}
                  </span>

                  <button
                    onClick={() =>
                      updateQty(item.id, "inc")
                    }
                    style={{
                      flex: 1,
                      border: "none",
                      background: "#f3f3f3",
                      padding: "10px",
                      cursor: "pointer",
                    }}
                  >
                    <FaPlus />
                  </button>
                </div>
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
          )
          )
          }
                    {/* BILL DETAILS */}
          <div
            style={{
              background: "#fff",
              borderRadius: "18px",
              padding: "20px",
              marginTop: "20px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            }}
          >
            <h2
              style={{
                marginBottom: "18px",
                fontSize: "20px",
              }}
            >
              Bill Details
            </h2>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "12px",
                color: "#555",
              }}
            >
              <span>Items ({cart.length})</span>
              <span>₹{total}</span>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "12px",
                color: "#555",
              }}
            >
              <span>Delivery Fee</span>
              <span
                style={{
                  color: "#00C853",
                  fontWeight: "bold",
                }}
              >
                FREE
              </span>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "15px",
                color: "#555",
              }}
            >
              <span>Platform Fee</span>
              <span>₹5</span>
            </div>

            <hr
              style={{
                border: "0",
                borderTop: "1px solid #eee",
                marginBottom: "15px",
              }}
            />

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              <span>Grand Total</span>

              <span style={{ color: "#00C853" }}>
                ₹{total + 5}
              </span>
            </div>
          </div>

          {/* CHECKOUT BUTTON */}
          <button
            onClick={() => router.push("/select-address")}
            style={{
              width: "100%",
              marginTop: "25px",
              padding: "16px",
              background: "#00C853",
              color: "#fff",
              border: "none",
              borderRadius: "14px",
              fontSize: "17px",
              fontWeight: "bold",
              cursor: "pointer",
              boxShadow: "0 8px 20px rgba(0,200,83,0.3)",
            }}
          >
            🛍️ Proceed to Checkout • ₹{total + 5}
          </button>
        </>
      )}
    </main>
  );
}