"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const router = useRouter();

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    setCart(savedCart);
  }, []);

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
        background: "#f5f5f5",
        padding: "15px",
        paddingBottom: "120px",
      }}
    >
      <h1
        style={{
          color: "#00C853",
          marginBottom: "20px",
        }}
      >
        🛒 My Cart
      </h1>

      {cart.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            marginTop: "80px",
          }}
        >
          <h2>Your cart is empty 😔</h2>

          <button
            onClick={() =>
              router.push("/final-home")
            }
            style={{
              marginTop: "15px",
              background: "#00C853",
              color: "white",
              border: "none",
              padding: "12px 20px",
              borderRadius: "10px",
              cursor: "pointer",
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
                background: "white",
                borderRadius: "15px",
                padding: "15px",
                marginBottom: "15px",
                display: "flex",
                gap: "15px",
                alignItems: "center",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "80px",
                  height: "80px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />

              <div style={{ flex: 1 }}>
                <h3>{item.name}</h3>

                <p
                  style={{
                    color: "#00C853",
                    fontWeight: "bold",
                  }}
                >
                  ₹{item.price}
                </p>

                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                    marginTop: "8px",
                  }}
                >
                  <button
                    onClick={() =>
                      updateQty(item.id, "dec")
                    }
                  >
                    ➖
                  </button>

                  <span>{item.qty}</span>

                  <button
                    onClick={() =>
                      updateQty(item.id, "inc")
                    }
                  >
                    ➕
                  </button>
                </div>
              </div>

              <button
                onClick={() =>
                  removeItem(item.id)
                }
                style={{
                  border: "none",
                  background: "none",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              >
                ❌
              </button>
            </div>
          ))}

          {/* BILL */}
          <div
            style={{
              background: "white",
              borderRadius: "15px",
              padding: "20px",
              marginTop: "20px",
            }}
          >
            <h2>Bill Details</h2>

            <p>Total Items: {cart.length}</p>

            <p
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "#00C853",
              }}
            >
              Total: ₹{total}
            </p>
          </div>

          {/* CHECKOUT */}
          <button
            onClick={() =>
              router.push("/select-address")
            }
            style={{
              width: "100%",
              marginTop: "20px",
              padding: "15px",
              background: "#00C853",
              color: "white",
              border: "none",
              borderRadius: "12px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Proceed to Checkout →
          </button>
        </>
      )}
    </main>
  );
}