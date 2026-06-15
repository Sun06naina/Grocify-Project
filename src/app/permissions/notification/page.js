"use client";

import { useRouter } from "next/navigation";

export default function NotificationPermission() {
  const router = useRouter();

  const allow = () => {
    router.push("/delivery-address");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Allow Notifications</h2>

      <button
        onClick={allow}
        style={{
          background: "green",
          color: "white",
          padding: "10px",
          width: "100%"
        }}
      >
        Allow Notifications
      </button>
    </div>
  );
}