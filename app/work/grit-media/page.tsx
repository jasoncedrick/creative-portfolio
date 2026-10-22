import type { Metadata } from "next";
import { DeepDiveLayout } from "@/components/DeepDiveLayout";
import { deepDives } from "@/lib/deep-dives";

const dive = deepDives["grit-media"];

export const metadata: Metadata = {
  title: `${dive.client}: Performance Video Ads Case Study`,
  description:
    "US ad agency. Insurance vertical. 300+ ads in 12 months, 70 verified winners, 2,715 conversions, 32.8% peak ROI.",
  alternates: { canonical: `/work/${dive.slug}` },
  openGraph: {
    url: `/work/${dive.slug}`,
    title: `${dive.client}: Performance Video Ads Case Study`,
    description:
      "US ad agency. Insurance vertical. 300+ ads in 12 months, 70 verified winners, 2,715 conversions, 32.8% peak ROI.",
  },
};

export default function GritMediaPage() {
  return <DeepDiveLayout dive={dive} />;
}
