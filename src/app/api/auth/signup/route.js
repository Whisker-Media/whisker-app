// Copyright 2025 Whisker Media Group
// Licensed under the Apache License, Version 2.0

// app/api/auth/signup/route.js
import { admin } from "@lib/firebase-admin";
import { cookies } from "next/headers";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    // Create Firebase Auth user
    const user = await admin.auth().createUser({ email, password });

    // Create Firestore document for the user
    const db = admin.firestore();
    await db.collection("users").doc(user.uid).set({
      uid: user.uid,
      email: user.email,
      createdAt: new Date().toISOString(),
      displayName: user.displayName,
      role: "user"
    });

    // Generate custom auth token
    const token = await admin.auth().createCustomToken(user.uid);

    // Set auth token in cookie
    cookies().set({
      name: "authToken",
      value: token,
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 3, // 3 days
      secure: process.env.NODE_ENV === "production",
    });

    return new Response(JSON.stringify({ token }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 400 });
  }
}
