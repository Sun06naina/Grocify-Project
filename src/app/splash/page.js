"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Splash() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/permissions/location");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{
      display: "flex",
      height: "100vh",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column"
    }}>
      <Image
        src="/grocify-logo.jpeg"
        alt="logo"
        width={120}
        height={120}
      />
      <h1>Grocify</h1>
    </div>
  );
}