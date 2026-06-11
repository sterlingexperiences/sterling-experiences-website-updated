import { PageLayout } from "@/components/layout/PageLayout"
import Header from "@/components/services/Header"
import WhatWeDo from "@/components/services/WhatWeDo"
import Contact from "@/components/home/Contact"

export default function ServicesPage() {
  return (
    <div className="bg-secondary">
      <Header />
      <PageLayout>
        <WhatWeDo />
        <Contact />
      </PageLayout>
    </div>
  )
}
