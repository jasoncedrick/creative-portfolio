import type { Metadata } from "next";
import { DeepDiveLayout } from "@/components/DeepDiveLayout";
import { deepDives } from "@/lib/deep-dives";

const dive = deepDives["temporary-inked"];

export const metadata: Metadata = {
  title: `${dive.client}: TikTok & Reels Ads Case Study`,
  description:
    "DTC temporary tattoo brand. £61,803 store revenue in 30 days during active campaigns, $20-30 CPA, 13K Facebook followers. Ads for TikTok, Reels, and Shorts.",
  alternates: { canonical: `/work/${dive.slug}` },
  openGraph: {
    url: `/work/${dive.slug}`,
    title: `${dive.client}: TikTok & Reels Ads Case Study`,
    description:
      "DTC temporary tattoo brand. £61,803 store revenue in 30 days, $20-30 CPA, short-form ads across 3 platforms.",
  },
};

export default function TemporaryInkedPage() {
  return <DeepDiveLayout dive={dive} />;
}
