import { Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getApp, getApps, initializeApp, type FirebaseOptions } from "firebase/app";
import * as FirebaseAuth from "firebase/auth";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

/**
 * Firebase for Expo / React Native, using the Firebase JS SDK.
 *
 * Env (Firebase console → Project settings → Your apps → Web app). Expo inlines
 * EXPO_PUBLIC_ vars at build time; they're public identifiers, not secrets.
 *   EXPO_PUBLIC_FIREBASE_API_KEY, EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
 *   EXPO_PUBLIC_FIREBASE_PROJECT_ID, EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
 *   EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID, EXPO_PUBLIC_FIREBASE_APP_ID
 */
const config: FirebaseOptions = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID,
};

if (!config.apiKey || !config.projectId) {
  // No silent "demo mode": a build without config should fail loudly, not let anyone in.
  const message =
    "Firebase is not configured: set EXPO_PUBLIC_FIREBASE_API_KEY and EXPO_PUBLIC_FIREBASE_PROJECT_ID (see lib/firebase.ts).";
  if (__DEV__) throw new Error(message);
  console.error(message);
}

const firstInit = getApps().length === 0;
export const app = firstInit ? initializeApp(config) : getApp();

// getReactNativePersistence only exists in the React Native build of
// firebase/auth (Metro picks it), and it's missing from the TypeScript types.
const { getReactNativePersistence } = FirebaseAuth as unknown as {
  getReactNativePersistence?: (storage: typeof AsyncStorage) => FirebaseAuth.Persistence;
};

function createAuth(): FirebaseAuth.Auth {
  // Web uses the browser's own persistence. After a fast refresh the instance
  // already exists, and initializeAuth would throw auth/already-initialized.
  if (Platform.OS === "web" || !firstInit) return FirebaseAuth.getAuth(app);
  if (!getReactNativePersistence) {
    console.warn("firebase/auth React Native build not found; sign-ins won't survive app restarts.");
    return FirebaseAuth.getAuth(app);
  }
  return FirebaseAuth.initializeAuth(app, { persistence: getReactNativePersistence(AsyncStorage) });
}

/** Keeps people signed in across app restarts (AsyncStorage on device). */
export const auth = createAuth();
export const db = getFirestore(app);

/** Storage is loaded on first use so apps that don't need it don't pay for it. */
export const storage = () => getStorage(app);

/**
 * Local development against the Firebase Emulator Suite: set
 * EXPO_PUBLIC_FIREBASE_EMULATOR_HOST to your computer's LAN IP (a phone),
 * 10.0.2.2 (Android emulator) or 127.0.0.1 (iOS simulator / web).
 */
const emulatorHost = process.env.EXPO_PUBLIC_FIREBASE_EMULATOR_HOST;
const flags = globalThis as typeof globalThis & { __firebaseEmulators?: boolean };
if (emulatorHost && !flags.__firebaseEmulators) {
  flags.__firebaseEmulators = true;
  FirebaseAuth.connectAuthEmulator(auth, `http://${emulatorHost}:9099`, { disableWarnings: true });
  connectFirestoreEmulator(db, emulatorHost, 8080);
}
