"use client";

import * as React from "react";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut as firebaseSignOut,
  updateProfile,
  type User,
} from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";

import { auth, db } from "@/lib/firebase";

type AuthContextValue = {
  /** undefined while Firebase restores the session, null when signed out. */
  user: User | null | undefined;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<User>;
  signUp: (email: string, password: string, name?: string) => Promise<User>;
  signInWithGoogle: () => Promise<User>;
  signInWithGitHub: () => Promise<User>;
  resetPassword: (email: string) => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = React.createContext<AuthContextValue | null>(null);

export interface AuthProviderProps {
  children: React.ReactNode;
  /**
   * Create users/{uid} in Firestore the first time someone signs in
   * (email, name, photoUrl, provider, createdAt). Never overwrites an existing doc.
   * Assign roles server-side or in the console, not here.
   */
  createProfile?: boolean;
  /** Firestore collection for profiles (default "users"). */
  profileCollection?: string;
}

export function AuthProvider({ children, createProfile = true, profileCollection = "users" }: AuthProviderProps) {
  const [user, setUser] = React.useState<User | null | undefined>(undefined);

  const ensureProfile = React.useCallback(
    async (u: User) => {
      if (!createProfile) return;
      const ref = doc(db, profileCollection, u.uid);
      if ((await getDoc(ref)).exists()) return;
      await setDoc(ref, {
        email: u.email ?? "",
        name: u.displayName ?? "",
        photoUrl: u.photoURL ?? "",
        provider: u.providerData[0]?.providerId ?? "password",
        createdAt: serverTimestamp(),
      });
    },
    [createProfile, profileCollection],
  );

  React.useEffect(
    () =>
      onAuthStateChanged(auth, (u) => {
        setUser(u);
        if (u) ensureProfile(u).catch((err) => console.error("Could not create user profile", err));
      }),
    [ensureProfile],
  );

  const value = React.useMemo<AuthContextValue>(
    () => ({
      user,
      loading: user === undefined,
      signIn: async (email, password) => (await signInWithEmailAndPassword(auth, email, password)).user,
      signUp: async (email, password, name) => {
        const { user: created } = await createUserWithEmailAndPassword(auth, email, password);
        if (name) {
          await updateProfile(created, { displayName: name });
          await created.reload();
        }
        return created;
      },
      signInWithGoogle: async () => (await signInWithPopup(auth, new GoogleAuthProvider())).user,
      signInWithGitHub: async () => (await signInWithPopup(auth, new GithubAuthProvider())).user,
      resetPassword: (email) => sendPasswordResetEmail(auth, email),
      signOut: () => firebaseSignOut(auth),
    }),
    [user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = React.useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
}

/** Turns Firebase error codes into messages you can show people. */
export function authErrorMessage(error: unknown): string {
  const code = (error as { code?: string })?.code ?? "";
  switch (code) {
    case "auth/invalid-credential":
    case "auth/wrong-password":
    case "auth/user-not-found":
    case "auth/invalid-login-credentials":
      return "Incorrect email or password.";
    case "auth/email-already-in-use":
      return "An account with this email already exists. Try signing in.";
    case "auth/invalid-email":
      return "That email address doesn't look right.";
    case "auth/weak-password":
      return "Password must be at least 6 characters.";
    case "auth/too-many-requests":
      return "Too many attempts. Wait a minute and try again.";
    case "auth/popup-closed-by-user":
    case "auth/cancelled-popup-request":
      return "Sign-in was cancelled.";
    case "auth/popup-blocked":
      return "Your browser blocked the sign-in window. Allow pop-ups and try again.";
    case "auth/account-exists-with-different-credential":
      return "This email is already linked to a different sign-in method.";
    case "auth/network-request-failed":
      return "Network error. Check your connection and try again.";
    default:
      return "Something went wrong. Please try again.";
  }
}
