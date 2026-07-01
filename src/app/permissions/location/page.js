"use client";

import { useRouter } from "next/navigation";
import { MdLocationOn } from "react-icons/md";

export default function LocationPermission() {
  const router = useRouter();

  const requestLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported on this device.");
      router.push("/permissions/notification");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        localStorage.setItem(
          "userLocation",
          JSON.stringify({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          })
        );

        router.push("/permissions/notification");
      },
      () => {
        alert("Location permission denied.");
        router.push("/permissions/notification");
      }
    );
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center px-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-sm p-6">

        <div className="flex justify-center mb-5">
          <MdLocationOn className="text-green-600 text-7xl" />
        </div>

        <h2 className="text-xl font-bold text-center">
          Allow Grocify to access your location?
        </h2>

        <p className="text-gray-500 text-center mt-3">
          We use your location to show nearby stores and faster delivery.
        </p>

        <div className="mt-8 space-y-3">

          <button
            onClick={requestLocation}
            className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold"
          >
            Allow while using the app
          </button>

          <button
            onClick={() => router.push("/permissions/notification")}
            className="w-full border py-3 rounded-xl"
          >
            Don't Allow
          </button>

        </div>

      </div>
    </div>
  );
}