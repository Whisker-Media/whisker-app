// Copyright 2025 Whisker Media Group
// Licensed under the Apache License, Version 2.0

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getApp, getApps } from "firebase/app";
import { firebaseConfig } from "./firebaseConfig";

let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}

const firestore = getFirestore(app);
const auth = getAuth(app);

export { app, firestore as db, auth };
