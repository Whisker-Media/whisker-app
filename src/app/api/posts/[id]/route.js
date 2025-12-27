// Copyright 2025 Whisker Media Group
// Licensed under the Apache License, Version 2.0

import { admin } from "@lib/firebase-admin";
import { cookies } from "next/headers";

export async function GET(req, context) {
  try {
    const params = await context.params;
    const postId = params.id;

    const db = admin.firestore();
    const postDoc = await db.collection("posts").doc(postId).get();

    if (!postDoc.exists) {
      return new Response(JSON.stringify({ error: "Post not found" }), {
        status: 404,
      });
    }

    const postData = postDoc.data();
    return new Response(JSON.stringify({ post: postData }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 400,
    });
  }
}

async function isOwner(req, postId) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("authToken")?.value;
    if (!token) return false;

    const decodedToken = await admin.auth().verifyIdToken(token);
    const user = await admin.auth().getUser(decodedToken.uid);

    const db = admin.firestore();
    const postDoc = await db.collection("posts").doc(postId).get();
    if (!postDoc.exists) return false;

    const postData = postDoc.data();
    return postData.authorId === user.uid;
  } catch (err) {
    return false;
  }
}

export async function DELETE(req, context) {
  try {
    const params = await context.params;
    const postId = params.id;

    const db = admin.firestore();
    const owner = await isOwner(req, postId);

    if (owner) {
      await db.collection("posts").doc(postId).delete();
      return new Response(JSON.stringify({ message: "Post deleted" }), {
        status: 200,
      });
    }

    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 400,
    });
  }
}
