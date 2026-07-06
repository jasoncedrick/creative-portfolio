// Deep-dive case study content.

export type DeepDive = {
  slug: string;
  client: string;
  tag: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
  topStats: { value: string; label: string }[];
  // 3 winning-creative video slots (9:16). Drop MP4s in /public/work and set src.
  winners: { src: string; poster: string; label: string }[];
  marketBreakdown?: { market: string; note?: string }[];
  highlight: { title: string; body: string; stats: { value: string; label: string }[] };
  closing: string;
  gallery?: string[];
};

const emptyWinners = [
  { src: "", poster: "", label: "Winning creative 01" },
  { src: "", poster: "", label: "Winning creative 02" },
  { src: "", poster: "", label: "Winning creative 03" },
];

export const deepDives: Record<string, DeepDive> = {
  "alessio-commerce": {
    slug: "alessio-commerce",
    client: "Alessio Commerce Ltd",
    tag: "DTC supplement brand · 5 European markets · 8 months",
    intro:
      "Alessio Commerce sells supplement and wellness products direct to consumers across Europe. The brief was simple to say and difficult to deliver: scale short-form ad creative output across five markets, in five different cultural contexts, without dropping performance.",
    sections: [
      { heading: "The problem", body: [
        "Performance marketing in DTC supplements lives or dies on creative volume. The Meta and TikTok algorithms reward fast iteration, and creative fatigue is real — every winning ad has a half-life of weeks, not months. A single market needs a steady pipeline of fresh angles. Five markets needs five pipelines, each tuned to local cultural references, currencies, and language nuance.",
        "Most brands solve this by hiring a local editor per market. Expensive, slow to coordinate, and inconsistent in quality. Alessio needed one operator running all five.",
      ]},
      { heading: "The approach", body: [
        "I built a creative pipeline structured around four layers: hook frameworks, problem-solution scripts, localized voiceover and copy adaptation, and aggressive iteration on winners.",
        "Hook frameworks were tested first. Once a hook started working in one market, I'd replicate the structure with localized references for the others — adapting the cultural cue, the currency, the measurement unit, and the visual references. The bones of the ad stayed the same. The skin changed market to market.",
        "Production was full-stack. Stock platforms, AI-generated B-roll, voiceover via tools and human VAs where it mattered, edited and delivered ready-to-launch. No raw footage required from the client.",
      ]},
      { heading: "The results", body: [
        "Over 8 months, the pipeline shipped 52 winning ads (creatives that hit profitability targets in at least one market). Total attributable revenue was €198,222. Profit, €105,174. Purchases, 5,194. Average ROAS of 2.13x across all 52 winners.",
        "The standout was EnduroFlex in Germany — a single creative that drove €30,228 in revenue and €14,698 in profit from 814 purchases in 60 days at 1.95x ROAS.",
      ]},
    ],
    topStats: [
      { value: "€198,222", label: "revenue driven" },
      { value: "€105,174", label: "profit generated" },
      { value: "5,194", label: "purchases" },
      { value: "52", label: "winning ads" },
      { value: "2.13x", label: "avg ROAS" },
      { value: "5", label: "markets" },
    ],
    winners: [
      { src: "/work/workalessio-1.mp4", poster: "", label: "META AD WINNER ITERATION" },
      { src: "/work/workalessio-2.mp4", poster: "", label: "META AD WINNER ITERATION" },
      { src: "/work/workalessio-3.mp4", poster: "", label: "META AD WINNER ITERATION" },
    ],

    marketBreakdown: [
      { market: "Germany", note: "Highest-performing market, home of the EnduroFlex hero ad." },
      { market: "France-Belgium", note: "Strong response to problem-solution framing." },
      { market: "France-Canada", note: "Separate cultural adaptation despite shared language." },
      { market: "Israel", note: "Hebrew voiceover and right-to-left visual considerations." },
      { market: "Netherlands", note: "Higher trust signals required, longer hook builds." },
    ],
    highlight: {
      title: "EnduroFlex — Germany",
      body: "Single creative. 60 days. €30,228 revenue, €14,698 profit, 814 purchases, 1.95x ROAS. One ad, with localized variants, doing the work of a full campaign.",
      stats: [
        { value: "€30,228", label: "revenue" },
        { value: "€14,698", label: "profit" },
        { value: "814", label: "purchases" },
        { value: "1.95x", label: "ROAS" },
      ],
    },
    closing:
      "Built and run by one person. Agency-scale output without the agency-scale overhead — exactly the leverage DTC brands need when scaling internationally.",
  },
  "grit-media": {
    slug: "grit-media",
    client: "Grit Media Collective LLC",
    tag: "US ad agency · Insurance vertical · 12 months",
    intro:
      "Grit Media is a performance ad agency running campaigns in the US insurance vertical. They needed a creative production partner who could match agency-scale output without agency-scale staffing. The bar: 25 to 35 production-ready short-form ads per month, every month, for a full year.",
    sections: [
      { heading: "The problem", body: [
        "Insurance ad creative in the US is brutally competitive. Compliance constraints, regulated messaging, and a saturated audience mean concepts burn out fast and you need a constant stream of new angles to feed the funnel.",
        "Agencies typically staff this with a small team of editors and a creative director. The bottleneck is creative output per dollar spent — and that's where I came in.",
      ]},
      { heading: "The approach", body: [
        "I built a production system that mixed live-action B-roll, AI-generated assets, and voiceover-driven hooks. Concepts came in weekly. Variants got generated, edited, and delivered in batches.",
        "The trick was treating each ad as part of a system, not a one-off. Hook libraries, B-roll libraries, voiceover libraries — all organized so a new concept could be assembled from known-working parts in hours, not days.",
      ]},
      { heading: "The results", body: [
        "Over 12 months, 300+ short-form ads shipped. Sampling the verified winners gave 70 standout creatives accounting for $57,714 in attributed revenue and $15,005 in profit on the agency's tracked spend. 1,715 conversions across the sampled set. Peak ROI on a single creative was 32.8%.",
        "The headline isn't a single hero number. It's the consistency. 25 to 35 ads per month, every month, for 12 months, while maintaining quality high enough to produce verified winners across multiple concepts.",
      ]},
    ],
    topStats: [
      { value: "300+", label: "ads in 12 months" },
      { value: "70", label: "verified winners" },
      { value: "$57,714", label: "attributed revenue" },
      { value: "$15,005", label: "profit" },
      { value: "1,715", label: "conversions" },
      { value: "32.8%", label: "peak ROI" },
    ],
    winners: [
    { src: "/work/workgrit-1.mp4", poster: "", label: "Winner LongForm" },
    { src: "/work/workgrit-2.mp4", poster: "", label: "AI Winner ShortForm" },
    { src: "/work/workgrit-3.mp4", poster: "", label: "AI Winner ShortForm" },
    ],

    highlight: {
      title: "Sustained volume, sustained quality",
      body: "Most operators can hit volume OR quality. Doing both for 12 months straight is the rare thing. The agency got production capacity typically reserved for a full editor team, at a fraction of the structural cost.",
      stats: [
        { value: "25-35", label: "ads/month" },
        { value: "12", label: "months sustained" },
        { value: "1", label: "operator" },
      ],
    },
    closing:
      "This is the case study to look at if you're an agency thinking about white-label creative production. The system scales. I can run it for you, the same way I ran it for Grit.",
  },
  "temporary-inked": {
    slug: "temporary-inked",
    client: "TemporaryInked",
    tag: "DTC consumer products · Realistic temporary tattoos · Short-form ads",
    intro:
      "TemporaryInked sells realistic 1-2 week temporary tattoos direct to consumers. The product is visual, trend-friendly, and impulse-driven — which makes short-form video the perfect engine. The brief: scroll-stopping ad creative for TikTok, Instagram Reels, and YouTube Shorts that converts attention into purchases.",
    sections: [
      { heading: "The problem", body: [
        "A commitment-free tattoo is an easy idea to grasp but a hard one to make someone buy on impulse. The creative had to do two jobs at once: communicate that the tattoos look real, and remove the friction of 'is this worth it' in the first few seconds.",
        "The brand was running paid social across three platforms, each with its own pacing and format expectations. Generic reposts wouldn't cut it — every cut needed to feel native to the feed it lived in.",
      ]},
      { heading: "The approach", body: [
        "Hook-first, trend-aware edits. I leaned into the visual payoff — close-ups of realistic application, before-and-after reveals, and aesthetic storytelling that made the product the hero. Fast pacing tuned per platform, on-brand throughout.",
        "Concepts were built to test. Multiple angles per product, format-ready for Meta, TikTok, and YouTube, so the media buyer could push spend behind whatever the data favored.",
      ]},
      { heading: "The results", body: [
        "The brand's revenue dashboard showed €62,481 in total store revenue during active ad campaigns. Multiple ads drove purchases in the $20-30 CPA range — efficient for a consumer-products price point — sustaining engagement and sales across paid social.",
        "The Facebook page grew to 13K followers alongside the paid activity, building an owned audience on top of the performance results.",
      ]},
    ],
    topStats: [
      { value: "€62,481", label: "store revenue" },
      { value: "$20-30", label: "CPA range" },
      { value: "13K", label: "FB followers" },
      { value: "3", label: "platforms" },
    ],
    winners: [
      { src: "/work/worktempinked-1.mp4", poster: "", label: "AI PODCAST" },
      { src: "/work/worktempinked-2.mp4", poster: "", label: "B-ROLL CREATIVE" },
      { src: "/work/worktempinked-3.mp4", poster: "", label: "AI VIDEO GENERATION" },
    ],
    highlight: {
      title: "Efficient CPA at consumer-product scale",
      body: "Driving purchases at a $20-30 CPA on an impulse-buy product means the creative is doing the heavy lifting — stopping the scroll and closing the sale before the viewer thinks twice.",
      stats: [
        { value: "€62,481", label: "store revenue" },
        { value: "$20-30", label: "CPA" },
        { value: "3", label: "platforms" },
      ],
    },
    closing:
      "If you're a DTC brand with a visual product and a paid-social budget, this is the playbook: native-feeling creative, built to test, tuned to convert. I can run it for your catalog.",
  },
};
