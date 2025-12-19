// Copyright 2025 Whisker Media Group
// Licensed under the Apache License, Version 2.0

import { db } from '@lib/firebase/config';
import { onAuthStateChanged } from 'firebase/auth';

export async function isUsernameTaken(username) {
    const usersRef = db.collection('users');
    const querySnapshot = await usersRef.where('username', '==', username).get();
    return !querySnapshot.empty;
}

export function subscribeToAuthChanges(auth, callback) {
    return onAuthStateChanged(auth, callback);
}

export async function getUsername() {
    return new Promise((resolve, reject) => {
        const unsubscribe = subscribeToAuthChanges(db.auth, async (user) => {
            unsubscribe();
            if (user) {
                try {
                    const userDoc = await db.collection('users').doc(user.uid).get();
                    if (userDoc.exists) {
                        const userData = userDoc.data();
                        resolve(userData.username);
                    } else {
                        resolve(null);
                    }
                } catch (error) {
                    reject(error);
                }
            } else {
                resolve(null);
            }
        });
    });
}

export async function getUserByUsername(username) {
    const usersRef = db.collection('users');
    const querySnapshot = await usersRef.where('username', '==', username).limit(1).get();
    if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0];
        return { uid: userDoc.id, ...userDoc.data() };
    } else {
        return null;
    }
}