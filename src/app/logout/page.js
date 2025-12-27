// Copyright 2025 Whisker Media Group
// Licensed under the Apache License, Version 2.0

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { auth } from "@lib/firebase";
import { signOut } from "firebase/auth";

export default function LogoutPage() {
  const router = useRouter();
  useEffect(() => {
    async function logout() {
      try {
        await signOut(auth);
        Cookies.remove("authToken");
        router.push("/login");
      } catch (err) {
        console.error("Logout failed:", err);
      }
    }
    logout();
  }, [router]);
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <p className="text-neutral-400">Logging out...</p>
    </div>
  );
}
