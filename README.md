# UI Heat registry

A [shadcn registry](https://ui.shadcn.com/docs/registry) of the pieces I keep
rebuilding across projects. Items install as **source files** into the app, so
they can be edited per project. No package versions to bump.

## Items

| Item | What you get |
|---|---|
| `@uiheat/starter` | Button, Card, Input, Label, Textarea, Select, Badge, Skeleton, Tooltip, Dialog, Dropdown Menu, Tabs, Avatar, Sonner (toasts), Spinner, Mode toggle |
| `@uiheat/theme` | UI Heat red palette, light + dark, as CSS variables (Tailwind 3 and 4) |
| `@uiheat/spinner` | Loading spinner, `size="sm" | "default" | "md" | "lg"` |
| `@uiheat/image-dropzone` | Single image upload: drag/drop, preview, remove, size/type errors |
| `@uiheat/theme-provider` | `next-themes` provider, preconfigured for `.dark` |
| `@uiheat/mode-toggle` | Light / dark / system dropdown |
| `@uiheat/mongodb` | Cached `MongoClient` for Next.js + `getDb()`, bounded pool |
| `@uiheat/logger` | `new Logger("svc").info(msg, data)`: stdout, works on Vercel, `LOG_FORMAT=json` |

### Dashboard

| Item | What you get |
|---|---|
| `@uiheat/dashboard` | The shell plus an example nav config, `app/dashboard/layout.tsx` (remembers collapsed state) and a placeholder overview page |
| `@uiheat/dashboard-shell` | Sidebar + breadcrumb top bar + content area, built on shadcn's `sidebar` |

Nav is plain config: `{ title, href, icon?, badge?, exact?, items? }` grouped into
optional labelled sections. Active links match by path segment (so
`/dashboard/notes` isn't active on `/dashboard/notes-archive`), sub-menus open on
their active page, breadcrumbs use nav titles and fall back to the URL. The
sidebar collapses to icons (⌘/Ctrl+B), becomes a drawer on mobile, and has a
user menu with `onSignOut` for whatever auth you use.

```bash
npx uiheat add dashboard        # then edit components/dashboard/dashboard-example.tsx
```

### Firebase auth (web)

| Item | What you get |
|---|---|
| `@uiheat/auth-pages` | `/login`, `/signup`, `/reset-password` pages: email/password plus Google (GitHub optional), friendly errors, safe `?next=` redirects |
| `@uiheat/firebase-auth` | `AuthProvider`, `useAuth()` (`signIn`, `signUp`, `signInWithGoogle`, `signInWithGitHub`, `resetPassword`, `signOut`), `RequireAuth` guard, optional `users/{uid}` profile on first sign-in |
| `@uiheat/firebase` | `lib/firebase.ts`: one app, `auth`, `db`, lazy `storage()`, config from `NEXT_PUBLIC_FIREBASE_*`, emulator support |

```bash
npx uiheat add auth-pages        # pulls in firebase-auth and firebase
```

1. Fill the `NEXT_PUBLIC_FIREBASE_*` values in `.env.local` (Firebase console →
   Project settings → Your apps). They're public identifiers, not secrets.
2. Wrap your root layout's children in `<AuthProvider>`.
3. Protect pages with `<RequireAuth>`; with the dashboard, use
   `const { user, signOut } = useAuth()` for its `user` and `onSignOut`.

`RequireAuth` only hides UI. Protect data with Firestore Security Rules, e.g.
`allow read, write: if request.auth.uid == uid;` on `users/{uid}`. Assign roles
in the console or server-side, never from the email address on the client.

Local development without touching production: run
`npx firebase-tools emulators:start --only auth,firestore --project demo-<name>`
and set `NEXT_PUBLIC_FIREBASE_EMULATOR_HOST=127.0.0.1`.

### Firebase auth (Expo / React Native)

| Item | What you get |
|---|---|
| `@uiheat/auth-screens-native` | Themed sign in / sign up / reset password screen (`AuthScreen`), plus Expo Router routes in `app/(auth)/` |
| `@uiheat/firebase-auth-native` | `AuthProvider`, `useAuth()` (`signIn`, `signUp`, `resetPassword`, `signOut`), `useProtectedRoute()` guard for Expo Router, optional `users/{uid}` profile |
| `@uiheat/firebase-native` | `lib/firebase.ts`: Firebase JS SDK with sign-ins kept across restarts (AsyncStorage), safe across fast refresh, works on web, config from `EXPO_PUBLIC_FIREBASE_*`, emulator support |
| `@uiheat/theme-native` | `lib/theme.ts`: the UI Heat palette and `useTheme()`, which follows light/dark mode |

```bash
npx uiheat add auth-screens-native   # pulls in firebase-auth-native, firebase-native, theme-native
```

The CLI detects Expo, writes a `components.json` without CSS or Tailwind settings,
and runs `expo install --fix` afterwards so native packages match your Expo SDK.

1. Fill the `EXPO_PUBLIC_FIREBASE_*` values in `.env` (Firebase console → Project
   settings → Your apps → Web app). A build without them fails loudly in dev.
2. In your root `app/_layout.tsx`, wrap the app in `<AuthProvider>` and call
   `useProtectedRoute()` inside it. Signed-out users go to `/login`, signed-in
   users on an auth screen go to `/`. It returns `true` while the session loads,
   so you can keep the splash screen up.
3. Using React Navigation instead? Render `AuthScreen` yourself and pass
   `onSwitchMode` and `onSuccess`.

Email/password only for now (no Google/GitHub). The same Security Rules advice as
the web version applies. For the emulator, set `EXPO_PUBLIC_FIREBASE_EMULATOR_HOST`
to your computer's LAN IP (a phone), `10.0.2.2` (Android emulator) or `127.0.0.1`
(iOS simulator / web).

Building for web with `"web": { "output": "server" }` or `"static"` in `app.json`?
Expo renders pages in Node, which imports `lib/firebase.ts`, so the
`EXPO_PUBLIC_FIREBASE_*` values must be set when you run `expo export` **and**
wherever the server runs. Without them every page returns a 500.

### Landing page blocks

| Item | What you get |
|---|---|
| `@uiheat/landing-page` | Everything below plus `components/landing/landing-example.tsx`, a full page with placeholder copy |
| `@uiheat/landing-header` | Fixed header: logo, nav links, CTA, animated mobile menu |
| `@uiheat/landing-hero` | Badge, highlighted title, checkmarked points, two CTAs, optional image with floating cards |
| `@uiheat/landing-how-it-works` | Numbered steps with icons |
| `@uiheat/landing-testimonials` | Review cards with half-star ratings and a summary row |
| `@uiheat/landing-faq` | Accordion FAQ |
| `@uiheat/landing-contact` | Contact form (optional phone/topic fields), spam honeypot, success state |
| `@uiheat/contact-api` | `app/api/contact/route.ts`: validates, drops spam, escapes input, emails via any SMTP provider |
| `@uiheat/landing-footer` | Brand, contact list, link columns, copyright |

Every block takes its content as props, so the copy lives in your page, not in
the component. Quickest start on a new site:

```bash
npx shadcn@latest add @uiheat/theme @uiheat/landing-page
echo 'export { LandingExample as default } from "@/components/landing/landing-example";' > app/page.tsx
```

Then fill in `SMTP_HOST`, `SMTP_USER`, `SMTP_PASS` and `CONTACT_TO` in
`.env.local` (added for you) and replace the placeholder copy. The blocks use
shadcn's Button, Input and so on, so they're meant for new sites. In an app with
its own `button.tsx`, the install stops and asks before overwriting.

## Use it in a project

The easy way is the [`uiheat` CLI](cli/), which configures everything below for you:

```bash
npx uiheat create my-site        # new app with theme + starter
npx uiheat add landing-page      # add items to an existing project
npx uiheat list
```

### By hand with the shadcn CLI

**1. Point the project at the registry** in `components.json`:

```json
"registries": {
  "@uiheat": "https://raw.githubusercontent.com/HoseaCodes/ui-library/master/public/r/{name}.json"
}
```

**2a. New app:**

```bash
npx shadcn@latest init -t next -b radix
# add the registries entry above, then:
npx shadcn@latest add @uiheat/theme @uiheat/starter
```

Name `@uiheat/theme` explicitly. When it only arrives as a dependency of
`starter`, shadcn won't overwrite the default colors `init` wrote.

Then in `app/layout.tsx` wrap `children` in `<ThemeProvider>` and
`<TooltipProvider>`, and render `<Toaster />` (from `@/components/ui/sonner`).

**2b. Existing app:** add only what you need, e.g.

```bash
npx shadcn@latest add @uiheat/image-dropzone @uiheat/logger
```

Watch for collisions. If the project already has its own
`components/ui/button.tsx` (or similar) with a different API, **don't** run
`starter` there: it would replace those files. Existing apps without shadcn
also need a `cn()` helper in `lib/utils.ts`:

```ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }
```

## Working on the registry

```bash
npm install
npm run check   # type-check web and native sources, then build public/r/*.json
npm run serve   # serve at http://localhost:4000/r/{name}.json for local testing
```

- Sources live in `registry/uiheat/{ui,components,lib,blocks,native}/`; `registry.json` lists them.
- `native/` is type-checked separately with `tsconfig.native.json` (React Native
  types), and excluded from the main `tsconfig.json`.
- `public/r/` is the build output **and** what gets served, so commit it.
- Items import stock shadcn pieces as `@/components/ui/button` etc. and list
  them in `registryDependencies`; reference other UI Heat items as `@uiheat/<name>`.
- `typecheck/` holds stand-ins so `tsc` can check sources here. It isn't published.

### Adding something new

Only add code that has already shown up in two or more projects. Take the best
existing copy, make it work in isolation (no app-specific imports, cookie
names, env vars without defaults), add it to `registry.json`, run `npm run check`,
and install it into one real project before relying on it.

## Upcoming

- **Google / GitHub sign-in for the native auth items.** Needs `expo-auth-session`
  and OAuth client IDs per platform, so it's more setup than the web version's popup.
- **Verify native auth on a device.** It's been tested on an Expo web build and
  bundled for iOS, but not yet run on a phone or simulator.
- **Move existing Expo apps onto the native auth items.** `wingman2` and
  `spanish101` have their own `firebase.js` and `AuthContext`; swapping them for
  `firebase-native` and `firebase-auth-native` also removes wingman2's
  "demo mode" (any login succeeds when config is missing) and spanish101's debug logging.
