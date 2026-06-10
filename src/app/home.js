"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [address, setAddress] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("address");
    if (saved) setAddress(JSON.parse(saved));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* TOP BAR */}
      <div className="flex justify-between items-center p-4 bg-white shadow">
        <div className="font-bold text-lg">👤 Profile</div>

        <div className="text-sm text-gray-600">
          {address?.location || "No Address"}
        </div>
      </div>

      {/* ADDRESS BOX */}
      <div className="p-4">
        <div className="bg-white p-3 rounded shadow">
          <h3 className="font-semibold mb-2">Delivery Address</h3>
          {address ? (
            <p className="text-sm text-gray-700">
              {address.flat}, {address.door}, {address.apartment}, {address.location}
            </p>
          ) : (
            <p>No address found</p>
          )}
        </div>
      </div>

      {/* GROCERIES */}
      <div className="p-4">
        <h2 className="font-bold mb-2">Groceries</h2>

        <div className="grid grid-cols-2 gap-3">
          {["Rice", "Milk", "Bread", "Eggs", "Fruits", "Vegetables"].map(
            (item, i) => (
              <div key={i} className="bg-white p-3 rounded shadow">
                {item}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}