import type { Metadata } from "next";
import { DeepDiveLayout } from "@/components/DeepDiveLayout";
import { deepDives } from "@/lib/deep-dives";

const dive = deepDives["temporary-inked"];

export const metadata: Metadata = {
  title: `${dive.client} — Case Study`,
  description:
    "DTC temporary tattoo brand. €62,481 store revenue during active campaigns, $20-30 CPA, 13K followers across TikTok, Reels, and Shorts.",
  openGraph: {
    title: `${dive.client} — Case Study`,
    description:
      "DTC temporary tattoo brand. €62,481 store revenue, $20-30 CPA, short-form ads across 3 platforms.",
  },
};

export default function TemporaryInkedPage() {
  return <DeepDiveLayout dive={dive} />;
}
