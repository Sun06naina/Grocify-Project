"use client";

import { useRouter } from "next/navigation";

export default function LocationPermission() {
  const router = useRouter();

  const handleChoice = (type) => {
    localStorage.setItem("locationPermission", type);
    router.push("/permissions/notification");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white p-6 rounded-xl shadow w-full max-w-md text-center">
        <h2 className="text-xl font-bold mb-4">
          Allow Delivery Location
        </h2>

        <button
          onClick={() => handleChoice("allow")}
          className="w-full bg-green-600 text-white p-3 rounded mb-3"
        >
          Allow
        </button>

        <button
          onClick={() => handleChoice("while-using")}
          className="w-full bg-blue-600 text-white p-3 rounded mb-3"
        >
          Allow While Using App
        </button>

        <button
          onClick={() => handleChoice("deny")}
          className="w-full bg-gray-400 text-white p-3 rounded"
        >
          Don't Allow
        </button>
      </div>
    </div>
  );
}