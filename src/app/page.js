"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/welcome");
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(to bottom, #00C853, #B2FF59)",
        color: "white",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        }}
      >
        <Image
          src="/grocify-logo.jpeg"
          alt="logo"
          width={100}
          height={100}
        />
      </div>

      <h1 style={{ marginTop: "20px", fontSize: "28px" }}>
        Grocify
      </h1>

      <p style={{ opacity: 0.9 }}>
        Fresh groceries delivered fast ⚡
      </p>
    </div>
  );
}