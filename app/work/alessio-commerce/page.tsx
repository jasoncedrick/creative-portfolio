import type { Metadata } from "next";
import { DeepDiveLayout } from "@/components/DeepDiveLayout";
import { deepDives } from "@/lib/deep-dives";

const dive = deepDives["alessio-commerce"];

export const metadata: Metadata = {
  title: `${dive.client} — Case Study`,
  description:
    "DTC supplement brand. 5 international markets. 52 winning ads, €198K revenue, €105K profit, 5,194 purchases in 16 months.",
  alternates: { canonical: `/work/${dive.slug}` },
  openGraph: {
    url: `/work/${dive.slug}`,
    title: `${dive.client} — Case Study`,
    description:
      "DTC supplement brand. 5 international markets. 52 winning ads, €198K revenue, €105K profit, 5,194 purchases.",
  },
};

export default function AlessioPage() {
  return <DeepDiveLayout dive={dive} />;
}
