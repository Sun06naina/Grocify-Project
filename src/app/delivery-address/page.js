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
      alert("Please fill all required fields.");
      return;
    }

    // Save user name
    localStorage.setItem("name", form.name);

    // Save complete address
    localStorage.setItem(
      "address",
      JSON.stringify({
        name: form.name,
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
          background: "#fff",
          borderRadius: "20px",
          padding: "30px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#00C853",
            marginBottom: "8px",
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
          Enter your delivery details.
        </p>

        <input
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="Flat / House No."
          value={form.flat}
          onChange={(e) =>
            setForm({ ...form, flat: e.target.value })
          }
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="Apartment / Building"
          value={form.apartment}
          onChange={(e) =>
            setForm({ ...form, apartment: e.target.value })
          }
          style={inputStyle}
        />

        <input
          type="text"
          placeholder="Area / Location"
          value={form.location}
          onChange={(e) =>
            setForm({ ...form, location: e.target.value })
          }
          style={inputStyle}
        />

        <button
          onClick={submit}
          style={{
            width: "100%",
            padding: "14px",
            background: "#00C853",
            color: "#fff",
            border: "none",
            borderRadius: "12px",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
            marginTop: "10px",
          }}
        >
          Save Address
        </button>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "14px",
  marginBottom: "15px",
  border: "1px solid #ddd",
  borderRadius: "10px",
  fontSize: "15px",
  outline: "none",
  boxSizing: "border-box",
};