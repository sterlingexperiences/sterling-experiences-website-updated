import { PageLayout } from "@/components/layout/PageLayout"
import Header from "@/components/portfolio/Header"
import PastEvents from "@/components/portfolio/PastEvents"
import Contact from "@/components/home/Contact"

export default function PortfolioPage() {
  return (
    <div className="bg-secondary">
      <Header />
      <PageLayout>
        <PastEvents />
        <Contact />
      </PageLayout>
    </div>
  )
}
