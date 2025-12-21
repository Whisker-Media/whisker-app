import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';
import { getPerformance } from 'firebase/performance';
import { getFunctions } from 'firebase/functions';
import { getRemoteConfig } from 'firebase/remote-config';
import { getMessaging } from 'firebase/messaging';
import { getApp, getApps } from 'firebase/app';
import { firebaseConfig } from './firebaseConfig';

let app;
if (!getApps().length) {
    app = initializeApp(firebaseConfig);
} else {
    app = getApp();
}

const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);
const performance = getPerformance(app);
const functions = getFunctions(app);
const remoteConfig = getRemoteConfig(app);
const messaging = getMessaging(app);

export {
    app,
    firestore as db,
    auth,
    storage,
    analytics,
    performance,
    functions,
    remoteConfig,
    messaging
}