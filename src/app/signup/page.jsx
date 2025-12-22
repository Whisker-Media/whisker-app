// Copyright 2025 Whisker Media Group
// Licensed under the Apache License, Version 2.0

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { auth } from "@lib/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState("");

  async function handleSignup(e) {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, displayName }),
      });

      const user = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(user.user, { displayName });

      const data = await res.json();
      if (res.ok) {
        Cookies.set("authToken", data.token, { expires: 3 });
        router.push("/dashboard");
      } else {
        setError(data.error);
      }
    } catch {
      setError("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      {/* Signup Form */}
      <div className="flex flex-1 items-center justify-center">
        <form
          onSubmit={handleSignup}
          className="bg-black p-8 rounded-lg shadow-lg w-full max-w-md flex flex-col gap-6"
        >
          <h1 className="text-2xl font-semibold text-amber-500 text-center">
            Sign Up
          </h1>

          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}

          <input 
            type="text"
            placeholder="Display Name"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            required
            className="px-4 py-2 rounded bg-gray-800 border border-neutral-700 text-neutral-100 focus:outline-none focus:border-amber-500"
          />

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
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
}
