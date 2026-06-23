import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout"
import Header from "@/components/services/Header"
import WhatWeDo from "@/components/services/WhatWeDo"

export const metadata: Metadata = {
  title: "Services",
  description:
    "Event production, decor and styling, staffing, operations, and logistics under one operational standard. Sterling Experiences delivers premium event execution across Nigeria.",
};

export default function ServicesPage() {
  return (
    <div className="bg-secondary">
      <Header />
      <PageLayout>
        <WhatWeDo />
      </PageLayout>
    </div>
  )
}
