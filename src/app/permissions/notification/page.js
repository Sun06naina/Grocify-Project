"use client";

import { useRouter } from "next/navigation";
import { IoNotifications } from "react-icons/io5";

export default function NotificationPermission() {
  const router = useRouter();

  const requestNotification = async () => {
    if (!("Notification" in window)) {
      alert("Notifications are not supported.");
      router.push("/delivery-address");
      return;
    }

    const permission = await Notification.requestPermission();

    localStorage.setItem("notificationPermission", permission);

    router.push("/delivery-address");
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-sm p-6">

        <div className="flex justify-center mb-5">
          <IoNotifications className="text-green-600 text-7xl" />
        </div>

        <h2 className="text-xl font-bold text-center">
          Allow Grocify to send notifications?
        </h2>

        <p className="text-gray-500 text-center mt-3">
          Get order updates, delivery alerts and special offers.
        </p>

        <div className="mt-8 flex gap-3">

          <button
            onClick={() => router.push("/delivery-address")}
            className="flex-1 border py-3 rounded-xl"
          >
            Don't Allow
          </button>

          <button
            onClick={requestNotification}
            className="flex-1 bg-green-600 text-white py-3 rounded-xl font-semibold"
          >
            Allow
          </button>

        </div>

      </div>
    </div>
  );
}