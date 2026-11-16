#!/usr/bin/env node
// uiheat: a thin wrapper around the shadcn CLI that knows about the UI Heat
// registry, so `npx uiheat add landing-hero` works in any project.

import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { createRequire } from "node:module";
import path from "node:path";
import { fileURLToPath } from "node:url";

const NAMESPACE = "@uiheat";
const REGISTRY_URL =
  process.env.UIHEAT_REGISTRY_URL ??
  "https://raw.githubusercontent.com/HoseaCodes/ui-library/master/public/r/{name}.json";

const require = createRequire(import.meta.url);
const pkg = require("../package.json");

const HELP = `uiheat ${pkg.version}: UI Heat components for shadcn projects

Usage
  npx uiheat create <name>      New Next.js app with the UI Heat theme + starter
  npx uiheat init               Set up an existing project (no starter, nothing overwritten)
  npx uiheat add <items...>     Add items, e.g. landing-page mongodb button
  npx uiheat list               Show available items

Item names
  UI Heat items can be written bare (landing-hero) or namespaced (@uiheat/landing-hero).
  Anything else (button, accordion…) is passed through to shadcn's own registry.

Options
  -c, --cwd <dir>   Project directory (default: current directory)
  Other flags (--overwrite, --yes, --dry-run, …) are passed through to shadcn.

Env
  UIHEAT_REGISTRY_URL   Override the registry, e.g. http://localhost:4000/r/{name}.json
`;

// ---------------------------------------------------------------------------

function fail(message) {
  console.error(`\x1b[31m✖\x1b[0m ${message}`);
  process.exit(1);
}

function info(message) {
  console.log(`\x1b[36mℹ\x1b[0m ${message}`);
}

/** Path to the pinned shadcn CLI. shadcn's `exports` hide package.json, so walk up from its entry. */
function shadcnBin() {
  let dir = path.dirname(fileURLToPath(import.meta.resolve("shadcn")));
  while (dir !== path.dirname(dir)) {
    const manifest = path.join(dir, "package.json");
    if (existsSync(manifest)) {
      const { name, bin } = JSON.parse(readFileSync(manifest, "utf8"));
      if (name === "shadcn") {
        return path.join(dir, typeof bin === "string" ? bin : bin.shadcn);
      }
    }
    dir = path.dirname(dir);
  }
  fail("Could not locate the bundled shadcn CLI. Try reinstalling uiheat.");
}

/** Run the pinned shadcn CLI with inherited stdio. Exits on failure. */
function shadcn(args, cwd) {
  const result = spawnSync(process.execPath, [shadcnBin(), ...args], { cwd, stdio: "inherit" });
  if (result.status !== 0) process.exit(result.status ?? 1);
}

/** Split argv into positional args, a --cwd value, and flags to pass through. */
function parseArgs(argv) {
  const positional = [];
  const passthrough = [];
  let cwd = process.cwd();
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === "-c" || arg === "--cwd") {
      cwd = path.resolve(argv[++i] ?? fail(`${arg} needs a directory`));
    } else if (arg.startsWith("--cwd=")) {
      cwd = path.resolve(arg.slice("--cwd=".length));
    } else if (arg.startsWith("-")) {
      passthrough.push(arg);
    } else {
      positional.push(arg);
    }
  }
  return { positional, passthrough, cwd };
}

async function fetchIndex() {
  const url = REGISTRY_URL.replace("{name}", "registry");
  let res;
  try {
    res = await fetch(url);
  } catch (err) {
    fail(`Could not reach the UI Heat registry at ${url}\n  ${err.message}`);
  }
  if (!res.ok) fail(`UI Heat registry returned ${res.status} for ${url}`);
  const index = await res.json();
  return index.items ?? [];
}

/** Add (or repair) the @uiheat entry in components.json. Returns false if there is no components.json. */
function ensureRegistry(cwd) {
  const file = path.join(cwd, "components.json");
  if (!existsSync(file)) return false;

  let config;
  try {
    config = JSON.parse(readFileSync(file, "utf8"));
  } catch (err) {
    fail(`Could not parse ${file}: ${err.message}`);
  }
  config.registries ??= {};
  if (config.registries[NAMESPACE] !== REGISTRY_URL) {
    const existed = NAMESPACE in config.registries;
    config.registries[NAMESPACE] = REGISTRY_URL;
    writeFileSync(file, JSON.stringify(config, null, 2) + "\n");
    info(`${existed ? "Updated" : "Added"} the ${NAMESPACE} registry in components.json`);
  }
  return true;
}

const CN_HELPER = `import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`;

/**
 * Make an existing project ready for shadcn without running `shadcn init`,
 * which prompts and may rewrite globals.css and lib/utils. Writes a minimal
 * components.json from what's on disk and makes sure a cn() helper exists.
 * Never overwrites existing files; only appends cn() when it's missing.
 */
function readDeps(cwd) {
  const { dependencies = {}, devDependencies = {} } = JSON.parse(readFileSync(path.join(cwd, "package.json"), "utf8"));
  return { ...dependencies, ...devDependencies };
}

const isExpo = (cwd) => Boolean(readDeps(cwd).expo);

function ensureProjectConfig(cwd) {
  if (ensureRegistry(cwd)) return;

  const has = (p) => existsSync(path.join(cwd, p));
  const src = has("src") ? "src/" : "";
  const tsx = has("tsconfig.json");

  if (isExpo(cwd)) {
    // React Native has no global stylesheet or Tailwind config to wire up; the
    // native items style themselves. components.json just tells shadcn where files go.
    const config = {
      $schema: "https://ui.shadcn.com/schema.json",
      style: "new-york",
      rsc: false,
      tsx,
      tailwind: { config: "", css: "", baseColor: "neutral", cssVariables: false, prefix: "" },
      aliases: {
        components: "@/components",
        utils: "@/lib/utils",
        ui: "@/components/ui",
        lib: "@/lib",
        hooks: "@/hooks",
      },
      registries: { [NAMESPACE]: REGISTRY_URL },
    };
    writeFileSync(path.join(cwd, "components.json"), JSON.stringify(config, null, 2) + "\n");
    info("Created components.json for an Expo project");
    return;
  }
  const tailwindConfig =
    ["tailwind.config.ts", "tailwind.config.js", "tailwind.config.mjs", "tailwind.config.cjs"].find(has) ?? "";
  const css = [
    `${src}app/globals.css`,
    `${src}styles/globals.css`,
    `${src}app/global.css`,
    `${src}index.css`,
    `${src}globals.css`,
  ].find(has);
  if (!css) {
    fail(
      "Could not find your global CSS file (looked for app/globals.css, styles/globals.css, index.css).\n" +
        "  Create components.json by hand or run: npx shadcn@latest init",
    );
  }

  const deps = readDeps(cwd);
  const rsc = Boolean(deps.next) && has(`${src}app`);

  const config = {
    $schema: "https://ui.shadcn.com/schema.json",
    style: "new-york",
    rsc,
    tsx,
    tailwind: { config: tailwindConfig, css, baseColor: "neutral", cssVariables: true, prefix: "" },
    aliases: {
      components: "@/components",
      utils: "@/lib/utils",
      ui: "@/components/ui",
      lib: "@/lib",
      hooks: "@/hooks",
    },
    iconLibrary: "lucide",
    registries: { [NAMESPACE]: REGISTRY_URL },
  };
  writeFileSync(path.join(cwd, "components.json"), JSON.stringify(config, null, 2) + "\n");
  info(`Created components.json (css: ${css}${tailwindConfig ? `, tailwind: ${tailwindConfig}` : ", Tailwind 4"})`);

  const tsconfig = has("tsconfig.json") ? readFileSync(path.join(cwd, "tsconfig.json"), "utf8") : "";
  if (tsconfig && !tsconfig.includes('"@/*"')) {
    info('Your tsconfig has no "@/*" path alias. Add one (pointing at ./' + src + '*) so imports like @/lib/utils resolve.');
  }

  // cn() helper
  const ext = tsx ? "ts" : "js";
  const utils = [`${src}lib/utils.ts`, `${src}lib/utils.js`].find(has);
  const helper = tsx ? CN_HELPER : CN_HELPER.replace(", type ClassValue", "").replace("...inputs: ClassValue[]", "...inputs");
  if (!utils) {
    mkdirSync(path.join(cwd, `${src}lib`), { recursive: true });
    writeFileSync(path.join(cwd, `${src}lib/utils.${ext}`), helper, { flag: "wx" });
    info(`Created ${src}lib/utils.${ext} with cn()`);
  } else if (!/export\s+(function|const)\s+cn\b/.test(readFileSync(path.join(cwd, utils), "utf8"))) {
    writeFileSync(path.join(cwd, utils), `\n${helper}`, { flag: "a" });
    info(`Appended cn() to ${utils}`);
  }

  const missing = ["clsx", "tailwind-merge"].filter((d) => !deps[d]);
  if (missing.length) installPackages(missing, cwd);
}

function installPackages(names, cwd) {
  const has = (f) => existsSync(path.join(cwd, f));
  const [cmd, ...args] = has("pnpm-lock.yaml")
    ? ["pnpm", "add"]
    : has("yarn.lock")
      ? ["yarn", "add"]
      : has("bun.lockb") || has("bun.lock")
        ? ["bun", "add"]
        : ["npm", "install"];
  info(`Installing ${names.join(", ")}`);
  const result = spawnSync(cmd, [...args, ...names], { cwd, stdio: "inherit", shell: process.platform === "win32" });
  if (result.status !== 0) fail(`${cmd} ${args.join(" ")} ${names.join(" ")} failed`);
}

function requireProject(cwd) {
  if (!existsSync(path.join(cwd, "package.json"))) {
    fail(`No package.json in ${cwd}. Run this inside a project, or start one with: npx uiheat create <name>`);
  }
}

// ---------------------------------------------------------------------------

async function cmdList() {
  const items = (await fetchIndex()).filter((item) => item.name !== "landing-section");
  const width = Math.max(...items.map((item) => item.name.length));
  console.log(`\nUI Heat items (${REGISTRY_URL.replace("{name}.json", "")})\n`);
  for (const item of items) {
    console.log(`  ${item.name.padEnd(width)}  ${item.description ?? ""}`);
  }
  console.log(`\nAdd with: npx uiheat add <name> [more names…]\n`);
}

async function cmdAdd({ positional, passthrough, cwd }) {
  if (positional.length === 0) fail("Name at least one item, e.g. npx uiheat add landing-page. See: npx uiheat list");
  requireProject(cwd);
  ensureProjectConfig(cwd);

  const known = new Set((await fetchIndex()).map((item) => item.name));
  const items = positional.map((name) => {
    if (name.startsWith("@") || name.includes("/") || name.includes(":")) return name;
    return known.has(name) ? `${NAMESPACE}/${name}` : name;
  });

  // shadcn only overwrites existing colors when a theme is named directly, not
  // when it arrives as a dependency, so hoist it to the front explicitly.
  const needsTheme = items.some((name) => name === `${NAMESPACE}/starter`);
  if (needsTheme && !items.includes(`${NAMESPACE}/theme`)) items.unshift(`${NAMESPACE}/theme`);

  shadcn(["add", ...items, ...passthrough], cwd);

  if (isExpo(cwd)) {
    // shadcn installs the latest version of each dependency; native modules
    // (e.g. AsyncStorage) must match the project's Expo SDK instead.
    info("Aligning native package versions with your Expo SDK (expo install --fix)");
    const result = spawnSync("npx", ["--yes", "expo", "install", "--fix"], {
      cwd,
      stdio: "inherit",
      shell: process.platform === "win32",
    });
    if (result.status !== 0) info('Could not run "npx expo install --fix"; run it yourself to align versions.');
  }
}

async function cmdInit({ cwd }) {
  requireProject(cwd);
  ensureProjectConfig(cwd);
  console.log(`
Ready. Add what you need, e.g.
  npx uiheat add theme image-dropzone logger

Tip: skip "starter" in an existing app that already has its own components/ui/button.tsx.
`);
}

async function cmdCreate({ positional, passthrough, cwd }) {
  const name = positional[0];
  if (!name) fail("Give the new app a name, e.g. npx uiheat create my-site");
  const dir = path.resolve(cwd, name);
  if (existsSync(dir)) fail(`${dir} already exists`);
  if (existsSync(path.join(cwd, "package.json"))) {
    fail(
      `${cwd} is already a project (it has a package.json).\n` +
        `  Run create from the folder that should contain the new app, or use "npx uiheat init" to set up this one.`,
    );
  }

  shadcn(["init", "--template", "next", "--base", "radix", "--defaults", "--yes", "--no-monorepo", "--name", name, ...passthrough], cwd);
  if (!existsSync(path.join(dir, "components.json"))) fail(`shadcn did not create ${dir}`);

  ensureRegistry(dir);
  shadcn(["add", `${NAMESPACE}/theme`, `${NAMESPACE}/starter`, "--yes", "--overwrite"], dir);
  const wired = wireLayout(dir);

  console.log(`
Created ${name} with the UI Heat theme and starter components.

Next:
  cd ${name}${wired ? "" : "\n  Wrap children in <ThemeProvider> and <TooltipProvider>, and render <Toaster />, in app/layout.tsx"}
  npx uiheat add landing-page     (optional) full landing page with contact form
  npm run dev
`);
}

/**
 * Add TooltipProvider and Toaster to the layout shadcn's Next template generates.
 * Only touches the exact shape the template produces; returns false otherwise.
 */
function wireLayout(dir) {
  const file = ["app/layout.tsx", "src/app/layout.tsx"].map((f) => path.join(dir, f)).find(existsSync);
  if (!file) return false;
  const source = readFileSync(file, "utf8");
  const body = "<ThemeProvider>{children}</ThemeProvider>";
  const importLine = /^import \{ ThemeProvider \} from "@\/components\/theme-provider";?$/m;
  if (!source.includes(body) || !importLine.test(source)) return false;

  const updated = source
    .replace(
      importLine,
      (line) =>
        `${line}\nimport { Toaster } from "@/components/ui/sonner";\nimport { TooltipProvider } from "@/components/ui/tooltip";`,
    )
    .replace(
      body,
      "<ThemeProvider>\n          <TooltipProvider>{children}</TooltipProvider>\n          <Toaster />\n        </ThemeProvider>",
    );
  writeFileSync(file, updated);
  info(`Wired TooltipProvider and Toaster into ${path.relative(dir, file)}`);
  return true;
}

// ---------------------------------------------------------------------------

const [command, ...rest] = process.argv.slice(2);
const args = parseArgs(rest);

switch (command) {
  case "add":
    await cmdAdd(args);
    break;
  case "init":
    await cmdInit(args);
    break;
  case "create":
    await cmdCreate(args);
    break;
  case "list":
  case "ls":
    await cmdList();
    break;
  case "-v":
  case "--version":
    console.log(pkg.version);
    break;
  case undefined:
  case "-h":
  case "--help":
  case "help":
    console.log(HELP);
    break;
  default:
    fail(`Unknown command "${command}".\n\n${HELP}`);
}
