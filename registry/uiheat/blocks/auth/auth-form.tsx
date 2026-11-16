"use client";

import * as React from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import { authErrorMessage, useAuth } from "@/components/auth/auth-provider";

type Mode = "sign-in" | "sign-up" | "reset";

export interface AuthFormProps {
  mode: Mode;
  /** Where to go after signing in, unless the URL has ?next=. */
  redirectTo?: string;
  /** Which social buttons to show (default Google). */
  providers?: Array<"google" | "github">;
  links?: { signIn?: string; signUp?: string; reset?: string };
}

const COPY: Record<Mode, { title: string; description: string; submit: string }> = {
  "sign-in": { title: "Welcome back", description: "Sign in to your account", submit: "Sign in" },
  "sign-up": { title: "Create an account", description: "It takes less than a minute", submit: "Create account" },
  reset: { title: "Reset your password", description: "We'll email you a reset link", submit: "Send reset link" },
};

export function AuthForm({
  mode,
  redirectTo = "/dashboard",
  providers = ["google"],
  links = { signIn: "/login", signUp: "/signup", reset: "/reset-password" },
}: AuthFormProps) {
  const auth = useAuth();
  const router = useRouter();
  const search = useSearchParams();
  const [pending, setPending] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string | null>(null);
  const [notice, setNotice] = React.useState<string | null>(null);

  // Only follow same-site relative paths, so ?next= can't send people elsewhere.
  const next = search?.get("next");
  const destination = next && next.startsWith("/") && !next.startsWith("//") ? next : redirectTo;

  async function run(key: string, action: () => Promise<unknown>, after?: () => void) {
    setPending(key);
    setError(null);
    setNotice(null);
    try {
      await action();
      after ? after() : router.replace(destination);
    } catch (err) {
      setError(authErrorMessage(err));
    } finally {
      setPending(null);
    }
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = String(form.get("email") ?? "").trim();
    const password = String(form.get("password") ?? "");
    const name = String(form.get("name") ?? "").trim();

    if (mode === "reset") {
      void run("email", () => auth.resetPassword(email), () =>
        setNotice("If an account exists for that email, a reset link is on its way."),
      );
    } else if (mode === "sign-up") {
      void run("email", () => auth.signUp(email, password, name || undefined));
    } else {
      void run("email", () => auth.signIn(email, password));
    }
  }

  const copy = COPY[mode];
  const busy = pending !== null;

  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="text-center">
        <CardTitle className="text-xl">{copy.title}</CardTitle>
        <CardDescription>{copy.description}</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        {mode !== "reset" && providers.length > 0 && (
          <>
            <div className="grid gap-2">
              {providers.includes("google") && (
                <Button variant="outline" disabled={busy} onClick={() => run("google", auth.signInWithGoogle)}>
                  {pending === "google" ? <Spinner /> : <GoogleIcon />} Continue with Google
                </Button>
              )}
              {providers.includes("github") && (
                <Button variant="outline" disabled={busy} onClick={() => run("github", auth.signInWithGitHub)}>
                  {pending === "github" ? <Spinner /> : <GitHubIcon />} Continue with GitHub
                </Button>
              )}
            </div>
            <div className="flex items-center gap-3 text-xs uppercase text-muted-foreground">
              <span className="h-px flex-1 bg-border" /> or <span className="h-px flex-1 bg-border" />
            </div>
          </>
        )}

        <form onSubmit={onSubmit} className="grid gap-4">
          {mode === "sign-up" && (
            <div className="grid gap-1.5">
              <Label htmlFor="auth-name">Name</Label>
              <Input id="auth-name" name="name" autoComplete="name" />
            </div>
          )}
          <div className="grid gap-1.5">
            <Label htmlFor="auth-email">Email</Label>
            <Input id="auth-email" name="email" type="email" required autoComplete="email" />
          </div>
          {mode !== "reset" && (
            <div className="grid gap-1.5">
              <div className="flex items-center justify-between">
                <Label htmlFor="auth-password">Password</Label>
                {mode === "sign-in" && links.reset && (
                  <Link href={links.reset} className="text-xs text-muted-foreground underline-offset-4 hover:underline">
                    Forgot password?
                  </Link>
                )}
              </div>
              <Input
                id="auth-password"
                name="password"
                type="password"
                required
                minLength={6}
                autoComplete={mode === "sign-up" ? "new-password" : "current-password"}
              />
            </div>
          )}

          {error && (
            <p role="alert" className="text-sm text-destructive">
              {error}
            </p>
          )}
          {notice && (
            <p role="status" className="text-sm text-muted-foreground">
              {notice}
            </p>
          )}

          <Button type="submit" disabled={busy}>
            {pending === "email" && <Spinner className="text-primary-foreground" />}
            {copy.submit}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="justify-center text-sm text-muted-foreground">
        {mode === "sign-in" && links.signUp && (
          <span>
            No account?{" "}
            <Link href={links.signUp} className="font-medium text-primary underline-offset-4 hover:underline">
              Sign up
            </Link>
          </span>
        )}
        {mode !== "sign-in" && links.signIn && (
          <span>
            {mode === "sign-up" ? "Already have an account?" : "Remembered it?"}{" "}
            <Link href={links.signIn} className="font-medium text-primary underline-offset-4 hover:underline">
              Sign in
            </Link>
          </span>
        )}
      </CardFooter>
    </Card>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true">
      <path fill="#EA4335" d="M12 10.2v3.9h5.5c-.2 1.3-1.6 3.9-5.5 3.9-3.3 0-6-2.7-6-6.1s2.7-6.1 6-6.1c1.9 0 3.1.8 3.8 1.5l2.6-2.5C16.8 3.3 14.6 2.4 12 2.4 6.7 2.4 2.4 6.7 2.4 12s4.3 9.6 9.6 9.6c5.5 0 9.2-3.9 9.2-9.4 0-.6-.1-1.1-.2-1.6H12z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" aria-hidden="true" fill="currentColor">
      <path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17.3 4.8 18.3 5.1 18.3 5.1c.7 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.5 11.5 0 0 0 23.5 12C23.5 5.7 18.3.5 12 .5z" />
    </svg>
  );
}
