# Jason Cedrick — Portfolio

Short-form video creative portfolio. Built with Next.js 16 (App Router) + TypeScript + Tailwind v4 + Motion.

Dark, iOS-clean aesthetic. Static site. No backend, no database, no auth.

---

## Stack

- **Next.js 16** (App Router) — note: spec called for Next 15, shipped Next 16 (App Router unchanged, just newer baseline)
- **React 19**
- **TypeScript 5**
- **Tailwind CSS v4** (CSS-first config via `@theme` in `app/globals.css`)
- **Motion** (the rebranded `framer-motion` — import from `motion/react`)
- **Geist** font family (sans + mono) via `next/font`
- **@vercel/analytics**

---

## Project structure

```
portfolio/
├── app/
│   ├── layout.tsx           # Root layout: metadata, fonts, analytics, Person schema
│   ├── page.tsx             # Main page composition
│   ├── globals.css          # Tailwind v4 import + design tokens + base styles
│   ├── not-found.tsx        # Custom 404
│   └── work/
│       ├── alessio-commerce/page.tsx   # Deep dive
│       └── grit-media/page.tsx         # Deep dive
├── components/
│   ├── Nav.tsx, Hero.tsx, StatsBar.tsx, About.tsx, Services.tsx,
│   ├── CaseStudies.tsx, Process.tsx, Stack.tsx, Languages.tsx,
│   ├── FAQ.tsx, Contact.tsx, Footer.tsx
│   ├── DeepDiveLayout.tsx   # Shared layout for both case study deep dives
│   ├── FadeIn.tsx           # Scroll-triggered fade wrapper
│   └── AnimatedCounter.tsx  # Stat number count-up
├── lib/
│   ├── content.ts           # ALL site copy + structured data lives here
│   └── deep-dives.ts        # Long-form content for the two featured cases
├── public/                  # Static assets (add og.png, favicon, reel.mp4 here)
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
├── .npmrc                   # Tells pnpm not to block on sharp's build script
├── .env.local.example       # Template for env vars (none required for v1)
└── .gitignore
```

**Edit content in `lib/content.ts` and `lib/deep-dives.ts`.** Components are presentational; they read from these files.

---

## Local development

Requires Node.js ≥ 20 and pnpm.

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000

To build for production:

```bash
pnpm build
pnpm start
```

---

## What still needs to be added (placeholders flagged in code with `TODO`)

1. **Showreel video** → drop a 60–90s MP4 at `public/reel.mp4`, then in `components/Hero.tsx` replace the showreel placeholder block with `<video src="/reel.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />`.

2. **OG image** → create a 1200×630 PNG, save as `public/og.png`. This is what shows when someone shares a link on LinkedIn/X.

3. **Favicon** → drop a `favicon.ico` (or `icon.png`) in `app/`. Next.js auto-wires it.

4. **LinkedIn & Instagram URLs** → in `lib/content.ts`, replace the placeholder URLs at the top.

5. **Editing software list** → in `lib/content.ts`, update `stack.production` with the tools you actually use (currently has Premiere/AE/CapCut/DaVinci as placeholders — keep what's true, remove the rest).

6. **Final domain** → in `app/layout.tsx`, replace `https://jasoncedrick.com` in `metadataBase` and `openGraph.url`.

7. **Testimonials section** (post-launch) → once you have 3–5 approved client testimonials, add a new component and slot it between `CaseStudies` and `Process` in `app/page.tsx`.

---

## Deploy to Vercel

1. Push this repo to GitHub.
2. Go to https://vercel.com/new, import the repo.
3. Vercel auto-detects Next.js. Defaults are fine.
4. Click Deploy.
5. First deploy lives at `<project-name>.vercel.app`. Add a custom domain in Project Settings → Domains.

No env variables required for v1.

---

## Design system

All colors and tokens are in `app/globals.css` under the `@theme` block.

- **Background:** `--color-bg` (#0a0a0b)
- **Text:** `--color-fg` (#f4f4f5)
- **Accent:** `--color-accent` (#a3ff12) — used sparingly: status dot, hover states, key highlights
- **Fonts:** Geist Sans (body + headlines), Geist Mono (numbers + technical labels)

To swap the accent color, change `--color-accent` in `globals.css`. That's it — it propagates everywhere.

---

## Notes

- `motion` package is used (not `framer-motion`). Imports look like `import { motion } from "motion/react"`. Both libraries are functionally equivalent; `motion` is the current name.
- Tailwind v4 uses **CSS-first config** — no `tailwind.config.js`. Theme tokens live in `globals.css`.
- The `.npmrc` file has `strict-dep-builds=false` so the `sharp` image-optimization package (a transitive Next.js dep) can build without you needing to approve it interactively.
