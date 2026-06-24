"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DeliveryAddress() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    flat: "",
    apartment: "",
    location: "",
  });

  const submit = () => {
    if (!form.name || !form.location) {
      alert("Please fill required fields");
      return;
    }

    localStorage.setItem("name", form.name);

    localStorage.setItem(
      "address",
      JSON.stringify({
        flat: form.flat,
        apartment: form.apartment,
        location: form.location,
      })
    );

    router.push("/final-home");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #e8f5e9, #ffffff)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "450px",
          background: "white",
          borderRadius: "25px",
          padding: "25px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        }}
      >
        <div
          style={{
            textAlign: "center",
            fontSize: "60px",
            marginBottom: "10px",
          }}
        >
          🏠
        </div>

        <h2
          style={{
            textAlign: "center",
            color: "#00C853",
            marginBottom: "5px",
          }}
        >
          Delivery Address
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#666",
            marginBottom: "25px",
            fontSize: "14px",
          }}
        >
          Add your delivery details for quick grocery delivery
        </p>

        <input
          placeholder="👤 Full Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          style={inputStyle}
        />

        <input
          placeholder="🏠 Flat / House No."
          value={form.flat}
          onChange={(e) =>
            setForm({ ...form, flat: e.target.value })
          }
          style={inputStyle}
        />

        <input
          placeholder="🏢 Apartment / Building Name"
          value={form.apartment}
          onChange={(e) =>
            setForm({
              ...form,
              apartment: e.target.value,
            })
          }
          style={inputStyle}
        />

        <input
          placeholder="📍 Area / Location"
          value={form.location}
          onChange={(e) =>
            setForm({
              ...form,
              location: e.target.value,
            })
          }
          style={inputStyle}
        />

        <button
          onClick={submit}
          style={{
            width: "100%",
            padding: "14px",
            background: "#00C853",
            color: "white",
            border: "none",
            borderRadius: "12px",
            fontWeight: "bold",
            fontSize: "15px",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          Save Address & Continue
        </button>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "14px",
  marginBottom: "15px",
  borderRadius: "12px",
  border: "1px solid #ddd",
  fontSize: "14px",
  outline: "none",
  boxSizing: "border-box",
};