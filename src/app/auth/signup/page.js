"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    if (!name || !email || !phone) {
      alert("Please fill all fields");
      return;
    }


    if (!agree) {
      alert("Please accept the Terms & Conditions");
      return;
    }

    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    localStorage.setItem("newUser", "true");

    try {
      setLoading(true);
      const check = await fetch("/api/check-user", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ email }),
});

const userData = await check.json();

if (userData.exists) {
  alert("Account already exists. Please login.");
  router.push("/auth/login");
  return;
}

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

      alert("OTP Sent Successfully!");

      router.push(`/auth/verify-otp?email=${email}`);
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">

        <div className="text-center">
          <div className="text-5xl">🛒</div>

          <h1 className="text-3xl font-bold text-green-600 mt-3">
            Grocify
          </h1>

          <p className="text-gray-500 mt-2">
            Create your account
          </p>
        </div>

        <input
          className="w-full mt-8 border rounded-xl px-4 py-3"
          placeholder="Full Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          className="w-full mt-4 border rounded-xl px-4 py-3"
          placeholder="Email Address"
          type="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          className="w-full mt-4 border rounded-xl px-4 py-3"
          placeholder="Phone Number"
          value={phone}
          onChange={(e)=>setPhone(e.target.value)}
        />

        <div className="flex items-center mt-5">
          <input
            type="checkbox"
            checked={agree}
            onChange={(e)=>setAgree(e.target.checked)}
          />

          <label className="ml-2 text-sm">
            I agree to the{" "}
            <span
              className="text-green-600 underline cursor-pointer"
              onClick={()=>router.push("/terms")}
            >
              Terms & Conditions
            </span>
          </label>
        </div>

        <button
          onClick={handleSignup}
          disabled={loading}
          className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold"
        >
          {loading ? "Sending OTP..." : "Create Account"}
        </button>

        <p className="text-center mt-6">
          Already have an account?{" "}
          <span
            className="text-green-600 font-semibold cursor-pointer"
            onClick={()=>router.push("/auth/login")}
          >
            Login
          </span>
        </p>

      </div>
    </div>
  );
}