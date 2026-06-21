import { PageLayout } from "@/components/layout/PageLayout"
import Header from "@/components/insight/Header"
import InsightContent from "@/components/insight/InsightContent"
import Contact from "@/components/home/Contact"

export default function InsightPage() {
  return (
    <div className="bg-secondary">
      <Header />
      <PageLayout>
        <InsightContent />
        <Contact />
      </PageLayout>
    </div>
  )
}
