import { Suspense } from "react";

import { AuthForm } from "@/components/auth/auth-form";

export default function Page() {
  return (
    <main className="flex min-h-svh items-center justify-center bg-muted/40 p-4">
      {/* AuthForm reads ?next=, which Next.js requires inside a Suspense boundary. */}
      <Suspense>
        <AuthForm mode="sign-in" />
      </Suspense>
    </main>
  );
}
