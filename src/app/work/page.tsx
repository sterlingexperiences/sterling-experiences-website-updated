import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout"
import WorkHeader from "@/components/work/WorkHeader"
import OurAchievements from "@/components/work/OurAchievements"
import WhatWeOffer from "@/components/work/WhatWeOffer"
import PortfolioGallery from "@/components/portfolio/PortfolioGallery"

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "View the portfolio and case studies from Sterling Experiences. See how we deliver premium event production, operations, and design across Nigeria.",
};

export default function WorkPage() {
  return (
    <div className="bg-secondary">
      <WorkHeader />
      <PageLayout>
        <OurAchievements />
        <WhatWeOffer />
        <PortfolioGallery />
      </PageLayout>
    </div>
  )
}
