import Hero from "@/components/home/Hero"
import MarqueeTape from "@/components/home/MarqueeTape"
import Testimonials from "@/components/home/Testimonials"
import { PageLayout } from "@/components/layout/PageLayout"
import FromFunfairs from "@/components/home/FromFunfairs"
import OurExpertise from "@/components/home/OurExpertise"
import EventStaffing from "@/components/home/EventStaffing"
import Portfolio from "@/components/home/Portfolio"
import Contact from "@/components/home/Contact"

export default function Home() {
  return (
    <div className="bg-secondary">
      <PageLayout>
        <Hero />
      </PageLayout>
      <MarqueeTape />
      <Testimonials />
      <PageLayout>
        <FromFunfairs />
        <OurExpertise />
        <EventStaffing />
        <Portfolio />
        <Contact />
      </PageLayout>
    </div>
  )
}
