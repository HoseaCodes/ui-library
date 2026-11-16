import { router, type Href } from "expo-router";

import { AuthScreen, type AuthMode } from "@/components/auth/auth-screen";

const ROUTES: Record<AuthMode, Href> = {
  "sign-in": "/login" as Href,
  "sign-up": "/signup" as Href,
  reset: "/reset-password" as Href,
};

export default function Screen() {
  return (
    <AuthScreen
      mode="sign-in"
      onSwitchMode={(mode) => router.replace(ROUTES[mode])}
      onSuccess={() => router.replace("/" as Href)}
    />
  );
}
