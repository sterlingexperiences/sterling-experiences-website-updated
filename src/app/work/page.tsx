import { PageLayout } from "@/components/layout/PageLayout"
import WorkHeader from "@/components/work/WorkHeader"
import OurAchievements from "@/components/work/OurAchievements"
import WhatWeOffer from "@/components/work/WhatWeOffer"
import OurPortfolio from "@/components/work/OurPortfolio"
import Contact from "@/components/home/Contact"

export default function WorkPage() {
  return (
    <div className="bg-secondary">
      <WorkHeader />
      <PageLayout>
        <OurAchievements />
        <WhatWeOffer />
        <OurPortfolio />
        <Contact />
      </PageLayout>
    </div>
  )
}
