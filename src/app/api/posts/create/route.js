// Copyright 2025 Whisker Media Group
// Licensed under the Apache License, Version 2.0

import { admin } from "@lib/firebase-admin";
import { cookies } from "next/headers";

export async function POST(req) {
  try {
    const { title, content } = await req.json();

    // Get auth token from cookies
    const cookieStore = await cookies();
    const token = cookieStore.get("authToken")?.value;

    if (!token) {
      return new Response(JSON.stringify({ error: "Not authenticated" }), {
        status: 401,
      });
    }

    // Verify token and get user
    const decodedToken = await admin.auth().verifyIdToken(token);
    const user = await admin.auth().getUser(decodedToken.uid);

    // Add post to Firestore
    const db = admin.firestore();
    const newPostRef = db.collection("posts").doc();
    await newPostRef.set({
      id: newPostRef.id,
      authorId: user.uid,
      title,
      content,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    return new Response(
      JSON.stringify({ message: "Post created", postId: newPostRef.id }),
      { status: 201 },
    );
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 400,
    });
  }
}
