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
npm run check   # type-check sources, then build public/r/*.json
npm run serve   # serve at http://localhost:4000/r/{name}.json for local testing
```

- Sources live in `registry/uiheat/{ui,components,lib,blocks}/`; `registry.json` lists them.
- `public/r/` is the build output **and** what gets served, so commit it.
- Items import stock shadcn pieces as `@/components/ui/button` etc. and list
  them in `registryDependencies`; reference other UI Heat items as `@uiheat/<name>`.
- `typecheck/` holds stand-ins so `tsc` can check sources here. It isn't published.

### Adding something new

Only add code that has already shown up in two or more projects. Take the best
existing copy, make it work in isolation (no app-specific imports, cookie
names, env vars without defaults), add it to `registry.json`, run `npm run check`,
and install it into one real project before relying on it.

### Next candidates

From a scan of `~/dev/gitviews`, in rough order of payoff:

- Dashboard sidebar layout (`ambitious-admin`, `insightlytics`, `invoice`)
- Firebase init + `AuthContext` (web and Expo; copies have drifted, so reconcile first)
