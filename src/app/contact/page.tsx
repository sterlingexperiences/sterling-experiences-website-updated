import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout"
import Header from "@/components/contact/Header"
import Info from "@/components/contact/Info"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Sterling Experiences. Book a free consultation, send an enquiry, or connect with us on social media.",
};

export default function ContactPage() {
  return (
    <div className="bg-secondary">
      <Header />
      <PageLayout>
        <Info />
      </PageLayout>
    </div>
  )
}
