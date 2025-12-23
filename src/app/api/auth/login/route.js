// Copyright 2025 Whisker Media Group
// Licensed under the Apache License, Version 2.0

import { admin } from "@lib/firebase-admin";
import { cookies } from "next/headers";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    // Verify user exists
    const user = await admin.auth().getUserByEmail(email);

    // Generate custom token
    const token = await admin.auth().createCustomToken(user.uid);

    // Set cookie
    await cookies().set({
      name: "authToken",
      value: token,
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
      secure: process.env.NODE_ENV === "production",
    });

    return new Response(JSON.stringify({ token }), { status: 200 });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Invalid login credentials" }),
      {
        status: 400,
      },
    );
  }
}
