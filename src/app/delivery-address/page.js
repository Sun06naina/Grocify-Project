"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DeliveryAddress() {
  const router = useRouter();

  const [form, setForm] = useState({
    flat: "",
    apartment: "",
    location: ""
  });

  const submit = () => {
    localStorage.setItem("address", JSON.stringify(form));
    router.push("/final-home");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Delivery Address</h2>

      <input placeholder="Flat" onChange={e => setForm({...form, flat: e.target.value})} />
      <input placeholder="Apartment" onChange={e => setForm({...form, apartment: e.target.value})} />
      <input placeholder="Location" onChange={e => setForm({...form, location: e.target.value})} />

      <button onClick={submit} style={{
        marginTop: "10px",
        background: "green",
        color: "white",
        padding: "10px",
        width: "100%"
      }}>
        Continue
      </button>
    </div>
  );
}