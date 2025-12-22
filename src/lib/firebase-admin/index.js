import firebaseAdmin from "firebase-admin";
import { getApps, getApp } from "firebase-admin/app";
import firebaseAdminConfig from "./firebaseAdminConfig.js";

let adminApp;
if (!getApps().length) {
    adminApp = firebaseAdmin.initializeApp({
        credential: firebaseAdmin.credential.cert(firebaseAdminConfig)
    });
} else {
    adminApp = getApp();
}

export { adminApp as admin };