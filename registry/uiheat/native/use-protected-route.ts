import * as React from "react";
import { router, useSegments, type Href } from "expo-router";

import { useAuth } from "@/components/auth/auth-provider";

/**
 * Expo Router guard. Call once in your root layout (inside <AuthProvider>):
 * signed-out users are sent to the (auth) group's login screen, and signed-in
 * users who land on an auth screen are sent home.
 *
 * Returns true while the session is still loading, so you can keep the splash
 * screen up instead of flashing the wrong screen.
 */
export function useProtectedRoute({
  authGroup = "(auth)",
  signInHref = "/login" as Href,
  homeHref = "/" as Href,
} = {}) {
  const { user, loading } = useAuth();
  const segments = useSegments();

  React.useEffect(() => {
    if (loading) return;
    const inAuthGroup = segments[0] === authGroup;
    if (!user && !inAuthGroup) router.replace(signInHref);
    else if (user && inAuthGroup) router.replace(homeHref);
  }, [user, loading, segments, authGroup, signInHref, homeHref]);

  return loading;
}
