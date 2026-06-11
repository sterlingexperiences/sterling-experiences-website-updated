import { PageLayout } from "@/components/layout/PageLayout"
import Header from "@/components/contact/Header"
import Info from "@/components/contact/Info"
import Contact from "@/components/home/Contact"

export default function ContactPage() {
  return (
    <div className="bg-secondary">
      <Header />
      <PageLayout>
        <Info />
        <Contact />
      </PageLayout>
    </div>
  )
}
