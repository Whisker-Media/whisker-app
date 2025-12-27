// Copyright 2025 Whisker Media Group
// Licensed under the Apache License, Version 2.0

import { auth } from "@lib/firebase";
import { onAuthStateChanged } from "firebase/auth";

export default function main() {
  return new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      resolve(user || null);
    });
  });
}
