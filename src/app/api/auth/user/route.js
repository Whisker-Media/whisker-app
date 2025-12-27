// Copyright 2025 Whisker Media Group
// Licensed under the Apache License, Version 2.0

import { admin } from "@lib/firebase-admin";
import { cookies } from "next/headers";

export async function GET() {
  try {
    // Get the cookies from the current request
    const cookieStore = await cookies();
    const token = cookieStore.get("authToken")?.value;

    if (!token) {
      return new Response(JSON.stringify({ error: "Not authenticated" }), {
        status: 401,
      });
    }

    const decodedToken = await admin.auth().verifyIdToken(token);
    const user = await admin.auth().getUser(decodedToken.uid);
    const { uid, email, displayName } = user;

    // Filter out standard token fields to only return custom claims
    const { uid: _, iat, exp, ...customClaims } = decodedToken;

    return new Response(
      JSON.stringify({
        uid,
        email,
        displayName,
        customClaims,
      }),
      { status: 200 },
    );
  } catch (err) {
    cookieStore.remove("authToken");
    return new Response(JSON.stringify({ error: err.message }), {
      status: 401,
    });
  }
}
