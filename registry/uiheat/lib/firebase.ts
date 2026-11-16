import { getApp, getApps, initializeApp, type FirebaseOptions } from "firebase/app";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

/**
 * One Firebase app per browser tab / server instance.
 *
 * Env (Firebase console → Project settings → Your apps → Web app). These are
 * public client identifiers, not secrets; access is enforced by Security Rules.
 *   NEXT_PUBLIC_FIREBASE_API_KEY, NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
 *   NEXT_PUBLIC_FIREBASE_PROJECT_ID, NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
 *   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID, NEXT_PUBLIC_FIREBASE_APP_ID
 * (Vite: rename the prefix to VITE_ and read import.meta.env instead.)
 */
const config: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

if (!config.apiKey || !config.projectId) {
  // Fail loudly in development instead of with an obscure auth/invalid-api-key later.
  const message =
    "Firebase is not configured: set NEXT_PUBLIC_FIREBASE_API_KEY and NEXT_PUBLIC_FIREBASE_PROJECT_ID (see lib/firebase.ts).";
  if (process.env.NODE_ENV !== "production") throw new Error(message);
  console.error(message);
}

export const app = getApps().length ? getApp() : initializeApp(config);
export const auth = getAuth(app);
export const db = getFirestore(app);

/**
 * Local development against the Firebase Emulator Suite
 * (`npx firebase-tools emulators:start --only auth,firestore`):
 * set NEXT_PUBLIC_FIREBASE_EMULATOR_HOST=127.0.0.1 and nothing touches production.
 */
const emulatorHost = process.env.NEXT_PUBLIC_FIREBASE_EMULATOR_HOST;
const flags = globalThis as typeof globalThis & { __firebaseEmulators?: boolean };
if (emulatorHost && !flags.__firebaseEmulators) {
  flags.__firebaseEmulators = true; // connect once, even across hot reloads
  connectAuthEmulator(auth, `http://${emulatorHost}:9099`, { disableWarnings: true });
  connectFirestoreEmulator(db, emulatorHost, 8080);
}

/** Storage is loaded on first use so apps that don't need it don't pay for it. */
export const storage = () => getStorage(app);
