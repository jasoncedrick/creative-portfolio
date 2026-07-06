// All site copy and structured data lives here.

export const site = {
  name: "Jason Cedrick",
  role: "Short-Form Video Creative for DTC Brands & Founders",
  email: "jcp.professional.work@gmail.com",
  whatsapp: "+639955098146",
  whatsappDisplay: "+63 995 509 8146",
  linkedin: "https://www.linkedin.com/in/jasonceddy/",
  instagram: "https://www.instagram.com/centralceddy",
  location: "Davao, Philippines",
  timezone: "GMT+8",
  available: true,
  metaDescription:
    "Short-form video ad editor and creative producer. €105K client profit, €198K revenue, 5,194 purchases, 300+ ads produced across 5 international markets. Based in the Philippines, working globally.",
};

export const hero = {
  headline:
    "Short-form video creative that drives revenue for DTC brands and grows audiences for founders.",
  subhead:
    "€105K in attributable client profit. 300+ ads produced in 12 months. 5 international markets. Receipts on every line.",
  availability:
    "Currently available for short-term projects and ongoing creative retainers.",
  reel: [
    { src: "https://res.cloudinary.com/dbuvkbafj/video/upload/v1780972863/reel-1_cckvgg.mp4", poster: "", label: "Reel 01" },
    { src: "https://res.cloudinary.com/dbuvkbafj/video/upload/v1780972871/reel-3_hhhb0d.mp4", poster: "", label: "Reel 02" },
    { src: "https://res.cloudinary.com/dbuvkbafj/video/upload/v1780972875/reel-4_ivyub4.mp4", poster: "", label: "Reel 03" },
    { src: "https://res.cloudinary.com/dbuvkbafj/video/upload/v1780972878/reel-5_j1zgsp.mp4", poster: "", label: "Reel 04" },
    { src: "https://res.cloudinary.com/dbuvkbafj/video/upload/v1780972884/reel-2_ngdshs.mp4", poster: "", label: "Reel 05" },
    // ── New slots — paste your Cloudinary URL between the quotes on each `src` line ──
   { src: "https://res.cloudinary.com/rgp5u7uv/video/upload/v1783355101/Reel_1_yubpmf.mp4", poster: "", label: "Reel 06" },
    { src: "https://res.cloudinary.com/rgp5u7uv/video/upload/v1783355100/Reel_1_1_eplbmi.mp4", poster: "", label: "Reel 07" },
    { src: "https://res.cloudinary.com/rgp5u7uv/video/upload/v1783355089/Reel_2_juqj94.mp4", poster: "", label: "Reel 08" },
    { src: "https://res.cloudinary.com/rgp5u7uv/video/upload/v1783355064/Reel_2_1_u7z9ai.mp4", poster: "", label: "Reel 09" },
    { src: "https://res.cloudinary.com/rgp5u7uv/video/upload/v1783357322/0706_1_ecb2aj.mp4", poster: "", label: "Reel 10" },
  ],
};

export const stats = {
  primary: [
    { value: "€105K", label: "profit generated" },
    { value: "€198K", label: "revenue driven" },
    { value: "52", label: "winning ads" },
    { value: "5,194", label: "purchases driven" },
    { value: "5", label: "markets" },
  ],
  secondary: [
    { value: "300+", label: "ads produced in 12 months" },
    { value: "1,715", label: "conversions driven" },
    { value: "32.8%", label: "peak ROI single ad" },
    { value: "5", label: "languages localized" },
  ],
};

export const about = {
  intro: "Creative work is the thing I'd do for free. I just got good enough at it that people pay.",
  photo: "/jason.jpg",
  paragraphs: [
    "I'm Jason Cedrick, 21, based in the Philippines. I produce short-form video content for two kinds of clients: eCommerce brands that need ad creative that actually converts, and founders building authority through personal branding content.",
    "My ads have driven over €198K in revenue, €105K in profit, and 5,194 purchases across 5 European markets for a DTC supplement brand. I've produced 300+ ad creatives in a single year for a US-based ad agency in the insurance vertical. I also handle social media management, localization, and full creative production end to end.",
    "I run lean. Full production from concept to delivery, no waiting on you for raw footage, scripts, or research. AI tools, stock platforms, and creative direction handle the sourcing. You hand me a brief, you get a finished ad ready to launch.",
    "Right now I'm a one-person creative team building toward an agency. The systems and bar I work at are already there.",
  ],
};

export type Service = {
  id: string;
  title: string;
  audience: string;
  body: string;
};

export const services: Service[] = [
  {
    id: "ads",
    title: "Short-Form Ad Creatives",
    audience: "For DTC and eCommerce brands.",
    body: "Hooks, B-roll, voiceover-driven ads, UGC-style cuts, and product-led content built for Meta Ads, TikTok Ads, YouTube Shorts, and Instagram Reels. Built for ROAS, not for awards. Iteration-friendly. Multiple variants per concept. Format-ready for testing.",
  },
  {
    id: "brand",
    title: "Personal Brand Content",
    audience: "For founders, executives, and creators building authority.",
    body: "Short-form video that turns thought leadership into consistent presence on LinkedIn, Instagram, TikTok, and YouTube. Captions, hook engineering, B-roll selection, brand consistency across every post. You record once a month, I post you every week.",
  },
  {
    id: "social",
    title: "Social Media Management",
    audience: "End-to-end content systems.",
    body: "Strategy, calendars, scheduling, design, video, copy. Brand-consistent across platforms. Scheduling handled through Buffer and similar tools. Performance reviewed monthly and adjusted.",
  },
  {
    id: "localization",
    title: "Localization & Translation",
    audience: "For brands going international.",
    body: "Ad creative adapted into German, Danish, Swedish, French, Hebrew, and English. Not just translation. Cultural adaptation, currency, measurement, and reference shifts so the copy feels native. Saves you the cost of hiring local editors per market.",
  },
  {
    id: "production",
    title: "Full Creative Production",
    audience: "For when you want a finished creative, not a project.",
    body: "Concept, scripting, sourcing, footage selection, AI-generated assets, voiceover, editing, design, and delivery. You provide the brief. I deliver the ad. No production days, no asset libraries to manage, no back and forth on missing files.",
  },
];

export type CaseStudy = {
  slug: string;
  client: string;
  tag: string;
  brief: string;
  did: string;
  results: { label: string; value: string }[];
  highlight?: string;
  image?: string;
  imageHint: string;
  featured?: boolean;
  hasDeepDive?: boolean;
  proof?: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "alessio-commerce",
    client: "Alessio Commerce Ltd",
    tag: "eCommerce · DTC · Performance Ads · 16 months",
    brief:
      "Scale short-form ad creative output across 5 European markets without sacrificing performance. High-velocity testing, multiple product lines, localized variants.",
    did: "Built a high-volume creative pipeline. Hook-first frameworks, problem-solution structure, localized for each market, tested aggressively, doubled down on winners. Full production from sourcing to delivery, including localized voiceovers and language adaptation.",
    results: [
      { label: "winning ads", value: "52" },
      { label: "revenue", value: "€198,222" },
      { label: "profit", value: "€105,174" },
      { label: "purchases", value: "5,194" },
      { label: "avg ROAS", value: "2.13x" },
      { label: "markets", value: "5" },
    ],
    highlight:
      "EnduroFlex (Germany) — single creative generated €30,228 revenue and €14,698 profit from 814 purchases in 60 days at 1.95x ROAS.",
    imageHint: "EnduroFlex winning ad still or Meta dashboard screenshot",
    featured: true,
    hasDeepDive: true,
  },
  {
    slug: "grit-media",
    client: "Grit Media Collective LLC",
    tag: "Ad Agency · Insurance Vertical · US Market · 12 months",
    brief:
      "Sustained high-velocity ad creative output for a performance-driven ad agency client. Insurance vertical, US market. Multiple ad concepts, multiple variants per concept, weekly delivery.",
    did: "Built a production system to deliver 25 to 35 short-form video ads per month, every month. Mixed live-action B-roll, AI-generated assets, and voiceover-driven hooks. Maintained creative quality while hitting agency-level volume.",
    results: [
      { label: "ads produced", value: "300+" },
      { label: "verified winners", value: "70" },
      { label: "attributed revenue", value: "$57,714" },
      { label: "profit", value: "$15,005" },
      { label: "conversions", value: "2,715" },
      { label: "peak ROI", value: "32.8%" },
    ],
    highlight:
      "Sustained volume of 25-35 production-ready ads per month with measurable ROI across multiple concepts. Production capability typically reserved for full teams.",
    imageHint: "Ads Manager grid screenshot or winning creative still",
    featured: true,
    hasDeepDive: true,
  },
  {
    slug: "temporary-inked",
    client: "TemporaryInked",
    tag: "DTC · Consumer Products · Short-Form Ads · 10 months",
    brief:
      "Short-form ad content for a realistic temporary tattoo brand across TikTok, Instagram Reels, and YouTube Shorts. Fast-paced, scroll-stopping, conversion-focused.",
    did: "Trend-aware, fast-paced edits emphasizing the commitment-free appeal of the product. Hook-led structure, aesthetic storytelling, on-brand pacing. Multiple winning concepts driving purchases at an efficient CPA.",
    results: [
      { label: "store revenue", value: "€62,481" },
      { label: "CPA range", value: "$20-30" },
      { label: "FB followers", value: "13K" },
      { label: "platforms", value: "3" },
    ],
    highlight:
      "Brand revenue dashboard showed €62,481 in total store revenue during active ad campaigns, with multiple ads driving purchases in the $20-30 CPA range.",
    imageHint: "Shopify revenue dashboard + winning ad stills (from PDF p.3)",
    featured: true,
    hasDeepDive: true,
  },
  {
    slug: "ibb",
    client: "Impact Business Breakfast (IBB)",
    tag: "B2B · Authority Brand · Personal Branding · Project-Based",
    brief:
      "Build and execute a content system for a community empowering African entrepreneurs and business leaders. Multi-platform, weekly delivery.",
    did: "Built weekly social calendars. Leadership tips, quotes, polls, infographics, and reels. Layouts and visuals designed for consistent brand identity across Instagram and LinkedIn.",
    results: [
      { label: "IG followers", value: "10,100+" },
      { label: "LinkedIn", value: "1,000+" },
    ],
    highlight:
      "Grew and maintained an active community of 10,100+ Instagram followers and 1,000+ LinkedIn followers with a recognizable, professional brand voice.",
    imageHint: "IBB carousel/infographic designs (from PDF p.9)",
    proof: [
      "/work/ibb-1.png",
      "/work/ibb-2.png",
      "/work/ibb-3.png",
      "/work/ibb-4.png",
    ],
  },
  {
    slug: "flitsboek",
    client: "FlitsBoek",
    tag: "International Tech · Reading & Audiobook App · Netherlands · Project-Based",
    brief:
      "Promotional video content for a Dutch reading and audiobook app. Book trailers, app walkthroughs, social media clips.",
    did: "Engaging promotional videos aligned with the brand's modern, educational tone. Highlighted key product features and use cases.",
    results: [
      { label: "followers", value: "23.7K" },
      { label: "market", value: "Netherlands" },
    ],
    highlight:
      "Content supported visibility growth and app download campaigns. Worked alongside the marketing team to maintain brand consistency.",
    imageHint: "App promo video still / editing timeline (from PDF p.7)",
    proof: [
      "/work/flitsboek-1.png",
      "/work/flitsboek-2.png",
      "/work/flitsboek-3.png",
    ],
  },
  {
    slug: "sure-health-360",
    client: "Sure Health 360, Sure RN, Sure MD",
    tag: "Healthcare · Local PH Brand · Social Media Growth · 1.5 Years",
    brief:
      "Manage and grow the social presence of a Davao-based medical and wellness clinic. Strategy, content, design, performance review.",
    did: "Created reels, graphics, and carousels promoting wellness services and health education. Maintained brand consistency, professional health-focused identity.",
    results: [
      { label: "IG growth", value: "0 → 5,000+" },
      { label: "reach", value: "48.4K" },
    ],
    highlight:
      "Scaled the brand's Instagram to 5,000+ followers and established a strong, trusted local online presence.",
    imageHint: "Health graphics + Meta Business Suite insights (from PDF p.11)",
    proof: [
      "/work/surehealth-1.png",
      "/work/surehealth-2.png",
      "/work/surehealth-3.png",
      "/work/surehealth-4.png",
    ],
  },
  {
    slug: "geobravotv",
    client: "GeoBravoTV",
    tag: "Audience Growth · Creator Strategy · YouTube · Project-Based",
    brief:
      "Grow a YouTube channel from near-zero to a working subscriber base. Social media management, content strategy, optimization.",
    did: "Content strategy built around algorithm-aware formats. Social media management across platforms. Optimization for retention and discovery.",
    results: [
      { label: "subs growth", value: "20 → 2,000" },
      { label: "views", value: "36,000+" },
      { label: "timeframe", value: "1 month" },
    ],
    highlight:
      "Grew the channel from 20 to 2,000 subscribers in 1 month. 36,000+ video views generated during the growth period.",
    imageHint: "YouTube analytics graph + thumbnails (from PDF p.4)",
    proof: [
      "/work/geobravotv-1.png",
    ],
  },
];

export const process = [
  { n: "01", title: "Brief", body: "We align on goals, audience, market, format, and references. Async-friendly. A 10-minute Loom or a written brief is usually enough." },
  { n: "02", title: "Research & sourcing", body: "I source angles, references, footage, voiceover tracks, and assets from stock platforms, social media, the web, and AI tools. No waiting on you to deliver raw clips." },
  { n: "03", title: "Production", body: "Edit, design, animate, localize. Built in-house using a stack that combines traditional editing tools and modern AI assistants. Multiple variants per concept where useful." },
  { n: "04", title: "Delivery", body: "Ready-to-launch files in every aspect ratio you need. Localized variants if requested. Naming conventions and folder structure that your media buyer or social manager will actually thank you for." },
  { n: "05", title: "Iteration", body: "Performance data feeds the next round. Winners get more variants. Losers get killed. The point is finding the angles that work, fast." },
];

export const stack = {
  ai: [
    "Claude — writing, scripting, strategy",
    "ChatGPT — writing, ideation",
    "Gemini — research, ideation",
    "Nanobanana — image generation",
    "Veo 3 — video generation",
    "Sora 2 — video generation",
    "Higgsfield — video generation",
    "HeyGen — AI avatars, voiceover video",
    "Runway — video generation, editing AI",
  ],
  production: [
    "Buffer — social scheduling",
    "CapCut — short-form editing",
    "Adobe Premiere Pro — editing",
    "After Effects — motion design",
    "DaVinci Resolve — color & finishing",
  ],
};

export const languages = {
  ready: [
    { code: "DE", name: "German" },
    { code: "DA", name: "Danish" },
    { code: "SV", name: "Swedish" },
    { code: "FR", name: "French" },
    { code: "HE", name: "Hebrew" },
    { code: "EN", name: "English (native fluency)" },
    { code: "TL", name: "Filipino / Tagalog (native)" },
  ],
  markets: ["Germany", "France-Belgium", "France-Canada", "Israel", "Netherlands", "United States", "Philippines"],
};

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar?: string;
  proof?: string[];
};

export const testimonials: Testimonial[] = [
  {
    quote: "Very good job — the quality is good. Now that we're three, we really need you.",
    name: "Alessio Commerce",
    role: "DTC supplement brand (EU)",
    proof: [
      "/testimonials/alessio-1.png",
      "/testimonials/alessio-2.png",
      "/testimonials/alessio-3.png",
      "/testimonials/alessio-4.png",
    ],
  },
  {
    quote: "Good edits, Jason — these look solid. Good jump-cut edits too.",
    name: "Grit Media",
    role: "Performance ad agency (US)",
    proof: [
      "/testimonials/grit-1.png",
      "/testimonials/grit-2.png",
      "/testimonials/grit-3.png",
      "/testimonials/grit-4.png",
    ],
  },
  {
    quote: "You did so well with the B-roll clips — I love it, good job on your edits.",
    name: "TemporaryInked",
    role: "DTC consumer brand",
    proof: [
      "/testimonials/tempinked-1.png",
      "/testimonials/tempinked-2.png",
      "/testimonials/tempinked-3.png",
      "/testimonials/tempinked-4.png",
    ],
  },
];

export const faqs = [
  { q: "What's your typical turnaround?", a: "Standard ads ship in 2 to 4 business days from brief. Rush turnaround is available depending on scope. Retainer clients get priority slots in the production schedule." },
  { q: "Do you require raw footage from me?", a: "No. I run full production from scratch. Stock platforms, AI-generated assets, social media references, and web sourcing handle the assets. You can provide raw footage if you have it, but you don't have to." },
  { q: "Can you produce in my brand's language?", a: "Yes. I localize ads in German, Danish, Swedish, French, Hebrew, and English. Other languages on request." },
  { q: "What's your pricing?", a: "Project pricing depends on scope, volume, and turnaround. Retainer pricing depends on monthly creative output. Email me with what you're working on and I'll send a quote within 24 hours." },
  { q: "Do you work with agencies or only direct brands?", a: "Both. I work directly with DTC brands and founders, and I also handle white-label production for agencies that need extra creative capacity." },
  { q: "What size of brand do you work best with?", a: "DTC brands spending €10K+ per month on paid social, founders with an active audience or a plan to build one, and agencies running multiple client accounts. If you're earlier stage, message me anyway. I'm selective but not snobbish." },
  { q: "Where are you based and what timezones do you work?", a: "Philippines (GMT+8). I work with clients across Europe, North America, and the Middle East. Async-friendly. Real-time calls available within reasonable overlap." },
];
