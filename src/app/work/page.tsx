import { PageLayout } from "@/components/layout/PageLayout"
import WorkHeader from "@/components/work/WorkHeader"
import OurAchievements from "@/components/work/OurAchievements"
import WhatWeOffer from "@/components/work/WhatWeOffer"
import PortfolioGallery from "@/components/portfolio/PortfolioGallery"
import Contact from "@/components/home/Contact"

export default function WorkPage() {
  return (
    <div className="bg-secondary">
      <WorkHeader />
      <PageLayout>
        <OurAchievements />
        <WhatWeOffer />
        <PortfolioGallery />
        <Contact />
      </PageLayout>
    </div>
  )
}
