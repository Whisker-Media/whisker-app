// Copyright 2025 Whisker Media Group
// Licensed under the Apache License, Version 2.0

import firebaseAdmin from "firebase-admin";
import { getApps, getApp } from "firebase-admin/app";
import firebaseAdminConfig from "./firebaseAdminConfig.js";

let admin;
if (!getApps().length) {
  admin = firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(firebaseAdminConfig),
  });
} else {
  admin = getApp();
}

export { admin };
