"use client";

import { useRouter } from "next/navigation";

export default function LocationPermission() {
  const router = useRouter();

  const allow = () => {
    router.push("/permissions/notification");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Allow Location</h2>

      <button
        onClick={allow}
        style={{
          background: "green",
          color: "white",
          padding: "10px",
          width: "100%"
        }}
      >
        Allow Location
      </button>
    </div>
  );
}