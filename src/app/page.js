/*"use client";

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
}*/

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-green-600 text-white shadow-md">
        <div className="flex items-center gap-3">
          <Image
            src="/grocify-logo.jpeg"
            alt="Grocify Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <h1 className="text-2xl font-bold">Grocify</h1>
        </div>

        <Link
          href="/auth/login"
          className="bg-white text-green-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100"
        >
          Login
        </Link>
      </header>

      {/* Hero Section */}
      <section className="text-center py-10 px-4">
        <Image
          src="/grocify-logo.jpeg"
          alt="Grocify Logo"
          width={120}
          height={120}
          className="mx-auto rounded-full mb-4"
        />

        <h2 className="text-3xl font-bold text-green-600">
          Fresh Groceries Delivered Fast
        </h2>

        <p className="text-gray-600 mt-3">
          Fruits, vegetables, dairy products, snacks and more delivered to your doorstep.
        </p>
      </section>

      {/* Search Bar */}
      <section className="px-4 mb-8">
        <input
          type="text"
          placeholder="Search groceries..."
          className="w-full p-3 border rounded-xl bg-white shadow-sm focus:outline-none"
        />
      </section>

      {/* Categories */}
      <section className="px-4 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Categories</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl shadow text-center">
            🍎
            <p className="mt-2 font-medium">Fruits</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow text-center">
            🥬
            <p className="mt-2 font-medium">Vegetables</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow text-center">
            🥛
            <p className="mt-2 font-medium">Dairy</p>
          </div>

          <div className="bg-white p-5 rounded-xl shadow text-center">
            🍪
            <p className="mt-2 font-medium">Snacks</p>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="px-4 pb-10">
        <h2 className="text-2xl font-semibold mb-4">
          Featured Products
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-semibold">Fresh Apples</h3>
            <p className="text-gray-600">₹120 / kg</p>

            <button className="mt-3 bg-green-600 text-white px-4 py-2 rounded-lg">
              Add to Cart
            </button>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-semibold">Milk</h3>
            <p className="text-gray-600">₹30</p>

            <button className="mt-3 bg-green-600 text-white px-4 py-2 rounded-lg">
              Add to Cart
            </button>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-semibold">Potato Chips</h3>
            <p className="text-gray-600">₹20</p>

            <button className="mt-3 bg-green-600 text-white px-4 py-2 rounded-lg">
              Add to Cart
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}