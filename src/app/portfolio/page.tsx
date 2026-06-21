import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout"
import Header from "@/components/portfolio/Header"
import PastEvents from "@/components/portfolio/PastEvents"
import Contact from "@/components/home/Contact"

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore past events produced by Sterling Experiences. Corporate conferences, brand activations, social celebrations, and destination events.",
};

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
