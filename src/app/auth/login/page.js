"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../../firebase";

export default function Login() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  // EMAIL LOGIN
  const handleLogin = async () => {
    if (!email) {
      alert("Enter email");
      return;
    }

    try {
      setLoading(true);

      // Check if user exists
      const check = await fetch("/api/check-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const userData = await check.json();

      // Existing User -> Send OTP
      if (userData.exists) {
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
        localStorage.setItem(
          "otpExpiry",
          Date.now() + 5 * 60 * 1000
        );
        localStorage.setItem("email", email);
        localStorage.setItem("newUser", "false");

        alert("OTP Sent Successfully!");

        router.push(`/auth/verify-otp?email=${email}`);
        return;
      }

      // User not found
      alert("Account not found. Please create an account.");
      router.push("/auth/signup");
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  // GOOGLE LOGIN

const handleGoogleLogin = async () => {
  try {
    setLoading(true);

    const result = await signInWithPopup(auth, provider);

    const user = result.user;

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("name", user.displayName || "");
    localStorage.setItem("email", user.email || "");
    localStorage.setItem("photo", user.photoURL || "");

    alert("Google Login Successful!");

    router.push("/permissions/location");
  } catch (error) {
    console.log(error);

    if (error.code === "auth/popup-closed-by-user") {
      alert("Google login cancelled");
      return;
    }

    if (error.code === "auth/popup-blocked") {
      alert("Please allow popups in your browser");
      return;
    }

    alert(error.message);
  } finally {
    setLoading(false);
  }
};
return (
  <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
    <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">

      <div className="text-center">
        <div className="text-5xl">🛒</div>

        <h1 className="text-3xl font-bold text-green-600 mt-3">
          Grocify
        </h1>

        <p className="text-gray-500 mt-2">
          Fresh groceries delivered to your doorstep
        </p>
      </div>

      {/* GOOGLE LOGIN */}

      <button
        onClick={handleGoogleLogin}
        disabled={loading}
        className="w-full mt-8 border border-gray-300 rounded-xl py-3 font-medium hover:bg-gray-50 transition flex items-center justify-center gap-3"
      >
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google"
          className="w-5 h-5"
        />

        Continue with Google
      </button>

      <div className="flex items-center my-6">
        <div className="flex-1 h-px bg-gray-300"></div>

        <span className="mx-4 text-gray-400 text-sm">
          OR
        </span>

        <div className="flex-1 h-px bg-gray-300"></div>
      </div>

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

      <button
        onClick={handleLogin}
        disabled={loading}
        className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition"
      >
        {loading ? "Please wait..." : "Continue"}
      </button>

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