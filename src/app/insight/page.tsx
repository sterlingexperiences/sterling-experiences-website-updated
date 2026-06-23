import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout"
import Header from "@/components/insight/Header"
import InsightContent from "@/components/insight/InsightContent"

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Perspectives on events, operations, and guest experience. Sterling Experiences shares insights from real-world event execution and operational coordination.",
};

export default function InsightPage() {
  return (
    <div className="bg-secondary">
      <Header />
      <PageLayout>
        <InsightContent />
      </PageLayout>
    </div>
  )
}
