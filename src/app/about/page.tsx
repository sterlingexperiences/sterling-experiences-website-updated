import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import Header from "@/components/about/Header";
import StorySection from "@/components/about/StorySection";
import OurApproach from "@/components/about/OurApproach";
import MeetTheFounder from "@/components/about/MeetTheFounder";
import MissionVision from "@/components/about/MissionVision";
import CoreValues from "@/components/about/CoreValues";
export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Sterling Experiences. Our mission to set the standard for how Africa gathers through precision-designed events and operational excellence.",
};

export default function AboutPage() {
  return (
    <div className="bg-secondary">
      <Header />
      <PageLayout>
        <StorySection />
        <OurApproach />
        <MeetTheFounder />
        <MissionVision />
        <CoreValues />
      </PageLayout>
    </div>
  );
}
