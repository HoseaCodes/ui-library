# uiheat

Install the UI Heat theme, components, landing page blocks and helpers into any
React project. Components are copied into your project as source (via
[shadcn](https://ui.shadcn.com)), so you can edit them freely.

```bash
npx uiheat create my-site          # new Next.js app, themed, starter components installed
npx uiheat add landing-page        # add items to the current project
npx uiheat list                    # see everything available
```

## Commands

| Command | What it does |
|---|---|
| `uiheat create <name>` | New Next.js + Tailwind app with the UI Heat theme, starter components, and providers wired into `app/layout.tsx` |
| `uiheat init` | Prepare an existing project: writes `components.json` if missing, adds the UI Heat registry, adds a `cn()` helper if missing. Never overwrites files |
| `uiheat add <items...>` | Add items. Runs `init` first if needed |
| `uiheat list` | List items with descriptions |

UI Heat items can be named bare (`landing-hero`) or namespaced
(`@uiheat/landing-hero`). Anything else (`button`, `accordion`, …) comes from
shadcn's own registry. Flags such as `--overwrite`, `--yes` and `--dry-run` are
passed through to shadcn, and `-c <dir>` runs against another directory.

## Items

- **Foundation:** `theme`, `starter`, `theme-provider`, `mode-toggle`
- **Components:** `spinner`, `image-dropzone`
- **Landing page:** `landing-page` (everything), or individually `landing-header`,
  `landing-hero`, `landing-how-it-works`, `landing-testimonials`, `landing-faq`,
  `landing-contact`, `landing-footer`, `contact-api`
- **Dashboard:** `dashboard` (shell + example layout), or just `dashboard-shell`
- **Server helpers:** `mongodb`, `logger`

Run `npx uiheat list` for descriptions.

## Notes

- In an existing app that already has its own `components/ui/button.tsx` (or
  similar), skip `starter` and the landing blocks, or the install will stop and
  ask before replacing those files.
- Set `UIHEAT_REGISTRY_URL` to point at a different registry, e.g. a local one
  while developing: `http://localhost:4000/r/{name}.json`.

> Versions before 2.0 were a small React component package. 2.0 replaces it with
> this installer.
