"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/welcome"); // 👈 next page
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(to bottom, #00C853, #B2FF59)",
      color: "white",
    }}>
      <Image
        src="/grocify-logo.jpeg"
        alt="logo"
        width={120}
        height={120}
      />

      <h1 style={{ marginTop: "20px" }}>Grocify</h1>
      <p>Fresh groceries delivered fast ⚡</p>
    </div>
  );
}