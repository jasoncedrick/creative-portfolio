# Asset drop-in guide (placeholders → real content)

Everything below has a styled placeholder live on the site right now. Drop the file, set the path, done.

## 1. Showreel — 5 vertical videos (9:16)
- Put 5 MP4s in `/public` (e.g. `reel-01.mp4` … `reel-05.mp4`)
- In `lib/content.ts` → `hero.reel`, set each `src` (e.g. `src: "/reel-01.mp4"`)
- Optional `poster` (a still frame JPG) for faster first paint

## 2. Winning creatives — 3 vertical videos per featured deep dive (9:16)
- Put MP4s in `/public/work`
- In `lib/deep-dives.ts`, each case has a `winners` array (currently `emptyWinners`)
- Replace with real entries, e.g.:
  ```ts
  winners: [
    { src: "/work/alessio-1.mp4", poster: "", label: "EnduroFlex DE" },
    { src: "/work/alessio-2.mp4", poster: "", label: "Variant B" },
    { src: "/work/alessio-3.mp4", poster: "", label: "Variant C" },
  ],
  ```

## 3. Case-study proof images (all 8 cases)
- Put images in `/public/work/<slug>.jpg`
  - Featured: `alessio-commerce.jpg`, `grit-media.jpg`, `temporary-inked.jpg`
  - Others: `batana-oil.jpg`, `ibb.jpg`, `flitsboek.jpg`, `sure-health-360.jpg`, `geobravotv.jpg`
- In `lib/content.ts`, set the `image` field on each case (e.g. `image: "/work/temporary-inked.jpg"`)
- The `imageHint` field already says which screenshot from your PDF fits each one

## 4. Your headshot (About section)
- Put your photo at `/public/jason.jpg` (the one from your portfolio PDF works)
- In `lib/content.ts` → `about.photo = "/jason.jpg"`

## 5. Testimonials (3–5)
- In `lib/content.ts` → `testimonials` array
- Replace placeholder quotes with approved client quotes once you have permission

## 6. Social links
- In `lib/content.ts` → `site.linkedin` and `site.instagram`

## 7. OG image + favicon
- `/public/og.png` (1200×630, for link shares)
- `app/icon.png` or `app/favicon.ico` (favicon)

---
Until you fill these, the placeholders look intentional (labeled 9:16 / image slots), so the site is fully shippable as-is.
