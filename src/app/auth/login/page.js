"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../../firebase";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  // Email OTP Login
  const handleLogin = async () => {
    if (!email) {
      alert("Enter email");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!data.success) {
        alert(data.message);
        return;
      }

      localStorage.setItem("otp", data.otp);
      localStorage.setItem("otpExpiry", Date.now() + 5 * 60 * 1000);
      localStorage.setItem("email", email);

      alert("OTP sent successfully!");

      router.push(`/auth/verify-otp?email=${email}`);
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  // Google Login
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      const user = result.user;

      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("name", user.displayName || "");
      localStorage.setItem("email", user.email || "");
      localStorage.setItem("photo", user.photoURL || "");

      alert("Google Login Successful!");

      router.push("/permissions/location");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">

        {/* Logo */}
        <div className="text-center">
          <div className="text-5xl">🛒</div>

          <h1 className="text-3xl font-bold text-green-600 mt-3">
            Grocify
          </h1>

          <p className="text-gray-500 mt-2">
            Fresh groceries delivered to your doorstep
          </p>
        </div>

        {/* Google Login */}
        <button
          onClick={handleGoogleLogin}
          className="w-full mt-8 border border-gray-300 rounded-xl py-3 font-medium hover:bg-gray-50 transition flex items-center justify-center gap-3"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5"
          />

          Continue with Google
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-300"></div>

          <span className="mx-4 text-gray-400 text-sm">OR</span>

          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Email */}
        <label className="text-sm font-medium">
          Email Address
        </label>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mt-2 border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        {/* OTP Button */}
        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition"
        >
          {loading ? "Sending OTP..." : "Send OTP"}
        </button>

        {/* Signup */}
        <p className="text-center text-gray-600 mt-6">
          Don't have an account?{" "}
          <span
            onClick={() => router.push("/auth/signup")}
            className="text-green-600 font-semibold cursor-pointer"
          >
            Create Account
          </span>
        </p>

      </div>
    </div>
  );
}