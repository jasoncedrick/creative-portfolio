# Jason Cedrick — Creative Portfolio

**Current website: [jasoncedrickportfolio.com](https://jasoncedrickportfolio.com/)**

The source for my video-editing and creative-strategy portfolio, with a video gallery, client case studies, testimonials, services, and contact information.

## Featured work

- [Alessio Commerce](https://jasoncedrickportfolio.com/work/alessio-commerce) — localized DTC performance creative across five international markets.
- [Grit Media Collective](https://jasoncedrickportfolio.com/work/grit-media) — sustained short-form ad production.
- [TemporaryInked](https://jasoncedrickportfolio.com/work/temporary-inked) — tattoo product storytelling and short-form ads.
- The video gallery includes UGC edits, AI animation, product creative, and social content.

## Stack

Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4, Motion, and Vercel Analytics.

The current font setup uses Manrope, Inter Tight, and JetBrains Mono.

## Content and application structure

| Location | Purpose |
| --- | --- |
| `app/page.tsx` | Homepage sections and video gallery |
| `app/layout.tsx` | Fonts, metadata, social previews, and structured data |
| `app/work/` | Client case-study pages |
| `components/` | Reusable interface and portfolio components |
| `lib/content.ts` | Main site copy and structured content |
| `lib/deep-dives.ts` | Long-form case studies |
| `lib/portfolio.ts` | Video titles, categories, descriptions, and media references |
| `public/` | Static images and media |
| `proxy.ts` | Request handling for selected case-study video files |

Use the portfolio pages to view the creative work; selected media files are configured to be opened from the site.

## Local development

Use the Node.js and pnpm versions compatible with `package.json`. The repository declares pnpm 11.4.0.

```bash
pnpm install
pnpm dev
```

Open [localhost:3000](http://localhost:3000).

For a production build:

```bash
pnpm build
pnpm start
```

## Website URL and deployment

The canonical website is **https://jasoncedrickportfolio.com/**.

`app/layout.tsx` uses `NEXT_PUBLIC_SITE_URL` when configured and otherwise defaults to `https://jasoncedrickportfolio.com`. Keep that value aligned with the production domain.

Check the current deployment's environment configuration before changing video delivery or publishing updates. Never commit credentials.

## Links

[Live portfolio](https://jasoncedrickportfolio.com/) · [LinkedIn](https://www.linkedin.com/in/jasonceddy/) · [GitHub profile](https://github.com/jasoncedrick)
