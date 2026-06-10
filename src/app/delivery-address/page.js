"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DeliveryAddress() {
  const [form, setForm] = useState({
    flat: "",
    apartment: "",
    location: "",
  });

  const router = useRouter();

  const handleSubmit = () => {
    localStorage.setItem("address", JSON.stringify(form));
    router.push("/delivery-location");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white p-6 rounded-xl shadow w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">
          Delivery Address
        </h2>

        <input
          placeholder="Flat No"
          className="w-full border p-2 mb-2"
          onChange={(e) => setForm({ ...form, flat: e.target.value })}
        />

        <input
          placeholder="Door No"
          className="w-full border p-2 mb-2"
          onChange={(e) => setForm({ ...form, door: e.target.value })}
        />

        <input
          placeholder="Apartment / House Name"
          className="w-full border p-2 mb-2"
          onChange={(e) => setForm({ ...form, apartment: e.target.value })}
        />

        <input
          placeholder="Location / Area"
          className="w-full border p-2 mb-4"
          onChange={(e) => setForm({ ...form, location: e.target.value })}
        />

        <button
          onClick={handleSubmit}
          className="w-full bg-green-600 text-white p-3 rounded"
        >
          Continue to Home
        </button>
      </div>
    </div>
  );
}