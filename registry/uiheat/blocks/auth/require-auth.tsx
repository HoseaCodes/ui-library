"use client";

import * as React from "react";
import { usePathname, useRouter } from "next/navigation";

import { Spinner } from "@/components/ui/spinner";
import { useAuth } from "@/components/auth/auth-provider";

/**
 * Client-side gate: shows a spinner while the session loads, then redirects
 * signed-out visitors to `redirectTo?next=<current path>`.
 *
 * This hides UI; it is not access control. Protect data with Firestore
 * Security Rules (and verify ID tokens in any API routes).
 */
export function RequireAuth({
  children,
  redirectTo = "/login",
}: {
  children: React.ReactNode;
  redirectTo?: string;
}) {
  const { user, loading } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  React.useEffect(() => {
    if (!loading && !user) {
      router.replace(`${redirectTo}?next=${encodeURIComponent(pathname ?? "/")}`);
    }
  }, [loading, user, router, redirectTo, pathname]);

  if (!user) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center" aria-busy="true">
        <Spinner size="md" />
      </div>
    );
  }
  return <>{children}</>;
}
