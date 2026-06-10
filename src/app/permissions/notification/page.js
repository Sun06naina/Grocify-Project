"use client";

import { useRouter } from "next/navigation";

export default function NotificationPermission() {
  const router = useRouter();

  const handleNext = (type) => {
    localStorage.setItem("notificationPermission", type);
    router.push("/delivery-address");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white p-6 rounded-xl shadow w-full max-w-md text-center">
        <h2 className="text-xl font-bold mb-4">
          Allow Notifications
        </h2>

        <button
          onClick={() => handleNext("allow")}
          className="w-full bg-green-600 text-white p-3 rounded mb-3"
        >
          Allow
        </button>

        <button
          onClick={() => handleNext("skip")}
          className="w-full bg-gray-400 text-white p-3 rounded"
        >
          Skip
        </button>
      </div>
    </div>
  );
}