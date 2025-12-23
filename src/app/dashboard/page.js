"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RedirectToPosts() {
  const router = useRouter();

  useEffect(() => {
    router.push("/dashboard/posts");
  }, [router]);

  return null; // nothing is rendered
}