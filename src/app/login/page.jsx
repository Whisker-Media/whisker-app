// Copyright 2025 Whisker Media Group
// Licensed under the Apache License, Version 2.0

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { auth } from "@lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    setError("");

    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      const token = await user.user.getIdToken();
      Cookies.set("authToken", token, { expires: 3 });
      router.push("/dashboard");
    } catch(err) {
      setError("Invalid login credentials. Please try again: " + err.message);
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      {/* Login Form */}
      <div className="flex flex-1 items-center justify-center">
        <form
          onSubmit={handleLogin}
          className="bg-black p-8 rounded-lg shadow-lg w-full max-w-md flex flex-col gap-6"
        >
          <h1 className="text-2xl font-semibold text-amber-500 text-center">
            Login
          </h1>

          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="px-4 py-2 rounded bg-gray-800 border border-neutral-700 text-neutral-100 focus:outline-none focus:border-amber-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="px-4 py-2 rounded bg-gray-800 border border-neutral-700 text-neutral-100 focus:outline-none focus:border-amber-500"
          />

          <button
            type="submit"
            className="bg-amber-500 text-black py-2 rounded font-medium hover:bg-amber-600 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
