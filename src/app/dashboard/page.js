// Copyright 2025 Whisker Media Group
// Licensed under the Apache License, Version 2.0

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
